Ext.define('ibmetrodta.controller.formularios.AlcanceAcreditacionInsp2', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'formularios.AlcanceAcreditacionInsp2'
    ],
    views: [
        'formularios.AnexoConvenio.AlcanceAcreditacionInsp2Lista',
        'formularios.AnexoConvenio.edit.AlcanceAcreditacionInsp2Form',
        'formularios.AnexoConvenio.edit.AlcanceAcreditacionInsp2Window'
    ],
    refs: [
        {
            ref: 'AlcanceAcreditacionInsp2Lista',
            selector: '[xtype=formularios.anexoconvenio.alcanceacreditacioninsp2lista]'
        },
        {
            ref: 'AlcanceAcreditacionInsp2Window',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioninsp2window]'
        },
        {
            ref: 'AlcanceAcreditacionInsp2Form',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioninsp2form]'
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
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioninsp2lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioninsp2lista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioninsp2lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioninsp2lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=formularios.anexoconvenio.edit.alcanceacreditacioninsp2window] button#save': {
                    click: this.save
                },
                'window[xtype=formularios.anexoconvenio.edit.alcanceacreditacioninsp2window] button#cancel': {
                    click: this.close
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
        var cont = me.getController('formularios.AnexoConvenio');
        
        if ( cont.boolAnexoConvenioEdit === 1)
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
        var me = this;
        var grid = me.getAlcanceAcreditacionInsp2Lista();
        var records = grid.getSelectionModel().getSelection();

        var botonEdit = grid.down("[xtype='toolbar'] button#edit");
        var botonDelete = grid.down("[xtype='toolbar'] button#delete");

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
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    },


    edit: function(records, index, node, eOpts) {
        var me = this,
                grid = me.getAlcanceAcreditacionInsp2Lista(),
                record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.formularios.AlcanceAcreditacionInsp2');
        
        var grid1 = me.getAnexoConvenioLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        var cont = me.getController('formularios.AnexoConvenio');

        if ( recSeleccionados.length === 1 && cont.boolAnexoConvenioEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_anexo_convenio', data1['id_anexo_convenio']);

            me.showEditWindow(record);
        }
        else
        {
            if ( cont.boolAnexoConvenioEdit === 0 )
            {
                me.showEditWindow(record);
            }
            else
            {
                console.log('[AlcanceAcreditacionInsp2] Error al recuperar el ID del formulario');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getAlcanceAcreditacionInsp2Lista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        record.set(values);

        if (!record.dirty) {
            win.close();
            return;
        }

        if ( form.isValid() )
        {
            var rowIndex = store.indexOf(record);
            ( rowIndex === -1 ) ? store.add(record) : form.updateRecord(record);

            win.close();
        }
        else
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
    },
            

    close: function(button, e, eOpts) {
        var me = this,
                win = button.up('window');
        // close the window
        win.close();
    },


    remove: function() {
        var me = this,
                grid = me.getAlcanceAcreditacionInsp2Lista(),
                store = grid.getStore(),
                record = grid.getSelectionModel().getSelection()[0];

        var cont = me.getController('formularios.AnexoConvenio');

        if ( cont.boolAnexoConvenioEdit === 0 )
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
                    msg: '¿Esta seguro que desea eliminar este Alcance?. Esta acción no puede ser deshecha.',
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


    showEditWindow: function(record) {
        var me = this,
                win = me.getAlcanceAcreditacionInsp2Window(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('formularios.anexoconvenio.edit.alcanceacreditacioninsp2window', {
                title: isNew ? 'Añadir Alcance de Acreditación' : 'Editar Alcance de Acreditación'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
        // load form with data
        win.down('form').loadRecord(record);
    },


    sincronizar: function() {
        var me = this,
                grid = me.getAlcanceAcreditacionInsp2Lista(),
                store = grid.getStore();
        
        store.sync();
    }
});