Ext.define('ibmetrodta.view.proceso.Peticion.PeticionEstadoLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.peticion.peticionestado.peticionestadolista',
    store: 'PeticionEstado',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.model.proceso.PeticionEstado',
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
                        text: 'Peticion',
                        dataIndex: 'fk_id_peticion',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'codigo_peticion' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo de llave foranea
                        text: 'Estado',
                        dataIndex: 'fk_id_estado',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_estado' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo Booleano
                        text: 'Activo Peticion Estado',
                        dataIndex: 'activo_peticion_estado',
                        renderer: function (valor) {
                            if ( valor === 1 )
                                return 'Si';
                            
                            if ( valor === 0 )
                                return 'No';
                            
                            return '';
                        },
                        editor: {
                            xtype: 'combo',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data : [['Si', 1],['No', 0]]
                            }),
                            triggerAction: 'all',
                            valueField: 'valor',
                            displayField: 'nombre',
                            queryMode: 'local',
                            forceSelection: true,
                            editable: false
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