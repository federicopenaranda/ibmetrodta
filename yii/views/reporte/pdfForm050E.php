<p align="center"><strong>C&Oacute;DIGO DE  TR&Aacute;MITE Y ACREDITACI&Oacute;N</strong></p>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;">
        <strong>TR&Aacute;MITE</strong> </td>
    <td width="162" valign="top"><p> <?= $pet->fkIdCodigoPeticion->codigo_peticion ?> </p></td>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>ACREDITACI&Oacute;N</strong></p></td>
    <td width="157" valign="top"><p> <?= $pet->fkIdProceso->nombre_proceso ?> </p></td>
  </tr>
</table>
<br>
<div align="center"><strong>INFORMACI&Oacute;N  DEL ORGANISMO DE EVALUACI&Ograve;N DE LA CONFORMIDAD</strong> </div>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="255" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;">
        <strong>NOMBRE DEL ORGANISMO</strong> </td>
    <td width="387" valign="top"><p><?= $oec->nombre_oec; ?></p></td>
  </tr>
</table>
<br>
<div align="center"><strong>CONCLUSIONES DEL PROCESO</strong></div>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="255" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;">
      Observaciones    del Responsable de Acreditaci&oacute;n de Laboratorios/Organismos </td>
    <td width="387" valign="top"><p>Respecto    del OEC</p>
	&nbsp; <?= $superEval->observaciones_ra_oec_informe_acred; ?>
        <p>Respecto    del Equipo evaluador</p>
      <p align="right">&nbsp; <?= $superEval->observaciones_ra_ee_informe_acred; ?> </td></p>
  </tr>
  <tr>
    <td width="255" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Cumplimiento    de las etapas</p></td>
    <td width="387" valign="top"><p>&nbsp;&nbsp; <?= $superEval->cumplimiento_etapas_informe_acred; ?></p></td>
  </tr>
  <tr>
    <td width="255" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Recomendaci&oacute;n    del Responsable /Firma/Fecha</p></td>
    <td width="387" valign="top"><p>&nbsp;&nbsp; <?= $superEval->recomendacion_ra_informe_acred; ?> <br />
				&nbsp;&nbsp; <?= $superEval->recomendacion_fecha_informe_acred; ?></p></td>
  </tr>
  <tr>
    <td width="255" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p>Toma de    decisi&oacute;n de la DA/Firma/Fecha</p></td>
    <td width="387" valign="top"><p>&nbsp;&nbsp; <?= $superEval->toma_decision_da_informe_acred; ?> <br />
				&nbsp;&nbsp; <?= $superEval->toma_decision_da_fecha_informe_acred; ?></p>
        <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p></td>
  </tr>
</table>
