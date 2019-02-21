/*
 * Paso 10
 * 
 * Estado Actual:   'equipo-evaluador-asignado'
 * 
 * Acciones:
 * 
 *      1. 'carga-cotizacion-evaluacion'
 *      2. 'carga-factura-evaluacion'
 *      3. 'verifica-factura-evaluacion'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso10', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'equipo-evaluador-asignado',
    accionTerminada: 0,
    stores: [
        'proceso.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso10'
    ],
    refs: [
        {
            ref: 'Paso10Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10]'
        },
        
        /// Botones
        {
            ref: 'Paso10BotonCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnCargaCotizacion'
        },
        {
            ref: 'Paso10BotonCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnCargaFactura'
        },
        {
            ref: 'Paso10BotonVerificarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnVerificarFactura'
        },
        {
            ref: 'Paso10BotonObservarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnObservarFactura'
        },
        {
            ref: 'Paso10BotonHabilitaAnterior',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnHabilitarAnterior'
        },
        {
            ref: 'Paso10BotonApruebaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnApruebaDA'
        },
        {
            ref: 'Paso10BotonObservaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnObservaDA'
        },
        {
            ref: 'Paso10BotonVersionesCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnVersionesCotizacion'
        },
        {
            ref: 'Paso10BotonVersionesFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnVersionesFactura'
        },

        // Textos
        {
            ref: 'Paso10TextoSubCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] label#txtSubCargaCotizacion'
        },
         {
            ref: 'Paso10TextoDescargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] label#txtDescargaCotizacion'
        },
         {
            ref: 'Paso10TextoSubCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] label#txtSubCargaFactura'
        },
         {
            ref: 'Paso10TextoDescargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] label#txtDescargaFactura'
        },
         {
            ref: 'Paso10TextoSubVerificacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] label#txtSubVerificacion'
        },
         {
            ref: 'Paso10TextoSubAprobacionDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] label#txtSubAprobacionDA'
        },

        // Formularios
         {
            ref: 'Paso10FormCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] form#formCotizacion'
        },
        {
            ref: 'Paso10FormFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] form#formFactura'
        },
        
        // Archivos
        {
            ref: 'Paso10FileCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] filefield#fileCotizacion'
        },
        {
            ref: 'Paso10FileFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] filefield#fileFactura'
        }, 

        // Otros
        {
            ref: 'Paso10TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso10] label#textEstado'
        },
        {
            ref: 'OecWindow',
            selector: '[xtype=oec.oec.edit.window]'
        },
        {
            ref: 'OecForm',
            selector: '[xtype=oec.oec.edit.form]'
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
        },
        {
            ref: 'WindowArchivos',
            selector: 'window[xtype=proceso.peticionarchivo.edit.window]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso10]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnCargaCotizacion': {
                    click: this.cargaCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnCargaFactura': {
                    click: this.cargaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnVerificarFactura': {
                    click: this.verificaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnObservarFactura': {
                    click: this.observarFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnHabilitarAnterior': {
                    click: this.habilitaAnterior
                },
                'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnVersionesCotizacion': {
                    click: this.versionesCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso10] button#btnVersionesFactura': {
                    click: this.versionesFactura
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    habilitaAnterior: function () {
        var me = this,
            peticionLista = me.getTramiteListaPeticion(),
            recPeticion = peticionLista.getSelectionModel().getSelection()[0],
            dataPeticion = recPeticion.getData();
        
        Ext.data.JsonP.request({
            url: ibmetrodta.app.globals.globalServerPath + 'peticionaccion010301/habilita',
            params: {
               fk_id_peticion: dataPeticion.id_peticion,
               proceso: dataPeticion.fk_id_proceso,
               nombre_estado: me.estadoActual,
               accion: 'carga-factura-evaluacion'
            },
            success: function (response, options) {
                // Registra la acción terminada de la petición
               me.configPanelPaso();
            },
            failure: function (response, options) {
                Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
            }
        });
    },
    
    
    versionesCotizacion: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Versiones de Cotización para Evaluación'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-cotizacion-evaluacion';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        contPeticionArchivo.tbPeticionArchivo = 0;
        contPeticionArchivo.accionTeminada = me.accionTeminada;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    versionesFactura: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Versiones de Factura por Evaluación'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-factura-evaluacion';
        contPeticionArchivo.tbPeticionArchivo = 0;
        contPeticionArchivo.accionTeminada = me.accionTeminada;
        contPeticionArchivo.nombreEstado = me.estadoActual;

        // show window
        win.show();
        win.doComponentLayout();
    },

    
    cargaCotizacion: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso10FormCotizacion(),
                field = form.down('#fileCotizacion'),
                value = field.getValue(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        if ( value === '' )
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo de Cotización.');
            return;
        }
        else
        {
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Cotización de Evaluación ...',
                success: function (f, a) {
                    var json = Ext.decode(a.response.responseText),
                            extra;
                    
                    extra = '{"id_peticion_archivo":' + 'null' + ',' + 
                            '"fk_id_peticion_estado":' + 'null' + ',' + 
                            '"fk_id_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"fk_id_accion":' + 'null' + ',' + 
                            '"codigo_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"nombre_peticion_archivo":' + '"' + json.msg.registros + '",' + 
                            '"version_peticion_archivo":' + 'null' + ',' + 
                            '"activo_peticion_archivo":' + '1' + ',' + 
                            '"descripcion_peticion_archivo":' + '"carga-cotizacion-evaluacion"' + ',' + 
                            '"tipo_peticion_archivo":' + 'null' + ',' + 
                            '"estado_peticion_archivo":' + '"c"' + ',' + 
                            '"adicional_peticion_archivo":' + '0' + ',' + 
                            '"escaneado_peticion_archivo":' + 'null' + ',' + 
                            '"fecha_creacion_peticion_archivo":' + 'null' + '}';
                    
                    Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/createPeticionArchivo',
                        params: {
                           id_peticion: dataPeticion.id_peticion,
                           nombre_estado: me.estadoActual,
                           nombre_accion: 'carga-cotizacion-evaluacion',
                           records: extra
                        },
                        success: function (response, options) {
                            
                            // Registra la acción terminada de la petición
                            me.terminaAccion( dataPeticion.id_peticion, 'carga-cotizacion-evaluacion' );
                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
                        }
                    });
                },
                failure: function (f, a) {
                    return;
                }
            });
        }
    },
    
    
    cargaFactura: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso10FormFactura(),
                field = form.down('#fileFactura'),
                value = field.getValue(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        if ( value === '' )
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo de Factura.');
            return;
        }
        else
        {
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Factura por Pago de Evaluación ...',
                success: function (f, a) {
                    
                    var json = Ext.decode(a.response.responseText),
                            extra;
                    
                    extra = '{"id_peticion_archivo":' + 'null' + ',' + 
                            '"fk_id_peticion_estado":' + 'null' + ',' + 
                            '"fk_id_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"fk_id_accion":' + 'null' + ',' + 
                            '"codigo_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"nombre_peticion_archivo":' + '"' + json.msg.registros + '",' + 
                            '"version_peticion_archivo":' + 'null' + ',' + 
                            '"activo_peticion_archivo":' + '1' + ',' + 
                            '"descripcion_peticion_archivo":' + '"carga-factura-evaluacion"' + ',' + 
                            '"tipo_peticion_archivo":' + 'null' + ',' + 
                            '"estado_peticion_archivo":' + '"c"' + ',' + 
                            '"adicional_peticion_archivo":' + '0' + ',' + 
                            '"escaneado_peticion_archivo":' + 'null' + ',' + 
                            '"fecha_creacion_peticion_archivo":' + 'null' + '}';
                    
                    Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/createPeticionArchivo',
                        params: {
                           id_peticion: dataPeticion.id_peticion,
                           nombre_estado: me.estadoActual,
                           nombre_accion: 'carga-factura-evaluacion',
                           records: extra
                        },
                        success: function (response, options) {

                            // Registra la acción terminada de la petición
                             me.terminaAccion( dataPeticion.id_peticion, 'carga-factura-evaluacion' );

                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
                        }
                    });
                },
                failure: function (f, a) {
                    return;
                }
            });
        }
    },
    
    
    verificaFactura: function (button, e, eOpts) {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        Ext.Msg.confirm({
            title: 'Confirmar Verificación',
            msg: '¿Se verificó el pago por la factura cargada en el sistema ?.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'verifica-factura-evaluacion');
                }
            }
        });
    },
    
    
    observarFactura: function () {
        var me =this,
                win = me.getObsPeticionAccionWindow();
        
        if (!win)
        {
            win = Ext.widget('proceso.obspeticionaccion.edit.window', {
                title: 'Observaciones'
            });
        }
        
        var controlador = me.getController('proceso.ObsPeticionAccion');
        controlador.accion = 'verifica-factura-evaluacion';
        controlador.accionTerminada = me.accionTerminada;

        // show window
        win.show();
    },
    
    
    // Reconfigura el panel de acuerdo a las acciones ya realizadas o faltantes
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso10BotonCargaCotizacion = me.getPaso10BotonCargaCotizacion(),
                Paso10BotonCargaFactura = me.getPaso10BotonCargaFactura(),
                Paso10BotonVerificarFactura = me.getPaso10BotonVerificarFactura(),
                Paso10BotonObservarFactura = me.getPaso10BotonObservarFactura(),
                Paso10BotonHabilitaAnterior = me.getPaso10BotonHabilitaAnterior(),
                Paso10BotonVersionesCotizacion = me.getPaso10BotonVersionesCotizacion(),
                Paso10BotonVersionesFactura = me.getPaso10BotonVersionesFactura(),
                
                // Textos
                Paso10TextoDescargaCotizacion = me.getPaso10TextoDescargaCotizacion(),
                Paso10TextoDescargaFactura = me.getPaso10TextoDescargaFactura(),
                Paso10TextEstado = me.getPaso10TextEstado(),
                
                // Formularios
                Paso10FormCotizacion = me.getPaso10FormCotizacion(),
                Paso10FormFactura = me.getPaso10FormFactura(),

                // Archivos
                Paso10FileCotizacion = me.getPaso10FileCotizacion(),
                Paso10FileFactura = me.getPaso10FileFactura(),

                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel2 = me.getPaso10Panel(),
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

                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 10: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(8);*/
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

                    Paso10TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                    me.accionTerminada = 0;
                    
                    if ( accionesArray['carga-cotizacion-evaluacion'] === '0' )
                    {
                        Paso10BotonVerificarFactura.setDisabled(true);
                        Paso10BotonObservarFactura.setDisabled(true);
                        Paso10BotonCargaFactura.setDisabled(true);
                        Paso10BotonHabilitaAnterior.setDisabled(true);
                        Paso10FileFactura.setDisabled(true);
                        Paso10BotonVersionesFactura.setDisabled(true);
                        
                        if ( admin === 1 || dta === 1 || da === 1 )
                        {
                            Paso10BotonCargaCotizacion.setDisabled(false);
                            Paso10FileCotizacion.setDisabled(false);
                            Paso10BotonVersionesCotizacion.setDisabled(false);
                        }
                        else
                        {
                            Paso10BotonCargaCotizacion.setDisabled(true);
                            Paso10FileCotizacion.setDisabled(true);
                            Paso10BotonVersionesCotizacion.setDisabled(true);
                        }
                    }
                    else
                    {
                        Paso10BotonCargaCotizacion.setDisabled(true);
                        Paso10FileCotizacion.setDisabled(true);
                        //Paso10BotonVersionesCotizacion.setDisabled(true);
                        
                        if ( admin === 1 || oec === 1 )
                        {
                            Paso10BotonCargaFactura.setDisabled(false);
                            Paso10FileFactura.setDisabled(false);
                            Paso10BotonVersionesFactura.setDisabled(false);
                        }
                        else
                        {
                            Paso10BotonCargaFactura.setDisabled(true);
                            Paso10FileFactura.setDisabled(true);
                            Paso10BotonVersionesFactura.setDisabled(true);
                        }


                        if ( accionesArray['carga-factura-evaluacion'] === '0' )
                        {
                            Paso10BotonVerificarFactura.setDisabled(true);
                            Paso10BotonObservarFactura.setDisabled(true);
                            Paso10BotonHabilitaAnterior.setDisabled(true);
                            
                            if ( admin == 1 || oec == 1 )
                            {
                                Paso10BotonCargaFactura.setDisabled(false);
                                Paso10FileFactura.setDisabled(false);
                                Paso10BotonVersionesFactura.setDisabled(false);
                            }
                            else
                            {
                                Paso10BotonCargaFactura.setDisabled(true);
                                Paso10FileFactura.setDisabled(true);
                                Paso10BotonVersionesFactura.setDisabled(true);
                            }
                        }
                        else
                        {
                            Paso10BotonCargaFactura.setDisabled(true);
                            Paso10FileFactura.setDisabled(true);
                            
                            if ( admin == 1 || oec == 1 || dta == 1 )
                            {
                                Paso10BotonVersionesFactura.setDisabled(false);
                            }
                            else
                            {
                                Paso10BotonVersionesFactura.setDisabled(true);
                            }
                            
                            
                            if ( accionesArray['verifica-factura-evaluacion'] == '0' )
                            {
                                me.accionTerminada = 0;
                                
                                if ( admin == 1 || dta == 1 )
                                {
                                    Paso10BotonVerificarFactura.setDisabled(false);
                                    Paso10BotonObservarFactura.setDisabled(false);
                                    Paso10BotonHabilitaAnterior.setDisabled(false);
                                }
                                else
                                {
                                    Paso10BotonVerificarFactura.setDisabled(true);
                                    Paso10BotonObservarFactura.setDisabled(true);
                                    Paso10BotonHabilitaAnterior.setDisabled(true);
                                }
                            }
                            else
                            {
                                me.accionTerminada = 1;
                                Paso10BotonVerificarFactura.setDisabled(true);
                                Paso10BotonCargaFactura.setDisabled(true);
                                Paso10FileFactura.setDisabled(true);
                                Paso10BotonHabilitaAnterior.setDisabled(true);
                                sigPasoBtn.setDisabled(false);
                                Paso10TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                                
                                if ( admin == 1 || dta == 1 || oec == 1 )
                                {
                                    Paso10BotonObservarFactura.setDisabled(false);
                                }
                                else
                                {
                                    Paso10BotonObservarFactura.setDisabled(true);
                                }
                            }
                        }
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
    }
});