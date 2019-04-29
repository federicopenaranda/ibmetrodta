<head>
<meta charset="UTF-8">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
</head>

<div align="center"><strong>INFORMACIÓN  DEL ORGANISMO ACREDITADO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="162" valign="top"><p>&nbsp;<?= $codPet['codigo_peticion'] ?></p></td>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EVALUACIÓN</strong> </p></td>
    <td width="157" valign="top"><p>&nbsp;<?= $eval->codigo_evaluacion; ?></p></td>
  </tr>
  <tr>
    <td width="643" colspan="4"><p>La DTA solicita la aceptación de este plan    antes de la evaluación al organismo.<br />
      Para constatar ese hecho,    un representante autorizado del organismo evaluado debe firmar en la última    hoja de este formulario </p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACIÓN  DEL ORGANISMO DE EVALUACIÓN DE LA CONFORMIDAD</strong> </div>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?= $oec->nombre_oec ?></p></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE ORGANISMO</strong></p></td>
    <td width="425" valign="top">&nbsp;<?= $oec->fkIdOecTipo->nombre_oec_tipo; ?></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NIT</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?= $oec->nit_oec; ?></p></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?=$oec->direccion_oec?></p></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CIUDAD</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?= $oec->ciudad_oec ?></p></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="425" valign="top">&nbsp;<?= $oec->departamento_oec ?></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?= $oec->fkIdPais->nombre_pais ?></p></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TELÉFONO</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?= $oec->telefono1_oec."<br>&nbsp;".$oec->telefono2_oec ?></p></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FAX</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?= $oec->fax_oec?></p></td>
  </tr>
  <tr>
    <td width="217" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>E-MAIL</strong></p></td>
    <td width="425" valign="top"><p>&nbsp;<?= $oec->email1_oec."<br>&nbsp;".$oec->email2_oec?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACIÓN  SOBRE LA EVALUACIÓN</strong> </div>
<br />
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FECHAS DE LA EVALUACIÓN</strong></p></td>
    <td width="378"><p>&nbsp;<?=$eval->fecha_inicio_evaluacion ?></p></td>
  </tr>
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>OBJETIVO DE LA EVALUACIÓN</strong></p></td>
    <td width="378"><p>&nbsp;<?=$eval->objetivo_evaluacion ?></p></td>
  </tr>
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DOCUMENTOS DE REFERENCIA</strong></p></td>
    <td width="378"><p>&nbsp;<?=$eval->documento_referencia_evaluacion ?> </p></td>
  </tr>
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>IDENTIFICACIÓN DEL MANUAL</strong></p></td>
    <td width="378"><p>&nbsp;<?=$eval->identificacion_manual_evaluacion ?> </p></td>
  </tr>
</table>
<br />
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" colspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROGRAMA DE    REUNIONES</strong></p></td>
  </tr>
  <tr>
    <td width="293" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Fecha y hora reunión inicial:</p></td>
    <td width="350"><p>&nbsp;<?= $eval->fecha_reunion_inicial_evaluacion." ".$eval->hora_reunion_inicial_evaluacion  ?> </p></td>
  </tr>
  <tr>
    <td width="293" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Fecha y hora reunión del equipo evaluador</p></td>
    <td width="350"><p>&nbsp;<?= $eval->fecha_reunion_ee_evaluacion ." ". $eval->hora_reunion_ee_evaluacion ?></p></td>
  </tr>
  <tr>
    <td width="293" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Fecha y hora reunión    final</p></td>
    <td width="350"><p>&nbsp;<?= $eval->fecha_reunion_final_evaluacion." ".$eval->hora_reunion_final_evaluacion ?></p></td>
  </tr>
  <tr>
    <td width="643" colspan="2"><p>La DTA recomienda que el    Representante de la     Alta Dirección, Gerente de Calidad y Gerente Técnico estén    presentes en las reuniones de inicio y cierre, además de los directivos y    personal que el organismo considere conveniente.</p></td>
  </tr>
</table>
<br />
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" colspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>IDENTIFICACIÓN DE    RESPONSABLES POR EL PROCESO DE ACREDITACIÓN</strong></p></td>
  </tr>
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Alta Dirección</p></td>
    <td width="378"><p>&nbsp;<?= $eval->fkIdOecContactoAltaDireccion->primer_nombre_oec_contacto." ".$eval->fkIdOecContactoAltaDireccion->apellido_paterno_oec_contacto ?> </p></td>
  </tr>
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Gerente Técnico</p></td>
    <td width="378"><p>&nbsp;<?= $eval->fkIdOecContactoGerenteTecnico->primer_nombre_oec_contacto." ".$eval->fkIdOecContactoGerenteTecnico->apellido_paterno_oec_contacto ?> </p></td>
  </tr>
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Gerente de Calidad</p></td>
    <td width="378"><p>&nbsp;<?= $eval->fkIdOecContactoGerenteCalidad->primer_nombre_oec_contacto." ".$eval->fkIdOecContactoGerenteCalidad->apellido_paterno_oec_contacto ?> </p></td>
  </tr>
</table>
<br />
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>IDIOMA DE LA EVALUACIÓN</strong></p></td>
    <td width="378"><p><strong><?= ($eval->idioma_evaluacion == 'es') ? 'Español' : 'Inglés' ?></strong><strong> </strong></p></td>
  </tr>
</table>
<br />




  <tr>
    <td><p><?php $equipo[0]->fkIdUsuario->primer_nombre_usuario ?></p></td>
  </tr>



<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" colspan="3" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EQUIPO EVALUADOR</strong></p></td>
  </tr>
  <tr>
    <td width="152" ><p align="center"><strong>Función</strong></p></td>
    <td width="330" ><p align="center"><strong>Nombre</strong></p></td>
    <td width="161" ><p align="center"><strong>Código DTA</strong></p></td>
  </tr>

  <?php for ( $i=0; $i<sizeof($equipo); $i++ ) { ?>
    <tr>
      <td width="152"><p><?php echo $equipo[$i]->observaciones_equipo_peticion ?></p></td>
      <td width="330"><p> <?php echo $equipo[$i]->fkIdUsuario->primer_nombre_usuario . ' ' . $equipo[$i]->fkIdUsuario->segundo_nombre_usuario . ' ' . $equipo[$i]->fkIdUsuario->apellido_paterno_usuario . ' ' . $equipo[$i]->fkIdUsuario->apellido_materno_usuario ?> </p></td>
      <td width="161"><p> <?php echo $equipo[$i]->fkIdUsuario->codigo_usuario ?> </p></td>
    </tr>
  <?php } ?>

  <tr>
    <td width="643" colspan="3"><p>Todos los    evaluadores/expertos/observadores de la DTA firman un compromiso de    confidencialidad y un término de conflictos de interés, que tienen por finalidad    asegurar que sus actuaciones son imparciales y no discriminatorias.<br />
      Estos registros se encuentran en la DTA,    donde pueden ser consultados por nuestros clientes.</p></td>
  </tr>
</table>
<br />
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PLAN DE EVALUACIÓN    (Fecha, puntos de la Norma, responsables)</strong></p></td>
  </tr>
  <tr>
    <td width="643" nowrap="nowrap"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="643" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>ALCANCE DE ACREDITACIÓN SOLICITADO</strong></p></td>
  </tr>
  <tr>
    <td width="643" nowrap="nowrap"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="643" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>ACTIVIDADES INCLUIDAS EN EL ALCANCE DE ACREDITACIÓN A SER EVALUADAS</strong></p></td>
  </tr>
  <tr>
    <td width="643" nowrap="nowrap"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
</table>
<div align="center"><strong>INFORMACIÓN SOBRE   LA ELABORACIÓN DEL PLAN</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="208" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE</strong></p></td>
    <td width="435" valign="top"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="208" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CARGO</strong></p></td>
    <td width="435" valign="top"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="208" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FECHA</strong></p></td>
    <td width="435" valign="top"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
</table>
<div align="center"><strong>ACEPTACIÓN DEL PLAN DE  EVALUACIÓN POR EL ORGANISMO DE EVALUACIÓN DE LA CONFORMIDAD</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="208" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>REPRESENTANTE</strong></p></td>
    <td width="435" ><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="208" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CARGO</strong></p></td>
    <td width="435" ><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="208" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FECHA</strong></p></td>
    <td width="435"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
</table>
<div>
  <p>Nota: Si existen  observaciones a este plan, comunicarse con el organismo de acreditación:</p>
  <p><strong>Dirección  Técnica de Acreditación </strong><br>
      <strong>Instituto  Boliviano de Metrología</strong><br>
    Avenida Camacho 1488 – Edificio anexo<br>
    La Paz – BOLIVIA<br>
    Teléfono/Fax       +591  2 237-2046<br>
    E-mail:                acreditacion@ibmetro.gob.bo<br>
    URL:                   www.ibmetro.gob.bo/acreditacion</p>
</div>
