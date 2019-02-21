Ext.define('ibmetrodta.controller.proceso.ObsPeticionAccion', {
    extend: 'ibmetrodta.controller.Base',
    boolObsPeticionAccionEdit: 0,
    accion: '',
    estado: '',
    soloLectura: 0,
    accionTerminada: 0,
    stores: [
        'proceso.ObsPeticionAccion'
    ],
    views: [
        'proceso.ObsPeticionAccion.Lista',
        'proceso.ObsPeticionAccion.edit.ObsPeticionAccionForm',
        'proceso.ObsPeticionAccion.edit.Window'
    ],
    refs: [
        {
            ref: 'ObsPeticionAccionLista',
            selector: '[xtype=proceso.obspeticionaccion.lista]'
        },
        {
            ref: 'ObsPeticionAccionWindow',
            selector: '[xtype=proceso.obspeticionaccion.edit.window]'
        },
        {
            ref: 'ObsPeticionAccionForm',
            selector: '[xtype=proceso.obspeticionaccion.edit.obspeticionaccionform]'
        },
        {
            ref: 'ObsPeticionAccionWindow2',
            selector: '[xtype=proceso.obspeticionaccion.edit.obspeticionaccionwindow]'
        },
        {
            ref: 'ObsPeticionAccionInfoTab',
            selector: '[xtype=proceso.obspeticionaccion.edit.tab.info]'
        },
        {
            ref: 'ObsPeticionAccionSearchWindow',
            selector: '[xtype=proceso.obspeticionaccion.search.window]'
        },
        {
            ref: 'ObsPeticionAccionSearchForm',
            selector: '[xtype=proceso.obspeticionaccion.search.form]'
        },
        
        
        
        // Otros
        {
            ref: 'TramiteForm',
            selector: '[xtype=tramite.tramite.edit.form]'
        },
        {
            ref: 'TramiteListaOec',
            selector: '[xtype=tramite.tramite.listaoec]'
        },
        {
            ref: 'TramiteListaPeticion',
            selector: '[xtype=tramite.tramite.listapeticion]'
        },
        {
            ref: 'TramiteAnteriorPasoBoton',
            selector: 'panel[xtype=tramite.tramite.edit.form] > toolbar > button#anteriorPaso'
        },
        {
            ref: 'TramiteSiguientePasoBoton',
            selector: 'panel[xtype=tramite.tramite.edit.form] > toolbar > button#siguientePaso'
        }

    ],
    
    
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=proceso.obspeticionaccion.lista]': {
                    beforerender: this.loadRecords,
                    //itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.obspeticionaccion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=proceso.obspeticionaccion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=proceso.obspeticionaccion.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=proceso.obspeticionaccion.edit.obspeticionaccionwindow] button#save': {
                    click: this.save
                },
                'window[xtype=proceso.obspeticionaccion.edit.obspeticionaccionwindow] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getObsPeticionAccionLista();
        var records = grid.getSelectionModel().getSelection();

        var botonAdd = grid.down("[xtype='toolbar'] button#add");
        var botonEdit = grid.down("[xtype='toolbar'] button#edit");
        var botonDelete = grid.down("[xtype='toolbar'] button#delete");

        if ( me.accionTerminada == 0 && me.soloLectura == 0 )
        {
            botonAdd.show();
            botonEdit.show();
            botonDelete.show();
            
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
        }
        else
        {
            botonAdd.hide();
            botonEdit.hide();
            botonDelete.hide();
        }
    },


    loadRecords: function(grid, eOpts) {
        var me = this,
               
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                filters = [];

        var store = grid.getStore();
        store.clearFilter(true);
        
        filters.push({
            property: 'fk_id_peticion',
            value: dataPeticion.id_peticion
        });

        filters.push({
            property: 'nombre_accion',
            value: me.accion
        });
        
        store.filter(filters);
    },


    edit: function(view, record, item, index, e, eOpts) {
    	
        var me = this,
                grid = me.getObsPeticionAccionLista();
        me.boolObsPeticionAccionEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.proceso.ObsPeticionAccion');

        me.boolObsPeticionAccionEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getObsPeticionAccionLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks,
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        // Valida el formulario
        if ( form.isValid() )
        {
            record.set(values);
            record.set('fk_id_peticion', dataPeticion.id_peticion);
            record.set('nombre_accion', me.accion);

            if (record.dirty) {

                callbacks = {
                    success: function(records, operation) {
                        store.reload();
                        win.close();
                        
                        if (me.accion == 'aprobar-tramite-consejo')
                        {
                            console.log('ejecuta desde opspeticionacccion');
                            var cont1 = me.getController('tramite.Paso19');
                            cont1.configGridConsejo();
                        }
                        
                        if (me.accion == 'aprobacion-pertinencia-consejo')
                        {
                            console.log('ejecuta desde opspeticionacccion');
                            var cont1 = me.getController('tramite.Paso3');
                            cont1.configGridConsejo();
                        }
                    },
                    failure: function(records, operation) {
                        // if failure, reject changes in store
                        store.rejectChanges();
                    }
                };
                // mask to prevent extra submits
                Ext.getBody().mask('Guardando Observación ...');
                // if new record...
                if (record.phantom) {
                    // reject any other changes
                    store.rejectChanges();
                    // add the new record
                    store.add(record);
                }

                store.sync(callbacks);
            }
        }
        else
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
    },
            

    close: function(button, e, eOpts) {
        var win = button.up('window');
        win.close();
    },


    remove: function() {
        var me = this;

        var grid = me.getObsPeticionAccionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar este Formulario?. Esta acción no puede ser deshecha.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(buttonId, text, opt) 
            {
                if (buttonId === 'yes') {
                    store.remove(record);
                    store.sync({
                        failure: function(records, operation) {
                            store.rejectChanges();
                        }
                    });
                }
            }
        });
    },


    showEditWindow: function(record) {
        var me = this,
                win = me.getObsPeticionAccionWindow2(),
                isNew = record.phantom;
        
        

        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('proceso.obspeticionaccion.edit.obspeticionaccionwindow', {
                title: isNew ? 'Añadir Observación' : 'Editar Observación'
            });
        }

        // show window
        win.show();
        win.doComponentLayout();

        // load form with data
        win.down('form').loadRecord(record);
    },


    saveTablaSecundaria: function ( grid ) {
        var store = grid.getStore(),
            records = store.getModifiedRecords();

        // Guarda registros de estado de una xxx nueva
        if (records.length > 0)
        {
            var array = [];

            for (var i = 0; i < records.length; i++) {
                var rec = records[i].getData();
                var tmp = rec;
                array.push(tmp);
            }

            var obj = Ext.encode(array);
            return obj;
        }
        else
        {
            return '';
        }
    },


    cancel: function(editor, context, eOpts) {
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    }
});