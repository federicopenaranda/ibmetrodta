<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "oec_acreditacion_solicitada_02_00_03".
 *
 * @property integer $id_oec_acreditacion_solicitada
 * @property integer $fk_id_oec
 * @property string $inspeccion_oec_acreditacion_solicitada
 * @property string $especificaciones_oec_acreditacion_solicitada
 *
 * @property Oec020001 $fkIdOec
 */
class OecAcreditacionSolicitada020003 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'oec_acreditacion_solicitada_02_00_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_oec', 'inspeccion_oec_acreditacion_solicitada', 'especificaciones_oec_acreditacion_solicitada'], 'required'],
            [['fk_id_oec'], 'integer'],
            [['inspeccion_oec_acreditacion_solicitada', 'especificaciones_oec_acreditacion_solicitada'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_oec_acreditacion_solicitada' => 'Id Oec Acreditacion Solicitada',
            'fk_id_oec' => 'Fk Id Oec',
            'inspeccion_oec_acreditacion_solicitada' => 'Inspeccion Oec Acreditacion Solicitada',
            'especificaciones_oec_acreditacion_solicitada' => 'Especificaciones Oec Acreditacion Solicitada',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOec()
    {
        return $this->hasOne(Oec020001::className(), ['id_oec' => 'fk_id_oec']);
    }
	
    public function atributes() {
		return [
 		 'id_oec_acreditacion_solicitada',
 		 'fk_id_oec',
 		 'inspeccion_oec_acreditacion_solicitada',
 		 'especificaciones_oec_acreditacion_solicitada',
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
        	'Oec020001',
     	];
    }

    public function getNamePk() {
		return array('id_oec_acreditacion_solicitada');
    }
    
    public function getModule() {
		return 'oec';
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
			'id_oec'=>array('oec_02_00_01','fk_id_oec'),
		);
    }
    
}
