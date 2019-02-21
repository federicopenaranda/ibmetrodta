<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "equipo_eval_04_08_03".
 *
 * @property integer $id_equipo_eval
 * @property integer $fk_id_eval_tecnica
 * @property string $nombre_equipo_eval
 * @property string $disponibilidad_equipo_eval
 * @property string $programa_calibracion_equipo_eval
 * @property string $identificacion_individual_equipo_eval
 * @property string $registros_equipo_eval
 * @property string $verificaciones_intermedias_equipo_eval
 * @property string $proteccion_equipo_eval
 *
 * @property EvalTecnica040801 $fkIdEvalTecnica
 */
class EquipoEval040803 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'equipo_eval_04_08_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_eval_tecnica'], 'required'],
            [['fk_id_eval_tecnica'], 'integer'],
            [['nombre_equipo_eval', 'disponibilidad_equipo_eval', 'programa_calibracion_equipo_eval', 'identificacion_individual_equipo_eval', 'registros_equipo_eval', 'verificaciones_intermedias_equipo_eval', 'proteccion_equipo_eval'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_equipo_eval' => 'Id Equipo Eval',
            'fk_id_eval_tecnica' => 'Fk Id Eval Tecnica',
            'nombre_equipo_eval' => 'Nombre Equipo Eval',
            'disponibilidad_equipo_eval' => 'Disponibilidad Equipo Eval',
            'programa_calibracion_equipo_eval' => 'Programa Calibracion Equipo Eval',
            'identificacion_individual_equipo_eval' => 'Identificacion Individual Equipo Eval',
            'registros_equipo_eval' => 'Registros Equipo Eval',
            'verificaciones_intermedias_equipo_eval' => 'Verificaciones Intermedias Equipo Eval',
            'proteccion_equipo_eval' => 'Proteccion Equipo Eval',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEvalTecnica()
    {
        return $this->hasOne(EvalTecnica040801::className(), ['id_eval_tecnica' => 'fk_id_eval_tecnica']);
    }
	
    public function atributes() {
		return [
 		 'id_equipo_eval',
 		 'fk_id_eval_tecnica',
 		 'nombre_equipo_eval',
 		 'disponibilidad_equipo_eval',
 		 'programa_calibracion_equipo_eval',
 		 'identificacion_individual_equipo_eval',
 		 'registros_equipo_eval',
 		 'verificaciones_intermedias_equipo_eval',
 		 'proteccion_equipo_eval',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'EvalTecnica040801',
     	];
    }

    public function getNamePk() {
		return array('id_equipo_eval');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return '';
    }
    
    public function getFile() {
		return array(
        );
    }
    
	public function getLogin() {
		return '';
    }
    
    public function getPrivate() {
    	return array(
		);
    }
    
    public function getSearch() {
    	return array(
		);
    }
    
    public function getNoRead() {
    	return array(
		);
    }
    public function getReferential(){
		return '';
   }
   
   public function getMain() {
       return '';
    }
   
    public function getInstance($model) {
    	switch ($model) {
    	}
	}
    
    public function findAtribute($dato) {
    	if (in_array($dato, $this->atributes()))
        	return TRUE;
        else {
        	foreach ($this->getListHasMany() as $modelRel):
            	$objRel=new $modelRel();
                if (in_array($dato,$objRel->atributes()))
                	return TRUE;
            endforeach;
            return FALSE;
        }
    }
    
    public function divideRecords($url) {
		$params=array();
		foreach ($url as $value) {
			if (strpos($value,"records")!==FAlSE){
				$str=str_replace('"[', '[',trim(urldecode($value),"recods="));
				$str=str_replace(']"', ']',$str);
				$str=str_replace('\"', '"', $str);
				$params[]=$str;
			} 
		}
		return $params;
	}
    
    public function getNameFKey() {
    	return array(
			'id_eval_tecnica'=>array('eval_tecnica_04_08_01','fk_id_eval_tecnica'),
		);
    }
    
}
