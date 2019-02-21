Ext.define('ibmetrodta.model.usuario.Usuario', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_usuario',
    fields: [
		{
			name: 'id_usuario',
            type: 'int',
            useNull: true
        },
		{
			name: 'primer_nombre_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'segundo_nombre_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'apellido_paterno_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'apellido_materno_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'codigo_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'login_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'contrasena_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'sexo_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'telefono_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'celular_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'correo_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'direccion_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'imagen_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'observaciones_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'acceso_ip_usuario',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_usuario',
            type: 'string',
            useNull: true
        },
		/*
         * Campos de tablas foraneas
         */
        {
            name: 'equipoPeticion010701s',
            type: 'auto'
        },
        {
            name: 'logSistema030003s',
            type: 'auto'
        },
        {
            name: 'peticion010401s',
            type: 'auto'
        },
        {
            name: 'peticionAccion010301s',
            type: 'auto'
        },
        {
            name: 'planEvaluacion030003s',
            type: 'auto'
        },
        {
            name: 'usuarioOec000102s',
            type: 'auto'
        },
        {
            name: 'oec020001s',
            type: 'auto'
        },
        {
            name: 'usuarioProceso000102s',
            type: 'auto'
        },
        {
            name: 'proceso010101s',
            type: 'auto'
        },
        {
            name: 'usuarioTipoUsuario000102s',
            type: 'auto'
        },
		{
            name: 'usuarioTipo000201s',
            type: 'auto'
        }
	]
});