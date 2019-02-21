Ext.define('ibmetrodta.view.proceso.Peticion.search.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.peticion.search.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.slider.Multi',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'ibmetrodta.ux.form.field.plugin.ClearTrigger'
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Criterios de Búsqueda',
                    collapsible: true,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});