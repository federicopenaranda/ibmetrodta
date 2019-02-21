<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "estado_tipo_01_06_04".
 *
 * @property integer $id_estado_tipo
 * @property string $nombre_proceso_estado
 *
 * @property Estado010601[] $estado010601s
 */
class EstadoTipo010604 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'estado_tipo_01_06_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_proceso_estado'], 'required'],
            [['nombre_proceso_estado'], 'string', 'max' => 145],
            [['nombre_proceso_estado'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_estado_tipo' => 'Id Estado Tipo',
            'nombre_proceso_estado' => 'Nombre Proceso Estado',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEstado010601s()
    {
        return $this->hasMany(Estado010601::className(), ['fk_id_estado_tipo' => 'id_estado_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_estado_tipo',
 		 'nombre_proceso_estado',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Estado010601',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_estado_tipo');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_proceso_estado';
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
			case 'Estado010601':
        		return new Estado010601();
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
