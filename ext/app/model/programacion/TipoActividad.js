Ext.define('ibmetrodta.model.programacion.TipoActividad', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_tipo_actividad',
    fields: [
        {
            name: 'id_tipo_actividad',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_tipo_actividad',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_tipo_actividad',
            type: 'string',
            useNull: true
        }
    ]
});