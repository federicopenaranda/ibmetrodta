<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "certificado_04_14_01".
 *
 * @property integer $id_certificado
 * @property integer $fk_id_peticion
 * @property string $fecha_acreditacion_inicial_certificado
 * @property string $fecha_validez_certificado
 * @property string $texto1_certificado
 * @property string $escaneado_certificado
 * @property string $fecha_ultima_generacion_certificado
 * @property string $fecha_creacion_certificado
 * @property string $estado_certificado
 * @property string $codigo_certificado
 *
 * @property Peticion010401 $fkIdPeticion
 */
class Certificado041401 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'certificado_04_14_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion'], 'required'],
            [['fk_id_peticion'], 'integer'],
            [['fecha_acreditacion_inicial_certificado', 'fecha_validez_certificado', 'fecha_ultima_generacion_certificado', 'fecha_creacion_certificado'], 'safe'],
            [['texto1_certificado', 'estado_certificado', 'codigo_certificado'], 'string'],
            [['escaneado_certificado'], 'string', 'max' => 200]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_certificado' => 'Id Certificado',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fecha_acreditacion_inicial_certificado' => 'Fecha Acreditacion Inicial Certificado',
            'fecha_validez_certificado' => 'Fecha Validez Certificado',
            'texto1_certificado' => 'Texto1 Certificado',
            'escaneado_certificado' => 'Escaneado Certificado',
            'fecha_ultima_generacion_certificado' => 'Fecha Ultima Generacion Certificado',
            'fecha_creacion_certificado' => 'Fecha Creacion Certificado',
            'estado_certificado' => 'Estado Certificado',
            'codigo_certificado' => 'Codigo Certificado',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticion()
    {
        return $this->hasOne(Peticion010401::className(), ['id_peticion' => 'fk_id_peticion']);
    }
	
    public function atributes() {
		return [
 		 'id_certificado',
 		 'fk_id_peticion',
 		 'fecha_acreditacion_inicial_certificado',
 		 'fecha_validez_certificado',
 		 'texto1_certificado',
 		 'escaneado_certificado',
 		 'fecha_ultima_generacion_certificado',
 		 'fecha_creacion_certificado',
 		 'estado_certificado',
 		 'codigo_certificado',
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
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_certificado');
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
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
