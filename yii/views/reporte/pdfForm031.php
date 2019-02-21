<div align="center"><strong>CÓDIGO DE LA EVALUACIÓN</strong> </div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TRÁMITE</strong></p></td>
    <td width="162" valign="top"><p>&nbsp;&nbsp;<?= $pet->fkIdCodigoPeticion->codigo_peticion ?> </p></td>
    <td width="162" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>EVALUACIÓN</strong> </p></td>
    <td width="157" valign="top"><p>&nbsp;&nbsp;<?= $eval->codigo_evaluacion; ?> </p></td>
  </tr>
</table>
<br>
<div>
Por la presente, <strong><?= $desEval->por_dta_nombre_designacion_evaluador; ?></strong> con código de  evaluador <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> , de acuerdo a los  procedimientos y reglamentos vigentes en la Dirección Técnica  de Acreditación del Instituto Boliviano de Metrología, ha sido designado como <strong> </strong> , para integrar el  equipo que realizará la <a name="Listadesplegable5"></a><strong> </strong>  a llevarse a cabo en fecha <strong><?= $desEval->por_dta_fecha_designacion_evaluador; ?></strong> en el siguiente  organismo de evaluación de la conformidad (OEC):
</div>
<br>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->nombre_oec; ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TIPO DE ORGANISMO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdOecTipo->nombre_oec_tipo; ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->direccion_oec?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CIUDAD</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->ciudad_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->departamento_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>PAÍS</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->fkIdPais->nombre_pais ; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>TELÉFONO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $oec->telefono1_oec ."<br>&nbsp;&nbsp;".$oec->telefono2_oec; ?> </p></td>
  </tr>
</table>
<div>
  <p>El evaluador/experto, independientemente del tipo de evaluación para la  que ha sido designado, debe contar con la siguiente documentación en su versión  vigente:</p>
  <ul>
    <li>Norma de  referencia (p.e. ISO/IEC 17025. ISO/IEC 65, 17021, 17020, documentos DTA-CRI  aplicables);</li>
    <li>DTA-PRO-001:  Procedimiento de acreditación de organismo de evaluación de la conformidad;</li>
    <li>DTA-PRO-004:  Procedimiento de  evaluación in situ;</li>
    <li>DTA-PRO-039:  Procedimiento de  revisión de la  documentación y registros;</li>
    <li>DTA-FOR-011:  Informe de ejecución de evaluaciones de acreditación;</li>
    <li>Informes  previos de evaluación y seguimiento del organismo (si corresponde).</li>
  </ul>
</div>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="237" rowspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>POR LA DIRECCIÓN TÉCNICA     DE ACREDITACIÓN DE IBMETRO</strong> </p></td>
    <td width="405" colspan="2"><p>Nombre: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ing. Elizabeth Choque  </p></td>
  </tr>
  <tr>
    <td width="273"><p>Firma: </p></td>
    <td width="132"><p>Fecha: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?= $desEval->por_dta_fecha_designacion_evaluador; ?> </p></td>
  </tr>
</table>
<div>
  <p>Por la   presente <strong>declaro</strong> que, ni mi empresa ni yo hemos asesorado ni colaborado con el organismo bajo evaluación, en ningún aspecto que  pudiera condicionar mi juicio y que no tengo vinculo que pudiera comprometer mi  imparcialidad e independencia.</p>
  <p>Asimismo, me <strong>comprometo</strong> a:</p>
  <ul>
    <li>Realizar  la actividad a que se refiere la presente designación de acuerdo a los  reglamentos, procedimientos y criterios de la DTA;</li>
    <li>Respetar  la confidencialidad no utilizando la información y conocimientos adquiridos  durante la actividad fuera del marco de la misma;</li>
    <li>No hacer  uso indebido de la documentación entregada para esta evaluación, en especial no  realizar copias de la misma ni distribuir a personas u organizaciones ajenas;</li>
    <li>Devolver  la documentación original y destruir  las  copias recibidas al finalizar el trabajo;</li>
    <li>Presentar  el informe de la evaluación  en la  reunión de cierre de la evaluación;</li>
    <li>No  ofertar, ni mi empresa ni yo, actividades de asesoría para el organismo en un  plazo inferior de <strong>UN</strong> (1) año desde  la realización de la evaluación.</li>
  </ul>
</div>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="246" rowspan="2" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p><strong>CONFORMIDAD DEL    EVALUADOR/EXPERTO/OBSERVADOR</strong> </p></td>
    <td width="397" colspan="2"><p>Nombre: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?= $desEval->por_dta_nombre_designacion_evaluador; ?></p></td>
  </tr>
  <tr>
    <td width="265"><p>Firma: </p></td>
    <td width="132"><p>Fecha: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
</table>
<div>
  <p><strong>Notas:   </strong>Si el evaluador o  experto designado no está de acuerdo con la designación, o presenta problemas  de       disponibilidad con las fechas  programadas, favor comunicarse con la   DTA.<br>
    Si al evaluador o  experto se le presenta algún inconveniente, o no pueda llegar a una conclusión  sobre un               hallazgo, el  evaluador o experto debe comunicarse con la DTA.</p>
</div>
