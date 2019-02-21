<?php

	header('Content-type: image/jpeg');

	if ( $_GET['tipo'] == 'laboratorio de ensayo' ||
		$_GET['tipo'] == 'laboratorio de calibracion' )
	{
		$rImg = @imagecreatefromjpeg( "logo_ibmetro_lab.jpg" );
	}
	else
	{
		$rImg = @imagecreatefromjpeg( "logo_ibmetro_insp.jpg" );
	}

	
	$font = 'arial.ttf';

	$text = urldecode($_GET['correlativo']);
	$arr = str_split($text);

	$angulo = array(45, 55, 61, 68);
	$x = array(158, 168, 174, 178);
	$y = array(155, 144, 134, 123);

	$color = imagecolorallocate($rImg, 2, 93, 65);

	for ($i=0; $i<=sizeof($arr); $i++)
	{
		imagettftext( $rImg, 13.2, $angulo[$i], $x[$i], $y[$i], $color, './arial.ttf', $arr[$i]);
	}

//	imagettftext( $rImg, 13.2, 45, 158, 155, $color, './arial.ttf', $text);
//	imagettftext( $rImg, 13.2, 52, 166, 146, $color, './arial.ttf', '5');
//	imagettftext( $rImg, 13.2, 60, 172, 135, $color, './arial.ttf', '4');

	imagejpeg($rImg);
	imagedestroy($rImg);

?>