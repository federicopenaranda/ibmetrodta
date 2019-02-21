<?php 
require_once(__DIR__.'/../../Catequil.php');
require_once(__DIR__.'/Genera_Edit_Form_4b.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.tab.<?= getNameTableSinCod($className); ?>', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower(getNameTableSinCod($className)); ?>',
    layout: 'form',
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    defaults: {
                        layout: 'hbox',
                        margins: '0 10 0 10'
                    },
                    items: [
<?= generaFormu($tableSchema->columns,$model,$model,$models);?>
						]
		
                }
            ]
        });
        me.callParent(arguments);	
    }
});