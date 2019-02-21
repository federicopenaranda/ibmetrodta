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
$nomCampArchivo="";
foreach ($tableSchema->columns as $column):
	if(strpos($column->name,"archivo_")!==FALSE)
		$nomCampArchivo = "public $".$column->name.";";
endforeach;
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
use yii\db\Query;

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
 use yii\web\IdentityInterface;
class <?= $className ?> extends <?= '\\' . ltrim($generator->baseClass, '\\') ?> implements IdentityInterface <?= "\n" ?>
{
<?php $i=1;foreach($table->columns as $column):
if ($column->comment == "file") {?>
	public $file<?= $i."; \n";?>
<?php  $i++;}endforeach;?>
    public $authKey;
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
<?php foreach ($tableSchema->columns as $column):
if($column->isPrimaryKey==1)
$id_llave_primaria=$column->name;
endforeach;?>
		<?= "return array('{$id_llave_primaria}');\n" ?>
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
    
    public function listaAccion($nom_login,$controlador) {
		
		$Querys = (new Query)
                    ->select(['accion_usuario_privilegio'])
                    ->from('usuario_00_01_01')
                    ->innerJoin('usuario_tipo_usuario_00_01_02','usuario_tipo_usuario_00_01_02.fk_id_usuario = usuario_00_01_01.id_usuario')
                    ->innerJoin('usuario_tipo_00_02_01',' usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo')
					->innerJoin('usuario_tipo_privilegio_00_02_02',' usuario_tipo_privilegio_00_02_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo')
					->innerJoin('usuario_privilegio_00_00_04','usuario_tipo_privilegio_00_02_02.fk_id_usuario_privilegio = usuario_privilegio_00_00_04.id_usuario_privilegio')
					->where(['usuario_privilegio_00_00_04.opciones_usuario_privilegio'=>'controlador','usuario_00_01_01.login_usuario'=>$nom_login])
					->andWhere(['=','usuario_privilegio_00_00_04.funcion_usuario_privilegio',$controlador])
					->all();
		$listAccion[]='logout';
        $listAccion[]='insert';
		foreach ($Querys as $Query):
			foreach($Query as $k => $v):
				$listAccion[]=$v;
			endforeach;
		endforeach;
		return $listAccion;
	}
    
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }
	
	public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }
	
	public static function findByUsername($name,$password)
    {
		return static::findOne(['login_usuario' => $name,'contrasena_usuario' => sha1($password)]);
    }
	
	public function getId()
    {
        return $this->getPrimaryKey();
    }
	
	public function getAuthKey()
    {
        return $this->authKey;
    }
	
	public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
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
}
