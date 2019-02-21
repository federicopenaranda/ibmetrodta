Ext.define('ibmetrodta.view.tramite.Tramite.ListaEquipoEvaluadorPeticion', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tramite.tramite.listaequipoevaluadorpeticion',
    store: 'tramite.EquipoEvaluadorPeticion',
    margin: 10,
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
                        text: 'Nombre1',
                        dataIndex: 'primer_nombre_usuario',
                        flex: 0.1
                    },
                    {
                        text: 'Nombre2',
                        dataIndex: 'segundo_nombre_usuario',
                        flex: 0.1,
                        hidden: true
                    },
                    {
                        text: 'Apellido1',
                        dataIndex: 'apellido_paterno_usuario',
                        flex: 0.1
                    },
                    {
                        text: 'Apellido2',
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
                                handler: function(grid, rowIndex, colIndex) {
                                    me.fireEvent('itemapruebabuttonclick11', grid, rowIndex, colIndex);
                                },
                                isDisabled: function(view, rowIndex, colIndex, item, record) {
                                    if ( ibmetrodta.app.globals.globalIdUsuario == record.get('fk_id_usuario') )
                                    {
                                        if ( record.get('procede_obs_peticion_accion') == 1 )
                                        {
                                            return true;
                                        }
                                        else
                                        {
                                            return false;
                                        }
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
                                handler: function(grid, rowIndex, colIndex) {
                                    me.fireEvent('itemobservarbuttonclick11', grid, rowIndex, colIndex);
                                },
                                isDisabled: function(view, rowIndex, colIndex, item, record) {
                                    if ( ibmetrodta.app.globals.globalIdUsuario == record.get('fk_id_usuario') )
                                    {
                                        if ( record.get('procede_obs_peticion_accion') == 1 )
                                        {
                                            return true;
                                        }
                                        else
                                        {
                                            return false;
                                        }
                                    }
                                    else
                                    {
                                        return true;
                                    }
                                }
                            },
                            {
                                icon: './resources/images/icon/info.gif',
                                tooltip: 'Ver Observaciones',
                                handler: function(grid, rowIndex, colIndex) {
                                    me.fireEvent('itemverbuttonclick11', grid, rowIndex, colIndex);
                                }
                            }
                        ]
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});