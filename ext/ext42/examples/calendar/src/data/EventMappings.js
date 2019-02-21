//@define Ext.calendar.data.EventMappings
/**
 * @class Ext.calendar.data.EventMappings
 * @extends Object
 * A simple object that provides the field definitions for Event records so that they can be easily overridden.
 */
Ext.ns('Ext.calendar.data');

Ext.calendar.data.EventMappings = {
    EventId: {
        name: 'EventId',
        mapping: 'id',
        type: 'int'
    },
    CalendarId: {
        name: 'CalendarId',
        mapping: 'cid',
        type: 'int'
    },
    Title: {
        name: 'Title',
        mapping: 'title',
        type: 'string'
    },
    StartDate: {
        name: 'StartDate',
        mapping: 'start',
        type: 'date',
        dateFormat: 'c'
    },
    EndDate: {
        name: 'EndDate',
        mapping: 'end',
        type: 'date',
        dateFormat: 'c'
    },
    Location: {
        name: 'Location',
        mapping: 'loc',
        type: 'string'
    },
    Notes: {
        name: 'Notes',
        mapping: 'notes',
        type: 'string'
    },
    Url: {
        name: 'Url',
        mapping: 'url',
        type: 'string'
    },
    IsAllDay: {
        name: 'IsAllDay',
        mapping: 'ad',
        type: 'boolean'
    },
    Reminder: {
        name: 'Reminder',
        mapping: 'rem',
        type: 'string'
    },
    IsNew: {
        name: 'IsNew',
        mapping: 'n',
        type: 'boolean'
    },
    nombre_actividad: {
        name: 'nombre_actividad',
        mapping: 'nombre_actividad',
        type: 'string'
    },
    fk_id_oec: {
        name: 'fk_id_oec',
        mapping: 'fk_id_oec',
        type: 'int'
    },
    fk_id_tipo_actividad: {
        name: 'fk_id_tipo_actividad',
        mapping: 'fk_id_tipo_actividad',
        type: 'int'
    },
    fk_id_tipo_curso: {
        name: 'fk_id_tipo_curso',
        mapping: 'fk_id_tipo_curso',
        type: 'int'
    },
    codigo_actividad: {
        name: 'codigo_actividad',
        mapping: 'codigo_actividad',
        type: 'string'
    },
    descripcion_actividad: {
        name: 'descripcion_actividad',
        mapping: 'descripcion_actividad',
        type: 'string'
    },
    fecha_inicial_actividad: {
        name: 'fecha_inicial_actividad',
        mapping: 'fecha_inicial_actividad',
        type: 'date',
        dateFormat: 'c'
    },
    fecha_final_actividad: {
        name: 'fecha_final_actividad',
        mapping: 'fecha_final_actividad',
        type: 'date',
        dateFormat: 'c'
    },
    prs_actividad: {
        name: 'prs_actividad',
        mapping: 'prs_actividad',
        type: 'int'
    },
    horas_actividad: {
        name: 'horas_actividad',
        mapping: 'horas_actividad',
        type: 'int'
    }
};
