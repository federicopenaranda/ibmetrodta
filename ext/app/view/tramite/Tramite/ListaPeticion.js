Ext.define('ibmetrodta.view.tramite.Tramite.ListaPeticion', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tramite.tramite.listapeticion',
    title: 'Trámites',
    iconCls: 'icon_gear',
    loadMask: true,
    store: 'OecPeticion',
    region: 'center',
    overflowY: 'auto',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                items: [
                    {
                        text: 'Tipo de Proceso',
                        dataIndex: 'fk_id_proceso',
                        flex: 0.1,
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_proceso');
                        }
                    },
                    {
                        text: 'Titulo de Trámite',
                        dataIndex: 'titulo_peticion',
                        flex: 0.1
                    },
                    {
                        text: 'Código',
                        dataIndex: 'codigo_peticion',
                        flex: 0.1
                    },
                    {
                        text: 'Código',
                        dataIndex: 'codigo_temporal',
                        flex: 0.1
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('oec.add'),
                            itemId: 'abrirTramite',
                            iconCls: 'icon_add',
                            text: 'Abrir Trámite'
                        }, '->',
                        {
                            xtype: 'button',
                            hidden: me.privilegio('menu.Programacion.AdministrarPasos'),
                            itemId: 'abrirEstadosTramite',
                            iconCls: 'icon_add',
                            text: 'Administrar Pasos'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    },


    privilegio: function( opcion ) {
        return !(ibmetrodta.app.globals.globalPrivilegios.indexOf(opcion) > -1);
    }
});