<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "satisfaccion_evaluacion_04_12_03".
 *
 * @property integer $id_satisfaccion_evaluacion
 * @property integer $fk_id_criterio_satisfaccion
 * @property integer $fk_id_satisfaccion_cliente
 * @property integer $puntaje_satisfaccion_evaluacion
 * @property string $etiqueta_satisfaccion_evaluacion
 *
 * @property CriterioSatisfaccion041204 $fkIdCriterioSatisfaccion
 * @property SatisfaccionCliente041201 $fkIdSatisfaccionCliente
 */
class SatisfaccionEvaluacion041203 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'satisfaccion_evaluacion_04_12_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_criterio_satisfaccion', 'fk_id_satisfaccion_cliente'], 'required'],
            [['fk_id_criterio_satisfaccion', 'fk_id_satisfaccion_cliente', 'puntaje_satisfaccion_evaluacion'], 'integer'],
            [['etiqueta_satisfaccion_evaluacion'], 'string', 'max' => 45]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_satisfaccion_evaluacion' => 'Id Satisfaccion Evaluacion',
            'fk_id_criterio_satisfaccion' => 'Fk Id Criterio Satisfaccion',
            'fk_id_satisfaccion_cliente' => 'Fk Id Satisfaccion Cliente',
            'puntaje_satisfaccion_evaluacion' => 'Puntaje Satisfaccion Evaluacion',
            'etiqueta_satisfaccion_evaluacion' => 'Etiqueta Satisfaccion Evaluacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdCriterioSatisfaccion()
    {
        return $this->hasOne(CriterioSatisfaccion041204::className(), ['id_criterio_satisfaccion' => 'fk_id_criterio_satisfaccion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdSatisfaccionCliente()
    {
        return $this->hasOne(SatisfaccionCliente041201::className(), ['id_satisfaccion_cliente' => 'fk_id_satisfaccion_cliente']);
    }
	
    public function atributes() {
		return [
 		 'id_satisfaccion_evaluacion',
 		 'fk_id_criterio_satisfaccion',
 		 'fk_id_satisfaccion_cliente',
 		 'puntaje_satisfaccion_evaluacion',
 		 'etiqueta_satisfaccion_evaluacion',
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
        	'CriterioSatisfaccion041204',
        	'SatisfaccionCliente041201',
     	];
    }

    public function getNamePk() {
		return array('id_satisfaccion_evaluacion');
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
			'id_criterio_satisfaccion'=>array('criterio_satisfaccion_04_12_04','fk_id_criterio_satisfaccion'),
			'id_satisfaccion_cliente'=>array('satisfaccion_cliente_04_12_01','fk_id_satisfaccion_cliente'),
		);
    }
    
}
