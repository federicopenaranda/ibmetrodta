Ext.define('ibmetrodta.model.programacion.TipoCurso', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_tipo_curso',
    fields: [
        {
            name: 'id_tipo_curso',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_tipo_curso',
            type: 'string',
            useNull: true
        }
    ]
});