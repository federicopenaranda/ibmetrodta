Ext.define('ibmetrodta.view.layout.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.menu',
    header: false,
    floating: false,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Mod. Programación',
                    itemId: 'programacion',
                    iconCls: 'icon_status',
                    hidden: me.privilegio('menu.Programacion'),
                    menu: [
                        {
                            text: 'Adm. Actividades',
                            itemId: 'programacion/Actividad',
                            iconCls: 'icon_status',
                            hidden: me.privilegio('menu.Programacion.Actividad')
                        },
                        {
                            text: 'Adm. Calendario',
                            itemId: 'calendar/Calendar',
                            iconCls: 'icon_status'
                            //hidden: me.privilegio('menu.Calendar.Calendar')
                        },
                        {
                            text: 'Adm. Gestiones',
                            itemId: 'programacion/Gestion',
                            iconCls: 'icon_status'
                            //hidden: me.privilegio('menu.Programacion.Gestion')
                        },
                        {
                            text: 'Adm. Feriados',
                            itemId: 'programacion/Feriados',
                            iconCls: 'icon_status'
                            //hidden: me.privilegio('menu.Programacion.Feriados')
                        },
                        {
                            text: 'Adm. Vacación',
                            itemId: 'programacion/Vacacion',
                            iconCls: 'icon_status'
                            //hidden: me.privilegio('menu.Programacion.Vacacion')
                        }
                    ]
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Programacion')
                },
                {
                    text: 'Catálogo',
                    itemId: 'catalogo',
                    iconCls: 'icon_model',
                    hidden: me.privilegio('menu.Opciones'),
                    menu: [
                        {
                            text: 'Ver Catálogo',
                            itemId: 'oec/Catalogo',
                            iconCls: 'icon_model'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Programacion')
                },
                {
                    text: 'Opciones',
                    itemId: 'opciones',
                    iconCls: 'icon_gear',
                    hidden: me.privilegio('menu.Opciones'),
                    menu: [
                        {
                            text: 'Adm. Actividades Económicas',
                            itemId: 'opciones/ActividadEconomica',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Normas de Referencia',
                            itemId: 'opciones/NormaReferencia',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Tipo de OEC',
                            itemId: 'opciones/OecTipo',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Título de Contacto',
                            itemId: 'opciones/OecTitulo',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Paises',
                            itemId: 'opciones/Pais',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Campos de Calibración',
                            itemId: 'opciones/CampoCalibracion',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Criterios de Evaluación',
                            itemId: 'opciones/CriterioEvaluacion',
                            iconCls: 'icon_usuario'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Opciones')
                },
                {
                    text: 'OEC',
                    itemId: 'oec',
                    hidden: me.privilegio('menu.Oec'),
                    iconCls: 'icon_entidad',
                    menu: [
                        {
                            text: 'Adm. OEC',
                            itemId: 'oec/Oec',
                            iconCls: 'icon_entidad'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Oec')
                },
                {
                    text: 'Proceso',
                    itemId: 'proceso',
                    hidden: me.privilegio('menu.Proceso'),
                    iconCls: 'icon_gear',
                    menu: [
                        {
                            text: 'Adm. Tipos de Proceso',
                            itemId: 'proceso/Proceso',
                            iconCls: 'icon_gear'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Proceso')
                },
                {
                    text: 'Trámites',
                    itemId: 'tramites',
                    hidden: me.privilegio('menu.Tramites'),
                    iconCls: 'icon_tag',
                    menu: [
                        {
                            text: 'Adm. Trámites',
                            itemId: 'tramite/Tramite',
                            iconCls: 'icon_tag'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Tramites')
                },
                {
                    text: 'Usuarios',
                    itemId: 'usuario',
                    hidden: me.privilegio('menu.Usuarios'),
                    iconCls: 'icon_usuario',
                    menu: [
                        {
                            text: 'Adm. Usuarios',
                            itemId: 'usuario/Usuario',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Tipos de Usuario',
                            itemId: 'usuario/UsuarioTipo',
                            iconCls: 'icon_usuario'
                        },
                        {
                            text: 'Adm. Privilegios de Usuario',
                            itemId: 'usuario/UsuarioPrivilegio',
                            iconCls: 'icon_usuario'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Usuarios')
                },
                {
                    text: 'Reportes',
                    itemId: 'reportes',
                    hidden: me.privilegio('menu.Reportes'),
                    iconCls: 'icon_reporte'
                },
                {
                    xtype: 'menuseparator',
                    hidden: me.privilegio('menu.Reportes')
                },
                {
                    text: 'Salir',
                    itemId: 'logout',
                    iconCls: 'icon_login'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    xtype: 'menuseparator',
                    height : 30,
                    border: false,
                    disabled: true
                },
                {
                    xtype: 'label',
                    itemId: 'menu_nombre_usuario',
                    border: false
                },
                {
                    xtype: 'menuseparator',
                    border: false
                },
                {
                    xtype: 'label',
                    itemId: 'menu_tipo_usuario',
                    border: false
                }
            ]
        });
        me.callParent(arguments);
    },


    privilegio: function( opcion ) {
        return !(ibmetrodta.app.globals.globalPrivilegios.indexOf(opcion) > -1);
    }
});