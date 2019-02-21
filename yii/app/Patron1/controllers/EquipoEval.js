Ext.define('ibmetrodta.controller.formularios;display.EquipoEval', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'formularios;display.EquipoEval'
    ],
    views: [
        'formularios;display.EvalTecnica.EquipoEvalLista',
        'formularios;display.EvalTecnica.edit.EquipoEvalForm',
        'formularios;display.EvalTecnica.edit.EquipoEvalWindow'
    ],
    refs: [
        {
            ref: 'EquipoEvalLista',
            selector: '[xtype=formularios;display.evaltecnica.equipoevallista]'
        },
        {
            ref: 'EquipoEvalWindow',
            selector: '[xtype=formularios;display.evaltecnica.edit.equipoevalwindow]'
        },
        {
            ref: 'EquipoEvalForm',
            selector: '[xtype=formularios;display.evaltecnica.edit.equipoevalform]'
        },
        {
            ref: 'EvalTecnicaLista',
            selector: '[xtype=formularios;display.evaltecnica.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=formularios;display.evaltecnica.equipoevallista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=formularios;display.evaltecnica.equipoevallista] button#add': {
                    click: this.add
                },
                'grid[xtype=formularios;display.evaltecnica.equipoevallista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=formularios;display.evaltecnica.equipoevallista] button#delete': {
                    click: this.remove
                },
                'window[xtype=formularios;display.evaltecnica.edit.equipoevalwindow] button#save': {
                    click: this.save
                },
                'window[xtype=formularios;display.evaltecnica.edit.equipoevalwindow] button#cancel': {
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
        var contEvalTecnica = me.getController('formularios;display.EvalTecnica');
        
        if ( contEvalTecnica.boolEvalTecnicaEdit === 1)
        {
            var grid2 = me.getEvalTecnicaLista();
            var dd = grid2.getSelectionModel().getSelection();

            if ( dd.length === 1 )
            {
                var record = dd[0];
                var data = record.getData();

                store.filter( 'fk_id_eval_tecnica', data['id_eval_tecnica'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getEquipoEvalLista();
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

        var grid = me.getEquipoEvalLista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('ibmetrodta.model.formularios;display.EquipoEval');
        
        var grid1 = me.getEvalTecnicaLista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        var contEvalTecnica = me.getController('formularios;display.EvalTecnica');

        if ( recSeleccionados.length === 1 && contEvalTecnica.boolEvalTecnicaEdit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('fk_id_eval_tecnica', data1['id_eval_tecnica']);

            me.showEditWindow(record);
        }
        else
        {
            if ( contEvalTecnica.boolEvalTecnicaEdit === 0 )
            {
                me.showEditWindow(record);
            }
            else
            {
                console.log('[EquipoEval] Error al recuperar el ID de la evaltecnica');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.getEquipoEvalLista(),
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
        var grid = me.getEquipoEvalLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];

        var contEvalTecnica = me.getController('formularios;display.EvalTecnica');

        // Se esta eliminando un registro del grid de Estado Civil
        // pero de un beneficiario nuevo. Solo se quita del store.
        if ( contEvalTecnica.boolEvalTecnicaEdit === 0 )
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
                    msg: '¿Esta seguro que desea eliminar este equipoeval?. Esta acción no puede ser deshecha.',
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
                win = me.getEquipoEvalWindow(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('formularios;display.evaltecnica.edit.equipoevalwindow', {
                title: isNew ? 'Añadir EquipoEval' : 'Editar EquipoEval'
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
                grid = me.getEquipoEvalLista(),
                store = grid.getStore();
        
        store.sync();
    }
});