Ext.define('ibmetrodta.controller.proceso.PeticionArchivo', {
    extend: 'ibmetrodta.controller.Base',
    boolPeticionArchivoEdit: 0,
    stores: [
        'proceso.PeticionArchivo'
    ],
    views: [
        'proceso.PeticionArchivo.Lista',
        'proceso.PeticionArchivo.edit.Form',
        'proceso.PeticionArchivo.edit.Window'
    ],
    refs: [
        {
            ref: 'PeticionArchivoLista',
            selector: '[xtype=proceso.peticionarchivo.lista]'
        },
        {
            ref: 'PeticionArchivoWindow',
            selector: '[xtype=proceso.peticionarchivo.edit.window]'
        },
        {
            ref: 'PeticionArchivoForm',
            selector: '[xtype=proceso.peticionarchivo.edit.form]'
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
		}
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////
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
                'window[xtype=proceso.peticionarchivo.edit.window] button#save': {
                    click: this.save
                },
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
                title: 'Buscar PeticionArchivo'
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
            if ( me.boolPeticionArchivoEdit === 0 && record.phantom )
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
                Ext.getBody().mask('Guardando PeticionArchivo ...');
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
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: isNew ? 'Añadir PeticionArchivo' : 'Editar PeticionArchivo'
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