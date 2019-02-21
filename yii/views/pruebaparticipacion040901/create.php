
<?php

use yii\helpers\Json;
if ($callback) {
   echo $callback . '(' . Json::encode($model) . ');';
} else { 
	echo Json::encode($model);
}

