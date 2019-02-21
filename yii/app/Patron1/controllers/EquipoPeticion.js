Ext.define('ibmetrodta.controller.proceso;display.EquipoPeticion', {
    extend: 'ibmetrodta.controller.Base',
    boolEquipoPeticionEdit: 0,
    stores: [
        'proceso;display.EquipoPeticion'
    ],
    views: [
        'proceso;display.EquipoPeticion.Lista',
        'proceso;display.EquipoPeticion.edit.Form',
        'proceso;display.EquipoPeticion.edit.Window'
    ],
    refs: [
        {
            ref: 'EquipoPeticionLista',
            selector: '[xtype=proceso;display.equipopeticion.lista]'
        },
        {
            ref: 'EquipoPeticionWindow',
            selector: '[xtype=proceso;display.equipopeticion.edit.window]'
        },
        {
            ref: 'EquipoPeticionForm',
            selector: '[xtype=proceso;display.equipopeticion.edit.form]'
        },
        {
            ref: 'EquipoPeticionInfoTab',
            selector: '[xtype=proceso;display.equipopeticion.edit.tab.info]'
        },
        {
            ref: 'EquipoPeticionSearchWindow',
            selector: '[xtype=proceso;display.equipopeticion.search.window]'
        },
        {
            ref: 'EquipoPeticionSearchForm',
            selector: '[xtype=proceso;display.equipopeticion.search.form]'
		}
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=proceso;display.equipopeticion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso;display.equipopeticion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=proceso;display.equipopeticion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=proceso;display.equipopeticion.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=proceso;display.equipopeticion.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=proceso;display.equipopeticion.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=proceso;display.equipopeticion.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=proceso;display.equipopeticion.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=proceso;display.equipopeticion.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=proceso;display.equipopeticion.search.window] button#cancel': {
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
            grid = me.getEquipoPeticionLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getEquipoPeticionSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'proceso;display.equipopeticion.search.window', {
                title: 'Buscar EquipoPeticion'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getEquipoPeticionSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getEquipoPeticionLista(),
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
        var grid = me.getEquipoPeticionLista();
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
			grid = me.getEquipoPeticionLista();
        me.boolEquipoPeticionEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.proceso;display.EquipoPeticion');
        
        me.boolEquipoPeticionEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getEquipoPeticionLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.boolEquipoPeticionEdit === 0 && record.phantom )
            {
            }
            else
            {
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
                Ext.getBody().mask('Guardando EquipoPeticion ...');
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

        var grid = me.getEquipoPeticionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta EquipoPeticion?. Esta acción no puede ser deshecha.',
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
                win = me.getEquipoPeticionWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('proceso;display.equipopeticion.edit.window', {
                title: isNew ? 'Añadir EquipoPeticion' : 'Editar EquipoPeticion'
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