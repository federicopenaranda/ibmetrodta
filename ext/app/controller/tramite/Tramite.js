Ext.define('ibmetrodta.controller.tramite.Tramite', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'tramite.UsuarioOec',
        'tramite.OecPeticion',
        'proceso.PeticionEstado'
    ],
    views: [
        'tramite.Tramite.Lista',
        'tramite.Tramite.ListaOec',
        'tramite.Tramite.ListaPeticion'
    ],
    refs: [
        {
            ref: 'ListaUsuarioOec',
            selector: '[xtype=tramite.tramite.listaoec]'
        },
        {
            ref: 'ListaOecPeticion',
            selector: '[xtype=tramite.tramite.listapeticion]'
        },
        {
            ref: 'WindowTramite',
            selector: '[xtype=tramite.tramite.edit.window]'
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
            ref: 'TramiteListaPeticion',
            selector: '[xtype=tramite.tramite.listapeticion]'
        },
        {
            ref: 'WindowPeticionEstado',
            selector: '[xtype=proceso.peticionestado.edit.window]'
        }
    ],


    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=tramite.tramite.listaoec]': {
                    beforerender: this.loadRecords,
                    selectionchange: this.loadDetails
                },
                'grid[xtype=tramite.tramite.listapeticion]': {
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones,
                    itemdblclick: this.abreTramite
                },
                '[xtype=tramite.tramite.listapeticion] button#abrirTramite': {
                    click: this.abreTramite
                },
                '[xtype=tramite.tramite.listapeticion] button#abrirEstadosTramite': {
                    click: this.abrirEstadosTramite
                },
                'panel[xtype=tramite.tramite.edit.form] > toolbar > button#anteriorPaso': {
                    click: this.navegar
                },
                'panel[xtype=tramite.tramite.edit.form] > toolbar > button#siguientePaso': {
                    click: this.navegar
                },
                'panel[xtype=tramite.tramite.edit.form] > toolbar > button#actualizarPaso': {
                    click: this.actualizar
                },
                'panel[xtype=tramite.tramite.edit.form]': {
                    afterrender: this.configPanel
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    abrirEstadosTramite: function () {
        var me = this,
                win = me.getWindowPeticionEstado();
        
        if (!win)
        {
            win = Ext.widget('proceso.peticionestado.edit.window', {
                title: 'Administrar Estados de Trámite'
            });
        }
        
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    configPanel: function ( panel, eOpts ) {
        var me = this,
                form = me.getTramiteForm().down(),
                layout = form.getLayout(),
                //antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                //sigPasoBtn = me.getTramiteSiguientePasoBoton(),
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(),
                
                paso;
        
        /*if (layout.getPrev() === false )
        {
            antPasoBtn.setDisabled(true);
        }
        
        if (layout.getNext() === false )
        {
            sigPasoBtn.setDisabled(true);
        }*/
        
        switch (dataPeticion.nombre_estado)
        {
            case 'tramite-acreditacion-iniciado': 
                paso = 1;
                break;

            case 'formulario-002-llenado': 
                paso = 2;
                break;

            case 'cotizacion-pertinencia-aprobada': 
                paso = 3;
                break;

            case 'pertinencia-aprobada-consejo': 
                paso = 4;
                break;

            case 'cotizacion-apertura-expediente-aprobada': 
                paso = 5;
                break;

            case 'formularios-50s-llenados': 
                paso = 6;
                break;

            case 'carga-archivos-base-terminada': 
                paso = 7;
                break;

            case 'cotizacion-revision-documental-aprobada': 
                paso = 8;
                break;

            case 'documentacion-aprobada-ra': 
                paso = 9;
                break;

            case 'equipo-evaluador-asignado': 
                paso = 10;
                break;

            case 'cotizacion-evaluacion-aprobada': 
                paso = 11;
                break;

            case 'documentacion-aprobada-equipo-evaluador': 
                paso = 12;
                break;

            case 'formulario-024-llenado': 
                paso = 13;
                break;

            case 'carga-formularios-adicionales-finalizada': 
                paso = 14;
                break;

            case 'archivos-plan-accion-cargados': 
                paso = 15;
                break;

            case 'formulario-050-llenado': 
                paso = 16;
                break;

            case 'documentacion-aprobada-comite-tecnico': 
                paso = 17;
                break;

            case 'formulario-026-llenado': 
                paso = 18;
                break;

            case 'certificado-acreditacion-generado': 
                paso = 19;
                break;

            case 'tramite-aprobado-consejo': 
                paso = 20;
                break;

            default:
                paso = 1;
                break;
        }
        
        console.log("Paso: ");
        console.log(paso);
        
        console.log("Estado: ");
        console.log(dataPeticion.nombre_estado);
        
        /*antPasoBtn.setDisabled(false);
        
        if ( (dataPeticion.fk_id_proceso == 2 || 
                dataPeticion.fk_id_proceso == 3 || 
                dataPeticion.fk_id_proceso == 5) 
                && dataPeticion.nombre_estado == 'documentacion-aprobada-ra' )
        {
            antPasoBtn.setDisabled(true);
        }
        else
        {
            if ( (dataPeticion.fk_id_proceso == 4 || dataPeticion.fk_id_proceso == 6 ) 
                && dataPeticion.nombre_estado == 'cotizacion-apertura-expediente-aprobada' )
            {
                antPasoBtn.setDisabled(true);
            }
            else
            {
                if ( dataPeticion.fk_id_proceso == 1
                        && dataPeticion.nombre_estado == 'tramite-acreditacion-iniciado' )
                {
                    antPasoBtn.setDisabled(true);
                }
                else
                {
                    if ( dataPeticion.fk_id_proceso == 1
                            && dataPeticion.nombre_estado == 'tramite-aprobado-consejo' )
                    {
                        sigPasoBtn.setDisabled(true);
                    }
                }
                
            }
        }*/
        
        
        
        /*else
        {
            console.log('antPasoBtn.show 2');
            antPasoBtn.setDisabled(false);
        }*/
        
        
        
       /*else
        {
            console.log('antPasoBtn.show 3');
            antPasoBtn.setDisabled(false);
        }*/
        

        layout.setActiveItem(paso - 1);
    },
    
    
    abreTramite: function () {
        var me = this,
                win = me.getWindowTramite();
        
        if (!win) {
            win = Ext.widget('tramite.tramite.edit.window', {
                title: 'Trámite'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    actualizar: function(boton, evento) {
        var me = this,
                layout = me.getTramiteForm().down().getLayout(),
                active = layout.getActiveItem(),
                xtype = active.getXType(),
                paso = xtype.split('.'),
                last = paso[paso.length - 1],
                cont = last.replace('paso',''),
                cont2 = me.getController('tramite.Paso'+cont);
        
        cont2.configPanelPaso();
    },
    
    
    navegar: function(boton, evento) {
        var me = this,
                layout = me.getTramiteForm().down().getLayout(),
                antPasoBtn = me.getTramiteAnteriorPasoBoton(),
                sigPasoBtn = me.getTramiteSiguientePasoBoton();
        
        if ( boton.itemId === 'siguientePaso' )
        {
            layout.next();
        }
        
        if ( boton.itemId === 'anteriorPaso' )
        {
            layout.prev();
        }

        /*sigPasoBtn.setDisabled(!layout.getNext());
        antPasoBtn.setDisabled(!layout.getPrev());*/
    },


    manejaBotones: function (record, index, eOpts) {
        var me = this,
                grid = me.getListaOecPeticion(),
                records = grid.getSelectionModel().getSelection(),
                botonAbrirTramite = grid.down("[xtype='toolbar'] button#abrirTramite"),
                botonAbrirPasosTramite = grid.down("[xtype='toolbar'] button#abrirEstadosTramite");

        if (records.length > 0)
        {
            botonAbrirTramite.enable();
            botonAbrirPasosTramite.enable();
        }
        else
        {
            botonAbrirTramite.disable();
            botonAbrirPasosTramite.disable();
        }
    },


    loadRecords: function(grid, eOpts) {
        var store = grid.getStore();
        store.clearFilter(true);
        store.load();
    },


    loadDetails: function( ts, selected, eOpts ) {
        var me = this,
            grid = me.getListaOecPeticion(),
            grid2 = me.getListaUsuarioOec(),
            selec, values,
            store = grid.getStore(),
            filters=[];
    
        selec = grid2.getSelectionModel().getSelection()[0];
        
        if ( typeof(selec) === 'undefined' )
            return;
        
        values = selec.getData();

            filters.push({
                property: 'fk_id_oec',
                value: values.id_oec
            });

        store.clearFilter( true );
        store.filter( filters );
    }
});