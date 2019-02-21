<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "peticion_archivo_tipo_01_04_04".
 *
 * @property integer $id_peticion_archivo_tipo
 * @property string $nombre_peticion_archivo_tipo
 * @property string $codigo_peticion_archivo_tipo
 *
 * @property PeticionArchivo010401[] $peticionArchivo010401s
 */
class PeticionArchivoTipo010404 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'peticion_archivo_tipo_01_04_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_peticion_archivo_tipo', 'codigo_peticion_archivo_tipo'], 'required'],
            [['nombre_peticion_archivo_tipo', 'codigo_peticion_archivo_tipo'], 'string', 'max' => 145],
            [['nombre_peticion_archivo_tipo'], 'unique'],
            [['codigo_peticion_archivo_tipo'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_peticion_archivo_tipo' => 'Id Peticion Archivo Tipo',
            'nombre_peticion_archivo_tipo' => 'Nombre Peticion Archivo Tipo',
            'codigo_peticion_archivo_tipo' => 'Codigo Peticion Archivo Tipo',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionArchivo010401s()
    {
        return $this->hasMany(PeticionArchivo010401::className(), ['fk_id_peticion_archivo_tipo' => 'id_peticion_archivo_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_peticion_archivo_tipo',
 		 'nombre_peticion_archivo_tipo',
 		 'codigo_peticion_archivo_tipo',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'PeticionArchivo010401',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_peticion_archivo_tipo');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_peticion_archivo_tipo';
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
			case 'PeticionArchivo010401':
        		return new PeticionArchivo010401();
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
