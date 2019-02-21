Ext.define('ibmetrodta.model.formularios.AnexoConvenio', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_anexo_convenio',
    fields: [
        {
            name: 'id_anexo_convenio',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_norma_referencia',
            type: 'int',
            useNull: true
        },
        {
            name: 'responsable_anexo_convenio',
            type: 'string',
            useNull: true
        },
        {
            name: 'cargo_anexo_convenio',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_anexo_convenio',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'cips_anexo_convenio',
            type: 'string',
            useNull: true
        },
        {
            name: 'numero_anexo_convenio',
            type: 'string',
            useNull: true
        },
        {
            name: 'escaneado_anexo_convenio',
            type: 'string',
            useNull: true
        },
        {
            name: 'estado_anexo_convenio',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_creacion_anexo_convenio',
            type: 'string',
            useNull: true
        },
        {
            name: 'nombre_norma_referencia',
            type: 'auto'
        },
        {
            name: 'codigo_peticion',
            type: 'auto'
        },
        /*
         * Campos de tablas foraneas
         */
        {
            name: 'alcanceAcreditacionCert041303s',
            type: 'auto'
        },
        {
            name: 'alcanceAcreditacionInsp041303s',
            type: 'auto'
        },
        {
            name: 'alcanceAcreditacionLab041303s',
            type: 'auto'
        },
        {
            name: 'personalAutorizado041303s',
            type: 'auto'
        }
    ]
});