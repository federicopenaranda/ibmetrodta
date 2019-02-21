Ext.define('ibmetrodta.model.formularios.AlcanceAcreditacionCert2', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_alcance_acreditacion_cert',
    fields: [
        {
            name: 'id_alcance_acreditacion_cert',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_anexo_convenio',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_acreditacion_alcance_acreditacion_cert',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'producto_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
        },
        {
            name: 'norma_referencia_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
        },
        {
            name: 'sector_economico_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
        },
        {
            name: 'actividad_sector_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
        },
        {
            name: 'codigo_iaf_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
        }
    ]
});