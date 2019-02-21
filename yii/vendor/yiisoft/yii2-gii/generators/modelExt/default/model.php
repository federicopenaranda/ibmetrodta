<?php require_once(__DIR__.'/../../Catequil.php'); ?>
<?php 
$contPrimaryKey=quantityPrimaryKey($tableSchema->columns);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
<?php if($contPrimaryKey==1):?>
Ext.define('<?php echo $path;?>.model.opciones.<?php echo getNameTableSinCod($className); ?>', {
    extend: '<?php echo $path;?>.model.Base',
	idProperty: '<?php echo getNamePk($tableSchema->columns);?>',
	fields: [
<?php $cont=0;foreach($tableSchema->columns as $column):?>
<?php $cont++;if($cont!==sizeof($tableSchema->columns)) {?>
		{
			name: '<?php echo $column->name;?>',
            type: '<?php if($column->dbType=="date") echo "date"; else if($column->type=="integer") echo "int";else echo $column->type;?>',
            useNull:<?php if( $column->allowNull==1)echo "true \n";else echo "true \n";?>
		},
<?php } else {?>
		{
			name: '<?php echo $column->name;?>',
            type: '<?php if($column->dbType=="date") echo "date"; else if($column->type=="integer") echo "int";else echo $column->type;?>',
            useNull:<?php if( $column->allowNull==1)echo "true \n";else echo "true \n";?>
		}
<?php } ?>
<?php endforeach;?>
	]
});
<?php endif;?>
