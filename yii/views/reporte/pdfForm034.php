<div align="center"><strong>CÓDIGO DE LA EVALUACIÓN</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="162" valign="top"><p>&nbsp;&nbsp;<?= $pet->fkIdCodigoPeticion->codigo_peticion ?> </p></td>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EVALUACIÓN</strong> </p></td>
    <td width="157" valign="top"><p>&nbsp;&nbsp;<?= $eval->codigo_evaluacion; ?> </p></td>
  </tr>
</table>
<div>
  <p>Por la presente, se certifica que <strong><?=$prueba->dir_nombre_responsable_prueba_participacion ?></strong> con código de evaluador <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> de la   Dirección Técnica de Acreditación del Instituto Boliviano de  Metrología, ha integrado el equipo evaluador en calidad de <strong> </strong> , durante  la  <a name="Listadesplegable5"></a><strong> </strong>  llevada a cabo en fecha <strong><?=$prueba->dir_fecha_prueba_participacion ?></strong>, totalizando <strong><?=$prueba->horas_evaluacion_prueba_participacion ?></strong> horas de evaluación, al  siguiente organismo:</p>
</div>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $oec->nombre_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE ORGANISMO</strong></p></td>
    <td width="397" valign="top"><p><a name="Listadesplegable3"></a>&nbsp;&nbsp;<?= $oec->fkIdOecTipo->nombre_oec_tipo; ?></p></td>
  </tr>
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CRITERIO DE EVALUACIÓN</strong></p></td>
    <td width="397" valign="top"><p><a name="Listadesplegable6"></a> <?= $prueba->fkIdCriterioEvaluacion->nombre_criterio_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $oec->direccion_oec?>  </p></td>
  </tr>
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CIUDAD</strong></p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $oec->ciudad_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $oec->departamento_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdPais->nombre_pais ; ?> </p></td>
  </tr>
  <tr>
    <td width="246" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TELÉFONO</strong></p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $oec->telefono1_oec ."<br>&nbsp;&nbsp;".$oec->telefono2_oec; ?></p></td>
  </tr>
</table>
<br>
<div align="center"><strong>POR LA DIRECCIÓN   DE ACREDITACIÓN DE IBMETRO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="246" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Nombre de    la persona responsable</p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $prueba->dir_nombre_responsable_prueba_participacion; ?><strong> </strong></p></td>
  </tr>
  <tr>
    <td width="246" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Cargo</p></td>
    <td width="397" valign="top"><p><strong> </strong>&nbsp;&nbsp;<?= $prueba->dir_cargo_prueba_participacion?><strong> </strong> <strong> </strong></p></td>
  </tr>
  <tr>
    <td width="246" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Fecha</p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $prueba->dir_fecha_prueba_participacion ?><strong> </strong></p></td>
  </tr>
</table>
<br>
<div align="center"><strong>POR EL ORGANISMO  EVALUADO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="246" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Nombre de    la persona responsable</p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $prueba->oec_nombre_responsable_prueba_participacion?></p></td>
  </tr>
  <tr>
    <td width="246" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Cargo</p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $prueba->oec_cargo_prueba_participacion ?></p></td>
  </tr>
  <tr>
    <td width="246" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Fecha</p></td>
    <td width="397" valign="top"><p>&nbsp;&nbsp;<?= $prueba->oec_fecha_prueba_participacion ?></p></td>
  </tr>
</table>
