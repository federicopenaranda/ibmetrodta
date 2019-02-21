Ext.define('ibmetrodta.view.formularios.InformeAcred.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.informeacred.lista',
    title: 'Administrar InformeAcred',
    iconCls: 'icon_gear',
    store: 'InformeAcred',
    minHeight: 250,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: {
                defaults: {
                	flex: .2
                },
                items: [
					{
                        text: 'Peticion',
                        dataIndex: 'fk_id_peticion',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'codigo_peticion' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Observaciones Ra Oec Informe Acred',
                        dataIndex: 'observaciones_ra_oec_informe_acred'
                    },
					{
                        text: 'Observaciones Ra Ee Informe Acred',
                        dataIndex: 'observaciones_ra_ee_informe_acred'
                    },
					{
                        text: 'Cumplimiento Etapas Informe Acred',
                        dataIndex: 'cumplimiento_etapas_informe_acred'
                    },
					{
                        text: 'Recomendacion Ra Informe Acred',
                        dataIndex: 'recomendacion_ra_informe_acred'
                    },
					{
                        text: 'Recomendacion Fecha Informe Acred',
                        dataIndex: 'recomendacion_fecha_informe_acred',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Toma Decision Da Informe Acred',
                        dataIndex: 'toma_decision_da_informe_acred'
                    },
					{
                        text: 'Toma Decision Da Fecha Informe Acred',
                        dataIndex: 'toma_decision_da_fecha_informe_acred',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Fecha Creacion Informe Acred',
                        dataIndex: 'fecha_creacion_informe_acred',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
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
                            //hidden: me.privilegio('informeacred.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('informeacred.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('informeacred.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent(arguments);
    },


    privilegio: function( opcion ) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return ( res !== null ) ? false : true;
    }
});