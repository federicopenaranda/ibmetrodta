/*
 * Paso 18
 * 
 * Estado Actual:   'formulario-026-llenado'
 * 
 * Acciones:
 * 
 *      1. 'certificado-da-aprobado'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso18', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'formulario-026-llenado',
    accionTerminada: 0,
    views: [
        'tramite.Tramite.edit.tab.Paso18'
    ],
    refs: [
        {
            ref: 'Paso18Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso18]'
        },
        {
            ref: 'Paso18BotonAbreCertificados',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso18] #btnCertificado'
        },
        {
            ref: 'Paso18BotonAprobarCertificado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso18] #btnAprobarCertificado'
        },
        {
            ref: 'Paso18TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso18] #textEstado'
        },
        {
            ref: 'Paso18CertificadoWindow',
            selector: '[xtype=formularios.certificado.edit.window]'
        },
        {
            ref: 'WindowArchivos',
            selector: 'window[xtype=proceso.peticionarchivo.edit.window]'
        },
        
        
        
        {
            ref: 'Paso18Adicional1',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso18] button#btnCargaArchivoAdicional1'
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
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso18]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso18] #btnCertificado': {
                    click: this.abreCertificados
                },
                'panel[xtype=tramite.tramite.edit.tab.paso18] #btnAprobarCertificado': {
                    click: this.apruebaCertificado
                },
                'panel[xtype=tramite.tramite.edit.tab.paso18] #btnCargaArchivoAdicional1': {
                    click: this.cargaArchivosAdicionales1
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    cargaArchivosAdicionales1: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Archivos Adicionales'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'certificado-da-aprobado';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        contPeticionArchivo.tbPeticionArchivo = !me.accionTerminada;
        contPeticionArchivo.accionTeminada = 1;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    apruebaCertificado: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        Ext.Msg.confirm({
            title: 'Confirmar Aprobación',
            msg: '¿Se aprueba el certificado generado?.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'certificado-da-aprobado');
                }
            }
        });
    },
   
    
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso18BotonAbreCertificados = me.getPaso18BotonAbreCertificados(),
                Paso18BotonAprobarCertificado = me.getPaso18BotonAprobarCertificado(),
                txtEstado = me.getPaso18TextEstado(),
                
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
                
                
                if ( acciones.length === 0 )   // TODO: habiltiar según el privilegio por tipo de usuario
                {
                    Ext.getBody().unmask();
                    console.log('Paso 18: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(16);*/
                }
                else
                {
                    var accionesArray = [],
                            archivosArray = [];
                    
                    Ext.Object.each ( acciones, function ( name, index, accion ) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                            archivosArray[index.nombre_accion] = index.peticionArchivo010401s;
                        }
                    );

                    /// Accion certificado-da-aprobado
                    if ( accionesArray['certificado-da-aprobado'] == '0' )
                    {
                        if ( dta == 1 || admin == 1 || da == 1 )
                        {
                            Paso18BotonAbreCertificados.setDisabled(false);
                            Paso18BotonAprobarCertificado.setDisabled(false);
                        }
                        else
                        {
                            Paso18BotonAbreCertificados.setDisabled(true);
                            Paso18BotonAprobarCertificado.setDisabled(true);
                        }
                        
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                        me.accionTerminada = 0;
                    }
                    else
                    {
                        Paso18BotonAprobarCertificado.setDisabled(true);
                        
                        if ( admin == 1 || da == 1 || dta == 1 )
                        {
                            Paso18BotonAbreCertificados.setDisabled(false);
                        }
                        else
                        {
                            Paso18BotonAbreCertificados.setDisabled(true);
                            
                        }
                        
                        sigPasoBtn.setDisabled(false);
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                        me.accionTerminada = 1;
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
                Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
            }
        });
    },
    
    
    abreCertificados: function () {
        var me = this,
                win = me.getPaso18CertificadoWindow();

        if (!win) {
            win = Ext.widget('formularios.certificado.edit.window', {
                title: 'Administrar Certificados'
            });
        }
        
        var cont = me.getController('formularios.Certificado');
        cont.accionTerminada = me.accionTerminada;
        
        // show window
        win.show();
        win.doComponentLayout();
    }
});