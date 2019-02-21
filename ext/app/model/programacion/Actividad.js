Ext.define('ibmetrodta.model.programacion.Actividad', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_actividad',
    fields: [
        {
            name: 'id_actividad',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_oec',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_tipo_actividad',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_tipo_curso',
            type: 'int',
            useNull: true
        },
        {
            name: 'codigo_actividad',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_actividad',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_actividad',
            type: 'string',
            useNull: true
        },
        {
            name: 'descripcion_actividad',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_inicial_actividad',
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        {
            name: 'fecha_final_actividad',
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        {
            name: 'prs_actividad',
            type: 'int',
            useNull: true
        },
        {
            name: 'horas_actividad',
            type: 'int',
            useNull: true
        },
        {
            name: 'actividadUsuario050103s',
            type: 'auto'
        },
        {
            name: 'nombre_oec',
            type: 'auto'
        },
        {
            name: 'nombre_tipo_curso',
            type: 'auto'
        },
        {
            name: 'nombre_tipo_actividad',
            type: 'auto'
        }
    ]
});