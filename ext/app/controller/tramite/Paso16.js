/*
 * Paso 16
 * 
 * Estado Actual:   'formulario-050-llenado'
 * 
 * Acciones:
 * 
 *      1. 'aprobacion-ra-tramite-comite-tecnico'
 *      2. 'carga-acta-comite-tecnico'
 *      3. 'aprobacion-da-tramite-comite-tecnico'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso16', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'formulario-050-llenado',
    stores: ['proceso.Peticion'],
    accionTerminada1: 0,
    accionTerminada2: 0,
    views: [
        'tramite.Tramite.edit.tab.Paso16'
    ],
    refs: [
        {
            ref: 'Paso16Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16]'
        },
        
        /// Botones
        {
            ref: 'Paso16ApruebaDocumentacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnApruebaDocumentacion'
        },
        {
            ref: 'Paso16PedirDocumentacionAdicional',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnPedirDocumentacionAdicional'
        },
        {
            ref: 'Paso16ApruebaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnApruebaDA'
        },
        {
            ref: 'Paso16ObservaDA',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnObservaDA'
        },
        {
            ref: 'Paso16FileActaComite',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] filefield#fileActaComite'
        },
        {
            ref: 'Paso16CargarActa',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnCargaActa'
        },
        {
            ref: 'Paso16FormActaComite',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] form#formActaComite'
        },
        {
            ref: 'Paso16VersionesActa',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnVersionesActa'
        },
        {
            ref: 'Paso16CargaAdicionales',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnCargaAdicionales'
        },
        
        
        
        
        
        
        {
            ref: 'Paso16TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso16] #textEstado'
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
            ref: 'WindowObservacion',
            selector: '[xtype=tramite.tramite.edit.windowobservacion]'
        },


        {
            ref: 'PeticionArchivoWindow',
            selector: '[xtype=proceso.peticionarchivo.edit.window]'
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
                'panel[xtype=tramite.tramite.edit.tab.paso16]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso16] #btnApruebaDocumentacion': {
                    click: this.apruebaDocumentacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso16] #btnPedirDocumentacionAdicional': {
                    click: this.observarDocumentacion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso16] #btnApruebaDA': {
                    click: this.apruebaDocumentacionDA
                },
                'panel[xtype=tramite.tramite.edit.tab.paso16] #btnObservaDA': {
                    click: this.observarDocumentacionDA
                },
                'panel[xtype=tramite.tramite.edit.tab.paso16] #btnCargaActa': {
                    click: this.cargaArchivoActaComite
                },
                'panel[xtype=tramite.tramite.edit.tab.paso16] #btnCargaAdicionales': {
                    click: this.cargaArchivoAdicional
                },
                'panel[xtype=tramite.tramite.edit.tab.paso16] button#btnVersionesActa': {
                    click: this.versionesActa
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    cargaArchivoAdicional: function ( button, e, eOpts ) {
        var me = this,
                win = me.getPeticionArchivoWindow(),
                filtro = '';
        
        var cont1 = me.getController('proceso.PeticionArchivo');
        
        cont1.nombreAccion = 'aprobacion-ra-tramite-comite-tecnico';
        cont1.nombreEstado = me.estadoActual;
        cont1.filtro = filtro;
        cont1.codigoTipoArchivo = 'aprobacion-ra-tramite-comite-tecnico';
        cont1.tipoAdicional = 1;
        cont1.accionTerminada = me.accionTerminada1;
        cont1.tbPeticionArchivo = 1;
        
        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Administración de Archivos'
            });
        }

        win.show();
        win.doComponentLayout();
    },
    
    
    versionesActa: function () {
        var me = this,
                win = me.getPeticionArchivoWindow(),
                filtro = '';
        
        var cont1 = me.getController('proceso.PeticionArchivo');
        
        cont1.nombreAccion = 'carga-acta-comite-tecnico';
        cont1.nombreEstado = me.estadoActual;
        cont1.filtro = filtro;
        cont1.codigoTipoArchivo = 'carga-acta-comite-tecnico';
        cont1.tipoAdicional = 0;
        cont1.accionTerminada = me.accionTerminada2;
        cont1.tbPeticionArchivo = 1;
        
        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Versiones de Acta de Comité Técnico'
            });
        }

        win.show();
        win.doComponentLayout();
        
        
        
        
        /*var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Versiones de Acta de Comité Técnico'
            });
        }

        var cont1 = me.getController('proceso.PeticionArchivo');
        cont1.nombreEstado = me.estadoActual;
        cont1.codigoTipoArchivo = 'carga-acta-comite-tecnico';
        cont1.tipoAdicional = 1;
        cont1.accionTerminada = me.accionTerminada1;
        cont1.tbPeticionArchivo = 1;
        
        // show window
        win.show();
        win.doComponentLayout();*/
    },
    
    
    cargaArchivoActaComite: function ( button, e, eOpts ) {
        var me = this,
                form = me.getPaso16FormActaComite(),
                field = form.down('#fileActaComite'),
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
                waitMsg: 'Cargando Acta de Comité Técnico ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-acta-comite-tecnico"' + ',' + 
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
                           nombre_accion: 'carga-acta-comite-tecnico',
                           records: extra
                        },
                        success: function (response, options) {
                            // Registra la acción terminada de la petición
                           me.terminaAccion( dataPeticion.id_peticion, 'carga-acta-comite-tecnico' );
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
    

    observarDocumentacion: function (a,b,c) {
       var me = this,
                win = me.getWindowObservacion(),
                cont1 = me.getController('proceso.ObsPeticionAccion');
        
        cont1.accion = 'aprobacion-ra-tramite-comite-tecnico';
        cont1.estado = me.estadoActual;
        cont1.accionTerminada = me.accionTerminada1;
        
         if (!win)
        {
            win = Ext.widget('proceso.obspeticionaccion.edit.window', {
                title: 'Observación de Trámite'
            });
        }
        
        // show window
        win.show();
        win.doComponentLayout();
    },
    

    observarDocumentacionDA: function (a,b,c) {
       var me = this,
                win = me.getWindowObservacion(),
                cont1 = me.getController('proceso.ObsPeticionAccion');
        
        cont1.accion = 'aprobacion-da-tramite-comite-tecnico';
        cont1.estado = me.estadoActual;
        cont1.accionTerminada = me.accionTerminada2;
        
         if (!win)
        {
            win = Ext.widget('proceso.obspeticionaccion.edit.window', {
                title: 'Observación de Trámite'
            });
        }
        
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    apruebaDocumentacion: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        Ext.Msg.confirm({
            title: 'Confirmar Aprobación de Documentación por el Comité Técnico',
            msg: '¿Confirma que se ha aprobado la documentación por el Comité Técnico ?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'aprobacion-ra-tramite-comite-tecnico');
                }
            }
        });
    },
    
    
    apruebaDocumentacionDA: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        Ext.Msg.confirm({
            title: 'Confirmar Aprobación de Documentación por el Consejo',
            msg: '¿Confirma que la Dirección de Acreditación aprueba la documentación ?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'aprobacion-da-tramite-comite-tecnico');
                }
            }
        });
    },
    
    
    configPanelPaso: function () {
        var me = this,
            peticionLista = me.getTramiteListaPeticion(),
            recPeticion = peticionLista.getSelectionModel().getSelection()[0],
            dataPeticion = recPeticion.getData(),
            
            // Layout
            form = me.getTramiteForm().down(),
            layout = form.getLayout(),
            antPasoBtn = me.getTramiteAnteriorPasoBoton(),
            sigPasoBtn = me.getTramiteSiguientePasoBoton(),
            accion, estado, peticion,
            
            // Botones
            Paso16ApruebaDocumentacion = me.getPaso16ApruebaDocumentacion(),
            Paso16PedirDocumentacionAdicional = me.getPaso16PedirDocumentacionAdicional(),
            Paso16FileActaComite = me.getPaso16FileActaComite(),
            Paso16CargarActa = me.getPaso16CargarActa(),
            Paso16ApruebaDA = me.getPaso16ApruebaDA(),
            Paso16ObservaDA = me.getPaso16ObservaDA(),
            Paso16VersionesActa = me.getPaso16VersionesActa(),
            
            txtEstado = me.getPaso16TextEstado();

        estado = me.estadoActual;
        peticion = dataPeticion.id_peticion;

        Ext.getBody().mask('Configurando Interfaz ...');
        
        sigPasoBtn.setDisabled(true);
    
        Ext.data.JsonP.request({
            url: ibmetrodta.app.globals.globalServerPath + 'peticion010401',
            params: {
                filter: '[{"property":"id_peticion","value":"'+ dataPeticion.id_peticion +'"}]',
                start: 0,
                limit: 10
            },
            success: function (response, options) {
                var boolComite = response.registros[0].necesidad_comite_peticion;
                
                /*if ( boolComite == null )
                {
                    Ext.Msg.alert({
                        title: 'Necesidad de Comité no Definida',
                        buttons: Ext.Msg.OK,
                        msg: 'No se definió la necesidad de un Comité, se retrocederá al Paso 15.',
                        fn: function (buttonId, text, opt)
                        {
                            layout.setActiveItem(14);
                        }
                    });
                }
                
                if ( boolComite == 0 )
                {
                    Ext.Msg.alert({
                        title: 'No hay necesidad de Comité',
                        buttons: Ext.Msg.OK,
                        msg: 'No existe la necesidad de un Comité, se pasará al Paso 17.',
                        fn: function (buttonId, text, opt)
                        {
                            layout.setActiveItem(16);
                        }
                    });
                }
                
                if ( boolComite == 1 )
                {
                    */
                    
                    
                    
                    
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
                            var et = ( typeof(tipoUsuarioArray['et']) === 'undefined' ) ? -1 : 1;
                            var ra = ( typeof(tipoUsuarioArray['ra']) === 'undefined' ) ? -1 : 1;

                            if ( acciones.length === 0 )   // TODO: habiltiar según el privilegio por tipo de usuario
                            {
                                Ext.getBody().unmask();
                                console.log('Paso 16: Sin Acciones');

                                /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones para realizar, por favor complete el anterior paso.');
                                var active = layout.getActiveItem();
                                layout.setActiveItem(14);*/
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
                        
                        
                        
                                txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                                
                                if ( accionesArray['aprobacion-ra-tramite-comite-tecnico'] == '0' )
                                {
                                    Paso16ApruebaDA.setDisabled(true);
                                    Paso16ObservaDA.setDisabled(true);
                                    Paso16CargarActa.setDisabled(true);
                                    Paso16FileActaComite.setDisabled(true);
                                    Paso16VersionesActa.setDisabled(true);
                                    me.accionTerminada1 = 0;
                                    
                                    if ( admin == 1 || dta == 1 )
                                    {
                                        Paso16ApruebaDocumentacion.setDisabled(false);
                                        Paso16PedirDocumentacionAdicional.setDisabled(false);
                                    }
                                    else
                                    {
                                        Paso16ApruebaDocumentacion.setDisabled(true);
                                        Paso16PedirDocumentacionAdicional.setDisabled(true);
                                    }
                                }
                                else
                                {
                                    Paso16ApruebaDocumentacion.setDisabled(true);
                                    me.accionTerminada1 = 1;

                                    if ( admin == 1 || dta == 1 )
                                    {
                                        Paso16PedirDocumentacionAdicional.setDisabled(false);
                                    }
                                    else
                                    {
                                        Paso16PedirDocumentacionAdicional.setDisabled(true);
                                    }
                                    
                                    if ( accionesArray['carga-acta-comite-tecnico'] == '0' )
                                    {
                                        Paso16ApruebaDA.setDisabled(true);
                                        Paso16ObservaDA.setDisabled(true);
                                        
                                        if ( admin == 1 || dta == 1 )
                                        {
                                            Paso16CargarActa.setDisabled(false);
                                            Paso16FileActaComite.setDisabled(false);
                                            Paso16VersionesActa.setDisabled(false);
                                        }
                                        else
                                        {
                                            Paso16CargarActa.setDisabled(true);
                                            Paso16FileActaComite.setDisabled(true);
                                            Paso16VersionesActa.setDisabled(true);
                                        }
                                    }
                                    else
                                    {
                                        Paso16CargarActa.setDisabled(true);
                                        Paso16FileActaComite.setDisabled(true);
                                        
                                        if ( admin == 1 || dta == 1 )
                                        {
                                            Paso16VersionesActa.setDisabled(false);
                                        }
                                        else
                                        {
                                            Paso16VersionesActa.setDisabled(true);
                                        }
                                        
                                        
                                        if ( accionesArray['aprobacion-da-tramite-comite-tecnico'] == '0' )
                                        {
                                            me.accionTerminada2 = 0;
                                            
                                            if ( admin == 1 || da == 1 )
                                            {
                                                Paso16ApruebaDA.setDisabled(false);
                                                Paso16ObservaDA.setDisabled(false);
                                            }
                                            else
                                            {
                                                Paso16ApruebaDA.setDisabled(true);
                                                Paso16ObservaDA.setDisabled(true);
                                            }
                                        }
                                        else
                                        {
                                            Paso16ApruebaDA.setDisabled(true);
                                            me.accionTerminada2 = 1;
                                            
                                            sigPasoBtn.setDisabled(false);
                                            
                                            txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                                            
                                            if ( admin == 1 || da == 1 || dta == 1 || ra == 1 )
                                            {
                                                Paso16ObservaDA.setDisabled(false);
                                            }
                                            else
                                            {
                                                Paso16ObservaDA.setDisabled(true);
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
                    
                    
                    
                    
                    
              //  }
                
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