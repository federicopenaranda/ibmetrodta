Ext.define('ibmetrodta.view.formularios.AnexoConvenio.AlcanceAcreditacionInsp2Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.alcanceacreditacioninsp2lista',
    header: false,
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.AlcanceAcreditacionInsp2'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionInsp2',
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
                        text: 'Fecha Acreditación',
                        dataIndex: 'fecha_acreditacion_alcance_acreditacion_insp',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    }/*,
                    {
                        text: 'Procedimiento Alcance',
                        dataIndex: 'procedimiento_alcance_acreditacion_insp'
                    }*/,
                    {
                        text: 'Norma de Referencia',
                        dataIndex: 'norma_ref_alcance_acreditacion_insp'
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
                        text: 'Signatario Alcance',
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