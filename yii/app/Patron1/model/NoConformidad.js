Ext.define('ibmetrodta.model.formularios.NoConformidad', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_no_conformidad',
    fields: [
		{
			name: 'id_no_conformidad',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'objetivo_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'numero_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'nombre_persona_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_no_conformidad',
            type: 'date',
            useNull: true
        },
		{
			name: 'ref_norma_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'ref_requisito_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'evidencia_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'representate_oec_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'representate_oec_cargo_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_no_conformidad',
            type: 'string',
            useNull: true
        },
		{
            name: 'codigo_peticion',
            type: 'auto'
        },
		/*
         * Campos de tablas foraneas
         */
	]
});