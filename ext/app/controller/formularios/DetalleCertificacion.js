Ext.define('ibmetrodta.controller.formularios.DetalleCertificacion', {
    extend: 'ibmetrodta.controller.Base',
    boolDetalleCertificacionEdit: 0,
    accionTerminada: 0,
    boolMuestraBotones: true,
    stores: [
        'formularios.DetalleCertificacion'
    ],
    views: [
        'formularios.DetalleCertificacion.Lista',
        'formularios.DetalleCertificacion.edit.DetalleCertificacionForm',
        'formularios.DetalleCertificacion.edit.Window'
    ],
    refs: [
        {
            ref: 'DetalleCertificacionLista',
            selector: '[xtype=formularios.detallecertificacion.lista]'
        },
        {
            ref: 'DetalleCertificacionWindow',
            selector: '[xtype=formularios.detallecertificacion.edit.window]'
        },
        {
            ref: 'DetalleCertificacionForm',
            selector: '[xtype=formularios.detallecertificacion.edit.detallecertificacionform]'
        },
        {
            ref: 'DetalleCertificacionWindow2',
            selector: '[xtype=formularios.detallecertificacion.edit.detallecertificacionwindow]'
        },
        {
            ref: 'DetalleCertificacionInfoTab',
            selector: '[xtype=formularios.detallecertificacion.edit.tab.info]'
        },
        {
            ref: 'DetalleCertificacionSearchWindow',
            selector: '[xtype=formularios.detallecertificacion.search.window]'
        },
        {
            ref: 'DetalleCertificacionSearchForm',
            selector: '[xtype=formularios.detallecertificacion.search.form]'
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
                'grid[xtype=formularios.detallecertificacion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios.detallecertificacion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios.detallecertificacion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=formularios.detallecertificacion.lista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=formularios.detallecertificacion.lista] button#descargaForm': {
                    click: this.descargaForm
                },
                'window[xtype=formularios.detallecertificacion.edit.detallecertificacionwindow] button#save': {
                    click: this.save
                },
                'window[xtype=formularios.detallecertificacion.edit.detallecertificacionwindow] button#cancel': {
                    click: this.close
                },
                'grid[xtype=formularios.detallecertificacion.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=formularios.detallecertificacion.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=formularios.detallecertificacion.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=formularios.detallecertificacion.search.window] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    descargaForm: function () {
        var me = this,
                grid = me.getDetalleCertificacionLista(),
                selected = grid.getSelectionModel().getSelection();

        if (selected.length === 1)
        {
            var rec = selected[0],
                    data = rec.getData(), 
                    src, 
                    obj;
            
            obj = {
                url: ibmetrodta.app.globals.globalServerPath + 'reporte/pdfForm057',
                params: {
                    id_detalle_certificacion: data['id_detalle_certificacion']
                }
            };
            
            src = obj.url + (obj.params ? '?' + Ext.urlEncode(obj.params) : '');
            
            Ext.core.DomHelper.append(document.body, {
                tag : 'iframe',
                id : 'downloadIframe',
                frameBorder : 0,
                width : 0,
                height : 0,
                css : 'display:none;visibility:hidden;height:0px;',
                src : src
            });
        }
        else
        {
            console.log('Error al generar el reporte');
        }
    },
    
    
    clearSearch: function( button, e, eOpts ) {
        var me = this,
            grid = me.getDetalleCertificacionLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getDetalleCertificacionSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'formularios.detallecertificacion.search.window', {
                title: 'Buscar Formulario FORM-057'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getDetalleCertificacionSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getDetalleCertificacionLista(),
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
        var grid = me.getDetalleCertificacionLista();
        var records = grid.getSelectionModel().getSelection();

        var botonAdd = grid.down("[xtype='toolbar'] button#add");
        var botonEdit = grid.down("[xtype='toolbar'] button#edit");
        var botonDelete = grid.down("[xtype='toolbar'] button#delete");

        if ( me.accionTerminada == 0 && me.boolMuestraBotones == true )
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
                store = grid.getStore(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        store.clearFilter(true);
        store.filter( 'fk_id_peticion', dataPeticion.id_peticion );
    },


    edit: function(view, record, item, index, e, eOpts) {
    	
        var me = this,
                grid = me.getDetalleCertificacionLista();
        me.boolDetalleCertificacionEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.formularios.DetalleCertificacion');

        me.boolDetalleCertificacionEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getDetalleCertificacionLista(),
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
                Ext.getBody().mask('Guardando Formulario FORM-057 ...');
                // if new record...
                if (record.phantom) {
                    // reject any other changes
                    store.rejectChanges();
                    // add the new record
                    store.add(record);
                }

                store.sync(callbacks);

                grid.getSelectionModel().clearSelections();
                //recordFamilia.set('familia_metodo_planificacion_familiar', fmpf_original);
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

        var grid = me.getDetalleCertificacionLista();
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
                win = me.getDetalleCertificacionWindow2(),
                isNew = record.phantom;
        
        

        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('formularios.detallecertificacion.edit.detallecertificacionwindow', {
                title: isNew ? 'Añadir Formulario FORM-057' : 'Editar Formulario FORM-057'
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