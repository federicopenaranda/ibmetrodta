Ext.define('ibmetrodta.model.formularios.DetalleCertificacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_detalle_certificacion',
    fields: [
        {
            name: 'id_detalle_certificacion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'estado_detalle_certificacion',
            type: 'int',
            useNull: true
        },
        {
            name: 'objetivo_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'tipo_certificacion_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'documento_normativo_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'procedimiento_certificacion_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'producto_certificar_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_nace_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'auditores_calificados_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'expertos_tecnicos_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'observaciones_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'ensayos_en_produccto_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'laboratorios_ensayos_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_creacion_detalle_certificacion',
            type: 'string',
            useNull: true
        },
        {
            name: 'nombre_codigo',
            type: 'auto'
        }
    ]
});