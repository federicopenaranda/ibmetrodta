/*
 * Paso 4
 * 
 * Estado Actual:   'pertinencia-aprobada-consejo'
 * 
 * Acciones:
 * 
 *      1. 'carga-cotizacion-apertura-expediente'
 *      2. 'carga-factura-apertura-expediente'
 *      3. 'verifica-factura-apertura-expediente'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso4', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'pertinencia-aprobada-consejo',
    accionTerminada: 0,
    tiposUsuario: [],
    stores: [
        'proceso.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso4'
    ],
    refs: [
        {
            ref: 'Paso4Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4]'
        },
        
        /// Botones
        {
            ref: 'Paso4BotonCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnCargaCotizacion'
        },
        {
            ref: 'Paso4BotonCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnCargaFactura'
        },
        {
            ref: 'Paso4BotonVerificarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnVerificarFactura'
        },
        {
            ref: 'Paso4BotonObservarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnObservarFactura'
        },
        {
            ref: 'Paso4BotonHabilitaAnterior',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnHabilitarAnterior'
        },
        {
            ref: 'Paso4BotonApruebaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnApruebaDA'
        },
        {
            ref: 'Paso4BotonObservaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnObservaDA'
        },
        {
            ref: 'Paso4BotonVersionesCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnVersionesCotizacion'
        },
        {
            ref: 'Paso4BotonVersionesFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnVersionesFactura'
        },

        // Textos
        {
            ref: 'Paso4TextoSubCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] label#txtSubCargaCotizacion'
        },
         {
            ref: 'Paso4TextoDescargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] label#txtDescargaCotizacion'
        },
         {
            ref: 'Paso4TextoSubCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] label#txtSubCargaFactura'
        },
         {
            ref: 'Paso4TextoDescargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] label#txtDescargaFactura'
        },
         {
            ref: 'Paso4TextoSubVerificacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] label#txtSubVerificacion'
        },
         {
            ref: 'Paso4TextoSubAprobacionDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] label#txtSubAprobacionDA'
        },

        // Formularios
         {
            ref: 'Paso4FormCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] form#formCotizacion'
        },
        {
            ref: 'Paso4FormFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] form#formFactura'
        },
        
        // Archivos
        {
            ref: 'Paso4FileCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] filefield#fileCotizacion'
        },
        {
            ref: 'Paso4FileFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] filefield#fileFactura'
        }, 

        // Otros
        {
            ref: 'Paso4TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso4] label#textEstado'
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
                'panel[xtype=tramite.tramite.edit.tab.paso4]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnCargaCotizacion': {
                    click: this.cargaCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnCargaFactura': {
                    click: this.cargaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnVerificarFactura': {
                    click: this.verificaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnObservarFactura': {
                    click: this.observarFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnHabilitarAnterior': {
                    click: this.habilitaAnterior
                },
                'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnVersionesCotizacion': {
                    click: this.versionesCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso4] button#btnVersionesFactura': {
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
               accion: 'carga-factura-apertura-expediente'
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
                title: 'Versiones de Cotización para Apertura de Expediente'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-cotizacion-apertura-expediente';
        contPeticionArchivo.tbPeticionArchivo = 0;
        contPeticionArchivo.nombreEstado = me.estadoActual;
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1)
            contPeticionArchivo.tbPeticionArchivo = 1;


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
                title: 'Versiones de Factura por Apertura de Expediente'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-factura-apertura-expediente';
        contPeticionArchivo.tbPeticionArchivo = 0;
        contPeticionArchivo.nombreEstado = me.estadoActual;

        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1)
            contPeticionArchivo.tbPeticionArchivo = 1;


        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    cargaCotizacion: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso4FormCotizacion(),
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
                waitMsg: 'Cargando Cotización de Apertura de Expediente ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-cotizacion-apertura-expediente"' + ',' + 
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
                           nombre_accion: 'carga-cotizacion-apertura-expediente',
                           records: extra
                        },
                        success: function (response, options) {
                            
                            // Registra la acción terminada de la petición
                            me.terminaAccion( dataPeticion.id_peticion, 'carga-cotizacion-apertura-expediente' );

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
                form = me.getPaso4FormFactura(),
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
                waitMsg: 'Cargando Factura por Pago de Apertura de Expediente...',
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
                            '"descripcion_peticion_archivo":' + '"carga-factura-apertura-expediente"' + ',' + 
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
                           nombre_accion: 'carga-factura-apertura-expediente',
                           records: extra
                        },
                        success: function (response, options) {

                            // Registra la acción terminada de la petición
                             me.terminaAccion( dataPeticion.id_peticion, 'carga-factura-apertura-expediente' );

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
                    me.terminaAccion(dataPeticion.id_peticion, 'verifica-factura-apertura-expediente');
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
        controlador.accion = 'verifica-factura-apertura-expediente';
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
                Paso4BotonCargaCotizacion = me.getPaso4BotonCargaCotizacion(),
                Paso4BotonCargaFactura = me.getPaso4BotonCargaFactura(),
                Paso4BotonVerificarFactura = me.getPaso4BotonVerificarFactura(),
                Paso4BotonObservarFactura = me.getPaso4BotonObservarFactura(),
                Paso4BotonHabilitaAnterior = me.getPaso4BotonHabilitaAnterior(),
                Paso4BotonVersionesCotizacion = me.getPaso4BotonVersionesCotizacion(),
                Paso4BotonVersionesFactura = me.getPaso4BotonVersionesFactura(),
                
                // Textos
                Paso4TextoDescargaCotizacion = me.getPaso4TextoDescargaCotizacion(),
                Paso4TextoDescargaFactura = me.getPaso4TextoDescargaFactura(),
                Paso4TextEstado = me.getPaso4TextEstado(),
                
                // Formularios
                Paso4FormCotizacion = me.getPaso4FormCotizacion(),
                Paso4FormFactura = me.getPaso4FormFactura(),

                // Archivos
                Paso4FileCotizacion = me.getPaso4FileCotizacion(),
                Paso4FileFactura = me.getPaso4FileFactura(),

                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel2 = me.getPaso4Panel(),
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

                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 4: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(2);*/
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
            
                    Paso4TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                    me.accionTerminada = 0;
                    
                    if ( accionesArray['carga-cotizacion-apertura-expediente'] == '0' )
                    {
                        Paso4BotonVerificarFactura.setDisabled(true);
                        Paso4BotonObservarFactura.setDisabled(true);
                        Paso4BotonCargaFactura.setDisabled(true);
                        Paso4FileFactura.setDisabled(true);
                        Paso4BotonHabilitaAnterior.setDisabled(true);
                        Paso4BotonVersionesFactura.setDisabled(true);
                        
                        if ( admin == 1 || dta == 1 || da == 1 )
                        {
                            Paso4BotonCargaCotizacion.setDisabled(false);
                            Paso4FileCotizacion.setDisabled(false);
                            Paso4BotonVersionesCotizacion.setDisabled(false);
                        }
                        else
                        {
                            Paso4BotonCargaCotizacion.setDisabled(true);
                            Paso4FileCotizacion.setDisabled(true);
                            Paso4BotonVersionesCotizacion.setDisabled(true);
                        }
                    }
                    else
                    {
                        Paso4BotonCargaCotizacion.setDisabled(true);
                        Paso4FileCotizacion.setDisabled(true);
                        
                        if ( admin == 1 || dta == 1 || da == 1 || oec == 1 )
                        {
                            Paso4BotonVersionesCotizacion.setDisabled(false);
                        }
                        else
                        {
                            Paso4BotonVersionesCotizacion.setDisabled(true);
                        }
                        
                        
                        if ( accionesArray['carga-factura-apertura-expediente'] == '0' )
                        {
                            Paso4BotonVerificarFactura.setDisabled(true);
                            Paso4BotonObservarFactura.setDisabled(true);
                            Paso4BotonHabilitaAnterior.setDisabled(true);
                            
                            if ( admin == 1 || oec == 1 )
                            {
                                Paso4BotonCargaFactura.setDisabled(false);
                                Paso4FileFactura.setDisabled(false);
                                Paso4BotonVersionesFactura.setDisabled(false);
                            }
                            else
                            {
                                Paso4BotonCargaFactura.setDisabled(true);
                                Paso4FileFactura.setDisabled(true);
                                Paso4BotonVersionesFactura.setDisabled(true);
                            }
                        }
                        else
                        {
                            Paso4BotonCargaFactura.setDisabled(true);
                            Paso4FileFactura.setDisabled(true);
                            
                            if ( admin == 1 || oec == 1 || dta == 1 )
                            {
                                Paso4BotonVersionesFactura.setDisabled(false);
                                Paso4BotonHabilitaAnterior.setDisabled(false);
                            }
                            else
                            {
                                Paso4BotonVersionesFactura.setDisabled(true);
                                Paso4BotonHabilitaAnterior.setDisabled(true);
                            }
                            
                            
                            if ( accionesArray['verifica-factura-apertura-expediente'] == '0' )
                            {
                                
                                if ( admin == 1 || dta == 1 )
                                {
                                    Paso4BotonVerificarFactura.setDisabled(false);
                                    Paso4BotonObservarFactura.setDisabled(false);
                                    Paso4BotonHabilitaAnterior.setDisabled(false);
                                }
                                else
                                {
                                    Paso4BotonVerificarFactura.setDisabled(true);
                                    Paso4BotonObservarFactura.setDisabled(true);
                                    Paso4BotonHabilitaAnterior.setDisabled(true);
                                }
                            }
                            else
                            {
                                Paso4BotonVerificarFactura.setDisabled(true);
                                Paso4BotonHabilitaAnterior.setDisabled(true);
                                sigPasoBtn.setDisabled(false);
                                Paso4TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                                me.accionTerminada = 1;
                                
                                if ( admin == 1 || dta == 1 )
                                {
                                    Paso4BotonObservarFactura.setDisabled(false);
                                }
                                else
                                {
                                    Paso4BotonObservarFactura.setDisabled(true);
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