Ext.define('ibmetrodta.view.proceso.PeticionEstado.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.peticionestado.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'proceso.peticionestado'},
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
                        text: 'Estado',
                        dataIndex: 'descripcion_estado'
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
                            itemId: 'habilitar',
                            iconCls: 'icon_add',
                            text: 'Habilitar'
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