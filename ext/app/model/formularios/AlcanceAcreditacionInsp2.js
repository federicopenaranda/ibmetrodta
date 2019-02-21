Ext.define('ibmetrodta.model.formularios.AlcanceAcreditacionInsp2', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_alcance_acreditacion_insp',
    fields: [
        {
            name: 'id_alcance_acreditacion_insp',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_anexo_convenio',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_acreditacion_alcance_acreditacion_insp',
            type: 'date',
            dateFormat: 'Y-m-d',
            useNull: true
        },
        {
            name: 'procedimiento_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
        },
        {
            name: 'norma_ref_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
        },
        {
            name: 'items_inspeccionados_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
        },
        {
            name: 'items_referencia_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
        },
        {
            name: 'signatario_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
        }
    ]
});