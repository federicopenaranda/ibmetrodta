Ext.define('ibmetrodta.view.evaluacion.Evaluacion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.evaluacion.evaluacion.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'evaluacion.evaluacion'},
    minHeight: 250,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
                    /*{
                        text: 'Oec Contacto Alta Direccion',
                        dataIndex: 'fk_id_oec_contacto_alta_direccion',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('codigo_peticion');
                        }
                    },
                    {
                        text: 'Oec Contacto Gerente Tecnico',
                        dataIndex: 'fk_id_oec_contacto_gerente_tecnico',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('codigo_peticion');
                        }
                    },
                    {
                        text: 'Oec Contacto Gerente Calidad',
                        dataIndex: 'fk_id_oec_contacto_gerente_calidad',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('primer_nombre_oec_contacto');
                        }
                    },*/
                    {
                        text: 'Codigo Evaluacion',
                        dataIndex: 'codigo_evaluacion'
                    },
                    {
                        text: 'Fecha Inicio Evaluacion',
                        dataIndex: 'fecha_inicio_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Fecha Fin Evaluacion',
                        dataIndex: 'fecha_fin_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Objetivo Evaluacion',
                        dataIndex: 'objetivo_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Documento Referencia Evaluacion',
                        dataIndex: 'documento_referencia_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Identificacion Manual Evaluacion',
                        dataIndex: 'identificacion_manual_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Fecha Reunion Inicial Evaluacion',
                        dataIndex: 'fecha_reunion_inicial_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Fecha Reunion Ee Evaluacion',
                        dataIndex: 'fecha_reunion_ee_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Fecha Reunion Final Evaluacion',
                        dataIndex: 'fecha_reunion_final_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Idioma Evaluacion',
                        dataIndex: 'idioma_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Observacion Ra Oec Evaluacion',
                        dataIndex: 'observacion_ra_oec_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Observacion Ra Ee Evaluacion',
                        dataIndex: 'observacion_ra_ee_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Cumplimiento Etapas Evaluacion',
                        dataIndex: 'cumplimiento_etapas_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Recomendacion Ra Evaluacion',
                        dataIndex: 'recomendacion_ra_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Recomendacion Fecha Evaluacion',
                        dataIndex: 'recomendacion_fecha_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Decision Da Evaluacion',
                        dataIndex: 'decision_da_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Decision Fecha Da Evaluacion',
                        dataIndex: 'decision_fecha_da_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Fecha Creacion Evaluacion',
                        dataIndex: 'fecha_creacion_evaluacion',
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
                            //hidden: me.privilegio('evaluacion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('evaluacion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('evaluacion.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }, '->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('evaluacion.delete'),
                            itemId: 'descargaForm',
                            iconCls: 'icon_reporte',
                            text: 'Descargar PDF'
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