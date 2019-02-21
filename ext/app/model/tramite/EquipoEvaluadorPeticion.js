Ext.define('ibmetrodta.model.tramite.EquipoEvaluadorPeticion', {
    extend: 'ibmetrodta.model.Base',
    fields: [
        {
            name: 'procede_obs_peticion_accion',
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
            name: 'primer_nombre_usuario',
            type: 'string',
            useNull: true
        },
        {
            name: 'segundo_nombre_usuario',
            type: 'string',
            useNull: true
        },
        {
            name: 'apellido_paterno_usuario',
            type: 'string',
            useNull: true
        },
        {
            name: 'apellido_materno_usuario',
            type: 'string',
            useNull: true
        },
        {
            name: 'procede_obs_peticion_accion',
            type: 'string',
            useNull: true
        }
    ]
});