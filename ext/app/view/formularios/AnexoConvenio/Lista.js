Ext.define('ibmetrodta.view.formularios.AnexoConvenio.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.anexoconvenio'},
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
                        text: 'Norma de Ref.',
                        dataIndex: 'fk_id_norma_referencia',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_norma_referencia');
                        }
                    },
                    {
                        text: 'Responsable',
                        dataIndex: 'responsable_anexo_convenio'
                    },
                    {
                        text: 'Cargo',
                        dataIndex: 'cargo_anexo_convenio'
                    },
                    {
                        text: 'Fecha',
                        dataIndex: 'fecha_anexo_convenio',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'CIPS',
                        dataIndex: 'cips_anexo_convenio'
                    },
                    {
                        text: 'Número',
                        dataIndex: 'numero_anexo_convenio'
                    },
                    {
                        text: 'Escaneado',
                        dataIndex: 'escaneado_anexo_convenio',
                        hidden: true
                    },
                    {
                        text: 'Estado',
                        dataIndex: 'estado_anexo_convenio',
                        renderer: function (valor) {
                            if (valor === 1)
                                return 'Activo';

                            if (valor === 0)
                                return 'Inactivo';

                            return '';
                        }
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_anexo_convenio',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
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
                            //hidden: me.privilegio('anexoconvenio.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('anexoconvenio.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('anexoconvenio.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }/*, '->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('evaluacion.delete'),
                            itemId: 'descargaForm',
                            iconCls: 'icon_reporte',
                            text: 'Descargar PDF'
                        }*/
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