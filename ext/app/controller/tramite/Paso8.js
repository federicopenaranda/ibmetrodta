/*
 * Paso 8
 * 
 * Estado Actual:   'cotizacion-revision-documental-aprobada'
 * 
 * Acciones:
 * 
 *      1. 'ra-aprueba-documentacion'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso8', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'cotizacion-revision-documental-aprobada',
    views: [
        'tramite.Tramite.edit.tab.Paso8'
    ],
    refs: [
        {
            ref: 'Paso8Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso8]'
        },
        {
            ref: 'Paso8BotonApruebaDocumentacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso8] #btnApruebaDocumentacion'
        },
        {
            ref: 'Paso8BotonPedirDocumentacionAdicional',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso8] #btnPedirDocumentacionAdicional'
        },
        {
            ref: 'Paso8TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso8] #textEstado'
        },
        
        
        {
            ref: 'TramiteListaOec',
            selector: '[xtype=tramite.tramite.listaoec]'
        },
        {
            ref: 'TramiteListaPeticion',
            selector: '[xtype=tramite.tramite.listapeticion]'
        },
        {
            ref: 'TramiteForm',
            selector: '[xtype=tramite.tramite.edit.form]'
        },
        {
            ref: 'TramiteAnteriorPasoBoton',
            selector: 'panel[xtype=tramite.tramite.edit.form] > toolbar > button#anteriorPaso'
        },
        {
            ref: 'TramiteSiguientePasoBoton',
            selector: 'panel[xtype=tramite.tramite.edit.form] > toolbar > button#siguientePaso'
        },
        {
            ref: 'ObsPeticionAccionWindow',
            selector: 'window[xtype=formularios.noconformidad.edit.window]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso8]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso8] #btnApruebaDocumentacion': {
                    click: this.apruebaDocumentacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso8] #btnPedirDocumentacionAdicional': {
                    click: this.pedirDocumentacionAdicional
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    apruebaDocumentacion: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                record, callbacks, store;
        
        Ext.Msg.confirm({
            title: 'Aprobar Documentación',
            msg: '¿Confirma la Aprobación de la Documentación cargada?.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    /*store = me.getStore('tramite.ObsPeticionAccion'),
                    record = Ext.create('ibmetrodta.model.tramite.ObsPeticionAccion');

                    record.set('nombre_accion', 'ra-aprueba-documentacion');
                    record.set('obs_peticion_accion', 'Aprobación de Paso (Automático)');
                    record.set('procede_obs_peticion_accion', 1);
                    record.set('fk_id_peticion', dataPeticion.id_peticion);

                    callbacks = {
                        success: function (records, operation) {
                            me.terminaAccion(dataPeticion.id_peticion, 'ra-aprueba-documentacion');
                        },
                        failure: function (records, operation) {
                            store.rejectChanges();
                        }
                    };

                    Ext.getBody().mask('Guardando Aceptación ...');

                    if (record.phantom) {
                        store.rejectChanges();
                        store.add(record);
                    }

                    store.sync(callbacks);*/
                    
                    me.terminaAccion(dataPeticion.id_peticion, 'ra-aprueba-documentacion');
                }
            }
        });
    },
    
    
    pedirDocumentacionAdicional: function () {
        var me =this,
                win = me.getObsPeticionAccionWindow();
        
        if (!win)
        {
            win = Ext.widget('proceso.obspeticionaccion.edit.window', {
                title: 'Observaciones'
            });
        }
        
        var controlador = me.getController('proceso.ObsPeticionAccion');
        controlador.accion = 'ra-aprueba-documentacion';

        // show window
        win.show();
    },
    
    
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso8BotonApruebaDocumentacion = me.getPaso8BotonApruebaDocumentacion(),
                Paso8BotonPedirDocumentacionAdicional = me.getPaso8BotonPedirDocumentacionAdicional(),
                txtEstado = me.getPaso8TextEstado(),
                
                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                accion, estado, peticion;

        estado = me.estadoActual;
        peticion = dataPeticion.id_peticion;
        
        Ext.getBody().mask('Configurando Interfaz ...');
        
        sigPasoBtn.setDisabled(true);

        Ext.data.JsonP.request({
            url: ibmetrodta.app.globals.globalServerPath + 'peticion010401/verifState',
            params: {
                id_peticion: peticion,
                nombre_estado: estado
            },
            success: function (response, options) {

                var acciones = response.registros.peticionAccion010301s,
                        tipoUsuario = response.registros.usuarioTipo000201;
                

                var tipoUsuarioArray = [];
                    
                Ext.Object.each ( tipoUsuario, function ( name, index, accion ) {
                        tipoUsuarioArray[index.nombre_usuario_tipo] = 1;
                    }
                );
               
                
                // TODO: revisar todos los tipos de usuarios
                var oec = ( typeof(tipoUsuarioArray['oec']) === 'undefined' ) ? -1 : 1;
                var admin = ( typeof(tipoUsuarioArray['admin']) === 'undefined' ) ? -1 : 1;
                var dta = ( typeof(tipoUsuarioArray['dta']) === 'undefined' ) ? -1 : 1;
                var da = ( typeof(tipoUsuarioArray['da']) === 'undefined' ) ? -1 : 1;
                var ra = ( typeof(tipoUsuarioArray['ra']) === 'undefined' ) ? -1 : 1;

                if ( acciones.length === 0 )   // TODO: habiltiar según el privilegio por tipo de usuario
                {
                    Ext.getBody().unmask();
                    console.log('Paso 8: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(6);*/
                }
                else
                {
                    var accionesArray = [];
                    
                    Ext.Object.each ( acciones, function ( name, index, accion ) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                        }
                    );

                    /// Accion ra-aprueba-documentacion
                    if ( accionesArray['ra-aprueba-documentacion'] === '0' && 
                            ( admin === 1 || ra === 1 ) )
                    {
                            Paso8BotonApruebaDocumentacion.setDisabled(false);
                            Paso8BotonPedirDocumentacionAdicional.setDisabled(false);
                    }
                    else
                    {
                            Paso8BotonApruebaDocumentacion.setDisabled(true);
                            Paso8BotonPedirDocumentacionAdicional.setDisabled(true);
                    }
                    
                    
                    if ( accionesArray['ra-aprueba-documentacion'] === '1' )
                    {
                        sigPasoBtn.setDisabled(false);
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                    }
                    else
                    {
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                    }

                    Ext.getBody().unmask();
                }
            },
            failure: function (response, options) {
                Ext.getBody().unmask();
                Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
            }
        });
    },
    
    
     // Termina accion
    terminaAccion: function ( id_peticion, accion ) {
        var me = this,
                filters = [];

        filters.push({property: 'nombre_accion', value: accion});
        filters.push({property: 'fk_id_peticion', value: id_peticion});

        Ext.getBody().mask('Ejecutando Acción del Paso ...');

        Ext.data.JsonP.request({
            url: ibmetrodta.app.globals.globalServerPath + 'peticionaccion010301/verifAction',
            params: {
                filter: Ext.encode(filters)
            },
            success: function (response, options) {
                // Reconfigura el tab con las nuevas acciones
                me.configPanelPaso();
                Ext.getBody().unmask();

            },
            failure: function (response, options) {
                Ext.Msg.alert('Atención', 'Un error ocurrió durante su petición. Por favor intente nuevamente.');
            }
        });
    }
});