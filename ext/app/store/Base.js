Ext.define('ibmetrodta.store.Base', {
    extend: 'Ext.data.Store',
    requires: [
        'ibmetrodta.proxy.JSON'
    ],

    //serverPath: 'http://sis.ibmetro.gob.bo:500/ibmetrodta/yii/web/index.php/',
    serverPath: 'http://192.168.0.115/ibmetrodta/yii/web/index.php/',
    //serverPath: 'http://localhost:8080/ibmetrodta/yii/web/index.php/',
    
    restPath: null,
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
                storeId: 'Base',
                remoteSort: true,
                remoteFilter: true,
                remoteGroup: true,
                proxy: {
                    type: 'basejson',
                    url: me.restPath,
                    api: {
                        create: me.serverPath + me.restPath + '/create',
                        read: me.serverPath + me.restPath,
                        update: me.serverPath + me.restPath + '/update',
                        destroy: me.serverPath + me.restPath + '/delete'
                    }
                }
            }, cfg)]);
    }
});