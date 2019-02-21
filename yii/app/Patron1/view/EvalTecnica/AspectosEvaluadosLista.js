Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.AspectosEvaluadosLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios;display.evaltecnica.aspectosevaluadoslista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios;display.AspectosEvaluados'
    ],
    minHeight: 250,
    store: 'AspectosEvaluados',
    initComponent: function() {

        //var storeReferencial2 = Ext.data.StoreManager.lookup('opciones.storeReferencial2');
        //storeReferencial2.load();

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
                        // Campo de llave foranea
                        text: 'Eval Tecnica',
                        dataIndex: 'fk_id_eval_tecnica',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'id_eval_tecnica' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Nombre Aspectos Evaluados',
                        dataIndex: 'nombre_aspectos_evaluados'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Educacion Aspectos Evaluados',
                        dataIndex: 'educacion_aspectos_evaluados'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Formacion Aspectos Evaluados',
                        dataIndex: 'formacion_aspectos_evaluados'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Experiencia Aspectos Evaluados',
                        dataIndex: 'experiencia_aspectos_evaluados'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Habilidades Aspectos Evaluados',
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