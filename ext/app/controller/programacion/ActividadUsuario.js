Ext.define('ibmetrodta.controller.programacion.ActividadUsuario', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'programacion.ActividadUsuario'
    ],
    views: [
        'programacion.ActividadUsuario.Lista',
        'programacion.ActividadUsuario.edit.ActividadUsuarioForm',
        'programacion.ActividadUsuario.edit.Window'
    ],
    refs: [
        {
            ref: 'ActividadUsuarioLista',
            selector: '[xtype=programacion.actividadusuario.lista]'
        },
        {
            ref: 'ActividadUsuarioWindow',
            selector: '[xtype=programacion.actividadusuario.edit.window]'
        },
        {
            ref: 'ActividadUsuarioForm',
            selector: '[xtype=programacion.actividadusuario.edit.actividadusuarioform]'
        },
        {
            ref: 'ActividadLista',
            selector: '[xtype=programacion.actividad.lista]'
        }
    ],
    
    
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=programacion.actividadusuario.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=programacion.actividadusuario.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=programacion.actividadusuario.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=programacion.actividadusuario.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=programacion.actividadusuario.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=programacion.actividadusuario.edit.window] button#cancel': {
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
                storeActividadUsuario = grid.getStore(),
                contActividad = me.getController('programacion.Actividad');
        
        if ( contActividad.boolActividadEdit == 1 )
        {
            var gridActividad = me.getActividadLista(),
                    selected = gridActividad.getSelectionModel().getSelection();

            if ( selected.length === 1 )
            {
                var record = selected[0];
                var data = record.getData();

                storeActividadUsuario.clearFilter(true);
                storeActividadUsuario.filter( 'fk_id_actividad', data['id_actividad'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getActividadUsuarioLista();
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

        var grid = me.getActividadUsuarioLista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.programacion.ActividadUsuario'),
            contActividad = me.getController('programacion.Actividad'),
            recSeleccionados = "";
        
        if ( contActividad.boolActividadEdit === 1 )
        {
            var grid1 = me.getActividadLista();
            var recSeleccionados = grid1.getSelectionModel().getSelection();
        }
        
        if ( recSeleccionados.length === 1 && contActividad.boolActividadEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_actividad', data1['id_actividad']);
            me.showEditWindow(record);
        }
        else
        {
            if ( contActividad.boolActividadEdit === 0 )
            {
                me.showEditWindow(record);
            }
            else
            {
                console.log('[Actividad Usuario] Error al recuperar el ID de la actividad');
                return 'Error';
            }
        }            
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getActividadUsuarioLista(),
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
        var grid = me.getActividadUsuarioLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        var contActividad = me.getController('programacion.Actividad');


        if ( contActividad.boolActividadEdit === 0 )
        {
            store.remove(record);
        }
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
                    msg: '¿Esta seguro que desea eliminar este Usuario de esta Actividad?. Esta acción no puede ser deshecha.',
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
                win = me.getActividadUsuarioWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('programacion.actividadusuario.edit.window', {
                title: isNew ? 'Añadir Usuario' : 'Editar Usuario'
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
                grid = me.getActividadUsuarioLista(),
                store = grid.getStore();
        
        store.sync();
    }
});