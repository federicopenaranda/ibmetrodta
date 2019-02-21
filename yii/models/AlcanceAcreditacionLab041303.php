<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "alcance_acreditacion_lab_04_13_03".
 *
 * @property integer $id_alcance_acreditacion_lab
 * @property integer $fk_id_anexo_convenio
 * @property string $descripcion_ensayo_alcance_acreditacion_lab
 * @property string $metodo_ensayo_alcance_acreditacion_lab
 * @property string $rango_medicion_alcance_acreditacion_lab
 * @property string $incertidumbre_alcance_acreditacion_lab
 *
 * @property AnexoConvenio041301 $fkIdAnexoConvenio
 */
class AlcanceAcreditacionLab041303 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'alcance_acreditacion_lab_04_13_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_anexo_convenio'], 'required'],
            [['fk_id_anexo_convenio'], 'integer'],
            [['descripcion_ensayo_alcance_acreditacion_lab', 'metodo_ensayo_alcance_acreditacion_lab', 'rango_medicion_alcance_acreditacion_lab', 'incertidumbre_alcance_acreditacion_lab'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_alcance_acreditacion_lab' => 'Id Alcance Acreditacion Lab',
            'fk_id_anexo_convenio' => 'Fk Id Anexo Convenio',
            'descripcion_ensayo_alcance_acreditacion_lab' => 'Descripcion Ensayo Alcance Acreditacion Lab',
            'metodo_ensayo_alcance_acreditacion_lab' => 'Metodo Ensayo Alcance Acreditacion Lab',
            'rango_medicion_alcance_acreditacion_lab' => 'Rango Medicion Alcance Acreditacion Lab',
            'incertidumbre_alcance_acreditacion_lab' => 'Incertidumbre Alcance Acreditacion Lab',
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
 		 'id_alcance_acreditacion_lab',
 		 'fk_id_anexo_convenio',
 		 'descripcion_ensayo_alcance_acreditacion_lab',
 		 'metodo_ensayo_alcance_acreditacion_lab',
 		 'rango_medicion_alcance_acreditacion_lab',
 		 'incertidumbre_alcance_acreditacion_lab',
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
		return array('id_alcance_acreditacion_lab');
    }
    
    public function getModule() {
		return 'evaluacion';
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
