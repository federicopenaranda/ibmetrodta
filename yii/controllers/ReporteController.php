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
				'only' => ['pdfForm002', 'pdfForm011', 'pdfForm012', 'pdfForm052', 'pdfForm053', 'pdfForm054', 'pdfForm056', 'pdfForm057', 'pdfForm', 'pdfForm026', 'pdfForm046',	'pdfForm050', 'pdfForm024', 'pdfForm031', 'pdfForm033', 'pdfForm034', 'pdfForm038'],
				'rules'=>[
					[
					'actions'=>['pdfForm002', 'pdfForm011', 'pdfForm012', 'pdfForm052', 'pdfForm053', 'pdfForm054', 'pdfForm056', 'pdfForm057', 'pdfForm', 'pdfForm026', 'pdfForm046',	'pdfForm050', 'pdfForm024', 'pdfForm031', 'pdfForm033', 'pdfForm034', 'pdfForm038'],
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
			'pdfForm011'=>[
				'class'=>'app\controllers\Reporte\PdfForm011Action'
			],
			'pdfForm012'=>[
				'class'=>'app\controllers\Reporte\PdfForm012Action'
			],
			'pdfForm052'=>[
				'class'=>'app\controllers\Reporte\PdfForm052Action'
			],
			'pdfForm053'=>[
				'class'=>'app\controllers\Reporte\PdfForm053Action'
			],
			'pdfForm054'=>[
				'class'=>'app\controllers\Reporte\PdfForm054Action'
			],
			'pdfForm056'=>[
				'class'=>'app\controllers\Reporte\PdfForm056Action'
			],
			'pdfForm057'=>[
				'class'=>'app\controllers\Reporte\PdfForm057Action'
			],
			'pdfForm'=>[
				'class'=>'app\controllers\Reporte\PdfFormAction'
			],
			'pdfForm026'=>[
				'class'=>'app\controllers\Reporte\PdfForm026Action'
			],
			'pdfForm046'=>[
				'class'=>'app\controllers\Reporte\PdfForm046Action'
			],
			'pdfForm050'=>[
				'class'=>'app\controllers\Reporte\PdfForm050EAction'
			],
			'pdfForm024'=>[
				'class'=>'app\controllers\Reporte\PdfForm024Action'
			],
			'pdfForm031'=>[
				'class'=>'app\controllers\Reporte\PdfForm031Action'
			],
			'pdfForm033'=>[
				'class'=>'app\controllers\Reporte\PdfForm033Action'
			],
			'pdfForm034'=>[
				'class'=>'app\controllers\Reporte\PdfForm034Action'
			],
			'pdfForm038'=>[
				'class'=>'app\controllers\Reporte\PdfForm038Action'
			],

		];
    }
}
