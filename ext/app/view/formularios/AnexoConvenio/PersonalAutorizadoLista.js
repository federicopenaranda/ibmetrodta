Ext.define('ibmetrodta.view.formularios.AnexoConvenio.PersonalAutorizadoLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.personalautorizadolista',
    header: false,
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.PersonalAutorizado'
    ],
    minHeight: 250,
    store: 'PersonalAutorizado',
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
                        text: 'Ensayista',
                        dataIndex: 'ensayista_personal_autorizado'
                    },
                    {
                        text: 'Ensayo',
                        dataIndex: 'ensayo_personal_autorizado'
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