<?php 
require_once(__DIR__."/../../controlador/default/instancia.php");
require_once(__DIR__.'/../../Catequil.php'); ?>
<?php $model = getPath($className);//instancia un objeto?>
<?php $pk = $model->getNamePk();?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>', {
    extend: '<?= $path;?>.model.Base',
    idProperty: '<?= $pk[0]; ?>',
    fields: [
<?php $type="";foreach($tableSchema->columns as $column):?>
		{
			name: '<?= $column->name;?>',
<?php if ($column->type == "integer") 
		$type = "int";
	if ($column->type == "date")
		$type = "date";
	if ($column->type == "datetime")
		$type = "string";
	if ($column->type == "smallint")
		$type = "int";
	if ($column->type == "text")
		$type = "string";
	if ($column->type == "string")
		$type = "string";
	if ($column->type == "float")
		$type = "float";
?>
            type: '<?= $type; ?>',
            useNull: true
        },
<?php  endforeach;?>
<?php $contComas=1;foreach($model->getListHasOne() as $subModel):
$objM = getPath($subModel);?>
		{
            name: '<?= $objM->getDisplay()?>',
            type: 'auto'
        },
<?php
endforeach;?>
		/*
         * Campos de tablas foraneas
         */
<?php $contComas=1;$model = getPath($className); foreach($model->getListHasMany() as $subModel ):
if($contComas != sizeof($model->getListHasMany())){
?>
        {
            name: '<?= lcfirst($subModel."s");?>',
            type: 'auto'
        },
<?php } else { ?>
		{
            name: '<?= lcfirst($subModel."s");?>',
            type: 'auto'
        }
<?php } $contComas++; endforeach;?>
	]
});