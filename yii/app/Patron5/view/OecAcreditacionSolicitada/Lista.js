Ext.define('ibmetrodta.view.oec.OecAcreditacionSolicitada.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oec.oecacreditacionsolicitada.lista',
    header: false,
    iconCls: 'icon_user',
    store: {
        type: 'oec.oecacreditacionsolicitada'
    },
    minHeight: 250,
    initComponent: function() {
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
                        text: 'Oec',
                        dataIndex: 'fk_id_oec',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_oec' ); 
                        }
                    },			
					{
                        text: 'Inspeccion Oec Acreditacion Solicitada',
                        dataIndex: 'inspeccion_oec_acreditacion_solicitada'
                    },
					{
                        text: 'Especificaciones Oec Acreditacion Solicitada',
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
                },
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