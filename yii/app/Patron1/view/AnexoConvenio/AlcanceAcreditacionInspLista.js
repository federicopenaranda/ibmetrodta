Ext.define('ibmetrodta.view.formularios.AnexoConvenio.AlcanceAcreditacionInspLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.alcanceacreditacioninsplista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.AlcanceAcreditacionInsp'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionInsp',
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
                        text: 'Anexo Convenio',
                        dataIndex: 'fk_id_anexo_convenio',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'responsable_anexo_convenio' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo Fecha / Fecha y hora
                        text: 'Fecha Acreditacion Alcance Acreditacion Insp',
                        dataIndex: 'fecha_acreditacion_alcance_acreditacion_insp',
                        xtype: 'datecolumn', 
                        format: 'Y-m-d'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Procedimiento Alcance Acreditacion Insp',
                        dataIndex: 'procedimiento_alcance_acreditacion_insp'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Norma Ref Alcance Acreditacion Insp',
                        dataIndex: 'norma_ref_alcance_acreditacion_insp'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Items Inspeccionados Alcance Acreditacion Insp',
                        dataIndex: 'items_inspeccionados_alcance_acreditacion_insp'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Items Referencia Alcance Acreditacion Insp',
                        dataIndex: 'items_referencia_alcance_acreditacion_insp'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Signatario Alcance Acreditacion Insp',
                        dataIndex: 'signatario_alcance_acreditacion_insp'
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