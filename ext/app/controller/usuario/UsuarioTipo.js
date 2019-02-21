Ext.define('ibmetrodta.controller.usuario.UsuarioTipo', {
    extend: 'ibmetrodta.controller.Base',
    boolUsuarioTipoEdit: 0,
    stores: [
        'usuario.UsuarioTipo'
    ],
    views: [
        'usuario.UsuarioTipo.Lista',
        'usuario.UsuarioTipo.edit.Form',
        'usuario.UsuarioTipo.edit.Window'
    ],
    refs: [
        {
            ref: 'UsuarioTipoLista',
            selector: '[xtype=usuario.usuariotipo.lista]'
        },
        {
            ref: 'UsuarioTipoWindow',
            selector: '[xtype=usuario.usuariotipo.edit.window]'
        },
        {
            ref: 'UsuarioTipoForm',
            selector: '[xtype=usuario.usuariotipo.edit.form]'
        },
        {
            ref: 'UsuarioTipoInfoTab',
            selector: '[xtype=usuario.usuariotipo.edit.tab.info]'
        },
        {
            ref: 'UsuarioTipoSearchWindow',
            selector: '[xtype=usuario.usuariotipo.search.window]'
        },
        {
            ref: 'UsuarioTipoSearchForm',
            selector: '[xtype=usuario.usuariotipo.search.form]'
		}
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=usuario.usuariotipo.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=usuario.usuariotipo.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=usuario.usuariotipo.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=usuario.usuariotipo.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=usuario.usuariotipo.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=usuario.usuariotipo.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=usuario.usuariotipo.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=usuario.usuariotipo.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=usuario.usuariotipo.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=usuario.usuariotipo.search.window] button#cancel': {
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
            grid = me.getUsuarioTipoLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getUsuarioTipoSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'usuario.usuariotipo.search.window', {
                title: 'Buscar UsuarioTipo'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getUsuarioTipoSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getUsuarioTipoLista(),
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
        var grid = me.getUsuarioTipoLista();
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
			grid = me.getUsuarioTipoLista();
        me.boolUsuarioTipoEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.usuario.UsuarioTipo');
        
        me.boolUsuarioTipoEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getUsuarioTipoLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.boolUsuarioTipoEdit === 0 && record.phantom )
            {
            }
            else
            {
            }
			////////////////////////////////////////////////////////////////////
            // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            ////////////////////////////////////////////////////////////////////
            var arrayUsuarioTipoPrivilegio = [];
            var arrayLength = values['UsuarioTipoPrivilegio000202'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['UsuarioTipoPrivilegio000202'][i] > 0 )
                {
                    var tmpUsuarioTipoPrivilegio = {
                        fk_id_usuario_privilegio: values['UsuarioTipoPrivilegio000202'][i]
                    };
                    arrayUsuarioTipoPrivilegio.push(tmpUsuarioTipoPrivilegio); // push this to the array
                }
            }

            values['UsuarioTipoPrivilegio000202'] = Ext.encode(arrayUsuarioTipoPrivilegio);
            
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
                Ext.getBody().mask('Guardando UsuarioTipo ...');
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

        var grid = me.getUsuarioTipoLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta UsuarioTipo?. Esta acción no puede ser deshecha.',
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
                win = me.getUsuarioTipoWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('usuario.usuariotipo.edit.window', {
                title: isNew ? 'Añadir UsuarioTipo' : 'Editar UsuarioTipo'
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