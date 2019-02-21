Ext.define('ibmetrodta.controller.formularios.SupervisionCriterio', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'formularios.SupervisionCriterio'
    ],
    views: [
        'formularios.SupervisionEvaluador.SupervisionCriterioLista',
        'formularios.SupervisionEvaluador.Lista'
    ],
    refs: [
        {
            ref: 'SupervisionCriterioLista',
            selector: '[xtype=formularios.supervisionevaluador.supervisioncriterio.supervisioncriteriolista]'
        },
        {
            ref: 'SupervisionEvaluadorLista',
            selector: '[xtype=formularios.supervisionevaluador.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=formularios.supervisionevaluador.supervisioncriteriolista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios.supervisionevaluador.supervisioncriteriolista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios.supervisionevaluador.supervisioncriteriolista] button#edit': {
                    click: this.edit2
                },
                'grid[xtype=formularios.supervisionevaluador.supervisioncriteriolista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=formularios.supervisionevaluador.supervisioncriteriolista] gridview': {
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
        var contSupervisionEvaluador = me.getController('formularios.SupervisionEvaluador');
        
        if ( contSupervisionEvaluador.boolSupervisionEvaluadorEdit === 1)
        {
            var grid2 = me.getSupervisionEvaluadorLista();
            var dd = grid2.getSelectionModel().getSelection();

            if ( dd.length === 1 )
            {
                var record = dd[0];
                var data = record.getData();

                store.filter( 'fk_id_supervision_evaluador', data['id_supervision_evaluador'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this,
                grid = me.getSupervisionCriterioLista(),
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
                grid = me.getSupervisionCriterioLista(),
                plugin = grid.editingPlugin;

        plugin.startEdit(records[ 0 ], 0);
    },


    edit2: function() {
        var me = this,
                grid = me.getSupervisionCriterioLista(),
                plugin = grid.editingPlugin,
                record = grid.getSelectionModel().getSelection()[0];

        plugin.startEdit(record, 0);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.formularios.SupervisionCriterio');
        
        var grid1 = me.getSupervisionEvaluadorLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        
        var grid2 = me.getSupervisionCriterioLista();
        var store2 = grid2.getStore();
        var contSupervisionEvaluador = me.getController('formularios.SupervisionEvaluador');

        if ( recSeleccionados.length === 1 && contSupervisionEvaluador.boolSupervisionEvaluadorEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_supervision_evaluador', data1['id_supervision_evaluador']);

            store2.insert(0, record);
            grid2.cellEditing.startEditByPosition({
                row: 0, 
                column: 0
            });
        }
        else
        {
            if ( contSupervisionEvaluador.boolSupervisionEvaluadorEdit === 0 )
            {
                store2.insert(0, record);
                grid2.cellEditing.startEditByPosition({
                    row: 0, 
                    column: 0
                });
            }
            else
            {
                console.log('[SupervisionCriterio] Error al recuperar el ID del supervisionevaluador');
                return 'Error';
            }
        }
    },


    remove: function( button, e, eOpts ) {
        var me = this,
                grid = me.getSupervisionCriterioLista(),
                store = grid.getStore(),
                record = grid.getSelectionModel().getSelection()[0],
                contSupervisionEvaluador = me.getController('formularios.SupervisionEvaluador');
        
        if ( contSupervisionEvaluador.boolSupervisionEvaluadorEdit === 0 )
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
                grid = me.getSupervisionCriterioLista(),
                store = grid.getStore();
        
        store.sync();
    }
});