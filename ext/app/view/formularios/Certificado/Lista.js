Ext.define('ibmetrodta.view.formularios.Certificado.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.certificado.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.certificado'},
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
                        text: 'Fecha de Acreditación Inicial',
                        dataIndex: 'fecha_acreditacion_inicial_certificado',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Fecha de Validez',
                        dataIndex: 'fecha_validez_certificado',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Texto',
                        dataIndex: 'texto1_certificado',
                        hidden: true
                    },
                    {
                        text: 'Escaneado',
                        dataIndex: 'escaneado_certificado',
                        hidden: true
                    },
                    {
                        text: 'Fecha Ultima Generacion Certificado',
                        dataIndex: 'fecha_ultima_generacion_certificado'
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_certificado'
                    },
                    {
                        text: 'Estado',
                        dataIndex: 'estado_certificado'
                    },
                    {
                        text: 'Código',
                        dataIndex: 'codigo_certificado'
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
                            //hidden: me.privilegio('certificado.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('certificado.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('certificado.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }, '->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('evaluacion.delete'),
                            itemId: 'descargaCert',
                            iconCls: 'icon_reporte',
                            text: 'Descargar Certificado (PDF)'
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