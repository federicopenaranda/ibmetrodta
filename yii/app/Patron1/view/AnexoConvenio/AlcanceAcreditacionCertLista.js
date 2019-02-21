Ext.define('ibmetrodta.view.formularios.AnexoConvenio.AlcanceAcreditacionCertLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.alcanceacreditacioncertlista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.formularios.AlcanceAcreditacionCert'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionCert',
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
                        text: 'Fecha Acreditacion Alcance Acreditacion Cert',
                        dataIndex: 'fecha_acreditacion_alcance_acreditacion_cert',
                        xtype: 'datecolumn', 
                        format: 'Y-m-d'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Producto Alcance Acreditacion Cert',
                        dataIndex: 'producto_alcance_acreditacion_cert'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Norma Referencia Alcance Acreditacion Cert',
                        dataIndex: 'norma_referencia_alcance_acreditacion_cert'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Sector Economico Alcance Acreditacion Cert',
                        dataIndex: 'sector_economico_alcance_acreditacion_cert'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Actividad Sector Alcance Acreditacion Cert',
                        dataIndex: 'actividad_sector_alcance_acreditacion_cert'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Codigo Iaf Alcance Acreditacion Cert',
                        dataIndex: 'codigo_iaf_alcance_acreditacion_cert'
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