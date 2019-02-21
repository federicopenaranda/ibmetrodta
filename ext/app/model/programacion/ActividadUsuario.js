Ext.define('ibmetrodta.model.programacion.ActividadUsuario', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_actividad_usuario',
    fields: [
        {
            name: 'id_actividad_usuario',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_actividad',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_usuario',
            type: 'int',
            useNull: true
        },
        {
            name: 'rol_actividad_usuario',
            type: 'string',
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
        }
    ]
});