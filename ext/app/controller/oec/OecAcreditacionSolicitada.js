Ext.define('ibmetrodta.controller.oec.OecAcreditacionSolicitada', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'oec.OecAcreditacionSolicitada'
    ],
    views: [
        'oec.Oec.OecAcreditacionSolicitadaLista',
        'oec.Oec.edit.OecAcreditacionSolicitadaForm',
        'oec.Oec.edit.OecAcreditacionSolicitadaWindow'
    ],
    refs: [
        {
            ref: 'OecAcreditacionSolicitadaLista',
            selector: '[xtype=oec.oec.oecacreditacionsolicitadalista]'
        },
        {
            ref: 'OecAcreditacionSolicitadaWindow',
            selector: '[xtype=oec.oec.edit.oecacreditacionsolicitadawindow]'
        },
        {
            ref: 'OecAcreditacionSolicitadaForm',
            selector: '[xtype=oec.oec.edit.oecacreditacionsolicitadaform]'
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
                'grid[xtype=oec.oec.oecacreditacionsolicitadalista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=oec.oec.oecacreditacionsolicitadalista] button#add': {
                    click: this.add
                },
                'grid[xtype=oec.oec.oecacreditacionsolicitadalista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=oec.oec.oecacreditacionsolicitadalista] button#delete': {
                    click: this.remove
                },
                'window[xtype=oec.oec.edit.oecacreditacionsolicitadawindow] button#save': {
                    click: this.save
                },
                'window[xtype=oec.oec.edit.oecacreditacionsolicitadawindow] button#cancel': {
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
                storeOECAcreditacionSolicitada = grid.getStore(),
                contOec = me.getController('oec.Oec'),
                gridOEC = (contOec.boolDesdeTramite === 0) ? me.getOecLista() : me.getTramiteOecLista();

        
        if ( contOec.boolOecEdit === 1)
        {
            var selected = gridOEC.getSelectionModel().getSelection();

            if ( selected.length === 1 )
            {
                var record = selected[0];
                var data = record.getData();
                
                storeOECAcreditacionSolicitada.clearFilter(true);
                storeOECAcreditacionSolicitada.filter( 'fk_id_oec', data['id_oec'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getOecAcreditacionSolicitadaLista();
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

        var grid = me.getOecAcreditacionSolicitadaLista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.oec.OecAcreditacionSolicitada'),
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
                console.log('[OecAcreditacionSolicitada] Error al recuperar el ID de la oec');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getOecAcreditacionSolicitadaLista(),
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
        var grid = me.getOecAcreditacionSolicitadaLista();
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
                    msg: '¿Esta seguro que desea eliminar esta Acreditación Solicitada?. Esta acción no puede ser deshecha.',
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
                win = me.getOecAcreditacionSolicitadaWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('oec.oec.edit.oecacreditacionsolicitadawindow', {
                title: isNew ? 'Añadir Acreditación Solicitada' : 'Editar Acreditación Solicitada'
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
                grid = me.getOecAcreditacionSolicitadaLista(),
                store = grid.getStore();
        
        store.sync();
    }
});