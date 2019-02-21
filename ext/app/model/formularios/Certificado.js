Ext.define('ibmetrodta.model.formularios.Certificado', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_certificado',
    fields: [
        {
            name: 'id_certificado',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_acreditacion_inicial_certificado',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'fecha_validez_certificado',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'texto1_certificado',
            type: 'string',
            useNull: true
        },
        {
            name: 'escaneado_certificado',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_ultima_generacion_certificado',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_creacion_certificado',
            type: 'string'
        },
        {
            name: 'estado_certificado',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_certificado',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_peticion',
            type: 'auto'
        }
    ]
});