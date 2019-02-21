Ext.define('ibmetrodta.view.tramite.Tramite.ListaOec', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tramite.tramite.listaoec',
    title: 'Administrar OECs',
    iconCls: 'icon_gear',
    store: 'UsuarioOec',
    collapsible: true,
    minHeight: 200,
    split: true,
    region: 'north',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
                    {
                        text: 'Nombre',
                        dataIndex: 'nombre_oec'
                    },
                    {
                        text: 'Tipo',
                        dataIndex: 'fk_id_oec_tipo',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_oec_tipo');
                        }
                    },
                    {
                        text: 'Pais',
                        dataIndex: 'fk_id_pais',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_pais');
                        }
                    },
                    {
                        text: 'NIT',
                        dataIndex: 'nit_oec'
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent(arguments);
    }
});