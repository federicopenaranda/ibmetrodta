Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.informeevaluacion.lista',
    title: 'Administrar InformeEvaluacion',
    iconCls: 'icon_gear',
    store: 'InformeEvaluacion',
    minHeight: 250,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: {
                defaults: {
                	flex: .2
                },
                items: [
					{
                        text: 'Peticion',
                        dataIndex: 'fk_id_peticion',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'codigo_peticion' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Fecha Inicio Informe Evaluacion',
                        dataIndex: 'fecha_inicio_informe_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Fecha Fin Informe Evaluacion',
                        dataIndex: 'fecha_fin_informe_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Lugar Informe Evaluacion',
                        dataIndex: 'lugar_informe_evaluacion'
                    },
					{
                        text: 'Objetivo Informe Evaluacion',
                        dataIndex: 'objetivo_informe_evaluacion'
                    },
					{
                        text: 'Documentos Referencia Informe Evaluacion',
                        dataIndex: 'documentos_referencia_informe_evaluacion'
                    },
					{
                        text: 'Instalaciones Visitadas Informe Evaluacion',
                        dataIndex: 'instalaciones_visitadas_informe_evaluacion'
                    },
					{
                        text: 'Profesionales Visitados Informe Evaluacion',
                        dataIndex: 'profesionales_visitados_informe_evaluacion'
                    },
					{
                        text: 'Equipo Evaluador Informe Evaluacion',
                        dataIndex: 'equipo_evaluador_informe_evaluacion'
                    },
					{
                        text: 'Alcance Acreditacion Informe Evaluacion',
                        dataIndex: 'alcance_acreditacion_informe_evaluacion'
                    },
					{
                        text: 'Comentario Requisito Informe Evaluacion',
                        dataIndex: 'comentario_requisito_informe_evaluacion'
                    },
					{
                        text: 'Comentario Evaluacion Informe Evaluacion',
                        dataIndex: 'comentario_evaluacion_informe_evaluacion'
                    },
					{
                        text: 'Conclusion Informe Evaluacion',
                        dataIndex: 'conclusion_informe_evaluacion'
                    },
					{
                        text: 'Anexos Informe Evaluacion',
                        dataIndex: 'anexos_informe_evaluacion'
                    },
					{
                        text: 'Fecha Emision Informe Evaluacion',
                        dataIndex: 'fecha_emision_informe_evaluacion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Lugar Emision Informe Evaluacion',
                        dataIndex: 'lugar_emision_informe_evaluacion'
                    },
					{
                        text: 'Fecha Creacion Informe Evaluacion',
                        dataIndex: 'fecha_creacion_informe_evaluacion',
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
                            //hidden: me.privilegio('informeevaluacion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('informeevaluacion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('informeevaluacion.delete'),
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


    privilegio: function( opcion ) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return ( res !== null ) ? false : true;
    }
});