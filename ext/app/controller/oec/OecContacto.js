Ext.define('ibmetrodta.controller.oec.OecContacto', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'oec.OecContacto'
    ],
    views: [
        'oec.Oec.OecContactoLista',
        'oec.Oec.edit.OecContactoForm',
        'oec.Oec.edit.OecContactoWindow'
    ],
    refs: [
        {
            ref: 'OecContactoLista',
            selector: '[xtype=oec.oec.oeccontactolista]'
        },
        {
            ref: 'OecContactoWindow',
            selector: '[xtype=oec.oec.edit.oeccontactowindow]'
        },
        {
            ref: 'OecContactoForm',
            selector: '[xtype=oec.oec.edit.oeccontactoform]'
        },
        {
            ref: 'OecLista',
            selector: '[xtype=oec.oec.lista]'
        },
        {
            ref: 'TramiteOecLista',
            selector: '[xtype=tramite.tramite.listaoec]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=oec.oec.oeccontactolista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=oec.oec.oeccontactolista] button#add': {
                    click: this.add
                },
                'grid[xtype=oec.oec.oeccontactolista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=oec.oec.oeccontactolista] button#delete': {
                    click: this.remove
                },
                'window[xtype=oec.oec.edit.oeccontactowindow] button#save': {
                    click: this.save
                },
                'window[xtype=oec.oec.edit.oeccontactowindow] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var me = this,
                storeOECContactos = grid.getStore(),
                contOec = me.getController('oec.Oec'),
                gridOEC = (contOec.boolDesdeTramite === 0) ? me.getOecLista() : me.getTramiteOecLista();

        
        if ( contOec.boolOecEdit === 1)
        {
            var selected = gridOEC.getSelectionModel().getSelection();

            if ( selected.length === 1 )
            {
                var record = selected[0];
                var data = record.getData();
                
                storeOECContactos.clearFilter(true);
                storeOECContactos.filter( 'fk_id_oec', data['id_oec'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getOecContactoLista();
        var records = grid.getSelectionModel().getSelection();

        var botonEdit = grid.down("[xtype='toolbar'] button#edit");
        var botonDelete = grid.down("[xtype='toolbar'] button#delete");

        if (records.length > 0)
        {
            botonEdit.enable();
            botonDelete.enable();
        }
        else
        {
            botonEdit.disable();
            botonDelete.disable();
        }
    },


    cancel: function(editor, context, eOpts) {
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    },


    edit: function(records, index, node, eOpts) {
        var me = this;

        var grid = me.getOecContactoLista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.oec.OecContacto'),
            contOec = me.getController('oec.Oec');
        
        var grid1 = (contOec.boolDesdeTramite === 0) ? me.getOecLista() : me.getTramiteOecLista();

        console.log(contOec.boolDesdeTramite );
        console.log(grid1);

        var recSeleccionados = grid1.getSelectionModel().getSelection();

        if ( recSeleccionados.length === 1 && contOec.boolOecEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_oec', data1['id_oec']);

            me.showEditWindow(record);
        }
        else
        {
            if ( contOec.boolOecEdit === 0 )
            {
                me.showEditWindow(record);
            }
            else
            {
                console.log('[OecContacto] Error al recuperar el ID de la oec');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getOecContactoLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        record.set(values);

        if (!record.dirty) {
            win.close();
            return;
        }

        if ( form.isValid() )
        {
            var rowIndex = store.indexOf(record);
            ( rowIndex === -1 ) ? store.add(record) : form.updateRecord(record);
            me.sincronizar();

            win.close();
        }
        else
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
    },
            

    close: function(button, e, eOpts) {
        var me = this,
                win = button.up('window');
        // close the window
        win.close();
    },


    remove: function() {
        var me = this;
        var grid = me.getOecContactoLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];

        var contOec = me.getController('oec.Oec');

        // Se esta eliminando un registro del grid de Estado Civil
        // pero de un beneficiario nuevo. Solo se quita del store.
        if ( contOec.boolOecEdit === 0 )
        {
            store.remove(record);
        }
        // Se esta eliminando un registro del grid de Estado Civil
        // pero de un beneficiario ya creado. Si es un registro recién creado (phantom == true)
        // solo se quita del store. Si no es un registro recién creado se lo quita del store
        // y de la base de datos (sync).
        else
        {
            if ( record.phantom )
            {
                store.remove(record);
            }
            else
            {
                Ext.Msg.confirm({
                    title: 'Atención',
                    msg: '¿Esta seguro que desea eliminar este oeccontacto?. Esta acción no puede ser deshecha.',
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(buttonId, text, opt) 
                    {
                        if (buttonId === 'yes') {
                            store.remove(record);
                        }
                    }
                });
            }
        }
    },


    showEditWindow: function(record) {
        var me = this,
                win = me.getOecContactoWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('oec.oec.edit.oeccontactowindow', {
                title: isNew ? 'Añadir Contacto' : 'Editar Contacto'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
        // load form with data
        win.down('form').loadRecord(record);
    },


    sincronizar: function() {
        var me = this,
                grid = me.getOecContactoLista(),
                store = grid.getStore();
        
        store.sync();
    }
});