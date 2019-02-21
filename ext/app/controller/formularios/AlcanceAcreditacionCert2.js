Ext.define('ibmetrodta.controller.formularios.AlcanceAcreditacionCert2', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'formularios.AlcanceAcreditacionCert2'
    ],
    views: [
        'formularios.AnexoConvenio.AlcanceAcreditacionCert2Lista',
        'formularios.AnexoConvenio.edit.AlcanceAcreditacionCert2Form',
        'formularios.AnexoConvenio.edit.AlcanceAcreditacionCert2Window'
    ],
    refs: [
        {
            ref: 'AlcanceAcreditacionCert2Lista',
            selector: '[xtype=formularios.anexoconvenio.alcanceacreditacioncert2lista]'
        },
        {
            ref: 'AlcanceAcreditacionCert2Window',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioncert2window]'
        },
        {
            ref: 'AlcanceAcreditacionCert2Form',
            selector: '[xtype=formularios.anexoconvenio.edit.alcanceacreditacioncert2form]'
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
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioncert2lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioncert2lista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioncert2lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=formularios.anexoconvenio.alcanceacreditacioncert2lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=formularios.anexoconvenio.edit.alcanceacreditacioncert2window] button#save': {
                    click: this.save
                },
                'window[xtype=formularios.anexoconvenio.edit.alcanceacreditacioncert2window] button#cancel': {
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
        var me = this;
        var grid = me.getAlcanceAcreditacionCert2Lista();
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
        var me = this;

        var grid = me.getAlcanceAcreditacionCert2Lista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.formularios.AlcanceAcreditacionCert2');
        
        var grid1 = me.getAnexoConvenioLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        var contAnexoConvenio = me.getController('formularios.AnexoConvenio');

        if ( recSeleccionados.length === 1 && contAnexoConvenio.boolAnexoConvenioEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_anexo_convenio', data1['id_anexo_convenio']);

            me.showEditWindow(record);
        }
        else
        {
            if ( contAnexoConvenio.boolAnexoConvenioEdit === 0 )
            {
                me.showEditWindow(record);
            }
            else
            {
                console.log('[AlcanceAcreditacionCert2] Error al recuperar el ID del anexoconvenio');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getAlcanceAcreditacionCert2Lista(),
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
        var me = this;
        var grid = me.getAlcanceAcreditacionCert2Lista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];

        var contAnexoConvenio = me.getController('formularios.AnexoConvenio');

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
                    msg: '¿Esta seguro que desea eliminar este alcanceacreditacioncert2?. Esta acción no puede ser deshecha.',
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
                win = me.getAlcanceAcreditacionCert2Window(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('formularios.anexoconvenio.edit.alcanceacreditacioncert2window', {
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
                grid = me.getAlcanceAcreditacionCert2Lista(),
                store = grid.getStore();
        
        store.sync();
    }
});