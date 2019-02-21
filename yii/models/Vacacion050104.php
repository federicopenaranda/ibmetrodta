<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "vacacion_05_01_04".
 *
 * @property integer $id_vacacion
 * @property integer $fk_id_usuario
 * @property string $fecha_inicio_vacacion
 * @property string $fecha_fin_vacacion
 *
 * @property Usuario000101 $fkIdUsuario
 */
class Vacacion050104 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'vacacion_05_01_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_usuario', 'fecha_inicio_vacacion', 'fecha_fin_vacacion'], 'required'],
            [['fk_id_usuario'], 'integer'],
            [['fecha_inicio_vacacion', 'fecha_fin_vacacion'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_vacacion' => 'Id Vacacion',
            'fk_id_usuario' => 'Fk Id Usuario',
            'fecha_inicio_vacacion' => 'Fecha Inicio Vacacion',
            'fecha_fin_vacacion' => 'Fecha Fin Vacacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuario()
    {
        return $this->hasOne(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario']);
    }
	
    public function atributes() {
		return [
 		 'id_vacacion',
 		 'fk_id_usuario',
 		 'fecha_inicio_vacacion',
 		 'fecha_fin_vacacion',
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
        	'Usuario000101',
     	];
    }

    public function getNamePk() {
		return array('id_vacacion');
    }
    
    public function getModule() {
		return 'actividad';
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
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
		);
    }
    
}
