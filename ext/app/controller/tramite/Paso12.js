/*
 * Paso 12
 * 
 * Estado Actual:   'documentacion-aprobada-equipo-evaluador'
 * 
 * Acciones:
 * 
 *      1. 'termina-carga-formulario-024'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso12', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'documentacion-aprobada-equipo-evaluador',
    accionTerminada: 0,
    views: [
        'tramite.Tramite.edit.tab.Paso12'
    ],
    refs: [
        {
            ref: 'Paso12Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso12]'
        },
        {
            ref: 'Paso12BotonAbreFormulario024',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso12] #btnForm024'
        },
        {
            ref: 'Paso12BotonFinalizaFormulario024',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso12] #btnFinalizarForm024'
        },
        {
            ref: 'Paso12BotonArchivosAdicionales',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso12] #btnVersionesArchivos'
        },
        {
            ref: 'Paso12TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso12] #textEstado'
        },
        
        {
            ref: 'Paso12EvaluacionWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.window]'
        },
        {
            ref: 'WindowArchivos',
            selector: 'window[xtype=proceso.peticionarchivo.edit.window]'
        },
        
        
        // Layout
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
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso12]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso12] #btnForm024': {
                    click: this.abreFormulario024
                },
                'panel[xtype=tramite.tramite.edit.tab.paso12] #btnFinalizarForm024': {
                    click: this.terminaEdicionFormulario024
                },
                'panel[xtype=tramite.tramite.edit.tab.paso12] #btnVersionesArchivos': {
                    click: this.cargaArchivosAdicionales
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    cargaArchivosAdicionales: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Archivos Adicionales'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'termina-carga-formulario-024';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        contPeticionArchivo.tbPeticionArchivo = 1;
        contPeticionArchivo.accionTeminada = 0;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    uploadArchivosAdicionales: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso12FormCotizacion(),
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

    
    terminaEdicionFormulario024: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        Ext.Msg.confirm({
            title: 'Confirmar Finalización de Edición',
            msg: '¿Terminó de editar el formulario ?. No podrá editarlo posteriormente.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formulario-024');
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
                Paso12BotonFinalizaFormulario024 = me.getPaso12BotonFinalizaFormulario024(),
                Paso12BotonAbreFormulario024 = me.getPaso12BotonAbreFormulario024(),
                txtEstado = me.getPaso12TextEstado(),
                
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
                var el = ( typeof(tipoUsuarioArray['el']) === 'undefined' ) ? -1 : 1;
                var ext = ( typeof(tipoUsuarioArray['ext']) === 'undefined' ) ? -1 : 1;
                var et = ( typeof(tipoUsuarioArray['et']) === 'undefined' ) ? -1 : 1;
                var ra = ( typeof(tipoUsuarioArray['ra']) === 'undefined' ) ? -1 : 1;

                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 12: Sin Acciones');
                    
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



                    /// Accion termina-carga-formulario-024
                    if ( accionesArray['termina-carga-formulario-024'] === '0' )
                    {
                        me.accionTerminada = 0;
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                        
                        if ( admin === 1 || el === 1 )
                        {
                            Paso12BotonFinalizaFormulario024.setDisabled(false);
                            Paso12BotonAbreFormulario024.setDisabled(false);
                        }
                        else
                        {
                            Paso12BotonFinalizaFormulario024.setDisabled(true);
                            Paso12BotonAbreFormulario024.setDisabled(true);
                        }
                    }
                    else
                    {
                        me.accionTerminada = 1;
                        Paso12BotonFinalizaFormulario024.setDisabled(true);
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                        
                        sigPasoBtn.setDisabled(false);
                        
                        if ( admin === 1 || oec === 1 || dta === 1 || el === 1 || et === 1 )
                        {
                            Paso12BotonAbreFormulario024.setDisabled(false);
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
    },
    
    
    abreFormulario024: function () {
        var me = this,
                win = me.getPaso12EvaluacionWindow();

        if (!win) {
            win = Ext.widget('evaluacion.evaluacion.edit.window', {
                title: 'Añadir Evaluación'
            });
        }
        
        var cont = me.getController('evaluacion.Evaluacion');
        cont.accionTerminada = me.accionTerminada;
        
        
        // show window
        win.show();
        win.doComponentLayout();
    }
});