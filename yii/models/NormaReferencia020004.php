<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "norma_referencia_02_00_04".
 *
 * @property integer $id_norma_referencia
 * @property string $nombre_norma_referencia
 * @property string $descripcion_norma_referencia
 *
 * @property AnexoConvenio041301[] $anexoConvenio041301s
 * @property Oec020001[] $oec020001s
 */
class NormaReferencia020004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'norma_referencia_02_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_norma_referencia'], 'required'],
            [['descripcion_norma_referencia'], 'string'],
            [['nombre_norma_referencia'], 'string', 'max' => 145],
            [['nombre_norma_referencia'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_norma_referencia' => 'Id Norma Referencia',
            'nombre_norma_referencia' => 'Nombre Norma Referencia',
            'descripcion_norma_referencia' => 'Descripcion Norma Referencia',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAnexoConvenio041301s()
    {
        return $this->hasMany(AnexoConvenio041301::className(), ['fk_id_norma_referencia' => 'id_norma_referencia']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOec020001s()
    {
        return $this->hasMany(Oec020001::className(), ['fk_id_norma_referencia' => 'id_norma_referencia']);
    }
	
    public function atributes() {
		return [
 		 'id_norma_referencia',
 		 'nombre_norma_referencia',
 		 'descripcion_norma_referencia',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AnexoConvenio041301',
        	 'Oec020001',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_norma_referencia');
    }
    
    public function getModule() {
		return '';
    }
    
    public function getDisplay() {
       return 'nombre_norma_referencia';
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
			case 'AnexoConvenio041301':
        		return new AnexoConvenio041301();
                break;
			case 'Oec020001':
        		return new Oec020001();
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
