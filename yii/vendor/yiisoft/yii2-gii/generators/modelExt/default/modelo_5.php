<?php 
require_once(__DIR__."/../../controlador/default/instancia.php");
require_once(__DIR__.'/../../Catequil.php'); ?>
<?php $model = getPath($className);//instancia un objeto?>
<?php $pk = $model->getNamePk();?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
<?php #print_r($tableSchema->columns);?>
Ext.define('<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>', {
    extend: '<?= $path;?>.model.Base',
    idProperty: '<?= $pk[0]; ?>',
    fields: [
<?php 
$cont=1;$total = getTotalCamSinLog($tableSchema->columns,$model->getLogin(),$model->getPrivate());
foreach($tableSchema->columns as $column):
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
<?php $cont++; endforeach;?>
	]
});