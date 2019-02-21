<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "personal_autorizado_04_13_03".
 *
 * @property integer $id_personal_autorizado
 * @property integer $fk_id_anexo_convenio
 * @property string $ensayista_personal_autorizado
 * @property string $ensayo_personal_autorizado
 *
 * @property AnexoConvenio041301 $fkIdAnexoConvenio
 */
class PersonalAutorizado041303 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'personal_autorizado_04_13_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_anexo_convenio'], 'required'],
            [['fk_id_anexo_convenio'], 'integer'],
            [['ensayista_personal_autorizado', 'ensayo_personal_autorizado'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_personal_autorizado' => 'Id Personal Autorizado',
            'fk_id_anexo_convenio' => 'Fk Id Anexo Convenio',
            'ensayista_personal_autorizado' => 'Ensayista Personal Autorizado',
            'ensayo_personal_autorizado' => 'Ensayo Personal Autorizado',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdAnexoConvenio()
    {
        return $this->hasOne(AnexoConvenio041301::className(), ['id_anexo_convenio' => 'fk_id_anexo_convenio']);
    }
	
    public function atributes() {
		return [
 		 'id_personal_autorizado',
 		 'fk_id_anexo_convenio',
 		 'ensayista_personal_autorizado',
 		 'ensayo_personal_autorizado',
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
        	'AnexoConvenio041301',
     	];
    }

    public function getNamePk() {
		return array('id_personal_autorizado');
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
			'id_anexo_convenio'=>array('anexo_convenio_04_13_01','fk_id_anexo_convenio'),
		);
    }
    
}
