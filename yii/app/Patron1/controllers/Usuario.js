Ext.define('ibmetrodta.controller.usuario.Usuario', {
    extend: 'ibmetrodta.controller.Base',
    boolUsuarioEdit: 0,
    stores: [
        'usuario.Usuario'
    ],
    views: [
        'usuario.Usuario.Lista',
        'usuario.Usuario.edit.Form',
        'usuario.Usuario.edit.Window'
    ],
    refs: [
        {
            ref: 'UsuarioLista',
            selector: '[xtype=usuario.usuario.lista]'
        },
        {
            ref: 'UsuarioWindow',
            selector: '[xtype=usuario.usuario.edit.window]'
        },
        {
            ref: 'UsuarioForm',
            selector: '[xtype=usuario.usuario.edit.form]'
        },
        {
            ref: 'UsuarioInfoTab',
            selector: '[xtype=usuario.usuario.edit.tab.info]'
        },
        {
            ref: 'UsuarioSearchWindow',
            selector: '[xtype=usuario.usuario.search.window]'
        },
        {
            ref: 'UsuarioSearchForm',
            selector: '[xtype=usuario.usuario.search.form]'
		}
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=usuario.usuario.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=usuario.usuario.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=usuario.usuario.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=usuario.usuario.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=usuario.usuario.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=usuario.usuario.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=usuario.usuario.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=usuario.usuario.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=usuario.usuario.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=usuario.usuario.search.window] button#cancel': {
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
            grid = me.getUsuarioLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getUsuarioSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'usuario.usuario.search.window', {
                title: 'Buscar Usuario'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getUsuarioSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getUsuarioLista(),
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
        var grid = me.getUsuarioLista();
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
			grid = me.getUsuarioLista();
        me.boolUsuarioEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.usuario.Usuario');
        
        me.boolUsuarioEdit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getUsuarioLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.boolUsuarioEdit === 0 && record.phantom )
            {
            }
            else
            {
            }
			////////////////////////////////////////////////////////////////////
            // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            ////////////////////////////////////////////////////////////////////
            var arrayUsuarioOec = [];
            var arrayLength = values['usuarioOec000102s'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['usuarioOec000102s'][i] > 0 )
                {
                    var tmpUsuarioOec = {
                        fk_id_oec: values['usuarioOec000102s'][i]
                    };
                    arrayUsuarioOec.push(tmpUsuarioOec); // push this to the array
                }
            }

            values['usuarioOec000102s'] = Ext.encode(arrayUsuarioOec);
            var arrayUsuarioProceso = [];
            var arrayLength = values['usuarioProceso000102s'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['usuarioProceso000102s'][i] > 0 )
                {
                    var tmpUsuarioProceso = {
                        fk_id_proceso: values['usuarioProceso000102s'][i]
                    };
                    arrayUsuarioProceso.push(tmpUsuarioProceso); // push this to the array
                }
            }

            values['usuarioProceso000102s'] = Ext.encode(arrayUsuarioProceso);
            var arrayUsuarioTipoUsuario = [];
            var arrayLength = values['usuarioTipoUsuario000102s'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['usuarioTipoUsuario000102s'][i] > 0 )
                {
                    var tmpUsuarioTipoUsuario = {
                        fk_id_usuario_tipo: values['usuarioTipoUsuario000102s'][i]
                    };
                    arrayUsuarioTipoUsuario.push(tmpUsuarioTipoUsuario); // push this to the array
                }
            }

            values['usuarioTipoUsuario000102s'] = Ext.encode(arrayUsuarioTipoUsuario);
            
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
                Ext.getBody().mask('Guardando Usuario ...');
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

        var grid = me.getUsuarioLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta Usuario?. Esta acción no puede ser deshecha.',
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
                win = me.getUsuarioWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('usuario.usuario.edit.window', {
                title: isNew ? 'Añadir Usuario' : 'Editar Usuario'
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