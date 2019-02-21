Ext.define('ibmetrodta.view.formularios.NoConformidad.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.noconformidad.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.noconformidad'},
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
                        text: 'Objetivo No Conformidad',
                        dataIndex: 'objetivo_no_conformidad'
                    },
                    {
                        text: 'Numero No Conformidad',
                        dataIndex: 'numero_no_conformidad'
                    },
                    {
                        text: 'Nombre Persona No Conformidad',
                        dataIndex: 'nombre_persona_no_conformidad'
                    },
                    {
                        text: 'Fecha No Conformidad',
                        dataIndex: 'fecha_no_conformidad',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Ref Norma No Conformidad',
                        dataIndex: 'ref_norma_no_conformidad'
                    },
                    {
                        text: 'Ref Requisito No Conformidad',
                        dataIndex: 'ref_requisito_no_conformidad'
                    },
                    {
                        text: 'No Conformidad',
                        dataIndex: 'no_conformidad'
                    },
                    {
                        text: 'Evidencia No Conformidad',
                        dataIndex: 'evidencia_no_conformidad'
                    },
                    {
                        text: 'Representate Oec No Conformidad',
                        dataIndex: 'representate_oec_no_conformidad'
                    },
                    {
                        text: 'Representate Oec Cargo No Conformidad',
                        dataIndex: 'representate_oec_cargo_no_conformidad'
                    },
                    {
                        text: 'Fecha Creacion No Conformidad',
                        dataIndex: 'fecha_creacion_no_conformidad',
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