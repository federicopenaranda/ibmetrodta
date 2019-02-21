<div id="container" style="border-style:groove; border-width:2px; width: 100%; height: 100%;position:fixed;top:0">
<div style="background-color: #A53030;color:#FFF;text-align:center;font-size:12pt">
M i n i s t e r i o&nbsp;&nbsp;d e&nbsp;&nbsp;D e s a r r o l l o&nbsp;&nbsp;P r o d u c t i v o&nbsp;&nbsp;y&nbsp;&nbsp;E c o n o m í a&nbsp;&nbsp;P l u r a l
</div>
<br />
<table width="770" height="167" align="center">
  <tr>
    <td width="160" style="font-size:6pt;text-align:center" valign="top"><img src="images/iaac.jpg" align="center" width="120" height="50"><br />
      Miembro Asociación de la<br />
      Cooperación<br />
      InterAmeriacana de<br />
      Acreditación - IAAC</td>
    <td width="293" style="text-align:right"><img src="images/m.jpg" width="140" height="140"></td>
    <td width="301" align="center" valign="top" style="font-size:14pt;letter-spacing:0px;"><strong>CODIGO DE ACREDITACIÓN<br>DTA-CET-<?= $correlativo;?><br />
      ORIGINAL</strong></td>
  </tr>
</table>


<h1><?= $oec->fkIdOecTipo->codigo_oec_tipo; ?></h1>


<div align="center">
<br><br>
<strong style="font-size:22pt">Direccion Ténica de Acreditación </strong><br />
<strong style="font-size:18pt">Instituto Boliviano de Metrología</strong>
</div>
<br>
<table width="364" align="center">
  <tr>
    <!-- <td><img src="http://192.168.146.128/ibmetrodta/yii/web/images/img222.php" width="150" height="150"></td> -->
    <!-- <td></td> -->
    <td><img src="images/logo.jpg" width="130" height="130"/><br /><strong style="letter-spacing:1px;">ACREDITACION</strong></td>
  </tr>
</table>
<br>
<div align="center" style="font-size:28pt;letter-spacing:1px;">
  <strong>Acreditación</strong>
</div>
<div style="position:absolute; top:550px;font-size:12pt">
  La Dirección Técnica de Acreditacion del Instituto Boliviano de Metrología, en el marco de las competencias otorgadas mediante D.S. N° 2843 del 14 de julio de 2005, otorga al:<br />
    <strong> <?= $oec->nombre_oec; ?> </strong><br>
    <?= $oec->departamento_oec; ?>-Bolivia
</div>
<p>&nbsp;</p>
<p><br>
  <br>
</p>
<div style="position:absolute:top:50px;" align="right">Acreditación inicial:<?= $fechaIni; ?>&nbsp;&nbsp;&nbsp;<br>
  Validez máxima:<?= $fechaFin; ?>&nbsp;&nbsp;&nbsp;
</div>
</div>