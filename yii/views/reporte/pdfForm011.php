<div align="center"><strong>CÓDIGO DE LA  EVALUACIÓN</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="652">
  <tr>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="162" valign="top"><p>&nbsp;<?= $pet->fkIdCodigoPeticion->codigo_peticion ?></p></td>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EVALUACIÓN</strong></p></td>
    <td width="167" valign="top"><p>&nbsp;&nbsp;<?= $eval->codigo_evaluacion; ?> </p></td>
  </tr>
</table>
<br>
<div align="center"><strong>INFORMACIÓN  DEL ORGANISMO DE EVALUACIÒN DE LA CONFORMIDAD</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="652">
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->nombre_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE ORGANISMO</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdOecTipo->nombre_oec_tipo; ?></p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NIT</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->nit_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->direccion_oec?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LOCALIDAD/CIUDAD</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->ciudad_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->departamento_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdPais->nombre_pais ; ?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TELÉFONO</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->telefono1_oec ."<br>&nbsp;&nbsp;".$oec->telefono2_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FAX</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->fax_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="236" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>E-MAIL</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $oec->email1_oec."<br>&nbsp;&nbsp;".$oec->email2_oec; ?> </p></td>
  </tr>
</table>
<br>
<div align="center"><strong>INFORMACIÓN  SOBRE LA EVALUACIÓN</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="652">
  <tr>
    <td width="236"><p><strong>FECHA </strong><br>
      <strong style="font-size:7pt">(AAAA-MM-DD) </strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->fecha_inicio_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="236"><p><strong>LUGAR </strong><br>
      <strong style="font-size:7pt">(LOCALIDAD-CIUDAD-DEPARTAMENTO-PAÍS)</strong><strong> </strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->lugar_informe_evaluacion?> </p></td>
  </tr>
  <tr>
    <td width="236"><p><strong>OBJETIVO </strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->objetivo_informe_evaluacion ?></p></td>
  </tr>
  <tr>
    <td width="236"><p><strong>DOCUMENTOS DE REFERENCIA</strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->documentos_referencia_informe_evaluacion ?></p></td>
  </tr>
  <tr>
    <td width="236"><p><strong>INSTALACIONES VISITADAS</strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->instalaciones_visitadas_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="236"><p><strong>PROFESIONALES ENTREVISTADOS </strong><br>
      <strong style="font-size:7pt">(NOMBRE-CARGO)</strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->profesionales_visitados_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="236"><p><strong>EQUIPO EVALUADOR</strong><br>
      <strong style="font-size:7pt">(CODIGO: FUNCIÓN-NOMBRE) </strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->equipo_evaluador_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="652" colspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>ALCANCE DE ACREDITACIÓN    SOLICITADO Y ATESTIGUAMIENTOS REALIZADOS</strong><br>
      <strong style="font-size:7pt">(DESCRIPCIÓN DEL ENSAYO,    MATRIZ, NORMA, RANGO, INCERTIDUMBRE)</strong></p></td>
  </tr>
  <tr>
    <td width="652" colspan="2"><p><?= $infoEval->alcance_acreditacion_informe_evaluacion ?></p></td>
  </tr>
  <tr>
    <td width="652" colspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>COMENTARIO SOBRE CADA UNO DE LOS REQUISITOS    DEL CRITERIO UTILIZADO</strong> <br>
      <strong style="font-size:7pt">ITEN DEL CRITERIO    /COMENTARIO</strong><br>
      <strong style="font-size:7pt">(LOS COMENTARIOS    DEBEN  MOSTRAR LA SITUACIÓN REAL DEL    SISTEMA DE GESTIÓN  EN RELACIÓN AL    CUMPLIMIENTO DE CADA UNO DE LOS REQUISITOS DEL CRITERIO UTILIZADO) </strong></p></td>
  </tr>
  <tr>
    <td width="652" colspan="2"><p> <?= $infoEval->comentario_requisito_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="652" colspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>COMENTARIO SOBRE EVALUACIÓN    DEL DESEMPEÑO</strong> <br>
      <div style="font-size:7pt">CONSIGNAR COMENTARIOS SOBRE LOS RESULTADOS    DE ACTIVIDADES DE <strong>SEGUIMIENTO A    AUDITORES O INSPECTORES, </strong>EN EL CASO DE ORGANISMOS DE CERTIFICACIÓN O  INSPECCIÓN Y SOBRE LOS RESULTADOS DE LA    PARTICIPACIÓN EN <strong>ENSAYOS DE APTITUD/COMPARACIONES INTERLABORATORIOS </strong>DE    LABORATORIOS. LOS COMENTARIOS EMITIDOS DEBEN SER EN BASE A LOS CRITERIOS  DE EXPERTOS TÉCNICOS Y DE  EVALUADORES QUE ATESTIGUARON EL DESEMPEÑO    DE LOS AUDITORES)</div></p></td>
  </tr>
  <tr>
    <td width="652" colspan="2"><p> <?= $infoEval->comentario_evaluacion_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="652" colspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CONCLUSIÓN    SOBRE LA EVALUACIÓN</strong><br>
      <strong style="font-size:7pt">(DEBE    REFERIRSE AL ESTADO DE IMPLANTACIÓN DEL SISTEMA DE GESTIÓN, LA COMPETENCIA TÉCNICA PARA    REALIZAR LAS ACTIVIDADES DEL ALCANCE DE ACREDITACIÓN Y EL CUMPLIMIENTO DE    REGLAMENTOS DE ACREDITACIÓN POR PARTE DEL OEC)</strong></p></td>
  </tr>
  <tr>
    <td width="652" colspan="2"><p> <?= $infoEval->conclusion_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="652" colspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>ANEXOS</strong><br>
      <strong style="font-size:7pt">(PLAN DE EVALUACIÓN,    LISTA DE ASISTENCIAS, LISTAS DE VERIFICACIÓN , INFORMES TÉCNICOS Y TODA    INFORMACIÓN RELEVANTE)</strong></p></td>
  </tr>
  <tr>
    <td width="652" colspan="2"><p> <?= $infoEval->anexos_informe_evaluacion ?> </p></td>
  </tr>
</table>
<br>
<div align="center"><strong>INFORMACIÓN  SOBRE LA ELABORACIÓN DEL INFORME</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="653">
  <tr>
    <td width="237" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FECHA DE EMISIÓN</strong><br>
      <strong style="font-size:7pt">(AAAA-MM-DD)</strong><strong> </strong></p></td>
    <td width="416"><p>&nbsp;&nbsp;<?= $infoEval->fecha_emision_informe_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="237" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LUGAR</strong><br>
      <strong style="font-size:7pt">(LOCALIDAD-CIUDAD-DEPARTAMENTO-PAÍS)</strong><strong> </strong></p></td>
    <td width="416" nowrap><p>&nbsp;&nbsp;<?= $infoEval->lugar_emision_informe_evaluacion?> </p></td>
  </tr>
  <tr>
    <td width="237" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EVALUADOR    LÍDER</strong></p></td>
    <td width="416" nowrap><p>&nbsp;&nbsp;<?= sizeof($usu) == 0 ? "Este trámite no tiene asignado un Evaluador Líder": $usu['primer_nombre_usuario']." ".$usu['apellido_paterno_usuario']; ?> </p></td>
  </tr>
</table>
<div>
  <p>Nota: Si quiere mayor informacion sobre algunos de loa aspectos de este formulario,dirigir sus solicitudes a:</p>
  <p><strong>Dirección  Técnica de Acreditación </strong><br>
      <strong>Instituto  Boliviano de Metrología</strong><br>
    Avenida Camacho 1488 – Edificio anexo<br>
    La Paz – BOLIVIA<br>
    Teléfono/Fax       +591  2 237-2046<br>
    E-mail:                acreditacion@ibmetro.gob.bo<br>
    URL:                   www.ibmetro.gob.bo/acreditacion</p>
</div>
