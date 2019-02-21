Ext.define('ibmetrodta.controller.formularios.PersonalAutorizado', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'formularios.PersonalAutorizado'
    ],
    views: [
        'formularios.AnexoConvenio.PersonalAutorizadoLista',
        'formularios.AnexoConvenio.Lista'
    ],
    refs: [
        {
            ref: 'PersonalAutorizadoLista',
            selector: '[xtype=formularios.anexoconvenio.personalautorizado.personalautorizadolista]'
        },
        {
            ref: 'AnexoConvenioLista',
            selector: '[xtype=formularios.anexoconvenio.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=formularios.anexoconvenio.personalautorizadolista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios.anexoconvenio.personalautorizadolista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios.anexoconvenio.personalautorizadolista] button#edit': {
                    click: this.edit2
                },
                'grid[xtype=formularios.anexoconvenio.personalautorizadolista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=formularios.anexoconvenio.personalautorizadolista] gridview': {
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
        var contAnexoConvenio = me.getController('formularios.AnexoConvenio');
        
        if ( contAnexoConvenio.boolAnexoConvenioEdit === 1)
        {
            var grid2 = me.getAnexoConvenioLista();
            var dd = grid2.getSelectionModel().getSelection();

            if ( dd.length === 1 )
            {
                var record = dd[0];
                var data = record.getData();

                store.filter( 'fk_id_anexo_convenio', data['id_anexo_convenio'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this,
                grid = me.getPersonalAutorizadoLista(),
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
                grid = me.getPersonalAutorizadoLista(),
                plugin = grid.editingPlugin;

        plugin.startEdit(records[ 0 ], 0);
    },


    edit2: function() {
        var me = this,
                grid = me.getPersonalAutorizadoLista(),
                plugin = grid.editingPlugin,
                record = grid.getSelectionModel().getSelection()[0];

        plugin.startEdit(record, 0);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.formularios.PersonalAutorizado');
        
        var grid1 = me.getAnexoConvenioLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        
        var grid2 = me.getPersonalAutorizadoLista();
        var store2 = grid2.getStore();
        var contAnexoConvenio = me.getController('formularios.AnexoConvenio');

        if ( recSeleccionados.length === 1 && contAnexoConvenio.boolAnexoConvenioEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_anexo_convenio', data1['id_anexo_convenio']);

            store2.insert(0, record);
            grid2.cellEditing.startEditByPosition({
                row: 0, 
                column: 0
            });
        }
        else
        {
            if ( contAnexoConvenio.boolAnexoConvenioEdit === 0 )
            {
                store2.insert(0, record);
                grid2.cellEditing.startEditByPosition({
                    row: 0, 
                    column: 0
                });
            }
            else
            {
                console.log('[PersonalAutorizado] Error al recuperar el ID del anexoconvenio');
                return 'Error';
            }
        }
    },


    remove: function( button, e, eOpts ) {
        var me = this,
                grid = me.getPersonalAutorizadoLista(),
                store = grid.getStore(),
                record = grid.getSelectionModel().getSelection()[0],
                contAnexoConvenio = me.getController('formularios.AnexoConvenio');
        
        if ( contAnexoConvenio.boolAnexoConvenioEdit === 0 )
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
                grid = me.getPersonalAutorizadoLista(),
                store = grid.getStore();
        
        store.sync();
    }
});