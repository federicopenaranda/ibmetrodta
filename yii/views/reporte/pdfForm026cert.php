<div align="center"><strong>INFORMACIÓN  DEL ORGANISMO ACREDITADO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $pet->fkIdCodigoPeticion->codigo_peticion ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->nombre_oec ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE ORGANISMO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdOecTipo->nombre_oec_tipo; ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NORMA DE APLICACIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdNormaReferencia->nombre_norma_referencia; ?></p></td>
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
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->ciudad_oec ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->departamento_oec ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdPais->nombre_pais ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TELÉFONO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;;<?= $oec->telefono1_oec."<br>&nbsp;&nbsp;".$oec->telefono2_oec ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FAX</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;;<?= $oec->fax_oec?></p></td>
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
  <strong>ANEXO 1</strong>
</div>

<table border="1" cellspacing="0" cellpadding="0" width="649" style="font-size:10">
  <tr>
    <td width="98" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>&nbsp;</strong></p></td>
    <td width="551" colspan="4" style="background-color:#E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Tipo de certificación:    Certificación de Sistemas de Gestión</strong> </p></td>
  </tr>
  <tr>
    <td width="98" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Fecha de    acreditación</strong></p></td>
    <td width="47" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center" ><strong>Id</strong></p></td>
    <td width="142" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Sistema    de Gestión </strong></p></td>
    <td width="189" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Norma</strong></p></td>
    <td width="173" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Descripción    del Sector Económico / Actividad Sector </strong><br />
            <strong>Código    IAF</strong></p></td>
  </tr>


  <?php 
$i = 1;
foreach ($alcance as $value) { ?>
  <tr>
    <td width="98"><p>&nbsp;<?= $value['fecha_acreditacion_alcance_acreditacion_cert'] ?></p></td>
    <td width="47"><p align="center">&nbsp;<?= $i ?></p></td>
    <td width="142"><p>&nbsp;<?= $value['producto_alcance_acreditacion_cert'] ?></p></td>
    <td width="189"><p>&nbsp;<?= $value['norma_referencia_alcance_acreditacion_cert'] ?></p></td>
    <td width="173"><p>&nbsp;<?= $value['sector_economico_alcance_acreditacion_cert']."<br>&nbsp;".$value['actividad_sector_alcance_acreditacion_cert']; ?></p></td>
  </tr>
  <?php $i++; }?>

</table>
<br>
<div><strong>EMISIÓN DEL ANEXO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>RESPONSABLE</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= isset($anCon)? $anCon[0]['responsable_anexo_convenio']:""; ?></p></td>
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
