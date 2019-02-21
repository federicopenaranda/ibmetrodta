/*
 * Paso 2
 * 
 * Estado Actual:   'formulario-002-llenado'
 * 
 * Acciones:
 * 
 *      1. 'carga-cotizacion-pertinencia-alcance'
 *      2. 'carga-factura-pertinencia-alcance'
 *      3. 'verifica-factura-pertinencia-alcance'
 *      4. 'aprueba-da-cotizacion-pertinencia-alcance'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso2', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'formulario-002-llenado',
    accionTerminada1: 0,
    accionTerminada2: 0,
    tiposUsuario: [],
    stores: [
        'proceso.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso2'
    ],
    refs: [
        {
            ref: 'Paso2Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2]'
        },
        
        /// Botones
        {
            ref: 'Paso2BotonCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnCargaCotizacion'
        },
        {
            ref: 'Paso2BotonCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnCargaFactura'
        },
        {
            ref: 'Paso2BotonVerificarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnVerificarFactura'
        },
        {
            ref: 'Paso2BotonObservarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnObservarFactura'
        },
        {
            ref: 'Paso2BotonHabilitaAnterior',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnHabilitarAnterior'
        },
        {
            ref: 'Paso2BotonApruebaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnApruebaDA'
        },
        {
            ref: 'Paso2BotonObservaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnObservaDA'
        },
        {
            ref: 'Paso2BotonVersionesCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnVersionesCotizacion'
        },
        {
            ref: 'Paso2BotonVersionesFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnVersionesFactura'
        },

        // Textos
        {
            ref: 'Paso2TextoSubCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] label#txtSubCargaCotizacion'
        },
         {
            ref: 'Paso2TextoSubCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] label#txtSubCargaFactura'
        },
         {
            ref: 'Paso2TextoSubVerificacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] label#txtSubVerificacion'
        },
         {
            ref: 'Paso2TextoSubAprobacionDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] label#txtSubAprobacionDA'
        },

        // Formularios
         {
            ref: 'Paso2FormCotizacionPertinencia',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] form#formCotizacionPertinencia'
        },
        {
            ref: 'Paso2FormFacturaPertinencia',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] form#formFacturaPertinencia'
        },
        
        // Archivos
        {
            ref: 'Paso2FileCotizacionPertinencia',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] filefield#fileCotizacionPertinencia'
        },
        {
            ref: 'Paso2FileFacturaPertinencia',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] filefield#fileFacturaPertinencia'
        }, 

        // Otros
        {
            ref: 'Paso2TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso2] label#textEstado'
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
                'panel[xtype=tramite.tramite.edit.tab.paso2]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnCargaCotizacion': {
                    click: this.cargaCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnCargaFactura': {
                    click: this.cargaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnVerificarFactura': {
                    click: this.verificaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnObservarFactura': {
                    click: this.observarFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnHabilitarAnterior': {
                    click: this.habilitaAnterior
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnApruebaDA': {
                    click: this.apruebaPasoDA
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnObservaDA': {
                    click: this.observarPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnVersionesCotizacion': {
                    click: this.versionesCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso2] button#btnVersionesFactura': {
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
               accion: 'carga-factura-pertinencia-alcance'
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
                title: 'Versiones de Cotización para Pertinencia de Alcance'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-cotizacion-pertinencia-alcance';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1)
            contPeticionArchivo.tbPeticionArchivo = 1;
        /*else
            contPeticionArchivo.tbPeticionArchivo = 0;*/

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
                title: 'Versiones de Factura por Pertinencia de Alcance'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-factura-pertinencia-alcance';
        contPeticionArchivo.nombreEstado = me.estadoActual;

        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1)
            contPeticionArchivo.tbPeticionArchivo = 1;
        else
            contPeticionArchivo.tbPeticionArchivo = 0;


        // show window
        win.show();
        win.doComponentLayout();
    },
    

    observarPaso: function () {
        var me =this,
                win = me.getObsPeticionAccionWindow();
        
        if (!win)
        {
            win = Ext.widget('proceso.obspeticionaccion.edit.window', {
                title: 'Observaciones'
            });
        }
        
        var controlador = me.getController('proceso.ObsPeticionAccion');
        controlador.accion = 'aprueba-da-cotizacion-pertinencia-alcance';
        controlador.accionTerminada = me.accionTerminada2;

        // show window
        win.show();
    },
    
    
    cargaCotizacion: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso2FormCotizacionPertinencia(),
                field = form.down('#fileCotizacionPertinencia'),
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
                waitMsg: 'Cargando Cotización de Pertinencia de Alcance ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-cotizacion-pertinencia-alcance"' + ',' + 
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
                           nombre_accion: 'carga-cotizacion-pertinencia-alcance',
                           records: extra
                        },
                        success: function (response, options) {
                            // Registra la acción terminada de la petición
                           me.terminaAccion( dataPeticion.id_peticion, 'carga-cotizacion-pertinencia-alcance' );

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
                form = me.getPaso2FormFacturaPertinencia(),
                field = form.down('#fileFacturaPertinencia'),
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
                waitMsg: 'Cargando Factura por Pago de Pertinencia de Alcance ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-factura-pertinencia-alcance"' + ',' + 
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
                           nombre_accion: 'carga-factura-pertinencia-alcance',
                           records: extra
                        },
                        success: function (response, options) {

                            // Registra la acción terminada de la petición
                             me.terminaAccion( dataPeticion.id_peticion, 'carga-factura-pertinencia-alcance' );

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
                    me.terminaAccion(dataPeticion.id_peticion, 'verifica-factura-pertinencia-alcance');
                }
            }
        });
    },
    
    
    apruebaPasoDA: function (button, e, eOpts) {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        Ext.Msg.confirm({
            title: 'Confirmar Aprobación',
            msg: '¿Se aprueba el trámite hasta este paso ?.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'aprueba-da-cotizacion-pertinencia-alcance');
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
        controlador.accion = 'verifica-factura-pertinencia-alcance';
        controlador.accionTerminada = me.accionTerminada1;

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
                Paso2BotonCargaCotizacion = me.getPaso2BotonCargaCotizacion(),
                Paso2BotonCargaFactura = me.getPaso2BotonCargaFactura(),
                Paso2BotonVerificarFactura = me.getPaso2BotonVerificarFactura(),
                Paso2BotonObservarFactura = me.getPaso2BotonObservarFactura(),
                Paso2BotonHabilitaAnterior = me.getPaso2BotonHabilitaAnterior(),
                Paso2BotonApruebaDA = me.getPaso2BotonApruebaDA(),
                Paso2BotonObservaDA = me.getPaso2BotonObservaDA(),
                Paso2BotonVersionesCotizacion = me.getPaso2BotonVersionesCotizacion(),
                Paso2BotonVersionesFactura = me.getPaso2BotonVersionesFactura(),
                
                // Textos
                Paso2TextEstado = me.getPaso2TextEstado(),
                
                // Formularios
                Paso2FormCotizacionPertinencia = me.getPaso2FormCotizacionPertinencia(),
                Paso2FormFacturaPertinencia = me.getPaso2FormFacturaPertinencia(),

                // Archivos
                Paso2FileCotizacionPertinencia = me.getPaso2FileCotizacionPertinencia(),
                Paso2FileFacturaPertinencia = me.getPaso2FileFacturaPertinencia(),

                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel2 = me.getPaso2Panel(),
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
               
                me.tiposUsuario = tipoUsuarioArray;
                
                // TODO: revisar todos los tipos de usuarios
                var oec = ( typeof(tipoUsuarioArray['oec']) === 'undefined' ) ? -1 : 1;
                var admin = ( typeof(tipoUsuarioArray['admin']) === 'undefined' ) ? -1 : 1;
                var dta = ( typeof(tipoUsuarioArray['dta']) === 'undefined' ) ? -1 : 1;
                var da = ( typeof(tipoUsuarioArray['da']) === 'undefined' ) ? -1 : 1;
                var ra = ( typeof(tipoUsuarioArray['ra']) === 'undefined' ) ? -1 : 1;
                var el = ( typeof(tipoUsuarioArray['el']) === 'undefined' ) ? -1 : 1;
                var et = ( typeof(tipoUsuarioArray['et']) === 'undefined' ) ? -1 : 1;
                var ext = ( typeof(tipoUsuarioArray['ext']) === 'undefined' ) ? -1 : 1;

                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 3: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(0);*/
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
            
                    Paso2TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
            
                    if ( accionesArray['carga-cotizacion-pertinencia-alcance'] == '0' )
                    {
                        Paso2BotonCargaFactura.setDisabled(true);
                        Paso2FormFacturaPertinencia.setDisabled(true);
                        Paso2FileFacturaPertinencia.setDisabled(true);
                        Paso2BotonVersionesFactura.setDisabled(true);
                        Paso2BotonVerificarFactura.setDisabled(true);
                        Paso2BotonObservarFactura.setDisabled(true);
                        Paso2BotonHabilitaAnterior.setDisabled(true);
                        Paso2BotonApruebaDA.setDisabled(true);
                        Paso2BotonObservaDA.setDisabled(true);
                        
                        if ( admin == 1 || dta == 1 || ra == 1 )
                        {
                            Paso2BotonCargaCotizacion.setDisabled(false);
                            Paso2FormCotizacionPertinencia.setDisabled(false);
                            Paso2BotonVersionesCotizacion.setDisabled(false);
                        }
                        else
                        {
                            Paso2BotonCargaCotizacion.setDisabled(true);
                            Paso2FormCotizacionPertinencia.setDisabled(true);
                            Paso2BotonVersionesCotizacion.setDisabled(true);
                        }
                    }
                    else
                    {
                        Paso2BotonCargaCotizacion.setDisabled(true);
                        Paso2FormCotizacionPertinencia.setDisabled(true);
                        
                        if ( admin == 1 || dta == 1 || oec == 1 )
                        {
                            Paso2BotonVersionesCotizacion.setDisabled(false);
                        }
                        else
                        {
                            Paso2BotonVersionesCotizacion.setDisabled(true);
                        }
                        
                        if ( accionesArray['carga-factura-pertinencia-alcance'] == '0' )
                        {
                            Paso2BotonVerificarFactura.setDisabled(true);
                            Paso2BotonObservarFactura.setDisabled(true);
                            Paso2BotonHabilitaAnterior.setDisabled(true);
                            Paso2BotonApruebaDA.setDisabled(true);
                            Paso2BotonObservaDA.setDisabled(true);
                            
                            if ( admin == 1 || oec == 1 )
                            {
                                Paso2BotonCargaFactura.setDisabled(false);
                                Paso2FormFacturaPertinencia.setDisabled(false);
                                Paso2FileFacturaPertinencia.setDisabled(false);
                                Paso2BotonVersionesFactura.setDisabled(false);
                            }
                            else
                            {
                                Paso2BotonCargaFactura.setDisabled(true);
                                Paso2FormFacturaPertinencia.setDisabled(true);
                                Paso2FileFacturaPertinencia.setDisabled(true);
                                Paso2BotonVersionesFactura.setDisabled(true);
                            }

                        }
                        else
                        {
                            Paso2BotonCargaFactura.setDisabled(true);
                            Paso2FormFacturaPertinencia.setDisabled(true);
                            Paso2FileFacturaPertinencia.setDisabled(true);
                            
                            if ( admin == 1 || dta == 1 || oec == 1 )
                            {
                                Paso2BotonVersionesFactura.setDisabled(false);
                            }
                            else
                            {
                                Paso2BotonVersionesFactura.setDisabled(true);
                            }


                            if ( accionesArray['verifica-factura-pertinencia-alcance'] == '0' )
                            {
                                Paso2BotonApruebaDA.setDisabled(true);
                                Paso2BotonObservaDA.setDisabled(true);
                                
                                if ( admin == 1 || dta == 1 )
                                {
                                    Paso2BotonVerificarFactura.setDisabled(false);
                                    Paso2BotonObservarFactura.setDisabled(false);
                                    Paso2BotonHabilitaAnterior.setDisabled(false);
                                }
                                else
                                {
                                    Paso2BotonVerificarFactura.setDisabled(true);
                                    Paso2BotonObservarFactura.setDisabled(true);
                                    Paso2BotonHabilitaAnterior.setDisabled(true);
                                }
                            }
                            else
                            {
                                Paso2BotonVerificarFactura.setDisabled(true);
                                me.accionTerminada1 = 1;
                                
                                if ( admin == 1 || dta == 1 || oec == 1 )
                                {
                                    Paso2BotonObservarFactura.setDisabled(false);
                                    Paso2BotonHabilitaAnterior.setDisabled(false);
                                }
                                else
                                {
                                    Paso2BotonObservarFactura.setDisabled(true);
                                    Paso2BotonHabilitaAnterior.setDisabled(true);
                                }
                                
                                
                                if ( accionesArray['aprueba-da-cotizacion-pertinencia-alcance'] == '0' )
                                {
                                    if ( admin == 1 || da == 1 )
                                    {
                                        Paso2BotonApruebaDA.setDisabled(false);
                                        Paso2BotonObservaDA.setDisabled(false);
                                    }
                                    else
                                    {
                                        Paso2BotonApruebaDA.setDisabled(true);
                                        Paso2BotonObservaDA.setDisabled(true);
                                    }
                                }
                                else
                                {
                                    Paso2BotonApruebaDA.setDisabled(true);
                                    me.accionTerminada2 = 1;
                                    
                                    if ( admin == 1 || dta == 1 )
                                    {
                                        Paso2BotonObservaDA.setDisabled(false);
                                    }
                                    else
                                    {
                                        Paso2BotonObservaDA.setDisabled(true);
                                    }
                                    
                                    sigPasoBtn.setDisabled(false);
                                    
                                    Paso2TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
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