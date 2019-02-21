<?php 
require_once(__DIR__.'/../../Catequil.php');
require_once(__DIR__.'/Genera_Edit_Form_4b.php');
$model = getPath($className);
$listModRef= $model->getListHasOne();
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
<?php $col = $tableSchema->columns;
#print_r($col);
?>
Ext.define('<?= $path;?>.view.<?=$modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        '<?= $path;?>.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
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
<?= generaFormu($tableSchema->columns,$model,$model,$models);?>
                  ]
        });
        me.callParent(arguments);
    }
});