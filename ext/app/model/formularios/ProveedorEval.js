Ext.define('ibmetrodta.model.formularios.ProveedorEval', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_proveedor_eval',
    fields: [
        {
            name: 'id_proveedor_eval',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_eval_tecnica',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_proveedor_eval',
            type: 'string',
            useNull: true
        },
        {
            name: 'resultados_proveedor_eval',
            type: 'string',
            useNull: true
        },
        {
            name: 'indicador_desempeno_proveedor_eval',
            type: 'string',
            useNull: true
        },
        {
            name: 'conclusion_desempeno_proveedor_eval',
            type: 'string',
            useNull: true
        }
    ]
});