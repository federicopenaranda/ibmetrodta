Ext.define('ibmetrodta.controller.proceso.PeticionEstado', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'proceso.PeticionEstado'
    ],
    views: [
        'proceso.PeticionEstado.Lista',
        'proceso.PeticionEstado.edit.Window'
    ],
    refs: [
        {
            ref: 'PeticionEstadoLista',
            selector: '[xtype=proceso.peticionestado.lista]'
        },
        {
            ref: 'PeticionEstadoWindow',
            selector: '[xtype=proceso.peticionestado.edit.window]'
        },
        {
            ref: 'TramiteListaOec',
            selector: '[xtype=tramite.tramite.listaoec]'
        },
        {
            ref: 'TramiteListaPeticion',
            selector: '[xtype=tramite.tramite.listapeticion]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                /////////////////////////////////////////////
                // [INICIO] PeticionEstado
                /////////////////////////////////////////////
                'grid[xtype=proceso.peticionestado.lista]': {
                    beforerender: this.loadRecords,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.peticionestado.lista] button#habilitar': {
                    click: this.habilitaPeticionEstado
                }
                /////////////////////////////////////////////
                // [FIN] PeticionEstado
                /////////////////////////////////////////////
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var me = this,
                store = grid.getStore(),
                
                peticionLista = me.getTramiteListaPeticion(),
                recPeticion = peticionLista.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData();
        
        store.clearFilter(true);

        store.filter( "fk_id_peticion", dataPeticion.id_peticion );
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this,
                grid = me.getPeticionEstadoLista(),
                records = grid.getSelectionModel().getSelection(),
                botonHabilitar = grid.down("[xtype='toolbar'] button#habilitar");

        if (records.length > 0)
        {
            botonHabilitar.enable();
        }
        else
        {
            botonHabilitar.disable();
        }
    },


    habilitaPeticionEstado: function(button, e, eOpts) {
        var me = this,
        
                peticionEstadoLista = me.getPeticionEstadoLista(),
                recPeticionEstado = peticionEstadoLista.getSelectionModel().getSelection()[0],
                dataPeticionEstado = recPeticionEstado.getData();

        Ext.data.JsonP.request({
            url: ibmetrodta.app.globals.globalServerPath + 'peticion010401/admEstadoProceso',
            params: {
                fk_id_peticion_estado: dataPeticionEstado.id_peticion_estado,
                fk_id_peticion: dataPeticionEstado.fk_id_peticion
            },
            success: function (response, options) {
                Ext.Msg.alert('Estado Cambiado', 'Se realizó el cambio de estado al trámite.');
            },
            failure: function (response, options) {
                Ext.Msg.alert('Atención', 'Un error ocurrió durante su petición. Por favor intente nuevamente.');
            }
        });
    }
});