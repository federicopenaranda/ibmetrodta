Ext.define('ibmetrodta.view.evaluacion.Evaluacion.PlanEvaluacionLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.evaluacion.evaluacion.planevaluacionlista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.evaluacion.PlanEvaluacion'
    ],
    minHeight: 250,
    store: 'PlanEvaluacion',
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
                        text: 'Evaluacion',
                        dataIndex: 'fk_id_evaluacion',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'codigo_evaluacion' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo de llave foranea
                        text: 'Oec Contacto',
                        dataIndex: 'fk_id_oec_contacto',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'primer_nombre_oec_contacto' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo Fecha / Fecha y hora
                        text: 'Fecha Plan Evaluacion',
                        dataIndex: 'fecha_plan_evaluacion',
                        xtype: 'datecolumn', 
                        format: 'Y-m-d'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Requisitos Norma Plan Evaluacion',
                        dataIndex: 'requisitos_norma_plan_evaluacion'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Metodologia Plan Evaluacion',
                        dataIndex: 'metodologia_plan_evaluacion'
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