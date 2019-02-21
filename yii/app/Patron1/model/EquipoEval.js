Ext.define('ibmetrodta.model.formularios;display.EquipoEval', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_equipo_eval',
    fields: [
		{
			name: 'id_equipo_eval',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_eval_tecnica',
            type: 'int',
            useNull: true
		},
		{
			name: 'nombre_equipo_eval',
            type: 'string',
            useNull: true
		},
		{
			name: 'disponibilidad_equipo_eval',
            type: 'string',
            useNull: true
		},
		{
			name: 'programa_calibracion_equipo_eval',
            type: 'string',
            useNull: true
		},
		{
			name: 'identificacion_individual_equipo_eval',
            type: 'string',
            useNull: true
		},
		{
			name: 'registros_equipo_eval',
            type: 'string',
            useNull: true
		},
		{
			name: 'verificaciones_intermedias_equipo_eval',
            type: 'string',
            useNull: true
		},
		{
			name: 'proteccion_equipo_eval',
            type: 'string',
            useNull: true
		}
	]
});