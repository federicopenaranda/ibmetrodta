<div align="center"><strong>C&Oacute;DIGO DE  TR&Aacute;MITE</strong> </div>

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
    <td width="378"><p>&nbsp;&nbsp;<?= $models['objetivo_detalle_inspeccion'];?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACI&Oacute;N  SOBRE LA INSPECCI&Oacute;N</strong></div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE    DE LA INSPECCI&Oacute;N</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['nombre_detalle_inspeccion'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['tipo_detalle_inspeccion'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>MATRIZ,    PRODUCTO, EQUIPO O INSTALACION INSPECCIONADA</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['matriz_inspeccionada_detalle_inspeccion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DOCUMENTO    NORMATIVO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['documento_normativo_detalle_inspeccion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROCEDIMIENTO    DE INSPECCION</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['procedimiento_inspeccion_detalle_inspeccion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LA    INSPECCION SE REALIZA:</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['inspeccion_se_realiza_detalle_inspeccion'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>SI    APLICA, DIRECCION DE LAS DELEGACIONES DONDE SE REALIZA LA INSPECCION</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['direccion_delegaciones_detalle_inspeccion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE    INSPECTOR(ES) AUTORIZADO(S), INDICANDO SU LUGAR DE TRABAJO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['inspectores_autorizados_detalle_inspeccion'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE    EQUIPOS UTILIZADOS EN LA INSPECCION</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['equipos_utilizados_inspeccion_detalle_inspeccion'];?> </p></td>
  </tr>
  <tr>
    <td width="643" colspan="2" valign="top" style="font-size:10pt"><p>Debe llenarse un ejemplar de este    formulario para cada inspecci&oacute;n incluida en el alcance de acreditaci&oacute;n (si se    trata de una solicitud inicial o reacreditaci&oacute;n) o para cada inspecci&oacute;n    adicional al alcance (si se trata de una solicitud de extensi&oacute;n del alcance).<br />
      Adicionalmente, debe adjuntarse un    ejemplar del formulario DTA-FOR-053 donde se detallen las caracter&iacute;sticas de    cada equipo listado en este formulario.</p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACI&Oacute;N  ADICIONAL</strong></div>


<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="293" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE    PATRONES DE REFERENCIA</strong></p></td>
    <td width="350" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_patrones_referencia_detalle_inspeccion'];?></p></td>
  </tr>
  <tr>
    <td width="293" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE    MATERIAL DE REFERENCIA CERTIFICADO (SI APLICA)</strong></p></td>
    <td width="350" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_material_referencia_cert_detalle_inspeccion'];?> </p></td>
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
    URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www.ibmetro.gob.bo/acreditacion</p>
</div>
