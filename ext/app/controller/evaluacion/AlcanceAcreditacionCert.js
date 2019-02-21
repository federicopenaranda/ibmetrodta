Ext.define('ibmetrodta.controller.evaluacion.AlcanceAcreditacionCert', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'evaluacion.AlcanceAcreditacionCert'
    ],
    views: [
        'evaluacion.Evaluacion.AlcanceAcreditacionCertLista',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionCertForm',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionCertWindow'
    ],
    refs: [
        {
            ref: 'AlcanceAcreditacionCertLista',
            selector: '[xtype=evaluacion.evaluacion.alcanceacreditacioncertlista]'
        },
        {
            ref: 'AlcanceAcreditacionCertWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacioncertwindow]'
        },
        {
            ref: 'AlcanceAcreditacionCertForm',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacioncertform]'
        },
        {
            ref: 'EvaluacionLista',
            selector: '[xtype=evaluacion.evaluacion.lista]'
        }
    ],
    
    
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacioncertlista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacioncertlista] button#add': {
                    click: this.add
                },
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacioncertlista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacioncertlista] button#delete': {
                    click: this.remove
                },
                'window[xtype=evaluacion.evaluacion.edit.alcanceacreditacioncertwindow] button#save': {
                    click: this.save
                },
                'window[xtype=evaluacion.evaluacion.edit.alcanceacreditacioncertwindow] button#cancel': {
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
        var contEvaluacion = me.getController('evaluacion.Evaluacion');
        
        if ( contEvaluacion.boolEvaluacionEdit === 1)
        {
            var grid2 = me.getEvaluacionLista();
            var dd = grid2.getSelectionModel().getSelection();

            if ( dd.length === 1 )
            {
                var record = dd[0];
                var data = record.getData();

                store.filter( 'fk_id_evaluacion', data['id_evaluacion'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getAlcanceAcreditacionCertLista();
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

        var grid = me.getAlcanceAcreditacionCertLista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.evaluacion.AlcanceAcreditacionCert'),
            grid1 = me.getEvaluacionLista(),
            recSeleccionados = grid1.getSelectionModel().getSelection(),
            contEvaluacion = me.getController('evaluacion.Evaluacion'),
            record1, data1;

        var recSeleccionados = grid1.getSelectionModel().getSelection();
        
        if ( recSeleccionados.length === 1 && contEvaluacion.boolEvaluacionEdit === 1 )
        {
            record1 = recSeleccionados[0];
            data1 = record1.getData();

            record.set('fk_id_evaluacion', data1['id_evaluacion']);
            me.showEditWindow(record);
        }
        else
        {
            if ( contEvaluacion.boolEvaluacionEdit === 0 )
            {
                me.showEditWindow(record);
            }
            else
            {
                console.log('[AlcanceAcreditacionCert] Error al recuperar el ID de la evaluacion');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getAlcanceAcreditacionCertLista(),
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
        var grid = me.getAlcanceAcreditacionCertLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];

        var contEvaluacion = me.getController('evaluacion.Evaluacion');

        // Se esta eliminando un registro del grid de Estado Civil
        // pero de un beneficiario nuevo. Solo se quita del store.
        if ( contEvaluacion.boolEvaluacionEdit === 0 )
        {
            store.remove(record);
        }
        // Se esta eliminando un registro del grid de Estado Civil
        // pero de un beneficiario ya creado. Si es un registro recién creado (phantom == true)
        // solo se quita del store. Si no es un registro recién creado se lo quita del store
        // y de la base de datos (sync).
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
                    msg: '¿Está seguro que desea eliminar este registro?. Esta acción no puede ser deshecha.',
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
                win = me.getAlcanceAcreditacionCertWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('evaluacion.evaluacion.edit.alcanceacreditacioncertwindow', {
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
                grid = me.getAlcanceAcreditacionCertLista(),
                store = grid.getStore();
        
        store.sync();
    }
});