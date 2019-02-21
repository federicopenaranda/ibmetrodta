<?php
function getPath($modelClass) {
	if ($modelClass == "Activo020100")
		return new app\models\Activo020100();
	if ($modelClass == "ActivoClasificacion020103")
		return new app\models\ActivoClasificacion020103();
	if ($modelClass == "ActivoEntrega020304")
		return new app\models\ActivoEntrega020304();
	if ($modelClass == "ActivoEstado020203")
		return new app\models\ActivoEstado020203();
	if ($modelClass == "ActivoProveedor020103")
		return new app\models\ActivoProveedor020103();
	if ($modelClass == "ActivoRevision020200")
		return new app\models\ActivoRevision020200();
	if ($modelClass == "ActivoTipo020103")
		return new app\models\ActivoTipo020103();
	if ($modelClass == "Area010003")
		return new app\models\Area010003();
	if ($modelClass == "Cargo010003")
		return new app\models\Cargo010003();
	if ($modelClass == "Departamento010003")
		return new app\models\Departamento010003();
	if ($modelClass == "LogSistema030004")
		return new app\models\LogSistema030004();
	if ($modelClass == "Revision020203")
		return new app\models\Revision020203();
	if ($modelClass == "Unidad010003")
		return new app\models\Unidad010003();
	if ($modelClass == "Usuario000100")
		return new app\models\Usuario000100();
	if ($modelClass == "UsuarioPrivilegio000003")
		return new app\models\UsuarioPrivilegio000003();
	if ($modelClass == "UsuarioTipo000200")
		return new app\models\UsuarioTipo000200();
	if ($modelClass == "UsuarioTipoPrivilegio000201")
		return new app\models\UsuarioTipoPrivilegio000201();
	if ($modelClass == "UsuarioTipoUsuario000101")
		return new app\models\UsuarioTipoUsuario000101();
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
		if (strpos($name,'Fk')!== FALSE && substr($name,strlen($name)-1,strlen($name))!='s')
			$cad.= "'".lcfirst($name)."',";
	endforeach;
	return substr($cad, 0, strlen($cad) - 1);
}


