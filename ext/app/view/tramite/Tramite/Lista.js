Ext.define('ibmetrodta.view.tramite.Tramite.Lista', {
    extend: 'Ext.Panel',
    alias: 'widget.tramite.tramite.lista',
    require: [
        'ibmetrodta.view.tramite.Tramite.ListaOec',
        'ibmetrodta.view.tramite.Tramite.ListaPeticion'
    ],
    title: 'Revisión de Tramites',
    iconCls: 'icon_gear',
    minHeight: 250,
    header: false,
    frame: false,
    //layout: 'border',
    initComponent: function () {
        var me = this,
                gridMaestro = {
                    xtype: 'tramite.tramite.listaoec',
                    iconCls: 'icon_tag',
                    store: Ext.create( 'ibmetrodta.store.tramite.UsuarioOec', {
                            pageSize: 10
                    })
                },
                gridDetalle = {
                    xtype: 'tramite.tramite.listapeticion',
                    title: 'Trámites',
                    iconCls: 'icon_tag',
                    store: Ext.create( 'ibmetrodta.store.tramite.OecPeticion', {
                            pageSize: 10
                    })
                },
                gridMaestro2, gridDetalle2;
                
        gridMaestro2 = Ext.widget(gridMaestro);
        gridDetalle2 = Ext.widget(gridDetalle);
        
        Ext.applyIf(me, {
            items: [
                gridMaestro2, 
                gridDetalle2
            ]
        });
        me.callParent(arguments);
    }
});