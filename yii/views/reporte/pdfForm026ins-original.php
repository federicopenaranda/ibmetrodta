<div align="center"><strong>INFORMACIÓN  DEL ORGANISMO ACREDITADO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $pet->fkIdCodigoPeticion->codigo_peticion ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->nombre_oec ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE ORGANISMO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdOecTipo->nombre_oec_tipo; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NORMA DE APLICACIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdNormaReferencia->nombre_norma_referencia; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NIT</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->nit_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?=$oec->direccion_oec?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CIUDAD</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->ciudad_oec ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->departamento_oec ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdPais->nombre_pais ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TELÉFONO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->telefono1_oec."<br>&nbsp;&nbsp;".$oec->telefono2_oec ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FAX</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fax_oec?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>E-MAIL</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->email1_oec."<br>&nbsp;&nbsp;".$oec->email2_oec?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CÓDIGO ACREDITACIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $pet->codigo_acreditacion_peticion ?> </p></td>
  </tr>
</table>
<br>
<div align="center"><strong>ALCANCE DE  ACREDITACIÓN</strong><br>
  Anexo 4 que reemplaza y anula al Anexo 3 emitido el  06 de diciembre de 2013</div>

<table border="1" cellspacing="0" cellpadding="0" width="98%" style="font-size:9">
  <tr>
    <td width="4%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>ID</strong></p></td>
    <td width="12%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Descripción del método de inspección</strong></p></td>
    <td width="21%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center" ><strong>Norma de referencia o procedimiento</strong></p></td>
    <td width="16%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Ìtems inspeccionados</strong></p></td>
    <td width="23%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Ítems de referencia</strong></p></td>
    <td width="20%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Signatario</strong></p></td>
  </tr>
<?php $i=1;foreach ($anCon as $ac) {
foreach ($ac['alcanceAcreditacionInsp041303s'] as $value) { ?>
  <tr>
    <td width="4%"><p align="center"><?= $i;?></p></td>
    <td width="12%"><p align="center"><?= $value['procedimiento_alcance_acreditacion_insp'] ?></p></td>
    <td width="21%"><p align="center"><?= $value['norma_ref_alcance_acreditacion_insp'] ?></p></td>
    <td width="16%"><p align="center"><?= $value['items_inspeccionados_alcance_acreditacion_insp'] ?></p></td>
    <td width="23%"><p align="center"><?= $value['items_referencia_alcance_acreditacion_insp'] ?></p></td>
    <td width="20%"><p align="center"><?= $value['signatario_alcance_acreditacion_insp'] ?></p></td>
  </tr>
<?php $i++;}}?>
</table>
<div>(*) El alcance cubre únicamente a Micros de transporte empresarial.</div>
<br>
<div><strong>EMISIÓN DEL ANEXO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>RESPONSABLE</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= isset($anCon)? $anCon[0]['responsable_anexo_convenio']:""; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CARGO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= isset($anCon)? $anCon[0]['cargo_anexo_convenio']:""; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FECHA</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= isset($anCon)? $anCon[0]['fecha_anexo_convenio']:""; ?> </p></td>
  </tr>
</table>
<br>
<p align="center"><strong>IMPORTANTE</strong></p>
<div>
    <ul>
      <li>Este alcance forma parte del Convenio de Acreditación  CIPS-IBMETRO-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Nº &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /2011 suscrito entre el organismo acreditado  y el IBMETRO. La   Dirección Técnica de Acreditación del Instituto Boliviano de  Metrología es responsable por el contenido técnico de este documento.</li>
      <li>El organismo acreditado sólo puede hacerse  referencia a la condición de acreditado y usar el símbolo de acreditación para  las actividades que se consignan en este alcance. Cualquier uso del símbolo de  acreditación debe realizarse en el marco de la reglamentación vigente del  sistema de acreditación.</li>
      <li>Este alcance sólo puede reproducirse en su  totalidad. Para reproducir fragmentos del mismo, debe obtenerse la aprobación  escrita de DTA-IBMETRO</li>
    </ul>
</div>
<p><strong>Nota: Si requiere mayor información  sobre algunos de los aspectos de este formulario, dirigir sus solicitudes a:</strong></p>
<div>
  <p><strong>Dirección  Técnica de Acreditación </strong><br>
      <strong>Instituto  Boliviano de Metrología</strong><br>
    Avenida Camacho 1488 – Edificio anexo<br>
    La Paz – BOLIVIA<br>
    Teléfono/Fax       +591  2 237-2046<br>
    E-mail:                acreditacion@ibmetro.gob.bo<br>
    URL:                   www.ibmetro.gob.bo/acreditacion</p>
</div>
