Ext.define('ibmetrodta.controller.formularios.SatisfaccionEvaluacion', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'formularios.SatisfaccionEvaluacion'
    ],
    views: [
        'formularios.SatisfaccionCliente.SatisfaccionEvaluacionLista',
        'formularios.SatisfaccionCliente.Lista'
    ],
    refs: [
        {
            ref: 'SatisfaccionEvaluacionLista',
            selector: '[xtype=formularios.satisfaccioncliente.satisfaccionevaluacion.satisfaccionevaluacionlista]'
        },
        {
            ref: 'SatisfaccionClienteLista',
            selector: '[xtype=formularios.satisfaccioncliente.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=formularios.satisfaccioncliente.satisfaccionevaluacionlista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios.satisfaccioncliente.satisfaccionevaluacionlista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios.satisfaccioncliente.satisfaccionevaluacionlista] button#edit': {
                    click: this.edit2
                },
                'grid[xtype=formularios.satisfaccioncliente.satisfaccionevaluacionlista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=formularios.satisfaccioncliente.satisfaccionevaluacionlista] gridview': {
                    itemadd: this.edit
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var me = this;
        var store = grid.getStore();

        store.clearFilter(true);
        var contSatisfaccionCliente = me.getController('formularios.SatisfaccionCliente');
        
        if ( contSatisfaccionCliente.boolSatisfaccionClienteEdit === 1)
        {
            var grid2 = me.getSatisfaccionClienteLista();
            var dd = grid2.getSelectionModel().getSelection();

            if ( dd.length === 1 )
            {
                var record = dd[0];
                var data = record.getData();

                store.filter( 'fk_id_satisfaccion_cliente', data['id_satisfaccion_cliente'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this,
                grid = me.getSatisfaccionEvaluacionLista(),
                records = grid.getSelectionModel().getSelection(),
                botonEdit = grid.down("[xtype='toolbar'] button#edit"),
                botonDelete = grid.down("[xtype='toolbar'] button#delete");

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
                grid = me.getSatisfaccionEvaluacionLista(),
                plugin = grid.editingPlugin;

        plugin.startEdit(records[ 0 ], 0);
    },


    edit2: function() {
        var me = this,
                grid = me.getSatisfaccionEvaluacionLista(),
                plugin = grid.editingPlugin,
                record = grid.getSelectionModel().getSelection()[0];

        plugin.startEdit(record, 0);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.formularios.SatisfaccionEvaluacion');
        
        var grid1 = me.getSatisfaccionClienteLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        
        var grid2 = me.getSatisfaccionEvaluacionLista();
        var store2 = grid2.getStore();
        var contSatisfaccionCliente = me.getController('formularios.SatisfaccionCliente');

        if ( recSeleccionados.length === 1 && contSatisfaccionCliente.boolSatisfaccionClienteEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_satisfaccion_cliente', data1['id_satisfaccion_cliente']);

            store2.insert(0, record);
            grid2.cellEditing.startEditByPosition({
                row: 0, 
                column: 0
            });
        }
        else
        {
            if ( contSatisfaccionCliente.boolSatisfaccionClienteEdit === 0 )
            {
                store2.insert(0, record);
                grid2.cellEditing.startEditByPosition({
                    row: 0, 
                    column: 0
                });
            }
            else
            {
                console.log('[SatisfaccionEvaluacion] Error al recuperar el ID del satisfaccioncliente');
                return 'Error';
            }
        }
    },


    remove: function( button, e, eOpts ) {
        var me = this,
                grid = me.getSatisfaccionEvaluacionLista(),
                store = grid.getStore(),
                record = grid.getSelectionModel().getSelection()[0],
                contSatisfaccionCliente = me.getController('formularios.SatisfaccionCliente');
        
        if ( contSatisfaccionCliente.boolSatisfaccionClienteEdit === 0 )
        {
            store.remove(record);
        }
        else
        {
            if ( record.phantom )
            {
                store.remove(record);
            }
            else
            {
                Ext.Msg.confirm({
                    title: 'Atención',
                    msg: '¿Esta seguro que desea eliminar este Teléfono?. Esta acción no puede ser deshecha.',
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(buttonId, text, opt) 
                    {
                        if (buttonId === 'yes') {
                            store.remove(record);
                        }
                    }
                });
            }
        }
    },


    sincronizar: function() {
        var me = this,
                grid = me.getSatisfaccionEvaluacionLista(),
                store = grid.getStore();
        
        store.sync();
    }
});