Ext.define('ibmetrodta.view.formularios.InformeAcred.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.informeacred.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.informeacred'},
    minHeight: 250,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
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
                    itemId: 'tbInformeAcred',
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
                        }, '->',
                        {
                            xtype: 'button',
                            itemId: 'descargaForm',
                            iconCls: 'icon_reporte',
                            text: 'Descargar PDF'
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
    
    
    privilegio: function (opcion) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return (res !== null) ? false : true;
    }
});