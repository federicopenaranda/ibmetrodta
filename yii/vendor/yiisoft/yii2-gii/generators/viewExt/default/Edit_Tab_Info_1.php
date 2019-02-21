<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: '<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower($modulo); ?>form',
                    title: 'Administración de <?= getNameTableSinCod($className); ?>',
                    iconCls: 'icon_gear',
                    store: Ext.create( '<?= $path;?>.store.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});