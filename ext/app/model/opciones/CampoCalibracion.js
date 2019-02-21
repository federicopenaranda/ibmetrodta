Ext.define('ibmetrodta.model.opciones.CampoCalibracion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_campo_calibracion',
    fields: [
        {
            name: 'id_campo_calibracion',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_campo_calibracion',
            type: 'string',
            useNull: true
        }
    ]
});