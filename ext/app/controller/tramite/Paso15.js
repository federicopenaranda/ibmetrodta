/*
 * Paso 15
 * 
 * Estado Actual:   'archivos-plan-accion-cargados'
 * 
 * Acciones:
 * 
 *      1. 'termina-carga-formulario-050'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso15', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'archivos-plan-accion-cargados',
    accionTerminada: 0,
    stores: ['proceso.Peticion'],
    views: [
        'tramite.Tramite.edit.tab.Paso15'
    ],
    refs: [
        {
            ref: 'Paso15Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso15]'
        },
        {
            ref: 'Paso15BotonAbreFormulario050',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso15] #btnForm050'
        },
        {
            ref: 'Paso15BotonFinalizaFormulario050',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso15] #btnFinalizarForm050'
        },
        {
            ref: 'Paso15TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso15] #textEstado'
        },
        {
            ref: 'Paso15InformeAcredWindow',
            selector: '[xtype=formularios.informeacred.edit.window]'
        },
        {
            ref: 'NecesidadComiteField',
            selector: '[xtype=tramite.tramite.edit.tab.paso15] combo#necesidad_comite_tecnico'
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
                'panel[xtype=tramite.tramite.edit.tab.paso15]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso15] #btnForm050': {
                    click: this.abreFormulario050
                },
                'panel[xtype=tramite.tramite.edit.tab.paso15] #btnFinalizarForm050': {
                    click: this.terminaEdicionFormulario050
                },
                'panel[xtype=tramite.tramite.edit.tab.paso15] #btnDescargarForm050': {
                    click: this.descargaForm050
                },
                '[xtype=tramite.tramite.edit.tab.paso15] combo#necesidad_comite_tecnico': {
                    //change: this.actualizaNecesidadComite
                    select: this.actualizaNecesidadComite
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    actualizaNecesidadComite: function ( combo, newValue, oldValue, eOpts ) {
        var me = this,
                store = me.getProcesoPeticionStore(),
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                rec, index;

        index = store.find('id_peticion',dataPeticion.id_peticion);
        
        if ( typeof(index) == 'undefined' )
        {
            Ext.Msg.alert('Error', 'Error al cargar los datos de Trámite. Por favor intente nuevamente.');
            return;
        }
        else
        {
            rec = store.getAt(index);
            rec.set('necesidad_comite_peticion', newValue);
            store.sync();
            
            if ( newValue == 0 )
            {
                me.terminaAccion(dataPeticion.id_peticion, 'aprobacion-ra-tramite-comite-tecnico');
                me.terminaAccion(dataPeticion.id_peticion, 'carga-acta-comite-tecnico');
                me.terminaAccion(dataPeticion.id_peticion, 'aprobacion-da-tramite-comite-tecnico');
                
                combo.setDisabled(true);
            }
            else
            {
                console.log('[TODO] SI para comite técnico');
            }
        }
    },
    
    
    terminaEdicionFormulario050: function () {
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
                    me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formulario-050');
                }
            }
        });
    },
    
    
    descargaForm050: function () {
        var me = this,
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                src, obj;
        
        if ( typeof(recPeticion) !== 'undefined' )
        {
            obj = {
                url: ibmetrodta.app.globals.globalServerPath + 'reporte/pdfForm050',
                params: {
                    id_peticion: dataPeticion.id_peticion
                }
            };
            
            src = obj.url + (obj.params ? '?' + Ext.urlEncode(obj.params) : '');
            
            Ext.core.DomHelper.append(document.body, {
                tag : 'iframe',
                id : 'downloadIframe',
                frameBorder : 0,
                width : 0,
                height : 0,
                css : 'display:none;visibility:hidden;height:0px;',
                src : src
            });
        }
        else
        {
            console.log('Error al generar el reporte');
        }
    },
    
    
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
        
                storeTramite = me.getProcesoPeticionStore(),
                filters = [],
                
                
                // Botones
                Paso15BotonAbreFormulario050 = me.getPaso15BotonAbreFormulario050(),
                Paso15BotonFinalizaFormulario050 = me.getPaso15BotonFinalizaFormulario050(),
                NecesidadComiteField = me.getNecesidadComiteField(),
                        
                Paso15TextEstado = me.getPaso15TextEstado(),
                
                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                
                accion, estado, peticion;
        
                
        storeTramite.clearFilter();
        filters.push({property: 'id_peticion', value: dataPeticion.id_peticion});
        //storeTramite.addFilter(filters);
        
        
        
        
        
        
                
        estado = me.estadoActual;
        peticion = dataPeticion.id_peticion;
        
        Ext.getBody().mask('Configurando Interfaz ...');
        
        sigPasoBtn.setDisabled(true);
        
        storeTramite.load({
            params:{
                filter:Ext.encode(filters)
            },

            callback: function(record, response, success) 
            {
                Ext.data.JsonP.request({
                    url: ibmetrodta.app.globals.globalServerPath + 'peticion010401/verifState',
                    params: {
                        id_peticion: peticion,
                        nombre_estado: estado
                    },
                    success: function (response, options) {
                        /*******************************
                         * [INICIO] Carga de Valor en combo
                         *******************************/

                        var recs = storeTramite.getAt(0);
                        
                        if ( typeof(recs) !== 'undefined' )
                        {
                            var datos = recs.getData();
                            NecesidadComiteField.setValue(datos.necesidad_comite_peticion);
                        }

                        /*******************************
                         * [FIN] Carga de Valor en combo
                         ******************************/


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
                            console.log('Paso 15: Sin Acciones');

                            /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                            var active = layout.getActiveItem();
                            layout.setActiveItem(13);*/
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


                            Paso15TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);

                            /// Accion termina-carga-formulario-011-012
                            if ( accionesArray['termina-carga-formulario-050'] == '0' )
                            {
                                //NecesidadComiteField.setDisabled(true);
                                if ( dta == 1 || admin == 1 || da == 1 )
                                {
                                    Paso15BotonAbreFormulario050.setDisabled(false);
                                    Paso15BotonFinalizaFormulario050.setDisabled(false);
                                }
                                else
                                {
                                    Paso15BotonAbreFormulario050.setDisabled(true);
                                    Paso15BotonFinalizaFormulario050.setDisabled(true);
                                }
                            }
                            else
                            {
                                Paso15BotonFinalizaFormulario050.setDisabled(true);
                                //NecesidadComiteField.setDisabled(false);
                                sigPasoBtn.setDisabled(false);
                                me.accionTerminada  = 1;
                                
                                Paso15TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);

                                if ( admin == 1 || ra == 1 || da == 1 )
                                {
                                    Paso15BotonAbreFormulario050.setDisabled(false);
                                }
                                else
                                {
                                    Paso15BotonAbreFormulario050.setDisabled(true);
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
    
    
    abreFormulario050: function () {
        var me = this,
                //peticionLista = me.getTramiteListaPeticion(),
                //recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                //dataPeticion = recPeticion.getData(),
                win = me.getPaso15InformeAcredWindow();

        if (!win) {
            win = Ext.widget('formularios.informeacred.edit.window', {
                title: 'Editar Formulario 050'
            });
        }

        var cont = me.getController('formularios.InformeAcred');
        cont.accionTerminada = me.accionTerminada;
        
        // show window
        win.show();
        win.doComponentLayout();
    }
});