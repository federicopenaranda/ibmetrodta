Ext.define('ibmetrodta.view.formularios.NoConformidad.edit.NoConformidadForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.noconformidad.edit.noconformidadform',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
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
            defaults: {
                layout: 'hbox',
                margins: '0 10 0 10'
            },
            items: [
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_peticion',
                                fieldLabel: 'Fk Id Peticion',
                                displayField: 'codigo_peticion',
                                valueField: 'id_peticion',
                                store: {
                                    type: 'oec.peticion'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'combo',
                                    name: 'objetivo_no_conformidad',
                                    fieldLabel: 'Objetivo No Conformidad:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['acreditacion_inicial','acreditacion_inicial'],['reacreditacion','reacreditacion'],['extension_acreditacion','extension_acreditacion']]
                                    }),
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false
                    			},
	
                                {
                                    xtype: 'textareafield',
                                    name: 'numero_no_conformidad',
                                    fieldLabel: 'Numero No Conformidad'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'nombre_persona_no_conformidad',
                                    fieldLabel: 'Nombre Persona No Conformidad'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_no_conformidad',
                                    fieldLabel: 'Fecha No Conformidad',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'ref_norma_no_conformidad',
                                    fieldLabel: 'Ref Norma No Conformidad'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'ref_requisito_no_conformidad',
                                    fieldLabel: 'Ref Requisito No Conformidad'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'no_conformidad',
                                    fieldLabel: 'No Conformidad'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'evidencia_no_conformidad',
                                    fieldLabel: 'Evidencia No Conformidad'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'representate_oec_no_conformidad',
                                    fieldLabel: 'Representate Oec No Conformidad'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'representate_oec_cargo_no_conformidad',
                                    fieldLabel: 'Representate Oec Cargo No Conformidad'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_no_conformidad',
                                    fieldLabel: 'Fecha Creacion No Conformidad',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});