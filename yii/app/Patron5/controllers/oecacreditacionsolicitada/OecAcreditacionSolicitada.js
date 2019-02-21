Ext.define('ibmetrodta.controller.oec.OecAcreditacionSolicitada', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'oec.OecAcreditacionSolicitada'
    ],
    views: [
        'oec.OecAcreditacionSolicitada.Lista',
        'oec.OecAcreditacionSolicitada.edit.Form',
        'oec.OecAcreditacionSolicitada.edit.Window'
    ],
    refs: [
        {
            ref: 'OecLista',
            selector: '[xtype=oec.oec.lista]'
        },
        {
            ref: 'OecAcreditacionSolicitadaWindow',
            selector: '[xtype=oec.oecacreditacionsolicitada.edit.window]'
        },
        {
            ref: 'OecAcreditacionSolicitadaWindowOecAcreditacionSolicitada',
            selector: '[xtype=oec.oecacreditacionsolicitada.edit.oecacreditacionsolicitadawindow]'
        },
        {
            ref: 'OecAcreditacionSolicitadaLista',
            selector: '[xtype=oec.oecacreditacionsolicitada.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=oec.oec.lista] menuitem#oecacreditacionsolicitada': {
                    click: this.add
                },
                'grid[xtype=oec.oecacreditacionsolicitada.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.editOecAcreditacionSolicitada,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=oec.oecacreditacionsolicitada.lista] button#add': {
                    click: this.addOecAcreditacionSolicitada                },
                'grid[xtype=oec.oecacreditacionsolicitada.lista] button#edit': {
                    click: this.editOecAcreditacionSolicitada                },
                'grid[xtype=oec.oecacreditacionsolicitada.lista] button#delete': {
                    click: this.deleteOecAcreditacionSolicitada                },
                'window[xtype=oec.oecacreditacionsolicitada.edit.oecacreditacionsolicitadawindow] button#save': {
                    click: this.save
                },
                'window[xtype=oec.oecacreditacionsolicitada.edit.oecacreditacionsolicitadawindow] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function (grid, eOpts) {
        var me = this,
                store = grid.getStore(),
                grid2 = me.getOecLista(),
                record = grid2.getSelectionModel().getSelection()[0],
                data = record.getData();

        store.clearFilter(true);
        store.filter("", data['']);
    },


    editOecAcreditacionSolicitada: function(view, record, item, index, e, eOpts) {
        var me = this;

        var grid = me.getOecAcreditacionSolicitadaLista();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show window
        me.showEditWindowOecAcreditacionSolicitada(record);
    },

    

    add: function( view, record, item, index, e, eOpts ) {
        var me = this;
        
        var grid = me.getOecAcreditacionSolicitadaLista();
        var record = grid.getSelectionModel().getSelection()[0];

        // show window
        me.showEditWindow(record);
    },
    
    addOecAcreditacionSolicitada: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.oec.OecAcreditacionSolicitada');

        // show window
        me.showEditWindowOecAcreditacionSolicitada(record);
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getOecAcreditacionSolicitadaLista();
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


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getOecAcreditacionSolicitadaLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;

        var gridOec = me.getOecLista();
        var recordOec = gridOec.getSelectionModel().getSelection()[0];
        var dataOec = recordOec.getData();

        values[''] = dataOec[''];
        
        ////////////////////////////////////////////////////////////////////
        // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
        ///////////////////////////////////////////////////////////////////
  
        /////////////////////////////////////////////////////////////////
        // [FIN] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
        /////////////////////////////////////////////////////////////////

        record.set(values);
        
        if (!record.dirty) {
            win.close();
            return;
        }

        callbacks = {
            success: function(records, operation) {
                store.reload();
                win.close();
            },
            failure: function(records, operation) {
                store.rejectChanges();
            }
        };

        Ext.getBody().mask('Guardando OecAcreditacionSolicitada ...');
        
        if (record.phantom) {
            store.rejectChanges();
            store.add(record);
        }
        
        store.sync(callbacks);
    },



    close: function(button, e, eOpts) {
        var me = this,
                win = button.up('window');
        // close the window
        win.close();
    },


    deleteOecAcreditacionSolicitada: function() {
        var me = this;

        var grid = me.getOecAcreditacionSolicitadaLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm('Atención', '¿Esta seguro que desea eliminar esta OecAcreditacionSolicitada?. Esta acción no puede ser deshecha.', function(buttonId, text, opt) {
            if (buttonId === 'yes') {
                store.remove(record);
                store.sync({
                    failure: function(records, operation) {
                        store.rejectChanges();
                    }
                });
            }
        });
    },



    showEditWindow: function(record) {
        var me = this,
                win = me.getOecAcreditacionSolicitadaWindow();
        
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('oec.oecacreditacionsolicitada.edit.window', {
                title: 'OecAcreditacionSolicitada'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    showEditWindowOecAcreditacionSolicitada: function(record) {
        var me = this,
                win = me.getOecAcreditacionSolicitadaWindowOecAcreditacionSolicitada(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('oec.oecacreditacionsolicitada.edit.oecacreditacionsolicitadawindow', {
                title: isNew ? 'Añadir OecAcreditacionSolicitada' : 'Editar OecAcreditacionSolicitada'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();

        // load form with data
        win.down('form').loadRecord(record);
    }
});