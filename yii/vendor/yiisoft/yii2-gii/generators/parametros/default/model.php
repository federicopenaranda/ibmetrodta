<?php
$cont=0;
$url_web="";
#print_r($tableSchema->columns);
foreach ($tableSchema->columns as $column):
	$cont++;
		if($column->phpType == "string" && $column->type!=="datetime" &&  $column->type!=="date"){
			if ($cont==sizeof($tableSchema->columns))
				$url_web.='"'.$column->name.'":"valor"}&callback=Ext';
			else
				$url_web.='"'.$column->name.'":"valor",';
		}
		
		if($column->phpType=="string" && $column->type =="datetime"){
			if($cont==sizeof($tableSchema->columns))
				$url_web.='"'.$column->name.'":"2015-01-01 00:00:00}&callback=Ext';
			else
				$url_web.='"'.$column->name.'":"2015-01-01 00:00:00",';
		}
		
		if($column->phpType=="string" && $column->type =="date"){
			if($cont==sizeof($tableSchema->columns))
				$url_web.='"'.$column->name.'":"2015-01-01"}&callback=Ext';
			else
				$url_web.='"'.$column->name.'":"2015-01-01",';
		}
		
		if($column->phpType == "integer") {
                    if ($column->isPrimaryKey != ""){
                         if($cont==sizeof($tableSchema->columns))
				$url_web.='"'.$column->name.'":1}&callback=Ext';
                        else
				$url_web.='"'.$column->name.'":null,';
                    } else {
                        if($cont==sizeof($tableSchema->columns))
				$url_web.='"'.$column->name.'":1}&callback=Ext';
                        else
				$url_web.='"'.$column->name.'":1,';
                    }
		}
		
		if($column->phpType == "double") {
			if($cont==sizeof($tableSchema->columns))
				$url_web.='"'.$column->name.'":25.4}&callback=Ext';
			else
				$url_web.='"'.$column->name.'":25.4,';
		}
        if ($column->isPrimaryKey != "")
		$pk = $column->name;
endforeach;
?>

<?php 
#$link="";
$listUrl=explode("/",Yii::getAlias('@webroot'));
if(strpos($generator->server,'localhost') === FALSE){
	if(sizeof($listUrl) == 7)
		$link="http://".$generator->server."/".$listUrl[sizeof($listUrl)-3]."/yii/".$listUrl[sizeof($listUrl)-1]."/index.php";
	if(sizeof($listUrl) == 6)
		$link="http://".$generator->server."/".$listUrl[sizeof($listUrl)-2]."/yii/".$listUrl[sizeof($listUrl)-1]."/index.php";
	if(sizeof($listUrl)==5)
		$link="http://".$generator->server."/".$listUrl[sizeof($listUrl)-1]."/index.php";
} else {
	if(sizeof($listUrl) == 7)
		$link="http://".$generator->server."/".$listUrl[sizeof($listUrl)-3]."/".$listUrl[sizeof($listUrl)-1]."/index.php";
	if(sizeof($listUrl) == 6)
		$link="http://".$generator->server."/".$listUrl[sizeof($listUrl)-2]."/".$listUrl[sizeof($listUrl)-1]."/index.php";
	if(sizeof($listUrl)==5)
		$link="http://".$generator->server."/".$listUrl[sizeof($listUrl)-1]."/index.php";

}
?>
<?= "**************************************** CREATE **************************************\n"?>
<?php echo $link."/".strtolower($className) ?>/create?records={<?php echo $url_web;?>
<?php #======================UPDATE=============================?>
<?php $cont=0;$url_web="";foreach($tableSchema->columns as $column){
	$cont++;
	if($column->phpType== "string" && $column->type !== "datetime" &&  $column->type !== "date"){
		if($cont==sizeof($tableSchema->columns))
			$url_web.='"'.$column->name.'":"valorxx"}&callback=Ext';
		else
			$url_web.='"'.$column->name.'":"valorxx",';
	}
	if($column->phpType=="string" && $column->type == "datetime"){
		if($cont==sizeof($tableSchema->columns))
			$url_web.='"'.$column->name.'":"2015-01-01 00:00:00"}&callback=Ext';
		else
			$url_web.='"'.$column->name.'":"2015-01-01 00:00:00",';
	}
	
	if($column->phpType=="string" && $column->type == "date"){
		if($cont==sizeof($tableSchema->columns))
			$url_web.='"'.$column->name.'":"2015-01-01"}&callback=Ext';
		else
			$url_web.='"'.$column->name.'":"2015-01-01",';
	}
	
	if($column->phpType == "integer"){
		if($cont==sizeof($tableSchema->columns))
			$url_web.='"'.$column->name.'":1}&callback=Ext';
		else
			$url_web.='"'.$column->name.'":1,';
	}
	
	if($column->phpType == "double"){
		if($cont==sizeof($tableSchema->columns))
			$url_web.='"'.$column->name.'":25.4}&callback=Ext';
		else
			$url_web.='"'.$column->name.'":25.4,';
	}
}
?>

<?= "**************************************** UPDATE **************************************\n"?>
<?php echo $link."/".strtolower($className)?>/update?records={<?php echo $url_web;?>

<?php #======================DELETE============================= ?>
<?php $cont=0;$url_web="";foreach($tableSchema->columns as $column){
	$cont++;
	if ($column->isPrimaryKey == 1)
		$url_web.='"'.$column->name.'":1}&callback=Ext';
}
?>
<?= "**************************************** DELETE **************************************\n"?>
<?php echo $link."/".strtolower($className)?>/delete?records={<?php echo $url_web;?>

<?= "**************************************** READ ****************************************\n"?>

<?php echo $link."/".strtolower($className)?>/?start=0&limit=3&callback=Ext
<?= "**************************************************************************************\n"?>
<?php echo $link."/".strtolower($className)?>/?start=0&limit=3&filter=[{"property":"<?= $pk ?>","value":1}]&callback=Ext
<?= "**************************************************************************************\n"?>
<?php echo $link."/".strtolower($className)?>/?start=0&limit=3&sort=[{"property":"<?= $pk ?>","direction":"asc"}]&callback=Ext
<?= "**************************************************************************************\n"?>
<?php echo $link."/".strtolower($className)?>/?start=0&limit=3&filter=[{"property":"<?= $pk ?>","value":1}]&sort=[{"property":"<?= $pk ?>","direction":"asc"}]&callback=Ext

<?= "***************************************** QUERY *********************************************\n"?>
<?php echo $link."/".strtolower($className)?>/?start=0&limit=3&query=[{"<?= $pk ?>":1}]&callback=Ext

<?php if($className == "Usuario000101"){?>
<?= "************************************** LISTAPRIVILEGIOSUSUARIO *********************************\n"?>
<?php echo $link."/usuario000101"?>/listaPrivilegiosUsuario?start=0&limit=3&callback=Ext
<?= "***************************************** LOGIN *********************************************\n"?>
<?php echo $link."/usuario000101"?>/login?login_usuario=admin&contrasena_usuario=admin&callback=Ext

<?= "***************************************** LOGOUT *********************************************\n"?>
<?php echo $link."/usuario000101"?>/logout?callback=Ext

<?= "***************************************** INSERT *********************************************\n"?>
<?php echo $link."/usuario000101"?>/insert?callback=Ext
<?php } ?>