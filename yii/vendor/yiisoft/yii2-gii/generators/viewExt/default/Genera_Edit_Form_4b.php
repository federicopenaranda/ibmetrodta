<?php require_once(__DIR__.'/../../Catequil.php'); ?>
<?php function generaString($colName,$colLab,$sw) {?>
                                {
                                    xtype: 'textfield',
                                    name: '<?= $colName; ?>',
                                    fieldLabel: '<?= $colLab; ?>'
<?php if($sw == 1) {?>
                    			},
<?php } else { ?>
								}
<?php }?>
<?php }//end function?>
<?php function generaInt($colName,$colLab,$sw){?>
                                {
                                    xtype: 'numberfield',
                                    name: '<?= $colName; ?>',
                                    fieldLabel: '<?= $colLab; ?>'
<?php if($sw == 1) {?>
                    			},
<?php } else { ?>
								}
<?php }?>	
<?php }//end function ?>
<?php function generaDate($colName,$colLab,$sw){?>
                                {
                                    xtype: 'datefield',
                                    name: '<?= $colName ?>',
                                    fieldLabel: '<?= $colLab; ?>',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
<?php if($sw == 1) {?>
                    			},
<?php } else { ?>
								}
<?php }?>
<?php }//end function ?>
<?php function generaText($colName,$colLab,$sw){?>
                                {
                                    xtype: 'textareafield',
                                    name: '<?= $colName; ?>',
                                    fieldLabel: '<?= $colLab; ?>'
<?php if($sw == 1) {?>
								},
<?php } else { ?>
								}
<?php }?>
<?php }//end function ?>
<?php function generaSmallint($colName,$colLab,$sw){?>
                                {
                                    xtype: 'combo',
                                    name: '<?= $colName; ?>',
                                    fieldLabel: 'Estado:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                            fields: ['nombre', 'valor'],
                                            data : [['Activo', 1],['Inactivo', 0]]
                                        }),
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false
<?php if($sw == 1) {?>
                    			},
<?php } else { ?>
								}
<?php }?>
<?php }//end function ?>
<?php function generaSet($colName,$colLab,$vdbType,$sw){?>
<?php $cad = substr($vdbType,4,-1);
$listVal = explode(",",$cad);$ca="";
foreach($listVal as $Val):
	$ca.= "[".$Val.",".$Val."],";
endforeach;
$ca=substr($ca,0,-1);?>
                                {
                                    xtype: 'combo',
                                    name: '<?= $colName; ?>',
                                    fieldLabel: '<?= $colLab ?>:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [<?= $ca?>]
                                    }),
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false
<?php if($sw == 1) {?>
                    			},
<?php } else { ?>
								}
<?php }?>	
<?php }//end function ?>
<?php function generaFloat($colName,$colLab,$sw){?>
                                {
                                    xtype: 'numberfield',
                                    minValue: 0,
                                    maxValue: 10,
                                    name: '<?= $colName; ?>',
                                    fieldLabel: '<?= $colLab; ?>',
                                    allowBlank: false,
                                    allowDecimals: true,
                                    decimalSeparator: '.',
                                    decimalPrecision: 2
<?php if($sw == 1) {?>
                    			},
<?php } else { ?>
								}
<?php }?>
<?php }//end function ?>
<?php function generaFile($colName,$colLab,$sw){?>
                                {
                                	xtype: 'filefield',
                            		name: 'DocumentoEnviado020001[file]',
                            		itemId: '<?= $colName; ?>',
                            		fieldLabel: '<?= $colLab; ?>',
                            		labelWidth: 80,
                            		msgTarget: 'side',
                            		labelAlign: 'top',
                            		allowBlank: true,
                            		anchor: '100%',
                            		buttonConfig: {
                                		iconCls: 'icon_picture',
                                		text: ''
                            		}
<?php if($sw == 1) {?>
                    			},
<?php } else { ?>
								}
<?php }?>
<?php }//end function ?>
<?php function generaFk($colName,$colLab,$ModRef,$sw,$moduleP) {
$objModR = getPath($ModRef['className']);$listA = $objModR->atributes();$listAL=$objModR->attributeLabels();
$module=$moduleP;
foreach($objModR->getListHasOne() as $hasOne):
	$objHO= getPath($hasOne);
	$listCodHO = divideCodigo($objHO->tableName());
	if ($listCodHO[2]=="01" || $listCodHO[2]=="05")
		$module= $objHO->getModule();
	else
		if($listCodHO[2]=="04")
			$module = "opciones";
endforeach;
#$module=$model->getModule();
$lisCodR = divideCodigo($objModR->tableName()); $pk = $objModR->getNamePk();?>
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: '<?= $colName; ?>',
                                fieldLabel: '<?= $colLab;?>',
                                displayField: '<?= $objModR->getDisplay(); ?>',
                                valueField: '<?= $pk[0];?>',
                                store: {
                                    type: '<?= $module; ?>.<?= strtolower(getNameTableSinCod($ModRef['className'])); ?>'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
<?php if($sw == 1) {?>
                    		},
<?php } else { ?>
							}
<?php }?>
<?php }//end function ?>

<?php //listcols es Referencia $model referen ?>
<?php function generaFormu($listCols,$model,$modPrin,$todo) {
$contComas = 0; 
$band = 1; 
$i = 0; 
$id_r = 0;
$listManyOne = $model->getListHasOne();
$moduleP= $model->getModule();
$listFK = $model->getNameFKey();
#add
$total = getTotalCamSinLP($listCols,$modPrin->getLogin(),$modPrin->getPrivate())-1;
foreach($listCols as $column):
	if ($column->name != $modPrin->getLogin() && !in_array($column->name,$modPrin->getPrivate()) && $column->isPrimaryKey === FALSE){
		
		$contComas++;
		$listAtrib = $model->attributeLabels();
			
		#if ($column->isPrimaryKey === FALSE) {?>
<?php 		$sw = ($contComas%3 == 0 || $contComas == sizeof($listCols) || $contComas == $total) ? 0 : 1 ?>
<?php 		if ($band == 1){?>
						{
                  			xtype: 'fieldcontainer',
                    		items: [
<?php 		}#if $band ?>
<?php 		if ($column->type == "string" && strpos($column->dbType,"set") === FALSE && $column->comment != "file") {?>
<?= 			generaString($column->name,$listAtrib[$column->name],$sw); ?>
<?php 		} //set?>
<?php 		if ($column->type == "integer" && strpos($column->name,"fk_id_") === FALSE){ ?>
<?= 			generaInt($column->name,$listAtrib[$column->name],$sw); ?>
<?php 		} //integer>?>
<?php 		if ($column->type == "date" || $column->type == "datetime"){?>
<?= 			generaDate($column->name,$listAtrib[$column->name],$sw); ?>
<?php 		}//if date ?>
<?php 		if ($column->type == "text"){ ?>
<?= 			generaText($column->name,$listAtrib[$column->name],$sw); ?>
<?php 		}//if text ?>
<?php 		if ($column->type == "smallint") {?>
<?= 			generaSmallint($column->name,$listAtrib[$column->name],$sw); ?>
<?php 		}//if smallit ?>
<?php 		if (strpos($column->dbType,"set") !== FALSE){ ?>
<?= 			generaSet($column->name,$listAtrib[$column->name],$column->dbType,$sw); ?>
<?php 		} //if set?>
<?php 		if ($column->type == "float"){ ?>
<?= 			generaFloat($column->name,$listAtrib[$column->name],$sw); ?>
<?php 		}//if float ?>
<?php 		if ($column->type == "string" && $column->comment == "file"){ ?>
<?= 			generaFile($column->name,$listAtrib[$column->name],$sw); ?>
<?php 		}//if float ?>
<?php 		if (strpos($column->name,"fk_id_") !== FALSE){ 
				
				foreach($listFK as $clave => $valor):
					#echo $valor[1].",".$column->name." - \n";
					if(in_array($column->name,$valor)){
						$table=$valor[0];
					}
				endforeach;
				
				foreach($listManyOne as $manyOne):
					$objManyOne =getPath($manyOne);
					if($objManyOne->tableName()==$table)
						$man = $manyOne;	
				endforeach;
				if ($listManyOne[$i] != $modPrin) {?>
<?= 				generaFk($column->name,$listAtrib[$column->name],$todo[$man],$sw,$moduleP); ?>
<?php 			} ?>
<?php 			$i++;
			}//if fk_id?>
<?php 		if ($contComas%3 == 0 ){
				$band = 1;
				if($contComas!=$total) { ?>
                        	]
                    	}, 
<?php 			} else { ?>
							]
                    	}
<?php 			}
			}  else {
				$band=0;
				if($contComas==$total) {?>
							]
                    	}
<?php			}
			}?>
<?php 		
		#}// if is pk
		?>
<?php 
	}//if login & private?>
<?php endforeach; //listCol?>
<?php }//function?>
