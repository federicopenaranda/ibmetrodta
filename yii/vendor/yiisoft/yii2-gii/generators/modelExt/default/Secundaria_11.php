<?php 
require_once(__DIR__."/../../controlador/default/instancia.php");
require_once(__DIR__.'/../../Catequil.php'); ?>
<?php $model = getPath($className);//instancia un objeto?>
<?php $pk = $model->getNamePk();?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>', {
    extend: '<?= $path;?>.model.Base',
    idProperty: '<?= $pk[0] ?>',
    fields: [
<?php 
$cont=1;$total = getTotalCamSinLP($tableSchema->columns,$model->getLogin(),$model->getPrivate());?>
<?php foreach($tableSchema->columns as $column):
if ($column->name != $model->getLogin()){
	if($cont != $total) {?>
		{
			name: '<?= $column->name;?>',
            type: '<?= getConversionType($column->type); ?>',
            useNull: true
		},
<?php } else {?>
		{
			name: '<?= $column->name;?>',
            type: '<?= getConversionType($column->type); ?>',
            useNull: true
		}
<?php }//if cont?>
<?php }//if login & private ?>
<?php $cont++; endforeach;?>
	]
});