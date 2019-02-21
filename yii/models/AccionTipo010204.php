<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "accion_tipo_01_02_04".
 *
 * @property integer $id_accion_tipo
 * @property string $nombre_accion_tipo
 *
 * @property Accion010201[] $accion010201s
 */
class AccionTipo010204 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'accion_tipo_01_02_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_accion_tipo'], 'required'],
            [['nombre_accion_tipo'], 'string', 'max' => 145],
            [['nombre_accion_tipo'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_accion_tipo' => 'Id Accion Tipo',
            'nombre_accion_tipo' => 'Nombre Accion Tipo',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAccion010201s()
    {
        return $this->hasMany(Accion010201::className(), ['fk_id_accion_tipo' => 'id_accion_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_accion_tipo',
 		 'nombre_accion_tipo',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Accion010201',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_accion_tipo');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_accion_tipo';
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
			case 'Accion010201':
        		return new Accion010201();
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
