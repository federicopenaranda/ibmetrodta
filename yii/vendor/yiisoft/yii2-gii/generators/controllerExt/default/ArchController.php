<?php 
require_once(__DIR__.'/../../Catequil.php');
#$model = getPath($className);
?>
<?php #$subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath); ?>
<?php $path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); ?>
<?php $path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); ?>
controllers: [
<?php $contCom=1;foreach($ruta as $r):?>
<?php if($contCom!=sizeof($ruta)){?>
	<?= "'".$r."',\n"?>
<?php } else {?>
	<?= "'".$r."'\n"?>
<?php }$contCom++; ?>
<?php endforeach;?>
],