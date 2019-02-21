Ext.define('ibmetrodta.model.usuario.UsuarioTipo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_usuario_tipo',
    fields: [
		{
			name: 'id_usuario_tipo',
            type: 'int',
            useNull: true
        },
		{
			name: 'nombre_usuario_tipo',
            type: 'string',
            useNull: true
        },
		{
			name: 'descripcion_usuario_tipo',
            type: 'string',
            useNull: true
        },
		/*
         * Campos de tablas foraneas
         */
        {
            name: 'usuarioTipoPrivilegio000202s',
            type: 'auto'
        },
        {
            name: 'usuarioPrivilegio000004s',
            type: 'auto'
        },
        {
            name: 'usuarioTipoUsuario000102s',
            type: 'auto'
        },
		{
            name: 'usuario000101s',
            type: 'auto'
        }
	]
});