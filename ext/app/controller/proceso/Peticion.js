Ext.define('ibmetrodta.controller.proceso.Peticion', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'proceso.Peticion',
        'opciones.CodigoPeticion'
    ],
    views: [
        'proceso.Peticion.Lista',
        'proceso.Peticion.edit.Form',
        'proceso.Peticion.edit.Window'
    ],
    refs: [
        {
            ref: 'PeticionLista',
            selector: '[xtype=proceso.peticion.lista]'
        },
        {
            ref: 'PeticionWindow',
            selector: '[xtype=proceso.peticion.edit.window]'
        },
        {
            ref: 'PeticionWindowTramite',
            selector: '[xtype=proceso.peticion.edit.windowpeticion]'
        },
        {
            ref: 'PeticionCodigoTramiteField',
            selector: '[xtype=proceso.peticion.edit.peticionform] button#creaCodigoPeticion'
        },
        {
            ref: 'PeticionCodigoTramiteField2',
            selector: '[xtype=proceso.peticion.edit.peticionform] combo#fk_id_codigo_peticion'
        },
        {
            ref: 'OecLista',
            selector: '[xtype=oec.oec.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                /////////////////////////////////////////////
                // [INICIO] Peticion
                /////////////////////////////////////////////
                'grid[xtype=oec.oec.lista] button#tramite': {
                    click: this.showEditWindow
                },
                'grid[xtype=proceso.peticion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.editTramite,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.peticion.lista] button#add': {
                    click: this.addTramite
                },
                'grid[xtype=proceso.peticion.lista] button#edit': {
                    click: this.editTramite
                },
                'grid[xtype=proceso.peticion.lista] button#delete': {
                    click: this.deleteTramite
                },
                'window[xtype=proceso.peticion.edit.windowpeticion] button#save': {
                    click: this.save
                },
                'window[xtype=proceso.peticion.edit.windowpeticion] button#cancel': {
                    click: this.close
                },
                '[xtype=proceso.peticion.edit.peticionform] button#creaCodigoPeticion': {
                    click: this.generaCodigoTramite
                }/*,
                '[xtype=proceso.peticion.edit.peticionform]': {
                    afterrender: this.configuraComboCodigo
                }*/
                /////////////////////////////////////////////
                // [FIN] Peticion
                /////////////////////////////////////////////
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    /*
     *  No Borrar, esto configura el botón para generar nuevos 
     *  códigos de trámite, se habilitará cuando ya no se utilice
     *  el codigo_temporal.
     * 
     * configuraComboCodigo: function () {
        var me = this,
                combo = me.getPeticionCodigoTramiteField2(),
                store = combo.getStore(),
                grid = me.getOecLista(),
                selected = grid.getSelectionModel().getSelection(),
                record, data;
        
        if ( selected.length === 1 )
        {
            record = selected[0];
            data = record.getData();

            store.clearFilter(true);
            store.filter( 'fk_id_oec', data['id_oec'] );
        }
        else
        {
            console.log('Error al identificar a la OEC.');
        }
    },*/
    
    
    generaCodigoTramite: function () {
        var me = this,
                grid = me.getOecLista(),
                recSeleccionados = grid.getSelectionModel().getSelection(),
                record, data;

        if ( recSeleccionados.length === 1 )
        {
            record = recSeleccionados[0];
            data = record.getData();
            
            Ext.data.JsonP.request({
                url: ibmetrodta.app.globals.globalServerPath + 'codigopeticion010404/create',
                params: {
                    fk_id_oec: data['id_oec']
                },
                success: function (response, options) {
                    var codPeticion = response.registros.codigo_peticion,
                            idPeticion = response.registros.id_codigo_peticion;

                    Ext.Msg.alert('Nuevo Código de Trámite', 'El nuevo código de trámite es: ' + codPeticion);
                    
                    var comboTramite = me.getPeticionCodigoTramiteField2(),
                            tramiteStore = comboTramite.getStore();
                    
                    tramiteStore.load();
                    
                    comboTramite.setValue(idPeticion);
                },
                failure: function (response, options) {
                    Ext.Msg.alert('Atención', 'Un error ocurrió durante su petición. Por favor intente nuevamente.');
                }
            });
        }
    },


    loadRecords: function(grid, eOpts) {
        var me = this,
                store = grid.getStore();
        // clear any fliters that have been applied
        store.clearFilter(true);
        
        var grid2 = me.getOecLista();
        var record = grid2.getSelectionModel().getSelection()[0];
        var data = record.getData();
        
        store.filter( "fk_id_oec", data['id_oec'] );
    },


    editTramite: function(view, record, item, index, e, eOpts) {
        var me = this;

        var grid = me.getPeticionLista();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show window
        me.showEditWindowTramite(record);
    },

    
    add: function( view, record, item, index, e, eOpts ) {
        var me = this;
        
        var grid = me.getOecLista();
        var record = grid.getSelectionModel().getSelection()[0];

        // show window
        me.showEditWindow(record);
    },
    
    
    addTramite: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.proceso.Peticion');

        // show window
        me.showEditWindowTramite(record);
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getPeticionLista();
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


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getPeticionLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        if ( !form.isValid() )
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
        else
        {
            var gridOec = me.getOecLista();
            var recordOec = gridOec.getSelectionModel().getSelection()[0];
            var dataOec = recordOec.getData();

            values['fk_id_oec'] = dataOec['id_oec'];
            values['necesidad_comite_peticion'] = 'NULL';
            values['estado_peticion'] = '1';

            record.set(values);

            if (!record.dirty) {
                win.close();
                return;
            }

            callbacks = {
                success: function(records, operation) {
                    store.reload();
                    win.close();
                },
                failure: function(records, operation) {
                    // if failure, reject changes in store
                    store.rejectChanges();
                }
            };
            // mask to prevent extra submits
            Ext.getBody().mask('Guardando Trámite ...');

            // if new record...
            if (record.phantom) {
                // reject any other changes
                store.rejectChanges();
                // add the new record
                store.add(record);
            }

            // persist the record
            store.sync(callbacks);
        }
    },


    close: function(button, e, eOpts) {
        var me = this,
                win = button.up('window');
        // close the window
        win.close();
    },


    deleteTramite: function() {
        var me = this;

        var grid = me.getPeticionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm('Atención', '¿Esta seguro que desea eliminar este Trámite?. Esta acción no puede ser deshecha. Advertencia: Esta acción eliminará todos los datos relacionados a este trámite (archivos, formularios, etc.)', function(buttonId, text, opt) {
            if (buttonId === 'yes') {
                store.remove(record);
                store.sync({
                    failure: function(records, operation) {
                        store.rejectChanges();
                    }
                });
            }
        });
    },


    showEditWindow: function(record) {
        var me = this,
                win = me.getPeticionWindow();
        
        if (!win) {
            win = Ext.widget('proceso.peticion.edit.window', {
                title: 'Trámite'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
 
 
    showEditWindowTramite: function(record) {
        var me = this,
                win = me.getPeticionWindowTramite(),
                isNew = record.phantom;

        if (!win) {
            win = Ext.widget('proceso.peticion.edit.windowpeticion', {
                title: isNew ? 'Añadir Trámite' : 'Editar Trámite'
            });
        }
        // show window
        win.show();

        // load form with data
        win.down('form').loadRecord(record);
        win.doComponentLayout();
    }
});