/*
 * Paso 19
 * 
 * Estado Actual:   'certificado-acreditacion-generado'
 * 
 * Acciones:
 * 
 *      1. 'aprobar-tramite-consejo'
 *      2. 'cargar-acta-consejo'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso19', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'certificado-acreditacion-generado',
    accionTerminada: 0,
    stores: [
        'tramite.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso19'
    ],
    refs: [
        {
            ref: 'Paso19Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso19]'
        },


        /// Botones
        {
            ref: 'Paso19BotonCargaActaConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso19] button#btnCargaActaConsejo'
        },
        {
            ref: 'Paso19BotonVersionesActa',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso19] button#btnVersionesActa'
        },


        /// Grids
         {
            ref: 'Paso19GridConsejo',
            selector: '[xtype=tramite.tramite.listaconsejopeticion2]'
        },


        // Formularios
         {
            ref: 'Paso19FormActaConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso19] form#formActaConsejo'
        },


        // Archivos
        {
            ref: 'Paso19BotonFileActaConsejo',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso19] button#fileActaConsejo'
        }, 


        // Otros
        {
            ref: 'Paso19TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso19] label#textEstado'
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
            ref: 'WindowObservacionConsejo',
            selector: '[xtype=tramite.tramite.edit.windowobservacion]'
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
                'panel[xtype=tramite.tramite.edit.tab.paso19]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso19] button#btnCargaActaConsejo': {
                    click: this.cargaActaConsejo
                },
                'grid[xtype=tramite.tramite.listaconsejopeticion2]': {
                    itemapruebabuttonclick19: this.apruebaPasoConsejo,
                    itemobservarbuttonclick19: this.observaPasoConsejo
                },
                'panel[xtype=tramite.tramite.edit.tab.paso19] button#btnVersionesActa': {
                    click: this.versionesActa
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    versionesActa: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Versiones de Acta de Consejo'
            });
        }

        var cont1 = me.getController('proceso.PeticionArchivo');
        cont1.nombreAccion = 'cargar-acta-consejo';
        cont1.nombreEstado = me.estadoActual;
        //cont1.filtro = filtro;
        cont1.codigoTipoArchivo = 'cargar-acta-consejo';
        cont1.tipoAdicional = 0;
        cont1.accionTerminada = me.accionTerminada1;
        cont1.tbPeticionArchivo = 1;

        // show window
        win.show();
        win.doComponentLayout();
    },


    apruebaPasoConsejo: function (a,b,c) {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                record, callbacks, store;

        store = me.getStore('tramite.ObsPeticionAccion'),
        record = Ext.create('ibmetrodta.model.tramite.ObsPeticionAccion');

        record.set('nombre_accion', 'aprobar-tramite-consejo');
        record.set('obs_peticion_accion', 'Aprobación de Paso (Automático)');
        record.set('procede_obs_peticion_accion', 1);
        record.set('fk_id_peticion', dataPeticion.id_peticion);

        callbacks = {
            success: function (records, operation) {
                store.reload({
                    callback: function () {
                        me.configGridConsejo();
                    }
                });
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

        store.sync(callbacks);
    },


    observaPasoConsejo: function (a,b,c) {
       var me = this,
                win = me.getWindowObservacionConsejo(),
                cont1 = me.getController('proceso.ObsPeticionAccion');
        
        cont1.accion = 'aprobar-tramite-consejo';
        cont1.estado = me.estadoActual;
        cont1.filtro = 'aprobar-tramite-consejo';
        cont1.accionTerminada = me.accionTerminada;
        
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
                form = me.getPaso19FormActaConsejo(),
                field = form.down('#fileActaConsejo'),
                value = field.getValue(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        if ( value === '' )
        {
            Ext.Msg.alert('Error de Validación', 'Debe cargar un archivo de Acta de Consejo.');
            return;
        }
        else
        {
            form.submit({
                url: ibmetrodta.app.globals.globalServerPath + 'peticionarchivo010401/uploadnombrepeticionarchivo',
                waitMsg: 'Cargando Acta de Consejo ...',
                success: function (f, a) {
                    var json = Ext.decode(a.response.responseText),
                            extra;
                    
                    extra = '{"id_peticion_archivo":' + 'null' + ',' + 
                            '"fk_id_peticion_estado":' + 'null' + ',' + 
                            '"fk_id_accion":' + 'null' + ',' + 
                            '"fk_id_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"nombre_peticion_archivo":' + '"' + json.msg.registros + '",' + 
                            '"codigo_peticion_archivo_tipo":' + 'null' + ',' + 
                            '"version_peticion_archivo":' + 'null' + ',' + 
                            '"activo_peticion_archivo":' + '1' + ',' + 
                            '"descripcion_peticion_archivo":' + '"cargar-acta-consejo"' + ',' + 
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
                           nombre_accion: 'cargar-acta-consejo',
                           records: extra
                        },
                        success: function (response, options) {
                            // Registra la acción terminada de la petición
                             me.terminaAccion( dataPeticion.id_peticion, 'cargar-acta-consejo' );
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
    
    
    // Reconfigura el panel de acuerdo a las acciones ya realizadas o faltantes
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso19BotonCargaActaConsejo = me.getPaso19BotonCargaActaConsejo(),
                Paso19BotonVersionesActa = me.getPaso19BotonVersionesActa(),
                
                // Textos
                Paso19TextEstado = me.getPaso19TextEstado(),

                // Formularios
                Paso19FormActaConsejo = me.getPaso19FormActaConsejo(),

                // Archivos
                Paso19BotonFileActaConsejo = me.getPaso19BotonFileActaConsejo(),

                // Layout
                grid = me.getPaso19GridConsejo(),
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel3 = me.getPaso19Panel(),
                accion, estado, peticion;

        estado = me.estadoActual;
        peticion = dataPeticion.id_peticion;
        
        var store = grid.getStore();
        store.load(
                {
                    params: {
                        'fk_id_peticion': peticion,
                        'nombre_accion': 'aprobar-tramite-consejo'
                    },
                    callback: function () {
                        //me.configGridConsejo();
                    }
                }
        );

        //me.configGridConsejo();

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
               
                
                // TODO: añadir y configurar con todos los tipos de usuarios
                var oec = ( typeof(tipoUsuarioArray['oec']) === 'undefined' ) ? -1 : 1;
                var admin = ( typeof(tipoUsuarioArray['admin']) === 'undefined' ) ? -1 : 1;
                var dta = ( typeof(tipoUsuarioArray['dta']) === 'undefined' ) ? -1 : 1;
                var da = ( typeof(tipoUsuarioArray['da']) === 'undefined' ) ? -1 : 1;
                var consejo = ( typeof(tipoUsuarioArray['consejo']) === 'undefined' ) ? -1 : 1;

                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 19: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(17);*/
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
            
            
            
            
                    Paso19TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
            
                    if ( accionesArray['aprobar-tramite-consejo'] == '0' )
                    {
                        me.accionTerminada = 0;
                            
                        me.configGridConsejo();
                        Paso19BotonCargaActaConsejo.setDisabled(true);
                        Paso19FormActaConsejo.setDisabled(true);
                        Paso19BotonVersionesActa.setDisabled(true);
                            
                        if ( consejo == 1 || admin == 1 )
                        {
                            grid.setDisabled(false);
                        }
                        else
                        {
                            grid.setDisabled(true);
                        }
                    }
                    else
                    {
                        //grid.setDisabled(true);
                        me.accionTerminada = 1;
                        
                        if ( consejo == 1 || admin == 1 )
                        {
                            grid.setDisabled(false);
                        }
                        else
                        {
                            grid.setDisabled(true);
                        }

                        if ( accionesArray['cargar-acta-consejo'] == '0' )
                        {
                            if ( admin == 1 || dta == 1 || da == 1 )
                            {
                                Paso19BotonCargaActaConsejo.setDisabled(false);
                                Paso19FormActaConsejo.setDisabled(false);
                                Paso19BotonVersionesActa.setDisabled(false);
                            }
                            else
                            {
                                Paso19BotonCargaActaConsejo.setDisabled(true);
                                Paso19FormActaConsejo.setDisabled(true);
                                Paso19BotonVersionesActa.setDisabled(true);
                            }
                        }
                        else
                        {
                            Paso19BotonCargaActaConsejo.setDisabled(true);
                            Paso19FormActaConsejo.setDisabled(true);
                            sigPasoBtn.setDisabled(false);
                            Paso19TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                            
                            if ( admin == 1 || dta == 1 || da == 1 )
                            {
                                Paso19BotonVersionesActa.setDisabled(false);
                            }
                            else
                            {
                                Paso19BotonVersionesActa.setDisabled(true);
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
    
    
    configGridConsejo: function () {
        var me = this,
                grid = me.getPaso19GridConsejo(),
                store = grid.getStore(),
                rec = [], todos = true, val,
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        store.reload({
            callback: function () {
                
                var records = store.getRange();
                
                Ext.Array.each ( records, function ( consejo, index, recs ) {
                    val = consejo.getData();
                    todos = ( parseInt(val.procede_obs_peticion_accion) == 0 ) ? true : false;
                });

                if (todos == false)
                {
                    grid.setDisabled(true);
                    me.terminaAccion ( dataPeticion.id_peticion, 'aprobar-tramite-consejo' );
                }
                else
                {
                    grid.setDisabled(false);
                    //store.reload();
                }

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