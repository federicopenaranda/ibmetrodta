Ext.define('ibmetrodta.controller.opciones.CodigoPeticion', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'opciones.CodigoPeticion'
    ],
    views: [
        'opciones.CodigoPeticion.Lista',
        'opciones.CodigoPeticion.edit.Form',
        'opciones.CodigoPeticion.edit.Window'
    ],
    refs: [
        {
            ref: 'CodigoPeticionLista',
            selector: '[xtype=opciones.codigopeticion.lista]'
        },
        {
            ref: 'CodigoPeticionWindow',
            selector: '[xtype=opciones.codigopeticion.edit.window]'
        },
        {
            ref: 'CodigoPeticionForm',
            selector: '[xtype=opciones.codigopeticion.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=opciones.codigopeticion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=opciones.codigopeticion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=opciones.codigopeticion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=opciones.codigopeticion.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=opciones.codigopeticion.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=opciones.codigopeticion.edit.window] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getCodigoPeticionLista();
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
        var me = this;
        var grid = me.getCodigoPeticionLista();
        var record = grid.getSelectionModel().getSelection()[0];
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.opciones.CodigoPeticion');
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getCodigoPeticionLista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;

        // set values of record from form
        record.set(values);
        
        // check if form is even dirty...if not, just close window and stop everything...nothing to see here
        if (!record.dirty) {
            win.close();
            return;
        }
        // setup generic callback config for create/save methods
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
        Ext.getBody().mask('Guardando Código de Petición ...');
        // if new record...
        if (record.phantom) {
            // reject any other changes
            store.rejectChanges();
            // add the new record
            store.add(record);
        }
        // persist the record
        store.sync(callbacks);
    },


    close: function(button, e, eOpts) {
        var win = button.up('window');
        // close the window
        win.close();
    },


    remove: function() {
        var me = this;

        var grid = me.getCodigoPeticionLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta Gráfico?. Esta acción no puede ser deshecha.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            buttonText: {
                yes: 'Eliminar',
                no: 'Cancelar'
            },
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
                win = me.getCodigoPeticionWindow(),
                isNew = record.phantom;

        if (!win) {
            win = Ext.widget('opciones.codigopeticion.edit.window', {
                title: isNew ? 'Añadir Código de Petición' : 'Editar Código de Petición'
            });
        }

        win.show();
        win.doComponentLayout();
        win.down('form').loadRecord(record);
    }
});