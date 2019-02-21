Ext.define('ibmetrodta.model.usuario.ListaUsuarioPrivilegio', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_usuario_privilegio',
    fields: [
        {
            name: 'id_usuario_privilegio',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_privilegio_usuario_privilegio',
            type: 'string',
            useNull: true
        },
        {
            name: 'accion_usuario_privilegio',
            type: 'string',
            useNull: true
        },
        {
            name: 'opciones_usuario_privilegio',
            type: 'string',
            useNull: true
        },
        {
            name: 'funcion_usuario_privilegio',
            type: 'string',
            useNull: true
        },
        {
            name: 'descripcion_usuario_privilegio',
            type: 'string',
            useNull: true
        }
    ]
});