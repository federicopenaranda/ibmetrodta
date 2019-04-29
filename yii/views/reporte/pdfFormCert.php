<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            .header_certificado {
                background-color: red;
                color:#FFF;
                text-align:center;
                font-size:14pt;
                font-weight: bold;
                letter-spacing: 2px;
            }
            
            .container {
                border-style:groove;
                border-width:2px;
                width: 100%;
                height: 100%;
                position:fixed;
                top:0;
            }
            
            .titulo_certificado {
                font-size:22pt;
                font-weight: bold;
                text-align: center
            }

            .titulo2_certificado {
                font-size:18pt;
                text-align: center
            }
            
            .fecha_certificado {
                margin-top: 80px; 
                text-align: right;
            }
            
            .texto_central {
                font-size:12pt;
                margin-left:15px;
                margin-right:15px;
            }

            .texto_central2 {
                font-size:15pt;
                text-align: center;
                margin-top: 10px;
                padding-bottom: 15px;
            }
            
            #wrapper222 {
                width: 780px;
                margin: 0 auto;
                margin-top: 150px;
           }
           #leftcolumn, #rightcolumn {
               float: left;
               min-height: 450px;
               font-size: 11px;
           }
           #leftcolumn {
                width: 280px;
                text-align: center;
                margin-left: 32px;
           }
           #rightcolumn {
                width: 280px;
                text-align: center;
                margin-left: 32px;
           }

        </style>
    </head>
    <body>

        <div id="container" class="container">

            <div class="header_certificado">
                Ministerio de Desarrollo Productivo y Economía Plural
            </div>
            <br />
            
            <table width="770" height="167" align="center">
                <tr>
                    <td width="160" style="font-size:6pt;text-align:center" valign="top">
                        <img src="images/iaac.jpg" align="center" width="120" height="50"><br />
                        Miembro Asociación de la<br />
                        Cooperación<br />
                        InterAmeriacana de<br />
                        Acreditación - IAAC</td>
                    <td width="293" style="text-align:right">
                        <img src="images/m.jpg" width="140" height="140">
                    </td>
                    <td width="301" align="center" valign="top" style="font-size:14pt;letter-spacing:0px;">
                        <strong>CÓDIGO DE ACREDITACIÓN<br>DTA-CET-<?= $correlativo; ?><br /> ORIGINAL</strong>
                    </td>
                </tr>
            </table>

            <div align="center" style="margin-top: 30px">
                <div class="titulo_certificado">Dirección Técnica de Acreditación </div>
                <div class="titulo2_certificado">Instituto Boliviano de Metrología</div>
            </div>
            
            <br>
            <table width="364" align="center">
                <tr>
                    <td><img src="http://sis.ibmetro.gob.bo:500/ibmetrodta/yii/web/images/img2.php?correlativo=<?= $correlativo; ?>&tipo=<?= $oec->fkIdOecTipo->codigo_oec_tipo ?>" width="150" height="150"></td>
                    <td><img src="images/logo.jpg" width="130" height="130"/><br /><strong style="letter-spacing:1px;">ACREDITACION</strong></td>
                </tr>
            </table>
            
            <br>
            <div align="center" style="font-size:28pt;letter-spacing:1px;">
                <strong>Acreditación</strong>
            </div>

            <div class="texto_central">
                La <strong>Dirección Técnica de Acreditación</strong> del <strong>Instituto Boliviano de Metrología</strong>, en el marco de las 
                competencias otorgadas mediante D.S. N° 28243 del 14 de julio de 2005, otorga al:
            </div>

            <div class="texto_central2">
                <strong>Organismo de Certificación de Producto de <?= $oec->nombre_oec; ?> </strong><br>
                <?= $oec->departamento_oec; ?>-Bolivia
            </div>

            <div class="texto_central">
                la Acreditación como <strong>ORGANISMO DE CERTIFICACIÓN DE PRODUCTO</strong> de acuerdo a la Norma <strong>NB-ISO-IEC 17065:2012</strong> para realizar 
                <?= $certificado->texto1_certificado; ?>, conforme se detalla en el alcance de acreditación descrito en el Anexo al presente certificado y que constituye parte integral del mismo.
            </div>
            
            <div class="fecha_certificado">
                <strong>Acreditación inicial: <?= $fechaIni; ?>&nbsp;&nbsp;&nbsp;<br>
                Validez máxima: <?= $fechaFin; ?>&nbsp;&nbsp;&nbsp;</strong>
            </div>
            
            
            
            <div id="wrapper222">
                <div id="leftcolumn">
                            Ing. Elizabeth Choque Mamani<br>
                            <strong>Directora de Acreditación<br>
                            INSTITUTO BOLIVIANO DE METROLOGIA</strong>
                </div>
                <div id="rightcolumn">
                            Ing. Juan Carlos Castillo Villarroel<br>
                            <strong>Director General Ejecutivo<br>
                            INSTITUTO BOLIVIANO DE METROLOGIA</strong>
                </div>
            </div>


        </div>





    </body>
</html>