Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.edit.SupervisionEvaluadorForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.supervisionevaluador.edit.supervisionevaluadorform',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'Ext.ux.form.ItemSelector'
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: true,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'formularios.supervisionevaluador.edit.tab.info',
                            title: 'Info'
                        },
                        {
                            xtype: 'formularios.supervisionevaluador.edit.tab.tabla',
                            title: 'Evaluación'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});