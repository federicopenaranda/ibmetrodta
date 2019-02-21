Ext.define('ibmetrodta.view.formularios.SatisfaccionCliente.SatisfaccionEvaluacionLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.satisfaccioncliente.satisfaccionevaluacion.satisfaccionevaluacionlista',
    store: 'SatisfaccionEvaluacion',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.model.formularios.SatisfaccionEvaluacion',
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
                        text: 'Criterio Satisfaccion',
                        dataIndex: 'fk_id_criterio_satisfaccion',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_criterio_satisfaccion' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo de llave foranea
                        text: 'Satisfaccion Cliente',
                        dataIndex: 'fk_id_satisfaccion_cliente',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'reclamos_satisfaccion_cliente' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo Entero / Float
                        text: 'Puntaje Satisfaccion Evaluacion',
                        dataIndex: 'puntaje_satisfaccion_evaluacion',
                        editor: {
                            xtype: 'numberfield'
                        }
                    },
					{
                        // Campo de Texto
                        text: 'Etiqueta Satisfaccion Evaluacion',
                        dataIndex: 'etiqueta_satisfaccion_evaluacion',
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