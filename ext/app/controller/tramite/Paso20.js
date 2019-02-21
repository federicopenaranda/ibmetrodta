/*
 * Paso 20
 * 
 * Estado Actual:   'tramite-aprobado-consejo'
 * 
 * Acciones:
 * 
 *      1. 'carga-cotizacion-concesion-mantenimiento'
 *      2. 'carga-factura-concesion-mantenimiento'
 *      3. 'verifica-factura-concesion-mantenimiento'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso20', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'tramite-aprobado-consejo',
    accionTerminada: 0,
    stores: [
        'proceso.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso20'
    ],
    refs: [
        {
            ref: 'Paso20Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20]'
        },
        
        /// Botones
        {
            ref: 'Paso20BotonCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnCargaCotizacion'
        },
        {
            ref: 'Paso20BotonCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnCargaFactura'
        },
        {
            ref: 'Paso20BotonVerificarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnVerificarFactura'
        },
        {
            ref: 'Paso20BotonObservarFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnObservarFactura'
        },
        {
            ref: 'Paso20BotonVersionesCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnVersionesCotizacion'
        },
        {
            ref: 'Paso20BotonVersionesFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnVersionesFactura'
        },
        {
            ref: 'Paso20BotonHabilitaAnterior',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnHabilitarAnterior'
        },
        

        // Textos
        {
            ref: 'Paso20TextoSubCargaCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] label#txtSubCargaCotizacion'
        },
         {
            ref: 'Paso20TextoSubCargaFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] label#txtSubCargaFactura'
        },
         {
            ref: 'Paso20TextoSubVerificacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] label#txtSubVerificacion'
        },
         {
            ref: 'Paso20TextoSubAprobacionDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] label#txtSubAprobacionDA'
        },

        // Formularios
         {
            ref: 'Paso20FormCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] form#formCotizacion'
        },
        {
            ref: 'Paso20FormFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] form#formFactura'
        },
        
        // Archivos
        {
            ref: 'Paso20FileCotizacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] filefield#fileCotizacion'
        },
        {
            ref: 'Paso20FileFactura',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] filefield#fileFactura'
        }, 

        // Otros
        {
            ref: 'Paso20TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso20] label#textEstado'
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
                'panel[xtype=tramite.tramite.edit.tab.paso20]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnCargaCotizacion': {
                    click: this.cargaCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnCargaFactura': {
                    click: this.cargaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnVerificarFactura': {
                    click: this.verificaFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnObservarFactura': {
                    click: this.observarFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnVersionesCotizacion': {
                    click: this.versionesCotizacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnVersionesFactura': {
                    click: this.versionesFactura
                },
                'panel[xtype=tramite.tramite.edit.tab.paso20] button#btnHabilitarAnterior': {
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
               accion: 'carga-factura-concesion-mantenimiento'
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
                title: 'Versiones de Cotización por Concesión y Mantenimiento'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-cotizacion-concesion-mantenimiento';
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
                title: 'Versiones de Factura por Concesión y Mantenimiento'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-factura-concesion-mantenimiento';
        contPeticionArchivo.tbPeticionArchivo = 0;
        contPeticionArchivo.accionTeminada = me.accionTeminada;
        contPeticionArchivo.nombreEstado = me.estadoActual;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    cargaCotizacion: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso20FormCotizacion(),
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
                waitMsg: 'Cargando Cotización de Concesión y Mantenimiento ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-cotizacion-concesion-mantenimiento"' + ',' + 
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
                           nombre_accion: 'carga-cotizacion-concesion-mantenimiento',
                           records: extra
                        },
                        success: function (response, options) {
                            
                            // Registra la acción terminada de la petición
                            me.terminaAccion( dataPeticion.id_peticion, 'carga-cotizacion-concesion-mantenimiento' );
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
                form = me.getPaso20FormFactura(),
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
                waitMsg: 'Cargando Factura por Pago de Concesión y Mantenimiento ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-factura-concesion-mantenimiento"' + ',' + 
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
                           nombre_accion: 'carga-factura-concesion-mantenimiento',
                           records: extra
                        },
                        success: function (response, options) {

                            // Registra la acción terminada de la petición
                             me.terminaAccion( dataPeticion.id_peticion, 'carga-factura-concesion-mantenimiento' );

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
                    me.terminaAccion(dataPeticion.id_peticion, 'verifica-factura-concesion-mantenimiento');
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
        controlador.accion = 'verifica-factura-concesion-mantenimiento';

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
                Paso20BotonCargaCotizacion = me.getPaso20BotonCargaCotizacion(),
                Paso20BotonCargaFactura = me.getPaso20BotonCargaFactura(),
                Paso20BotonVerificarFactura = me.getPaso20BotonVerificarFactura(),
                Paso20BotonHabilitaAnterior = me.getPaso20BotonHabilitaAnterior(),
                Paso20BotonObservarFactura = me.getPaso20BotonObservarFactura(),
                
                // Textos
                Paso20TextEstado = me.getPaso20TextEstado(),
                
                // Formularios
                Paso20FormCotizacion = me.getPaso20FormCotizacion(),
                Paso20FormFactura = me.getPaso20FormFactura(),

                // Archivos
                Paso20FileCotizacion = me.getPaso20FileCotizacion(),
                Paso20FileFactura = me.getPaso20FileFactura(),

                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel2 = me.getPaso20Panel(),
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
                    console.log('Paso 20: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(18);*/
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

                    /// Accion carga-cotizacion-concesion-mantenimiento
                    if ( accionesArray['carga-cotizacion-concesion-mantenimiento'] === '0' && 
                            ( admin === 1 || dta === 1 || da === 1 ) )
                    {
                        Paso20BotonCargaCotizacion.setDisabled(false);
                        Paso20FormCotizacion.setDisabled(false);
                        Paso20FileCotizacion.setDisabled(false);
                    }
                    else
                    {
                        Paso20BotonCargaCotizacion.setDisabled(true);
                        Paso20FormCotizacion.setDisabled(true);
                        Paso20FileCotizacion.setDisabled(true);

                        if ( archivosArray['carga-cotizacion-concesion-mantenimiento'].length > 0 )
                        {
                            
                        }
                    }

                    // Accion carga-factura-concesion-mantenimiento
                    if ( accionesArray['carga-factura-concesion-mantenimiento'] === '0' &&
                           accionesArray['carga-cotizacion-concesion-mantenimiento'] === '1' && 
                           ( admin === 1 || oec === 1 ) )
                    {
                        Paso20BotonCargaFactura.setDisabled(false);
                        Paso20FormFactura.setDisabled(false);
                        Paso20FileFactura.setDisabled(false);
                        Paso20BotonHabilitaAnterior.setDisabled(true);
                    }
                    else
                    {
                        Paso20BotonCargaFactura.setDisabled(true);
                        Paso20FormFactura.setDisabled(true);
                        Paso20FileFactura.setDisabled(true);

                        if ( archivosArray['carga-factura-concesion-mantenimiento'].length > 0 )
                        {
                            
                        }
                    }

                    // Accion verifica-factura-concesion-mantenimiento
                    if ( accionesArray['verifica-factura-concesion-mantenimiento'] === '0' &&
                           accionesArray['carga-cotizacion-concesion-mantenimiento'] === '1' && 
                           accionesArray['carga-factura-concesion-mantenimiento'] === '1' && 
                           ( admin === 1 || dta === 1 || da === 1 ) )
                    {
                        Paso20BotonVerificarFactura.setDisabled(false);
                        Paso20BotonObservarFactura.setDisabled(false);
                    }
                    else
                    {
                        Paso20BotonVerificarFactura.setDisabled(true);
                        Paso20BotonObservarFactura.setDisabled(true);
                    }
                    
                    
                    if ( accionesArray['verifica-factura-concesion-mantenimiento'] === '1' &&
                           accionesArray['carga-cotizacion-concesion-mantenimiento'] === '1' && 
                           accionesArray['carga-factura-concesion-mantenimiento'] === '1' )
                    {
                        Paso20BotonHabilitaAnterior.setDisabled(true);
                        Paso20TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                    }
                    else
                    {
                        Paso20BotonHabilitaAnterior.setDisabled(false);
                        Paso20TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
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