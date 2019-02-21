Ext.define('ibmetrodta.view.formularios.EvalTecnica.AspectosEvaluadosLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.evaltecnica.aspectosevaluadoslista',
    header: false,
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.AspectosEvaluados'
    ],
    minHeight: 250,
    store: 'AspectosEvaluados',
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
                        dataIndex: 'nombre_aspectos_evaluados'
                    },
                    {
                        text: 'Educación',
                        dataIndex: 'educacion_aspectos_evaluados'
                    },
                    {
                        text: 'Formación',
                        dataIndex: 'formacion_aspectos_evaluados'
                    },
                    {
                        text: 'Experiencia',
                        dataIndex: 'experiencia_aspectos_evaluados'
                    },
                    {
                        text: 'Habilidades',
                        dataIndex: 'habilidades_aspectos_evaluados'
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