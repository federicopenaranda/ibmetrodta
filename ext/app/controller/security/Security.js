Ext.define('ibmetrodta.controller.security.Security', {
    extend: 'ibmetrodta.controller.Base',
    requires: [
        'ibmetrodta.security.crypto.SHA1'
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'menu[xtype=layout.menu] menuitem#logout': {
                    click: this.doLogout
                }
            },
            global: {},
            store: {},
            proxy: {} 
        });
    },

    doLogout: function( button, e, eOpts ) {
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que quiere salir del Sistema de Acreditación?',
            icon: Ext.Msg.QUESTION,
            buttonText: {
                yes: 'Salir',
                no: 'Cancelar'
            },
            fn: function(buttonId, text, opt) 
            {
                if (buttonId === 'yes') {
                    Ext.data.JsonP.request({
                        url: ibmetrodta.app.globals.globalServerPath + 'usuario000101/logout',
                        success: function( response, options ) {
                            window.location.href = './index.php';
                        },
                        failure: function( response, options ) {
                            Ext.Msg.alert( 'Atención', 'Un error ocurrió al ingresar. Por favor intenta nuevamente.' );
                        }
                    });
                }
            }
        });
    }
});