<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "anexo_convenio_04_13_01".
 *
 * @property integer $id_anexo_convenio
 * @property integer $fk_id_peticion
 * @property integer $fk_id_norma_referencia
 * @property string $responsable_anexo_convenio
 * @property string $cargo_anexo_convenio
 * @property string $fecha_anexo_convenio
 * @property string $cips_anexo_convenio
 * @property string $numero_anexo_convenio
 * @property string $escaneado_anexo_convenio
 * @property integer $estado_anexo_convenio
 * @property string $fecha_creacion_anexo_convenio
 *
 * @property AlcanceAcreditacionCert041303[] $alcanceAcreditacionCert041303s
 * @property AlcanceAcreditacionInsp041303[] $alcanceAcreditacionInsp041303s
 * @property AlcanceAcreditacionLab041303[] $alcanceAcreditacionLab041303s
 * @property NormaReferencia020004 $fkIdNormaReferencia
 * @property Peticion010401 $fkIdPeticion
 * @property PersonalAutorizado041303[] $personalAutorizado041303s
 */
class AnexoConvenio041301 extends \yii\db\ActiveRecord
{
	public $file;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'anexo_convenio_04_13_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'fk_id_norma_referencia'], 'required'],
            [['fk_id_peticion', 'fk_id_norma_referencia', 'estado_anexo_convenio'], 'integer'],
            [['fecha_anexo_convenio', 'fecha_creacion_anexo_convenio'], 'safe'],
            [['responsable_anexo_convenio', 'cargo_anexo_convenio', 'cips_anexo_convenio', 'numero_anexo_convenio', 'escaneado_anexo_convenio'], 'string', 'max' => 200]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_anexo_convenio' => 'Id Anexo Convenio',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_norma_referencia' => 'Fk Id Norma Referencia',
            'responsable_anexo_convenio' => 'Responsable Anexo Convenio',
            'cargo_anexo_convenio' => 'Cargo Anexo Convenio',
            'fecha_anexo_convenio' => 'Fecha Anexo Convenio',
            'cips_anexo_convenio' => 'Cips Anexo Convenio',
            'numero_anexo_convenio' => 'Numero Anexo Convenio',
            'escaneado_anexo_convenio' => 'Escaneado Anexo Convenio',
            'estado_anexo_convenio' => 'Estado Anexo Convenio',
            'fecha_creacion_anexo_convenio' => 'Fecha Creacion Anexo Convenio',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAlcanceAcreditacionCert041303s()
    {
        return $this->hasMany(AlcanceAcreditacionCert041303::className(), ['fk_id_anexo_convenio' => 'id_anexo_convenio']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAlcanceAcreditacionInsp041303s()
    {
        return $this->hasMany(AlcanceAcreditacionInsp041303::className(), ['fk_id_anexo_convenio' => 'id_anexo_convenio']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAlcanceAcreditacionLab041303s()
    {
        return $this->hasMany(AlcanceAcreditacionLab041303::className(), ['fk_id_anexo_convenio' => 'id_anexo_convenio']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdNormaReferencia()
    {
        return $this->hasOne(NormaReferencia020004::className(), ['id_norma_referencia' => 'fk_id_norma_referencia']);
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
    public function getPersonalAutorizado041303s()
    {
        return $this->hasMany(PersonalAutorizado041303::className(), ['fk_id_anexo_convenio' => 'id_anexo_convenio']);
    }
	
    public function atributes() {
		return [
 		 'id_anexo_convenio',
 		 'fk_id_peticion',
 		 'fk_id_norma_referencia',
 		 'responsable_anexo_convenio',
 		 'cargo_anexo_convenio',
 		 'fecha_anexo_convenio',
 		 'cips_anexo_convenio',
 		 'numero_anexo_convenio',
 		 'escaneado_anexo_convenio',
 		 'estado_anexo_convenio',
 		 'fecha_creacion_anexo_convenio',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AlcanceAcreditacionCert041303',
        	 'AlcanceAcreditacionInsp041303',
        	 'AlcanceAcreditacionLab041303',
        	 'PersonalAutorizado041303',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'NormaReferencia020004',
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_anexo_convenio');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return 'responsable_anexo_convenio';
    }
    
    public function getFile() {
		return array(
			'escaneado_anexo_convenio',
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
			case 'AlcanceAcreditacionCert041303':
        		return new AlcanceAcreditacionCert041303();
                break;
			case 'AlcanceAcreditacionInsp041303':
        		return new AlcanceAcreditacionInsp041303();
                break;
			case 'AlcanceAcreditacionLab041303':
        		return new AlcanceAcreditacionLab041303();
                break;
			case 'PersonalAutorizado041303':
        		return new PersonalAutorizado041303();
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
			'id_norma_referencia'=>array('norma_referencia_02_00_04','fk_id_norma_referencia'),
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
