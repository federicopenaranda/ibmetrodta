/*
 * Paso 14
 * 
 * Estado Actual:   'carga-formularios-adicionales-finalizada'
 * 
 * Acciones:
 * 
 *      1. 'termina-carga-archivos-plan-accion'
 *      2. 'aprueba-el-archivos-plan-accion'
 *      3. 'carga-evidencias-plan-accion'
 *      4. 'carga-formulario-108'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso14', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'carga-formularios-adicionales-finalizada',
    accionTerminada1: 0,
    accionTerminada2: 0,
    accionTerminada3: 0,
    stores: [
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso14'
    ],
    refs: [
        {
            ref: 'Paso14Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14]'
        },
        
        // Botones
        {
            ref: 'Paso14BotonCargaPlanAccion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnCargaPlanAccion'
        },
        {
            ref: 'Paso14BotonFinalizaCargaPlanAccion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnFinalizaCargaPlanAccion'
        },
        {
            ref: 'Paso14BotonApruebaArchivosPlanAccion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnApruebaArchivosPlanAccion'
        },
        {
            ref: 'Paso14BotonObservarArchivosPlanAccion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnObservarArchivosPlanAccion'
        },
        {
            ref: 'Paso14BotonCargaEvidenciasPlanAccion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnCargaEvidenciasPlanAccion'
        }/*,
        {
            ref: 'Paso14BotonFinalizaCargaEvidenciasPlanAccion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnFinalizaCargaEvidenciasPlanAccion'
        }*/,
        {
            ref: 'Paso14BotonCargaFormulario108',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnCargaFormulario108'
        },
        {
            ref: 'Paso14BotonObservarFormulario108',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnObservarFormulario108'
        },
        {
            ref: 'Paso14BotonApruebaFormulario108',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnApruebaFormulario108'
        },
        {
            ref: 'Paso14BotonHabilitaAnterior',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnHabilitarAnterior'
        },
        {
            ref: 'Paso14TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso14] #textEstado'
        },

        // Otros
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
            ref: 'PeticionArchivoPlanAccionWindow',
            selector: '[xtype=proceso.peticionarchivoplanaccion.edit.window]'
        },
        {
            ref: 'WindowObservacion',
            selector: '[xtype=tramite.tramite.edit.windowobservacion]'
        },
        {
            ref: 'PeticionArchivoWindow',
            selector: '[xtype=proceso.peticionarchivo.edit.window]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso14]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnCargaPlanAccion': {
                    click: this.cargaArchivoPlanAccion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnFinalizaCargaPlanAccion': {
                    click: this.terminaCargaArchivosPlanAccion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnApruebaArchivosPlanAccion': {
                    click: this.apruebaArchivosPlanAccion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnObservarArchivosPlanAccion': {
                    click: this.observarArchivosPlanAccion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnCargaEvidenciasPlanAccion': {
                    click: this.CargaEvidenciasPlanAccion
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnHabilitarAnterior': {
                    click: this.habilitaAnterior
                },
                /*'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnFinalizaCargaEvidenciasPlanAccion': {
                    click: this.FinalizaCargaEvidenciasPlanAccion
                },*/
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnCargaFormulario108': {
                    click: this.CargaFormulario108
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnObservarFormulario108': {
                    click: this.ObservarFormulario108
                },
                'panel[xtype=tramite.tramite.edit.tab.paso14] button#btnApruebaFormulario108': {
                    click: this.ApruebaFormulario108
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
               accion: 'termina-carga-archivos-plan-accion'
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
    
    
    CargaEvidenciasPlanAccion: function () {
        var me = this,
                win = me.getPeticionArchivoWindow(),
                filtro = '';
        
        var cont1 = me.getController('proceso.PeticionArchivo');
        
        cont1.nombreAccion = 'carga-evidencias-plan-accion';
        cont1.nombreEstado = me.estadoActual;
        cont1.filtro = filtro;
        cont1.codigoTipoArchivo = 'evidencias-plan-de-accion';
        cont1.tipoAdicional = 0;
        cont1.accionTerminada = me.accionTerminada2;
        cont1.tbPeticionArchivo = 1;
        
        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Administración de Archivos: Evidencias de Plan de Acción'
            });
        }

        win.show();
    },
    
    
    /*FinalizaCargaEvidenciasPlanAccion: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        Ext.Msg.confirm({
            title: 'Confirmar la Finalización de Carga para Archivos de Evidencia del Plan de Acción',
            msg: '¿Terminó de cargar los archivos de Evidencia del Plan de Acción ?. No podrá cargar más posteriormente.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'carga-evidencias-plan-accion');
                }
            }
        });
    },*/
    
    
    CargaFormulario108: function () {
        var me = this,
                win = me.getPeticionArchivoWindow(),
                filtro = '';
        
        var cont1 = me.getController('proceso.PeticionArchivo');
        
        cont1.nombreAccion = 'carga-formulario-108';
        cont1.nombreEstado = me.estadoActual;
        cont1.filtro = filtro;
        cont1.codigoTipoArchivo = 'carga-formulario-108';
        cont1.tipoAdicional = 0;
        cont1.accionTerminada = me.accionTerminada3;
        cont1.tbPeticionArchivo = 1;
        
        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Administración de Archivos: Formulario 108'
            });
        }

        win.show();
    },
    
    
    ObservarFormulario108: function () {
       var me = this,
                win = me.getWindowObservacion(),
                cont1 = me.getController('proceso.ObsPeticionAccion');

        cont1.accion = 'carga-formulario-108';
        cont1.estado = me.estadoActual;
        
         if (!win)
        {
            win = Ext.widget('proceso.obspeticionaccion.edit.window', {
                title: 'Observación de Formulario 108'
            });
        }
        
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    ApruebaFormulario108: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        Ext.Msg.confirm({
            title: 'Confirmar Aprobación',
            msg: '¿Se aprueban los archivos del Formulario 108 cargados?.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'carga-formulario-108');
                    me.terminaAccion(dataPeticion.id_peticion, 'carga-evidencias-plan-accion');
                }
            }
        });
    },
    
    
    observarArchivosPlanAccion: function () {
       var me = this,
                win = me.getWindowObservacion(),
                cont1 = me.getController('proceso.ObsPeticionAccion');

        cont1.accion = 'aprueba-el-archivos-plan-accion';
        cont1.estado = me.estadoActual;
        
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
    
    
    apruebaArchivosPlanAccion: function (button, e, eOpts) {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        Ext.Msg.confirm({
            title: 'Confirmar Aprobación',
            msg: '¿Se aprueban los archivos del Plan de Acción cargados?.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'aprueba-el-archivos-plan-accion');
                }
            }
        });
    },
    
    
    cargaArchivoPlanAccion: function ( button, e, eOpts ) {
        var me = this,
                win = me.getPeticionArchivoWindow(),
                filtro = 'plan-de-accion';
        
        var cont1 = me.getController('proceso.PeticionArchivo');
        
        cont1.nombreAccion = 'termina-carga-archivos-plan-accion';
        cont1.nombreEstado = me.estadoActual;
        cont1.filtro = filtro;
        cont1.codigoTipoArchivo = 'plan-de-accion';
        cont1.tipoAdicional = 0;
        cont1.accionTerminada = me.accionTerminada1;
        cont1.tbPeticionArchivo = 1;
        
        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Administración de Archivos'
            });
        }

        win.show();
    },
    
    
    terminaCargaArchivosPlanAccion: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        Ext.Msg.confirm({
            title: 'Confirmar la Finalización de Carga de Archivos para el Plan de Acción',
            msg: '¿Terminó de cargar los archivos para el Plan de Acción ?. No podrá cargar más posteriormente.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-archivos-plan-accion');
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
                Paso14BotonCargaPlanAccion = me.getPaso14BotonCargaPlanAccion(),
                Paso14BotonFinalizaCargaPlanAccion = me.getPaso14BotonFinalizaCargaPlanAccion(),
                Paso14BotonApruebaArchivosPlanAccion = me.getPaso14BotonApruebaArchivosPlanAccion(),
                Paso14BotonObservarArchivosPlanAccion = me.getPaso14BotonObservarArchivosPlanAccion(),

                Paso14BotonCargaEvidenciasPlanAccion = me.getPaso14BotonCargaEvidenciasPlanAccion(),
                //Paso14BotonFinalizaCargaEvidenciasPlanAccion = me.getPaso14BotonFinalizaCargaEvidenciasPlanAccion(),
                Paso14BotonCargaFormulario108 = me.getPaso14BotonCargaFormulario108(),
                Paso14BotonObservarFormulario108 = me.getPaso14BotonObservarFormulario108(),
                Paso14BotonApruebaFormulario108 = me.getPaso14BotonApruebaFormulario108(),

                // Texto
                txtEstado = me.getPaso14TextEstado(),
                
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
            success: function (response, options) 
            {

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
                var ext = ( typeof(tipoUsuarioArray['ext']) === 'undefined' ) ? -1 : 1;
                var ra = ( typeof(tipoUsuarioArray['ra']) === 'undefined' ) ? -1 : 1;


                if ( acciones.length === 0 )   // TODO: habiltiar según el privilegio por tipo de usuario
                {
                    Ext.getBody().unmask();
                    console.log('Paso 14: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(12);*/
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


 
                    
 



                    if ( accionesArray['termina-carga-archivos-plan-accion'] == '0' )
                    {
                        Paso14BotonApruebaArchivosPlanAccion.setDisabled(true);
                        Paso14BotonObservarArchivosPlanAccion.setDisabled(true);
                        Paso14BotonCargaEvidenciasPlanAccion.setDisabled(true);
                        //Paso14BotonFinalizaCargaEvidenciasPlanAccion.setDisabled(true);
                        Paso14BotonCargaFormulario108.setDisabled(true);
                        Paso14BotonObservarFormulario108.setDisabled(true);
                        Paso14BotonApruebaFormulario108.setDisabled(true);
                        
                        me.accionTerminada1 = 0;

                        if ( oec == 1 || admin == 1 )
                        {
                            Paso14BotonCargaPlanAccion.setDisabled(false);
                            Paso14BotonFinalizaCargaPlanAccion.setDisabled(false);
                        }
                        else
                        {
                            Paso14BotonCargaPlanAccion.setDisabled(true);
                            Paso14BotonFinalizaCargaPlanAccion.setDisabled(true);
                        }
                    }
                    else
                    {
                        Paso14BotonFinalizaCargaPlanAccion.setDisabled(true);
                        me.accionTerminada1 = 1;

                        if ( admin == 1 || el == 1 || dta == 1 || oec == 1 || et == 1 || da == 1 )
                        {
                            Paso14BotonCargaPlanAccion.setDisabled(false);
                        }
                        else
                        {
                            Paso14BotonCargaPlanAccion.setDisabled(true);
                        }
                        
                        
                        if ( accionesArray['aprueba-el-archivos-plan-accion'] == '0' )
                        {
                            Paso14BotonCargaEvidenciasPlanAccion.setDisabled(true);
                            //Paso14BotonFinalizaCargaEvidenciasPlanAccion.setDisabled(true);
                            Paso14BotonCargaFormulario108.setDisabled(true);
                            Paso14BotonObservarFormulario108.setDisabled(true);
                            Paso14BotonApruebaFormulario108.setDisabled(true);

                            if ( admin == 1 || el == 1 )
                            {
                                Paso14BotonApruebaArchivosPlanAccion.setDisabled(false);
                                Paso14BotonObservarArchivosPlanAccion.setDisabled(false);
                            }
                            else
                            {
                                Paso14BotonApruebaArchivosPlanAccion.setDisabled(true);
                                Paso14BotonObservarArchivosPlanAccion.setDisabled(true);
                            }
                        }
                        else
                        {
                            Paso14BotonApruebaArchivosPlanAccion.setDisabled(true);
                            Paso14BotonObservarArchivosPlanAccion.setDisabled(true);
                            
                            /*if ( accionesArray['carga-evidencias-plan-accion'] == '0' )
                            {
                                Paso14BotonCargaFormulario108.setDisabled(true);
                                Paso14BotonObservarFormulario108.setDisabled(true);
                                Paso14BotonApruebaFormulario108.setDisabled(true);
                                me.accionTerminada2 = 0;
                                
                                if ( admin == 1 || oec == 1 )
                                {
                                    Paso14BotonCargaEvidenciasPlanAccion.setDisabled(false);
                                    //Paso14BotonFinalizaCargaEvidenciasPlanAccion.setDisabled(false);
                                }
                                else
                                {
                                    Paso14BotonCargaEvidenciasPlanAccion.setDisabled(true);
                                    //Paso14BotonFinalizaCargaEvidenciasPlanAccion.setDisabled(true);
                                }
                            }*/
                            //else
                            //{
                             /*   Paso14BotonFinalizaCargaEvidenciasPlanAccion.setDisabled(true);
                                me.accionTerminada2 = 1;

                                if ( admin == 1 || el == 1 || dta == 1 )
                                {
                                    Paso14BotonCargaEvidenciasPlanAccion.setDisabled(false);
                                }
                                else
                                {
                                    Paso14BotonCargaEvidenciasPlanAccion.setDisabled(true);
                                }*/
                                
                                
                                if ( accionesArray['carga-formulario-108'] == '0' )
                                {
                                    Paso14BotonCargaEvidenciasPlanAccion.setDisabled(false);
                                    me.accionTerminada3 = 0;
                                    
                                    if ( admin == 1 || el == 1 )
                                    {
                                        Paso14BotonCargaFormulario108.setDisabled(false);
                                    }
                                    else
                                    {
                                        Paso14BotonCargaFormulario108.setDisabled(true);
                                    }

                                    if ( admin == 1 || ra == 1 )
                                    {
                                        Paso14BotonObservarFormulario108.setDisabled(false);
                                        Paso14BotonApruebaFormulario108.setDisabled(false);
                                    }
                                    else
                                    {
                                        Paso14BotonObservarFormulario108.setDisabled(true);
                                        Paso14BotonApruebaFormulario108.setDisabled(true);
                                    }

                                }
                                else
                                {
                                    Paso14BotonCargaEvidenciasPlanAccion.setDisabled(true);
                                    Paso14BotonObservarFormulario108.setDisabled(true);
                                    Paso14BotonApruebaFormulario108.setDisabled(true);
                                    me.accionTerminada3 = 1;

                                    if ( admin == 1 || el == 1 || dta == 1 )
                                    {
                                        Paso14BotonCargaFormulario108.setDisabled(false);
                                    }
                                    else
                                    {
                                        Paso14BotonCargaFormulario108.setDisabled(true);
                                    }
                                    
                                    sigPasoBtn.setDisabled(false);
                                    txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                                }
                            //}
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