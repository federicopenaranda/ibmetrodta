Ext.define('ibmetrodta.controller.proceso.PeticionArchivo', {
    extend: 'ibmetrodta.controller.Base',
    boolPeticionArchivoEdit: 0,
    filtro: '',
    nombreAccion: '',
    nombreEstado: '',
    codigoTipoArchivo: '',
    tipoAdicional: 0,
    accionTerminada: 0,
    tbPeticionArchivo: 0,
    stores: [
        'proceso.PeticionArchivo'
    ],
    views: [
        'proceso.PeticionArchivo.Lista',
        'proceso.PeticionArchivo.edit.PeticionArchivoForm',
        'proceso.PeticionArchivo.edit.PeticionArchivoWindow',
        'proceso.PeticionArchivo.edit.Window'
    ],
    refs: [
        {
            ref: 'PeticionArchivoLista',
            selector: '[xtype=proceso.peticionarchivo.lista]'
        },
        {
            ref: 'PeticionArchivoWindow',
            selector: '[xtype=proceso.peticionarchivo.edit.peticionarchivowindow]'
        },
        {
            ref: 'PeticionArchivoForm',
            selector: '[xtype=proceso.peticionarchivo.edit.peticionarchivoform]'
        },
        {
            ref: 'PeticionArchivoWindow2',
            selector: '[xtype=proceso.peticionarchivo.edit.window]'
        },
        {
            ref: 'PeticionArchivoInfoTab',
            selector: '[xtype=proceso.peticionarchivo.edit.tab.info]'
        },
        {
            ref: 'PeticionArchivoSearchWindow',
            selector: '[xtype=proceso.peticionarchivo.search.window]'
        },
        {
            ref: 'PeticionArchivoSearchForm',
            selector: '[xtype=proceso.peticionarchivo.search.form]'
        },
        {
            ref: 'FormPeticionArchivo',
            selector: '[xtype=proceso.peticionarchivo.edit.peticionarchivoform]'
        },
        {
            ref: 'PeticionArchivoToolbar',
            selector: '#tbPeticionArchivo'
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
                'grid[xtype=proceso.peticionarchivo.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.peticionarchivo.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=proceso.peticionarchivo.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=proceso.peticionarchivo.lista] button#delete': {
                    click: this.remove
                },
                '[xtype=proceso.peticionarchivo.edit.peticionarchivowindow] button#save': {
                    click: this.upload
                },
                '[xtype=proceso.peticionarchivo.edit.peticionarchivowindow] button#cancel': {
                    click: this.close
                },
                /*'[xtype=proceso.peticionarchivo.edit.tab.info] #filePeticionArchivo': {
                    click: this.upload
                },*/
                'window[xtype=proceso.peticionarchivo.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=proceso.peticionarchivo.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=proceso.peticionarchivo.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=proceso.peticionarchivo.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=proceso.peticionarchivo.search.window] button#cancel': {
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
            grid = me.getPeticionArchivoLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },


    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getPeticionArchivoSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'proceso.peticionarchivo.search.window', {
                title: 'Buscar Archivo'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },


    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getPeticionArchivoSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getPeticionArchivoLista(),
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
        var grid = me.getPeticionArchivoLista();
        var records = grid.getSelectionModel().getSelection();

        var botonAdd = grid.down("[xtype='toolbar'] button#add");
        //var botonEdit = grid.down("[xtype='toolbar'] button#edit");
        var botonDelete = grid.down("[xtype='toolbar'] button#delete");
        
        
        if ( me.accionTerminada == 0 )
        {
            botonAdd.show();
            //botonEdit.show();
            botonDelete.show();
            
            if (records.length > 0)
            {
                //botonEdit.enable();
                botonDelete.enable();
            }
            else
            {
                //botonEdit.disable();
                botonDelete.disable();
            }
        }
        else
        {
            botonAdd.hide();
            //botonEdit.hide();
            botonDelete.hide();
        }
        

        
        
        
    },


    loadRecords: function(grid, eOpts) {
        var me = this,
                store = grid.getStore(),
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                tbPeticionArchivoToolbar = me.getPeticionArchivoToolbar(),

                filters = [];
        
        console.log('store.clearFilter(true)');
        store.clearFilter(true);
        
        if ( me.filtro != '' )
        {
            filters.push({property: 'codigo_peticion_archivo_tipo', value: me.filtro});
        }
        
        if ( me.tipoAdicional != '' )
        {
            filters.push({property: 'adicional_peticion_archivo', value: me.tipoAdicional});
        }
        
        if ( me.nombreAccion != '' )
        {
            filters.push({property: 'nombre_accion', value: me.nombreAccion});
        }
        
        filters.push({property: 'fk_id_peticion', value: dataPeticion.id_peticion});
        store.filter(filters);
        
        console.log('me.tbPeticionArchivo');
        console.log(me.tbPeticionArchivo);

        
        if ( me.tbPeticionArchivo == 0 )
        {
            tbPeticionArchivoToolbar.hide();
        }
        else
        {
            tbPeticionArchivoToolbar.show();
        }

        /*var cont6 = me.getController('tramite.Paso6');
        
        if (cont6.accionTerminada == 1)
        {
            me.accionTerminada = 1;
        }
        else
        {
            me.accionTerminada = 0;
        }*/
    },


    edit: function(view, record, item, index, e, eOpts) {
    	
        var me = this,
                grid = me.getPeticionArchivoLista();
        
        me.boolPeticionArchivoEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.proceso.PeticionArchivo');
        
        me.boolPeticionArchivoEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    upload: function (button, event) {
        var me = this,
                form = me.getFormPeticionArchivo(),
                field = form.down('#filePeticionArchivo'),
                value = field.getValue(),
                desc = form.down('#descripcion_peticion_archivo'),
                descValue = desc.getValue(),
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                grid = me.getPeticionArchivoLista(),
                store = grid.getStore();

        if ( value === '' )
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo.');
            return;
        }
        else
        {
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Archivo  ...',
                success: function (f, a) {
                    var json = Ext.decode(a.response.responseText),
                            extra;
                    
                    descValue = (descValue == '') ? me.nombreAccion : descValue;
                    
                    extra = '{"id_peticion_archivo":' + 'null' + ',' + 
                            '"fk_id_peticion_estado":' + 'null' + ',' + 
                            '"fk_id_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"fk_id_accion":' + 'null' + ',' + 
                            '"codigo_peticion_archivo_tipo":"' + me.codigoTipoArchivo + '",' + 
                            '"nombre_peticion_archivo":' + '"' + json.msg.registros + '",' + 
                            '"version_peticion_archivo":' + 'null' + ',' + 
                            '"activo_peticion_archivo":' + '1' + ',' + 
                            '"descripcion_peticion_archivo":"' + descValue + '",' + 
                            '"tipo_peticion_archivo":' + 'null' + ',' + 
                            '"estado_peticion_archivo":' + '"c"' + ',' + 
                            '"adicional_peticion_archivo":' + me.tipoAdicional + ',' + 
                            '"escaneado_peticion_archivo":' + 'null' + ',' + 
                            '"fecha_creacion_peticion_archivo":' + 'null' + '}';

                    Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/createPeticionArchivo',
                        params: {
                           id_peticion: dataPeticion.id_peticion,
                           nombre_estado: me.nombreEstado,
                           nombre_accion: me.nombreAccion,
                           records: extra
                        },
                        success: function (response, options) {
                            var win = button.up('window');
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
                grid = me.getPeticionArchivoLista(),
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

        var grid = me.getPeticionArchivoLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta PeticionArchivo?. Esta acción no puede ser deshecha.',
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
                win = me.getPeticionArchivoWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('proceso.peticionarchivo.edit.peticionarchivowindow', {
                title: isNew ? 'Añadir Archivo' : 'Editar Archivo'
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