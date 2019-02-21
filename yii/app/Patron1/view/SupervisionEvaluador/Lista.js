Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.supervisionevaluador.lista',
    title: 'Administrar SupervisionEvaluador',
    iconCls: 'icon_gear',
    store: 'SupervisionEvaluador',
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
                        text: 'Criterio Evaluacion Supervision Evaluador',
                        dataIndex: 'criterio_evaluacion_supervision_evaluador'
                    },
					{
                        text: 'Comentarios Supervision Evaluador',
                        dataIndex: 'comentarios_supervision_evaluador'
                    },
					{
                        text: 'Observaciones Supervision Evaluador',
                        dataIndex: 'observaciones_supervision_evaluador'
                    },
					{
                        text: 'Nombre Supervision Evaluador',
                        dataIndex: 'nombre_supervision_evaluador'
                    },
					{
                        text: 'Cargo Supervision Evaluador',
                        dataIndex: 'cargo_supervision_evaluador'
                    },
					{
                        text: 'Fecha Supervision Evaluador',
                        dataIndex: 'fecha_supervision_evaluador',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Fecha Creacion Supervision Evaluador',
                        dataIndex: 'fecha_creacion_supervision_evaluador',
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
                            //hidden: me.privilegio('supervisionevaluador.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('supervisionevaluador.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('supervisionevaluador.delete'),
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