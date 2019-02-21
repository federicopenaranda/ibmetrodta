Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.edit.tab.Tabla', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.supervisionevaluador.edit.tab.tabla',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Radio',
        'Ext.form.RadioGroup',
        'ibmetrodta.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            defaultType: 'checkbox',
            layout: 'hbox',
            margins: '0 10 0 10',
            defaults: {
                anchor: '100%',
                hideEmptyLabel: false
            },
            items: [
                
                
                
                
                {
                    xtype: 'radiogroup',
                    allowBlank: true,
                    msgTarget: 'side',
                    anchor: '-18',
                    layout: 'column',
                    defaultType: 'container',
                    items: [
                        {
                            columnWidth: .56,
                            items: [
                                {xtype: 'component', html: 'Criterio', cls: 'x-form-check-group-label'},
                                {xtype: 'component', html: '1.1 ¿Cómo evalúa el plan de evaluación?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '1.2 ¿Cómo evalúa la información previa recibida?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '1.3 ¿Cómo evalúa la secuencia del proceso? (duración, cooperación, intercambio)', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.1 ¿Cómo evalúa el conocimiento técnico?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.2 ¿Cómo evalúa el conocimiento de la norma/guía  ISO/IEC y criterios de evaluación?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.3 ¿Cómo evalúa el comportamiento del evaluador/experto con el personal evaluado?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.4 ¿Cómo evalúa la capacidad de investigación de cada uno de los aspectos evaluados?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.5 ¿Cómo evalúa la objetividad de la evaluación?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.6 ¿Cómo evalúa la comunicación  durante la evaluación con el evaluado?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.7 ¿Cómo evalúa el intercambio de información con los demás miembros del equipo evaluador?', cls: 'criterio_evaluacion'},
                                {xtype: 'component', html: '2.8 ¿Como evalúa el contenido del informe oral y/o escrito presentado en la reunión de cierre?', cls: 'criterio_evaluacion'}
                            ]
                        },
                        {
                            columnWidth: .1,
                            items: [
                                {xtype: 'component', html: 'Muy Malo', cls: 'x-form-check-group-label'},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta1', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta2', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta3', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta4', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta5', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta6', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta7', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta8', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta9', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta10', inputValue: 1},
                                {xtype: 'radiofield', boxLabel: '1', name: 'pregunta11', inputValue: 1}
                            ]
                        },
                        {
                            columnWidth: .06,
                            items: [
                                {xtype: 'component', html: '&nbsp;', cls: 'x-form-check-group-label'},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta1', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta2', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta3', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta4', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta5', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta6', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta7', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta8', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta9', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta10', inputValue: 2},
                                {xtype: 'radiofield', boxLabel: '2', name: 'pregunta11', inputValue: 2}
                            ]
                        },
                        {
                            columnWidth: .06,
                            items: [
                                {xtype: 'component', html: '&nbsp;', cls: 'x-form-check-group-label'},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta1', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta2', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta3', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta4', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta5', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta6', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta7', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta8', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta9', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta10', inputValue: 3},
                                {xtype: 'radiofield', boxLabel: '3', name: 'pregunta11', inputValue: 3}
                            ]
                        },
                        {
                            columnWidth: .06,
                            items: [
                                {xtype: 'component', html: '&nbsp;', cls: 'x-form-check-group-label'},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta1', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta2', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta3', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta4', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta5', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta6', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta7', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta8', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta9', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta10', inputValue: 4},
                                {xtype: 'radiofield', boxLabel: '4', name: 'pregunta11', inputValue: 4}
                            ]
                        },
                        {
                            columnWidth: .1,
                            items: [
                                {xtype: 'component', html: 'Muy Bueno', cls: 'x-form-check-group-label'},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta1', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta2', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta3', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta4', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta5', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta6', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta7', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta8', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta9', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta10', inputValue: 5},
                                {xtype: 'radiofield', boxLabel: '5', name: 'pregunta11', inputValue: 5}
                            ]
                        }
                    ]
                }
                
                
                
            ]
        });
        me.callParent(arguments);
    }
});