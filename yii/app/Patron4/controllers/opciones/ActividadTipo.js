Ext.define('ibmetrodta.controller.opciones.ActividadTipo',{
    extend:'ibmetrodta.controller.Base',
    stores: [
        'opciones.ActividadTipo'
    ],
    views: [
        'opciones.ActividadTipo.Lista'
    ],
    refs: [
	{
            ref: 'ActividadTipoLista',
            selector:'[xtype=opciones.actividadtipo.lista]'
	}
    ],
    init:function(){
        this.listen({
            controller:{},
            component:{
                'grid[xtype=opciones.actividadtipo.lista]': {
                    edit: this.save,
                    canceledit: this.cancel,
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=opciones.actividadtipo.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=opciones.actividadtipo.lista] button#edit': {
                    click: this.edit2
                },
                'grid[xtype=opciones.actividadtipo.lista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=opciones.actividadtipo.lista] gridview': {
                    itemadd: this.edit
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var store = grid.getStore();
        store.clearFilter(true);
        store.load();
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getActividadTipoLista();
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


    cancel: function(editor, context, eOpts) {
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    },


    edit: function(records, index, node, eOpts) {
        var me = this,
                grid = me.getActividadTipoLista(),
                plugin = grid.editingPlugin;
        plugin.startEdit(records[ 0 ], 0);
    },


    edit2: function() {
        var me = this,
                grid = me.getActividadTipoLista(),
                plugin = grid.editingPlugin,
                record = grid.getSelectionModel().getSelection()[0];

        plugin.startEdit(record, 0);
    },


    add: function(button, e, eOpts) {
        var me = this,
                grid = me.getActividadTipoLista(),
                plugin = grid.editingPlugin,
                store = grid.getStore();

        if (plugin.editing) {
            Ext.Msg.alert('Atenci�n', 'Por favor termine de editar antes de ingresar un nuevo registro.');
            return false;
        }
                
        store.insert(0, {});
    },


    save: function(editor, context, eOpts) {
        var store = context.record.store,
                callbacks;

        callbacks = {
            success: function(records, operation) {
                store.reload();
            },
            failure: function(records, operation) {
                store.rejectChanges();
            }
        };
        
        // save
        store.sync(callbacks);
    },


    remove: function() {
        var me = this;

        var grid = me.getActividadTipoLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta ActividadTipo?. Esta acción no puede ser deshecha.',
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
                    store.reload();
                }
            }
        });
    }
});