<?php 
use \yii\gii\Generator;
require_once __DIR__."/../../Catequil.php";
$db = Yii::$app->get($generator->db, false);
$table=$db->getSchema()->getTableSchema($tableName);
$model = getPath($className);
$nameFile=[];
foreach($table->columns as $column):
	if($column->comment == "file")
		$nameFile[] = ucwords(str_replace("_","",$column->name));
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

namespace <?= $generator->ns ?>;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\<?= $className ?>;
<?php if($className != "Usuario000101"){ ?>
use app\models\Usuario000101;
<?php } ?>

/**
 * Esta es la clase controlador para la tabla "<?= $generator->generateTableName($tableName) ?>".
 */
class <?= ucwords(strtolower($className))."Controller" ?> extends <?= "Controller". "\n" ?>
{
	public function behaviors() {
<?php $cadFile = '';foreach($model->getFile() as $file):
     $cadFile.= "'".str_replace("_","",$file)."',"; 
endforeach; 
	$cadFile=substr($cadFile,0,-1);?>
<?php if($className == "Usuario000101"){ ?>
		$ip = [];
		if (isset($_GET['login_usuario'])) {
			$res = Usuario000101::find()->where(['login_usuario'=>$_GET['login_usuario']])->one(); 
			if($res)
				if($res->acceso_ip_usuario != NULL || $res->acceso_ip_usuario!="")
					$ip[]	= $res->acceso_ip_usuario;
		}
        
    	return[
			'access'=>[
				'class' => AccessControl::className(),
				'only' => ['create','index','update','delete','listaPrivilegiosUsuario','login'],
				'rules'=>[
                	[
					'actions'=>['login'],
					'allow'=>true,
					'ips'=>$ip,
					],
					[
					'actions'=>['login','insert'],
					'allow'=>true,
					'roles'=>['?'],
					],
					[
					'actions'=>['logout','create','index','update','delete','checkUnique','listaPrivilegiosUsuario',<?= $cadFile ?>],
					'allow'=>true,
					'roles'=>['@'],
					],	
				],
			],
		];
<?php } else { ?>
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'<?= $className ?>');
        $userQuery[]="checkUnique";
<?php $cadFile = '';foreach($nameFile as $file):?>
 		$userQuery[] = 'upload<?= ucwords($file) ?>';
        $userQuery[] = 'download<?= ucwords($file) ?>';
<?php $cadFile.="'upload".ucwords($file)."','download".ucwords($file)."',"; endforeach;$cadFile=substr($cadFile,0,-1); ?>
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique',<?= $cadFile ?>],
                'rules' => [
                    [
                        'allow' => true,
                        'actions' =>  $userQuery,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
<?php } ?>
    }
    
    public function actions() {
		return [
			'index'=>[
				'class'=>'app\controllers\<?= $className ?>\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\<?= $className ?>\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\<?= $className ?>\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\<?= $className ?>\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\<?= $className ?>\CheckUniqueAction'
			],
<?php if($className == "Usuario000101") {?>
            'login'=>[
				'class'=>'app\controllers\<?= $className ?>\LoginAction'
			],
			'logout'=>[
				'class'=>'app\controllers\<?= $className ?>\LogoutAction'
			],
            'insert'=>[
				'class'=>'app\controllers\<?= $className ?>\InsertAction'
			],
            'listaPrivilegiosUsuario'=>[
				'class'=>'app\controllers\<?= $className ?>\ListaPrivilegiosUsuarioAction'
			],
<?php }?>
<?php if($cadFile!=""){foreach(explode(',',$cadFile) as $nomFile):?>
			<?= strtolower($nomFile);?>=>[
				'class'=>'app\controllers\<?= $className ?>\<?= ucwords(trim($nomFile,"'")) ?>Action'
			],
            <?= strtolower($nomFile);?>=>[
				'class'=>'app\controllers\<?= $className ?>\<?= ucwords(trim($nomFile,"'")) ?>Action'
			],
<?php endforeach;} ?>
		];
	}
}
