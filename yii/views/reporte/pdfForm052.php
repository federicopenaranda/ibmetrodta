<div align="center"><strong>INFORMACIÓN DEL PROCESO</strong></div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="378" valign="top"><p><?= $codPet['codigo_peticion'];?></p></td>
  </tr>
</table>
<br />
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="265" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>OBJETIVO</strong></p></td>
    <td width="378"><p><strong> </strong><?= $models['objetivo_info_ensayo']; ?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACIÓN  DEL ENSAYO</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE DEL ENSAYO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['nombre_info_ensayo']; ?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NORMA O PROCEDIMIENTO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['norma_info_ensayo'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>MATRIZ O PRODUCTO ENSAYADO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['matriz_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE SERVICIO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['tipo_servicio_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CATEGORÍA (SEGÚN DTA-CRI-011)</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['categoria_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PERSONAL AUTORIZADO</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['pesonal_autorizado_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>RANGO DE MEDICIÓN</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['rango_medicion_info_ensayo'];?> </p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>INCERTIDUMBRE DE MEDICIÓN</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['incertidumbre_medicion_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="265" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>LISTA DE EQUIPOS UTILIZADOS</strong></p></td>
    <td width="378" valign="top"><p>&nbsp;&nbsp;<?= $models['lista_equipos_utilizados_info_ensayo'];?> </p></td>
  </tr>
  <tr>
    <td width="643" colspan="2" valign="top" style="font-size:10pt"><p>Debe llenarse un ejemplar de este    formulario para cada ensayo incluido en el alcance de acreditación (si se    trata de una solicitud inicial o reacreditación) o para cada ensayo adicional    al alcance (si se trata de una solicitud de extensión del alcance).</p></td>
  </tr>
</table>
<br />
<div align="center"><strong>INFORMACIÓN  ADICIONAL</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="387" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROCEDIMIENTO PARA EL CÁLCULO DE LA    INCERTIDUMBRE (PARA ENSAYO TIPO III Y IV)</strong></p></td>
    <td width="255" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_calculo_incertidumbre_info_ensayo'];?> </p></td>
  </tr>
  <tr>
    <td width="387" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROCEDIMIENTO PARA LA CONFIRMACIÓN DE LA APLICACIÓN EN EL    LABORATORIO (PARA ENSAYOS DE TIPO II O III, VER 5.4.2 DE NB-ISO-IEC 17025:2005)</strong></p></td>
    <td width="255" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_confirmacion_aplicacion_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="387" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PROCEDIMIENTO DE VALIDACIÓN (PARA ENSAYOS    DE TIPO IV)</strong></p></td>
    <td width="255" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_validacion_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="387" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DESCRIPCIÓN DE PATRONES DE REFERENCIA </strong></p></td>
    <td width="255" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_patrones_referencia_info_ensayo'];?> </p></td>
  </tr>
  <tr>
    <td width="387" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DESCRIPCIÓN DE MATERIAL DE REFERENCIA    CERTIFICADO</strong></p></td>
    <td width="255" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_material_referencia_info_ensayo'];?></p></td>
  </tr>
  <tr>
    <td width="387" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PARTICIPACIÓN EN COMPARACIONES    INTERLABORATORIOS</strong></p></td>
    <td width="255" valign="top"><p>&nbsp;&nbsp;<?= $models['ad_comparaciones_interlaboratorios_info_ensayo'];?></p></td>
  </tr>
</table>
<br />
<div align="center"><strong>¿DÓNDE SE PUEDE OBTENER MAYOR INFORMACIÓN?</strong></div>
<div>
  Si requiere información o asistencia para  llenar este formulario, dirigir sus consultas a:
  <p><strong>Dirección Técnica de  Acreditación </strong><br />
      <strong>Instituto Boliviano de  Metrología</strong><br />
    Avenida Camacho 1488 – Edificio anexo<br />
    La Paz – BOLIVIA<br />
    Teléfono/Fax     +591 2 237-2046<br />
    E-mail:               acreditacion@ibmetro.gob.bo<br />
    URL:                  www.ibmetro.gob.bo/acreditacion</p>
</div>
