<div align="center"><strong>INFORMACION  DEL PROCESO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="113" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TR&Aacute;MITE</strong></p></td>
    <td width="529" valign="top"><p>&nbsp;&nbsp;<?= $codPet['codigo_peticion']; ?></p></td>
  </tr>
  <tr>
    <td width="113" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>OBJETIVO</strong></p></td>
    <td width="529"><p>&nbsp;&nbsp;<?= $models['objetivo_detalle_calibracion'];?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>CAMPOS DE CALIBRACI&Oacute;N (MARCAR SOLO UNO)</strong> </div>

<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="643" colspan="2"><p>Tipos de calibraciones que realiza el laboratorio    (Evaluaci&oacute;n en base a la Norma NB-ISO-IEC 17025)</p></td>
  </tr>
  <tr>
    <td width="321" valign="top"><p><em>&nbsp;</em><em>Dimensional</em><br />
        <em>&nbsp;Masa</em><br />
        <em>&nbsp;Fuerza y/o dureza</em><br />
        <em>&nbsp;Presi&oacute;n</em><br />
        <em>&nbsp;Volumetr&iacute;a y/o masa espec&iacute;fica</em><br />
        <em>&nbsp;Vac&iacute;o</em><br />
        <em>&nbsp;Ac&uacute;stica y/o vibraciones</em></p>
      
    </td>
    <td width="321" valign="top"><p><em>&nbsp;Viscosidad</em><br />
            <em>&nbsp;Electricidad</em><br />
            <em>&nbsp;Temperatura y/o humedad</em><br />
            <em>&nbsp;Tiempo y/o frecuencia</em><br />
            <em>&nbsp;Radiofrecuencia</em><br />
            <em>&nbsp;&Oacute;ptica</em><br />
            <em>&nbsp;Radiaciones ionizantes</em></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACI&Oacute;N  SOBRE LA CALIBRACI&Oacute;N</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DESCRIPCI&Oacute;N</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['descripcion_detalle_calibracion'];?> </p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NORMA O PROCEDIMIENTO</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['norma_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EQUIPO O PATR&Oacute;N CALIBRADO</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['equipo_calibrado_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE SERVICIO</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['tipo_servicio_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PERSONAL AUTORIZADO</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['personal_autorizado_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>RANGO DE CALIBRACI&Oacute;N</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['rango_calibracion_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>MEJOR CAPACIDAD DE MEDICI&Oacute;N</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['mejor_capacidad_medicion_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE EQUIPOS UTILIZADOS</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['equipos_utilizados_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td colspan="2" valign="top" style="font-size:10pt"><p>Debe llenarse un ejemplar de este    formulario para cada ensayo incluido en el alcance de acreditaci&oacute;n (si se    trata de una solicitud inicial o reacreditaci&oacute;n) o para cada ensayo adicional    al alcance (si se trata de una solicitud de extensi&oacute;n del alcance).</p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACI&Oacute;N  ADICIONAL</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROCEDIMIENTO PARA DE ESTIMACI&Oacute;N DE LA    INCERTIDUMBRE</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_estimacion_incertidumbre_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE PATRONES DE REFERENCIA PARA LA    CALIBRACI&Oacute;N</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_patrones_referencia_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROCEDIMIENTO PARA LA MANIPULACI&Oacute;N DE LOS    PATRONES DE REFERENCIA</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_manipulacion_patrones_referencia_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FECHA DE LA &Uacute;LTIMA CALIBRACI&Oacute;N DE LOS    PATRONES</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_fecha_ultima_calibracion_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>ORGANISMO QUE REALIZ&Oacute; LA CALIBRACI&Oacute;N</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_organismo_realizo_calibracion_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CERTIFICADO DE CALIBRACI&Oacute;N</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_certificado_calibracion_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>FECHA DE LA PR&Oacute;XIMA CALIBRACI&Oacute;N</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_fecha_proxima_calibracion_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DECLARACI&Oacute;N DE LA TRAZABILIDAD DE ACUERDO    A DTA-CRI-012</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_declaracion_trazabilidad_detalle_calibracion'];?></p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CRITERIO DE ACEPTACI&Oacute;N DEL CERTIFICADO DE    CALIBRACI&Oacute;N DE ACUERDO A DTA-CRI-012</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_criterio_aceptacion_detalle_calibracion'];?> </p></td>
  </tr>
  <tr>
    <td width="311" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PARTICIPACI&Oacute;N EN COMPARACIONES    INTERLABORATORIOS</strong></p></td>
    <td width="417" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_comparaciones_interlaboratorios_detalle_calibracion'];?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>&iquest;D&Oacute;NDE SE PUEDE OBTENER MAYOR INFORMACI&Oacute;N?</strong></div>
<div>
  Si requiere informaci&oacute;n o asistencia para  llenar este formulario, dirigir sus consultas a:
  <p><strong>Instituto Boliviano de  Metrolog&iacute;a</strong><br />
      <strong>Direcci&oacute;n T&eacute;cnica de  Acreditaci&oacute;n </strong><br />
    Avenida Camacho 1488 &ndash; Edificio anexo<br />
    La Paz &ndash; BOLIVIA<br />
    Tel&eacute;fono/Fax&nbsp;&nbsp;&nbsp;&nbsp; +591 2 237-2046<br />
    E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; acreditacion@ibmetro.gob.bo<br />
    URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www.ibmetro.gob.bo/acreditacion </p>
</div>
