<?php
function getPath($modelClass) {
	if ($modelClass == "Accion010201")
		return new app\models\Accion010201();
	if ($modelClass == "AccionNotificacion010203")
		return new app\models\AccionNotificacion010203();
	if ($modelClass == "AccionObservacion010203")
		return new app\models\AccionObservacion010203();
	if ($modelClass == "AccionTipo010204")
		return new app\models\AccionTipo010204();
	if ($modelClass == "AccionTransicion010202")
		return new app\models\AccionTransicion010202();
	if ($modelClass == "Actividad010501")
		return new app\models\Actividad010501();
	if ($modelClass == "Actividad050101")
		return new app\models\Actividad050101();
	if ($modelClass == "ActividadEconomica020004")
		return new app\models\ActividadEconomica020004();
	if ($modelClass == "ActividadEstado010602")
		return new app\models\ActividadEstado010602();
	if ($modelClass == "ActividadTipo010504")
		return new app\models\ActividadTipo010504();
	if ($modelClass == "ActividadTransicion010502")
		return new app\models\ActividadTransicion010502();
	if ($modelClass == "ActividadUsuario050103")
		return new app\models\ActividadUsuario050103();
	if ($modelClass == "AlcanceAcreditacionCert030003")
		return new app\models\AlcanceAcreditacionCert030003();
	if ($modelClass == "AlcanceAcreditacionCert041303")
		return new app\models\AlcanceAcreditacionCert041303();
	if ($modelClass == "AlcanceAcreditacionInsp030003")
		return new app\models\AlcanceAcreditacionInsp030003();
	if ($modelClass == "AlcanceAcreditacionInsp041303")
		return new app\models\AlcanceAcreditacionInsp041303();
	if ($modelClass == "AlcanceAcreditacionLab030003")
		return new app\models\AlcanceAcreditacionLab030003();
	if ($modelClass == "AlcanceAcreditacionLab041303")
		return new app\models\AlcanceAcreditacionLab041303();
	if ($modelClass == "AnexoConvenio041301")
		return new app\models\AnexoConvenio041301();
	if ($modelClass == "AspectosEvaluados040803")
		return new app\models\AspectosEvaluados040803();
	if ($modelClass == "CampoCalibracion040004")
		return new app\models\CampoCalibracion040004();
	if ($modelClass == "Certificado041401")
		return new app\models\Certificado041401();
	if ($modelClass == "CodigoPeticion010404")
		return new app\models\CodigoPeticion010404();
	if ($modelClass == "CriterioEvaluacion040004")
		return new app\models\CriterioEvaluacion040004();
	if ($modelClass == "CriterioSatisfaccion041204")
		return new app\models\CriterioSatisfaccion041204();
	if ($modelClass == "CriterioSupervision041104")
		return new app\models\CriterioSupervision041104();
	if ($modelClass == "DesignacionEvaluador041001")
		return new app\models\DesignacionEvaluador041001();
	if ($modelClass == "DetalleCalibracion040301")
		return new app\models\DetalleCalibracion040301();
	if ($modelClass == "DetalleCertificacion040501")
		return new app\models\DetalleCertificacion040501();
	if ($modelClass == "DetalleEquipos040201")
		return new app\models\DetalleEquipos040201();
	if ($modelClass == "DetalleInspeccion040401")
		return new app\models\DetalleInspeccion040401();
	if ($modelClass == "EquipoEval040803")
		return new app\models\EquipoEval040803();
	if ($modelClass == "EquipoPeticion010701")
		return new app\models\EquipoPeticion010701();
	if ($modelClass == "Estado010601")
		return new app\models\Estado010601();
	if ($modelClass == "EstadoNotificacion010203")
		return new app\models\EstadoNotificacion010203();
	if ($modelClass == "EstadoTipo010604")
		return new app\models\EstadoTipo010604();
	if ($modelClass == "EvalTecnica040801")
		return new app\models\EvalTecnica040801();
	if ($modelClass == "Evaluacion030001")
		return new app\models\Evaluacion030001();
	if ($modelClass == "Feriado050104")
		return new app\models\Feriado050104();
	if ($modelClass == "Gestion050104")
		return new app\models\Gestion050104();
	if ($modelClass == "GestionTipoActividad050103")
		return new app\models\GestionTipoActividad050103();
	if ($modelClass == "InfoEnsayo040101")
		return new app\models\InfoEnsayo040101();
	if ($modelClass == "InformeAcred041301")
		return new app\models\InformeAcred041301();
	if ($modelClass == "InformeEvaluacion040601")
		return new app\models\InformeEvaluacion040601();
	if ($modelClass == "LogSistema030003")
		return new app\models\LogSistema030003();
	if ($modelClass == "NoConformidad040701")
		return new app\models\NoConformidad040701();
	if ($modelClass == "NormaReferencia020004")
		return new app\models\NormaReferencia020004();
	if ($modelClass == "ObsPeticionAccion010303")
		return new app\models\ObsPeticionAccion010303();
	if ($modelClass == "Oec020001")
		return new app\models\Oec020001();
	if ($modelClass == "OecAcreditacionSolicitada020003")
		return new app\models\OecAcreditacionSolicitada020003();
	if ($modelClass == "OecActividad020002")
		return new app\models\OecActividad020002();
	if ($modelClass == "OecContacto020003")
		return new app\models\OecContacto020003();
	if ($modelClass == "OecTipo020004")
		return new app\models\OecTipo020004();
	if ($modelClass == "OecTitulo020004")
		return new app\models\OecTitulo020004();
	if ($modelClass == "Pais020004")
		return new app\models\Pais020004();
	if ($modelClass == "ParticipantesCurso050103")
		return new app\models\ParticipantesCurso050103();
	if ($modelClass == "PersonalAutorizado041303")
		return new app\models\PersonalAutorizado041303();
	if ($modelClass == "Peticion010401")
		return new app\models\Peticion010401();
	if ($modelClass == "PeticionAccion010301")
		return new app\models\PeticionAccion010301();
	if ($modelClass == "PeticionArchivo010401")
		return new app\models\PeticionArchivo010401();
	if ($modelClass == "PeticionArchivoTipo010404")
		return new app\models\PeticionArchivoTipo010404();
	if ($modelClass == "PeticionEstado010403")
		return new app\models\PeticionEstado010403();
	if ($modelClass == "PlanEvaluacion030003")
		return new app\models\PlanEvaluacion030003();
	if ($modelClass == "Proceso010101")
		return new app\models\Proceso010101();
	if ($modelClass == "ProveedorEval040803")
		return new app\models\ProveedorEval040803();
	if ($modelClass == "PruebaParticipacion040901")
		return new app\models\PruebaParticipacion040901();
	if ($modelClass == "Reporte030004")
		return new app\models\Reporte030004();
	if ($modelClass == "SatisfaccionCliente041201")
		return new app\models\SatisfaccionCliente041201();
	if ($modelClass == "SatisfaccionEvaluacion041203")
		return new app\models\SatisfaccionEvaluacion041203();
	if ($modelClass == "SupervisionCriterio041103")
		return new app\models\SupervisionCriterio041103();
	if ($modelClass == "SupervisionEvaluador041101")
		return new app\models\SupervisionEvaluador041101();
	if ($modelClass == "TipoActividad050104")
		return new app\models\TipoActividad050104();
	if ($modelClass == "TipoCurso050104")
		return new app\models\TipoCurso050104();
	if ($modelClass == "Transicion010202")
		return new app\models\Transicion010202();
	if ($modelClass == "Usuario000101")
		return new app\models\Usuario000101();
	if ($modelClass == "UsuarioOec000102")
		return new app\models\UsuarioOec000102();
	if ($modelClass == "UsuarioPrivilegio000004")
		return new app\models\UsuarioPrivilegio000004();
	if ($modelClass == "UsuarioProceso000102")
		return new app\models\UsuarioProceso000102();
	if ($modelClass == "UsuarioTipo000201")
		return new app\models\UsuarioTipo000201();
	if ($modelClass == "UsuarioTipoPrivilegio000202")
		return new app\models\UsuarioTipoPrivilegio000202();
	if ($modelClass == "UsuarioTipoUsuario000102")
		return new app\models\UsuarioTipoUsuario000102();
	if ($modelClass == "Vacacion050104")
		return new app\models\Vacacion050104();
}

function getFkManyMany($listHasManys,$pk) {
	$listFkManyMany = array();
	
	foreach($listHasManys as $listHasMany):
		$obj=getPath($listHasMany);
		$listAtribs=$obj->atributes();
		
		if(sizeof($obj->atributes()) == 2 && in_array("fk_".$pk,$obj->atributes())) {
			foreach($listAtribs as $listAtrib):
				if("fk_".$pk != $listAtrib)
					$listFkManyMany[] = $listAtrib;
		endforeach;
		}
	endforeach;
	return $listFkManyMany;
}

function getWith($relations) {
	$cad="";
	foreach ($relations as $name => $relation):
		if (strpos($name,'Fk')!== FALSE && substr($name,strlen($name)-1,strlen($name))!='s' || strpos($name,'02') !== FALSE)
			$cad.= "'".lcfirst($name)."',";
	endforeach;
	return substr($cad, 0, strlen($cad) - 1);
}


