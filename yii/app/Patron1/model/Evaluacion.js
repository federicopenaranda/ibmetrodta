Ext.define('ibmetrodta.model.evaluacion.Evaluacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_evaluacion',
    fields: [
		{
			name: 'id_evaluacion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_oec_contacto_alta_direccion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_oec_contacto_gerente_tecnico',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_oec_contacto_gerente_calidad',
            type: 'int',
            useNull: true
        },
		{
			name: 'codigo_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_inicio_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_fin_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'objetivo_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'documento_referencia_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'identificacion_manual_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_reunion_inicial_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'hora_reunion_inicial_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_reunion_ee_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'hora_reunion_ee_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_reunion_final_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'hora_reunion_final_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'idioma_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'observacion_ra_oec_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'observacion_ra_ee_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'cumplimiento_etapas_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'recomendacion_ra_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'recomendacion_fecha_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'decision_da_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'decision_fecha_da_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_creacion_evaluacion',
            type: 'string',
            useNull: true
        },
		{
            name: 'primer_nombre_oec_contacto',
            type: 'auto'
        },
		{
            name: 'primer_nombre_oec_contacto',
            type: 'auto'
        },
		{
            name: 'primer_nombre_oec_contacto',
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
            name: 'alcanceAcreditacionCert030003s',
            type: 'auto'
        },
        {
            name: 'alcanceAcreditacionInsp030003s',
            type: 'auto'
        },
        {
            name: 'alcanceAcreditacionLab030003s',
            type: 'auto'
        },
		{
            name: 'planEvaluacion030003s',
            type: 'auto'
        }
	]
});