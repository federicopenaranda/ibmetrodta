Ext.define('ibmetrodta.model.oec.Oec', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_oec',
    fields: [
        {
            name: 'id_oec',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_oec_tipo',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_pais',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_norma_referencia',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'nit_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'direccion_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'ciudad_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'departamento_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'telefono1_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'telefono2_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'celular_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'fax_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'email1_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'email2_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'empresa_publica_oec',
            type: 'int',
            useNull: true
        },
        {
            name: 'fecha_creacion_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'fecha_actualizacion_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'zona_oec',
            type: 'string',
            useNull: true
        },
        {
            name: 'nombre_norma_referencia',
            type: 'auto'
        },
        {
            name: 'nombre_oec_tipo',
            type: 'auto'
        },
        {
            name: 'codigo_oec_tipo',
            type: 'auto'
        },
        {
            name: 'nombre_pais',
            type: 'auto'
        },
        /*
         * Campos de tablas foraneas
         */
        {
            name: 'oecAcreditacionSolicitada020003s',
            type: 'auto'
        },
        {
            name: 'oecActividad020002s',
            type: 'auto'
        },
        {
            name: 'actividadEconomica020004s',
            type: 'auto'
        },
        {
            name: 'oecContacto020003s',
            type: 'auto'
        },
        {
            name: 'peticion010401s',
            type: 'auto'
        }
    ]
});