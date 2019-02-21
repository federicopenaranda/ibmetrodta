<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "alcance_acreditacion_insp_04_13_03".
 *
 * @property integer $id_alcance_acreditacion_insp
 * @property integer $fk_id_anexo_convenio
 * @property string $fecha_acreditacion_alcance_acreditacion_insp
 * @property string $procedimiento_alcance_acreditacion_insp
 * @property string $norma_ref_alcance_acreditacion_insp
 * @property string $items_inspeccionados_alcance_acreditacion_insp
 * @property string $items_referencia_alcance_acreditacion_insp
 * @property string $signatario_alcance_acreditacion_insp
 *
 * @property AnexoConvenio041301 $fkIdAnexoConvenio
 */
class AlcanceAcreditacionInsp041303 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'alcance_acreditacion_insp_04_13_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_anexo_convenio'], 'required'],
            [['fk_id_anexo_convenio'], 'integer'],
            [['fecha_acreditacion_alcance_acreditacion_insp'], 'safe'],
            [['procedimiento_alcance_acreditacion_insp', 'norma_ref_alcance_acreditacion_insp', 'items_inspeccionados_alcance_acreditacion_insp', 'items_referencia_alcance_acreditacion_insp', 'signatario_alcance_acreditacion_insp'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_alcance_acreditacion_insp' => 'Id Alcance Acreditacion Insp',
            'fk_id_anexo_convenio' => 'Fk Id Anexo Convenio',
            'fecha_acreditacion_alcance_acreditacion_insp' => 'Fecha Acreditacion Alcance Acreditacion Insp',
            'procedimiento_alcance_acreditacion_insp' => 'Procedimiento Alcance Acreditacion Insp',
            'norma_ref_alcance_acreditacion_insp' => 'Norma Ref Alcance Acreditacion Insp',
            'items_inspeccionados_alcance_acreditacion_insp' => 'Items Inspeccionados Alcance Acreditacion Insp',
            'items_referencia_alcance_acreditacion_insp' => 'Items Referencia Alcance Acreditacion Insp',
            'signatario_alcance_acreditacion_insp' => 'Signatario Alcance Acreditacion Insp',
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
 		 'id_alcance_acreditacion_insp',
 		 'fk_id_anexo_convenio',
 		 'fecha_acreditacion_alcance_acreditacion_insp',
 		 'procedimiento_alcance_acreditacion_insp',
 		 'norma_ref_alcance_acreditacion_insp',
 		 'items_inspeccionados_alcance_acreditacion_insp',
 		 'items_referencia_alcance_acreditacion_insp',
 		 'signatario_alcance_acreditacion_insp',
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
		return array('id_alcance_acreditacion_insp');
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
