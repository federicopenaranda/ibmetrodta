/*
 * Paso 6
 * 
 * Estado Actual:   'formularios-50s-llenados'
 * 
 * Acciones:
 * 
 *      1. 'termina-carga-archivos-base'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso6', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'formularios-50s-llenados',
    accionTerminada: 0,
    tiposUsuario: [],
    stores: [
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso6'
    ],
    refs: [
        {
            ref: 'Paso6Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6]'
        },
        
        // Botones
        {
            ref: 'Paso6BotonCargaManualCalidad',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaManualCalidad'
        },
        {
            ref: 'Paso6BotonCargaProcedimientos',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaProcedimientos'
        },
        {
            ref: 'Paso6BotonCargaInforme',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaInforme'
        },
        {
            ref: 'Paso6BotonCargaAuditoria',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaAuditoria'
        },
        {
            ref: 'Paso6BotonCargaValidacion',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaValidacion'
        },
        {
            ref: 'Paso6BotonCargaCertificado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaCertificado'
        },
        {
            ref: 'Paso6BotonCargaLista',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaLista'
        },
        {
            ref: 'Paso6BotonCargaOtros',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnCargaOtros'
        },
        {
            ref: 'Paso6BotonFinalizaCargaArchivosBase',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnFinalizaCargaArchivosBase'
        },
        {
            ref: 'Paso6TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso6] #textEstado'
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
            ref: 'PeticionArchivoWindow',
            selector: '[xtype=proceso.peticionarchivo.edit.window]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso6]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso6] button[itemId^=btnCarga]': {
                    click: this.cargaArchivoBase
                },
                'panel[xtype=tramite.tramite.edit.tab.paso6] button#btnFinalizaCargaArchivosBase': {
                    click: this.terminaCargaArchivosBase
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    cargaArchivoBase: function ( button, e, eOpts ) {
        var me = this,
                win = me.getPeticionArchivoWindow(),
                filtro = '';
        
        switch (button.itemId)
        {
            case 'btnCargaManualCalidad': 
                filtro = 'manual-de-calidad';
                break;

            case 'btnCargaProcedimientos': 
                filtro = 'procedimientos';
                break;

            case 'btnCargaInforme': 
                filtro = 'informe-de-revision-por-la-direccion';
                break;

            case 'btnCargaAuditoria': 
                filtro = 'informe-de-auditoria-interna';
                break;

            case 'btnCargaValidacion': 
                filtro = 'informe-de-validacion';
                break;

            case 'btnCargaCertificado': 
                filtro = 'certificado-de-material-referencia-o-patrones';
                break;

            case 'btnCargaLista': 
                filtro = 'lista-maestra-de-documentos';
                break;
                
            case 'btnCargaOtros': 
                filtro = 'lista-otros';
                break;
                
            default:
                filtro = '';
                break;
        }
        
        var cont1 = me.getController('proceso.PeticionArchivo');
        cont1.nombreAccion = 'termina-carga-archivos-base';
        cont1.tbPeticionArchivo = 1;
        cont1.filtro = filtro;
        cont1.codigoTipoArchivo = filtro;
        cont1.nombreEstado = me.estadoActual;
        cont1.accionTerminada = me.accionTerminada;
        
        var admin = ( typeof(me.tiposUsuario['admin']) === 'undefined' ) ? -1 : 1;
        var oec = ( typeof(me.tiposUsuario['oec']) === 'undefined' ) ? -1 : 1;
        
        if (admin == 1 || oec == 1)
            cont1.tbPeticionArchivo = 1;
        else
            cont1.tbPeticionArchivo = 0;

        
        if (!win)
        {
            win = Ext.widget('proceso.peticionarchivo.edit.window', {
                title: 'Administración de Archivos'
            });
        }

        win.show();
    },
    
    
    terminaCargaArchivosBase: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        Ext.Msg.confirm({
            title: 'Confirmar la Finalización de Carga de Archivos Base',
            msg: '¿Terminó de cargar los archivos base ?. No podrá cargar más posteriormente.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if ( buttonId === 'yes' )
                {
                    me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-archivos-base');
                    me.accionTerminada = 1;
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
                Paso6BotonCargaManualCalidad = me.getPaso6BotonCargaManualCalidad(),
                Paso6BotonCargaProcedimientos = me.getPaso6BotonCargaProcedimientos(),
                Paso6BotonCargaInforme = me.getPaso6BotonCargaInforme(),
                Paso6BotonCargaAuditoria = me.getPaso6BotonCargaAuditoria(),
                Paso6BotonCargaValidacion = me.getPaso6BotonCargaValidacion(),
                Paso6BotonCargaCertificado = me.getPaso6BotonCargaCertificado(),
                Paso6BotonCargaLista = me.getPaso6BotonCargaLista(),
                Paso6BotonCargaOtros = me.getPaso6BotonCargaOtros(),
                Paso6BotonFinalizaCargaArchivosBase = me.getPaso6BotonFinalizaCargaArchivosBase(),


                // Texto
                txtEstado = me.getPaso6TextEstado(),
                
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
                        tipoUsuario = response.registros.usuarioTipo000201,
                        tipoUsuarioArray = [];
                    
                Ext.Object.each ( tipoUsuario, function ( name, index, accion ) {
                        tipoUsuarioArray[index.nombre_usuario_tipo] = 1;
                    }
                );
        
                me.tiposUsuario = tipoUsuarioArray;
                
                var oec = ( typeof(tipoUsuarioArray['oec']) === 'undefined' ) ? -1 : 1;
                var admin = ( typeof(tipoUsuarioArray['admin']) === 'undefined' ) ? -1 : 1;
                var dta = ( typeof(tipoUsuarioArray['dta']) === 'undefined' ) ? -1 : 1;
                var da = ( typeof(tipoUsuarioArray['da']) === 'undefined' ) ? -1 : 1;
                var el = ( typeof(tipoUsuarioArray['el']) === 'undefined' ) ? -1 : 1;
                var ext = ( typeof(tipoUsuarioArray['ext']) === 'undefined' ) ? -1 : 1;
                var et = ( typeof(tipoUsuarioArray['et']) === 'undefined' ) ? -1 : 1;
                
                if ( acciones.length === 0 )   // TODO: habiltiar según el privilegio por tipo de usuario
                {
                    Ext.getBody().unmask();
                    console.log('Paso 6: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(4);*/
                }
                else
                {
                    var accionesArray = [];
                    
                    Ext.Object.each ( acciones, function ( name, index, accion ) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                        }
                    );

                    /// Accion termina-carga-archivos-base
                    if ( accionesArray['termina-carga-archivos-base'] == '1' )
                    {
                        Paso6BotonFinalizaCargaArchivosBase.setDisabled(true);
                        sigPasoBtn.setDisabled(false);
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                        
                        if ( admin == 1 || dta == 1 || oec == 1 || el == 1 || ext == 1 || et == 1 )
                        {
                            Paso6BotonCargaManualCalidad.setDisabled(false);
                            Paso6BotonCargaProcedimientos.setDisabled(false);
                            Paso6BotonCargaInforme.setDisabled(false);
                            Paso6BotonCargaAuditoria.setDisabled(false);
                            Paso6BotonCargaValidacion.setDisabled(false);
                            Paso6BotonCargaCertificado.setDisabled(false);
                            Paso6BotonCargaLista.setDisabled(false);
                            Paso6BotonCargaOtros.setDisabled(false);
                        }
                        else
                        {
                            Paso6BotonCargaManualCalidad.setDisabled(true);
                            Paso6BotonCargaProcedimientos.setDisabled(true);
                            Paso6BotonCargaInforme.setDisabled(true);
                            Paso6BotonCargaAuditoria.setDisabled(true);
                            Paso6BotonCargaValidacion.setDisabled(true);
                            Paso6BotonCargaCertificado.setDisabled(true);
                            Paso6BotonCargaLista.setDisabled(true);
                            Paso6BotonCargaOtros.setDisabled(true);
                        }
                        
                        me.accionTerminada = 1;
                    }
                    else
                    {
                        Paso6BotonFinalizaCargaArchivosBase.setDisabled(false);
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                        
                        if ( admin == 1 || dta == 1 || oec == 1 || el == 1 || ext == 1 || et == 1 )
                        {
                            Paso6BotonCargaManualCalidad.setDisabled(false);
                            Paso6BotonCargaProcedimientos.setDisabled(false);
                            Paso6BotonCargaInforme.setDisabled(false);
                            Paso6BotonCargaAuditoria.setDisabled(false);
                            Paso6BotonCargaValidacion.setDisabled(false);
                            Paso6BotonCargaCertificado.setDisabled(false);
                            Paso6BotonCargaLista.setDisabled(false);
                            Paso6BotonCargaOtros.setDisabled(false);
                        }
                        else
                        {
                            Paso6BotonCargaManualCalidad.setDisabled(true);
                            Paso6BotonCargaProcedimientos.setDisabled(true);
                            Paso6BotonCargaInforme.setDisabled(true);
                            Paso6BotonCargaAuditoria.setDisabled(true);
                            Paso6BotonCargaValidacion.setDisabled(true);
                            Paso6BotonCargaCertificado.setDisabled(true);
                            Paso6BotonCargaLista.setDisabled(true);
                            Paso6BotonCargaOtros.setDisabled(true);
                        }
                        
                        me.accionTerminada = 0;
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
    
    
    abreFormulario002: function () {
        /*var me = this,
                grid = me.getTramiteListaOec(),
                record = grid.getSelectionModel().getSelection()[0],
                win = me.getOecWindow();

        me.getController('oec.Oec').boolOecEdit = 1;
        me.getController('oec.Oec').boolDesdeTramite = 1;

        if (!win) {
            win = Ext.widget('oec.oec.edit.window', {
                title: 'Editar OEC'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
        // load form with data
        win.down('form').loadRecord(record);*/
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