<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.tab.<?= getNameTableSinCod($subModelClass); ?>', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower(getNameTableSinCod($subModelClass)); ?>',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: '<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( '<?= $path;?>.store.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});