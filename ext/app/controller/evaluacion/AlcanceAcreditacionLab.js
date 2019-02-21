Ext.define('ibmetrodta.controller.evaluacion.AlcanceAcreditacionLab', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'evaluacion.AlcanceAcreditacionLab'
    ],
    views: [
        'evaluacion.Evaluacion.AlcanceAcreditacionLabLista',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionLabForm',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionLabWindow'
    ],
    refs: [
        {
            ref: 'AlcanceAcreditacionLabLista',
            selector: '[xtype=evaluacion.evaluacion.alcanceacreditacionlablista]'
        },
        {
            ref: 'AlcanceAcreditacionLabWindow',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacionlabwindow]'
        },
        {
            ref: 'AlcanceAcreditacionLabForm',
            selector: '[xtype=evaluacion.evaluacion.edit.alcanceacreditacionlabform]'
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
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacionlablista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacionlablista] button#add': {
                    click: this.add
                },
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacionlablista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=evaluacion.evaluacion.alcanceacreditacionlablista] button#delete': {
                    click: this.remove
                },
                'window[xtype=evaluacion.evaluacion.edit.alcanceacreditacionlabwindow] button#save': {
                    click: this.save
                },
                'window[xtype=evaluacion.evaluacion.edit.alcanceacreditacionlabwindow] button#cancel': {
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
        var grid = me.getAlcanceAcreditacionLabLista();
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

        var grid = me.getAlcanceAcreditacionLabLista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.evaluacion.AlcanceAcreditacionLab');
        
        var grid1 = me.getEvaluacionLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        var contEvaluacion = me.getController('evaluacion.Evaluacion');

        if ( recSeleccionados.length === 1 && contEvaluacion.boolEvaluacionEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

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
                console.log('[AlcanceAcreditacionLab] Error al recuperar el ID de la evaluacion');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getAlcanceAcreditacionLabLista(),
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
        var grid = me.getAlcanceAcreditacionLabLista();
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
                    msg: '¿Esta seguro que desea eliminar este alcanceacreditacionlab?. Esta acción no puede ser deshecha.',
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
                win = me.getAlcanceAcreditacionLabWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('evaluacion.evaluacion.edit.alcanceacreditacionlabwindow', {
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
                grid = me.getAlcanceAcreditacionLabLista(),
                store = grid.getStore();
        
        store.sync();
    }
});