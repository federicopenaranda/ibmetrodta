Ext.define('ibmetrodta.model.proceso.EquipoPeticion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_equipo_peticion',
    fields: [
        {
            name: 'id_equipo_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_usuario',
            type: 'int',
            useNull: true
        },
        {
            name: 'cantidad_horas_equipo_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'observaciones_equipo_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'estado_equipo_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'primer_nombre_usuario',
            type: 'auto'
        },
        {
            name: 'segundo_nombre_usuario',
            type: 'auto'
        },
        {
            name: 'apellido_paterno_usuario',
            type: 'auto'
        },
        {
            name: 'apellido_materno_usuario',
            type: 'auto'
        },
        {
            name: 'empresa_usuario',
            type: 'auto'
        },
        {
            name: 'usuarioTipo000201s',
            type: 'auto'
        },
        {
            name: 'nombre_usuario_tipo',
            type: 'auto',
            convert: function (valor, record) {
                var tipos = record.get('usuarioTipo000201s'),
                        val = '';
                
                Ext.Object.each ( tipos, function ( tipo, index, accion ) {
                        if ( typeof (accion[0].nombre_usuario_tipo) !== 'undefined'  )
                            val += accion[0].nombre_usuario_tipo + ' ';
                    }
                );

                return val;
            }
        }
    ]
});