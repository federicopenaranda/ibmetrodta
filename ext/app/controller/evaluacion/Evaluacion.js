Ext.define('ibmetrodta.controller.evaluacion.Evaluacion', {
    extend: 'ibmetrodta.controller.Base',
    boolEvaluacionEdit: 0,
    accionTerminada: 0,
    stores: [
        'evaluacion.Evaluacion'
    ],
    views: [
        'evaluacion.Evaluacion.Lista',
        'evaluacion.Evaluacion.edit.EvaluacionForm',
        'evaluacion.Evaluacion.edit.EvaluacionWindow'
    ],
    refs: [
        {
            ref: 'EvaluacionLista',
            selector: '[xtype=evaluacion.evaluacion.lista]'
        },
        {
            ref: 'EvaluacionWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.evaluacionwindow]'
        },
        {
            ref: 'EvaluacionForm',
            selector: '[xtype=evaluacion.evaluacion.edit.form]'
        },
        {
            ref: 'EvaluacionInfoTab',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.info]'
        },
        {
            ref: 'EvaluacionSearchWindow',
            selector: '[xtype=evaluacion.evaluacion.search.window]'
        },
        {
            ref: 'EvaluacionSearchForm',
            selector: '[xtype=evaluacion.evaluacion.search.form]'
        },
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////

        {
            ref: 'AlcanceAcreditacionCertLista',
            selector: '[xtype=evaluacion.evaluacion.alcanceacreditacioncertlista]'
        },
        {
            ref: 'AlcanceAcreditacionCertWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacioncertwindows]'
        },
        {
            ref: 'AlcanceAcreditacionCertForm',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacioncertform]'
        },
        {
            ref: 'AlcanceAcreditacionCertTab',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.alcanceacreditacioncert]'
        },
        {
            ref: 'AlcanceAcreditacionInspLista',
            selector: '[xtype=evaluacion.evaluacion.alcanceacreditacioninsplista]'
        },
        {
            ref: 'AlcanceAcreditacionInspWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacioninspwindows]'
        },
        {
            ref: 'AlcanceAcreditacionInspForm',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacioninspform]'
        },
        {
            ref: 'AlcanceAcreditacionInspTab',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.alcanceacreditacioninsp]'
        },
        {
            ref: 'AlcanceAcreditacionLabLista',
            selector: '[xtype=evaluacion.evaluacion.alcanceacreditacionlablista]'
        },
        {
            ref: 'AlcanceAcreditacionLabWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacionlabwindows]'
        },
        {
            ref: 'AlcanceAcreditacionLabForm',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacionlabform]'
        },
        {
            ref: 'AlcanceAcreditacionLabTab',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.alcanceacreditacionlab]'
        },
        {
            ref: 'PlanEvaluacionLista',
            selector: '[xtype=evaluacion.evaluacion.planevaluacionlista]'
        },
        {
            ref: 'PlanEvaluacionWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.planevaluacionwindows]'
        },
        {
            ref: 'PlanEvaluacionForm',
            selector: '[xtype=evaluacion.evaluacion.edit.planevaluacionform]'
        },
        {
            ref: 'PlanEvaluacionTab',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.planevaluacion]'
        },
        
        
        {
            ref: 'EvaluacionForm',
            selector: '[xtype=evaluacion.evaluacion.edit.evaluacionform]'
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
            ref: 'AltaDireccionField',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.info] combo#fk_id_oec_contacto_alta_direccion'
        },
        {
            ref: 'GerenteTecnicoField',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.info] combo#fk_id_oec_contacto_gerente_tecnico'
        },
        {
            ref: 'GerenteCalidadField',
            selector: '[xtype=evaluacion.evaluacion.edit.tab.info] combo#fk_id_oec_contacto_gerente_calidad'
        }
    ],


    init: function () {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=evaluacion.evaluacion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=evaluacion.evaluacion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=evaluacion.evaluacion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=evaluacion.evaluacion.lista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=evaluacion.evaluacion.lista] button#descargaForm': {
                    click: this.descargaForm024
                },
                '[xtype=evaluacion.evaluacion.edit.evaluacionform] tabpanel#tabsEvaluacion': {
                    afterrender: this.configuraTabs
                },
                'window[xtype=evaluacion.evaluacion.edit.evaluacionwindow] button#save': {
                    click: this.save
                },
                'window[xtype=evaluacion.evaluacion.edit.evaluacionwindow] button#cancel': {
                    click: this.close
                },
                'grid[xtype=evaluacion.evaluacion.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=evaluacion.evaluacion.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=evaluacion.evaluacion.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=evaluacion.evaluacion.search.window] button#cancel': {
                    click: this.close
                },
                '[xtype=evaluacion.evaluacion.edit.tab.info] combo#fk_id_oec_contacto_alta_direccion': {
                    expand: this.filtraContactos
                },
                '[xtype=evaluacion.evaluacion.edit.tab.info] combo#fk_id_oec_contacto_gerente_tecnico': {
                    expand: this.filtraContactos
                },
                '[xtype=evaluacion.evaluacion.edit.tab.info] combo#fk_id_oec_contacto_gerente_calidad': {
                    expand: this.filtraContactos
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    filtraContactos: function( combo, records, eOpts ) {
        var me = this,
                gridOec = me.getTramiteListaOec(),
                recOec = gridOec.getSelectionModel().getSelection()[0],
                dataOec = recOec.getData(),
                
                utilit, utStore;
        
        if (combo.itemId == 'fk_id_oec_contacto_alta_direccion')
        {
            utilit = me.getAltaDireccionField();
        }
        
        if (combo.itemId == 'fk_id_oec_contacto_gerente_tecnico')
        {
            utilit = me.getGerenteTecnicoField();
        }
        
        if (combo.itemId == 'fk_id_oec_contacto_gerente_calidad')
        {
            utilit = me.getGerenteCalidadField();
        }
        
        utStore = utilit.store;
        utStore.clearFilter(true);
        utStore.filter('fk_id_oec', dataOec.id_oec);
    },
    
    
    configuraTabs: function () {
            var me = this,
                gridOec = me.getTramiteListaOec(),
                recOec = gridOec.getSelectionModel().getSelection()[0],
                dataOec = recOec.getData(),

                win = me.getEvaluacionWindow(),
                tabPanel = win.down('panel').down('panel'),
                tab1 = tabPanel.getTabBar().items.get(3),
                tab2 = tabPanel.getTabBar().items.get(4),
                tab3 = tabPanel.getTabBar().items.get(5);
        
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
    
    
    descargaForm024: function () {
        var me = this,
                grid = me.getEvaluacionLista(),
                selected = grid.getSelectionModel().getSelection();
        
        if (selected.length === 1)
        {
            var rec = selected[0],
                    data = rec.getData(), 
                    src, 
                    obj;
            
            obj = {
                url: ibmetrodta.app.globals.globalServerPath + 'reporte/pdfForm024',
                params: {
                    id_evaluacion: data.id_evaluacion
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
            console.log('[Error] Error al generar el reporte');
        }
    },
    
    
    clearSearch: function (button, e, eOpts) {
        var me = this,
                grid = me.getEvaluacionLista(),
                store = grid.getStore();
        // clear filter
        store.clearFilter(false);
    },
    
    
    showSearch: function (button, e, eOpts) {
        var me = this,
                win = me.getEvaluacionSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('evaluacion.evaluacion.search.window', {
                title: 'Buscar Evaluacion'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    search: function (button, e, eOpts) {
        var me = this,
                win = me.getEvaluacionSearchWindow(),
                form = win.down('form'),
                grid = me.getEvaluacionLista(),
                store = grid.getStore(),
                values = form.getValues(),
                filters = [];
        // loop over values to create filters
        Ext.Object.each(values, function (key, value, myself) {
            if (!Ext.isEmpty(value)) {
                filters.push({
                    property: key,
                    value: value
                });
            }
        });
        // clear store filters
        store.clearFilter(true);
        store.filter(filters);
        // close window
        win.hide();
    },
    
    
    manejaBotones: function (record, index, eOpts) {
        var me = this;
        var grid = me.getEvaluacionLista();
        var records = grid.getSelectionModel().getSelection();

        var botonAdd = grid.down("[xtype='toolbar'] button#add");
        var botonEdit = grid.down("[xtype='toolbar'] button#edit");
        var botonDelete = grid.down("[xtype='toolbar'] button#delete");

        if ( me.accionTerminada == 0 )
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
    
    
    loadRecords: function (grid, eOpts) {
        var me = this,
               
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        var store = grid.getStore();
        store.clearFilter(true);
        store.filter( 'fk_id_peticion', dataPeticion.id_peticion );
    },
    
    
    edit: function (view, record, item, index, e, eOpts) {
        var me = this,
                grid = me.getEvaluacionLista();
        me.boolEvaluacionEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },
    
    
    add: function (button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.evaluacion.Evaluacion');

        me.boolEvaluacionEdit = 0;

        // show window
        me.showEditWindow(record);
    },
    
    
    save: function (button, e, eOpts) {
        var me = this,
                grid = me.getEvaluacionLista(),
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
        if (form.isValid())
        {
            if (me.boolEvaluacionEdit === 0 && record.phantom)
            {
                values['alcanceAcreditacionCert030003s'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionCertLista());
                values['alcanceAcreditacionInsp030003s'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionInspLista());
                values['alcanceAcreditacionLab030003s'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionLabLista());
            }
            else
            {
                me.getController('evaluacion.AlcanceAcreditacionCert').sincronizar();
                me.getController('evaluacion.AlcanceAcreditacionInsp').sincronizar();
                me.getController('evaluacion.AlcanceAcreditacionLab').sincronizar();
            }
            
            record.set(values);
            record.set('fk_id_peticion', dataPeticion.id_peticion);

            if (record.dirty) {

                callbacks = {
                    success: function (records, operation) {
                        store.reload();
                        win.close();
                    },
                    failure: function (records, operation) {
                        store.rejectChanges();
                    }
                };

                Ext.getBody().mask('Guardando Evaluación ...');

                if (record.phantom) {
                    store.rejectChanges();
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
    
    
    close: function (button, e, eOpts) {
        var win = button.up('window');
        win.close();
    },
    
    
    remove: function () {
        var me = this;

        var grid = me.getEvaluacionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];

        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta Evaluación?. Esta acción no puede ser deshecha.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if (buttonId === 'yes') {
                    store.remove(record);
                    store.sync({
                        failure: function (records, operation) {
                            store.rejectChanges();
                        }
                    });
                }
            }
        });
    },
    
    
    showEditWindow: function (record) {
        var me = this,
                win = me.getEvaluacionWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('evaluacion.evaluacion.edit.evaluacionwindow', {
                title: isNew ? 'Añadir Evaluación' : 'Editar Evaluación'
            });
        }
        
        // show window
        win.show();
        win.doComponentLayout();
        // load form with data
        win.down('form').loadRecord(record);
    },
    
    
    saveTablaSecundaria: function (grid) {
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
    
    
    cancel: function (editor, context, eOpts) {
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    }
});