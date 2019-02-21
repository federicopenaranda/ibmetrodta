Ext.define('ibmetrodta.view.formularios.InfoEnsayo.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.infoensayo.lista',
    header: false,
    iconCls: 'icon_gear',
    store: { type: 'formularios.infoensayo' },
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
                        text: 'Trámite',
                        dataIndex: 'nombre_codigo'
                    },
                    {
                        text: 'Estado Info Ensayo',
                        dataIndex: 'estado_info_ensayo',
                        renderer: function (valor) {
                            if (valor === 1)
                                return 'Activo';

                            if (valor === 0)
                                return 'Inactivo';

                            return '';
                        }
                    },
                    {
                        text: 'Objetivo Info Ensayo',
                        dataIndex: 'objetivo_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Nombre Info Ensayo',
                        dataIndex: 'nombre_info_ensayo'
                    },
                    {
                        text: 'Norma Info Ensayo',
                        dataIndex: 'norma_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Matriz Info Ensayo',
                        dataIndex: 'matriz_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Tipo Servicio Info Ensayo',
                        dataIndex: 'tipo_servicio_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Categoria Info Ensayo',
                        dataIndex: 'categoria_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Pesonal Autorizado Info Ensayo',
                        dataIndex: 'pesonal_autorizado_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Rango Medicion Info Ensayo',
                        dataIndex: 'rango_medicion_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Incertidumbre Medicion Info Ensayo',
                        dataIndex: 'incertidumbre_medicion_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Lista Equipos Utilizados Info Ensayo',
                        dataIndex: 'lista_equipos_utilizados_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Ad Calculo Incertidumbre Info Ensayo',
                        dataIndex: 'ad_calculo_incertidumbre_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Ad Confirmacion Aplicacion Info Ensayo',
                        dataIndex: 'ad_confirmacion_aplicacion_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Ad Validacion Info Ensayo',
                        dataIndex: 'ad_validacion_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Ad Patrones Referencia Info Ensayo',
                        dataIndex: 'ad_patrones_referencia_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Ad Material Referencia Info Ensayo',
                        dataIndex: 'ad_material_referencia_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Ad Comparaciones Interlaboratorios Info Ensayo',
                        dataIndex: 'ad_comparaciones_interlaboratorios_info_ensayo',
                        hidden: true
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_info_ensayo'
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
                            //hidden: me.privilegio('infoensayo.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('infoensayo.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('infoensayo.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }, '->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecalibracion.delete'),
                            itemId: 'descargaForm',
                            iconCls: 'icon_reporte',
                            text: 'Descargar PDF'
                        }
                    ]
                }/*,
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }*/
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