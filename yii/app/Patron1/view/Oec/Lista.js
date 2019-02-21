Ext.define('ibmetrodta.view.oec.Oec.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oec.oec.lista',
    title: 'Administrar Oec',
    iconCls: 'icon_gear',
    store: 'Oec',
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
                        text: 'Oec Tipo',
                        dataIndex: 'fk_id_oec_tipo',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_oec_tipo' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Pais',
                        dataIndex: 'fk_id_pais',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_pais' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Norma Referencia',
                        dataIndex: 'fk_id_norma_referencia',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_norma_referencia' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Nombre Oec',
                        dataIndex: 'nombre_oec'
                    },
					{
                        text: 'Nit Oec',
                        dataIndex: 'nit_oec'
                    },
					{
                        text: 'Direccion Oec',
                        dataIndex: 'direccion_oec'
                    },
					{
                        text: 'Ciudad Oec',
                        dataIndex: 'ciudad_oec'
                    },
					{
                        text: 'Departamento Oec',
                        dataIndex: 'departamento_oec'
                    },
					{
                        text: 'Telefono1 Oec',
                        dataIndex: 'telefono1_oec'
                    },
					{
                        text: 'Telefono2 Oec',
                        dataIndex: 'telefono2_oec'
                    },
					{
                        text: 'Celular Oec',
                        dataIndex: 'celular_oec'
                    },
					{
                        text: 'Fax Oec',
                        dataIndex: 'fax_oec'
                    },
					{
                        text: 'Email1 Oec',
                        dataIndex: 'email1_oec'
                    },
					{
                        text: 'Email2 Oec',
                        dataIndex: 'email2_oec'
                    },
					{
                        text: 'Fecha Creacion Oec',
                        dataIndex: 'fecha_creacion_oec',
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
                            //hidden: me.privilegio('oec.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('oec.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('oec.delete'),
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