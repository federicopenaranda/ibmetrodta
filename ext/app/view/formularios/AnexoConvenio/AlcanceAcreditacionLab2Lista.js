Ext.define('ibmetrodta.view.formularios.AnexoConvenio.AlcanceAcreditacionLab2Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.alcanceacreditacionlab2lista',
    header: false,
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.AlcanceAcreditacionLab2'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionLab2',
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
                        text: 'Descripción de Ensayo',
                        dataIndex: 'descripcion_ensayo_alcance_acreditacion_lab'
                    },
                    {
                        text: 'Método de Ensayo',
                        dataIndex: 'metodo_ensayo_alcance_acreditacion_lab'
                    },
                    {
                        text: 'Rango de Medición',
                        dataIndex: 'rango_medicion_alcance_acreditacion_lab'
                    },
                    {
                        text: 'Incertidumbre',
                        dataIndex: 'incertidumbre_alcance_acreditacion_lab'
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