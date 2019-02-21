Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.detallecertificacion.lista',
    title: 'Administrar DetalleCertificacion',
    iconCls: 'icon_gear',
    store: 'DetalleCertificacion',
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
                        text: 'Estado Detalle Certificacion',
                        dataIndex: 'estado_detalle_certificacion',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                         }
                    },
					{
                        text: 'Objetivo Detalle Certificacion',
                        dataIndex: 'objetivo_detalle_certificacion'
                    },
					{
                        text: 'Tipo Certificacion Detalle Certificacion',
                        dataIndex: 'tipo_certificacion_detalle_certificacion'
                    },
					{
                        text: 'Documento Normativo Detalle Certificacion',
                        dataIndex: 'documento_normativo_detalle_certificacion'
                    },
					{
                        text: 'Procedimiento Certificacion Detalle Certificacion',
                        dataIndex: 'procedimiento_certificacion_detalle_certificacion'
                    },
					{
                        text: 'Producto Certificar Detalle Certificacion',
                        dataIndex: 'producto_certificar_detalle_certificacion'
                    },
					{
                        text: 'Codigo Nace Detalle Certificacion',
                        dataIndex: 'codigo_nace_detalle_certificacion'
                    },
					{
                        text: 'Auditores Calificados Detalle Certificacion',
                        dataIndex: 'auditores_calificados_detalle_certificacion'
                    },
					{
                        text: 'Expertos Tecnicos Detalle Certificacion',
                        dataIndex: 'expertos_tecnicos_detalle_certificacion'
                    },
					{
                        text: 'Observaciones Detalle Certificacion',
                        dataIndex: 'observaciones_detalle_certificacion'
                    },
					{
                        text: 'Ensayos En Produccto Detalle Certificacion',
                        dataIndex: 'ensayos_en_produccto_detalle_certificacion'
                    },
					{
                        text: 'Laboratorios Ensayos Detalle Certificacion',
                        dataIndex: 'laboratorios_ensayos_detalle_certificacion'
                    },
					{
                        text: 'Fecha Creacion Detalle Certificacion',
                        dataIndex: 'fecha_creacion_detalle_certificacion',
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
                            //hidden: me.privilegio('detallecertificacion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecertificacion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecertificacion.delete'),
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