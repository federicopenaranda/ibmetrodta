Ext.define('ibmetrodta.model.tramite.ObsPeticionAccion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_obs_peticion_accion',
    fields: [
        {
            name: 'id_obs_peticion_accion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_accion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_usuario',
            type: 'int',
            useNull: true
        },
        {
            name: 'obs_peticion_accion',
            type: 'string',
            useNull: true
        },
        {
            name: 'procede_obs_peticion_accion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_hora_obs_peticion_accion',
            type: 'string',
            useNull: true
        },
        {
            name: 'nombre_accion',
            type: 'string',
            useNull: true
        }
    ]
});