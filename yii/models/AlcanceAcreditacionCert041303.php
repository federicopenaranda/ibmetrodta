<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "alcance_acreditacion_cert_04_13_03".
 *
 * @property integer $id_alcance_acreditacion_cert
 * @property integer $fk_id_anexo_convenio
 * @property string $fecha_acreditacion_alcance_acreditacion_cert
 * @property string $producto_alcance_acreditacion_cert
 * @property string $norma_referencia_alcance_acreditacion_cert
 * @property string $sector_economico_alcance_acreditacion_cert
 * @property string $actividad_sector_alcance_acreditacion_cert
 * @property string $codigo_iaf_alcance_acreditacion_cert
 *
 * @property AnexoConvenio041301 $fkIdAnexoConvenio
 */
class AlcanceAcreditacionCert041303 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'alcance_acreditacion_cert_04_13_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_anexo_convenio'], 'required'],
            [['fk_id_anexo_convenio'], 'integer'],
            [['fecha_acreditacion_alcance_acreditacion_cert'], 'safe'],
            [['producto_alcance_acreditacion_cert', 'norma_referencia_alcance_acreditacion_cert', 'sector_economico_alcance_acreditacion_cert', 'actividad_sector_alcance_acreditacion_cert', 'codigo_iaf_alcance_acreditacion_cert'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_alcance_acreditacion_cert' => 'Id Alcance Acreditacion Cert',
            'fk_id_anexo_convenio' => 'Fk Id Anexo Convenio',
            'fecha_acreditacion_alcance_acreditacion_cert' => 'Fecha Acreditacion Alcance Acreditacion Cert',
            'producto_alcance_acreditacion_cert' => 'Producto Alcance Acreditacion Cert',
            'norma_referencia_alcance_acreditacion_cert' => 'Norma Referencia Alcance Acreditacion Cert',
            'sector_economico_alcance_acreditacion_cert' => 'Sector Economico Alcance Acreditacion Cert',
            'actividad_sector_alcance_acreditacion_cert' => 'Actividad Sector Alcance Acreditacion Cert',
            'codigo_iaf_alcance_acreditacion_cert' => 'Codigo Iaf Alcance Acreditacion Cert',
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
 		 'id_alcance_acreditacion_cert',
 		 'fk_id_anexo_convenio',
 		 'fecha_acreditacion_alcance_acreditacion_cert',
 		 'producto_alcance_acreditacion_cert',
 		 'norma_referencia_alcance_acreditacion_cert',
 		 'sector_economico_alcance_acreditacion_cert',
 		 'actividad_sector_alcance_acreditacion_cert',
 		 'codigo_iaf_alcance_acreditacion_cert',
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
		return array('id_alcance_acreditacion_cert');
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
