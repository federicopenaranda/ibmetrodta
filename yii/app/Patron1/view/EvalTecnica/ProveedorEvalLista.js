Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.ProveedorEvalLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios;display.evaltecnica.proveedorevallista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios;display.ProveedorEval'
    ],
    minHeight: 250,
    store: 'ProveedorEval',
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
                        text: 'Nombre Proveedor Eval',
                        dataIndex: 'nombre_proveedor_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Resultados Proveedor Eval',
                        dataIndex: 'resultados_proveedor_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Indicador Desempeno Proveedor Eval',
                        dataIndex: 'indicador_desempeno_proveedor_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Conclusion Desempeno Proveedor Eval',
                        dataIndex: 'conclusion_desempeno_proveedor_eval'
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