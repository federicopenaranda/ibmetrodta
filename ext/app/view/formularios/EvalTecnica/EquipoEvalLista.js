Ext.define('ibmetrodta.view.formularios.EvalTecnica.EquipoEvalLista', {
    extend: 'Ext.grid.Panel',
    header: false,
    alias: 'widget.formularios.evaltecnica.equipoevallista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.EquipoEval'
    ],
    minHeight: 250,
    store: 'EquipoEval',
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
                        text: 'Nombre',
                        dataIndex: 'nombre_equipo_eval'
                    },
                    {
                        text: 'Disponibilidad Apropiada',
                        dataIndex: 'disponibilidad_equipo_eval'
                    },
                    {
                        text: 'Programa de Calibración',
                        dataIndex: 'programa_calibracion_equipo_eval'
                    },
                    {
                        text: 'Identificación Individual',
                        dataIndex: 'identificacion_individual_equipo_eval'
                    },
                    {
                        text: 'Registros',
                        dataIndex: 'registros_equipo_eval'
                    },
                    {
                        text: 'Verificaciones Intermedias',
                        dataIndex: 'verificaciones_intermedias_equipo_eval'
                    },
                    {
                        text: 'Protección',
                        dataIndex: 'proteccion_equipo_eval'
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