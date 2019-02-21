<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "informe_evaluacion_04_06_01".
 *
 * @property integer $id_informe_evaluacion
 * @property integer $fk_id_peticion
 * @property string $fecha_inicio_informe_evaluacion
 * @property string $fecha_fin_informe_evaluacion
 * @property string $lugar_informe_evaluacion
 * @property string $objetivo_informe_evaluacion
 * @property string $documentos_referencia_informe_evaluacion
 * @property string $instalaciones_visitadas_informe_evaluacion
 * @property string $profesionales_visitados_informe_evaluacion
 * @property string $equipo_evaluador_informe_evaluacion
 * @property string $alcance_acreditacion_informe_evaluacion
 * @property string $comentario_requisito_informe_evaluacion
 * @property string $comentario_evaluacion_informe_evaluacion
 * @property string $conclusion_informe_evaluacion
 * @property string $anexos_informe_evaluacion
 * @property string $fecha_emision_informe_evaluacion
 * @property string $lugar_emision_informe_evaluacion
 * @property string $fecha_creacion_informe_evaluacion
 *
 * @property Peticion010401 $fkIdPeticion
 */
class InformeEvaluacion040601 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'informe_evaluacion_04_06_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion'], 'required'],
            [['fk_id_peticion'], 'integer'],
            [['fecha_inicio_informe_evaluacion', 'fecha_fin_informe_evaluacion', 'fecha_emision_informe_evaluacion', 'fecha_creacion_informe_evaluacion'], 'safe'],
            [['lugar_informe_evaluacion', 'objetivo_informe_evaluacion', 'documentos_referencia_informe_evaluacion', 'instalaciones_visitadas_informe_evaluacion', 'profesionales_visitados_informe_evaluacion', 'equipo_evaluador_informe_evaluacion', 'alcance_acreditacion_informe_evaluacion', 'comentario_requisito_informe_evaluacion', 'comentario_evaluacion_informe_evaluacion', 'conclusion_informe_evaluacion', 'anexos_informe_evaluacion', 'lugar_emision_informe_evaluacion'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_informe_evaluacion' => 'Id Informe Evaluacion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fecha_inicio_informe_evaluacion' => 'Fecha Inicio Informe Evaluacion',
            'fecha_fin_informe_evaluacion' => 'Fecha Fin Informe Evaluacion',
            'lugar_informe_evaluacion' => 'Lugar Informe Evaluacion',
            'objetivo_informe_evaluacion' => 'Objetivo Informe Evaluacion',
            'documentos_referencia_informe_evaluacion' => 'Documentos Referencia Informe Evaluacion',
            'instalaciones_visitadas_informe_evaluacion' => 'Instalaciones Visitadas Informe Evaluacion',
            'profesionales_visitados_informe_evaluacion' => 'Profesionales Visitados Informe Evaluacion',
            'equipo_evaluador_informe_evaluacion' => 'Equipo Evaluador Informe Evaluacion',
            'alcance_acreditacion_informe_evaluacion' => 'Alcance Acreditacion Informe Evaluacion',
            'comentario_requisito_informe_evaluacion' => 'Comentario Requisito Informe Evaluacion',
            'comentario_evaluacion_informe_evaluacion' => 'Comentario Evaluacion Informe Evaluacion',
            'conclusion_informe_evaluacion' => 'Conclusion Informe Evaluacion',
            'anexos_informe_evaluacion' => 'Anexos Informe Evaluacion',
            'fecha_emision_informe_evaluacion' => 'Fecha Emision Informe Evaluacion',
            'lugar_emision_informe_evaluacion' => 'Lugar Emision Informe Evaluacion',
            'fecha_creacion_informe_evaluacion' => 'Fecha Creacion Informe Evaluacion',
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
 		 'id_informe_evaluacion',
 		 'fk_id_peticion',
 		 'fecha_inicio_informe_evaluacion',
 		 'fecha_fin_informe_evaluacion',
 		 'lugar_informe_evaluacion',
 		 'objetivo_informe_evaluacion',
 		 'documentos_referencia_informe_evaluacion',
 		 'instalaciones_visitadas_informe_evaluacion',
 		 'profesionales_visitados_informe_evaluacion',
 		 'equipo_evaluador_informe_evaluacion',
 		 'alcance_acreditacion_informe_evaluacion',
 		 'comentario_requisito_informe_evaluacion',
 		 'comentario_evaluacion_informe_evaluacion',
 		 'conclusion_informe_evaluacion',
 		 'anexos_informe_evaluacion',
 		 'fecha_emision_informe_evaluacion',
 		 'lugar_emision_informe_evaluacion',
 		 'fecha_creacion_informe_evaluacion',
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
		return array('id_informe_evaluacion');
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
