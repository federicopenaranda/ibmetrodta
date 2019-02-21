<?php 
require_once "/../../Catequil.php";
$model = getPath($className);
$nomArchivo = verifArchivo($model->attributes());
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

/**
 * Esta es la clase controlador para la tabla "<?= $generator->generateTableName($tableName) ?>".
 */
class <?= $className."Controller" ?> extends <?= "Controller". "\n" ?>
{
	public function behaviors() {
 	
    	$model = new Usuario000100;
<?php if ($className == "Usuario000100") {?>
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
<?php } else {?>
		$objLog = Yii::$app->user->getIdentity();
		$nom_login = $objLog->login_usuario;
<?php } ?>
		$userQuery = $model->listaAccion($nom_login,'<?= $className ?>');
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete'],
                'rules' => [
                    [
                        'allow' => true,
                        'actions' =>  $userQuery,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
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
<?php if($className == "Usuario000100") {?>
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
<?php if($nomArchivo!=""){?>
			'upload'=>[
				'class'=>'app\controllers\<?= $className ?>\UploadAction'
			],
<?php } ?>
		];
	}
}
