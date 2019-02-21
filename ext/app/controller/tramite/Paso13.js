/*
 * Paso 13
 * 
 * Estado Actual:   'formulario-024-llenado'
 * 
 * Acciones:
 * 
 *      1. 'termina-carga-formulario-031-034'
 *      2. 'termina-carga-formulario-011-038-046'
 *      3. 'termina-carga-formulario-033-106'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso13', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'formulario-024-llenado',
    accionTerminada1: 0,
    accionTerminada2: 0,
    accionTerminada3: 0,    
    stores: [
        'formularios.InformeEvaluacion',
        'formularios.NoConformidad',
        'formularios.EvalTecnica',
        'formularios.PruebaParticipacion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso13'
    ],
    refs: [
        {
            ref: 'Paso13Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13]'
        },
        
        // formulario 011 (Infome de Evaluación)
        {
            ref: 'InformeEvaluacionWindow2',
            selector: '[xtype=formularios.informeevaluacion.edit.informeevaluacionwindow]'
        },
        {
            ref: 'InformeEvaluacionWindow',
            selector: '[xtype=formularios.informeevaluacion.edit.window]'
        },
        
        
        // formulario 012 (No Conformidad)
        {
            ref: 'NoConformidadWindow2',
            selector: '[xtype=formularios.noconformidad.edit.noconformidadwindow]'
        },
        {
            ref: 'NoConformidadWindow',
            selector: '[xtype=formularios.noconformidad.edit.window]'
        },
        
        
        // formulario 038 (EvalTecnica)
        {
            ref: 'EvalTecnicaWindow2',
            selector: '[xtype=formularios.evaltecnica.edit.evaltecnicawindow]'
        },
        {
            ref: 'EvalTecnicaWindow',
            selector: '[xtype=formularios.evaltecnica.edit.window]'
        },
        
        
        // formulario 034 (PruebaParticipacion)
        {
            ref: 'PruebaParticipacionWindow2',
            selector: '[xtype=formularios.pruebaparticipacion.edit.pruebaparticipacionwindow]'
        },
        {
            ref: 'PruebaParticipacionWindow',
            selector: '[xtype=formularios.pruebaparticipacion.edit.window]'
        },
        
        
        // formulario 031 (DesignacionEvaluador)
        {
            ref: 'DesignacionEvaluadorWindow2',
            selector: '[xtype=formularios.designacionevaluador.edit.designacionevaluadorwindow]'
        },
        {
            ref: 'DesignacionEvaluadorWindow',
            selector: '[xtype=formularios.designacionevaluador.edit.window]'
        },
        
        
        // formulario 033 (Supervisión Evaluador)
        {
            ref: 'SupervisionEvaluadorWindow2',
            selector: '[xtype=formularios.supervisionevaluador.edit.supervisionevaluadorwindow]'
        },
        {
            ref: 'SupervisionEvaluadorWindow',
            selector: '[xtype=formularios.supervisionevaluador.edit.window]'
        },
        
        
        // Botones
        {
            ref: 'Paso13BotonForm011',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm011'
        },
        {
            ref: 'Paso13BotonFinalizaCargaFormulariosEL',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnFinalizaCargaFormulariosEL'
        },
        {
            ref: 'Paso13BotonForm038',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm038'
        },
        {
            ref: 'Paso13BotonForm034',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm034'
        },
        {
            ref: 'Paso13BotonForm031',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm031'
        },
        {
            ref: 'Paso13BotonFinalizaCargaFormulariosET',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnFinalizaCargaFormulariosET'
        },
        {
            ref: 'Paso13BotonForm046',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm046'
        },
        {
            ref: 'Paso13BotonFinalizaCargaFormulariosEE',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnFinalizaCargaFormulariosEE'
        },
        {
            ref: 'Paso13BotonForm033',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm033'
        },
        {
            ref: 'Paso13BotonForm106',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm106'
        },
        
        
        
        {
            ref: 'Paso13Adicional1',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaArchivo13Adicional1'
        },
        {
            ref: 'Paso13Adicional2',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaArchivo13Adicional2'
        },
        {
            ref: 'Paso13Adicional3',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaArchivo13Adicional3'
        },
        {
            ref: 'WindowArchivos',
            selector: 'window[xtype=proceso.peticionarchivo.edit.window]'
        },





        // Otros
        {
            ref: 'Paso13TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso13] label#textEstado'
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
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso13]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm011': {
                    click: this.listaForm011
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm038': {
                    click: this.listaForm038
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm034': {
                    click: this.listaForm034
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm031': {
                    click: this.listaForm031
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm046': {
                    click: this.listaForm046
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaForm033': {
                    click: this.listaForm033
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnFinalizaCargaFormulariosEL': {
                    click: this.terminaLlenadoFormulariosEL
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnFinalizaCargaFormulariosET': {
                    click: this.terminaLlenadoFormulariosET
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnFinalizaCargaFormulariosEE': {
                    click: this.terminaLlenadoFormulariosEE
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaArchivo13Adicional1': {
                    click: this.cargaArchivosAdicionales1
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaArchivo13Adicional2': {
                    click: this.cargaArchivosAdicionales2
                },
                'panel[xtype=tramite.tramite.edit.tab.paso13] button#btnCargaArchivo13Adicional3': {
                    click: this.cargaArchivosAdicionales3
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    cargaArchivosAdicionales1: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Archivos Adicionales'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'termina-carga-formulario-031-034';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        contPeticionArchivo.tbPeticionArchivo = !me.accionTerminada1;
        //contPeticionArchivo.accionTeminada = me.accionTerminada1;
        contPeticionArchivo.accionTeminada = 1;
        console.log("me.accionTerminada1");
        console.log(me.accionTerminada1);

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    cargaArchivosAdicionales2: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Archivos Adicionales'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'termina-carga-formulario-011-038-046';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        contPeticionArchivo.tbPeticionArchivo = !me.accionTerminada2;
        contPeticionArchivo.accionTeminada = me.accionTerminada2;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    cargaArchivosAdicionales3: function () {
        var me = this,
                win = me.getWindowArchivos();

        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Archivos Adicionales'
            });
        }

        var contPeticionArchivo = me.getController('proceso.PeticionArchivo');
        contPeticionArchivo.nombreAccion = 'termina-carga-formulario-033-106';
        contPeticionArchivo.nombreEstado = me.estadoActual;
        contPeticionArchivo.tbPeticionArchivo = !me.accionTerminada3;
        contPeticionArchivo.accionTeminada = me.accionTerminada3;

        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    terminaLlenadoFormulariosEL: function () {
        var me = this,

                // Stores
                form031 = me.getStore('formularios.DesignacionEvaluador'),
                form034 = me.getStore('formularios.PruebaParticipacion'),


                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                boton31 = me.getPaso13BotonForm031(),
                boton34 = me.getPaso13BotonForm034(),

                recs031,
                recs034;
        
        form031.clearFilter(true);
        form031.filter('fk_id_peticion', dataPeticion.id_peticion);
        
        form034.clearFilter(true);
        form034.filter('fk_id_peticion', dataPeticion.id_peticion);
        
        form031.reload({
            callback: function () {
                //recs031 = form031.getRange();

                /*if ( recs031.length != 1 )
                {
                    Ext.Msg.alert('Error en Formulario 031', 'Solo debe existir un formulario 031.');
                    return;
                }
                else
                {*/
                    form034.reload({
                        callback: function () {
                            recs034 = form034.getRange();

                            if ( recs034.length == 0 )
                            {
                                Ext.Msg.alert('Error en Formulario 034', 'Debe existir al menos un formulario 034.');
                                return;
                            }
                            else
                            {
                                Ext.Msg.confirm({
                                    title: 'Confirmar Finalización de Llenado',
                                    msg: '¿Terminó de llenar los formularios 031 y 034 ?. No podrá llenarlos posteriormente.',
                                    buttons: Ext.Msg.YESNO,
                                    icon: Ext.Msg.QUESTION,
                                    fn: function (buttonId, text, opt)
                                    {
                                        if ( buttonId === 'yes' )
                                        {
                                            boton31.setDisabled(true);
                                            boton34.setDisabled(true);
                                            me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formulario-031-034');
                                        }
                                    }
                                });
                            }
                        }
                    });
                //}
            }
        });
    },
    
    
    terminaLlenadoFormulariosET: function () {
        var me = this,
                                
                // Stores
                form011 = me.getStore('formularios.InformeEvaluacion'),
                form038 = me.getStore('formularios.EvalTecnica'),
                
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                boton11 = me.getPaso13BotonForm011(),
                boton38 = me.getPaso13BotonForm038(),
                
                recs038,
                recs011;


        form011.clearFilter(true);
        form011.filter('fk_id_peticion', dataPeticion.id_peticion);
        
        form038.clearFilter(true);
        form038.filter('fk_id_peticion', dataPeticion.id_peticion);
        
        form011.reload({
            callback: function () {
                recs011 = form011.getRange();
                
                if ( recs011.length == 0 )
                {
                    Ext.Msg.alert('Error en Formulario 011', 'Debe existir al menos un formulario 011.');
                    return;
                }
                else
                {
                    form038.reload({
                        callback: function () {
                            recs038 = form038.getRange();

                            if ( recs038.length == 0 )
                            {
                                Ext.Msg.alert('Error en Formulario 038', 'Debe existir al menos un formulario 038.');
                                return;
                            }
                            else
                            {
                                Ext.Msg.confirm({
                                    title: 'Confirmar Finalización de Llenado',
                                    msg: '¿Terminó de llenar los formularios 011 y 038 ?. No podrá llenarlos posteriormente.',
                                    buttons: Ext.Msg.YESNO,
                                    icon: Ext.Msg.QUESTION,
                                    fn: function (buttonId, text, opt)
                                    {
                                        if ( buttonId === 'yes' )
                                        {
                                            boton11.setDisabled(true);
                                            boton38.setDisabled(true);
                                            me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formulario-011-038-046');
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });

    },
    
    
    terminaLlenadoFormulariosEE: function () {
        var me = this,
                                
                // Stores
                form033 = me.getStore('formularios.SupervisionEvaluador'),
                //form106 = me.getStore('formularios.'),
                
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                boton33 = me.getPaso13BotonForm033(),
                //boton106 = me.getPaso13BotonForm106(),
                
                recs033;
                //recs106;
        
        form033.clearFilter(true);
        form033.filter('fk_id_peticion', dataPeticion.id_peticion);
        
        //form106.clearFilter(true);
        //form106.filter('fk_id_peticion', dataPeticion.id_peticion);
                
        form033.reload({
            callback: function () {
                recs033 = form033.getRange();
                
                if ( recs033.length == 0 )
                {
                    Ext.Msg.alert('Error en Formulario 033', 'Debe existir al menos un formulario 033.');
                    return;
                }
                else
                {
                    Ext.Msg.confirm({
                        title: 'Confirmar Finalización de Llenado',
                        msg: '¿Terminó de llenar el formulario 033?. No podrá llenarlo posteriormente.',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.Msg.QUESTION,
                        fn: function (buttonId, text, opt)
                        {
                            if ( buttonId === 'yes' )
                            {
                                boton33.setDisabled(true);
                                me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formulario-033-106');
                            }
                        }
                    });
                    
                    /*form106.reload({
                        callback: function () {
                            recs106 = form106.getRange();

                            if ( recs106.length == 0 )
                            {
                                Ext.Msg.alert('Error en Formulario 106', 'Debe existir al menos un formulario 106.');
                                return;
                            }
                            else
                            {
                                Ext.Msg.confirm({
                                    title: 'Confirmar Finalización de Llenado',
                                    msg: '¿Terminó de llenar los formularios 033 y 106 ?. No podrá llenarlos posteriormente.',
                                    buttons: Ext.Msg.YESNO,
                                    icon: Ext.Msg.QUESTION,
                                    fn: function (buttonId, text, opt)
                                    {
                                        if ( buttonId === 'yes' )
                                        {
                                            boton33.setDisabled(true);
                                            boton106.setDisabled(true);
                                            me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formulario-033-106');
                                        }
                                    }
                                });
                            }
                        }
                    });*/
                }
            }
        });
    },
    
    
    listaForm011: function ( button, e, eOpts ) {
        var me = this,
                win = me.getInformeEvaluacionWindow(),
                cont;
        
        if (!win)
        {
            win = Ext.widget('formularios.informeevaluacion.edit.window', {
                title: 'Administrar Formularios FORM-011'
            });
        }
        
        cont = me.getController('formularios.InformeEvaluacion');
        cont.accionTerminada = me.accionTerminada2;
        
        win.show();
    },

    
    listaForm038: function ( button, e, eOpts ) {
        var me = this,
                win = me.getEvalTecnicaWindow(),
                cont;
        
        if (!win)
        {
            win = Ext.widget('formularios.evaltecnica.edit.window', {
                title: 'Administrar Formularios FORM-038'
            });
        }
        
        cont = me.getController('formularios.EvalTecnica');
        cont.accionTerminada = me.accionTerminada2;
        
        win.show();
    },

    
    listaForm034: function ( button, e, eOpts ) {
        var me = this,
                win = me.getPruebaParticipacionWindow(),
                cont;
        
        if (!win)
        {
            win = Ext.widget('formularios.pruebaparticipacion.edit.window', {
                title: 'Administrar Formularios FORM-034'
            });
        }
        
        cont = me.getController('formularios.PruebaParticipacion');
        cont.accionTerminada = me.accionTerminada1;
        
        win.show();
    },

    
    listaForm031: function ( button, e, eOpts ) {
        var me = this,
                win = me.getDesignacionEvaluadorWindow(),
                cont;
        
        if (!win)
        {
            win = Ext.widget('formularios.designacionevaluador.edit.window', {
                title: 'Administrar Formularios FORM-031'
            });
        }
        
        cont = me.getController('formularios.DesignacionEvaluador');
        cont.accionTerminada = me.accionTerminada1;
        
        win.show();
    },

    
    listaForm046: function ( button, e, eOpts ) {
           
            Ext.core.DomHelper.append(document.body, {
                tag : 'iframe',
                id : 'downloadIframe',
                frameBorder : 0,
                width : 0,
                height : 0,
                css : 'display:none;visibility:hidden;height:0px;',
                src : ibmetrodta.app.globals.globalServerPath + 'reporte/pdfForm046'
            });

    },

    
    listaForm033: function ( button, e, eOpts ) {
        var me = this,
                win = me.getSupervisionEvaluadorWindow(),
                cont;
        
        if (!win)
        {
            win = Ext.widget('formularios.supervisionevaluador.edit.window', {
                title: 'Administrar Formularios FORM-033'
            });
        }
        
        cont = me.getController('formularios.SupervisionEvaluador');
        cont.accionTerminada = me.accionTerminada3;
        
        win.show();
    },

    
    // Reconfigura el panel de acuerdo a las acciones ya realizadas o faltantes
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso13BotonForm031 = me.getPaso13BotonForm031(),
                Paso13BotonForm034 = me.getPaso13BotonForm034(),
                Paso13BotonFinalizaCargaFormulariosEL = me.getPaso13BotonFinalizaCargaFormulariosEL(),

                Paso13BotonForm011 = me.getPaso13BotonForm011(),
                Paso13BotonForm038 = me.getPaso13BotonForm038(),
                Paso13BotonForm046 = me.getPaso13BotonForm046(),
                Paso13BotonFinalizaCargaFormulariosET = me.getPaso13BotonFinalizaCargaFormulariosET(),
                
                Paso13Adicional1 = me.getPaso13Adicional1(), 
                Paso13Adicional2 = me.getPaso13Adicional2(), 
                Paso13Adicional3 = me.getPaso13Adicional3(),

                Paso13BotonForm033 = me.getPaso13BotonForm033(),
                //Paso13BotonForm106 = me.getPaso13BotonForm106(),
                Paso13BotonFinalizaCargaFormulariosEE = me.getPaso13BotonFinalizaCargaFormulariosEE(),
               
                // Textos
                Paso13TextEstado = me.getPaso13TextEstado(),

                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel = me.getPaso13Panel(),

                // Otras
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
                var et = ( typeof(tipoUsuarioArray['et']) === 'undefined' ) ? -1 : 1;
                var ext = ( typeof(tipoUsuarioArray['ext']) === 'undefined' ) ? -1 : 1;
                var eent = ( typeof(tipoUsuarioArray['eent']) === 'undefined' ) ? -1 : 1;
                var consejo = ( typeof(tipoUsuarioArray['consejo']) === 'undefined' ) ? -1 : 1;
                var ra = ( typeof(tipoUsuarioArray['ra']) === 'undefined' ) ? -1 : 1;

                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 13: Sin Acciones');
                    
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


                    /// Accion termina-carga-formulario-031-034
                    if ( accionesArray['termina-carga-formulario-031-034'] == '0' )
                    {
                        me.accionTerminada1 = 0;
                        
                        if ( ra == 1 || admin ==1 )
                        {
                            Paso13BotonForm031.setDisabled(false);
                            Paso13BotonForm034.setDisabled(false);
                            Paso13Adicional1.setDisabled(false);
                            Paso13BotonFinalizaCargaFormulariosEL.setDisabled(false);
                        }
                        else
                        {
                            Paso13BotonForm031.setDisabled(true);
                            Paso13BotonForm034.setDisabled(true);
                            Paso13Adicional1.setDisabled(true);
                            Paso13BotonFinalizaCargaFormulariosEL.setDisabled(true);
                        }
                    }
                    else
                    {
                        Paso13BotonFinalizaCargaFormulariosEL.setDisabled(true);
                        me.accionTerminada1 = 1;

                        Paso13BotonForm031.setDisabled(false);
                        Paso13BotonForm034.setDisabled(false);
                    }




                    if ( accionesArray['termina-carga-formulario-011-038-046'] == '0' )
                    {
                        me.accionTerminada2 = 0;
                        
                        // Form 11
                        if ( et == 1 || el == 1 || admin == 1 )
                        {
                            Paso13BotonForm011.setDisabled(false);
                            Paso13Adicional2.setDisabled(false);
                            Paso13BotonFinalizaCargaFormulariosET.setDisabled(false);
                        }
                        else
                        {
                            Paso13BotonForm011.setDisabled(true);
                            Paso13Adicional2.setDisabled(true);
                            Paso13BotonFinalizaCargaFormulariosET.setDisabled(true);
                        }

                        // Form 38
                        if ( et == 1 || admin == 1 || ext == 1 )
                        {
                            Paso13BotonForm038.setDisabled(false);
                        }
                        else
                        {
                            Paso13BotonForm038.setDisabled(true);
                        }

                        // Form 46
                        if ( el == 1 || admin == 1 )
                        {
                            Paso13BotonForm046.setDisabled(false);
                        }
                        else
                        {
                            Paso13BotonForm046.setDisabled(true);
                        }
                    
                    }
                    else
                    {
                        Paso13BotonFinalizaCargaFormulariosET.setDisabled(true);
                        me.accionTerminada2 = 1;

                        Paso13BotonForm011.setDisabled(false);
                        Paso13BotonForm038.setDisabled(false);
                        Paso13BotonForm046.setDisabled(false);
                        Paso13Adicional2.setDisabled(false);
                    }
                    
                    
                    

                    if ( accionesArray['termina-carga-formulario-033-106'] == '0' )
                    {
                        me.accionTerminada3 = 0;

                        if ( oec == 1 || admin == 1 )
                        {
                            Paso13BotonForm033.setDisabled(false);
                            //Paso13BotonForm106.setDisabled(false);
                            Paso13Adicional3.setDisabled(false);
                            Paso13BotonFinalizaCargaFormulariosEE.setDisabled(false);
                        }
                        else
                        {
                            Paso13BotonForm033.setDisabled(true);
                            //Paso13BotonForm106.setDisabled(true);
                            Paso13Adicional3.setDisabled(true);
                            Paso13BotonFinalizaCargaFormulariosEE.setDisabled(true);
                        }
                    }
                    else
                    {
                        Paso13BotonFinalizaCargaFormulariosEE.setDisabled(true);
                        me.accionTerminada3 = 1;

                        if ( oec == 1 || admin == 1 || consejo == 1 || da == 1 || dta == 1 || ra == 1 )
                        {
                            Paso13BotonForm033.setDisabled(false);
                            Paso13Adicional3.setDisabled(false);
                            //Paso13BotonForm106.setDisabled(false);
                        }
                        else
                        {
                            Paso13BotonForm033.setDisabled(true);
                            Paso13Adicional3.setDisabled(true);
                            //Paso13BotonForm106.setDisabled(true);
                        }
                    }

                    
                    
                    
                    if ( accionesArray['termina-carga-formulario-031-034'] == '1' && 
                            accionesArray['termina-carga-formulario-011-038-046'] == '1' && 
                            accionesArray['termina-carga-formulario-033-106'] == '1' )
                    {
                        sigPasoBtn.setDisabled(false);
                        Paso13TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                    }
                    else
                    {
                        Paso13TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
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