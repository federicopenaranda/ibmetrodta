<?php
require_once __DIR__."/../../Catequil.php";
$model = getPath($className);
$nomArchivo = verifArchivo($model->attributes());
?>
<?php
echo "<?php\n";
?>
use yii\widgets\ActiveForm;
?>
<?= "<?php" ?> $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]) ?>

<?= "<?="?> $form->field($model, '<?= $file?>')->fileInput() ?>

<button>Submit</button>
<?= "<?php" ?> ActiveForm::end() ?>