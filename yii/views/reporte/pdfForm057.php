<div align="center"><strong>INSTRUCCIONES</strong></div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="643" valign="top" align="justify">
      1. Llenar un ejemplar de este formulario para cada certificaci&oacute;n incluida en el alcance    de acreditaci&oacute;n (si se trata de una solicitud inicial o reacreditaci&oacute;n) o    para cada certificaci&oacute;n adicional (si se trata de una solicitud de extensi&oacute;n    del alcance).<br />
      2. Llenar un formulario por producto (para organismos de certificaci&oacute;n de producto) o    por c&oacute;digo NACE (para organismos de certificaci&oacute;n de sistemas de gesti&oacute;n)
    </td>
  </tr>
</table>
<br />
<div align="center"><strong>C&Oacute;DIGO DE  TR&Aacute;MITE</strong></div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TR&Aacute;MITE</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $codPet['codigo_peticion'];?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACI&Oacute;N  SOBRE LA SOLICITUD</strong> </div>

<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>OBJETIVO</strong></p></td>
    <td width="378"><p>&nbsp;&nbsp;<?= $models['objetivo_detalle_certificacion'];?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACI&Oacute;N  SOBRE LA CERTIFICACION</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE CERTIFICACI&Oacute;N</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['tipo_certificacion_detalle_certificacion'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DOCUMENTO NORMATIVO CONTRA EL QUE SE    EXTIENDE LA CERTIFICACION</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['documento_normativo_detalle_certificacion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROCEDIMIENTO DE CERTIFICACION (REFERENCIA    AL DOCUMENTO DEL SISTEMA DE GESTI&Oacute;N)</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['procedimiento_certificacion_detalle_certificacion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PRODUCTO O PROCESO A CERTIFICAR</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['producto_certificar_detalle_certificacion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>C&Oacute;DIGO NACE</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['codigo_nace_detalle_certificacion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>AUDITORES CALIFICADOS</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['auditores_calificados_detalle_certificacion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EXPERTOS TECNICOS</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['expertos_tecnicos_detalle_certificacion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>OBSERVACIONES</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['observaciones_detalle_certificacion'];?> </p></td>
  </tr>
</table>
<br />
<div align="center"><strong>PARA  ORGANISMOS DE CERTIFICACION DE PRODUCTO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>ENSAYOS REALIZADOS EN EL PRODUCTO PARA    DETERMINAR LA CONFORMIDAD</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['ensayos_en_produccto_detalle_certificacion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LABORATORIOS QUE REALIZAN LOS ENSAYOS</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['laboratorios_ensayos_detalle_certificacion'];?> </p></td>
  </tr>
</table>
<br />
<div align="center"><strong>&iquest;D&Oacute;NDE SE PUEDE OBTENER MAYOR INFORMACI&Oacute;N?</strong></div>
<div>
  Si requiere informaci&oacute;n o asistencia para  llenar este formulario, dirigir sus consultas a:
  <p><strong>Direcci&oacute;n T&eacute;cnica de  Acreditaci&oacute;n </strong><br />
      <strong>Instituto Boliviano de  Metrolog&iacute;a</strong><br />
    Avenida Camacho 1488 &ndash; Edificio anexo<br />
    La Paz &ndash; BOLIVIA<br />
    Tel&eacute;fono/Fax&nbsp;&nbsp;&nbsp;&nbsp; +591 2 237-2046<br />
    E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; acreditacion@ibmetro.gob.bo<br />
    URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www.ibmetro.gob.bo/acreditacion </p>
</div>
