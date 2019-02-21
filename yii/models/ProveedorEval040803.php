<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "proveedor_eval_04_08_03".
 *
 * @property integer $id_proveedor_eval
 * @property integer $fk_id_eval_tecnica
 * @property string $nombre_proveedor_eval
 * @property string $resultados_proveedor_eval
 * @property string $indicador_desempeno_proveedor_eval
 * @property string $conclusion_desempeno_proveedor_eval
 *
 * @property EvalTecnica040801 $fkIdEvalTecnica
 */
class ProveedorEval040803 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'proveedor_eval_04_08_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_eval_tecnica'], 'required'],
            [['fk_id_eval_tecnica'], 'integer'],
            [['nombre_proveedor_eval', 'resultados_proveedor_eval', 'indicador_desempeno_proveedor_eval', 'conclusion_desempeno_proveedor_eval'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_proveedor_eval' => 'Id Proveedor Eval',
            'fk_id_eval_tecnica' => 'Fk Id Eval Tecnica',
            'nombre_proveedor_eval' => 'Nombre Proveedor Eval',
            'resultados_proveedor_eval' => 'Resultados Proveedor Eval',
            'indicador_desempeno_proveedor_eval' => 'Indicador Desempeno Proveedor Eval',
            'conclusion_desempeno_proveedor_eval' => 'Conclusion Desempeno Proveedor Eval',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEvalTecnica()
    {
        return $this->hasOne(EvalTecnica040801::className(), ['id_eval_tecnica' => 'fk_id_eval_tecnica']);
    }
	
    public function atributes() {
		return [
 		 'id_proveedor_eval',
 		 'fk_id_eval_tecnica',
 		 'nombre_proveedor_eval',
 		 'resultados_proveedor_eval',
 		 'indicador_desempeno_proveedor_eval',
 		 'conclusion_desempeno_proveedor_eval',
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
        	'EvalTecnica040801',
     	];
    }

    public function getNamePk() {
		return array('id_proveedor_eval');
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
			'id_eval_tecnica'=>array('eval_tecnica_04_08_01','fk_id_eval_tecnica'),
		);
    }
    
}
