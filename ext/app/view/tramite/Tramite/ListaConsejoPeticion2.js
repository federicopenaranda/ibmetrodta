Ext.define('ibmetrodta.view.tramite.Tramite.ListaConsejoPeticion2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tramite.tramite.listaconsejopeticion2',
    store: 'tramite.ConsejoPeticion2',
    margin: 10,
    maxHeight: 100,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    menuDisabled: true,
                    sortable: false
                },
                items: [
                    {
                        text: 'Primer Nombre',
                        dataIndex: 'primer_nombre_usuario',
                        flex: 0.1
                    },
                    {
                        text: 'Segundo Nombre',
                        dataIndex: 'segundo_nombre_usuario',
                        flex: 0.1,
                        hidden: true
                    },
                    {
                        text: 'Apellido Paterno',
                        dataIndex: 'apellido_paterno_usuario',
                        flex: 0.1
                    },
                    {
                        text: 'Apellido Materno',
                        dataIndex: 'apellido_materno_usuario',
                        flex: 0.1,
                        hidden: true
                    },
                    {
                        text: 'Aprobado?',
                        dataIndex: 'procede_obs_peticion_accion',
                        flex: 0.1,
                        renderer: function (valor) {
                            return (valor == 1) ? 'Aprobado' : 'No Aprobado';
                        }
                    },
                    {
                        xtype: 'actioncolumn',
                        width: 50,
                        items: [
                            {
                                icon: './resources/images/icon/drop-yes.gif',
                                tooltip: 'Aprobar',
                                handler: function (grid, rowIndex, colIndex) {
                                    me.fireEvent('itemapruebabuttonclick19', grid, rowIndex, colIndex);
                                },
                                isDisabled: function (view, rowIndex, colIndex, item, record) {
                                    if ( parseInt(ibmetrodta.app.globals.globalIdUsuario) == parseInt(record.get('id_usuario')) )
                                    {
                                        return ( parseInt(record.get('procede_obs_peticion_accion')) == 1 ) ? true : false;
                                    }
                                    else
                                    {
                                        return true;
                                    }
                                }
                            },
                            {
                                icon: './resources/images/icon/exclamation.gif',
                                tooltip: 'Observar',
                                handler: function (grid, rowIndex, colIndex) {
                                    me.fireEvent('itemobservarbuttonclick19', grid, rowIndex, colIndex);
                                }/*,
                                isDisabled: function (view, rowIndex, colIndex, item, record) {
                                    if ( parseInt(ibmetrodta.app.globals.globalIdUsuario) == parseInt(record.get('id_usuario')) )
                                    {
                                        return ( parseInt(record.get('procede_obs_peticion_accion')) == 1 ) ? true : false;
                                    }
                                    else
                                    {
                                        return true;
                                    }
                                }*/
                            }
                        ]
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});