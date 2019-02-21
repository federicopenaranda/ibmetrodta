<table border="1" cellspacing="0" cellpadding="1" width="643">
  <tr>
    <td width="643" style="font-size:11pt" align="justify"><p>La información que se consigna en el    presente formulario tiene por finalidad manifestar la intención del organismo    de evaluación de la conformidad (OEC) solicitante para iniciar un proceso de    acreditación ante la DTA-IBMETRO.<br />
      Le agradeceremos leer detalladamente la    información que se solicita y enviar a la DTA-IBMETRO el formulario    correctamente llenado.</p></td>
  </tr>
</table>
<br />
<table border="1" cellspacing="0" cellpadding="1" width="643" style="font-size:11 pt">
  <tr>
    <th width="643" align="left" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>INSTRUCTIVO PARA EL LLENADO Y PRESENTACION    DEL FORMULARIO</strong><strong> </strong></p></th>
  </tr>
  <tr>
    <td width="643" align="justify"><p>1. El presente documento es un formulario    de libre distribución, sin costo alguno para el OEC solicitante y que por sí    mismo no representa ninguna obligación ó compromiso por parte de la DTA-IBMETRO.</p><br />
      <p>2. El formulario puede ser llenado en    computadora o manuscrita de manera legible con letra imprenta.</p><br />
      <p>3. Toda la información registrada debe ser    veraz y fidedigna.</p><br />
      <p>4. El formulario debe estar firmado por el <strong>máximo representante legal</strong> del OEC    solicitante.</p><br />
      <p>5. El formulario debe estar acompañado de    una nota formal, dirigida al Director General Ejecutivo de IBMETRO en la que    se coloque como referencia de manera textual     &ldquo;Solicitud de apertura de expediente&rdquo;.</p><br />
      <p>6. Después que la DTA-IBMETRO haya recibido    la instrucción para dar curso al trámite por parte de la Dirección General     Ejecutiva de IBMETRO, en un plazo máximo de 15 días hábiles    les enviará una nota formal de respuesta y la correspondiente orden de pago.</p><br />
      <p>7. Una vez recibido el pago    correspondiente, la DTA-IBMETRO asigna al OEC solicitante un código de    trámite y entrega el  &ldquo;Pliego de    Documentos de Acreditación&rdquo; que contiene toda la información e instrucciones    necesarias para proceder con las siguientes etapas del proceso de    acreditación.<br />
        <br />
        8. En caso de cancelación del proceso por motivos    que atañen al OEC solicitante, no se reembolsará el monto depositado. </p></td>
  </tr>
</table>
<br />
<div align="center" style="font-size:11pt"><strong>INFORMACIÓN  DEL ORGANISMO DE EVALUACIÓN DE LA CONFORMIDAD (OEC)</strong></div>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><strong>NOMBRE DEL ORGANISMO</strong></td>
    <td width="415" >&nbsp;<?= $models['nombre_oec']; ?> </td>
  </tr>
  <tr>
    <td width="228" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><strong>TIPO DE ORGANISMO (*)</strong></td>
    <td width="415">&nbsp;<?= $models['fkIdOecTipo']['nombre_oec_tipo']; ?></td>
  </tr>
  <tr>
    <td width="228" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><strong>NORMA DE REFERENCIA (*)</strong></td>
    <td width="415">&nbsp;<?= $models['fkIdNormaReferencia']['nombre_norma_referencia']?></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><strong>NIT</strong></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['nit_oec']; ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['direccion_oec']; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>CIUDAD</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['ciudad_oec']?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['departamento_oec']?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['fkIdPais']['nombre_pais']?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>TELÉFONO1</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['telefono1_oec']; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>TELÉFONO2</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['telefono2_oec'];?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>FAX</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['fax_oec']?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>E-MAIL</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?=$models['email1_oec']; ?> </p></td>
  </tr>
</table>
<div style="font-size:8pt">(*) Este  campo tiene habilitado una lista automática de la cual se debe seleccionar la  información que corresponda al OEC. </div>
<br />
<div align="center"><strong>INFORMACIÓN  DE LA ENTIDAD MATRIZ   A LA   QUE PERTENECE EL OEC (SI APLICA)</strong></div>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;<?= $models['nombre_oec']; ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>ACTIVIDAD PRINCIPAL</strong></p></td>
    <td width="415" valign="top"><p><?php  foreach($models['fkIdActividadEconomicas'] as $act){ echo $act['nombre_actividad_economica']."<br>"; } ?></p></td>
  </tr>
  
</table>
<br />
<div align="center"><strong>INFORMACIÓN SOBRE LA ACREDITACIÓN SOLICITADA</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" nowrap="nowrap" colspan="2" valign="bottom" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>ALCANCE DE     ACREDITACIÓN</strong></p></td>
  </tr>
  <tr>
    <td width="331" nowrap="nowrap" valign="bottom"><p align="center"><strong>ENSAYO, CALIBRACIÓN, CERTIFICACIÓN</strong><br />
            <strong>O  INSPECCIÓN REALIZADA</strong></p></td>
    <td width="312" nowrap="nowrap"><p align="center"><strong>NORMAS, PROCEDIMIENTOS INTERNOS</strong><br />
            <strong>O ESPECIFICACIONES (CON AÑO)</strong></p></td>
  </tr>
  <?php foreach($models['oecAcreditacionSolicitada020003s'] as $acre):?>
  <tr>
    <td width="331" nowrap="nowrap"><p><?= $acre['inspeccion_oec_acreditacion_solicitada']; ?> </p></td>
    <td width="312" nowrap="nowrap"><p><?= $acre['especificaciones_oec_acreditacion_solicitada'];?></p></td>
  </tr>
	<?php endforeach;?>
</table>
<br/>
<table border="1" cellspacing="0" cellpadding="0" width="644">
  <tr>
    <td colspan="3" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><p><strong>PERSONA DE CONTACTO PARA EL PROCESO DE    ACREDITACIÓN</strong></p></td>
  </tr>
  <tr>
    <td width="203"><p align="center"><strong>Nombre</strong></p></td>
    <td width="162"><p align="center"><strong>Cargo</strong></p></td>
    <td width="271"><p align="center"><strong>E-mail</strong></p></td>
  </tr>
  <?php foreach($models['oecContacto020003s'] as $cont):?>
  <tr>
    <td width="203"><p><?= $cont['primer_nombre_oec_contacto']." ".$cont['apellido_paterno_oec_contacto']; ?></p></td>
    <td width="162"><?= $cont['cargo_oec_contacto']; ?></td>
    <td width="271"><p><?= $cont['email_oec_contacto']; ?></p></td>
  </tr>
  <?php endforeach;?>
</table>
<br />

<div align="center"><strong>DECLARACION DEL REPRESENTANTE LEGAL DEL ORGANISMO</strong></div>
<table width="643" border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="2" align="justify">
	<p>Yo, <strong>&nbsp;<?= $replegal == -1 ? "SIN REPRESENTANTE LEGAL" : $replegal['primer_nombre_oec_contacto']." ".$replegal['segundo_nombre_oec_contacto']." ".$replegal['apellido_paterno_oec_contacto']." ".$replegal['apellido_materno_oec_contacto'];?></strong> representante legal de <strong>&nbsp;<?= $models['nombre_oec'];?></strong> ,  declaro que:</p>
      <ol>
        <li>Me comprometo a tomar  conocimiento de los criterios, reglamentos, derechos y obligaciones que  confiere la acreditación, tarifas y aranceles aplicables y acepto el proceso de  acreditación establecido por la DTA - IBMETRO. </li>
        <li>Reconozco  que la apertura de un expediente ante la DTA-IBMETRO no otorga ninguna  condición especial a mi organismo ni constituye una autorización o respaldo  (explícito o implícito) por parte de la DTA-IBMETRO a las actividades  desarrolladas.</li>
      
    <li>En caso que, hasta un  máximo de 1 mes de transcurrida la apertura del trámite, el OEC al que  represento no presente la solicitud formal de acreditación, aceptare que la DTA-IBMETRO  proceda al cierre del trámite.</li>
      </ol>
	</td>
  </tr>
  <tr>
    <td width="42%" style=" background-color: #E6E6E6;
     background-repeat: repeat-x;"><strong>FECHA DE CREACIÓN DEL FORMULARIO</strong></td>
    <td width="58%">&nbsp;<?= $models['fecha_actualizacion_oec'];?></td>
  </tr>
</table>
<br />
<div align="center"><strong>¿DÓNDE SE PUEDE OBTENER MAYOR INFORMACIÓN?</strong></div>
<div>Si requiere información o asistencia para  llenar este formulario, dirigir sus consultas a:</div>
<p >
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dirección Técnica de  Acreditación </strong><br />
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instituto Boliviano de  Metrología</strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Avenida Camacho 1488 – Edificio anexo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Paz – BOLIVIA<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teléfono/Fax     +591 2 237-2046<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail:               acreditacion@ibmetro.gob.bo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;URL:                  www.ibmetro.gob.bo/acreditacion</p>
<p>&nbsp;</p>
