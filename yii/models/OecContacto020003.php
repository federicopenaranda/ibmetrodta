<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "oec_contacto_02_00_03".
 *
 * @property integer $id_oec_contacto
 * @property integer $fk_id_oec
 * @property integer $fk_id_oec_titulo
 * @property string $primer_nombre_oec_contacto
 * @property string $segundo_nombre_oec_contacto
 * @property string $apellido_paterno_oec_contacto
 * @property string $apellido_materno_oec_contacto
 * @property string $cargo_oec_contacto
 * @property string $email_oec_contacto
 * @property string $celular_oec_contacto
 * @property string $telefono_oec_contacto
 * @property integer $representante_legal_oec_contacto
 *
 * @property Evaluacion030001[] $evaluacion030001s
 * @property Oec020001 $fkIdOec
 * @property OecTitulo020004 $fkIdOecTitulo
 * @property PlanEvaluacion030003[] $planEvaluacion030003s
 */
class OecContacto020003 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'oec_contacto_02_00_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_oec', 'fk_id_oec_titulo', 'primer_nombre_oec_contacto', 'apellido_paterno_oec_contacto', 'cargo_oec_contacto', 'email_oec_contacto', 'telefono_oec_contacto', 'representante_legal_oec_contacto'], 'required'],
            [['fk_id_oec', 'fk_id_oec_titulo', 'representante_legal_oec_contacto'], 'integer'],
            [['primer_nombre_oec_contacto', 'segundo_nombre_oec_contacto', 'apellido_paterno_oec_contacto', 'apellido_materno_oec_contacto', 'email_oec_contacto'], 'string', 'max' => 145],
            [['cargo_oec_contacto'], 'string', 'max' => 245],
            [['celular_oec_contacto', 'telefono_oec_contacto'], 'string', 'max' => 45]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_oec_contacto' => 'Id Oec Contacto',
            'fk_id_oec' => 'Fk Id Oec',
            'fk_id_oec_titulo' => 'Fk Id Oec Titulo',
            'primer_nombre_oec_contacto' => 'Primer Nombre Oec Contacto',
            'segundo_nombre_oec_contacto' => 'Segundo Nombre Oec Contacto',
            'apellido_paterno_oec_contacto' => 'Apellido Paterno Oec Contacto',
            'apellido_materno_oec_contacto' => 'Apellido Materno Oec Contacto',
            'cargo_oec_contacto' => 'Cargo Oec Contacto',
            'email_oec_contacto' => 'Email Oec Contacto',
            'celular_oec_contacto' => 'Celular Oec Contacto',
            'telefono_oec_contacto' => 'Telefono Oec Contacto',
            'representante_legal_oec_contacto' => 'Representante Legal Oec Contacto',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEvaluacion030001s()
    {
        return $this->hasMany(Evaluacion030001::className(), ['fk_id_oec_contacto_gerente_calidad' => 'id_oec_contacto']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOec()
    {
        return $this->hasOne(Oec020001::className(), ['id_oec' => 'fk_id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecTitulo()
    {
        return $this->hasOne(OecTitulo020004::className(), ['id_oec_titulo' => 'fk_id_oec_titulo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPlanEvaluacion030003s()
    {
        return $this->hasMany(PlanEvaluacion030003::className(), ['fk_id_oec_contacto' => 'id_oec_contacto']);
    }
	
    public function atributes() {
		return [
 		 'id_oec_contacto',
 		 'fk_id_oec',
 		 'fk_id_oec_titulo',
 		 'primer_nombre_oec_contacto',
 		 'segundo_nombre_oec_contacto',
 		 'apellido_paterno_oec_contacto',
 		 'apellido_materno_oec_contacto',
 		 'cargo_oec_contacto',
 		 'email_oec_contacto',
 		 'celular_oec_contacto',
 		 'telefono_oec_contacto',
 		 'representante_legal_oec_contacto',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Evaluacion030001',
        	 'PlanEvaluacion030003',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'Oec020001',
        	'OecTitulo020004',
     	];
    }

    public function getNamePk() {
		return array('id_oec_contacto');
    }
    
    public function getModule() {
		return 'oec';
    }
    
    public function getDisplay() {
       return 'primer_nombre_oec_contacto';
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
			case 'Evaluacion030001':
        		return new Evaluacion030001();
                break;
			case 'PlanEvaluacion030003':
        		return new PlanEvaluacion030003();
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
			'id_oec'=>array('oec_02_00_01','fk_id_oec'),
			'id_oec_titulo'=>array('oec_titulo_02_00_04','fk_id_oec_titulo'),
		);
    }
    
}
