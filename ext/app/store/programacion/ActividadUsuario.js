Ext.define('ibmetrodta.store.programacion.ActividadUsuario', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.actividadusuario',
    requires: [
        'ibmetrodta.model.programacion.ActividadUsuario'
    ],
    restPath: 'actividadusuario050103',
    storeId: 'ActividadUsuario',
    model: 'ibmetrodta.model.programacion.ActividadUsuario'
});