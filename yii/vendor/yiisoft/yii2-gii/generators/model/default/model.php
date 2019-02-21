<?php
use \yii\gii\Generator;
$db = Yii::$app->get($generator->db, false);
$table = $db->getSchema()->getTableSchema($tableName);
#print_r($table->foreignKeys);
#print_r($table);
#print_r($generator->checkPivotTable($table));
?>
<?php
require_once __DIR__."/../../Catequil.php";
?>
<?php
/**
 * This is the template for generating the model class of a specified table.
 */

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\model\Generator */
/* @var $tableName string full table name */
/* @var $className string class name */
/* @var $tableSchema yii\db\TableSchema */
/* @var $labels string[] list of attribute labels (name => label) */
/* @var $rules string[] list of validation rules */
/* @var $relations array list of relations (name => relation declaration) */

echo "<?php\n";
?>
namespace app\models;

use Yii;

/**
 * This is the model class for table "<?= $generator->generateTableName($tableName) ?>".
 *
<?php foreach ($tableSchema->columns as $column): ?>
 * @property <?= "{$column->phpType} \${$column->name}\n" ?>
<?php endforeach; ?>
<?php if (!empty($relations)): ?>
 *
<?php foreach ($relations as $name => $relation): ?>
 * @property <?= $relation[1] . ($relation[2] ? '[]' : '') . ' $' . lcfirst($name) . "\n" ?>
<?php endforeach; ?>
<?php endif; ?>
 */
class <?= $className ?> extends <?= '\\' . ltrim($generator->baseClass, '\\') . "\n" ?>
{
<?php foreach($table->columns as $column):
if ($column->comment == "file") {?>
	public $file;
<?php  break;}endforeach;?>
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '<?= $generator->generateTableName($tableName) ?>';
    }
<?php if ($generator->db !== 'db'): ?>

    /**
     * @return \yii\db\Connection the database connection used by this AR class.
     */
    public static function getDb()
    {
        return Yii::$app->get('<?= $generator->db ?>');
    }
<?php endif; ?>

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [<?= "\n            " . implode(",\n            ", $rules) . "\n        " ?>];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
<?php foreach ($labels as $name => $label): ?>
            <?= "'$name' => " . $generator->generateString($label) . ",\n" ?>
<?php endforeach; ?>
        ];
    }
<?php foreach ($relations as $name => $relation): ?>

    /**
     * @return \yii\db\ActiveQuery
     */
    public function get<?= $name ?>()
    {
        <?= $relation[0] . "\n" ?>
    }
<?php endforeach; ?>
	
    public function atributes() {
		return [
<?php foreach ($tableSchema->columns as $column): ?>
 		 <?= "'{$column->name}',\n" ?>
<?php endforeach; ?>
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
<?php foreach ($relations as $name => $relation):
	   if($relation[2]) {?>
        	 <?= "'{$relation[1]}',\n" ?>
<?php } endforeach;?>
     	];
    }
    
    public function getListHasOne()
    {
    	return [
<?php foreach ($relations as $name => $relation):
	   if(!$relation[2]){?>
        	<?= "'{$relation[1]}',\n" ?>
<?php } endforeach;?>
     	];
    }

    public function getNamePk() {
<?php if(is_array($table->primaryKey)) {
$cadPk="array(";
foreach($table->primaryKey as $primary):
		$cadPk.="'".$primary."',";
endforeach;
if (sizeof($table->primaryKey) > 0){
	$cadPk=substr($cadPk,0,-1).")";
} else {
	$cadPk.=")";
}?>
		return <?= $cadPk;?>;
<?php } else { ?>
		return '<?= $table->primaryKey; ?>';
<?php }?>
    }
    
    public function getModule() {
<?php $comentario="";foreach ($tableSchema->columns as $column):
if($column->isPrimaryKey==1)
$comentario=$column->comment;
endforeach;?>
		<?= "return '{$comentario}';\n" ?>
    }
    
    public function getDisplay() {
<?php $comentario="";foreach ($tableSchema->columns as $column):
foreach (explode(";",$column->comment) as $ex):
		if($ex == "display"){
			$comentario=$column->name;
} endforeach;
endforeach;?>
       <?= "return '{$comentario}';\n" ?>
    }
    
    public function getFile() {
		return array(
<?php $comentario="";foreach ($tableSchema->columns as $column):
foreach (explode(";",$column->comment) as $ex):
		if($ex == "file"){?>
			<?= "'{$column->name}',\n" ?>
<?php }endforeach;?>
<?php endforeach;?>
        );
    }
    
	public function getLogin() {
<?php $comentario = "";foreach ($tableSchema->columns as $column):
foreach (explode(";",$column->comment) as $ex):
		if ($ex == "login"){
        	$comentario=$column->name;
} endforeach;?>
<?php endforeach;?>
		return <?= "'{$comentario}';\n" ?>
    }
    
    public function getPrivate() {
    	return array(
<?php $comentario="";foreach ($tableSchema->columns as $column):
foreach (explode(";",$column->comment) as $ex):
	if ($ex == "private"){?>
			<?= "'{$column->name}',\n" ?>
<?php }endforeach;?>
<?php endforeach;?>
		);
    }
    
    public function getSearch() {
    	return array(
<?php $comentario="";foreach ($tableSchema->columns as $column):
foreach (explode(";",$column->comment) as $ex):
	if ($ex == "search"){?>
			<?= "'{$column->name}',\n"?>
<?php }endforeach;?>
<?php endforeach;?>
		);
    }
    
    public function getNoRead() {
    	return array(
<?php $comentario="";foreach ($tableSchema->columns as $column):
foreach (explode(";",$column->comment) as $ex):
	if ($ex == "noread"){?>
			<?= "'{$column->name}',\n"?>
<?php }endforeach;?>
<?php endforeach;?>
		);
    }
    public function getReferential(){
<?php $referential = "";foreach($tableSchema->columns as $column):
		if($column->comment == "referential")
			$referential = $column->name;
endforeach; 
?>
		return <?= "'{$referential}';\n" ?>
   }
   
   public function getMain() {
<?php $comentario="";foreach ($tableSchema->columns as $column):
foreach (explode(";",$column->comment) as $ex):
		if($ex == "main"){
			$comentario=$column->name;
} endforeach;
endforeach;?>
       <?= "return '{$comentario}';\n" ?>
    }
   
    public function getInstance($model) {
    	switch ($model) {
<?php foreach ($relations as $name => $relation):
	   if ($relation[2]) {?>
<?php ?>
			<?= "case '{$relation[1]}':\n" ?>
        		return new <?= "{$relation[1]}();\n"?>
                break;
<?php } endforeach;?>
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
<?php foreach($table->foreignKeys as $key):
foreach($key as $k => $v):
if($k!='0'){?>
			<?= "'".$v."'=>array('".$key[0]."','$k'),\n";?>
<?php } ?>
<?php endforeach;?>
<?php endforeach;?>
		);
    }
    
<?php if ($className == "LogSistema030003"){?>
	public function insertAudi($accion,$nomTab,$id){
		$this->fk_id_usuario 			= yii::$app->user->getId();
		$this->fecha_hora_log_sistema	= date('Y-m-d H:i:s');
		$this->accion_log_sistema 		= $accion;
		$this->tabla_log_sistema 		= $nomTab;
        $this->ip_registro_log_sistema	= $_SERVER['REMOTE_ADDR'];
		if($this->validate())
			$this->save();
	}
<?php }?>
}
