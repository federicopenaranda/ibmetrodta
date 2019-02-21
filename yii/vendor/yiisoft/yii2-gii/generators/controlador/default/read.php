<?php
namespace app;
require_once("instancia.php");
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
$pk = $model->getNamePk();
/**
* En listFkManyManys se almacena los nombres de las claves foraneas de las relaciones muchos a muchos
*/
$listFkManyManys=getFkManyMany($model->getListHasMany(),$pk[0]);
/**
* En with se almacena la cadena de relaciones que tiene el modelo principal
*/
$with=getWith($relations);
?>
<?php
/**
 * This is the template for generating the model class of a specified table.
 */

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\model\Generator */
/* @var $tableName string full table name */
/* @var $className string class name */
/* @var $tableSchema yii\db\TableSchema */
/* @var $labels string[] list of attribute labels (name => label) */
/* @var $rules string[] list of validation rules */
/* @var $relations array list of relations (name => relation declaration) */

echo "<?php\n";
?>

namespace <?= $generator->ns ?>;

namespace app\controllers\<?= $className; ?>;
use yii\base\Action;
use app\models\<?= $className; ?>;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new <?= $className; ?>;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
<?php foreach ($listFkManyManys as $listFkManyMany): ?>
						<?= "'{$listFkManyMany}',\n" ?>
<?php endforeach;?>
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "<?= $pk[0] ?>";
					$directionSort	= "asc";
				}
                $condiQuery = "";
                
                if (isset($_GET['query']) && $_GET['query'] != "") {
					
					$filtro = Json::decode($_GET['query']);

					foreach ($filtro as $fvalues):
						foreach($fvalues as $fk => $fv):
                        	if ($fv != "")
								$condiQuery.= $fk." LIKE '%".$fv."%' OR ";
						endforeach;
					endforeach;
					$condiQuery = substr ($condiQuery, 0, -3);
				}//query
                
                if (isset($_GET['query']) && $_GET['query'] != "" && $condiQuery != "") {
                    $models = <?= $className; ?>::find()
                    							->distinct(true)
<?php if ($with != "") {?>
												->with(<?= $with ?>)
<?php } ?>
												->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== !is_object($model->$n()->via) || strpos($name,'02') !== FALSE){?>
												<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = <?= $className; ?>::find()
                    							->distinct(true)
<?php if ($with != "") {?>
												->with(<?= $with ?>)
<?php } ?>
												->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via) || strpos($name,'02') !== FALSE){?>
												<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
<?php if ($with != "") {?>
											for ($i=0; $i < sizeof($models); $i++) {
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via)){?>
                            					unset($models[$i]['<?= lcfirst($name); ?>']);
<?php }endforeach;?>
											}
<?php } ?>           
<?php foreach ($relations as $name => $relation):?>
<?php  if(strpos($name,'2s')!==FALSE) { 
$objMM = getPath(substr($name,0,-1));
$fkMM = getNameFKMM($objMM->getNameFKey(),$pk[0]);?>
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['<?= lcfirst($name) ?>']); $j++){
							$aux[] = $models[$i]['<?= lcfirst($name) ?>'][$j]['<?= $fkMM[1];?>'];	
						}
						$models[$i]['<?= lcfirst($name) ?>'] = $aux;
					}
<?php } ?>
<?php endforeach; ?>
				} else {

                    $filtros=array();
                    if (isset($_GET['filter']) && $_GET['filter']!='') {
                        
                        $filtros = Json::decode($_GET['filter']);
                        $contFil=1;
                        $condi="";
                        $sw = 0;
                        foreach($filtros as $filtro):
                            
                            if (in_array($filtro['property'],$listManyMany)) {
                                
                                $listSubQuery[] = <?= $className; ?>::find()
                                				->distinct(true)
<?php if ($with != "") {?>
                                                ->with(<?= $with ?>)
<?php } ?>
                                                ->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via) || strpos($name,'02') !== FALSE){?>
												<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
                                                ->where([$filtro['property']=>$filtro['value']])
                                                ->all();
                                $sw=1;	
                            } else {
                            	if (is_numeric($filtro['value']) && strpos($filtro['property'],'fk_id_') !== FALSE) 
									$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." = ".$filtro['value']." AND " : $filtro['property']." = ".$filtro['value'];
                                else
                                	$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." LIKE '%".$filtro['value']."%' AND " : $filtro['property']." LIKE '%".$filtro['value']."%'";	
                                $contFil++;
                            }
                        endforeach;
                        if ($sw == 0) {
                        	$models = <?= $className; ?>::find()
                            					->distinct(true)
<?php if ($with != "") {?>
                                                ->with(<?= $with ?>)
<?php } ?>
                                                ->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via) || strpos($name,'02') !== FALSE){?>
												<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = <?= $className; ?>::find()
                            					->distinct(true)
                                                ->select ([
<?php foreach(array_keys($model->attributeLabels()) as $atribute):
if ($atribute != "contrasena_usuario") {?>
														'<?= $atribute; ?>',
<?php }//if ?>
<?php endforeach;?>
<?php foreach($model->getListHasOne() as $modOne):
$objOne = getPath($modOne);?>

														'<?= $objOne->getDisplay(); ?>',
<?php endforeach;?>
														])
<?php if ($with != "") {?>
                                                ->with(<?= $with ?>)
<?php } ?>
                                                ->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via) || strpos($name,'02') !== FALSE){?>
												<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
<?php if ($with != "") {?>
											for ($i=0; $i < sizeof($models); $i++) {
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via)){?>
                            					unset($models[$i]['<?= lcfirst($name); ?>']);
<?php } endforeach;?>
											}
<?php }//if ?>
<?php foreach ($relations as $name => $relation):
$codigo = divideCodigo($name);?>
<?php  if(strpos($name,'2s')!==FALSE) {
$objMM= getPath(substr($name,0,-1));
$fkMM = getNameFKMM($objMM->getNameFKey(),$pk[0]);?>
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['<?= lcfirst($name) ?>']); $j++){
                                    $aux[] = $models[$i]['<?= lcfirst($name) ?>'][$j]['<?= $fkMM[1];?>'];	
                                }
                                $models[$i]['<?= lcfirst($name) ?>'] = $aux;
                            }
<?php } ?>
<?php endforeach; ?>
                        } else {
                        	$models = <?= $className; ?>::find()
                            					->distinct(true)
<?php if ($with != "") {?>
                                                ->with(<?= $with ?>)
<?php } ?>
                                                ->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via) || strpos($name,'02') !== FALSE ){?>
							<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
                                                ->where(['IN','<?= $pk[0]; ?>',$listSubQuery[0]])
                                                ->andWhere(['IN','<?= $pk[0]; ?>',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = <?= $className; ?>::find()
                            					->distinct(true)
                                                ->select ([
<?php foreach(array_keys($model->attributeLabels()) as $atribute):
if ($atribute != "contrasena_usuario") {?>
														'<?= $atribute; ?>',
<?php } //if?>
<?php endforeach;?>
<?php foreach($model->getListHasOne() as $modOne):
$objOne = getPath($modOne);?>
														'<?= $objOne->getDisplay(); ?>',
<?php endforeach;?>
														])
<?php if ($with != "") {?>
                                                ->with(<?= $with ?>)
<?php } ?>
                                                ->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via) || strpos($name,'02') !== FALSE){?>
												<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
                                                ->where(['IN','<?= $pk[0]; ?>',$listSubQuery[0]])
                                                ->andWhere(['IN','<?= $pk[0]; ?>',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
<?php if ($with != "") {?>
											for ($i=0; $i < sizeof($models); $i++) {
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via)){?>
                            					unset($models[$i]['<?= lcfirst($name); ?>']);
<?php }endforeach;?>
											}
<?php } ?>
<?php foreach ($relations as $name => $relation):
$codigo = divideCodigo($name);?>
<?php  if(strpos($name,'2s')!==FALSE) {
$objMM= getPath(substr($name,0,-1));
$fkMM = getNameFKMM($objMM->getNameFKey(),$pk[0]);?>
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['<?= lcfirst($name) ?>']); $j++){
                                    $aux[] = $models[$i]['<?= lcfirst($name) ?>'][$j]['<?= $fkMM[1];?>'];	
                                }
                                $models[$i]['<?= lcfirst($name) ?>'] = $aux;
                            }
<?php } ?>
<?php endforeach; ?>
                        }
                        
                    } else {
                    	$models = <?= $className; ?>::find()
                        	->distinct(true)
<?php if ($with != "") {?>
                            ->with(<?= $with ?>)
<?php } ?>
                            ->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via)){?>
							<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
							->all();
						$total = sizeof($models);
                        $models = <?= $className; ?>::find()
                        	->distinct(true)
							 ->select ([
<?php foreach(array_keys($model->attributeLabels()) as $atribute):
if ($atribute != "contrasena_usuario") {?>
										'<?= $atribute; ?>',
<?php }//if?>
<?php endforeach;?>
<?php foreach($model->getListHasOne() as $modOne):
$objOne = getPath($modOne);?>
										'<?= $objOne->getDisplay(); ?>',
<?php endforeach;?>
										])
<?php if ($with != "") {?>
                            ->with(<?= $with ?>)
<?php } ?>
                            ->asArray()
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via)){?>
							<?= "->joinWith('" . lcfirst($name) . "')\n";?>
<?php } ?>
<?php endforeach; ?>
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
<?php if ($with != "") {?>
						for ($i=0; $i < sizeof($models); $i++) {
<?php foreach($relations as $name=>$relation):
$n="get".$name;
				if (strpos($name,'Fk')!== FALSE && !is_object($model->$n()->via)){?>
                            unset($models[$i]['<?= lcfirst($name); ?>']);
<?php }endforeach;?>
						}
<?php } //if?>
<?php foreach ($relations as $name => $relation):
$codigo = divideCodigo($name);?>
<?php  if(strpos($name,'2s')!==FALSE) {
$objMM= getPath(substr($name,0,-1));
$fkMM = getNameFKMM($objMM->getNameFKey(),$pk[0]);?>
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['<?= lcfirst($name) ?>']); $j++){
								$aux[] = $models[$i]['<?= lcfirst($name) ?>'][$j]['<?= $fkMM[1];?>'];
							}
							$models[$i]['<?= lcfirst($name) ?>'] = $aux;
						}
<?php } ?>
<?php endforeach; ?>
                    }
				}//if query	
				$respuesta->registros=$models;	
				$respuesta->total=$total;
			} catch (\Exception $e) {
				$error=$e->getMessage();
			}
			if ($error=="")	
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			else {
				$respuesta->meta=array("success"=>"false","msg"=>$error);
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			}
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}