Ext.define('ibmetrodta.view.evaluacion.Evaluacion.AlcanceAcreditacionInspLista', {
    extend: 'Ext.grid.Panel',
    header: false,
    alias: 'widget.evaluacion.evaluacion.alcanceacreditacioninsplista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.evaluacion.AlcanceAcreditacionInsp'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionInsp',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            selType: 'rowmodel',
            columns: {
                defaults: {
                    flex: 1
                },
                sortAscText: 'Ordenar Ascendentemente',
                sortDescText: 'Ordenar Descendentemente',
                columnsText: 'Columnas',
                items: [
                    {
                        text: 'Procedimiento de Inspección',
                        dataIndex: 'procedimiento_inspeccion_alcance_acreditacion_insp'
                    },
                    {
                        text: 'Norma de Ref.',
                        dataIndex: 'norma_referencia_alcance_acreditacion_insp'
                    },
                    {
                        text: 'Items Inspeccionados',
                        dataIndex: 'items_inspeccionados_alcance_acreditacion_insp'
                    },
                    {
                        text: 'Items de Referencia',
                        dataIndex: 'items_referencia_alcance_acreditacion_insp'
                    },
                    {
                        text: 'Signatario',
                        dataIndex: 'signatario_alcance_acreditacion_insp'
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