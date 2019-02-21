<?php

$params = require(__DIR__ . '/params.php');

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'components' => [
        'request' => [
			'enableCsrfValidation' => false,
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'HhIjbwsJppZ1aI3RnZg5olLtyU8P5082',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\Usuario000101',
            'enableAutoLogin' => true,
			'loginUrl'=>['site/message','callback'=>isset($_GET['callback'])? $_GET['callback']:''],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error2',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => false,
            'transport'=>[
                'class'=> 'Swift_SmtpTransport',
                //'host'=> 'smtp.gmail.com',
                'host'=> 'smtp.ibmetro.gob.bo',
                //'username' => 'victorqcv@gmail.com',
                'username' => 'sistemaacreditacion@ibmetro.gob.bo',
                'password' => '515temA+2015',
                'port'=> '587',
                'encryption'=>'tls',
            ]
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => require(__DIR__ . '/db.php'),
		'urlManager' => [
				'enablePrettyUrl'=>true,     
        ],
    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = 'yii\debug\Module';

    $config['bootstrap'][] = 'gii';
    #$config['modules']['gii'] = 'yii\gii\Module';
	$config['modules']['gii'] = [
        'class'=>'yii\gii\Module',
        'generators'=>[
            'crud'=>[
                'class'=>'yii\gii\generators\crud\Generator',
                'templates'=>[
                    'mycrud'=>'@app/myTemplates/crud/default'
                ]
            ],
            'myCrud' => [
                'class' => 'yii\gii\generators\controlador\Generator',
            ],
            'myCrud2' => [
                'class' => 'yii\gii\generators\vista\Generator',
            ],
            'myCrud3' => [
                'class' => 'yii\gii\generators\parametros\Generator',
            ],
            'store' => [
                'class' => 'yii\gii\generators\store\Generator',
            ],
            'modelExt' => [
                'class' => 'yii\gii\generators\modelExt\Generator',
            ],
            'controllerExt' => [
                'class' => 'yii\gii\generators\controllerExt\Generator',
            ],
            'viewExt' => [
                'class' => 'yii\gii\generators\viewExt\Generator',
            ]
        ],
		'allowedIPs' => ['127.0.0.1', '::1', '192.168.100.*'],
    ];
}

return $config;
