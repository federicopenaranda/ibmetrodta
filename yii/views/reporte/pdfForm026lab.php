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
  Anexo 9 que reemplaza al anexo 8 emitido el 31 de diciembre de 2014 </div>

<table border="1" cellspacing="0" cellpadding="0" width="99%" style="font-size:9">
  <tr>
    <td width="14%" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>&nbsp;</strong></p></td>
    <td width="85%" colspan="5" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Tipo de ensayos: </strong>Química analítica     en minerales, menas y materiales inorgánicos </p></td>
  </tr>
  <tr>
    <td width="14%" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Fecha de     acreditación</strong></p></td>
    <td width="5%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>ID</strong></p></td>
    <td width="25%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Descripción     del ensayo y matriz</strong></p></td>
    <td width="22%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Procedimiento y/o método de ensayo </strong></p></td>
    <td width="18%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Rango de     medición</strong></p></td>
    <td width="15%" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Incertidumbre     (*)</strong></p></td>
  </tr>
  <?php 
$i = 1;
foreach ($alcance as $value) { ?>
  <tr>
    <td width="14%"><p align="center"><?= "" ?></p></td>
    <td width="5%"><p align="center"><?= $i ?></p></td>
    <td width="25%"><p align="center"><?= $value['descripcion_ensayo_alcance_acreditacion_lab'] ?></p></td>
    <td width="22%"><p align="center"><?= $value['metodo_ensayo_alcance_acreditacion_lab'] ?></p></td>
    <td width="18%"><p align="center"><?= $value['rango_medicion_alcance_acreditacion_lab'] ?></p></td>
    <td width="15%"><p align="center"><?= $value['incertidumbre_alcance_acreditacion_lab'] ?></p></td>
  </tr>
  <?php $i++; }?>
</table>
<div style="font-size:9">(*)  La incertidumbre informada representa incertidumbre expandida expresada a un nivel de confianza de aproximadamente 95 % usando un factor de cobertura k=2.  
	X= Valor de la concentración medida del analito.
	uc= incertidumbre combinada
	UFC= Unidades formadoras de colonia.

	Para el reporte de los resultados de los parámetros microbiológicos se utiliza el siguiente criterio:<br>
  <strong>Coliflormes Totales</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;<strong>Coliformes termotolerantes</strong>
</div>
<br>
<table width="735" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><table border="1" cellspacing="0" cellpadding="0" align="left" width="158">
      <tr>
        <td width="83" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center">Rango de la medición    (UFC/100ml)</p></td>
        <td width="76" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center">uc (UFC/100ml)</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">5 a 10</p></td>
        <td width="76" valign="top"><p align="center">0,652</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">11 a 75</p></td>
        <td width="76" valign="top"><p align="center">4,069</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">76 a 125</p></td>
        <td width="76" valign="top"><p align="center">6,149</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">126 a 175</p></td>
        <td width="76" valign="top"><p align="center">10,162</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">176 a 200</p></td>
        <td width="76" valign="top"><p align="center">17,591</p></td>
      </tr>
    </table></td>
    <td><table border="1" cellspacing="0" cellpadding="0" align="left" width="158">
      <tr>
        <td width="83" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center">Rango de la medición    (UFC/100ml)</p></td>
        <td width="76" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center">uc (UFC/100ml)</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">3 a 10</p></td>
        <td width="76" valign="top"><p align="center">0,938</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">11 a 75</p></td>
        <td width="76" valign="top"><p align="center">5,042</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">76 a 125</p></td>
        <td width="76" valign="top"><p align="center">5,511</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">126 a 175</p></td>
        <td width="76" valign="top"><p align="center">14,928</p></td>
      </tr>
      <tr>
        <td width="83" valign="top"><p align="center">176 a 200</p></td>
        <td width="76" valign="top"><p align="center">21,865</p></td>
      </tr>
    </table></td>
  </tr>
</table>
<br />
<strong>PERSONAL AUTORIZADO</strong><br />
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="605" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Ensayistas:</strong></p></td>
    <td width="331" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>Ensayo</strong></p></td>
  </tr>
  <?php foreach ($anCon as $ac) {
foreach ($ac['personalAutorizado041303s'] as $value) { ?>
  <tr>
    <td width="605" valign="top"><p>&nbsp;<?= $value['ensayista_personal_autorizado']?></p></td>
    <td width="331" valign="top"><p>&nbsp;<?= $value['ensayo_personal_autorizado']?></p></td>
  </tr>
  <?php }}?>
</table>
<div><strong>EMISIÓN DEL ANEXO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>RESPONSABLE</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= isset($anCon)? $anCon[0]['responsable_anexo_convenio']:""; ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CARGO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= isset($anCon)? $anCon[0]['cargo_anexo_convenio']:""; ?></p></td>
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
