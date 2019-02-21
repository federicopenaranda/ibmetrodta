<?php
namespace app\controllers\Usuario000101;

use yii\base\Action;
use app\models\Usuario000101;
use app\models\UsuarioTipoUsuario000102;
use app\models\UsuarioTipo000201;
use app\models\UsuarioTipoPrivilegio000202;
use app\models\UsuarioPrivilegio000004;
use yii\db\Transaction;
use yii\helpers\Json;

use Yii;
/**
 * Esta es la accion para el controlador PrivilegiosUsuario
 */
class InsertAction extends Action
{
	/**
    * Esta accion inserta las 4 acciones (create,read,update,delete) por cada tabla de la base de datos.
    */
	public function run()
	{
		$respuesta=new \stdClass();
        $error = "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		if ($error == "") {
        	$callback=$_GET['callback'];
            
            $modeUsuario =new Usuario000101();
			$modeUsuario->id_usuario = 1;
              
			$modeUsuario->primer_nombre_usuario = "admin";
              
			$modeUsuario->segundo_nombre_usuario = "admin";
              
			$modeUsuario->apellido_paterno_usuario = "admin";
              
			$modeUsuario->apellido_materno_usuario = "admin";
              
			$modeUsuario->codigo_usuario = "admin";
              
			$modeUsuario->login_usuario = "admin";
              
			$modeUsuario->contrasena_usuario = sha1("admin");
              
			$modeUsuario->fecha_nacimiento_usuario=date("Y-m-d");
              
			$modeUsuario->sexo_usuario = "m";
              
			$modeUsuario->telefono_usuario = "admin";
              
			$modeUsuario->celular_usuario = "admin";
              
			$modeUsuario->correo_usuario = "admin";
              
			$modeUsuario->direccion_usuario = "admin";
              
			$modeUsuario->imagen_usuario = "admin";
              
			$modeUsuario->observaciones_usuario = "admin";
              
			$modeUsuario->acceso_ip_usuario = "";
              
			$modeUsuario->fecha_creacion_usuario=date("Y-m-d");
              

			$modeUsuario->save();
			
			$modeUsuarioTipo = new UsuarioTipo000201();
			$modeUsuarioTipo->nombre_usuario_tipo		="admin";
			$modeUsuarioTipo->descripcion_usuario_tipo	="administrador";
			$modeUsuarioTipo->save();

			$modeUsuarioTipoUsuario=new UsuarioTipoUsuario000102();
			$modeUsuarioTipoUsuario->fk_id_usuario_tipo = $modeUsuarioTipo->getPrimaryKey();
			$modeUsuarioTipoUsuario->fk_id_usuario		= $modeUsuario->getPrimaryKey();
			$modeUsuarioTipoUsuario->save();
            
        	$arreglo = [
							'Accion010201',
							'AccionNotificacion010203',
							'AccionTipo010204',
							'AccionTransicion010202',
							'Actividad010501',
							'Actividad050101',
							'ActividadEconomica020004',
							'ActividadEstado010602',
							'ActividadTipo010504',
							'ActividadTransicion010502',
							'ActividadUsuario050103',
							'AlcanceAcreditacionCert030003',
							'AlcanceAcreditacionCert041303',
							'AlcanceAcreditacionInsp030003',
							'AlcanceAcreditacionInsp041303',
							'AlcanceAcreditacionLab030003',
							'AnexoConvenio041301',
							'AspectosEvaluados040803',
							'CampoCalibracion040004',
							'Certificado041401',
							'CodigoPeticion010404',
							'CriterioEvaluacion040004',
							'CriterioSatisfaccion041204',
							'CriterioSupervision041104',
							'DesignacionEvaluador041001',
							'DetalleCalibracion040301',
							'DetalleCertificacion040501',
							'DetalleEquipos040201',
							'DetalleInspeccion040401',
							'EquipoEval040803',
							'EquipoPeticion010701',
							'Estado010601',
							'EstadoNotificacion010203',
							'EstadoTipo010604',
							'EvalTecnica040801',
							'Evaluacion030001',
							'Feriado050104',
							'Gestion050104',
							'GestionTipoActividad050103',
							'InfoEnsayo040101',
							'InformeAcred041301',
							'InformeEvaluacion040601',
							'LogSistema030003',
							'NoConformidad040701',
							'NormaReferencia020004',
							'ObsPeticionAccion010303',
							'Oec020001',
							'OecAcreditacionSolicitada020003',
							'OecActividad020002',
							'OecContacto020003',
							'OecTipo020004',
							'OecTitulo020004',
							'Pais020004',
							'ParticipantesCurso050103',
							'PersonalAutorizado041303',
							'Peticion010401',
							'PeticionAccion010301',
							'PeticionArchivo010401',
							'PeticionArchivoTipo010404',
							'PeticionEstado010403',
							'PlanEvaluacion030003',
							'Proceso010101',
							'ProveedorEval040803',
							'PruebaParticipacion040901',
							'Reporte030004',
							'SatisfaccionCliente041201',
							'SatisfaccionEvaluacion041203',
							'SupervisionCriterio041103',
							'SupervisionEvaluador041101',
							'TipoActividad050104',
							'TipoCurso050104',
							'Transicion010202',
							'Usuario000101',
							'UsuarioOec000102',
							'UsuarioPrivilegio000004',
							'UsuarioProceso000102',
							'UsuarioTipo000201',
							'UsuarioTipoPrivilegio000202',
							'UsuarioTipoUsuario000102',
							'Vacacion050104',
			            ];
            foreach ($arreglo as $valor) {
                
                for ($i=1;$i<=4;$i++) {
                    $model = new UsuarioPrivilegio000004();
                    switch ($i) {
                        case 1:
                            $model->accion_usuario_privilegio			= "create";
                            $model->nombre_privilegio_usuario_privilegio= "crea ".$valor;
                        break;
                        case 2:
                            $model->accion_usuario_privilegio			= "index";
                            $model->nombre_privilegio_usuario_privilegio= "lee ".$valor;
                        break;
                        case 3:
                            $model->accion_usuario_privilegio			= "update";
                            $model->nombre_privilegio_usuario_privilegio= "actualiza ".$valor;
                        break;
                        case 4:
                            $model->accion_usuario_privilegio			= "delete";
                            $model->nombre_privilegio_usuario_privilegio= "elimina ".$valor;
                        break;
                     }  
					$model->opciones_usuario_privilegio		= "controlador";
                    $model->funcion_usuario_privilegio		= $valor; 
                    $model->descripcion_usuario_privilegio	= "automatico";
					if ($model->validate())
						$model->save(); 
                }
            }
            
            $model = new UsuarioTipoPrivilegio000202();
			$registros=UsuarioPrivilegio000004::find()->all();
			foreach($registros as $registro):
				$model = new UsuarioTipoPrivilegio000202();
				$model->fk_id_usuario_tipo=$modeUsuarioTipo->getPrimaryKey();
				$model->fk_id_usuario_privilegio = $registro->id_usuario_privilegio;
				$model->save();
			endforeach;
            
            $respuesta->meta=array("success"=>"true","msg"=>"Se crearon los registros exitosamente !!!");
			return $this->controller->renderPartial('create',array('model'=>$respuesta,'callback'=>$callback));
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('create',['model'=>$respuesta,'callback'=>'']);
		}
	}
}