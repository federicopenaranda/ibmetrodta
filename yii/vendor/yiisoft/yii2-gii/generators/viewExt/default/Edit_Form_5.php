<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower( getNameTableSinCod($className)); ?>.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        '<?= $path;?>.ux.form.field.RemoteComboBox',
        '<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.Lista'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: false,
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
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    // set to false to disable lazy render of non-active tabs...IMPORTANT!!!
                    deferredRender: false,
                    items: [
                        {
                            xtype: '<?= strtolower($modulo); ?>.<?= strtolower( getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower( getNameTableSinCod($className)); ?>',
                            title: '<?= getNameTableSinCod($className);?>'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});