Ext.define('ibmetrodta.controller.proceso.PeticionEstado', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'proceso.PeticionEstado'
    ],
    views: [
        'proceso.Peticion.PeticionEstadoLista',
        'proceso.Peticion.Lista'
    ],
    refs: [
        {
            ref: 'PeticionEstadoLista',
            selector: '[xtype=proceso.peticion.peticionestado.peticionestadolista]'
        },
        {
            ref: 'PeticionLista',
            selector: '[xtype=proceso.peticion.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=proceso.peticion.peticionestadolista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=proceso.peticion.peticionestadolista] button#add': {
                    click: this.add
                },
                'grid[xtype=proceso.peticion.peticionestadolista] button#edit': {
                    click: this.edit2
                },
                'grid[xtype=proceso.peticion.peticionestadolista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=proceso.peticion.peticionestadolista] gridview': {
                    itemadd: this.edit
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var me = this;
        var store = grid.getStore();

        store.clearFilter(true);
        var contPeticion = me.getController('proceso.Peticion');
        
        if ( contPeticion.boolPeticionEdit === 1)
        {
            var grid2 = me.getPeticionLista();
            var dd = grid2.getSelectionModel().getSelection();

            if ( dd.length === 1 )
            {
                var record = dd[0];
                var data = record.getData();

                store.filter( 'fk_id_peticion', data['id_peticion'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this,
                grid = me.getPeticionEstadoLista(),
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


    cancel: function(editor, context, eOpts) {
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    },


    edit: function(records, index, node, eOpts) {
        var me = this,
                grid = me.getPeticionEstadoLista(),
                plugin = grid.editingPlugin;

        plugin.startEdit(records[ 0 ], 0);
    },


    edit2: function() {
        var me = this,
                grid = me.getPeticionEstadoLista(),
                plugin = grid.editingPlugin,
                record = grid.getSelectionModel().getSelection()[0];

        plugin.startEdit(record, 0);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.proceso.PeticionEstado');
        
        var grid1 = me.getPeticionLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        
        var grid2 = me.getPeticionEstadoLista();
        var store2 = grid2.getStore();
        var contPeticion = me.getController('proceso.Peticion');

        if ( recSeleccionados.length === 1 && contPeticion.boolPeticionEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_peticion', data1['id_peticion']);

            store2.insert(0, record);
            grid2.cellEditing.startEditByPosition({
                row: 0, 
                column: 0
            });
        }
        else
        {
            if ( contPeticion.boolPeticionEdit === 0 )
            {
                store2.insert(0, record);
                grid2.cellEditing.startEditByPosition({
                    row: 0, 
                    column: 0
                });
            }
            else
            {
                console.log('[PeticionEstado] Error al recuperar el ID del peticion');
                return 'Error';
            }
        }
    },


    remove: function( button, e, eOpts ) {
        var me = this,
                grid = me.getPeticionEstadoLista(),
                store = grid.getStore(),
                record = grid.getSelectionModel().getSelection()[0],
                contPeticion = me.getController('proceso.Peticion');
        
        if ( contPeticion.boolPeticionEdit === 0 )
        {
            store.remove(record);
        }
        else
        {
            if ( record.phantom )
            {
                store.remove(record);
            }
            else
            {
                Ext.Msg.confirm({
                    title: 'Atención',
                    msg: '¿Esta seguro que desea eliminar este Teléfono?. Esta acción no puede ser deshecha.',
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(buttonId, text, opt) 
                    {
                        if (buttonId === 'yes') {
                            store.remove(record);
                        }
                    }
                });
            }
        }
    },


    sincronizar: function() {
        var me = this,
                grid = me.getPeticionEstadoLista(),
                store = grid.getStore();
        
        store.sync();
    }
});