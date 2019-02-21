Ext.define('ibmetrodta.view.oec.Oec.OecAcreditacionSolicitadaLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oec.oec.oecacreditacionsolicitadalista',
    header: false,
    iconCls: 'icon_user',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.oec.OecContacto'
    ],
    minHeight: 250,
    store: 'OecAcreditacionSolicitada',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: 1
                },
                sortAscText: 'Ordenar Ascendentemente',
                sortDescText: 'Ordenar Descendentemente',
                columnsText: 'Columnas',
                items: [
                    {
                        text: 'Ensayo/Calibración/Certificación/Inspección Realizada',
                        dataIndex: 'inspeccion_oec_acreditacion_solicitada'
                    },
                    {
                        text: 'Normas/Procedimientos Internos o Especificaciones',
                        dataIndex: 'especificaciones_oec_acreditacion_solicitada'
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