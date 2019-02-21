Ext.define('ibmetrodta.controller.App', {
    extend: 'ibmetrodta.controller.Base',
    require: [
         //'ibmetrodta.util.SessionMonitor'
    ],
    views: [
        'Viewport',
        'layout.Menu',
        'layout.Center',
        'layout.Landing'
    ],
    refs: [
        {
            ref: 'Viewport',
            selector: '[xtype=viewport]'
        },
        {
            ref: 'Menu',
            selector: '[xtype=layout.menu]'
        },
        {
            ref: 'CenterRegion',
            selector: '[xtype=layout.center]'
        },
        {
            ref: 'WestRegion',
            selector: '[xtype=layout.west]'
        },
        {
            ref: 'TipoUsuarioLabel',
            selector: 'label#menu_tipo_usuario'
        },
        {
            ref: 'NombreUsuarioLabel',
            selector: 'label#menu_nombre_usuario'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {
                '#App': {tokenchange: this.dispatch}
            },
            component: {
                'menu[xtype=layout.menu] menuitem': {
                    click: this.addHistory
                }
            },
            global: {
                beforeviewportrender: this.setupApplication
            },
            store: {
                '#usuario.UsuarioPrivilegio': {
                    load: this.cargaMenu
                }
            },
            proxy: {
                '#basejson': {
                    requestcomplete: this.handleRESTResponse
                }
            }
        });
    },
    
    
    cargaMenu: function (store, records, successful, eOpts) {
        if (successful)
        {
            if (ibmetrodta.app.globals.globalMenuCargado === false)
            {
                console.log("ejecuta cargaMenu: false");
                console.log(ibmetrodta.app.globals.globalMenuCargado);

                var me = this,
                        west = me.getWestRegion(),
                        menu = Ext.widget('layout.menu');

                west.add(menu);

                ibmetrodta.app.globals.globalMenuCargado = true;
                ibmetrodta.app.globals.globalPrivilegiosCargados = true;

                Ext.getBody().unmask();

                Ext.globalEvents.fireEvent('beforeviewportrender');
            }
            else
            {
                console.log("ejecuta cargaMenu: true");
                console.log(ibmetrodta.app.globals.globalMenuCargado);

                return;
            }
        }
        else
        {
            Ext.Msg.alert('Atenci&oacute;n', 'Error al cargar privilegios. Por favor intente nuevamente.');
            return;
        }
    },
    
    
    setupApplication: function () {
        var me = this,
                lblTipoUsuario = me.getTipoUsuarioLabel(),
                lblNombreUsuario = me.getNombreUsuarioLabel();

        lblNombreUsuario.setText('<strong>Usuario:</strong> ' + ibmetrodta.app.globals.globalNombreUsuario, false);
        lblTipoUsuario.setText('<strong>Tipo:</strong> ' + ibmetrodta.app.globals.globalTipoUsuario, false);
    },
    
    
    addHistory: function (item, e, opts) {
        var me = this,
                token = item.itemId,
                storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');

        Ext.util.History.add(token);

        if (ibmetrodta.app.globals.globalPrivilegiosCargados === false)
        {
            storePrivilegios.load(function (records, operation, success) {
                ibmetrodta.app.globals.globalPrivilegiosCargados = true;
                me.fireEvent('tokenchange', token);
            });
        }
        else
        {
            me.fireEvent('tokenchange', token);
        }
    },
    
    
    dispatch: function (token) {
        var me = this,
                storePrivilegios = Ext.data.StoreManager.lookup('usuario.ListaUsuarioPrivilegio'),
                arrayPrivilegios = [];

        if (ibmetrodta.app.globals.globalPrivilegiosCargados == false)
        {
            storePrivilegios.load({
                params: {
                    filter: 'menu'
                },
                callback: function (records, operation, success) {
                    ibmetrodta.app.globals.globalPrivilegiosCargados = true;
                    
                    var val = '';
                    
                    Ext.Array.each ( records, function ( objeto, index, recs ) {
                        val = '';
                        val = objeto.getData();
                        arrayPrivilegios.push(val.nombre_privilegio_usuario_privilegio);
                    });
                    
                    ibmetrodta.app.globals.globalPrivilegios = arrayPrivilegios;
                    me.dispatch2(token);
                }
            });
        }
        else
        {
            me.dispatch2(token);
        }
    },
    
    
    dispatch2: function (token) {
        var me = this,
                config;
        
        // This is an example calendar store that enables event color-coding
        var calendarStore = Ext.create('Ext.calendar.data.MemoryCalendarStore', {
            data: Ext.calendar.data.Calendars.getData()
        });

        // A sample event store that loads static JSON from a local file. Obviously a real
        // implementation would likely be loading remote data via an HttpProxy, but the
        // underlying store functionality is the same.
        /*var eventStore = Ext.create('Ext.calendar.data.MemoryEventStore', {
            data: Ext.calendar.data.Events.getData()
        });*/
        
        var eventStore = Ext.data.StoreManager.lookup('programacion.Actividad2');

        // switch on token to determine which content to create
        switch (token) {

            /*case 'dashboard':
                config = {
                    xtype: 'dashboard.dashboard'
                };
                break;*/
            
            case 'programacion/Actividad':
                config = {
                    xtype: 'programacion.actividad.lista',
                    title: 'Administraci&oacute;n de Actividades',
                    iconCls: 'icon_status'
                };
                break;
            
            
            

            case 'calendar/Calendar':
                
                config = {
                    title: 'Calendario DTA',
                    xtype: 'calendarpanel',
                    //eventStore: Ext.create('Ext.data.ArrayStore', {}),
                    //calendarStore: Ext.create('Ext.data.ArrayStore', {}),
                    eventStore: eventStore,
                    calendarStore: calendarStore,
                    border: false,
                    itemId:'app-calendar',
                    //region: 'center',
                    activeItem: 3, // month view
                    showDayView: false,
                    showWeekView: false,
                    
                    monthViewCfg: {
                        showHeader: true,
                        showWeekLinks: true,
                        showWeekNumbers: true
                    }
                };

                break;


            
            case 'oec/Catalogo':
                config = {
                    xtype: 'oec.oeccatalogo.lista',
                    title: 'Cat&aacute;logo de OECs',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.oec.OecCatalogo', {
                        pageSize: 10
                    })
                };
                break;



            case 'programacion/Vacacion':
                config = {
                    xtype: 'programacion.vacacion.lista',
                    title: 'Administraci&oacute;n de Vacaciones',
                    iconCls: 'icon_status'
                };
                break;

            case 'programacion/Feriados':
                config = {
                    xtype: 'programacion.feriado.lista',
                    title: 'Administraci&oacute;n de Feriados',
                    iconCls: 'icon_status'
                };
                break;

            case 'programacion/Gestion':
                config = {
                    xtype: 'programacion.gestion.lista',
                    title: 'Administraci&oacute;n de Gestiones',
                    iconCls: 'icon_status'
                };
                break;
            
            



            case 'tramite/Tramite':
                config = {
                    xtype: 'tramite.tramite.lista',
                    title: 'Administraci&oacute;n de Trámites',
                    iconCls: 'icon_color'
                };
                break;

            case 'proceso/Proceso':
                config = {
                    xtype: 'proceso.proceso.lista',
                    title: 'Administraci&oacute;n de Procesos',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.proceso.Proceso', {
                        pageSize: 10
                    })
                };
                break;

            case 'oec/Oec':
                config = {
                    xtype: 'oec.oec.lista',
                    title: 'Administraci&oacute;n de OECs',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.oec.Oec', {
                        pageSize: 10
                    })
                };
                break;

            case 'opciones/CampoCalibracion':
                config = {
                    xtype: 'opciones.campocalibracion.lista',
                    title: 'Administraci&oacute;n de Campos de Calibración',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.opciones.CampoCalibracion', {
                        pageSize: 10
                    })
                };
                break;

            case 'opciones/CriterioEvaluacion':
                config = {
                    xtype: 'opciones.criterioevaluacion.lista',
                    title: 'Administraci&oacute;n de Criterios de Evaluación',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.opciones.CriterioEvaluacion', {
                        pageSize: 10
                    })
                };
                break;

            case 'opciones/ActividadEconomica':
                config = {
                    xtype: 'opciones.actividadeconomica.lista',
                    title: 'Administraci&oacute;n de Actividad Económica',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.opciones.ActividadEconomica', {
                        pageSize: 10
                    })
                };
                break;

            case 'opciones/NormaReferencia':
                config = {
                    xtype: 'opciones.normareferencia.lista',
                    title: 'Administraci&oacute;n de Norma de Referencia',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.opciones.NormaReferencia', {
                        pageSize: 10
                    })
                };
                break;

            case 'opciones/OecTipo':
                config = {
                    xtype: 'opciones.oectipo.lista',
                    title: 'Administraci&oacute;n de Tipos de OEC',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.opciones.OecTipo', {
                        pageSize: 10
                    })
                };
                break;

            case 'opciones/OecTitulo':
                config = {
                    xtype: 'opciones.oectitulo.lista',
                    title: 'Administraci&oacute;n de Títulos de Contactos',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.opciones.OecTitulo', {
                        pageSize: 10
                    })
                };
                break;

            case 'opciones/Pais':
                config = {
                    xtype: 'opciones.pais.lista',
                    title: 'Administraci&oacute;n de Paises',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.opciones.Pais', {
                        pageSize: 10
                    })
                };
                break;

            case 'usuario/UsuarioTipo':
                config = {
                    xtype: 'usuario.usuariotipo.lista',
                    title: 'Administraci&oacute;n de Tipos de Usuario',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.usuario.UsuarioTipo', {
                        pageSize: 10
                    })
                };
                break;

            case 'usuario/Usuario':
                config = {
                    xtype: 'usuario.usuario.lista',
                    title: 'Administraci&oacute;n de Usuarios',
                    iconCls: 'icon_color',
                    store: Ext.create('ibmetrodta.store.usuario.Usuario', {
                        pageSize: 10
                    })
                };
                break;

            default:
                config = {
                    xtype: 'layout.landing'
                };
                break;
        }

        me.updateCenterRegion(config);
    },
    
    
    updateCenterRegion: function (config) {
        var me = this,
                center = me.getCenterRegion();

        // remove all existing content
        center.removeAll(true);
        // add new content
        center.add(config);
    },
    
    
    handleRESTResponse: function (request, success) {
        var me = this,
                rawData = request.proxy.reader.rawData;
        // in all cases, let's hide the body mask
        Ext.getBody().unmask();

        // if proxy success
        if (success) {
            // if operation success
            if (request.operation.wasSuccessful()) {

                if ((typeof rawData.meta) !== "undefined")
                {
                    Ext.create('widget.uxNotification', {
                        title: 'Notificaci&oacute;n',
                        position: 'tr',
                        manager: 'sismanager1',
                        iconCls: 'ux-notification-icon-information',
                        autoCloseDelay: 4000,
                        spacing: 25,
                        padding: 10,
                        html: rawData.meta.msg
                    }).show();

                    if ((typeof rawData.meta.sesion) !== "undefined")
                    {
                        if (rawData.meta.sesion === "false")
                        {
                            window.location.href = './index.php';
                        }
                    }
                }

            }
            // if operation failure
            else {

                if ((typeof rawData.meta) !== "undefined")
                {
                    Ext.create('widget.uxNotification', {
                        title: 'Notificaci&oacute;n',
                        position: 'tr',
                        manager: 'sismanager2',
                        iconCls: 'ux-notification-icon-information',
                        autoCloseDelay: 4000,
                        spacing: 25,
                        padding: 10,
                        html: rawData.meta.msg
                    }).show();
                }
            }
        }
        // otherwise, major failure...
        else {
            Ext.create('widget.uxNotification', {
                title: 'Error',
                position: 'tr',
                manager: 'sismanager3',
                iconCls: 'ux-notification-icon-information',
                autoCloseDelay: 4000,
                spacing: 25,
                padding: 10,
                html: 'Error al conectar al servidor.'
            }).show();
        }
    }
});


/*window.onbeforeunload = function() {
 return "¿Esta seguro que desea salir del sistema?. Cualquier dato que no guard&oacute; se perder&aacute;.";
 }.bind(this);*/