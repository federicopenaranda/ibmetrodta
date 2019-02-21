/*
 * Paso 7
 * 
 * Estado Actual:   'carga-archivos-base-terminada'
 * 
 * Acciones:
 * 
 *      1. 'carga-cotizacion-revision-documental'
 *      2. 'carga-factura-revision-documental'
 *      3. 'verifica-factura-revision-documental'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso7', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'carga-archivos-base-terminada',
    accionTerminada: 0,
    tiposUsuario: [],
    stores: [
        'proceso.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso7'
    ],
    refs: [
        {
            ref: 'Paso7Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7]'
        },
        
        /// Botones
        {
            ref: 'Paso7BotonCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnCargaCotizacion'
        },
        {
            ref: 'Paso7BotonCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnCargaFactura'
        },
        {
            ref: 'Paso7BotonVerificarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnVerificarFactura'
        },
        {
            ref: 'Paso7BotonObservarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnObservarFactura'
        },
        {
            ref: 'Paso7BotonVersionesCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnVersionesCotizacion'
        },
        {
            ref: 'Paso7BotonVersionesFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnVersionesFactura'
        },
        {
            ref: 'Paso7BotonHabilitaAnterior',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnHabilitarAnterior'
        },
        
        
        
        
        

        // Textos
        {
            ref: 'Paso7TextoSubCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] label#txtSubCargaCotizacion'
        },
         {
            ref: 'Paso7TextoDescargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] label#txtDescargaCotizacion'
        },
         {
            ref: 'Paso7TextoSubCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] label#txtSubCargaFactura'
        },
         {
            ref: 'Paso7TextoDescargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] label#txtDescargaFactura'
        },
         {
            ref: 'Paso7TextoSubVerificacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] label#txtSubVerificacion'
        },

        // Formularios
         {
            ref: 'Paso7FormCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] form#formCotizacion'
        },
        {
            ref: 'Paso7FormFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] form#formFactura'
        },
        
        // Archivos
        {
            ref: 'Paso7FileCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] filefield#fileCotizacion'
        },
        {
            ref: 'Paso7FileFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] filefield#fileFactura'
        }, 

        // Otros
        {
            ref: 'Paso7TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso7] label#textEstado'
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
            selector: 'window[xtype=proceso.obspeticionaccion.edit.window]'
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
                'panel[xtype=tramite.tramite.edit.tab.paso7]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnCargaCotizacion': {
                    click: this.cargaCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnCargaFactura': {
                    click: this.cargaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnVerificarFactura': {
                    click: this.verificaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnObservarFactura': {
                    click: this.observarFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnVersionesCotizacion': {
                    click: this.versionesCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnVersionesFactura': {
                    click: this.versionesFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso7] button#btnHabilitarAnterior': {
                    click: this.habilitaAnterior
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
               accion: 'carga-factura-revision-documental'
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
                title: 'Versiones de Cotización para Revisión Documental'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-cotizacion-revision-documental';
        contPeticionArchivo.tbPeticionArchivo = 0;
        contPeticionArchivo.accionTerminada = me.accionTerminada;
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
                title: 'Versiones de Factura por Revisión Documental'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-factura-revision-documental';
        contPeticionArchivo.accionTerminada = me.accionTerminada;
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
    
    
    cargaCotizacion: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso7FormCotizacion(),
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
                waitMsg: 'Cargando Cotización de Revisión Documental ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-cotizacion-revision-documental"' + ',' + 
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
                           nombre_accion: 'carga-cotizacion-revision-documental',
                           records: extra
                        },
                        success: function (response, options) {
                            
                            // Registra la acción terminada de la petición
                           me.terminaAccion( dataPeticion.id_peticion, 'carga-cotizacion-revision-documental' );

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
                form = me.getPaso7FormFactura(),
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
                waitMsg: 'Cargando Factura por Pago de Revisión Documental ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-factura-revision-documental"' + ',' + 
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
                           nombre_accion: 'carga-factura-revision-documental',
                           records: extra
                        },
                        success: function (response, options) {

                            // Registra la acción terminada de la petición
                             me.terminaAccion( dataPeticion.id_peticion, 'carga-factura-revision-documental' );

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
                    me.terminaAccion(dataPeticion.id_peticion, 'verifica-factura-revision-documental');
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
        controlador.accion = 'verifica-factura-revision-documental';
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
                Paso7BotonCargaCotizacion = me.getPaso7BotonCargaCotizacion(),
                Paso7BotonCargaFactura = me.getPaso7BotonCargaFactura(),
                Paso7BotonVerificarFactura = me.getPaso7BotonVerificarFactura(),
                Paso7BotonObservarFactura = me.getPaso7BotonObservarFactura(),
                Paso7BotonHabilitaAnterior = me.getPaso7BotonHabilitaAnterior(),
                Paso7BotonVersionesFactura = me.getPaso7BotonVersionesFactura(),
                Paso7BotonVersionesCotizacion = me.getPaso7BotonVersionesCotizacion(),
                
                // Textos
                Paso7TextoDescargaCotizacion = me.getPaso7TextoDescargaCotizacion(),
                Paso7TextoDescargaFactura = me.getPaso7TextoDescargaFactura(),
                Paso7TextEstado = me.getPaso7TextEstado(),
                
                // Formularios
                Paso7FormCotizacion = me.getPaso7FormCotizacion(),
                Paso7FormFactura = me.getPaso7FormFactura(),

                // Archivos
                Paso7FileCotizacion = me.getPaso7FileCotizacion(),
                Paso7FileFactura = me.getPaso7FileFactura(),

                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel2 = me.getPaso7Panel(),
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
                    console.log('Paso 7: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(5);*/
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



                    Paso7TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                    
                    if ( accionesArray['carga-cotizacion-revision-documental'] == '0' )
                    {
                        Paso7BotonVerificarFactura.setDisabled(true);
                        Paso7BotonObservarFactura.setDisabled(true);
                        Paso7BotonCargaFactura.setDisabled(true);
                        Paso7BotonHabilitaAnterior.setDisabled(true);
                        Paso7FileFactura.setDisabled(true);
                        Paso7BotonVersionesFactura.setDisabled(true);
                        
                        if ( admin === 1 || dta === 1 || da === 1 )
                        {
                            Paso7BotonCargaCotizacion.setDisabled(false);
                            Paso7FileCotizacion.setDisabled(false);
                            Paso7BotonVersionesCotizacion.setDisabled(false);
                        }
                        else
                        {
                            Paso7BotonCargaCotizacion.setDisabled(true);
                            Paso7FileCotizacion.setDisabled(true);
                            Paso7BotonVersionesCotizacion.setDisabled(true);
                        }
                    }
                    else
                    {
                        Paso7BotonCargaCotizacion.setDisabled(true);
                        Paso7BotonHabilitaAnterior.setDisabled(true);
                        Paso7FileCotizacion.setDisabled(true);

                        if ( admin == 1 || dta == 1 || da == 1 || oec == 1 )
                        {
                            Paso7BotonVersionesCotizacion.setDisabled(false);
                        }
                        else
                        {
                            Paso7BotonVersionesCotizacion.setDisabled(true);
                        }
                        
                        
                        if ( accionesArray['carga-factura-revision-documental'] == '0' )
                        {
                            Paso7BotonVerificarFactura.setDisabled(true);
                            Paso7BotonHabilitaAnterior.setDisabled(true);
                            Paso7BotonObservarFactura.setDisabled(true);
                            
                            if ( admin == 1 || oec == 1 )
                            {
                                Paso7BotonCargaFactura.setDisabled(false);
                                Paso7FileFactura.setDisabled(false);
                                Paso7BotonVersionesFactura.setDisabled(false);
                            }
                            else
                            {
                                Paso7BotonCargaFactura.setDisabled(true);
                                Paso7FileFactura.setDisabled(true);
                                Paso7BotonVersionesFactura.setDisabled(true);
                            }
                        }
                        else
                        {
                            Paso7BotonCargaFactura.setDisabled(true);
                            Paso7FileFactura.setDisabled(true);
                            
                            if ( admin == 1 || oec == 1 || dta == 1 )
                            {
                                Paso7BotonVersionesFactura.setDisabled(false);
                            }
                            else
                            {
                                Paso7BotonVersionesFactura.setDisabled(true);
                            }
                            
                            
                            if ( accionesArray['verifica-factura-revision-documental'] == '0' )
                            {
                                me.accionTerminada = 0;
                                
                                if ( oec == 1 )
                                {
                                    Paso7BotonCargaFactura.setDisabled(false);
                                    Paso7FileFactura.setDisabled(false);
                                }
                                
                                if ( admin == 1 || dta == 1 )
                                {
                                    Paso7BotonVerificarFactura.setDisabled(false);
                                    Paso7BotonObservarFactura.setDisabled(false);
                                    Paso7BotonHabilitaAnterior.setDisabled(false);
                                }
                                else
                                {
                                    Paso7BotonVerificarFactura.setDisabled(true);
                                    Paso7BotonObservarFactura.setDisabled(true);
                                    Paso7BotonHabilitaAnterior.setDisabled(true);
                                }
                            }
                            else
                            {
                                me.accionTerminada = 1;
                                Paso7BotonVerificarFactura.setDisabled(true);
                                Paso7BotonCargaFactura.setDisabled(true);
                                Paso7FileFactura.setDisabled(true);
                                Paso7BotonHabilitaAnterior.setDisabled(true);
                                sigPasoBtn.setDisabled(false);
                                Paso7TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                                
                                if ( admin == 1 || dta == 1 || oec == 1 )
                                {
                                    Paso7BotonObservarFactura.setDisabled(false);
                                }
                                else
                                {
                                    Paso7BotonObservarFactura.setDisabled(true);
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