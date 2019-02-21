Ext.define('ibmetrodta.view.formularios.AnexoConvenio.PersonalAutorizadoLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.personalautorizado.personalautorizadolista',
    store: 'PersonalAutorizado',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.model.formularios.PersonalAutorizado',
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
                        text: 'Anexo Convenio',
                        dataIndex: 'fk_id_anexo_convenio',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'responsable_anexo_convenio' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Campo 5',
                        dataIndex: 'ensayista_personal_autorizado',
                        editor: {
                            xtype: 'textareafield',
                            name: 'Ensayista Personal Autorizado',
                            fieldLabel: 'Ensayista Personal Autorizado',
                            height: 80
                        }
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Campo 5',
                        dataIndex: 'ensayo_personal_autorizado',
                        editor: {
                            xtype: 'textareafield',
                            name: 'Ensayo Personal Autorizado',
                            fieldLabel: 'Ensayo Personal Autorizado',
                            height: 80
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