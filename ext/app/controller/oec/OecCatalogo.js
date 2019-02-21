Ext.define('ibmetrodta.controller.oec.OecCatalogo', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'oec.OecCatalogo'
    ],
    views: [
        'oec.OecCatalogo.Lista',
        'oec.OecCatalogo.search.Form',
        'oec.OecCatalogo.search.Window'
    ],
    refs: [
        {
            ref: 'OecCatalogoLista',
            selector: '[xtype=oec.oeccatalogo.lista]'
        },
        {
            ref: 'OecCatalogoWindow',
            selector: '[xtype=oec.oeccatalogo.search.window]'
        },
        {
            ref: 'OecCatalogoForm',
            selector: '[xtype=oec.oeccatalogo.search.form]'
        }
    ],
    
    
    init: function () {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=oec.oeccatalogo.lista]': {
                    beforerender: this.loadRecords
                },
                'grid[xtype=oec.oeccatalogo.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=oec.oeccatalogo.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=oec.oeccatalogo.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=oec.oeccatalogo.search.window] button#cancel': {
                    click: this.close
                },
                'grid[xtype=oec.oeccatalogo.lista] button#descargar': {
                    click: this.descargaAnexo
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    descargaAnexo: function () {
        var me = this,
                grid = me.getOecCatalogoLista(),
                recPeticion = grid.getSelectionModel().getSelection()[0],
                dataPeticion = recPeticion.getData(), obj, src;
        
        
        
        
        
        Ext.data.JsonP.request({
            url: ibmetrodta.app.globals.globalServerPath + 'anexoconvenio041301/escaneadoanexoconvenio',
            params: {
                id_oec: dataPeticion.id_oec
            },
            success: function (response, options) {
                
                if (response.meta.success)
                {
                    
                    
                    
                    /*Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'anexoconvenio041301/downloadescaneadoanexoconvenio',
                        params: {
                            id_oec: dataPeticion.id_oec
                        },
                        success: function (response, options) {
                            console.log(response);
                        },
                        failure: function (response, options) {
                            Ext.Msg.alert('Error', 'Error al descargar el archivo. Intente nuevamente.');
                        }
                    });*/
                    
                    obj = {
                        url: ibmetrodta.app.globals.globalServerPath + 'anexoconvenio041301/downloadescaneadoanexoconvenio',
                        params: {
                            id_oec: dataPeticion.id_oec
                        }
                    };

                    src = obj.url + (obj.params ? '?' + Ext.urlEncode(obj.params) : '');

                    Ext.core.DomHelper.append(document.body, {
                        tag : 'iframe',
                        id : 'downloadIframe',
                        frameBorder : 0,
                        width : 0,
                        height : 0,
                        css : 'display:none;visibility:hidden;height:0px;',
                        src : src
                    });
                    
                }
                else
                {
                    Ext.Msg.alert('Archivo Faltante', 'El OEC no posee el registro de Anexo o el archivo no existe, por favor revise el paso 17.');
                }
            },
            failure: function (response, options) {
                Ext.Msg.alert('Atenci&oacute;n', 'Error al descargar el archivo. Intente nuevamente.');
            }
        });
        


    },
    
    
    clearSearch: function (button, e, eOpts) {
        var me = this,
                grid = me.getOecCatalogoLista(),
                store = grid.getStore();
        // clear filter
        store.clearFilter(false);
    },
    
    
    showSearch: function (button, e, eOpts) {
        var me = this,
                win = me.getOecCatalogoWindow();
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('oec.oeccatalogo.search.window', {
                title: 'Buscar OEC'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    
    search: function (button, e, eOpts) {
        var me = this,
                win = me.getOecCatalogoWindow(),
                form = win.down('form'),
                grid = me.getOecCatalogoLista(),
                store = grid.getStore(),
                values = form.getValues(),
                filters = [];
        // loop over values to create filters
        Ext.Object.each(values, function (key, value, myself) {
            if (!Ext.isEmpty(value)) {
                filters.push({
                    property: key,
                    value: value
                });
            }
        });
        // clear store filters
        store.clearFilter(true);
        store.filter(filters);
        // close window
        win.hide();
    },
    
    
    loadRecords: function (grid, eOpts) {
        var me = this, 
                store = grid.getStore();
        store.clearFilter(true);
        store.load();
        
        me.boolDesdeTramite = 0;
    },
  
    
    close: function (button, e, eOpts) {
        var win = button.up('window');
        win.close();
    },
   
    
    cancel: function (editor, context, eOpts) {
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    }
});