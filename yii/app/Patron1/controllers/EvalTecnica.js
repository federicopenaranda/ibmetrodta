Ext.define('ibmetrodta.controller.formularios;display.EvalTecnica', {
    extend: 'ibmetrodta.controller.Base',
    boolEvalTecnicaEdit: 0,
    stores: [
        'formularios;display.EvalTecnica'
    ],
    views: [
        'formularios;display.EvalTecnica.Lista',
        'formularios;display.EvalTecnica.edit.Form',
        'formularios;display.EvalTecnica.edit.Window'
    ],
    refs: [
        {
            ref: 'EvalTecnicaLista',
            selector: '[xtype=formularios;display.evaltecnica.lista]'
        },
        {
            ref: 'EvalTecnicaWindow',
            selector: '[xtype=formularios;display.evaltecnica.edit.window]'
        },
        {
            ref: 'EvalTecnicaForm',
            selector: '[xtype=formularios;display.evaltecnica.edit.form]'
        },
        {
            ref: 'EvalTecnicaInfoTab',
            selector: '[xtype=formularios;display.evaltecnica.edit.tab.info]'
        },
        {
            ref: 'EvalTecnicaSearchWindow',
            selector: '[xtype=formularios;display.evaltecnica.search.window]'
        },
        {
            ref: 'EvalTecnicaSearchForm',
            selector: '[xtype=formularios;display.evaltecnica.search.form]'
        },
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////
 
        {
            ref: 'AspectosEvaluadosLista',
            selector: '[xtype=formularios;display.evaltecnica.aspectosevaluadoslista]'
        },
        {
            ref: 'AspectosEvaluadosWindow',
            selector: '[xtype=formularios;display.evaltecnica.edit.aspectosevaluadoswindows]'
        },
        {
            ref: 'AspectosEvaluadosForm',
            selector: '[xtype=formularios;display.evaltecnica.edit.aspectosevaluadosform]'
        },
        {
            ref: 'AspectosEvaluadosTab',
            selector: '[xtype=formularios;display.evaltecnica.edit.tab.aspectosevaluados]'
        }
 
        {
            ref: 'EquipoEvalLista',
            selector: '[xtype=formularios;display.evaltecnica.equipoevallista]'
        },
        {
            ref: 'EquipoEvalWindow',
            selector: '[xtype=formularios;display.evaltecnica.edit.equipoevalwindows]'
        },
        {
            ref: 'EquipoEvalForm',
            selector: '[xtype=formularios;display.evaltecnica.edit.equipoevalform]'
        },
        {
            ref: 'EquipoEvalTab',
            selector: '[xtype=formularios;display.evaltecnica.edit.tab.equipoeval]'
        }
 
        {
            ref: 'ProveedorEvalLista',
            selector: '[xtype=formularios;display.evaltecnica.proveedorevallista]'
        },
        {
            ref: 'ProveedorEvalWindow',
            selector: '[xtype=formularios;display.evaltecnica.edit.proveedorevalwindows]'
        },
        {
            ref: 'ProveedorEvalForm',
            selector: '[xtype=formularios;display.evaltecnica.edit.proveedorevalform]'
        },
        {
            ref: 'ProveedorEvalTab',
            selector: '[xtype=formularios;display.evaltecnica.edit.tab.proveedoreval]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=formularios;display.evaltecnica.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios;display.evaltecnica.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios;display.evaltecnica.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=formularios;display.evaltecnica.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=formularios;display.evaltecnica.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=formularios;display.evaltecnica.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=formularios;display.evaltecnica.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=formularios;display.evaltecnica.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=formularios;display.evaltecnica.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=formularios;display.evaltecnica.search.window] button#cancel': {
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
            grid = me.getEvalTecnicaLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getEvalTecnicaSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'formularios;display.evaltecnica.search.window', {
                title: 'Buscar EvalTecnica'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getEvalTecnicaSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getEvalTecnicaLista(),
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
        var grid = me.getEvalTecnicaLista();
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
			grid = me.getEvalTecnicaLista();
        me.boolEvalTecnicaEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.formularios;display.EvalTecnica');
        
        me.boolEvalTecnicaEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getEvalTecnicaLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.boolEvalTecnicaEdit === 0 && record.phantom )
            {
                values['AspectosEvaluados040803'] = me.saveTablaSecundaria(me.getAspectosEvaluadosLista());
                values['EquipoEval040803'] = me.saveTablaSecundaria(me.getEquipoEvalLista());
                values['ProveedorEval040803'] = me.saveTablaSecundaria(me.getProveedorEvalLista());
            }
            else
            {
        		me.getController('formularios;display.AspectosEvaluados').sincronizar();
        		me.getController('formularios;display.EquipoEval').sincronizar();
        		me.getController('formularios;display.ProveedorEval').sincronizar();
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
                Ext.getBody().mask('Guardando EvalTecnica ...');
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

        var grid = me.getEvalTecnicaLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta EvalTecnica?. Esta acción no puede ser deshecha.',
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
                win = me.getEvalTecnicaWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('formularios;display.evaltecnica.edit.window', {
                title: isNew ? 'Añadir EvalTecnica' : 'Editar EvalTecnica'
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