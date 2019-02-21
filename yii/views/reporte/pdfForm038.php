<div align="center"><strong>CÓDIGO DE  LA EVALUACIÓN</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="162" valign="top"><p>&nbsp;&nbsp;<?= $pet->fkIdCodigoPeticion->codigo_peticion ?> </p></td>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EVALUACIÓN</strong> </p></td>
    <td width="157" valign="top"><p>&nbsp;&nbsp;<?= $eval->codigo_evaluacion; ?> </p></td>
  </tr>
  <tr>
    <td width="643" colspan="4" style="font-size:9pt"><p><strong>NOTA IMPORTANTE PARA EL EVALUADOR TÉCNICO</strong>: La presente lista no es exhaustiva sobre    los requisitos de la<strong> </strong>norma. Debe ser utilizada en conjunto con ésta y    los criterios de referencia. Ante cualquier duda consulte al evaluador líder.<strong> </strong>Este formulario debe ser LLENADO PARA CADA MÉTODO DE ENSAYO Y/O    CALIBRACIÓN del alcance de acreditación     que se evalúa in situ y debe     ser entregado a éste al finalizar la evaluación.<strong></strong></p></td>
  </tr>
</table>
<br>
<div align="center"><strong>INFORMACIÓN  DEL LABORATORIO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="161" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE</strong></p></td>
    <td width="482" valign="top"><p>&nbsp;&nbsp;<?= $oec->nombre_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="161" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="482" valign="top"><p>&nbsp;&nbsp;<?= $oec->direccion_oec?> </p></td>
  </tr>
  <tr>
    <td width="161" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CIUDAD</strong></p></td>
    <td width="482" valign="top"><p>&nbsp;&nbsp;<?= $oec->ciudad_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="161" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="482" valign="top"><p>&nbsp;&nbsp;<?= $oec->departamento_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="161" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="482" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdPais->nombre_pais ; ?> </p></td>
  </tr>
</table>
<br>
<div align="center"><strong>EVALUACIÓN </strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="643" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>AREA DE ENSAYO O CALIBRACIÓN EVALUADA</strong> </p></td>
  </tr>
  <tr>
    <td width="643" valign="top"><p>&nbsp;<?= $evalTec->area_ensayo_eval_tecnica?> </p></td>
  </tr>
  <tr>
    <td width="643" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>MÉTODO DE ENSAYO Y/O DE CALIBRACIÓN    EVALUADO</strong></p></td>
  </tr>
  <tr>
    <td width="643"><p>&nbsp;<?= $evalTec->metodo_ensayo_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td width="643" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE    SIGNATARIOS AUTORIZADOS PARA EL MÉTODO</strong></p></td>
  </tr>
  <tr>
    <td width="643"><p>&nbsp;<?= $evalTec->lista_signatarios_eval_tecnica?></p></td>
  </tr>
</table>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td colspan="8" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>ASPECTOS A SER     EVALUADOS</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p><strong>APARTADO NB-ISO-IEC 17025:2005</strong></p></td>
    <td colspan="5"><p align="center"><strong>CUMPLIMIENTO</strong></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.2 Personal</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Educación, formacion y experiencia</p></td>
    <td colspan="5" valign="top"><p>&nbsp;</p></td>
  </tr>
  <tr>
    <td colspan="8"><table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td width="126" valign="top"><p><strong>Nombre</strong></p></td>
        <td width="126" valign="top"><p><strong>Educacion</strong></p></td>
        <td width="126" valign="top"><p><strong>Formacion</strong></p></td>
        <td width="126" valign="top"><p><strong>Experiencia</strong></p></td>
        <td width="126" valign="top"><p><strong>Habilidades (*)</strong></p></td>
      </tr>
      <tr>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
      </tr>
      <tr>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
        <td width="126" valign="top"><p>&nbsp;</p></td>
      </tr>
    </table>
    <p>* A criterio del evaluador</p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Supervisión a personal en entrenamiento</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->supervision_personal_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Autorización para efectuar tareas técnicas</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->autorizacion_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.3 Instalaciones y condiciones ambientales </strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Adecuación a los ensayos/calibraciones que efectúa</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->adecuacion_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Seguimiento, control y registro de condiciones ambientales</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->seguimiento_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Separación entre áreas</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->separacion_areas_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Control de acceso</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->control_acceso_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Orden y limpieza</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->orden_limpieza_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.4 Métodos de ensayo y de calibración y    validacion de los metodos</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Uso de métodos apropiados</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->uso_metodos_apropiados_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Confimación de métodos normalizados para su aplicación correcta</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->confirmacion_metodos_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Instructivos de uso y operación de equipos</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->instructivo_uso_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Validación de desviaciones, métodos no normalizados o propios</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->validacion_desviaciones_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Estimación de la incertidumbre</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->estimacion_incertidumbre_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Verificación de cálculos y control de transferencia de datos</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->verificacion_calculos_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.5 Equipo  </strong></p></td>
  </tr>
  <tr>
    <td width="73"><p align="center"><strong>Nombre</strong></p></td>
    <td width="103"><p align="center"><strong>Disponibilidad    apropiada y necesaria</strong></p></td>
    <td colspan="2"><p align="center"><strong>Programa    de calibración y/o</strong><br>
            <strong>mantenimiento</strong></p></td>
    <td width="96"><p align="center"><strong>Identificación    individual</strong></p></td>
    <td width="66"><p align="center"><strong>Registros</strong></p></td>
    <td width="101"><p align="center"><strong>Verificaciones    intermedias</strong></p></td>
    <td width="90"><p align="center"><strong>Protección</strong></p></td>
  </tr>
  <tr>
    <td width="73"><p>&nbsp;</p></td>
    <td width="103"><p>&nbsp;</p></td>
    <td colspan="2"><p>&nbsp;</p></td>
    <td width="96"><p>&nbsp;</p></td>
    <td width="66"><p>&nbsp;</p></td>
    <td width="101"><p>&nbsp;</p></td>
    <td width="90"><p>&nbsp;</p></td>
  </tr>
  <tr>
    <td width="73"><p>&nbsp;</p></td>
    <td width="103"><p>&nbsp;</p></td>
    <td colspan="2"><p>&nbsp;</p></td>
    <td width="96"><p>&nbsp;</p></td>
    <td width="66"><p>&nbsp;</p></td>
    <td width="101"><p>&nbsp;</p></td>
    <td width="90"><p>&nbsp;</p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.6 Trazabilidad de las mediciones</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Procedimientos de calibración (si es aplicable)</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->procedimientos_calibracion_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Trazabilidad de las calibraciones</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->trazabilidad_calibracion_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Disponibilidad de material de referencia certificado</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->disponibilidad_material_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Certificados de calibración</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->certificados_calibracion_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.7 Muestreo (si es aplicable)</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Plan y procedimientos de muestreo</p></td>
    <td colspan="5"><p>&nbsp;<?= $evalTec->plan_muestreo_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Registros del muestreo</p></td>
    <td colspan="5"><p>&nbsp;<?= $evalTec->registros_muestreo_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Uso de técnicas estadísticas</p></td>
    <td colspan="5"><p>&nbsp;<?= $evalTec->tecnicas_estadisticas_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.8 Manipulacion de los items de ensayo o    de calibracion</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Procedimientos transporte, recepción, manejo de muestras</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->procedimiento_muestras_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Sistema de identificación de objetos</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->sistema_identificacion_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Adecuación de las instalaciones en recepción de objetos</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->adecuacion_instalaciones_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.9 Aseguramiento de la calidad de los    resultados</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Procedimiento de aseguramiento de calidad</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->procedimiento_aseguramiento_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Uso regular de material de referencia</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->uso_regular_material_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Participación en intercomparaciones</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->participacion_intercomparaciones_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="8"><table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td width="146" valign="top"><p align="center"><strong>Proveedor</strong></p></td>
        <td width="151" valign="top"><p align="center"><strong>Resultados</strong></p></td>
        <td width="161" valign="top"><p align="center"><strong>Indicador de desempeño</strong></p></td>
        <td width="174" valign="top"><p align="center"><strong>Conclusion de desempeño</strong></p></td>
      </tr>
      <tr>
        <td width="146" valign="top"><p>&nbsp;</p></td>
        <td width="151" valign="top"><p>&nbsp;</p></td>
        <td width="161" valign="top"><p>&nbsp;</p></td>
        <td width="174" valign="top"><p>&nbsp;</p></td>
      </tr>
      <tr>
        <td width="146" valign="top"><p>&nbsp;</p></td>
        <td width="151" valign="top"><p>&nbsp;</p></td>
        <td width="161" valign="top"><p>&nbsp;</p></td>
        <td width="174" valign="top"><p>&nbsp;</p></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td colspan="3"><p>Repetición de ensayos</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->repeticion_ensayos_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Correlación</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->correlacion_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Registros de aseguramiento</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->registro_aseguramiento_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>5.10 Informes de los resultados</strong></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Formatos apropiados y claros</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->formatos_apropiados_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Cumple los requisitos de la norma de referencia</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->cumple_requisitos_norma_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Documentación que apoya opiniones e interpretaciones</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->documentacion_opiniones_eval_tecnica ?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Seguridad en transmisión electrónica</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->seguridad_transmision_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="3"><p>Confidencialidad</p></td>
    <td colspan="5" valign="top"><p>&nbsp;<?= $evalTec->confidencialidad_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>Criterios incertidumbre </strong> </p></td>
  </tr>
  <tr>
    <td colspan="8"><p><strong>Criterios trazabilidad </strong></p></td>
  </tr>
</table>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" colspan="2"><p><strong>OTRAS OBSERVACIONES</strong><strong> (favor anotar cualquier información adicional)</strong><strong> </strong></p></td>
  </tr>
  <tr>
    <td width="95"><p align="center"><strong>REQUISITO    Nº<br>
    </strong><strong>(según ISO 17025)</strong><strong> </strong></p></td>
    <td width="548"><p align="center"><strong>COMENTARIO</strong></p></td>
  </tr>
  <tr>
    <td width="95"><p>&nbsp;&nbsp;<?= $evalTec->numero_requisito_eval_tecnica?> </p></td>
    <td width="548"><p>&nbsp;&nbsp;<?= $evalTec->comentario_requisito_eval_tecnica?> </p></td>
  </tr>
</table>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643"><p><strong>CONCLUSIÓN SOBRE LA    COMPETENCIA TÉCNICA DEL LABORATORIO PARA EJECUTAR EL ENSAYO Y/O CALIBRACIÓN</strong></p></td>
  </tr>
  <tr>
    <td width="643"><p>&nbsp;<?= $evalTec->conclusion_eval_tecnica?></p></td>
  </tr>
</table>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" colspan="2"><p><strong>DATOS SOBRE LA    ELABORACIÓN DEL INFORME</strong></p></td>
  </tr>
  <tr>
    <td width="198"><p>Fecha de evaluación:</p></td>
    <td width="444"><p>&nbsp;<?= $evalTec->fecha_inicio_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td width="198"><p>Horas de evaluación:</p></td>
    <td width="444"><p>&nbsp;<?= $evalTec->hora_inicio_eval_tecnica?></p></td>
  </tr>
  <tr>
    <td width="198"><p>Lugar:</p></td>
    <td width="444"><p> <?= $oec->fkIdPais->nombre_pais ; ?>, <?= $oec->ciudad_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="198"><p>Evaluador/Experto Técnico:</p></td>
    <td width="444"><p> <?php  


	if (sizeof($equipo) > 0)
	{
		echo $equipo[primer_nombre_usuario] . ' ' . $equipo[apellido_paterno_usuario];
	}



 ?> </p></td>
  </tr>
  <tr>
    <td width="198"><p>Firma:</p></td>
    <td width="444"><p>&nbsp;</p>
        <p>&nbsp;</p>
      <p>&nbsp;</p></td>
  </tr>
</table>

<p align="center"><strong>¿DÓNDE SE  PUEDE OBTENER MAYOR INFORMACIÓN?</strong></p>
<div>
  <h4>Si requiere mayor información sobre algunos  de los aspectos de este formulario, dirigir sus solicitudes a:</h4>
  <p><strong>Dirección Técnica de  Acreditación </strong><br>
      <strong>Instituto Boliviano de  Metrología</strong><br>
    Avenida Camacho 1488 – Edificio anexo<br>
    La Paz – BOLIVIA<br>
    Teléfono/Fax     +591 2 237-2046<br>
    E-mail:               acreditacion@ibmetro.gob.bo<br>
    URL:                  <a href="http://www.ibmetro.org/acreditacion">www.ibmetro.gob.bo/acreditacion</a> </p>
</div>
