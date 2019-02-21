<?php 
require_once(__DIR__."/../../controlador/default/instancia.php");
require_once(__DIR__.'/../../Catequil.php'); ?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
<?php $model = getPath($className);?>
<?php $pk = $model->getNamePk();?>
Ext.define('<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>', {
    extend: '<?= $path;?>.model.Base',
    idProperty: '<?= $pk[0]; ?>',
    fields: [
<?php $type="";$contComas=1;foreach($tableSchema->columns as $column):
if ($contComas != sizeof($tableSchema->columns)){?>
		{
			name: '<?= $column->name;?>',
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") === FALSE) 
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
	if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE)
		$type="auto";
?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE){ ?>
            type: '<?= $type; ?>',
<?php } else { ?>
			type: '<?= $type; ?>',
			useNull: true
<?php } ?>
        },
<?php } else { ?>
		{
			name: '<?= $column->name;?>',
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") === FALSE) 
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
	if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE)
		$type="auto";
?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE){ ?>
            type: '<?= $type; ?>',
<?php } else { ?>
			type: '<?= $type; ?>',
			useNull: true
<?php } ?>
        }
<?php }$contComas++;?>
<?php  endforeach;?>
	]
});