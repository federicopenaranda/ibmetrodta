Ext.define('ibmetrodta.model.proceso.PeticionEstado', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_peticion_estado',
    fields: [
        {
            name: 'id_peticion_estado',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_estado',
            type: 'int',
            useNull: true
        },
        {
            name: 'activo_peticion_estado',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_estado',
            type: 'string'
        },
        {
            name: 'descripcion_estado',
            type: 'string'
        }
    ]
});