Ext.define('ibmetrodta.view.formularios.EvalTecnica.ProveedorEvalLista', {
    extend: 'Ext.grid.Panel',
    header: false,
    alias: 'widget.formularios.evaltecnica.proveedorevallista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.ProveedorEval'
    ],
    minHeight: 250,
    store: 'ProveedorEval',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            selType: 'rowmodel',
            columns: {
                defaults: {
                    flex: 1
                },
                items: [
                    {
                        text: 'Proveedor',
                        dataIndex: 'nombre_proveedor_eval'
                    },
                    {
                        text: 'Resultados',
                        dataIndex: 'resultados_proveedor_eval'
                    },
                    {
                        text: 'Indicador de Desempeño',
                        dataIndex: 'indicador_desempeno_proveedor_eval'
                    },
                    {
                        text: 'Conclusión de Desempeño',
                        dataIndex: 'conclusion_desempeno_proveedor_eval'
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});