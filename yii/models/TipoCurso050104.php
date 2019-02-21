<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "tipo_curso_05_01_04".
 *
 * @property integer $id_tipo_curso
 * @property string $nombre_tipo_curso
 *
 * @property Actividad050101[] $actividad050101s
 */
class TipoCurso050104 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tipo_curso_05_01_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_tipo_curso'], 'required'],
            [['nombre_tipo_curso'], 'string', 'max' => 200],
            [['nombre_tipo_curso'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_tipo_curso' => 'Id Tipo Curso',
            'nombre_tipo_curso' => 'Nombre Tipo Curso',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividad050101s()
    {
        return $this->hasMany(Actividad050101::className(), ['fk_id_tipo_curso' => 'id_tipo_curso']);
    }
	
    public function atributes() {
		return [
 		 'id_tipo_curso',
 		 'nombre_tipo_curso',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Actividad050101',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_tipo_curso');
    }
    
    public function getModule() {
		return 'actividad';
    }
    
    public function getDisplay() {
       return 'nombre_tipo_curso';
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
			case 'Actividad050101':
        		return new Actividad050101();
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
		);
    }
    
}
