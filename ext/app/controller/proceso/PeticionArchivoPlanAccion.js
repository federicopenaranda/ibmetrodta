Ext.define('ibmetrodta.controller.proceso.PeticionArchivoPlanAccion', {
    extend: 'ibmetrodta.controller.Base',
    boolPeticionArchivoPlanAccionEdit: 0,
    estadoActual: 'carga-formularios-adicionales-finalizada',
    stores: [
        'proceso.PeticionArchivo'
    ],
    views: [
        'proceso.PeticionArchivoPlanAccion.Lista',
        'proceso.PeticionArchivoPlanAccion.edit.PeticionArchivoPlanAccionForm',
        'proceso.PeticionArchivoPlanAccion.edit.PeticionArchivoPlanAccionWindow'
    ],
    refs: [
        {
            ref: 'PeticionArchivoPlanAccionLista',
            selector: '[xtype=proceso.peticionarchivoplanaccion.lista]'
        },
        {
            ref: 'PeticionArchivoPlanAccionWindow',
            selector: '[xtype=proceso.peticionarchivoplanaccion.edit.peticionarchivoplanaccionwindow]'
        },
        {
            ref: 'PeticionArchivoPlanAccionForm',
            selector: '[xtype=proceso.peticionarchivoplanaccion.edit.peticionarchivoplanaccionform]'
        },
        {
            ref: 'PeticionArchivoPlanAccionInfoTab',
            selector: '[xtype=proceso.peticionarchivoplanaccion.edit.tab.info]'
        },
        {
            ref: 'PeticionArchivoPlanAccionSearchWindow',
            selector: '[xtype=proceso.peticionarchivoplanaccion.search.window]'
        },
        {
            ref: 'PeticionArchivoPlanAccionSearchForm',
            selector: '[xtype=proceso.peticionarchivoplanaccion.search.form]'
        },
        
        {
            ref: 'FormPeticionArchivoPlanAccion',
            selector: 'panel[xtype=proceso.peticionarchivoplanaccion.edit.tab.info] form#formPlanAccion'
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
            ref: 'TramiteForm',
            selector: '[xtype=tramite.tramite.edit.form]'
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
                'grid[xtype=proceso.peticionarchivoplanaccion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.peticionarchivoplanaccion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=proceso.peticionarchivoplanaccion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=proceso.peticionarchivoplanaccion.lista] button#delete': {
                    click: this.remove
                },
                'panel[xtype=proceso.peticionarchivoplanaccion.edit.tab.info] button#btnCargaPlanAccion': {
                    click: this.upload
                },
                'window[xtype=proceso.peticionarchivoplanaccion.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=proceso.peticionarchivoplanaccion.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=proceso.peticionarchivoplanaccion.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=proceso.peticionarchivoplanaccion.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=proceso.peticionarchivoplanaccion.search.window] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    clearSearch: function( button, e, eOpts ) {
        var me = this,
            grid = me.getPeticionArchivoPlanAccionLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },


    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getPeticionArchivoPlanAccionSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'proceso.peticionarchivoplanaccion.search.window', {
                title: 'Buscar PeticionArchivoPlanAccion'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },


    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getPeticionArchivoPlanAccionSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getPeticionArchivoPlanAccionLista(),
            store = grid.getStore(),
            values = form.getValues(),
            filters=[];
        // loop over values to create filters
        Ext.Object.each( values, function( key, value, myself ) {
            if( !Ext.isEmpty( value ) ) {
                filters.push({
                    property: key,
                    value: value
                });
            }
        });
        // clear store filters
        store.clearFilter( true );
        store.filter( filters );
        // close window
        win.hide();
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getPeticionArchivoPlanAccionLista();
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


    loadRecords: function(grid, eOpts) {
        var me = this,
                store = grid.getStore(),
                filters = [],
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        store.clearFilter(true);

        filters.push({
            property: 'fk_id_peticion',
            value: dataPeticion.id_peticion
        });

        filters.push({
            property: 'nombre_estado',
            value: me.estadoActual
        });
        
        filters.push({
            property: 'nombre_accion',
            value: 'carga-archivo-plan-accion'
        });
        
        store.filter(filters);
    },


    edit: function(view, record, item, index, e, eOpts) {
        var me = this,
                grid = me.getPeticionArchivoPlanAccionLista();
                me.boolPeticionArchivoPlanAccionEdit = 1,
                record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.proceso.PeticionArchivo');
        
        me.boolPeticionArchivoPlanAccionEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },
    
    
    upload: function (button, event) {
        console.log('upload');
        var me = this,
                form = me.getFormPeticionArchivoPlanAccion(),
                field = form.down('#fileArchivoPlanAccion'),
                value = field.getValue(),
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                grid = me.getPeticionArchivoPlanAccionLista(),
                store = grid.getStore();

        if ( value === '' )
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo de Plan de Acción.');
            return;
        }
        else
        {
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Archivo de Plan de Acción ...',
                success: function (f, a) {
                    console.log('success');
                    var json = Ext.decode(a.response.responseText),
                            extra;
                    
                    extra = '{"id_peticion_archivo":' + 'null' + ',' + 
                            '"fk_id_peticion_estado":' + 'null' + ',' + 
                            '"fk_id_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"fk_id_accion":' + 'null' + ',' + 
                            '"codigo_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"nombre_peticion_archivo":' + '"' + json.msg.registros + '",' + 
                            '"version_peticion_archivo":' + 'null' + ',' + 
                            '"activo_peticion_archivo":' + '1' + ',' + 
                            '"descripcion_peticion_archivo":' + '"carga-archivo-plan-accion"' + ',' + 
                            '"tipo_peticion_archivo":' + 'null' + ',' + 
                            '"estado_peticion_archivo":' + '"c"' + ',' + 
                            '"adicional_peticion_archivo":' + '0' + ',' + 
                            '"escaneado_peticion_archivo":' + 'null' + ',' + 
                            '"fecha_creacion_peticion_archivo":' + 'null' + '}';

                    Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/createPeticionArchivo',
                        params: {
                           id_peticion: dataPeticion.id_peticion,
                           nombre_estado: me.estadoActual,
                           nombre_accion: 'carga-archivo-plan-accion',
                           records: extra
                        },
                        success: function (response, options) {
                            console.log('success request');
                            var win = button.up('window');
                            console.log(win);
                            store.reload();
                            win.close();
                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
                        }
                    });
                },
                failure: function (f, a) {
                    console.log('failure');
                    return;
                }
            });
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getPeticionArchivoPlanAccionLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            record.set(values);

            if (record.dirty) {

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
                Ext.getBody().mask('Guardando Archivo ...');
                // if new record...
                if (record.phantom) {
                    // reject any other changes
                    store.rejectChanges();
                    // add the new record
                    store.add(record);
                }

                store.sync(callbacks);

                grid.getSelectionModel().clearSelections();
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

        var grid = me.getPeticionArchivoPlanAccionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar este Archivo de Plan de Acción?. Esta acción no puede ser deshecha.',
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
                win = me.getPeticionArchivoPlanAccionWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('proceso.peticionarchivoplanaccion.edit.peticionarchivoplanaccionwindow', {
                title: isNew ? 'Añadir Archivo de Plan de Acción' : 'Editar Archivo de Plan de Acción'
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