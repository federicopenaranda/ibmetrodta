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
use yii\base\Model;

/**
 * This is the model class for table "<?= $generator->generateTableName($tableName) ?>".
 */
class LoginForm extends Model
{
    public $login_usuario;
    public $contrasena_usuario;
    public $rememberMe = true;

    private $_user = false;


    /**
     * @return array the validation rules.
     */
    /*public function rules()
    {
        return [
            // username and password are both required
            [['name', 'password'], 'required'],
            // rememberMe must be a boolean value
            #['rememberMe', 'boolean'],
        ];
    }*/

    /**
     * Validates the password.
     * This method serves as the inline validation for password.
     *
     * @param string $attribute the attribute currently being validated
     * @param array $params the additional name-value pairs given in the rule
     */
    public function validatePassword($attribute, $params)
    {
        if (!$this->hasErrors()) {
            $user = $this->getUser();

            if (!$user || !$user->validatePassword($this->contrasena_usuario)) {
                $this->addError($attribute, 'Incorrect username or password.');
            }
        }
    }

    /**
     * Logs in a user using the provided username and password.
     * @return boolean whether the user is logged in successfully
     */
    public function login($name,$password)
    {
        if ($this->validate()) {
			if($this->getUser($name,$password)!==NULL)
            	return Yii::$app->user->login($this->getUser($name,$password), $this->rememberMe ? 3600*24*30 : 0);
			else
				return false;
        } else {
            return false;
        }
    }

    /**
     * Finds user by [[username]]
     *
     * @return User|null
     */
    public function getUser($name,$password)
    {
        if ($this->_user === false) {
            $this->_user = Usuario000101::findByUsername($name,$password);
			#$this->_user = User::findByUsername($this->username);
        }

        return $this->_user;
    }
}
