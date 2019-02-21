Ext.define('ibmetrodta.view.oec.Oec.OecContactoLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oec.oec.oeccontactolista',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.oec.OecContacto'
    ],
    minHeight: 250,
    store: 'OecContacto',
    initComponent: function() {

        //var storeReferencial2 = Ext.data.StoreManager.lookup('opciones.storeReferencial2');
        //storeReferencial2.load();

        var me = this;
        Ext.applyIf(me, {
            selType: 'rowmodel',
            columns: {
                defaults: {
                    flex: 1
                },
                sortAscText: 'Ordenar Ascendentemente',
                sortDescText: 'Ordenar Descendentemente',
                columnsText: 'Columnas',
                items: [
					{
                        // Campo de llave foranea
                        text: 'Oec',
                        dataIndex: 'fk_id_oec',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_oec' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo de llave foranea
                        text: 'Oec Titulo',
                        dataIndex: 'fk_id_oec_titulo',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_oec_titulo' ); // Debe estar en el modelo
                        }
                    },
					{
                        // Campo de Texto
                        text: 'Primer Nombre Oec Contacto',
                        dataIndex: 'primer_nombre_oec_contacto'
                    },
					{
                        // Campo de Texto
                        text: 'Segundo Nombre Oec Contacto',
                        dataIndex: 'segundo_nombre_oec_contacto'
                    },
					{
                        // Campo de Texto
                        text: 'Apellido Paterno Oec Contacto',
                        dataIndex: 'apellido_paterno_oec_contacto'
                    },
					{
                        // Campo de Texto
                        text: 'Apellido Materno Oec Contacto',
                        dataIndex: 'apellido_materno_oec_contacto'
                    },
					{
                        // Campo de Texto
                        text: 'Cargo Oec Contacto',
                        dataIndex: 'cargo_oec_contacto'
                    },
					{
                        // Campo de Texto
                        text: 'Email Oec Contacto',
                        dataIndex: 'email_oec_contacto'
                    },
					{
                        // Campo de Texto
                        text: 'Celular Oec Contacto',
                        dataIndex: 'celular_oec_contacto'
                    },
					{
                        // Campo de Texto
                        text: 'Telefono Oec Contacto',
                        dataIndex: 'telefono_oec_contacto'
                    },
					{
                        // Campo Booleano
                        text: 'Representante Legal Oec Contacto',
                        dataIndex: 'representante_legal_oec_contacto',
                        renderer: function (valor) {
                            if ( valor === 1 )
                                return 'Si';
                            
                            if ( valor === 0 )
                                return 'No';
                            
                            return '';
                        }
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
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});