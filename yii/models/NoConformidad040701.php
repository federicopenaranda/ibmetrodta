<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "no_conformidad_04_07_01".
 *
 * @property integer $id_no_conformidad
 * @property integer $fk_id_peticion
 * @property string $objetivo_no_conformidad
 * @property string $numero_no_conformidad
 * @property string $nombre_persona_no_conformidad
 * @property string $fecha_no_conformidad
 * @property string $ref_norma_no_conformidad
 * @property string $ref_requisito_no_conformidad
 * @property string $no_conformidad
 * @property string $evidencia_no_conformidad
 * @property string $representate_oec_no_conformidad
 * @property string $representate_oec_cargo_no_conformidad
 * @property string $fecha_creacion_no_conformidad
 *
 * @property Peticion010401 $fkIdPeticion
 */
class NoConformidad040701 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'no_conformidad_04_07_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion'], 'required'],
            [['fk_id_peticion'], 'integer'],
            [['objetivo_no_conformidad', 'numero_no_conformidad', 'ref_norma_no_conformidad', 'ref_requisito_no_conformidad', 'no_conformidad', 'evidencia_no_conformidad', 'representate_oec_no_conformidad', 'representate_oec_cargo_no_conformidad'], 'string'],
            [['fecha_no_conformidad', 'fecha_creacion_no_conformidad'], 'safe'],
            [['nombre_persona_no_conformidad'], 'string', 'max' => 145]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_no_conformidad' => 'Id No Conformidad',
            'fk_id_peticion' => 'Fk Id Peticion',
            'objetivo_no_conformidad' => 'Objetivo No Conformidad',
            'numero_no_conformidad' => 'Numero No Conformidad',
            'nombre_persona_no_conformidad' => 'Nombre Persona No Conformidad',
            'fecha_no_conformidad' => 'Fecha No Conformidad',
            'ref_norma_no_conformidad' => 'Ref Norma No Conformidad',
            'ref_requisito_no_conformidad' => 'Ref Requisito No Conformidad',
            'no_conformidad' => 'No Conformidad',
            'evidencia_no_conformidad' => 'Evidencia No Conformidad',
            'representate_oec_no_conformidad' => 'Representate Oec No Conformidad',
            'representate_oec_cargo_no_conformidad' => 'Representate Oec Cargo No Conformidad',
            'fecha_creacion_no_conformidad' => 'Fecha Creacion No Conformidad',
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
 		 'id_no_conformidad',
 		 'fk_id_peticion',
 		 'objetivo_no_conformidad',
 		 'numero_no_conformidad',
 		 'nombre_persona_no_conformidad',
 		 'fecha_no_conformidad',
 		 'ref_norma_no_conformidad',
 		 'ref_requisito_no_conformidad',
 		 'no_conformidad',
 		 'evidencia_no_conformidad',
 		 'representate_oec_no_conformidad',
 		 'representate_oec_cargo_no_conformidad',
 		 'fecha_creacion_no_conformidad',
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
		return array('id_no_conformidad');
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
