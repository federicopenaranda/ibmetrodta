<?php
namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;

/**
 * Esta es la clase controlador para la tabla "reporte_03_00_04".
 */
class ReporteController extends Controller
{
    public function behaviors() {
    	return[
            'access'=>[
				'class' => AccessControl::className(),
				'only' => ['pdfForm002','excel'],
				'rules'=>[
					[
					'actions'=>['pdfForm002','excel'],
					'allow'=>true,
					'roles'=>['@'],
					],
				],
            ],
        ];
    }
    public function actions() {
        return [
		'pdfForm002'=>[
			'class'=>'app\controllers\Reporte\PdfForm002Action'
		],
        'excel'=>[
			'class'=>'app\controllers\Reporte\ExcelAction'
		],
	];
    }
}
