<?php 
echo "<?php\n";
?>
function getPath($modelClass) {
<?php foreach($nameClass as $nameClas):?>
	if ($modelClass == "<?= $nameClas; ?>")
		return new app\models\<?= $nameClas?>();
<?php endforeach; ?>
}

function getFkManyMany($listHasManys,$pk) {
	$listFkManyMany = array();
	
	foreach($listHasManys as $listHasMany):
		$obj=getPath($listHasMany);
		$listAtribs=$obj->atributes();
		
		if(sizeof($obj->atributes()) == 2 && in_array("fk_".$pk,$obj->atributes())) {
			foreach($listAtribs as $listAtrib):
				if("fk_".$pk != $listAtrib)
					$listFkManyMany[] = $listAtrib;
		endforeach;
		}
	endforeach;
	return $listFkManyMany;
}

function getWith($relations) {
	$cad="";
	foreach ($relations as $name => $relation):
		if (strpos($name,'Fk')!== FALSE && substr($name,strlen($name)-1,strlen($name))!='s' || strpos($name,'02') !== FALSE)
			$cad.= "'".lcfirst($name)."',";
	endforeach;
	return substr($cad, 0, strlen($cad) - 1);
}


