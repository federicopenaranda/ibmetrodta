Ext.define('ibmetrodta.view.oec.Oec.OecContactoLista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oec.oec.oeccontactolista',
    header: false,
    iconCls: 'icon_user',
    requires: [
        'Ext.toolbar.Paging',
        'ibmetrodta.store.oec.OecContacto'
    ],
    minHeight: 250,
    store: 'OecContacto',
    initComponent: function () {
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
                        text: 'Título',
                        dataIndex: 'fk_id_oec_titulo',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            if (value !== null)
                            {
                                if ( record.dirty )
                                {
                                    Ext.data.JsonP.request ({
                                        url: ibmetrodta.app.globals.globalServerPath + 'oectitulo020004',
                                        params: {
                                            start: '0',
                                            limit: '10',
                                            filter: '[{"property":"id_oec_titulo","value":'+ value + '}]'
                                        },
                                        success: function( response, options ) {
                                            var tmpUE = response.registros[0];
                                            record.set('nombre_oec_titulo', tmpUE.nombre_oec_titulo);
                                        },
                                        failure: function( response, options ) {
                                            Ext.Msg.alert( 'Atención', 'Un error ocurrió durante su petición. Por favor intente nuevamente.' );
                                        }
                                    });
                                }

                                return record.get('nombre_oec_titulo');
                            }
                            else
                            {
                                return value;
                            }
                        }
                    },
                    {
                        text: 'Primer Nombre',
                        dataIndex: 'primer_nombre_oec_contacto'
                    },
                    {
                        text: 'Segundo Nombre',
                        dataIndex: 'segundo_nombre_oec_contacto',
                        hidden: true
                    },
                    {
                        text: 'Apellido Paterno',
                        dataIndex: 'apellido_paterno_oec_contacto'
                    },
                    {
                        text: 'Apellido Materno',
                        dataIndex: 'apellido_materno_oec_contacto',
                        hidden: true
                    },
                    {
                        text: 'Cargo',
                        dataIndex: 'cargo_oec_contacto',
                        hidden: true
                    },
                    {
                        text: 'Email',
                        dataIndex: 'email_oec_contacto'
                    },
                    {
                        text: 'Celular',
                        dataIndex: 'celular_oec_contacto',
                        hidden: true
                    },
                    {
                        text: 'Teléfono',
                        dataIndex: 'telefono_oec_contacto',
                        hidden: true
                    },
                    {
                        text: 'Representante Legal?',
                        dataIndex: 'representante_legal_oec_contacto',
                        hidden: true,
                        renderer: function (valor) {
                            if (valor === 1)
                                return 'Si';

                            if (valor === 0)
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