/*
 * Paso 1
 * 
 * Estado Actual:   'tramite-acreditacion-iniciado'
 * 
 * Acciones:
 * 
 *      1. 'guardar-formulario-002'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso1', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'tramite-acreditacion-iniciado',
    stores: [
        'oec.Oec'
    ],
    views: [
        'oec.Oec.edit.Form',
        'oec.Oec.edit.Window',
        'tramite.Tramite.edit.tab.Paso1'
    ],
    refs: [
        {
            ref: 'Paso1Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso1]'
        },
        {
            ref: 'Paso1BotonAbreFormulario002',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso1] #btnForm002'
        },
        {
            ref: 'Paso1BotonDescargaForm002',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso1] #btnDescargarForm002'
        },
        {
            ref: 'Paso1BotonFinalizaFormulario002',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso1] #btnFinalizarForm002'
        },
        {
            ref: 'Paso1TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso1] #textEstado'
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
            ref: 'OecNombreField',
            selector: '[xtype=oec.oec.edit.form] textfield#nombre_oec'
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
                'panel[xtype=tramite.tramite.edit.tab.paso1]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso1] #btnForm002': {
                    click: this.abreFormulario002
                },
                'panel[xtype=tramite.tramite.edit.tab.paso1] #btnFinalizarForm002': {
                    click: this.terminaEdicionFormulario002
                },
                'panel[xtype=tramite.tramite.edit.tab.paso1] #btnDescargarForm002': {
                    click: this.descargaForm002
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    terminaEdicionFormulario002: function () {
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
                    me.terminaAccion(dataPeticion.id_peticion, 'guardar-formulario-002');
                    
                    Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'oec020001/updateDate',
                        params: {
                           id_oec: dataPeticion.fk_id_oec
                        },
                        success: function (response, options) {
                            return;
                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
                        }
                    });
                }
            }
        });
    },
    
    
    descargaForm002: function () {
        var me = this,
                grid = me.getTramiteListaOec(),
                selected = grid.getSelectionModel().getSelection();
        
        if (selected.length === 1)
        {
            var rec = selected[0],
                    data = rec.getData(), 
                    src, 
                    obj;
            
            obj = {
                url: ibmetrodta.app.globals.globalServerPath + 'reporte/pdfForm002',
                params: {
                    id_oec: data['id_oec']
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
                
                // Botones
                Paso1BotonFinalizaFormulario002 = me.getPaso1BotonFinalizaFormulario002(),
                Paso1BotonAbreFormulario002 = me.getPaso1BotonAbreFormulario002(),
                Paso1BotonDescargaForm002 = me.getPaso1BotonDescargaForm002(),
                txtEstado = me.getPaso1TextEstado(),
                
                // Layout
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                accion, estado, peticion;
        
        antPasoBtn.setDisabled(true);
        sigPasoBtn.setDisabled(true);

        estado = me.estadoActual;
        peticion = dataPeticion.id_peticion;
        
        Ext.getBody().mask('Configurando Interfaz ...');

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
                
                if ( acciones.length === 0 )   // TODO: habiltiar según el privilegio por tipo de usuario
                {
                    // TODO: no esta activo este paso, pasar al anterior si existe.
                    Ext.getBody().unmask();
                    console.log('Paso 1: Sin Acciones');
                }
                else
                {
                    var accionesArray = [];
                    
                    Ext.Object.each ( acciones, function ( name, index, accion ) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                        }
                    );


                    if ( ext == 1 || et == 1 || el == 1 || eent == 1 )
                    {
                        Paso1BotonDescargaForm002.setDisabled(true);
                    }
            

                    /// Accion guardar-formulario-002
                    if ( accionesArray['guardar-formulario-002'] === '0' )
                    {
                        if ( admin === 1 || oec === 1 )
                        {
                            Paso1BotonFinalizaFormulario002.setDisabled(false);
                            Paso1BotonAbreFormulario002.setDisabled(false);
                        }
                        else
                        {
                            Paso1BotonFinalizaFormulario002.setDisabled(true);
                            Paso1BotonAbreFormulario002.setDisabled(true);
                        }
                    }
                    else
                    {
                            Paso1BotonFinalizaFormulario002.setDisabled(true);
                            Paso1BotonAbreFormulario002.setDisabled(true);
                            
                            sigPasoBtn.setDisabled(false);
                            
                            txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
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
    
    
    abreFormulario002: function () {
        var me = this,
                grid = me.getTramiteListaOec(),
                record = grid.getSelectionModel().getSelection()[0],
                win = me.getOecWindow();

        me.getController('oec.Oec').boolOecEdit = 1;
        me.getController('oec.Oec').boolDesdeTramite = 1;
        
        console.log(me.getController('oec.Oec').boolDesdeTramite);

        if (!win) {
            win = Ext.widget('oec.oec.edit.window', {
                title: 'Editar OEC'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
        
        console.log('que esta cargando?');
        console.log(grid);
        console.log(record);
        
        // load form with data
        win.down('form').loadRecord(record);
    }
});