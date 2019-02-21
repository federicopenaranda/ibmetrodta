Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.supervisionevaluador.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.supervisionevaluador'},
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
                        text: 'Criterio de Eval.',
                        dataIndex: 'criterio_evaluacion_supervision_evaluador'
                    },
                    {
                        text: 'Comentarios',
                        dataIndex: 'comentarios_supervision_evaluador',
                        hidden: true
                    },
                    {
                        text: 'Observaciones',
                        dataIndex: 'observaciones_supervision_evaluador',
                        hidden: true
                    },
                    {
                        text: 'Nombre',
                        dataIndex: 'nombre_supervision_evaluador'
                    },
                    {
                        text: 'Cargo',
                        dataIndex: 'cargo_supervision_evaluador'
                    },
                    {
                        text: 'Fecha',
                        dataIndex: 'fecha_supervision_evaluador',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_supervision_evaluador',
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
                            //hidden: me.privilegio('noconformidad.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('noconformidad.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('noconformidad.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }, '->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('designacionevaluador.delete'),
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