Ext.define('ibmetrodta.controller.programacion.Actividad', {
    extend: 'ibmetrodta.controller.Base',
    boolActividadEdit: 0,
    boolDesdeCalendario: 0,
    boolSoloVista: 0,
    stores: [
        'programacion.Actividad2'
    ],
    views: [
        'programacion.Actividad.Lista',
        'programacion.Actividad.edit.ActividadForm',
        'programacion.Actividad.edit.Window'
    ],
    refs: [
        {
            ref: 'ActividadLista',
            selector: '[xtype=programacion.actividad.lista]'
        },
        {
            ref: 'ActividadWindow',
            selector: '[xtype=programacion.actividad.edit.window]'
        },
        {
            ref: 'ActividadForm',
            selector: '[xtype=programacion.actividad.edit.form]'
        },
        {
            ref: 'ActividadUsuarioLista',
            selector: '[xtype=programacion.actividadusuario.lista]'
        },
        {
            ref: 'ActividadSearchWindow',
            selector: '[xtype=programacion.actividad.search.window]'
        },
        {
            ref: 'ActividadSearchForm',
            selector: '[xtype=programacion.actividad.search.form]'
        },
        {
            ref: 'ActividadCalendar',
            selector: '[xtype=calendar.calendar]'
        },
        {
            ref: 'ActividadCalendarGuardar',
            selector: '[xtype=programacion.actividad.edit.window] button#save'
        }
    ],
    
    
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=programacion.actividad.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=programacion.actividad.lista] button#add': {
                    click: this.add
                },
                '*[id^=calendarpanel]': {
                    dayclick: this.diaClick,
                    eventclick: this.actividadClick
                },
                'grid[xtype=programacion.actividad.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=programacion.actividad.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=programacion.actividad.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=programacion.actividad.edit.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=programacion.actividad.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=programacion.actividad.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=programacion.actividad.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=programacion.actividad.search.window] button#cancel': {
                    click: this.close
                },
                'window[xtype=programacion.actividad.edit.window]': {
                    afterrender: this.actualizaBoton
                },
                '[xtype=calendarpanel]': {
                    afterrender: this.loadCalendar
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    actualizaBoton: function () {
        var me = this;
        var bot = me.getActividadCalendarGuardar();
        
        (me.boolSoloVista === 1) ? bot.hide() : bot.show();
    },
    
    
    actividadClick: function (view, rec, c) {
        var me = this;
        me.boolSoloVista = 1;
        me.showEditWindow(rec);
    },
    
    
    loadCalendar: function (a) {
        //console.log('loadCalendar');
        var store = Ext.data.StoreManager.lookup('programacion.Actividad2');
        //console.log(store);
        store.load();
    },

    
    diaClick: function (objeto, fecha, opt) {
        var me = this,
                record = Ext.create('ibmetrodta.model.programacion.Actividad');
        
        record.set('fecha_inicial_actividad', fecha);

        me.boolActividadEdit = 0;
        me.boolDesdeCalendario = 1;

        // show window
        me.showEditWindow(record);
    },
    
    
    clearSearch: function( button, e, eOpts ) {
        var me = this,
            grid = me.getActividadLista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },


    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getActividadSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'programacion.actividad.search.window', {
                title: 'Buscar Actividad'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },


    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getActividadSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getActividadLista(),
            store = grid.getStore(),
            values = form.getValues(),
            filters=[];
        // loop over values to create filters
        Ext.Object.each( values, function( key, value, myself ) {
            if( !Ext.isEmpty( value ) ) {
                filters.push({
                    property: key,
                    value: value
                });
            }
        });
        // clear store filters
        store.clearFilter( true );
        store.filter( filters );
        // close window
        win.hide();
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.getActividadLista();
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


    loadRecords: function(grid, eOpts) {
        var me = this,
                store = grid.getStore();
        
        store.load();
    },


    edit: function(view, record, item, index, e, eOpts) {
        var me = this,
                grid = me.getActividadLista();
        
        me.boolActividadEdit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.programacion.Actividad');
        
        me.boolActividadEdit = 0;
        me.boolSoloVista = 0;

        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {

        var me = this,
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                data = record.getData(),
                callbacks, extra, grid, store;
                
        if ( me.boolDesdeCalendario == 0 )
        {
            grid = me.getActividadLista();
            store = grid.getStore();
        }
        else
        {
            store = me.getStore('programacion.Actividad');
        }
        
        

        // Valida el formulario
        if ( form.isValid() )
        {
            if (me.boolActividadEdit === 0 && record.phantom)
            {
                values['actividadUsuario050103s'] = me.saveTablaSecundaria(me.getActividadUsuarioLista());
            }
            else
            {
                console.log('programacion.ActividadUsuario.sincronizar()');
                me.getController('programacion.ActividadUsuario').sincronizar();
                values['actividadUsuario050103s'] = "";
            }
            
            record.set(values);
            record.set('fecha_actividad', 1);
           
            
            extra = '{"id_actividad":null,' + 
                        '"fk_id_oec":"'+ values['fk_id_oec'] +'",' +
                        '"fk_id_tipo_actividad":"'+ values['fk_id_tipo_actividad'] +'",' +
                        '"fk_id_tipo_curso":"'+ values['fk_id_tipo_curso'] +'",' +
                        '"codigo_actividad":null,' +
                        '"fecha_actividad":"'+ values['fecha_actividad'] +'",' +
                        '"nombre_actividad":"'+ values['nombre_actividad'] +'",' +
                        '"descripcion_actividad":"'+ values['descripcion_actividad'] +'",' +
                        '"fecha_inicial_actividad":"'+ values['fecha_inicial_actividad'] +'",' +
                        '"fecha_final_actividad":"'+ values['fecha_final_actividad'] +'",' +
                        '"prs_actividad":"'+ values['prs_actividad'] +'",' +
                        '"horas_actividad":"'+ values['horas_actividad'] +'",' +
                        '"actividadUsuario050103s": "' + values['actividadUsuario050103s'] + '"}';
                
                
                /*,' +
                        '"nombre_oec":"'+ values['nombre_oec'] +'",' +
                        '"nombre_tipo_curso":"'+ values['nombre_tipo_curso'] +'",' +
                        '"nombre_tipo_actividad": "'+ values['nombre_tipo_actividad'] +'"*/

            Ext.data.JsonP.request({
                url: ibmetrodta.app.globals.globalServerPath + 'actividad050101/validarActividad',
                params: {
                   records: extra
                },
                success: function (response, options) {
                    
                    if (response.meta.success === 'false')
                    {
                        Ext.Msg.alert('Error al crear Actividad', response.meta.msg);
                        return;
                    }
                    else
                    {
                        if (record.dirty)
                        {
                            callbacks = {
                                success: function(records, operation) {
                                    store.reload();
                                    win.close();
                                    me.loadCalendar();
                                },
                                failure: function(records, operation) {
                                    // if failure, reject changes in store
                                    store.rejectChanges();
                                }
                            };
                            // mask to prevent extra submits
                            Ext.getBody().mask('Guardando Actividad ...');
                            // if new record...
                            if (record.phantom) {
                                // reject any other changes
                                store.rejectChanges();
                                // add the new record
                                store.add(record);
                            }

                            store.sync(callbacks);

                            if ( me.boolDesdeCalendario == 0 )
                            {
                                grid.getSelectionModel().clearSelections();
                            }                

                            me.boolDesdeCalendario = 0;
                        }
                        
                    }
                },
                failure: function (response, options) {
                    Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
                    console.log('response');
                    console.log(response);
                }
            });
            


            /*if (record.dirty)
            {
                
            }
            else
            {
                console.log('en else:  record.dirty');
                console.log(record.dirty);
            }*/
        }
        else
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
    },


    close: function(button, e, eOpts) {
        var win = button.up('window');
        win.close();
    },


    remove: function() {
        var me = this;

        var grid = me.getActividadLista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta Actividad?. Esta acción no puede ser deshecha.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(buttonId, text, opt) 
            {
                if (buttonId === 'yes') {
                    store.remove(record);
                    store.sync({
                        failure: function(records, operation) {
                            store.rejectChanges();
                        }
                    });
                }
            }
        });
    },


    showEditWindow: function(record) {
        var me = this,
                win = me.getActividadWindow(),
                isNew = record.phantom;

        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('programacion.actividad.edit.window', {
                title: isNew ? 'Añadir Actividad' : 'Editar Actividad'
            });
        }

        // show window
        win.show();
        win.doComponentLayout();

        // load form with data
        win.down('form').loadRecord(record);
    },


    saveTablaSecundaria: function ( grid ) {
        var store = grid.getStore(),
            records = store.getModifiedRecords();

        // Guarda registros de estado de una xxx nueva
        if (records.length > 0)
        {
            var array = [];

            for (var i = 0; i < records.length; i++) {
                var rec = records[i].getData();
                var tmp = rec;
                array.push(tmp);
            }

            var obj = Ext.encode(array);
            return obj;
        }
        else
        {
            return '';
        }
    },


    cancel: function(editor, context, eOpts) {
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    }
});