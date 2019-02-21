<div align="center" style="font-size:10pt"><strong>INFORMACIÓN SOBRE EL EVALUADOR/EXPERTO</strong></div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top"><p><strong>CÓDIGO</strong> </p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="228" valign="top"><p><strong>NOMBRES Y APELLIDOS</strong> </p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></td>
  </tr>
  <tr>
    <td width="228" valign="top"><p><strong>DESIGNACIÓN</strong></p></td>
    <td width="415" valign="top"><p><strong> </strong> </p></td>
  </tr>
</table>
<br>
<div align="center" style="font-size:10pt"><strong>INFORMACIÓN SOBRE LA EVALUACIÓN</strong></div>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top"><p><strong>TRÁMITE</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $pet->fkIdCodigoPeticion->codigo_peticion ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top"><p><strong>EVALUACIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $eval->codigo_evaluacion; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top"><p><strong>CRITERIO    DE EVALUACIÓN</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $superEval->criterio_evaluacion_supervision_evaluador?> </p></td>
  </tr>
</table>
<br>
<div align="center" style="font-size:10pt"><strong>INFORMACIÓN SOBRE EL  ORGANISMO EVALUADO</strong></div>

<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>NOMBRE DEL ORGANISMO</strong></p></td>
    <td width="415" valign="top" style="font-size:10pt"><p>&nbsp;&nbsp;<?= $oec->nombre_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>TIPO DE ORGANISMO</strong></p></td>
    <td width="415" valign="top" style="font-size:10pt"><p>&nbsp;&nbsp;<?= $oec->fkIdOecTipo->nombre_oec_tipo; ?></p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>DIRECCIÓN</strong></p></td>
    <td width="415" valign="top" style="font-size:10pt"><p>&nbsp;&nbsp;<?= $oec->direccion_oec?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>CIUDAD</strong></p></td>
    <td width="415" valign="top" style="font-size:10pt"><p>&nbsp;&nbsp;<?= $oec->ciudad_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>DEPARTAMENTO</strong></p></td>
    <td width="415" valign="top" style="font-size:10pt"><p>&nbsp;&nbsp;<?= $oec->departamento_oec; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>PAÍS</strong></p></td>
    <td width="415" valign="top" style="font-size:10pt"><p>&nbsp;&nbsp;<?= $oec->fkIdPais->nombre_pais ; ?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>TELÉFONO</strong></p></td>
    <td width="415" valign="top" style="font-size:10pt"><p>&nbsp;&nbsp;<?= $oec->telefono1_oec ."<br>&nbsp;&nbsp;".$oec->telefono2_oec; ?> </p></td>
  </tr>
</table>
<br>
<div align="center" style="font-size:10pt"><strong>EVALUACIÓN</strong></div>

<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="492" style="font-size:8pt"><p><strong>MARCAR    CON UNA X EN LA CASILLA CORRESPONDIENTE</strong> </p></td>
    <td colspan="5" style="font-size:8pt"><p> Muy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Muy<br>malo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bueno</p></td>
  </tr>
  <tr>
    <td width="492" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:8pt"><ol>
      <li><strong>ASPECTOS ADMINISTRATIVOS</strong><strong> </strong></li>
    </ol></td>
    <td width="31" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>1</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>2</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>3</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>4</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>5</strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>1.1 ¿Cómo evalúa el plan    de evaluación?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta1 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta1 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta1 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta1 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta1 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>1.2 ¿Cómo evalúa la    información previa recibida?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta2 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta2 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta2 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta2 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta2 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>1.3 ¿Cómo evalúa la secuencia    del proceso? (duración, cooperación, intercambio)</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta3 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta3 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta3 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta3 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta3 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:8pt"><ol>
      <li><strong>ASPECTOS DE CRITERIO Y EVALUACIÓN</strong></li>
    </ol></td>
    <td width="31" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>1</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>2</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>3</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>4</strong></p></td>
    <td width="30" style="background-color: #E6E6E6;background-repeat: repeat-x;"><p align="center"><strong>5</strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.1 ¿Cómo evalúa el    conocimiento técnico?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta4 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta4 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta4 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta4 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta4 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.2 ¿Cómo evalúa el conocimiento de la norma/guía  ISO/IEC y criterios de evaluación?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta5 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta5 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta5 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta5 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta5 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.3 ¿Cómo evalúa el    comportamiento del evaluador/experto con el personal evaluado?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta6 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta6 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta6 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta6 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta6 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.4 ¿Cómo evalúa la    capacidad de investigación de cada uno de los aspectos evaluados?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta7 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta7 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta7 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta7 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta7 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.5 ¿Cómo evalúa la    objetividad de la evaluación?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta8 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta8 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta8 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta8 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta8 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.6 ¿Cómo evalúa la comunicación  durante la evaluación con el evaluado?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta9 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta9 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta9 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta9 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta9 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.7 ¿Cómo evalúa el    intercambio de información con los demás miembros del equipo evaluador?</p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta10 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta10 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta10 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta10 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta10 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
  <tr>
    <td width="492" style="font-size:8pt"><p>2.8 ¿ Como evalúa el contenido del informe oral y/o    escrito presentado en la reunión de cierre </p></td>
    <td width="31"><p align="center"><strong> <?php echo $superEval->pregunta11 == 1 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta11 == 2 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta11 == 3 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta11 == 4 ? 'X' : '' ?> </strong></p></td>
    <td width="30"><p align="center"><strong> <?php echo $superEval->pregunta11 == 5 ? 'X' : '' ?> </strong></p></td>
  </tr>
</table>
<br>
<div align="center" style="font-size:10pt"><strong>INFORMACIÓN ADICIONAL</strong></div>

<table border="1" cellspacing="0" cellpadding="0" width="643">
  <tr>
    <td width="227" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>COMENTARIOS </strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $superEval->comentarios_supervision_evaluador?> </p>
        <p>&nbsp;</p></td>
  </tr>
  <tr>
    <td width="227" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>OBSERVACIONES</strong></p></td>
    <td width="416" valign="top"><p>&nbsp;&nbsp;<?= $superEval->observaciones_supervision_evaluador?> </p>
        <p><strong>&nbsp;</strong></p></td>
  </tr>
</table>
<br>
<div align="center" style="font-size:10pt"><strong>INFORMACIÓN SOBRE EL LLENADO DEL  FORMULARIO</strong></div>
<table border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>NOMBRES Y APELLIDOS</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $superEval->nombre_supervision_evaluador?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>CARGO</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $superEval->cargo_supervision_evaluador?> </p></td>
  </tr>
  <tr>
    <td width="228" valign="top" style="background-color: #E6E6E6;background-repeat: repeat-x;font-size:10pt"><p><strong>FECHA</strong></p></td>
    <td width="415" valign="top"><p>&nbsp;&nbsp;<?= $superEval->fecha_supervision_evaluador ?> </p></td>
  </tr>
</table>
