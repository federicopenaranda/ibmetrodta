Ext.define('ibmetrodta.controller.oec.Oec', {
    extend: 'ibmetrodta.controller.Base',
    boolOecEdit: 0,
    boolDesdeTramite: 0,
    stores: [
        'oec.Oec'
    ],
    views: [
        'oec.Oec.Lista',
        'oec.Oec.edit.Form',
        'oec.Oec.edit.Window'
    ],
    refs: [
        {
            ref: 'OecLista',
            selector: '[xtype=oec.oec.lista]'
        },
        {
            ref: 'TramiteOecLista',
            selector: '[xtype=tramite.tramite.listaoec]'
        },
        {
            ref: 'OecWindow',
            selector: '[xtype=oec.oec.edit.window]'
        },
        {
            ref: 'OecForm',
            selector: '[xtype=oec.oec.edit.form]'
        },
        {
            ref: 'OecNombreField',
            selector: '[xtype=oec.oec.edit.form] textfield#nombre_oec'
        },
        {
            ref: 'OecNitField',
            selector: '[xtype=oec.oec.edit.form] textfield#nit_oec'
        },
        {
            ref: 'OecInfoTab',
            selector: '[xtype=oec.oec.edit.tab.info]'
        },
        {
            ref: 'OecSearchWindow',
            selector: '[xtype=oec.oec.search.window]'
        },
        {
            ref: 'OecSearchForm',
            selector: '[xtype=oec.oec.search.form]'
        },
//////////////////////// menor o igual que tres //////////////////////////////////////
        //////////////////////// mayor que que tres //////////////////////////////////////
        {
            ref: 'OecContactoLista',
            selector: '[xtype=oec.oec.oeccontactolista]'
        },
        {
            ref: 'OecContactoWindow',
            selector: '[xtype=oec.oec.edit.oeccontactowindows]'
        },
        {
            ref: 'OecContactoForm',
            selector: '[xtype=oec.oec.edit.oeccontactoform]'
        },
        {
            ref: 'OecContactoTab',
            selector: '[xtype=oec.oec.edit.tab.oeccontacto]'
        },
        {
            ref: 'OecAcreditacionSolicitadaLista',
            selector: '[xtype=oec.oec.oecacreditacionsolicitadalista]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=oec.oec.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=oec.oec.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=oec.oec.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=oec.oec.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=oec.oec.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=oec.oec.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=oec.oec.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=oec.oec.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=oec.oec.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=oec.oec.search.window] button#cancel': {
                    click: this.close
                },
                '[xtype=oec.oec.edit.oecform]': {
                    afterrender: this.configOECForm
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    configOECForm: function () {
        var me= this,
                nombre = me.getOecNombreField(),
                nit = me.getOecNitField();
        
        if ( me.boolDesdeTramite === 1 )
        {
            nombre.setDisabled(true);
            nit.setDisabled(true);
        }
        else
        {
            nombre.setDisabled(false);
            nit.setDisabled(false);
        }
    },
    
    
    clearSearch: function (button, e, eOpts) {
        var me = this,
                grid = me.getOecLista(),
                store = grid.getStore();
        // clear filter
        store.clearFilter(false);
    },
    
    
    showSearch: function (button, e, eOpts) {
        var me = this,
                win = me.getOecSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('oec.oec.search.window', {
                title: 'Buscar OEC'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    search: function (button, e, eOpts) {
        var me = this,
                win = me.getOecSearchWindow(),
                form = win.down('form'),
                grid = me.getOecLista(),
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
        if ( me.boolDesdeTramite === 0 )
        {
            var grid = me.getOecLista(),
                    records = grid.getSelectionModel().getSelection(),
                    botonEdit = grid.down("[xtype='toolbar'] button#edit"),
                    botonDelete = grid.down("[xtype='toolbar'] button#delete"),
                    botonTramite = grid.down("[xtype='toolbar'] button#tramite");

            if (records.length > 0)
            {
                botonEdit.enable();
                botonDelete.enable();
                botonTramite.enable();
            }
            else
            {
                botonEdit.disable();
                botonDelete.disable();
                botonTramite.disable();
            }
        }
    },
    
    
    loadRecords: function (grid, eOpts) {
        var me = this, 
                store = grid.getStore();
        store.clearFilter(true);
        store.load();
        
        me.boolDesdeTramite = 0;
    },
    
    
    edit: function (view, record, item, index, e, eOpts) {
        var me = this,
                grid = me.getOecLista();
        
        me.boolOecEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },
    
    
    add: function (button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.oec.Oec');

        me.boolOecEdit = 0;

        // show window
        me.showEditWindow(record);
    },
    

    save: function (button, e, eOpts) {
        
        var me = this,
                grid = (me.boolDesdeTramite === 0) ? me.getOecLista() : me.getTramiteOecLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;

        // Valida el formulario
        if ( form.isValid() )
        {
            if (me.boolOecEdit === 0 && record.phantom)
            {
                values['oecContacto020003s'] = me.saveTablaSecundaria(me.getOecContactoLista());
                values['oecAcreditacionSolicitada020003s'] = me.saveTablaSecundaria(me.getOecAcreditacionSolicitadaLista());
            }
            else
            {
                me.getController('oec.OecContacto').sincronizar();
                me.getController('oec.OecAcreditacionSolicitada').sincronizar();
            }
            
            ////////////////////////////////////////////////////////////////////
            // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            ////////////////////////////////////////////////////////////////////
            var arrayOecActividad = [];
            var arrayLength = values['oecActividad020002s'].length;

            for (var i = 0; i < arrayLength; i++) {
                if (values['oecActividad020002s'][i] > 0)
                {
                    var tmpOecActividad = {
                        fk_id_actividad_economica: values['oecActividad020002s'][i]
                    };
                    arrayOecActividad.push(tmpOecActividad);
                }
            }

            values['oecActividad020002s'] = Ext.encode(arrayOecActividad);
            /////////////////////////////////////////////////////////////////
            // [FIN] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            /////////////////////////////////////////////////////////////////

            record.set(values);
            
            me.boolDesdeTramite = 0;
            //me.boolOecEdit = 0;

            if (record.dirty)
            {
                callbacks = {
                    success: function (records, operation) {
                        store.reload();
                        win.close();
                    },
                    failure: function (records, operation) {
                        store.rejectChanges();
                    }
                };
                // mask to prevent extra submits
                Ext.getBody().mask('Guardando OEC ...');
                // if new record...
                if (record.phantom) {
                    // reject any other changes
                    store.rejectChanges();
                    // add the new record
                    store.add(record);
                }

                store.sync(callbacks);
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

        var grid = me.getOecLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];

        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta OEC?. Esta acción no puede ser deshecha.',
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
                win = me.getOecWindow(),
                nombre = me.getOecNombreField(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('oec.oec.edit.window', {
                title: isNew ? 'Añadir OEC' : 'Editar OEC'
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