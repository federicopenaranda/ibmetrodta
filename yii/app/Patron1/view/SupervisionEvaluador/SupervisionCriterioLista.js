Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.SupervisionCriterioLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.supervisionevaluador.supervisioncriterio.supervisioncriteriolista',
    store: 'SupervisionCriterio',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.model.formularios.SupervisionCriterio',
        'Ext.selection.CellModel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.form.*'
    ],
    minHeight: 250,
    initComponent: function() {

        //var storeTablaReferencial1 = Ext.data.StoreManager.lookup('opciones.Referencial1');
        //storeTablaReferencial1.load();
        
        var me = this;
        
        me.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 2
        });
        
        Ext.applyIf(me, {
            selModel: {
                selType: 'cellmodel'
            },
            plugins: [me.cellEditing],
            columns: {
                defaults: {
                    flex: 1
                },
                items: [
					{
                        // Campo de llave foranea
                        text: 'Supervision Evaluador',
                        dataIndex: 'fk_id_supervision_evaluador',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'criterio_evaluacion_supervision_evaluador' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo de llave foranea
                        text: 'Criterio Supervision',
                        dataIndex: 'fk_id_criterio_supervision',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'tipo_criterio_supervision' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo de Texto
                        text: 'Puntaje Supervision Criterio',
                        dataIndex: 'puntaje_supervision_criterio',
                        editor: {
                            xtype: 'textfield',
                            allowBlack: false
                        }
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