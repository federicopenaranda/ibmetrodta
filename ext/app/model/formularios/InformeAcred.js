Ext.define('ibmetrodta.model.formularios.InformeAcred', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_informe_acred',
    fields: [
        {
            name: 'id_informe_acred',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'observaciones_ra_oec_informe_acred',
            type: 'string',
            useNull: true
        },
        {
            name: 'observaciones_ra_ee_informe_acred',
            type: 'string',
            useNull: true
        },
        {
            name: 'cumplimiento_etapas_informe_acred',
            type: 'string',
            useNull: true
        },
        {
            name: 'recomendacion_ra_informe_acred',
            type: 'string',
            useNull: true
        },
        {
            name: 'recomendacion_fecha_informe_acred',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'toma_decision_da_informe_acred',
            type: 'string',
            useNull: true
        },
        {
            name: 'toma_decision_da_fecha_informe_acred',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'fecha_creacion_informe_acred',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_peticion',
            type: 'auto'
        }
    ]
});