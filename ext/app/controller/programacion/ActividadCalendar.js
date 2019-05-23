Ext.define('ibmetrodta.controller.programacion.ActividadCalendar', {
    extend: 'ibmetrodta.controller.Base',
    boolActividadEdit: 0,
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
            ref: 'Calendario',
            selector: '[xtype=calendar.calendar]'
        }
    ],
    
    
    init: function() {
        this.listen({
            controller: {},
            component: {
                '[xtype=calendar.calendar]': {
                    beforerender: this.loadRecords
                }
            },
            global: {
            },
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var me = this,
                cal = me.getCalendario(),
                store = cal.eventStore;
       
        store.load();
    },


    add: function(rec, e, eOpts) {
        var me = this,
                record = Ext.create('ibmetrodta.model.programacion.Actividad');
        
        me.boolActividadEdit = 0;
        
        var fechaInicial = Ext.util.Format.date(rec.fecha_inicial_actividad.StartDate, 'Y-m-d');

        record.set('fecha_inicial_actividad', fechaInicial);
        
        var contActividad = me.getController('programacion.Actividad');
        contActividad.boolDesdeCalendario = 1;
        
        
                
        var cal = me.getCalendario();
        console.log('Calendario: ');
        console.log( cal );
        console.log( cal.eventStore );
        

        // show window
        me.showEditWindow(record);
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
    }
});