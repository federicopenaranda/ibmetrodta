Ext.define('ibmetrodta.view.evaluacion.Evaluacion.AlcanceAcreditacionCertLista', {
    extend: 'Ext.grid.Panel',
    header: false,
    alias: 'widget.evaluacion.evaluacion.alcanceacreditacioncertlista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.evaluacion.AlcanceAcreditacionCert'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionCert',
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
                        text: 'Producto',
                        dataIndex: 'producto_alcance_acreditacion_cert'
                    },
                    {
                        text: 'Norma de Ref.',
                        dataIndex: 'norma_referencia_alcance_acreditacion_cert'
                    },
                    {
                        text: 'Actividad',
                        dataIndex: 'actividad_alcance_acreditacion_cert'
                    },
                    {
                        text: 'Código IAF',
                        dataIndex: 'codigo_iaf_alcance_acreditacion_cert'
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