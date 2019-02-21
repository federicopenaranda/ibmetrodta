<?php require_once(__DIR__.'/../../Catequil.php'); ?>
<?php function generaString($colName,$colLab,$sw) {?>
						{
                            // Campo de Texto
                            text: '<?= $colLab; ?>',
                            dataIndex: '<?= $colName; ?>'
<?php if($sw == 1) {?>
                    	},
<?php } else { ?>
						}
<?php }?>
<?php }//end function?>
<?php function generaInt($colName,$colLab,$sw){?>
						{
                            // Campo Entero / Float
                            text: '<?= $colLab; ?>',
                            dataIndex: '<?= $colName; ?>'
<?php if($sw == 1) {?>
                    	},
<?php } else { ?>
						}
<?php }?>	
<?php }//end function ?>
<?php function generaDate($colName,$colLab,$sw){?>
						{
                            // Campo Fecha / Fecha y hora
                            text: '<?= $colLab; ?>',
                            dataIndex: '<?= $colName; ?>',
                            xtype: 'datecolumn', 
                            format: 'Y-m-d'
<?php if($sw == 1) {?>
                    	},
<?php } else { ?>
						}
<?php }?>
<?php }//end function ?>
<?php function generaText($colName,$colLab,$sw){?>
						{
                            // Campo tipo "TEXT" (MySQL)
                            text: '<?= $colLab; ?>',
                            dataIndex: '<?= $colName; ?>'
<?php if($sw == 1) {?>
						},
<?php } else { ?>
						}
<?php }?>
<?php }//end function ?>
<?php function generaSmallint($colName,$colLab,$sw){?>
						{
                            // Campo Booleano
                            text: '<?= $colLab; ?>',
                            dataIndex: '<?= $colName; ?>',
                            renderer: function (valor) {
                                if ( valor === 1 )
                                    return 'Si';
                                
                                if ( valor === 0 )
                                    return 'No';
                                
                                return '';
                            }
<?php if($sw == 1) {?>
                    	},
<?php } else { ?>
						}
<?php }?>
<?php }//end function ?>
<?php function generaFk($colName,$colLab,$ModRef,$sw) {
$objModR = getPath($ModRef);$listA= $objModR->atributes();$listAL=$objModR->attributeLabels();?>
						{
                            // Campo de llave foranea
                            text: '<?= substr($colLab,6); ?>',
                            dataIndex: '<?= $colName; ?>',
                            renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                                return record.get( '[NOMBRE DE CAMPO EN LA TABLA FORANEA QUE SE MOSTRARÁ]' ); // Debe estar en el modelo
                            }
                        },
<?php if($sw == 1) {?>
                    	},
<?php } else { ?>
						}
<?php }?>
<?php }//end function ?>


<?php function generaFormu($listCols,$model,$modPrin) {
$contComas = 1;$band=1;$i=0;
$listManyOne = $model->getListHasOne();
foreach($listCols as $column):
$listAtrib = $model->attributeLabels();
if ($column->isPrimaryKey === FALSE) {?>
<?php $sw = $contComas%3 == 0 || $contComas+1 == sizeof($listCols) ? 0 : 1 ?>
<?php if ($band==1){?>
				{
                  xtype: 'fieldcontainer',
                    items: [
<?php } ?>
<?php if ($column->type == "string") {?>
<?= generaString($column->name,$listAtrib[$column->name],$sw); ?>
<?php } ?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") === FALSE){ ?>
<?= generaInt($column->name,$listAtrib[$column->name],$sw); ?>
<?php } ?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
<?= generaDate($column->name,$listAtrib[$column->name],$sw); ?>
<?php } ?>
<?php if ($column->type == "text"){ ?>
<?= generaText($column->name,$listAtrib[$column->name],$sw); ?>
<?php } ?>
<?php if ($column->type == "smallint") {?>
<?= generaSmallint($column->name,$listAtrib[$column->name],$sw); ?>
<?php } ?>
<?php if (strpos($column->dbType,"set") !== FALSE){ ?>
<?= generaSet($column->name,$listAtrib[$column->name],$sw); ?>
<?php } ?>
<?php if ($column->type == "float"){ ?>
<?= generaFloat($column->name,$listAtrib[$column->name],$sw); ?>
<?php } ?>
<?php if (strpos($column->name,"fk_id_") !== FALSE){ ?>
<?= generaFk($column->name,$listAtrib[$column->name],$listManyOne[$i],$sw);$i++; ?>
<?php } ?>
<?php if ($contComas%3 == 0){ $band = 1;
if($contComas!=sizeof($listCols)-1) { ?>
					]
				}, 
<?php }} else {
$band=0;
}?>
<?php $contComas++;}//ig(pk)?>
<?php endforeach; ?>
<?php }//function?>