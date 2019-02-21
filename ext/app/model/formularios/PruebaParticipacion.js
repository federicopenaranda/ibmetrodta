Ext.define('ibmetrodta.model.formularios.PruebaParticipacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_prueba_participacion',
    fields: [
        {
            name: 'id_prueba_participacion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_criterio_evaluacion',
            type: 'int',
            useNull: true
        },
        {
            name: 'horas_evaluacion_prueba_participacion',
            type: 'int',
            useNull: true
        },
        {
            name: 'dir_nombre_responsable_prueba_participacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'dir_cargo_prueba_participacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'dir_fecha_prueba_participacion',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'oec_nombre_responsable_prueba_participacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'oec_cargo_prueba_participacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'oec_fecha_prueba_participacion',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'fecha_creacion_prueba_participacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_peticion',
            type: 'auto'
        },
        {
            name: 'nombre_criterio_evaluacion',
            type: 'auto'
        }
    ]
});