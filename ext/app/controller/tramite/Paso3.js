/*
 * Paso 3
 * 
 * Estado Actual:   'cotizacion-pertinencia-aprobada'
 * 
 * Acciones:
 * 
 *      1. 'carga-informe-consejo'
 *      2. 'aprobacion-pertinencia-consejo'
 *      3. 'carga-acta-consejo'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso3', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'cotizacion-pertinencia-aprobada',
    accionTerminada: 0,
    tiposUsuario: [],
    stores: [
        'tramite.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso3'
    ],
    refs: [
        {
            ref: 'Paso3Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3]'
        },
        /// Botones
        {
            ref: 'Paso3BotonCargaActaConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnCargaActaConsejo'
        },
        {
            ref: 'Paso3BotonCargaInformeConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnCargaInformeConsejo'
        },
        {
            ref: 'Paso3BotonVersionesActaConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnVersionesActaConsejo'
        },
        {
            ref: 'Paso3BotonVersionesInformeConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnVersionesInformeConsejo'
        },
        // Textos
        {
            ref: 'Paso3TextoURLAbrirPaso1',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] label#abrirPaso1'
        },
        /// Grids
        {
            ref: 'Paso3GridConsejo',
            selector: '[xtype=tramite.tramite.listaconsejopeticion]'
        },
        // Formularios
        {
            ref: 'Paso3FormActaConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] form#formActaConsejo'
        },
        {
            ref: 'Paso3FormInformeConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] form#formInformeConsejo'
        },
        // Archivos
        {
            ref: 'Paso3BotonFileActaConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] button#fileActaConsejo'
        },
        {
            ref: 'Paso3BotonFileInformeConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] button#fileInformeConsejo'
       },
        // Otros
        {
            ref: 'Paso3TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso3] label#textEstado'
        },
        {
            ref: 'TramiteForm',
            selector: '[xtype=tramite.tramite.edit.form]'
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
            ref: 'TramiteAnteriorPasoBoton',
            selector: 'panel[xtype=tramite.tramite.edit.form] > toolbar > button#anteriorPaso'
        },
        {
            ref: 'TramiteSiguientePasoBoton',
            selector: 'panel[xtype=tramite.tramite.edit.form] > toolbar > button#siguientePaso'
        },
        {
            ref: 'WindowObservacion',
            selector: 'window[xtype=tramite.tramite.edit.windowobservacion]'
        },
        {
            ref: 'FormObservacionConsejo',
            selector: '[xtype=tramite.tramite.edit.formobservacion]'
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
                'panel[xtype=tramite.tramite.edit.tab.paso3]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnCargaActaConsejo': {
                    click: this.cargaActaConsejo
                },
                'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnCargaInformeConsejo': {
                    click: this.cargaInformeConsejo
                },
                'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnVersionesInformeConsejo': {
                    click: this.versionesInformeConsejo
                },
                'panel[xtype=tramite.tramite.edit.tab.paso3] button#btnVersionesActaConsejo': {
                    click: this.versionesActaConsejo
                },
                'grid[xtype=tramite.tramite.listaconsejopeticion]': {
                    itemapruebabuttonclick3: this.apruebaPasoConsejo,
                    itemobservarbuttonclick3: this.observaPasoConsejo
                },
                'panel[xtype=tramite.tramite.edit.tab.paso3] button#abrirPaso1': {
                    click: this.abrirPaso1
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    versionesInformeConsejo: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Versiones de Informe de Consejo'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-informe-consejo';
        contPeticionArchivo.tbPeticionArchivo = 0;
        contPeticionArchivo.nombreEstado = me.estadoActual;

        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1)
            contPeticionArchivo.tbPeticionArchivo = 1;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    versionesActaConsejo: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Versiones de Acta de Consejo'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'carga-acta-consejo';
        contPeticionArchivo.tbPeticionArchivo = 0;

        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1)
            contPeticionArchivo.tbPeticionArchivo = 1;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    abrirPaso1: function () {
        var me = this,
                form = me.getTramiteForm().down(),
                layout = form.getLayout();

        layout.setActiveItem(0);
    },
    
    
    apruebaPasoConsejo: function (a, b, c) {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                record, callbacks, store,
                gridConsejo = me.getPaso3GridConsejo(),
                storeConsejo = gridConsejo.getStore();

        store = me.getStore('tramite.ObsPeticionAccion'),
                record = Ext.create('ibmetrodta.model.tramite.ObsPeticionAccion');

        record.set('nombre_accion', 'aprobacion-pertinencia-consejo');
        record.set('obs_peticion_accion', 'Aprobación de Paso (Automático)');
        record.set('procede_obs_peticion_accion', 1);
        record.set('fk_id_peticion', dataPeticion.id_peticion);

        callbacks = {
            success: function (records, operation) {
                storeConsejo.reload({
                    callback: me.configGridConsejo()
                });
            },
            failure: function (records, operation) {
                store.rejectChanges();
            }
        };

        Ext.getBody().mask('Guardando Aceptación ...');

        store.add(record);
        store.sync(callbacks);
    },
    
    
    configGridConsejo: function () {
        var me = this,
                grid = me.getPaso3GridConsejo(),
                store = grid.getStore(),
                todos = true, val,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        store.reload({
            callback: function () {
                var records = store.getRange();

                Ext.Array.each(records, function (consejo, index, recs)
                {
                    val = consejo.getData();
                    todos = (val.procede_obs_peticion_accion == 0) ? false : true
                });

                if (todos == true)
                {
                    //grid.setDisabled(true);
                    me.terminaAccion(dataPeticion.id_peticion, 'aprobacion-pertinencia-consejo');
                } else
                {
                    grid.setDisabled(false);
                }
            }
        });
    },
    
    
    observaPasoConsejo: function (a, b, c) {
        var barra = 1;
        
        if (a.getRecord(b).getData().id_usuario == ibmetrodta.app.globals.globalIdUsuario)
        {
            barra = 0;
        }
        
        var me = this,
                win = me.getWindowObservacion(),
                cont1 = me.getController('proceso.ObsPeticionAccion');

        cont1.accion = 'aprobacion-pertinencia-consejo';
        cont1.estado = me.estadoActual;
        cont1.accionTerminada = me.accionTerminada;
        cont1.soloLectura = barra;

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
    
    
    cargaActaConsejo: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso3FormActaConsejo(),
                field = form.down('#fileActaConsejo'),
                value = field.getValue(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        if (value === '')
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo de Acta de Consejo.');
            return;
        } else
        {
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Acta de Consejo ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-acta-consejo"' + ',' +
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
                            nombre_accion: 'carga-acta-consejo',
                            records: extra
                        },
                        success: function (response, options) {
                            // Registra la acción terminada de la petición
                            me.terminaAccion(dataPeticion.id_peticion, 'carga-acta-consejo');
                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
                        }
                    });
                },
                failure: function (f, a) {
                    console.log('Error al subir el archivo!');
                    return;
                }
            });
        }
    },
    
    
    cargaInformeConsejo: function (button, e, eOpts) {
        var me = this,
                form = me.getPaso3FormInformeConsejo(),
                field = form.down('#fileInformeConsejo'),
                value = field.getValue(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        if (value === '')
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo de Informe de Consejo.');
            return;
        } else
        {
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Informe de Consejo ...',
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
                            '"descripcion_peticion_archivo":' + '"carga-informe-consejo"' + ',' +
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
                            nombre_accion: 'carga-informe-consejo',
                            records: extra
                        },
                        success: function (response, options) {
                            // Registra la acción terminada de la petición
                            me.terminaAccion(dataPeticion.id_peticion, 'carga-informe-consejo');
                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
                        }
                    });
                },
                failure: function (f, a) {
                    console.log('failure');
                    return;
                }
            });
        }
    },
    
    
    // Reconfigura el panel de acuerdo a las acciones ya realizadas o faltantes
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso3BotonCargaActaConsejo = me.getPaso3BotonCargaActaConsejo(),
                Paso3BotonCargaInformeConsejo = me.getPaso3BotonCargaInformeConsejo(),
                Paso3BotonVersionesActaConsejo = me.getPaso3BotonVersionesActaConsejo(),
                Paso3BotonVersionesInformeConsejo = me.getPaso3BotonVersionesInformeConsejo(),
                
                // Textos
                Paso3TextEstado = me.getPaso3TextEstado(),
                        
                // Formularios
                Paso3FormActaConsejo = me.getPaso3FormActaConsejo(),
                Paso3FormInformeConsejo = me.getPaso3FormInformeConsejo(),
                
                // Archivos
                Paso3BotonFileActaConsejo = me.getPaso3BotonFileActaConsejo(),
                Paso3BotonFileInformeConsejo = me.getPaso3BotonFileInformeConsejo(),
                
                // Grids
                grid = me.getPaso3GridConsejo(),
                
                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel3 = me.getPaso3Panel(),
                // Auxiliares
                accion, estado, peticion, filters = [];


        estado = me.estadoActual;
        peticion = dataPeticion.id_peticion;

        sigPasoBtn.setDisabled(true);

        var store = grid.getStore();
        store.load(
            {
                params: {
                    'fk_id_peticion': peticion,
                    'nombre_accion': 'aprobacion-pertinencia-consejo'
                }
            }
        );

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

                Ext.Object.each(tipoUsuario, function (name, index, accion) {
                        tipoUsuarioArray[index.nombre_usuario_tipo] = 1;
                    }
                );
        
                me.tiposUsuario = tipoUsuarioArray;


                // TODO: añadir y configurar con todos los tipos de usuarios
                var oec = (typeof (tipoUsuarioArray['oec']) === 'undefined') ? -1 : 1;
                var admin = (typeof (tipoUsuarioArray['admin']) === 'undefined') ? -1 : 1;
                var dta = (typeof (tipoUsuarioArray['dta']) === 'undefined') ? -1 : 1;
                var da = (typeof (tipoUsuarioArray['da']) === 'undefined') ? -1 : 1;
                var consejo = (typeof (tipoUsuarioArray['consejo']) === 'undefined') ? -1 : 1;


                if (acciones.length === 0)
                {
                    Ext.getBody().unmask();
                    console.log('Paso 3: Sin Acciones');

                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                     var active = layout.getActiveItem();
                     layout.setActiveItem(1);*/
                }
                else
                {
                    var accionesArray = [],
                            archivosArray = [];

                    Ext.Object.each(acciones, function (name, index, accion) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                            archivosArray[index.nombre_accion] = index.peticionArchivo010401s;
                        }
                    );
            
            
            
                    if ( oec == 1 )
                    {
                        Paso3BotonVersionesActaConsejo.hide();
                        Paso3BotonVersionesInformeConsejo.hide();
                        Paso3BotonVersionesActaConsejo.hide();
                        //grid.setDisabled(true);
                    }
                    
                    Paso3TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);


                    // Accion carga-informe-consejo
                    if ( accionesArray['carga-informe-consejo'] == '0' )
                    {
                        Paso3BotonCargaActaConsejo.setDisabled(true);
                        Paso3FormActaConsejo.setDisabled(true);
                        Paso3BotonVersionesActaConsejo.setDisabled(true);
                        //grid.setDisabled(true);
                        
                        if ( admin === 1 || dta === 1 )
                        {
                            Paso3BotonCargaInformeConsejo.setDisabled(false);
                            Paso3FormInformeConsejo.setDisabled(false);
                            Paso3BotonVersionesInformeConsejo.setDisabled(false);
                        }
                        else
                        {
                            Paso3BotonCargaInformeConsejo.setDisabled(true);
                            Paso3FormInformeConsejo.setDisabled(true);
                            Paso3BotonVersionesInformeConsejo.setDisabled(true);
                            
                            if ( consejo == 1 )
                                Paso3BotonVersionesInformeConsejo.setDisabled(false);
                        }
                    }
                    else
                    {
                        Paso3BotonCargaInformeConsejo.setDisabled(true);
                        Paso3FormInformeConsejo.setDisabled(true);
                        
                        if ( admin == 1 || consejo == 1 || dta == 1 )
                            Paso3BotonVersionesInformeConsejo.setDisabled(false);
                        else
                            Paso3BotonVersionesInformeConsejo.setDisabled(true);
                        
                        Paso3BotonCargaActaConsejo.setDisabled(true);
                        Paso3FormActaConsejo.setDisabled(true);
                        Paso3BotonVersionesActaConsejo.setDisabled(true);
                        
                        
                        if ( accionesArray['aprobacion-pertinencia-consejo'] == '0' )
                        {
                            me.accionTerminada = 0;
                            
                            if ( admin == 1 || consejo == 1 )
                                grid.setDisabled(false);
                        }
                        else
                        {
                            me.accionTerminada = 1;

                            
                            Paso3BotonCargaInformeConsejo.setDisabled(true);
                            Paso3FormInformeConsejo.setDisabled(true);

                            if ( admin == 1 || consejo == 1 || dta == 1 )
                                Paso3BotonVersionesInformeConsejo.setDisabled(false);
                            else
                                Paso3BotonVersionesInformeConsejo.setDisabled(true);

                            //grid.setDisabled(true);

                            
                            
                            
                            if ( accionesArray['carga-acta-consejo'] === '0' )
                            {
                                if ( admin == 1 || dta == 1 )
                                {
                                    Paso3BotonCargaActaConsejo.setDisabled(false);
                                    Paso3FormActaConsejo.setDisabled(false);
                                    Paso3BotonVersionesActaConsejo.setDisabled(false);
                                }
                                else
                                {
                                    Paso3BotonCargaActaConsejo.setDisabled(true);
                                    Paso3FormActaConsejo.setDisabled(true);
                                    Paso3BotonVersionesActaConsejo.setDisabled(true);
                                }
                            }
                            else
                            {
                                Paso3BotonCargaActaConsejo.setDisabled(true);
                                Paso3FormActaConsejo.setDisabled(true);
                                
                                if ( admin == 1 || consejo == 1 || dta == 1 )
                                    Paso3BotonVersionesActaConsejo.setDisabled(false);
                                else
                                    Paso3BotonVersionesActaConsejo.setDisabled(true);
                                
                                sigPasoBtn.setDisabled(false);
                                
                                Paso3TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                            }
                        }
                    }


                }

                Ext.getBody().unmask();
            },
            failure: function (response, options) {
                Ext.getBody().unmask();
                Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
            }
        });
    },
    
    
    // Termina accion
    terminaAccion: function (id_peticion, accion) {
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