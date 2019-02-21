Ext.define('ibmetrodta.model.proceso.Peticion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_peticion',
    fields: [
        {
            name: 'id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_proceso',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_usuario',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_oec',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_codigo_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'titulo_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'fechahora_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'descripcion_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_acreditacion_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_creacion_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'necesidad_comite_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'estado_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'codigo_temporal',
            type: 'string',
            useNull: true
        },
        {
            name: 'nombre_proceso',
            type: 'auto'
        },
        {
            name: 'codigo_usuario',
            type: 'auto'
        },
        {
            name: 'nombre_oec',
            type: 'auto'
        },
        /*
         * Campos de tablas foraneas
         */
        {
            name: 'codigo_peticion',
            type: 'auto'
        },
        {
            name: 'anexoConvenio041301s',
            type: 'auto'
        },
        {
            name: 'certificado041401s',
            type: 'auto'
        },
        {
            name: 'designacionEvaluador041001s',
            type: 'auto'
        },
        {
            name: 'detalleCalibracion040301s',
            type: 'auto'
        },
        {
            name: 'detalleCertificacion040501s',
            type: 'auto'
        },
        {
            name: 'detalleEquipos040201s',
            type: 'auto'
        },
        {
            name: 'detalleInspeccion040401s',
            type: 'auto'
        },
        {
            name: 'equipoPeticion010701s',
            type: 'auto'
        },
        {
            name: 'evalTecnica040801s',
            type: 'auto'
        },
        {
            name: 'evaluacion030001s',
            type: 'auto'
        },
        {
            name: 'infoEnsayo040101s',
            type: 'auto'
        },
        {
            name: 'informeAcred041301s',
            type: 'auto'
        },
        {
            name: 'informeEvaluacion040601s',
            type: 'auto'
        },
        {
            name: 'noConformidad040701s',
            type: 'auto'
        },
        {
            name: 'peticionEstado010403s',
            type: 'auto'
        },
        {
            name: 'pruebaParticipacion040901s',
            type: 'auto'
        },
        {
            name: 'satisfaccionCliente041201s',
            type: 'auto'
        },
        {
            name: 'supervisionEvaluador041101s',
            type: 'auto'
        }
    ]
});