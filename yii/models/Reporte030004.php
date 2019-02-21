<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "reporte_03_00_04".
 *
 * @property integer $id_reporte
 * @property string $codigo_reporte
 * @property string $nombre_reporte
 * @property string $descripcion_reporte
 * @property integer $estado_reporte
 * @property string $ruta_reporte
 * @property string $tipo_reporte
 */
class Reporte030004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'reporte_03_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['codigo_reporte', 'nombre_reporte', 'estado_reporte', 'ruta_reporte', 'tipo_reporte'], 'required'],
            [['descripcion_reporte', 'tipo_reporte'], 'string'],
            [['estado_reporte'], 'integer'],
            [['codigo_reporte'], 'string', 'max' => 45],
            [['nombre_reporte', 'ruta_reporte'], 'string', 'max' => 145],
            [['nombre_reporte'], 'unique'],
            [['codigo_reporte'], 'unique'],
            [['ruta_reporte'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_reporte' => 'Id Reporte',
            'codigo_reporte' => 'Codigo Reporte',
            'nombre_reporte' => 'Nombre Reporte',
            'descripcion_reporte' => 'Descripcion Reporte',
            'estado_reporte' => 'Estado Reporte',
            'ruta_reporte' => 'Ruta Reporte',
            'tipo_reporte' => 'Tipo Reporte',
        ];
    }
	
    public function atributes() {
		return [
 		 'id_reporte',
 		 'codigo_reporte',
 		 'nombre_reporte',
 		 'descripcion_reporte',
 		 'estado_reporte',
 		 'ruta_reporte',
 		 'tipo_reporte',
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
     	];
    }

    public function getNamePk() {
		return array('id_reporte');
    }
    
    public function getModule() {
		return '';
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
		);
    }
    
}
