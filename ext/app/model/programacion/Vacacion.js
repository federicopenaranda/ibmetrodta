Ext.define('ibmetrodta.model.programacion.Vacacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_vacacion',
    fields: [
        {
            name: 'id_vacacion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_usuario',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_inicio_vacacion',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'fecha_fin_vacacion',
            type: 'date',
            dateFormat: 'Y-m-d',
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