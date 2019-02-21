Ext.define('ibmetrodta.view.proceso.PeticionArchivoAdicional.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.peticionarchivoadicional.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'proceso.peticionarchivo'},
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
                        text: 'Descargar',
                        dataIndex: 'nombre_peticion_archivo',
                        renderer: function (value) {
                            return '<a href="'
                                    + ibmetrodta.app.globals.globalServerFilePath
                                    + '/PeticionArchivo010401/Nombrepeticionarchivo/' 
                                    + value 
                                    +'" target="_blank">Descargar</a>';
                        }
                    },
                    {
                        text: 'Versión',
                        dataIndex: 'version_peticion_archivo'
                    },
                    {
                        text: 'Estado',
                        dataIndex: 'activo_peticion_archivo',
                        renderer: function (valor) {
                            if (valor === 1)
                                return 'Activo';

                            if (valor === 0)
                                return 'Inactivo';

                            return '';
                        }
                    },
                    {
                        text: 'Descripcion',
                        dataIndex: 'descripcion_peticion_archivo',
                        hidden: true
                    },
                    {
                        text: 'Tipo',
                        dataIndex: 'tipo_peticion_archivo',
                        hidden: true
                    },
                    {
                        text: 'Archivo Adicional',
                        dataIndex: 'adicional_peticion_archivo',
                        renderer: function (valor) {
                            if (valor === 1)
                                return 'Si';

                            if (valor === 0)
                                return 'No';

                            return '';
                        },
                        hidden: true
                    },
                    {
                        text: 'Escaneado',
                        dataIndex: 'escaneado_peticion_archivo'
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_peticion_archivo'
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
                            //hidden: me.privilegio('peticionarchivoadicional.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            hidden: true, //me.privilegio('peticionarchivoadicional.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('peticionarchivoadicional.delete'),
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