Ext.define('ibmetrodta.model.programacion.Feriado', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_feriado',
    fields: [
        {
            name: 'id_feriado',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_feriado',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'descripcion_feriado',
            type: 'string',
            useNull: true
        },
        {
            name: 'tipo_feriado',
            type: 'string',
            useNull: true
        }
    ]
});