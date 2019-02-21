<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "satisfaccion_cliente_04_12_01".
 *
 * @property integer $id_satisfaccion_cliente
 * @property integer $fk_id_peticion
 * @property string $reclamos_satisfaccion_cliente
 * @property string $empresa_satisfaccion_cliente
 * @property string $contacto_satisfaccion_cliente
 * @property string $lugar_satisfaccion_cliente
 * @property string $fecha_satisfaccion_cliente
 * @property string $fecha_creacion_satisfaccion_cliente
 *
 * @property Peticion010401 $fkIdPeticion
 * @property SatisfaccionEvaluacion041203[] $satisfaccionEvaluacion041203s
 */
class SatisfaccionCliente041201 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'satisfaccion_cliente_04_12_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion'], 'required'],
            [['fk_id_peticion'], 'integer'],
            [['reclamos_satisfaccion_cliente', 'empresa_satisfaccion_cliente', 'contacto_satisfaccion_cliente', 'lugar_satisfaccion_cliente'], 'string'],
            [['fecha_satisfaccion_cliente', 'fecha_creacion_satisfaccion_cliente'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_satisfaccion_cliente' => 'Id Satisfaccion Cliente',
            'fk_id_peticion' => 'Fk Id Peticion',
            'reclamos_satisfaccion_cliente' => 'Reclamos Satisfaccion Cliente',
            'empresa_satisfaccion_cliente' => 'Empresa Satisfaccion Cliente',
            'contacto_satisfaccion_cliente' => 'Contacto Satisfaccion Cliente',
            'lugar_satisfaccion_cliente' => 'Lugar Satisfaccion Cliente',
            'fecha_satisfaccion_cliente' => 'Fecha Satisfaccion Cliente',
            'fecha_creacion_satisfaccion_cliente' => 'Fecha Creacion Satisfaccion Cliente',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticion()
    {
        return $this->hasOne(Peticion010401::className(), ['id_peticion' => 'fk_id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSatisfaccionEvaluacion041203s()
    {
        return $this->hasMany(SatisfaccionEvaluacion041203::className(), ['fk_id_satisfaccion_cliente' => 'id_satisfaccion_cliente']);
    }
	
    public function atributes() {
		return [
 		 'id_satisfaccion_cliente',
 		 'fk_id_peticion',
 		 'reclamos_satisfaccion_cliente',
 		 'empresa_satisfaccion_cliente',
 		 'contacto_satisfaccion_cliente',
 		 'lugar_satisfaccion_cliente',
 		 'fecha_satisfaccion_cliente',
 		 'fecha_creacion_satisfaccion_cliente',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'SatisfaccionEvaluacion041203',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_satisfaccion_cliente');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return 'reclamos_satisfaccion_cliente';
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
			case 'SatisfaccionEvaluacion041203':
        		return new SatisfaccionEvaluacion041203();
                break;
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
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
