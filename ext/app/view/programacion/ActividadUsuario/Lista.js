Ext.define('ibmetrodta.view.programacion.ActividadUsuario.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.programacion.actividadusuario.lista',
    header: false,
    minHeight: '450',
    iconCls: 'icon_status',
    store: {type: 'programacion.actividadusuario'},
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
                    {
                        text: 'Usuario',
                        dataIndex: 'fk_id_usuario',
                        renderer: function ( value, metaData, record, rowIndex, colIndex, store, view ) {
                            if (value !== null)
                            {
                                if ( record.dirty )
                                {
                                    Ext.data.JsonP.request ({
                                        url: ibmetrodta.app.globals.globalServerPath + 'usuario000101',
                                        params: {
                                            start: '0',
                                            limit: '1',
                                            filter: '[{"property":"id_usuario","value":'+ value + '}]'
                                        },
                                        success: function( response, options ) {
                                            var tmpUE = response.registros[0],
                                                    tmpNombre = tmpUE.primer_nombre_usuario + ' ' 
                                                    + tmpUE.segundo_nombre_usuario + ' ' 
                                                    + tmpUE.apellido_paterno_usuario + ' ' 
                                                    + tmpUE.apellido_materno_usuario;

                                            record.set('primer_nombre_usuario', tmpUE.primer_nombre_usuario);
                                            record.set('segundo_nombre_usuario', tmpUE.segundo_nombre_usuario);
                                            record.set('apellido_paterno_usuario', tmpUE.apellido_paterno_usuario);
                                            record.set('apellido_materno_usuario', tmpUE.apellido_materno_usuario);
                                            
                                            return tmpNombre;
                                        },
                                        failure: function( response, options ) {
                                            Ext.Msg.alert( 'Atención', 'Un error ocurrió durante su petición. Por favor intente nuevamente.' );
                                        }
                                    });

                                    return record.get('primer_nombre_usuario') + ' ' + 
                                        record.get('segundo_nombre_usuario') + ' ' + 
                                        record.get('apellido_paterno_usuario') + ' ' +
                                        record.get('apellido_materno_usuario');
                                
                                }
                                else
                                {
                                    return record.get('primer_nombre_usuario') + ' ' + 
                                        record.get('segundo_nombre_usuario') + ' ' + 
                                        record.get('apellido_paterno_usuario') + ' ' +
                                        record.get('apellido_materno_usuario');
                                }
                            }
                        }
                    },
                    {
                        text: 'Rol',
                        dataIndex: 'rol_actividad_usuario'
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
    
    
    privilegio: function (opcion) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return (res !== null) ? false : true;
    }
});