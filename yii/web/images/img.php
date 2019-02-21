<?php
function CargarJpeg($imagen)
{
    /* Intentar abrir */
    $im = @imagecreatefromjpeg($imagen);

    /* Ver si falló */
    if(!$im)
    {
        /* Crear una imagen en blanco */
        $im  = imagecreatetruecolor(150, 30);
        $fondo = imagecolorallocate($im, 255, 255, 255);
        $ct  = imagecolorallocate($im, 0, 0, 0);

        imagefilledrectangle($im, 0, 0, 150, 30, $fondo);

        /* Imprimir un mensaje de error */
        imagestring($im, 1, 5, 5, 'Error cargando ' . $imagen, $ct);
    }

    return $im;
}

header('Content-Type: image/jpeg');
$g = array(91 ,85 ,78 ,70 ,68 ,58 ,55 ,54 ,50 ,45 ,44 ,40 ,40 ,35 ,30 ,18 ,10 ,1  ,0  ,-5 ,-5 ,-10,-10,-20,-35,-50,-65,-65,-72,-80,-90,-100);
#echo sizeof($grado)."<br>";
$x = array(16 ,15 ,16 ,17 ,19 ,21 ,25 ,28 ,34 ,38 ,42 ,49 ,56 ,63 ,71 ,78 ,85 ,94 ,101,108,116,124,132,139,147,152,159,164,168,170,172,174);
#echo sizeof($x)."<br>";
$y = array(100,91 ,84 ,76 ,68 ,62 ,56 ,51 ,43 ,39 ,35 ,29 ,25 ,22 ,19 ,17 ,15 ,14 ,15 ,16 ,18 ,20 ,24 ,29 ,35 ,40 ,48,58,65,72,82,92);
        #   V  I   C   T   O   R        A   L   F   O   N   Z   O       Q   U   I   S   P   E       C   H   A   M  B
        #   L  A   B   O   R   A   T    O   R   I   O       D   E       E   N   S   A   Y   O       A   C   REDITADO
$texto= "Victor alfonzo quispe chambilla";
#$texto="Laboratorio de ensayo acreditado";
$img = CargarJpeg('logo_insignia.jpg');
$verde = imagecolorallocate($img,   0, 139,   139);
for ($i=0; $i < strlen($texto); $i++) {
    #if(substr($texto,$i,1)=="m")
     #   imagettftext($img, 10, $grado[$i],$x[$i]+1,$y[$i]+1, $verde, 'arial.ttf',substr($texto,$i,1));
    #else
        imagettftext($img, 10, $g[$i],$x[$i],$y[$i], $verde, 'arial.ttf',substr($texto,$i,1));
    #echo substr($texto,$i,1)."<br>";
}
$grad= array(45,50,55);
$xn = array(158,163,168);
$yn = array(152,146,140);
$num="053";
for ($i=0; $i < strlen($num); $i++) {
    imagettftext($img, 10, $grad[$i],$xn[$i],$yn[$i], $verde, 'arial.ttf',substr($num,$i,1));
    #echo substr($texto,$i,1)."<br>";
}
/*
imagettftext($img, 10, 92, 16, 100, $verde, 'arial.ttf', "L");
imagettftext($img, 10, 90, 16, 92, $verde, 'arial.ttf', "a");
imagettftext($img, 10, 80, 16, 84, $verde, 'arial.ttf', "b");
imagettftext($img, 10, 70, 17, 76, $verde, 'arial.ttf', "o");
imagettftext($img, 10, 68, 19, 68, $verde, 'arial.ttf', "r");
imagettftext($img, 10, 58, 20, 64, $verde, 'arial.ttf', "a");
imagettftext($img, 10, 55, 25, 56, $verde, 'arial.ttf', "t");
imagettftext($img, 10, 54, 28, 51, $verde, 'arial.ttf', "o");
imagettftext($img, 10, 53, 34, 43, $verde, 'arial.ttf', "r");
imagettftext($img, 10, 45, 38, 39, $verde, 'arial.ttf', "i");
imagettftext($img, 10, 44, 42, 35, $verde, 'arial.ttf', "o");
imagettftext($img, 10, 40, 49, 29, $verde, 'arial.ttf', "x");
imagettftext($img, 10, 40, 56, 25, $verde, 'arial.ttf', "d");
imagettftext($img, 10, 35, 63, 22, $verde, 'arial.ttf', "e");
imagettftext($img, 10, 30, 71, 19, $verde, 'arial.ttf', "x");
imagettftext($img, 10, 30, 78, 17, $verde, 'arial.ttf', "e");
imagettftext($img, 10, 15, 85, 15, $verde, 'arial.ttf', "n");
imagettftext($img, 10, 8, 93, 14, $verde, 'arial.ttf', "s");
imagettftext($img, 10, 5, 101, 15, $verde, 'arial.ttf', "a");
imagettftext($img, 10, -5, 108, 16, $verde, 'arial.ttf', "y");
imagettftext($img, 10, -5, 116, 18, $verde, 'arial.ttf', "o");
imagettftext($img, 10, -10, 124, 20, $verde, 'arial.ttf', "x");
imagettftext($img, 10, -10, 132, 24, $verde, 'arial.ttf', "a");
imagettftext($img, 10, -20, 139, 29, $verde, 'arial.ttf', "c");
imagettftext($img, 10, -35, 147, 35, $verde, 'arial.ttf', "r");
imagettftext($img, 10, -40, 151, 40, $verde, 'arial.ttf', "e");
imagettftext($img, 10, -55, 158, 48, $verde, 'arial.ttf', "d");
imagettftext($img, 10, -65, 164, 58, $verde, 'arial.ttf', "i");
imagettftext($img, 10, -72, 168, 65, $verde, 'arial.ttf', "t");
imagettftext($img, 10, -80, 170, 72, $verde, 'arial.ttf', "a");
imagettftext($img, 10, -90, 172, 82, $verde, 'arial.ttf', "d");
imagettftext($img, 10, -100, 174, 92, $verde, 'arial.ttf', "o");
*/ 
imagettftext($img, 10, 45, 158, 152, $verde, 'arial.ttf', "0");
imagettftext($img, 10, 50, 163, 146, $verde, 'arial.ttf', "5");
imagettftext($img, 10, 55, 168, 140, $verde, 'arial.ttf', "3");
#imagestring($img, 6, 8, 94, "L", $verde);
//equipopeticion
imagejpeg($img);
imagedestroy($img);
?>