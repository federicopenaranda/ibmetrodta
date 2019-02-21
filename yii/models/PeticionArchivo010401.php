<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "peticion_archivo_01_04_01".
 *
 * @property integer $id_peticion_archivo
 * @property integer $fk_id_peticion_estado
 * @property integer $fk_id_accion
 * @property integer $fk_id_peticion_archivo_tipo
 * @property string $nombre_peticion_archivo
 * @property integer $version_peticion_archivo
 * @property integer $activo_peticion_archivo
 * @property string $descripcion_peticion_archivo
 * @property string $tipo_peticion_archivo
 * @property string $estado_peticion_archivo
 * @property integer $adicional_peticion_archivo
 * @property string $escaneado_peticion_archivo
 * @property string $fecha_creacion_peticion_archivo
 *
 * @property PeticionEstado010403 $fkIdPeticionEstado
 * @property Accion010201 $fkIdAccion
 * @property PeticionArchivoTipo010404 $fkIdPeticionArchivoTipo
 */
class PeticionArchivo010401 extends \yii\db\ActiveRecord
{
	public $file;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'peticion_archivo_01_04_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion_estado', 'fk_id_accion', 'nombre_peticion_archivo'], 'required'],
            [['fk_id_peticion_estado', 'fk_id_accion', 'fk_id_peticion_archivo_tipo', 'version_peticion_archivo', 'activo_peticion_archivo', 'adicional_peticion_archivo'], 'integer'],
            [['descripcion_peticion_archivo', 'tipo_peticion_archivo', 'estado_peticion_archivo'], 'string'],
            [['fecha_creacion_peticion_archivo'], 'safe'],
            [['nombre_peticion_archivo'], 'string', 'max' => 200],
            [['escaneado_peticion_archivo'], 'string', 'max' => 145]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_peticion_archivo' => 'Id Peticion Archivo',
            'fk_id_peticion_estado' => 'Fk Id Peticion Estado',
            'fk_id_accion' => 'Fk Id Accion',
            'fk_id_peticion_archivo_tipo' => 'Fk Id Peticion Archivo Tipo',
            'nombre_peticion_archivo' => 'Nombre Peticion Archivo',
            'version_peticion_archivo' => 'Version Peticion Archivo',
            'activo_peticion_archivo' => 'Activo Peticion Archivo',
            'descripcion_peticion_archivo' => 'Descripcion Peticion Archivo',
            'tipo_peticion_archivo' => 'Tipo Peticion Archivo',
            'estado_peticion_archivo' => 'Estado Peticion Archivo',
            'adicional_peticion_archivo' => 'Adicional Peticion Archivo',
            'escaneado_peticion_archivo' => 'Escaneado Peticion Archivo',
            'fecha_creacion_peticion_archivo' => 'Fecha Creacion Peticion Archivo',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticionEstado()
    {
        return $this->hasOne(PeticionEstado010403::className(), ['id_peticion_estado' => 'fk_id_peticion_estado']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdAccion()
    {
        return $this->hasOne(Accion010201::className(), ['id_accion' => 'fk_id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticionArchivoTipo()
    {
        return $this->hasOne(PeticionArchivoTipo010404::className(), ['id_peticion_archivo_tipo' => 'fk_id_peticion_archivo_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_peticion_archivo',
 		 'fk_id_peticion_estado',
 		 'fk_id_accion',
 		 'fk_id_peticion_archivo_tipo',
 		 'nombre_peticion_archivo',
 		 'version_peticion_archivo',
 		 'activo_peticion_archivo',
 		 'descripcion_peticion_archivo',
 		 'tipo_peticion_archivo',
 		 'estado_peticion_archivo',
 		 'adicional_peticion_archivo',
 		 'escaneado_peticion_archivo',
 		 'fecha_creacion_peticion_archivo',
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
        	'PeticionEstado010403',
        	'Accion010201',
        	'PeticionArchivoTipo010404',
     	];
    }

    public function getNamePk() {
		return array('id_peticion_archivo');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_peticion_archivo';
    }
    
    public function getFile() {
		return array(
			'nombre_peticion_archivo',
			'escaneado_peticion_archivo',
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
			'id_peticion_estado'=>array('peticion_estado_01_04_03','fk_id_peticion_estado'),
			'id_accion'=>array('accion_01_02_01','fk_id_accion'),
			'id_peticion_archivo_tipo'=>array('peticion_archivo_tipo_01_04_04','fk_id_peticion_archivo_tipo'),
		);
    }
    
}
