Ext.define('ibmetrodta.controller.formularios.AnexoConvenio', {
    extend: 'ibmetrodta.controller.Base',
    boolAnexoConvenioEdit: 0,
    stores: [
        'formularios.AnexoConvenio'
    ],
    views: [
        'formularios.AnexoConvenio.Lista',
        'formularios.AnexoConvenio.edit.Form',
        'formularios.AnexoConvenio.edit.Window'
    ],
    refs: [
        {
            ref: 'AnexoConvenioLista',
            selector: '[xtype=formularios.anexoconvenio.lista]'
        },
        {
            ref: 'AnexoConvenioWindow',
            selector: '[xtype=formularios.anexoconvenio.edit.window]'
        },
        {
            ref: 'AnexoConvenioForm',
            selector: '[xtype=formularios.anexoconvenio.edit.form]'
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
//////////////////////// menor o igual que tres //////////////////////////////////////
		{
            ref: 'PersonalAutorizadoLista',
            selector: '[xtype=formularios.personalautorizadolista]'
        },
        {
            ref: 'PersonalAutorizadoTab',
            selector: '[xtype=formularios.anexoconvenio.edit.tab.personalautorizado]'
        },
        //////////////////////// mayor que que tres //////////////////////////////////////
        {
            ref: 'AlcanceAcreditacionCertLista',
            selector: '[xtype=formularios.anexoconvenio.alcanceacreditacioncertlista]'
        },
        {
            ref: 'AlcanceAcreditacionCertWindow',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioncertwindows]'
        },
        {
            ref: 'AlcanceAcreditacionCertForm',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioncertform]'
        },
        {
            ref: 'AlcanceAcreditacionCertTab',
            selector: '[xtype=formularios.anexoconvenio.edit.tab.alcanceacreditacioncert]'
        },
        {
            ref: 'AlcanceAcreditacionInspLista',
            selector: '[xtype=formularios.anexoconvenio.alcanceacreditacioninsplista]'
        },
        {
            ref: 'AlcanceAcreditacionInspWindow',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioninspwindows]'
        },
        {
            ref: 'AlcanceAcreditacionInspForm',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioninspform]'
        },
        {
            ref: 'AlcanceAcreditacionInspTab',
            selector: '[xtype=formularios.anexoconvenio.edit.tab.alcanceacreditacioninsp]'
        },
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
                'window[xtype=formularios.anexoconvenio.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=formularios.anexoconvenio.edit.window] button#cancel': {
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
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
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
                title: 'Buscar AnexoConvenio'
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
        var me = this;
        var grid = me.getAnexoConvenioLista();
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


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getAnexoConvenioLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.boolAnexoConvenioEdit === 0 && record.phantom )
            {
                values['AlcanceAcreditacionCert041303'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionCertLista());
                values['AlcanceAcreditacionInsp041303'] = me.saveTablaSecundaria(me.getAlcanceAcreditacionInspLista());
                values['PersonalAutorizado041303;'] = me.saveTablaSecundaria(me.getPersonalAutorizadoLista());
            }
            else
            {
        		me.getController('formularios.AlcanceAcreditacionCert').sincronizar();
        		me.getController('formularios.AlcanceAcreditacionInsp').sincronizar();
        		me.getController('formularios.PersonalAutorizado').sincronizar();
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
                Ext.getBody().mask('Guardando AnexoConvenio ...');
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

        var grid = me.getAnexoConvenioLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta AnexoConvenio?. Esta acción no puede ser deshecha.',
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
                win = me.getAnexoConvenioWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('formularios.anexoconvenio.edit.window', {
                title: isNew ? 'Añadir AnexoConvenio' : 'Editar AnexoConvenio'
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