Ext.define('ibmetrodta.model.oec.OecContacto', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_oec_contacto',
    fields: [
        {
            name: 'id_oec_contacto',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_oec',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_oec_titulo',
            type: 'int',
            useNull: true
        },
        {
            name: 'primer_nombre_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'segundo_nombre_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'apellido_paterno_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'apellido_materno_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'cargo_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'email_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'celular_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'telefono_oec_contacto',
            type: 'string',
            useNull: true
        },
        {
            name: 'representante_legal_oec_contacto',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_oec_titulo',
            type: 'string',
            useNull: true
        }
    ]
});