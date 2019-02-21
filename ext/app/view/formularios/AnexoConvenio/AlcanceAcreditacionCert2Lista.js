Ext.define('ibmetrodta.view.formularios.AnexoConvenio.AlcanceAcreditacionCert2Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.alcanceacreditacioncert2lista',
    header: false,
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.AlcanceAcreditacionCert2'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionCert2',
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
                        dataIndex: 'fecha_acreditacion_alcance_acreditacion_cert'
                    },
                    {
                        text: 'Producto Alcance',
                        dataIndex: 'producto_alcance_acreditacion_cert'
                    },
                    {
                        text: 'Norma de Referencia',
                        dataIndex: 'norma_referencia_alcance_acreditacion_cert'
                    },
                    {
                        text: 'Sector Económico',
                        dataIndex: 'sector_economico_alcance_acreditacion_cert',
                        hidden: true
                    },
                    {
                        text: 'Actividad de Sector',
                        dataIndex: 'actividad_sector_alcance_acreditacion_cert',
                        hidden: true
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