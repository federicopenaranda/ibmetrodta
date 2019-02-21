<?php
#require_once "";
/**
* Esta funcion devuelve los nombres de las clases relacionadas (nombre_modelos) de tipo hasMany
* @param array $relations metodo  de relacion del modelo
* @return array de los nombres de modelos de las clase relacionadas
*/
function listClassName($relations){
	$listClassName=array();
	for($i=0;$i<sizeof($relations);$i++) {
				
		$current=current($relations);
		if (current($current)=="CHasManyRelation") {
			$key=key($relations);next($current);
			$nomode=current($current);
			$listClassName[]=$nomode;
		}
		next($relations);
	}
	return $listClassName;
}
/**
* Esta funcion devuelve los nombres de las clases relacionadas (nombre_modelos) de tipo hasMany considerando el submodulo en que se encuentran
* @param array $relations metodo  de relacion del modelo
* @return array de los nombres de modelos de las clase relacionadas
*/
function listClassNameCod($listClasHasMany,$cod) {
	
	$listClassName=array();
	#$listClasHasMany=listClassName($relations);
	foreach ($listClasHasMany as $nomSubModel) {
		$submodel = getPath($nomSubModel);
	    #$submodel=new $nomSubModel();
	    $listSubCodigo = divideCodigo($submodel->tableName());                
	    if($cod == $listSubCodigo[1])
	    	$listClassName[]=$nomSubModel;	
	}
	return $listClassName;
}

/**
* Esta function lista todos los nombres de los campos que son llaves primarias
* @param array $columns la lista de columnas de la clase AR
* @return array de nombres de llaves primarias 
*/
function listNamePrimaryKey($columns){
	$listNamePrimaryKey=array();
	foreach ($columns as $valor) {
		if ($valor->isPrimaryKey == 1)
			$listNamePrimaryKey[]=$valor->name;
	}
	return $listNamePrimaryKey;
}
/**
* Esta function cuenta las llaves Primarias de una tabla
* @param array $columns la lista de columnas de la clase AR
* @return int cantidad de llaves Primarias
*/
function quantityPrimaryKey($columns) {
	$quantity=0;
	foreach ($columns as $valor) {
		if ($valor->isPrimaryKey == 1)
			$quantity++;
	}
	return $quantity;
}

function quantityColumnSinPk($columns) {
	$quantity=0;
	foreach ($columns as $valor) {
		if ($valor->isPrimaryKey !== 1)
			$quantity++;
	}
	return $quantity;
}

function getNamePk($columns) {
	foreach ($columns as $valor) {
		if ($valor->isPrimaryKey == 1)
			return $valor->name;
	}
	return null;
}
/**
* Esta function develve los nombre de las columnas de la tabla sin contar la llave primaria
* @param array $columns la lista de columnas de la clase AR
* @return array nombre de columnas
*/
function listColumnsSinPk($columns) {
	$col=array();
	foreach ($columns as $valor) {
		if ($valor->isPrimaryKey !== 1)
			$col[]=$valor;
	}
	return $col;
}

function listColumnsSinPkAndDate($columns) {
	$col=array();
	foreach ($columns as $column) {
		if ($column->isPrimaryKey != 1 && strpos($column->name,"fecha_creacion")===FALSE)
			$col[]=$column->name;
	}
	return $col;
}

function listColumnsSinDate($columns) {
	$col=array();
	foreach ($columns as $column) {
		if (strpos($column->name,"fecha_creacion")===FALSE)
			$col[]=$column->name;
	}
	return $col;
}
/**
* Esta function lista todos los nombres de los campos que son llaves foraneas
* @param array $columns la lista de columnas de la clase AR
* @return array de nombres de llaves foraneas
*/
function listNameForeignKey($columns){
	$listNameForeignKey=array();
	foreach ($columns as $valor) {
		if ($valor->isForeignKey == 1)
			$listNameForeignKey[]=$valor->name;
	}
	return $listNameForeignKey;
}
/**
* Esta function cuenta las llaves foraneas de una tabla
* @param array $columns la lista de columnas de la clase AR
* @return int cantidad de llaves foraneas
*/
function quantityForeignKey($columns) {
	$quantity=0;
	foreach ($columns as $valor) {
		
		if(strpos($valor->name,"fk_")!==FALSE)
		#if ($valor->isForeignKey == 1)
			$quantity++;
	}
	return $quantity;
}

/**
* Esta function agarra el codigo de la tabla luego lo divide por el guion bajo, obteniendo el codigo del modulo y el codigo del patron
* @param string $tableName el nombre de la tabla
* @return array $listCodigo el vector de codigos;
*/
function divideCodigo($tableName){
	$listCodigo=explode("_", substr($tableName,-8));
	return $listCodigo;
}

function getNameTableSinCod($tableName){
	
	$listCodigo=substr($tableName,0,strlen($tableName)-6);
	return $listCodigo;
}
/**
* Esta funcion compone un array asociativo donde la clave = nombre_de_la_tabla y valor = nombre_del_modelo
* @param array $relations metodo de relacion del modelo
* @return array $relacion el vector asociativo;
*/
function listRelation($relations){
	$relacion=array();
	$listClassName=listClassName($relations);
	for($i=0;$i<sizeof($listClassName);$i++){
		$ob=new $listClassName[$i]();
		$relacion[$ob->tableName()] =$listClassName[$i] ;
		#$relacion[trim(strtolower (preg_replace ('/([A-Z])/', '_$1', $aux[$i])),"_")] =$aux[$i] ;
	}
	return $relacion;
}
/**
* fuctiones para read
*/
function obtRelacion($relations)
{
	$aux=array();
	for($i=0;$i<sizeof($relations);$i++){
		$current=current($relations);
		if(current($current)=="CBelongsToRelation"){
			$key=key($relations);
			next($current);
			$nomode=current($current);
			$aux[]=$key;//retorna el fkIdBeneficiario	0
			$aux[]=$nomode;//retorna Beneficiario		1
			$aux[]=next($current);//fk_id_beneficiario	2
		}
		next($relations);
	}
	return $aux;
}
function obtHasMany($relations)
{
	$hasmany=array();
	for($i=0;$i<sizeof($relations);$i++){
		$current=current($relations);
		if(current($current) == "CHasManyRelation"){
			$key=key($relations);
			next($current);
			$nomode=current($current);
			$obj=new $nomode();
			//if(sizeof($obj->attributeLabels())==3){
				$hasmany[]=$key;//retorna el fkIdBeneficiario	0
				$hasmany[]=$nomode;//retorna Beneficiario		1
				$hasmany[]=next($current);//fk_id_beneficiario	2
			//}
		}
		next($relations);
	}
	return $hasmany;
}
function obtNameId($attributeLabels){
	$sw=1;
	$id="";
	foreach($attributeLabels as $key=>$value) {
		if ($sw==1) {
			$id = $key;
			$sw = 0;
		}
	}

	return $id;
}
function getNomTablaSinCod($tableName){
	$tam=strlen($tableName)-9;
	$listCodigo=substr($tableName,0,$tam);
	return $listCodigo;
}

function listClassNameBelongsTo($relations){
	$listClassName = array();
	for($i=0;$i<sizeof($relations);$i++) {
				
		$current=current($relations);
		if (current($current) == "CBelongsToRelation") {
			$key=key($relations);next($current);
			$nomode=current($current);
			$listClassName[]=$nomode;	
		}
		next($relations);
	}
	return $listClassName;
}

function listClassNameBelongsToTabExt($listClasBelTo,$cod){
	$listClassName=array();
	#$listClasBelTo=listClassNameBelongsTo($relations);

	$contfk=0; 
	foreach ($listClasBelTo as $nomSubModel) {
	    $submodel = getPath($nomSubModel);
	    $listSubCodigo = divideCodigo($submodel->tableName());
             
	    if($cod != $listSubCodigo[1])
			return $nomSubModel;
		else
			$contfk++;
	}
	if($contfk == 2){
		foreach ($listClasBelTo as $nomSubModel) {
	    $submodel = new $nomSubModel();
	    $listSubCodigo = divideCodigo($submodel->tableName());
             
	    if("00"!= $listSubCodigo[2])
			return $nomSubModel;
		}
	}
	return "";
}
/**
* Esta funcion verifica si un modelo tiene como campo un archivo
* $atributos con los campos de dicho modelo
*/

function verifArchivo($atributos){
	$listArchivos="";
	foreach($atributos as $atributo):
		if(strpos($atributo,"archivo_")!==FALSE)
			return $atributo;
	endforeach;
	/*$listArchivos=[];
	foreach($atributos as $atributo):
		if(strpos($atributo,"archivo_")!==FALSE)
			$listArchivos[]=$atributo;
	endforeach;*/
	return $listArchivos;
}
//functiones para el generador de ExtJs4.2
function getNumCampos($atributos){
	$listArchivos="";
	foreach($atributos as $atributo):
		if(strpos($atributo,"archivo_")!==FALSE)
			return $atributo;
	endforeach;
	/*$listArchivos=[];
	foreach($atributos as $atributo):
		if(strpos($atributo,"archivo_")!==FALSE)
			$listArchivos[]=$atributo;
	endforeach;*/
	return $listArchivos;
}
/**
* Obtiene el nombre relacion de otra tablas relacionada de una tabla muchos a muchos
*/
function getNameFKMM($listNameFk,$pk) {
	
	$keys = array_keys($listNameFk);
	$clave = array_search($pk,$keys);
	
	if ($clave == sizeof(array_keys($listNameFk))-1){
		return $listNameFk[$keys[$clave-1]];
	} else {
		return $listNameFk[$keys[$clave+1]];
	}
}
/**
 *
 */

function getTablesReferential($listMod,$className) {
	foreach($listMod as $Mod):
		if($Mod != $className)
			return $Mod;
	endforeach;
}

function getNameField($listField){
	foreach($listField as $field):
		if(strpos($field,'fk_id') === FALSE && strpos($field,'id_') === FALSE){
			return $field;
		}
	endforeach;
	return;
}
//NUEVO
function getConversionType($type){
	if ($type == "integer" || $type == "smallint") {
    	return "int";
	} elseif ($type == "date" || $type == "datetime") {
    	return "datetime";
	} elseif ($type == "text") {
		return "string"; 
	} elseif ($type == "string") {
		return "string"; 
	} elseif ($type == "float") {
		return "float"; 
	}
}
function getTotalCamSinLP($columns,$login,$listPrivate){
	$total=0;
	foreach($columns as $column):
		if ($column->name != $login && !in_array($column->name,$listPrivate)){
			$total++;
		}
	endforeach;
	return $total;
}
function getTotalCamSinLog($columns,$login,$listPrivate){
	$total=0;
	foreach($columns as $column):
		if ($column->name != $login){
			$total++;
		}
	endforeach;
	return $total;
}
function getFormatTipeSearch($column,$contCom,$numAtrib,$listAbtrib) {
	$res="";
	$label= $listAbtrib[$column->name];
	if($column->type == "integer") {
		 $res="
								{
									xtype: 'numberfield',
									minValue: 0,
									maxValue: 10,
									name: '$column->name',
									fieldLabel: '$label',
									allowBlank: false
			";
		 
	}
	if($column->type == "date" || $column->type == "datetime"){
		$res = "
								{
									xtype: 'datefield',
                            		name: '$column->name',
                            		fieldLabel: '$label:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
			";
	}
	if($column->type == "text" || $column->type == "string"){
		$res="
								{
									xtype: 'textfield',
									name: '$column->name',
									fieldLabel: '$label',
									allowBlank: false
			";
	}
	if($column->type == "smallint"){
		$res="
								{
									xtype: 'combo',
									name: '$column->name',
									fieldLabel: '$label:',
									displayField: 'nombre',
									valueField: 'valor',
									store: new Ext.data.SimpleStore({
										fields: ['nombre', 'valor'],
										data : [['Activo', 1],['Inactivo', 0]]
									}),
									editable: false,
									forceSelection: true,
									allowBlank: false
		
			";
	}
	if($contCom==$numAtrib)
		$res.="					}\n";
	else
		$res.="					},";
	echo $res;
	
}
?>