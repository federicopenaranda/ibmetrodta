/*
 * Paso 5
 * 
 * Estado Actual:   'cotizacion-apertura-expediente-aprobada'
 * 
 * Acciones:
 * 
 *      1. 'termina-carga-formularios-50s'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso5', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'cotizacion-apertura-expediente-aprobada',
    accionTerminada: 0,
    tiposUsuario: [],
    stores: [
        'formularios.DetalleCalibracion',
        'formularios.DetalleCertificacion',
        'formularios.DetalleEquipos',
        'formularios.DetalleInspeccion',
        'formularios.InfoEnsayo'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso5',
        'formularios.InfoEnsayo.Lista'
    ],
    refs: [
        {
            ref: 'Paso5Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5]'
        },
        
        // formulario 052
        {
            ref: 'InfoEnsayoWindow2',
            selector: '[xtype=formularios.infoensayo.edit.infoensayowindow]'
        },
        {
            ref: 'InfoEnsayoWindow',
            selector: '[xtype=formularios.infoensayo.edit.window]'
        },
        {
            ref: 'InfoEnsayoLista',
            selector: '[xtype=formularios.infoensayo.lista]'
        },
        
        
        // formulario 053
        {
            ref: 'DetalleEquiposWindow2',
            selector: '[xtype=formularios.detalleequipos.edit.detalleequiposwindow]'
        },
        {
            ref: 'DetalleEquiposWindow',
            selector: '[xtype=formularios.detalleequipos.edit.window]'
        },
        {
            ref: 'DetalleEquiposLista',
            selector: '[xtype=formularios.detalleequipos.lista]'
        },
        
        
        // formulario 054
        {
            ref: 'DetalleCalibracionWindow2',
            selector: '[xtype=formularios.detallecalibracion.edit.detallecalibracionwindow]'
        },
        {
            ref: 'DetalleCalibracionWindow',
            selector: '[xtype=formularios.detallecalibracion.edit.window]'
        },
        {
            ref: 'DetalleCalibracionLista',
            selector: '[xtype=formularios.detallecalibracion.lista]'
        },
        
        
        // formulario 056
        {
            ref: 'DetalleInspeccionWindow2',
            selector: '[xtype=formularios.detalleinspeccion.edit.detalleinspeccionwindow]'
        },
        {
            ref: 'DetalleInspeccionWindow',
            selector: '[xtype=formularios.detalleinspeccion.edit.window]'
        },
        {
            ref: 'DetalleInspeccionLista',
            selector: '[xtype=formularios.detalleinspeccion.lista]'
        },
        {
            ref: 'DetalleCertificacionLista',
            selector: '[xtype=formularios.detallecertificacion.lista]'
        },
        
        
        // formulario 057
        {
            ref: 'DetalleCertificacionWindow2',
            selector: '[xtype=formularios.detallecertificacion.edit.detallecertificacionwindow]'
        },
        {
            ref: 'DetalleCertificacionWindow',
            selector: '[xtype=formularios.detallecertificacion.edit.window]'
        },
        
        
        
        
        // Botones
        {
            ref: 'Paso5BotonForm052',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm052'
        },
        {
            ref: 'Paso5BotonForm053',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm053'
        },
        {
            ref: 'Paso5BotonForm054',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm054'
        },
        {
            ref: 'Paso5BotonForm056',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm056'
        },
        {
            ref: 'Paso5BotonForm057',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm057'
        },
        {
            ref: 'Paso5BotonFinalizaCargaFormularios',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnFinalizaCargaFormularios'
        },


        // Otros
        {
            ref: 'Paso5TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso5] label#textEstado'
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
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso5]': {
                    activate: this.configPanelPaso,
                    beforerender: this.configBotonesFormularios
                },
                'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm052': {
                    click: this.listaForm052
                },
                'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm053': {
                    click: this.listaForm053
                },
                'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm054': {
                    click: this.listaForm054
                },
                'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm056': {
                    click: this.listaForm056
                },
                'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnCargaForm057': {
                    click: this.listaForm057
                },
                'panel[xtype=tramite.tramite.edit.tab.paso5] button#btnFinalizaCargaFormularios': {
                    click: this.terminaLlenadoFormularios
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    configBotonesFormularios: function () {
        var me = this,
                boton052 = me.getPaso5BotonForm052(),
                boton053 = me.getPaso5BotonForm053(),
                boton054 = me.getPaso5BotonForm054(),
                boton056 = me.getPaso5BotonForm056(),
                boton057 = me.getPaso5BotonForm057(),
                
                grid = me.getTramiteListaOec(),
                selected = grid.getSelectionModel().getSelection()[0],
                record = selected.getData(),
                tipo = record.codigo_oec_tipo,

                // Stores
                store052 = me.getStore('formularios.InfoEnsayo'),
                store053 = me.getStore('formularios.DetalleEquipos'),
                store054 = me.getStore('formularios.DetalleCalibracion'),
                store056 = me.getStore('formularios.DetalleInspeccion'),
                store057 = me.getStore('formularios.DetalleCertificacion'),
                
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                filter = [];
        
        filter.push({
                    property: 'fk_id_peticion',
                    value: dataPeticion.id_peticion
                });
        
        /*store052.filter(filter);
        store053.filter(filter);
        store054.filter(filter);
        store056.filter(filter);
        store057.filter(filter);*/
        
        // Descomentar para producción
        switch (tipo)
        {
            case 'laboratorio-ensayo':
                boton052.show();
                boton053.show();
                boton054.hide();
                boton056.hide();
                boton057.hide();
                store052.filter(filter);
                store053.filter(filter);
                break;

            case 'laboratorio-calibracion':
                boton052.hide();
                boton053.show();
                boton054.show();
                boton056.hide();
                boton057.hide();
                store053.filter(filter);
                store054.filter(filter);
                break;
                
            case 'organismo-inspeccion':
                boton052.hide();
                boton053.show();
                boton054.hide();
                boton056.show();
                boton057.hide();
                store053.filter(filter);
                store056.filter(filter);
                break;
                
            case 'organismo-certificacion':
                boton052.hide();
                boton053.hide();
                boton054.hide();
                boton056.hide();
                boton057.show();
                store057.filter(filter);
                break;
        }
    },
    
    
    terminaLlenadoFormularios: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                gridOec = me.getTramiteListaOec(),
                recOec = gridOec.getSelectionModel().getSelection()[0],
                dataOec = recOec.getData();
        
        Ext.Msg.confirm({
            title: 'Confirmar Finalización de Llenado de Formularios',
            msg: '¿Terminó de editar los formularios ?. No podrá editarlos posteriormente.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'peticion010401/verifForm50',
                        params: {
                            fk_id_peticion: dataPeticion.id_peticion
                        },
                        success: function (response, options) {
                            var  recs052 = response.registros.form52,
                                    recs053 = response.registros.form53, 
                                    recs054 = response.registros.form54,
                                    recs056 = response.registros.form56,
                                    recs057 = response.registros.form57;
                           
                           var tipoOEC = dataOec.codigo_oec_tipo,
                                    txtMensaje = '';

                            if ( tipoOEC === 'laboratorio-ensayo' )
                            {
                                txtMensaje += ( recs052 === 0 ) ? 'Error: No existe ningún formulario FORM-052 activo' + '\n\r' : '';
                                txtMensaje += ( recs053 === 0 ) ? 'Error: No existe ningún formulario FORM-053 activo' + '\n\r' : '';
                            }

                            if ( tipoOEC === 'laboratorio-calibracion' )
                            {
                                txtMensaje += ( recs054 === 0 ) ? 'Error: No existe ningún formulario FORM-054 activo' + '\n\r' : '';
                                txtMensaje += ( recs053 === 0 ) ? 'Error: No existe ningún formulario FORM-053 activo' + '\n\r' : '';
                            }

                            if ( tipoOEC === 'organismo-inspeccion' )
                            {
                                txtMensaje += ( recs056 === 0 ) ? 'Error: No existe ningún formulario FORM-056 activo' + '\n\r' : '';
                                txtMensaje += ( recs053 === 0 ) ? 'Error: No existe ningún formulario FORM-053 activo' + '\n\r' : '';
                            }

                            if ( tipoOEC === 'organismo-certificacion' )
                            {
                                txtMensaje += ( recs057 === 0 ) ? 'Error: No existe ningún formulario FORM-057 activo' + '\n\r' : '';
                            }

                            if ( txtMensaje !== '' )
                            {
                                Ext.Msg.alert('Error de Validación', txtMensaje);
                                return;
                            }
                            else
                            {
                                me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formularios-50s');
                            }
                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Atención', 'Un error ocurrió durante su petición. Por favor intente nuevamente.');
                        }
                    });
                }
            }
        });
    },
    
    
    listaForm052: function ( button, e, eOpts ) {
        var me = this,
                win = me.getInfoEnsayoWindow();
        
        if (!win)
        {
            win = Ext.widget('formularios.infoensayo.edit.window', {
                title: 'Administrar Formularios FORM-052'
            });
        }
        
        var cont = me.getController('formularios.InfoEnsayo');
        cont.accionTerminada = me.accionTerminada;
        
        
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        var oec = ( typeof(me.tiposUsuario['oec']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1 || oec == 1)
        {
            cont.boolMuestraBotones = true;
        }
        else
        {
            cont.boolMuestraBotones = false;
        }
        
        
        win.show();
    },
    
    
    listaForm053: function ( button, e, eOpts ) {
        var me = this,
                win = me.getDetalleEquiposWindow();
        
        if (!win)
        {
            win = Ext.widget('formularios.detalleequipos.edit.window', {
                title: 'Administrar Formularios FORM-053'
            });
        }
        
        var cont = me.getController('formularios.DetalleEquipos');
        cont.accionTerminada = me.accionTerminada;
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        var oec = ( typeof(me.tiposUsuario['oec']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1 || oec == 1)
        {
            cont.boolMuestraBotones = true;
        }
        else
        {
            cont.boolMuestraBotones = false;
        }
        
        
        win.show();
    },
    
    
    listaForm054: function ( button, e, eOpts ) {
        var me = this,
                win = me.getDetalleCalibracionWindow();
        
        if (!win)
        {
            win = Ext.widget('formularios.detallecalibracion.edit.window', {
                title: 'Administrar Formularios FORM-054'
            });
        }
        
        var cont = me.getController('formularios.DetalleCalibracion');
        cont.accionTerminada = me.accionTerminada;
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        var oec = ( typeof(me.tiposUsuario['oec']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1 || oec == 1)
        {
            cont.boolMuestraBotones = true;
        }
        else
        {
            cont.boolMuestraBotones = false;
        }
        
        
        win.show();
    },
    
    
    listaForm056: function ( button, e, eOpts ) {
        var me = this,
                win = me.getDetalleInspeccionWindow();
        
        if (!win)
        {
            win = Ext.widget('formularios.detalleinspeccion.edit.window', {
                title: 'Administrar Formularios FORM-056'
            });
        }
        
        var cont = me.getController('formularios.DetalleInspeccion');
        cont.accionTerminada = me.accionTerminada;
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        var oec = ( typeof(me.tiposUsuario['oec']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1 || oec == 1)
        {
            cont.boolMuestraBotones = true;
        }
        else
        {
            cont.boolMuestraBotones = false;
        }
        
        
        win.show();
    },
    
    
    listaForm057: function ( button, e, eOpts ) {
        var me = this,
                win = me.getDetalleCertificacionWindow();
        
        if (!win)
        {
            win = Ext.widget('formularios.detallecertificacion.edit.window', {
                title: 'Administrar Formularios FORM-057'
            });
        }
        
        var cont = me.getController('formularios.DetalleCertificacion');
        cont.accionTerminada = me.accionTerminada;
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        var oec = ( typeof(me.tiposUsuario['oec']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1 || oec == 1)
        {
            cont.boolMuestraBotones = true;
        }
        else
        {
            cont.boolMuestraBotones = false;
        }
        
        
        win.show();
    },


    // Reconfigura el panel de acuerdo a las acciones ya realizadas o faltantes
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso5BotonForm052 = me.getPaso5BotonForm052(),
                Paso5BotonForm053 = me.getPaso5BotonForm053(),
                Paso5BotonForm054 = me.getPaso5BotonForm054(),
                Paso5BotonForm056 = me.getPaso5BotonForm056(),
                Paso5BotonForm057 = me.getPaso5BotonForm057(),
                Paso5BotonFinalizaCargaFormularios = me.getPaso5BotonFinalizaCargaFormularios(),
                
                // Textos
                Paso5TextEstado = me.getPaso5TextEstado(),

                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel5 = me.getPaso5Panel(),
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
                        tipoUsuario = response.registros.usuarioTipo000201,
                        tipoUsuarioArray = [];
                    
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
                    console.log('Paso 5: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(3);*/
                }
                else
                {
                    var accionesArray = [];
                    
                    Ext.Object.each ( acciones, function ( name, index, accion ) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                        }
                    );
            
                    /// Accion carga-formularios-50s
                    if ( accionesArray['termina-carga-formularios-50s'] == '1' )
                    {
                        me.accionTerminada = 1;
                        Paso5BotonFinalizaCargaFormularios.setDisabled(true);
                        sigPasoBtn.setDisabled(false);
                        Paso5TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                        
                        if ( admin == 1 || oec == 1 || dta == 1 || da == 1 )
                        {
                            Paso5BotonForm052.setDisabled(false);
                            Paso5BotonForm053.setDisabled(false);
                            Paso5BotonForm054.setDisabled(false);
                            Paso5BotonForm056.setDisabled(false);
                            Paso5BotonForm057.setDisabled(false);
                        }
                        else
                        {
                            Paso5BotonForm052.setDisabled(true);
                            Paso5BotonForm053.setDisabled(true);
                            Paso5BotonForm054.setDisabled(true);
                            Paso5BotonForm056.setDisabled(true);
                            Paso5BotonForm057.setDisabled(true);
                        }
                    }
                    else
                    {
                        me.accionTerminada = 0;
                        Paso5TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                        
                        if ( admin == 1 || oec == 1 )
                        {
                            Paso5BotonForm052.setDisabled(false);
                            Paso5BotonForm053.setDisabled(false);
                            Paso5BotonForm054.setDisabled(false);
                            Paso5BotonForm056.setDisabled(false);
                            Paso5BotonForm057.setDisabled(false);
                            Paso5BotonFinalizaCargaFormularios.setDisabled(false);
                        }
                        else
                        {
                            Paso5BotonForm052.setDisabled(true);
                            Paso5BotonForm053.setDisabled(true);
                            Paso5BotonForm054.setDisabled(true);
                            Paso5BotonForm056.setDisabled(true);
                            Paso5BotonForm057.setDisabled(true);
                            Paso5BotonFinalizaCargaFormularios.setDisabled(true);
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