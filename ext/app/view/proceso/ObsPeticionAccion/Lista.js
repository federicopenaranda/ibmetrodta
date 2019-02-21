Ext.define('ibmetrodta.view.proceso.ObsPeticionAccion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.obspeticionaccion.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'proceso.obspeticionaccion'},
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
                        text: 'Observación',
                        dataIndex: 'obs_peticion_accion'
                    },
                    {
                        text: 'Decisión',
                        dataIndex: 'procede_obs_peticion_accion',
                        renderer: function (valor) {
                            return ( valor === 0 ) ? 'No Procede' : 'Procede';
                        }
                    },
                    {
                        text: 'Fecha y Hora de Observación',
                        dataIndex: 'fecha_hora_obs_peticion_accion'
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
                            //hidden: me.privilegio('obspeticionaccion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('obspeticionaccion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('obspeticionaccion.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }
                    ]
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