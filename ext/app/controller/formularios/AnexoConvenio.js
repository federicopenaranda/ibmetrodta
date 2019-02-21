/*
 * Form-026
 */
Ext.define('ibmetrodta.controller.formularios.AnexoConvenio', {
    extend: 'ibmetrodta.controller.Base',
    accionTerminada: 0,
    boolAnexoConvenioEdit: 0,
    stores: [
        'formularios.AnexoConvenio'
    ],
    views: [
        'formularios.AnexoConvenio.Lista',
        'formularios.AnexoConvenio.edit.AnexoConvenioForm',
        'formularios.AnexoConvenio.edit.Window'
    ],
    refs: [
        {
            ref: 'AnexoConvenioLista',
            selector: '[xtype=formularios.anexoconvenio.lista]'
        },
        {
            ref: 'AlcanceAcreditacionCert2Lista',
            selector: '[xtype=formularios.anexoconvenio.alcanceacreditacioncert2lista]'
        },
        {
            ref: 'AlcanceAcreditacionInsp2Lista',
            selector: '[xtype=formularios.anexoconvenio.alcanceacreditacioninsp2lista]'
        },
        {
            ref: 'AlcanceAcreditacionLab2Lista',
            selector: '[xtype=formularios.anexoconvenio.alcanceacreditacionlab2lista]'
        },
        {
            ref: 'PersonalAutorizadoLista',
            selector: '[xtype=formularios.anexoconvenio.personalautorizadolista]'
        },
        {
            ref: 'AnexoConvenioWindow',
            selector: '[xtype=formularios.anexoconvenio.edit.window]'
        },
        {
            ref: 'AnexoConvenioForm',
            selector: '[xtype=formularios.anexoconvenio.edit.anexoconvenioform]'
        },
        {
            ref: 'AnexoConvenioWindow2',
            selector: '[xtype=formularios.anexoconvenio.edit.anexoconveniowindow]'
        },
        {
            ref: 'AnexoConvenioInfoTab',
            selector: '[xtype=formularios.anexoconvenio.edit.tab.info]'
        },
        {
            ref: 'AnexoConvenioSearchWindow',
            selector: '[xtype=formularios.anexoconvenio.search.window]'
        },
        {
            ref: 'AnexoConvenioSearchForm',
            selector: '[xtype=formularios.anexoconvenio.search.form]'
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
        },
        {
            ref: 'FormAnexo',
            selector: 'panel[xtype=formularios.anexoconvenio.edit.tab.info] form#formAnexo'
        }

    ],
    
    
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=formularios.anexoconvenio.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios.anexoconvenio.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios.anexoconvenio.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=formularios.anexoconvenio.lista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=formularios.anexoconvenio.lista] button#descargaForm': {
                    click: this.descargaForm026
                },
                'window[xtype=formularios.anexoconvenio.edit.anexoconveniowindow] button#save': {
                    //click: this.save
                    click: this.cargaAnexo
                },
                'window[xtype=formularios.anexoconvenio.edit.anexoconveniowindow] button#cancel': {
                    click: this.close
                },
                'grid[xtype=formularios.anexoconvenio.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=formularios.anexoconvenio.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=formularios.anexoconvenio.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=formularios.anexoconvenio.search.window] button#cancel': {
                    click: this.close
                },
                '[xtype=formularios.anexoconvenio.edit.anexoconvenioform] tabpanel#tabsAnexoConvenio': {
                    afterrender: this.configuraTabs
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    configuraTabs: function () {
            var me = this,
                gridOec = me.getTramiteListaOec(),
                recOec = gridOec.getSelectionModel().getSelection()[0],
                dataOec = recOec.getData(),
                win = me.getAnexoConvenioWindow2(),
                tabPanel = win.down('panel').down('panel'),
                tab1 = tabPanel.getTabBar().items.get(1),
                tab2 = tabPanel.getTabBar().items.get(2),
                tab3 = tabPanel.getTabBar().items.get(3);
        
        switch (dataOec.codigo_oec_tipo)
        {
            case 'laboratorio-ensayo':
                tab1.hide();
                tab2.hide();
                break;
            case 'laboratorio-calibracion':
                tab1.hide();
                tab2.hide();
                break;
            case 'organismo-inspeccion':
                tab1.hide();
                tab3.hide();
                break;
            case 'organismo-certificacion':
                tab2.hide();
                tab3.hide();
                break;
        }
                
    },
    
    
    descargaForm026: function () {
        var me = this,
                grid = me.getAnexoConvenioLista(),
                selected = grid.getSelectionModel().getSelection(),
                
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        if (selected.length == 1)
        {
            var rec = selected[0],
                    data = rec.getData(), 
                    src, 
                    obj;
            
            obj = {
                url: ibmetrodta.app.globals.globalServerPath + 'reporte/pdfForm026',
                params: {
                    id_anexo_convenio: data.id_anexo_convenio,
                    codigo_peticion: dataPeticion.codigo_peticion
                }
            };
            
            src = obj.url + (obj.params ? '?' + Ext.urlEncode(obj.params) : '');
            
            console.log(src);
            
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
            grid = me.getAnexoConvenioLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getAnexoConvenioSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'formularios.anexoconvenio.search.window', {
                title: 'Buscar Formulario FORM-026'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getAnexoConvenioSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getAnexoConvenioLista(),
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
        var me = this,
                grid = me.getAnexoConvenioLista(),
                records = grid.getSelectionModel().getSelection(),
                botonEdit = grid.down("[xtype='toolbar'] button#edit"),
                botonDelete = grid.down("[xtype='toolbar'] button#delete");
                //botonReporte = grid.down("[xtype='toolbar'] button#descargaForm");

        if (records.length > 0)
        {
            botonEdit.enable();
            botonDelete.enable();
            //botonReporte.enable();
        }
        else
        {
            botonEdit.disable();
            botonDelete.disable();
            //botonReporte.disable();
        }
    },


    loadRecords: function(grid, eOpts) {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                                
                grid = me.getAnexoConvenioLista(),
                botonAdd = grid.down("[xtype='toolbar'] button#add"),
                botonEdit = grid.down("[xtype='toolbar'] button#edit"),
                botonDelete = grid.down("[xtype='toolbar'] button#delete");

        if ( me.accionTerminada == 1 )
        {
            //tbInformeAcredToolbar.hide();
            botonAdd.hide();
            botonEdit.hide();
            botonDelete.hide();
        }
        else
        {
            //tbInformeAcredToolbar.show();
            botonAdd.show();
            botonEdit.show();
            botonDelete.show();
        }

        
        var store = grid.getStore();
        store.clearFilter(true);
        store.filter( 'fk_id_peticion', dataPeticion.id_peticion );
    },


    edit: function(view, record, item, index, e, eOpts) {
        var me = this,
                grid = me.getAnexoConvenioLista();
        me.boolAnexoConvenioEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.formularios.AnexoConvenio');

        me.boolAnexoConvenioEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts, anexo) {
        var me = this,
                grid = me.getAnexoConvenioLista(),
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
            if (me.boolAnexoConvenioEdit === 0 && record.phantom)
            {
                values['alcanceAcreditacionCert041303s'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionCert2Lista());
                values['alcanceAcreditacionInsp041303s'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionInsp2Lista());
                values['alcanceAcreditacionLab041303s'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionLab2Lista());
                values['personalAutorizado041303s'] = me.saveTablaSecundaria(me.getPersonalAutorizadoLista());
            }
            else
            {
                me.getController('formularios.AlcanceAcreditacionCert2').sincronizar();
                me.getController('formularios.AlcanceAcreditacionInsp2').sincronizar();
                me.getController('formularios.AlcanceAcreditacionLab2').sincronizar();
                me.getController('formularios.PersonalAutorizado').sincronizar();
            }
            
            record.set(values);
            record.set('fk_id_peticion', dataPeticion.id_peticion);
            record.set('escaneado_anexo_convenio', anexo);

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
                Ext.getBody().mask('Guardando Formulario FORM-026 ...');
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
            else
            {
                console.log("not dirty!");
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

        var grid = me.getAnexoConvenioLista();
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
                win = me.getAnexoConvenioWindow2(),
                isNew = record.phantom;

        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('formularios.anexoconvenio.edit.anexoconveniowindow', {
                title: isNew ? 'Añadir Formulario FORM-026' : 'Editar Formulario FORM-026'
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
    },
    
    
    cargaAnexo: function (button, e, eOpts) {
        var me = this,
                form = me.getFormAnexo(),
                field = form.down('#fileAnexo'),
                value = field.getValue();

        if ( value === '' )
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo del Anexo.');
            return;
        }
        else
        {
            console.log(ibmetrodta.app.globals.globalServerPath + 'anexoconvenio041301/uploadnombrepeticionarchivo');
            
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'anexoconvenio041301/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Anexo ...',
                success: function (f, a) {
                    console.log('SUCCESS');
                    me.save(button, e, eOpts, a.result.msg.registros);
                },
                failure: function (f, a) {
                    console.log('FAILURE');
                    return;
                }
            });
        }
    }

});