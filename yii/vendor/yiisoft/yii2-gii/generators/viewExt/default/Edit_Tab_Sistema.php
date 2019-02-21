<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.usuario.Usuario.edit.tab.Sistema', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuario.usuario.edit.tab.sistema',
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
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
                    xtype: 'fieldset',
                    title: '<strong>Información de Sistema</strong>',
                    defaults: {
                        layout: 'hbox',
                        margins: '0 10 0 10'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Login de Usuario:',
                                    name: 'login_usuario',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'textfield',
                                    itemId: 'password1',
                                    fieldLabel: 'Contraseña de Usuario (1):',
                                    name: 'password_usuario',
                                    inputType: 'password',
                                    enableKeyEvents: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'password2',
                                    fieldLabel: 'Contraseña de Usuario (2):',
                                    name: 'password_usuario2',
                                    inputType: 'password',
                                    enableKeyEvents: true,
                                    allowBlank: false
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    itemId: 'comparacion_password'
                }
            ]
        });
        me.callParent(arguments);
    }
});
