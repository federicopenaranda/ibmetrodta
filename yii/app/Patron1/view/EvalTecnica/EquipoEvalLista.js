Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.EquipoEvalLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios;display.evaltecnica.equipoevallista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios;display.EquipoEval'
    ],
    minHeight: 250,
    store: 'EquipoEval',
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
                        text: 'Nombre Equipo Eval',
                        dataIndex: 'nombre_equipo_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Disponibilidad Equipo Eval',
                        dataIndex: 'disponibilidad_equipo_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Programa Calibracion Equipo Eval',
                        dataIndex: 'programa_calibracion_equipo_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Identificacion Individual Equipo Eval',
                        dataIndex: 'identificacion_individual_equipo_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Registros Equipo Eval',
                        dataIndex: 'registros_equipo_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Verificaciones Intermedias Equipo Eval',
                        dataIndex: 'verificaciones_intermedias_equipo_eval'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Proteccion Equipo Eval',
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