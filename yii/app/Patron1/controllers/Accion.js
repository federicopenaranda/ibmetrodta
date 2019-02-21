Ext.define('ibmetrodta.controller.proceso.Accion', {
    extend: 'ibmetrodta.controller.Base',
    boolAccionEdit: 0,
    stores: [
        'proceso.Accion'
    ],
    views: [
        'proceso.Accion.Lista',
        'proceso.Accion.edit.Form',
        'proceso.Accion.edit.Window'
    ],
    refs: [
        {
            ref: 'AccionLista',
            selector: '[xtype=proceso.accion.lista]'
        },
        {
            ref: 'AccionWindow',
            selector: '[xtype=proceso.accion.edit.window]'
        },
        {
            ref: 'AccionForm',
            selector: '[xtype=proceso.accion.edit.form]'
        },
        {
            ref: 'AccionInfoTab',
            selector: '[xtype=proceso.accion.edit.tab.info]'
        },
        {
            ref: 'AccionSearchWindow',
            selector: '[xtype=proceso.accion.search.window]'
        },
        {
            ref: 'AccionSearchForm',
            selector: '[xtype=proceso.accion.search.form]'
		}
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=proceso.accion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.accion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=proceso.accion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=proceso.accion.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=proceso.accion.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=proceso.accion.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=proceso.accion.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=proceso.accion.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=proceso.accion.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=proceso.accion.search.window] button#cancel': {
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
            grid = me.getAccionLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getAccionSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'proceso.accion.search.window', {
                title: 'Buscar Accion'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getAccionSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getAccionLista(),
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
        var grid = me.getAccionLista();
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
			grid = me.getAccionLista();
        me.boolAccionEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.proceso.Accion');
        
        me.boolAccionEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getAccionLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.boolAccionEdit === 0 && record.phantom )
            {
            }
            else
            {
            }
			////////////////////////////////////////////////////////////////////
            // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            ////////////////////////////////////////////////////////////////////
            var arrayAccionTransicion = [];
            var arrayLength = values['accionTransicion010202s'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['accionTransicion010202s'][i] > 0 )
                {
                    var tmpAccionTransicion = {
                        fk_id_transicion: values['accionTransicion010202s'][i]
                    };
                    arrayAccionTransicion.push(tmpAccionTransicion); // push this to the array
                }
            }

            values['accionTransicion010202s'] = Ext.encode(arrayAccionTransicion);
            var arrayTransicion = [];
            var arrayLength = values['transicion010202s'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['transicion010202s'][i] > 0 )
                {
                    var tmpTransicion = {
                        fk_id_proceso: values['transicion010202s'][i]
                    };
                    arrayTransicion.push(tmpTransicion); // push this to the array
                }
            }

            values['transicion010202s'] = Ext.encode(arrayTransicion);
            
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
                Ext.getBody().mask('Guardando Accion ...');
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

        var grid = me.getAccionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta Accion?. Esta acción no puede ser deshecha.',
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
                win = me.getAccionWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('proceso.accion.edit.window', {
                title: isNew ? 'Añadir Accion' : 'Editar Accion'
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