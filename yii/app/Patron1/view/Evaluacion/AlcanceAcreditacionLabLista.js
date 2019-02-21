Ext.define('ibmetrodta.view.evaluacion.Evaluacion.AlcanceAcreditacionLabLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.evaluacion.evaluacion.alcanceacreditacionlablista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.evaluacion.AlcanceAcreditacionLab'
    ],
    minHeight: 250,
    store: 'AlcanceAcreditacionLab',
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
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Descripcion Ensayo Alcance Acreditacion Lab',
                        dataIndex: 'descripcion_ensayo_alcance_acreditacion_lab'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Metodo Ensayo Alcance Acreditacion Lab',
                        dataIndex: 'metodo_ensayo_alcance_acreditacion_lab'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Rango Medicion Alcance Acreditacion Lab',
                        dataIndex: 'rango_medicion_alcance_acreditacion_lab'
                    },
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Incertidumbre Alcance Acreditacion Lab',
                        dataIndex: 'incertidumbre_alcance_acreditacion_lab'
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