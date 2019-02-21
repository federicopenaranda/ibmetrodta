<html>
<body>
<table width="100%" border="1" cellspacing="0" cellpadding="0" align="center">
  <tr height="50">
    <td rowspan="3" width="20%" style="vertical-align: middle; text-align:center">
      <img src="images/logo.jpg" alt="" width="61" height="62" align="middle"/> <br />
    
    <div style="font-size: 6pt;color:#04B4AE;">ACREDITACIÓN</div></td>
    <td height="44" colspan="2" align="center" style="vertical-align:middle;color:#999999" ><strong><?= $head['h1']; ?></strong><br />
    <div style="font-size: 9pt"><strong><?= $head['h2']; ?></div></td>
  </tr>
  <tr>
    <td width="48%" height = "5" rowspan="2" align="center" style="color:#999999"><strong><?= $head['h3']; ?></strong></td>
    <td width="32%" height="22" align="center" style="color:#999999"><strong><?= $head['h4']; ?></strong></td>
  </tr>
  <tr>
    <td align="center" style="color:#999999"><strong>Página <?= '{PAGENO}' ?> de <?= '{nbpg}'?> </strong>
    </td>
  </tr>
  <tr class="c3">
    <td height="17" align="center" style="font-size:9 pt;color:#999999">Versión <?= $head['h5']?> </td>
    <td colspan="2" align="center" style="font-size:9 pt;color:#999999">Vigente desde: <?= $head['h6']?></td>
  </tr>
</table>
</body>
</html>
