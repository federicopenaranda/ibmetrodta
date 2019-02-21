/*
 * Paso 11
 * 
 * Estado Actual:   'cotizacion-evaluacion-aprobada'
 * 
 * Acciones:
 * 
 *      1. 'aprueba-ee-documentacion'
 *      2. 'finaliza-oec-carga-archivos-adicionales'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso11', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'cotizacion-evaluacion-aprobada',
    accionTerminada: 0,
    tbPeticionArchivo: 0,
    stores: [
        'tramite.ObsPeticionAccion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso11'
    ],
    refs: [
        {
            ref: 'Paso11Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso11]'
        },
        {
            ref: 'Paso11BotonCargaArchivosAdicionales',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso11] button#btnCargaArchivosAdicionales'
        }/*,
        {
            ref: 'Paso11BotonFinalizaCargaArchivosAdicionales',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso11] button#btnFinalizaCargaArchivosAdicionales'
        }*/,

        /// Grids
         {
            ref: 'Paso11GridEE',
            selector: '[xtype=tramite.tramite.listaequipoevaluadorpeticion]'
        },
        
        {
            ref: 'Paso11TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso11] label#textEstado'
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
            ref: 'WindowArchivos',
            selector: '[xtype=proceso.peticionarchivo.edit.window]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso11]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso11] #btnCargaArchivosAdicionales': {
                    click: this.cargaArchivosAdicionales
                },
                'grid[xtype=tramite.tramite.listaequipoevaluadorpeticion]': {
                    beforerender: this.loadRecords,
                    itemapruebabuttonclick11: this.apruebaPaso,
                    itemobservarbuttonclick11: this.observaPaso,
                    itemverbuttonclick11: this.verObservaciones
                },
                /*'panel[xtype=tramite.tramite.edit.tab.paso11] button#btnFinalizaCargaArchivosAdicionales': {
                    click: this.terminaCargaArchivosAdicionales
                },*/
                'panel[xtype=tramite.tramite.edit.tab.paso11] button#abrirPaso6': {
                    click: this.abrirPaso6
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    abrirPaso6: function () {
        var me = this,
                form = me.getTramiteForm().down(),
                layout = form.getLayout();
        
        layout.setActiveItem(5);
    },


    apruebaPaso: function (a,b,c) {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                record, callbacks, store,

        store = me.getStore('tramite.ObsPeticionAccion'),
        record = Ext.create('ibmetrodta.model.tramite.ObsPeticionAccion');

        record.set('nombre_accion', 'aprueba-ee-documentacion');
        record.set('obs_peticion_accion', 'Aprobación de Paso (Automático)');
        record.set('procede_obs_peticion_accion', 1);
        record.set('fk_id_peticion', dataPeticion.id_peticion);

        callbacks = {
            success: function (records, operation) {
                store.reload();
                me.configGridEquipoEvaluador();
            },
            failure: function (records, operation) {
                store.rejectChanges();
            }
        };

        Ext.getBody().mask('Guardando Aceptación ...');

        store.add(record);
        store.sync(callbacks);
    },
    

    observaPaso: function (a,b,c) {
       var me = this,
                win = me.getWindowObservacion(),
                cont1 = me.getController('proceso.ObsPeticionAccion');
        
        cont1.accion = 'aprueba-ee-documentacion';
        cont1.estado = me.estadoActual;
        cont1.soloLectura = 0;
        
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
    
    
    verObservaciones: function () {
       var me = this,
                win = me.getWindowObservacion(),
                cont1 = me.getController('proceso.ObsPeticionAccion');
        
        cont1.accion = 'aprueba-ee-documentacion';
        cont1.estado = me.estadoActual;
        cont1.soloLectura = 1;
        
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

    
    configGridEquipoEvaluador: function () {
        var me = this,
                grid = me.getPaso11GridEE(),
                store = grid.getStore(),
                records, todos = true, val,
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        store.reload(
            {
                callback: function () {
                    records = store.getRange();
                    
                    
                    Ext.Array.each ( records, function ( objeto, index, recs ) {
                        val = objeto.getData();

                        if ( val.procede_obs_peticion_accion == 0 )
                        {
                            console.log('val.procede_obs_peticion_accion === 0');
                            console.log(val.procede_obs_peticion_accion);

                            todos = false;
                        }
                        else
                        {
                            console.log('val.procede_obs_peticion_accion === 1');
                            console.log(val.procede_obs_peticion_accion);
                        }
                    });

                    if (todos)
                    {
                        store.reload();
                        //grid.setDisabled(true);
                        me.terminaAccion ( dataPeticion.id_peticion, 'aprueba-ee-documentacion' );
                        me.terminaAccion ( dataPeticion.id_peticion, 'finaliza-oec-carga-archivos-adicionales');
                    }
                    else
                    {
                        //grid.setDisabled(false);
                    }

                }
            }
        );
        
        
    },
    

    loadRecords: function (grid, eOpts) {
        var me = this, 
                store = grid.getStore(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        // fede
        store.load({
            params: {
                fk_id_peticion: dataPeticion.id_peticion,
                nombre_accion: 'finaliza-designacion-equipo-evaluador'
            }
        });
    },
    
    
    terminaCargaArchivosAdicionales: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        Ext.Msg.confirm({
            title: 'Confirmar la Finalización de Carga de Archivos Adicionales',
            msg: '¿Terminó de cargar los Archivos Adicionales ?. No podrá cargar más posteriormente.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'finaliza-oec-carga-archivos-adicionales');
                }
            }
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
        contPeticionArchivo.nombreAccion = 'finaliza-oec-carga-archivos-adicionales';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        contPeticionArchivo.tbPeticionArchivo = me.tbPeticionArchivo;
        contPeticionArchivo.tipoAdicional = 1;
        contPeticionArchivo.accionTerminada = me.accionTerminada;
        
        win.show();
        win.doComponentLayout();
    },
    
    
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso11BotonCargaArchivosAdicionales = me.getPaso11BotonCargaArchivosAdicionales(),
                //Paso11BotonFinalizaCargaArchivosAdicionales = me.getPaso11BotonFinalizaCargaArchivosAdicionales(),
                txtEstado = me.getPaso11TextEstado(),
                
                Paso11TextEstado = me.getPaso11TextEstado(),
                
                // Layout
                grid = me.getPaso11GridEE(),
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

                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 11: Sin Acciones');
                    
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
            
                    var store = grid.getStore();
                    store.load(
                            {
                                params: {
                                    'fk_id_peticion': peticion,
                                    'nombre_accion': 'aprueba-ee-documentacion'
                                },
                                callback: function () {
                                    //me.configGridConsejo();
                                }
                            }
                    );


                    /// Accion aprueba-ee-documentacion
                    /*if ( accionesArray['aprueba-ee-documentacion'] == '0' &&
                            oec === -1 )
                    {
                        grid.setDisabled(false);
                    }*/
                    
                    
                    
                    
                    
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    Paso11TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);                    
                    
                    if ( accionesArray['aprueba-ee-documentacion'] === '0' )
                    {
                        //grid.setDisabled(false);
                        if ( admin == 1 || dta == 1 || oec == 1 || el == 1 || ext == 1 || et == 1 || da == 1 )
                        {
                            Paso11BotonCargaArchivosAdicionales.setDisabled(false);

                            if (admin == 1 || oec == 1)
                                me.tbPeticionArchivo = 1;
                            else
                                me.tbPeticionArchivo = 0;
                        }
                        else
                        {
                            Paso11BotonCargaArchivosAdicionales.setDisabled(true);
                        }
                    }
                    else
                    {
                        //grid.setDisabled(true);
                        if ( accionesArray['finaliza-oec-carga-archivos-adicionales'] === '0' )
                        {
                            me.accionTerminada = 0;
                            
                            if ( admin == 1 || dta == 1 || oec == 1 || el == 1 || ext == 1 || et == 1 || da == 1 )
                            {
                                Paso11BotonCargaArchivosAdicionales.setDisabled(false);
                                
                                if (admin == 1 || oec == 1)
                                    me.tbPeticionArchivo = 1;
                                else
                                    me.tbPeticionArchivo = 0;
                            }
                            else
                            {
                                Paso11BotonCargaArchivosAdicionales.setDisabled(true);
                            }
                        }
                        else
                        {
                            Paso11TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                            me.accionTerminada = 1;
                            
                            sigPasoBtn.setDisabled(false);
                            
                            if ( admin == 1 || dta == 1 || oec == 1 || el == 1 || ext == 1 || et == 1 || da == 1 )
                            {
                                Paso11BotonCargaArchivosAdicionales.setDisabled(false);

                                if (admin == 1 || oec == 1)
                                    me.tbPeticionArchivo = 1;
                                else
                                    me.tbPeticionArchivo = 0;
                            }
                            else
                            {
                                Paso11BotonCargaArchivosAdicionales.setDisabled(true);
                            }
                        }

                    }
                    
                    Ext.getBody().unmask();
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
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