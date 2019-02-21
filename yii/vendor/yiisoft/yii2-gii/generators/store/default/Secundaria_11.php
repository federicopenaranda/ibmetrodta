<?php require_once __DIR__."/../../Catequil.php" ?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.store.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>', {
    extend: '<?= $path;?>.store.Base',
    alias: 'store.<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($subModelClass));?>',
    requires: [
        '<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>'
    ],
    restPath: '<?= strtolower($subModelClass); ?>',
    storeId: '<?= getNameTableSinCod($subModelClass); ?>',
    model: '<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>'
});