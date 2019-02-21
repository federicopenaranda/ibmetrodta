Ext.define('ibmetrodta.controller.evaluacion.Evaluacion', {
    extend: 'ibmetrodta.controller.Base',
    boolEvaluacionEdit: 0,
    stores: [
        'evaluacion.Evaluacion'
    ],
    views: [
        'evaluacion.Evaluacion.Lista',
        'evaluacion.Evaluacion.edit.Form',
        'evaluacion.Evaluacion.edit.Window'
    ],
    refs: [
        {
            ref: 'EvaluacionLista',
            selector: '[xtype=evaluacion.evaluacion.lista]'
        },
        {
            ref: 'EvaluacionWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.window]'
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
        }
 
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
        }
 
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
        }
 
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
        }
    ],
    init: function() {
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
                'window[xtype=evaluacion.evaluacion.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=evaluacion.evaluacion.edit.window] button#cancel': {
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
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    clearSearch: function( button, e, eOpts ) {
        var me = this,
            grid = me.getEvaluacionLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getEvaluacionSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'evaluacion.evaluacion.search.window', {
                title: 'Buscar Evaluacion'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getEvaluacionSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getEvaluacionLista(),
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
        var grid = me.getEvaluacionLista();
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
        var store = grid.getStore();
        store.clearFilter(true);
        store.load();
    },


    edit: function(view, record, item, index, e, eOpts) {
    	
        var me = this,
			grid = me.getEvaluacionLista();
        me.boolEvaluacionEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.evaluacion.Evaluacion');
        
        me.boolEvaluacionEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getEvaluacionLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.boolEvaluacionEdit === 0 && record.phantom )
            {
                values['AlcanceAcreditacionCert030003'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionCertLista());
                values['AlcanceAcreditacionInsp030003'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionInspLista());
                values['AlcanceAcreditacionLab030003'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionLabLista());
                values['PlanEvaluacion030003'] = me.saveTablaSecundaria(me.getPlanEvaluacionLista());
            }
            else
            {
        		me.getController('evaluacion.AlcanceAcreditacionCert').sincronizar();
        		me.getController('evaluacion.AlcanceAcreditacionInsp').sincronizar();
        		me.getController('evaluacion.AlcanceAcreditacionLab').sincronizar();
        		me.getController('evaluacion.PlanEvaluacion').sincronizar();
            }
			////////////////////////////////////////////////////////////////////
            // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            ////////////////////////////////////////////////////////////////////
            
			/////////////////////////////////////////////////////////////////
            // [FIN] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            /////////////////////////////////////////////////////////////////

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
                Ext.getBody().mask('Guardando Evaluacion ...');
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

        var grid = me.getEvaluacionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta Evaluacion?. Esta acción no puede ser deshecha.',
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
                win = me.getEvaluacionWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('evaluacion.evaluacion.edit.window', {
                title: isNew ? 'Añadir Evaluacion' : 'Editar Evaluacion'
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