/*
 * Paso 9
 * 
 * Estado Actual:   'documentacion-aprobada-ra'
 * 
 * Acciones:
 * 
 *      1. 'finaliza-designacion-equipo-evaluador'
 *      2. 'aprueba-oec-designacion-equipo-evaluador'
 * 
 */

Ext.define('ibmetrodta.controller.tramite.Paso9', {
    extend: 'ibmetrodta.controller.Base',
    estadoActual: 'documentacion-aprobada-ra',
    stores: [
        'proceso.EquipoPeticion'
    ],
    views: [
        'tramite.Tramite.edit.tab.Paso9'
    ],
    refs: [
        {
            ref: 'Paso9Panel',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9]'
        },
        
        /// Botones
        {
            ref: 'Paso9BotonApruebaEE',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9] button#btnApruebaEE'
        }/*,
        {
            ref: 'Paso9BotonObservaEE',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9] button#btnObservaEE'
        }*/,
        {
            ref: 'Paso9BotonFinalizarDesignacionEquipoEvaluador',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9] button#btnFinalizarDesignacionEquipoEvaluador'
        },


        // Textos
         {
            ref: 'Paso9TextoSubDesignacionEE',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9] label#txtSubDesignacionEE'
        },
         {
            ref: 'Paso9TextoSubAprobacionEE',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9] label#txtSubAprobacionEE'
        },
        {
            ref: 'Paso9TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9] #textEstado'
        },
        
        
        /// Grids
         {
            ref: 'Paso9GridEE',
            selector: '[xtype=proceso.equipopeticion.lista]'
        },
        
        
        {
            ref: 'Paso9EquipoEvaluadorWindow',
            selector: '[xtype=proceso.equipopeticion.edit.equipopeticionwindow]'
        },


        // Otros
        {
            ref: 'Paso9TextEstado',
            selector: 'panel[xtype=tramite.tramite.edit.tab.paso9] label#textEstado'
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
            ref: 'ObsPeticionAccionWindow',
            selector: 'window[xtype=proceso.obspeticionaccion.edit.window]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=tramite.tramite.edit.tab.paso9]': {
                    activate: this.configPanelPaso
                },
                'panel[xtype=tramite.tramite.edit.tab.paso9] button#btnApruebaEE': {
                    click: this.apruebaEquipoEvaluador
                },
                /*'panel[xtype=tramite.tramite.edit.tab.paso9] button#btnObservaEE': {
                    click: this.observaEquipoEvaluador
                },*/
                'panel[xtype=tramite.tramite.edit.tab.paso9] button#btnFinalizarDesignacionEquipoEvaluador': {
                    click: this.finalizaDesignacionEE
                },
                'grid[xtype=proceso.equipopeticion.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.equipopeticion.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=proceso.equipopeticion.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=proceso.equipopeticion.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=proceso.equipopeticion.edit.equipopeticionwindow] button#save': {
                    click: this.save
                },
                'window[xtype=proceso.equipopeticion.edit.equipopeticionwindow] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    finalizaDesignacionEE: function () {
        var me = this,
                grid = me.getPaso9GridEE(),
                boton = me.getPaso9BotonFinalizarDesignacionEquipoEvaluador(),
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                record, callbacks, store;
        
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea finalizar la asignación del Equipo Evaluador?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if (buttonId === 'yes') {
                    /*grid.setDisabled(true);
                    boton.setDisabled(true);*/
                    /*store = me.getStore('tramite.ObsPeticionAccion'),
                    record = Ext.create('ibmetrodta.model.tramite.ObsPeticionAccion');

                    record.set('nombre_accion', 'finaliza-designacion-equipo-evaluador');
                    record.set('obs_peticion_accion', 'Aprobación de Paso (Automático)');
                    record.set('procede_obs_peticion_accion', 1);
                    record.set('fk_id_peticion', dataPeticion.id_peticion);

                    callbacks = {
                        success: function (records, operation) {
                            me.terminaAccion(dataPeticion.id_peticion, 'finaliza-designacion-equipo-evaluador');
                        },
                        failure: function (records, operation) {
                            store.rejectChanges();
                        }
                    };

                    Ext.getBody().mask('Guardando Designación ...');

                    if (record.phantom) {
                        store.rejectChanges();
                        store.add(record);
                    }

                    store.sync(callbacks);*/
                    
                    me.terminaAccion(dataPeticion.id_peticion, 'finaliza-designacion-equipo-evaluador');
                }
            }
        });
    },
    
    
    manejaBotones: function (record, index, eOpts) {
        var me = this,
                grid = me.getPaso9GridEE(),
                records = grid.getSelectionModel().getSelection(),
                botonEdit = grid.down("[xtype='toolbar'] button#edit"),
                botonDelete = grid.down("[xtype='toolbar'] button#delete");

        if (records.length > 0)
        {
            botonEdit.enable();
            botonDelete.enable();
        }
        else
        {
            botonEdit.disable();
            botonDelete.disable();
        }
    },
    
    
    loadRecords: function (grid, eOpts) {
        var me = this, 
                store = grid.getStore(),
                
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        // revisar
        
        store.clearFilter(true);
        store.filter('fk_id_peticion', dataPeticion.id_peticion);
        store.reload();
        
        
        /*store.load({
            params: {
                fk_id_peticion: dataPeticion.id_peticion,
                nombre_accion: 'finaliza-designacion-equipo-evaluador'
            }
        });*/
        
        me.boolDesdeTramite = 0;
    },
    
    
    edit: function (view, record, item, index, e, eOpts) {
        var me = this,
                grid = me.getPaso9GridEE(),
                record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },
    
    
    add: function (button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.proceso.EquipoPeticion');

        // show window
        me.showEditWindow(record);
    },
    

    save: function (button, e, eOpts) {
        var me = this,
                grid = me.getPaso9GridEE(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks,
                
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();

        // Valida el formulario
        if (form.isValid())
        {
            record.set(values);
            record.set('fk_id_peticion', dataPeticion.id_peticion);
            record.set('estado_equipo_peticion', 'n');

            if (record.dirty) {
                callbacks = {
                    success: function (records, operation) {
                        store.reload();
                        win.close();
                    },
                    failure: function (records, operation) {
                        store.rejectChanges();
                    }
                };

                Ext.getBody().mask('Guardando Miembro del Equipo Evaluador ...');

                if (record.phantom) {
                    store.rejectChanges();
                    store.add(record);
                }

                store.sync(callbacks);
            }
        }
        else
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
    },
    
    
    remove: function () {
        var me = this,
                grid = me.getPaso9GridEE(),
                store = grid.getStore(),
                record = grid.getSelectionModel().getSelection()[0];

        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar la asignación de este Miembro del Equipo Evaluador?. Esta acción no puede ser deshecha.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if (buttonId === 'yes') {
                    store.remove(record);
                    store.sync({
                        failure: function (records, operation) {
                            store.rejectChanges();
                        }
                    });
                }
            }
        });
    },
    
    
    showEditWindow: function (record) {
        var me = this,
                win = me.getPaso9EquipoEvaluadorWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('proceso.equipopeticion.edit.equipopeticionwindow', {
                title: isNew ? 'Añadir Miembro de Equipo Evaluador' : 'Editar Miembro de Equipo Evaluador'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
        // load form with data
        win.down('form').loadRecord(record);
    },
    
    
    close: function (button, e, eOpts) {
        var win = button.up('window');
        win.close();
    },
    
    
    apruebaEquipoEvaluador: function () {
        var me = this,
                botonAprobar = me.getPaso9BotonApruebaEE(),
                //botonObservar = me.getPaso9BotonObservaEE(),
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                record, callbacks, store;
        
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea aprobar la designación del Equipo Evaluador?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId, text, opt)
            {
                if (buttonId === 'yes')
                {
                    /*botonAprobar.setDisabled(true);
                    botonObservar.setDisabled(true);*/
                    /*store = me.getStore('tramite.ObsPeticionAccion'),
                    record = Ext.create('ibmetrodta.model.tramite.ObsPeticionAccion');

                    record.set('nombre_accion', 'aprueba-oec-designacion-equipo-evaluador');
                    record.set('obs_peticion_accion', 'Aprobación de Paso (Automático)');
                    record.set('procede_obs_peticion_accion', 1);
                    record.set('fk_id_peticion', dataPeticion.id_peticion);

                    callbacks = {
                        success: function (records, operation) {
                            me.terminaAccion(dataPeticion.id_peticion, 'aprueba-oec-designacion-equipo-evaluador');
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

                    store.sync(callbacks);*/
                    
                    me.terminaAccion(dataPeticion.id_peticion, 'aprueba-oec-designacion-equipo-evaluador');
                }
            }
        });
    },
    
    
    /*observaEquipoEvaluador: function () {
        var me =this,
                win = me.getObsPeticionAccionWindow();
        
        if (!win)
        {
            win = Ext.widget('proceso.obspeticionaccion.edit.window', {
                title: 'Observación de Trámite'
            });
        }
        
        var controlador = me.getController('proceso.ObsPeticionAccion');
        controlador.accion = 'aprueba-oec-designacion-equipo-evaluador';

        // show window
        win.show();
    },*/
    
    
    // Reconfigura el panel de acuerdo a las acciones ya realizadas o faltantes
    configPanelPaso: function () {
        var me = this,
                gridPeticion = me.getTramiteListaPeticion(),
                recPeticion = gridPeticion.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                // Botones
                Paso9BotonApruebaEE = me.getPaso9BotonApruebaEE(),
                //Paso9BotonObservaEE = me.getPaso9BotonObservaEE(),
                Paso9BotonFinalizaEE = me.getPaso9BotonFinalizarDesignacionEquipoEvaluador(),
                
                // Textos
                txtEstado = me.getPaso9TextEstado(),

                // Layout
                grid = me.getPaso9GridEE(),
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                panel9 = me.getPaso9Panel(),
                accion, estado, peticion;
        
        grid.getStore().reload();
        
        if ( dataPeticion.fk_id_proceso == 2 || dataPeticion.fk_id_proceso == 3 || dataPeticion.fk_id_proceso == 5 )
        {
            antPasoBtn.setDisabled(true);
        }
        else
        {
            antPasoBtn.setDisabled(false);
        }

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
               
                
                // TODO: añadir y configurar con todos los tipos de usuarios
                var oec = ( typeof(tipoUsuarioArray['oec']) === 'undefined' ) ? -1 : 1;
                var admin = ( typeof(tipoUsuarioArray['admin']) === 'undefined' ) ? -1 : 1;
                var dta = ( typeof(tipoUsuarioArray['dta']) === 'undefined' ) ? -1 : 1;
                var da = ( typeof(tipoUsuarioArray['da']) === 'undefined' ) ? -1 : 1;
                var consejo = ( typeof(tipoUsuarioArray['consejo']) === 'undefined' ) ? -1 : 1;


                if ( acciones.length === 0 )
                {
                    Ext.getBody().unmask();
                    console.log('Paso 9: Sin Acciones');
                    
                    /*Ext.Msg.alert('Paso Sin Acciones', 'Este paso no tiene acciones configuradas, complete el anterior paso.');
                    var active = layout.getActiveItem();
                    layout.setActiveItem(7);*/
                }
                else
                {
                    var accionesArray = [];
                    
                    Ext.Object.each ( acciones, function ( name, index, accion ) {
                            accionesArray[index.nombre_accion] = index.completa_peticion_accion;
                        }
                    );


                    /// Accion finaliza-designacion-equipo-evaluador
                    if ( accionesArray['finaliza-designacion-equipo-evaluador'] == '0' && 
                            ( admin === 1 || dta === 1  || da === 1 ) )
                    {
                        grid.setDisabled(false);
                        Paso9BotonFinalizaEE.setDisabled(false);
                    }
                    else
                    {
                        grid.setDisabled(true);
                        Paso9BotonFinalizaEE.setDisabled(true);
                    }


                    // Accion aprueba-oec-designacion-equipo-evaluador
                    if ( accionesArray['finaliza-designacion-equipo-evaluador'] === '1' && 
                            accionesArray['aprueba-oec-designacion-equipo-evaluador'] === '0' && 
                           oec === 1 )
                    {
                        Paso9BotonApruebaEE.setDisabled(false);
                        //Paso9BotonObservaEE.setDisabled(false);
                    }
                    else
                    {
                        Paso9BotonApruebaEE.setDisabled(true);
                        //Paso9BotonObservaEE.setDisabled(true);
                    }
                    
                    if ( accionesArray['finaliza-designacion-equipo-evaluador'] === '1' &&
                           accionesArray['aprueba-oec-designacion-equipo-evaluador'] === '1' )
                    {
                        sigPasoBtn.setDisabled(false);
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoFinalizado'> Finalizado</span>", false);
                    }
                    else
                    {
                        txtEstado.setText("<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>", false);
                    }
                }
                
                Ext.getBody().unmask();
            },
            failure: function (response, options) {
                Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
            }
        });
    },
 
    
    // Termina accion
    terminaAccion: function ( id_peticion, accion ) {
        var me = this,
                filters = [];

        Ext.getBody().mask('Ejecutando Acción del Paso ...');

        filters.push({property: 'nombre_accion', value: accion});
        filters.push({property: 'fk_id_peticion', value: id_peticion});

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