/*
 * Paso 17
 * 
 * Estado Actual:   'documentacion-aprobada-comite-tecnico'
 * 
 * Acciones:
 * 
 *      1. 'termina-carga-formulario-026'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso17', {
    extend: 'ibmetrodta.controller.Base',
    accionTerminada: 0,
    estadoActual: 'documentacion-aprobada-comite-tecnico',
    views: [
        'tramite.Tramite.edit.tab.Paso17'
    ],
    refs: [
        {
            ref: 'Paso17Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso17]'
        },
        {
            ref: 'Paso17BotonAbreFormulario026',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso17] #btnForm026'
        },
        {
            ref: 'Paso17BotonFinalizaFormulario026',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso17] #btnFinalizarForm026'
        },
        {
            ref: 'Paso17TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso17] #textEstado'
        },
        {
            ref: 'Paso17AnexoConvenioWindow',
            selector: '[xtype=formularios.anexoconvenio.edit.window]'
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
                'panel[xtype=tramite.tramite.edit.tab.paso17]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso17] #btnForm026': {
                    click: this.abreFormulario026
                },
                'panel[xtype=tramite.tramite.edit.tab.paso17] #btnFinalizarForm026': {
                    click: this.terminaEdicionFormulario026
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    terminaEdicionFormulario026: function () {
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
                    me.terminaAccion(dataPeticion.id_peticion, 'termina-carga-formulario-026');
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
                Paso17BotonAbreFormulario026 = me.getPaso17BotonAbreFormulario026(),
                Paso17BotonFinalizaFormulario026 = me.getPaso17BotonFinalizaFormulario026(),
                Paso17TextEstado = me.getPaso17TextEstado(),
                
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
                
                var oec = ( typeof(tipoUsuarioArray['oec']) === 'undefined' ) ? -1 : 1;
                var admin = ( typeof(tipoUsuarioArray['admin']) === 'undefined' ) ? -1 : 1;
                var dta = ( typeof(tipoUsuarioArray['dta']) === 'undefined' ) ? -1 : 1;
                var da = ( typeof(tipoUsuarioArray['da']) === 'undefined' ) ? -1 : 1;
                
                if ( acciones.length === 0 )   // TODO: habiltiar según el privilegio por tipo de usuario
                {
                    Ext.getBody().unmask();
                    console.log('Paso 17: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(15);*/
                }
                else
                {
                    var accionesArray = [];
                    
                    Ext.Object.each ( acciones, function ( name, index, accion ) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                        }
                    );

                    /// Accion guardar-formulario-002
                    if ( accionesArray['termina-carga-formulario-026'] == '0' )
                    {
                        Paso17TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);

                        if ( dta == 1 || admin == 1 )
                        {
                            Paso17BotonAbreFormulario026.setDisabled(false);
                            Paso17BotonFinalizaFormulario026.setDisabled(false);
                        }
                        else
                        {
                            Paso17BotonAbreFormulario026.setDisabled(true);
                            Paso17BotonFinalizaFormulario026.setDisabled(true);
                        }
                    }
                    else
                    {
                        sigPasoBtn.setDisabled(false);
                        me.accionTerminada = 1;
                        Paso17TextEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);

                        if ( admin == 1 || dta == 1 )
                        {
                            Paso17BotonAbreFormulario026.setDisabled(false);
                            Paso17BotonFinalizaFormulario026.setDisabled(true);
                        }
                        else
                        {
                            Paso17BotonAbreFormulario026.setDisabled(true);
                            Paso17BotonFinalizaFormulario026.setDisabled(true);
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


    abreFormulario026: function () {
        var me = this,
                win = me.getPaso17AnexoConvenioWindow();

        if (!win) {
            win = Ext.widget('formularios.anexoconvenio.edit.window', {
                title: 'Editar Formulario 026'
            });
        }
        
        var cont = me.getController('formularios.AnexoConvenio');
        cont.accionTerminada = me.accionTerminada;

        // show window
        win.show();
        win.doComponentLayout();
    }
});