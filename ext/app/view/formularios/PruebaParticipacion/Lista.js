Ext.define('ibmetrodta.view.formularios.PruebaParticipacion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.pruebaparticipacion.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.pruebaparticipacion'},
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
                        text: 'Criterio Evaluacion',
                        dataIndex: 'fk_id_criterio_evaluacion',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_criterio_evaluacion');
                        }
                    },
                    {
                        text: 'Horas de Evaluacion',
                        dataIndex: 'horas_evaluacion_prueba_participacion'
                    },
                    {
                        text: 'Dir Nombre Responsable',
                        dataIndex: 'dir_nombre_responsable_prueba_participacion'
                    },
                    {
                        text: 'Dir Cargo',
                        dataIndex: 'dir_cargo_prueba_participacion'
                    },
                    {
                        xtype: 'datecolumn',
                        text: 'Dir Fecha',
                        dataIndex: 'dir_fecha_prueba_participacion',
                        format: 'Y-m-d'
                    },
                    {
                        text: 'Oec Nombre Responsable',
                        dataIndex: 'oec_nombre_responsable_prueba_participacion'
                    },
                    {
                        text: 'Oec Cargo',
                        dataIndex: 'oec_cargo_prueba_participacion'
                    },
                    {
                        text: 'Oec Fecha',
                        dataIndex: 'oec_fecha_prueba_participacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Fecha Creacion',
                        dataIndex: 'fecha_creacion_prueba_participacion',
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
                            //hidden: me.privilegio('pruebaparticipacion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('pruebaparticipacion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('pruebaparticipacion.delete'),
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