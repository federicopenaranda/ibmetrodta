<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($classPrincipal); ?>.<?= getNameTableSinCod($className); ?>Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($classPrincipal)); ?>.<?= strtolower(getNameTableSinCod($className)); ?>lista',
    requires: [
        'Ext.toolbar.Paging',
        '<?= $path;?>.store.<?= strtolower($modulo); ?>.<?= getNameTableSinCod($className); ?>'
    ],
    minHeight: 250,
    store: '<?= getNameTableSinCod($className); ?>',
    initComponent: function() {

        //var storeReferencial2 = Ext.data.StoreManager.lookup('opciones.storeReferencial2');
        //storeReferencial2.load();

        var me = this;
        Ext.applyIf(me, {
            selType: 'rowmodel',
            columns: {
                defaults: {
                    flex: 1
                },
                sortAscText: 'Ordenar Ascendentemente',
                sortDescText: 'Ordenar Descendentemente',
                columnsText: 'Columnas',
                items: [
<?php $total = getTotalCamSinLP($tableSchema->columns,$model->getLogin(),$model->getPrivate()); ?>
<?php $contComas = 1;
foreach($tableSchema->columns as $column):
	$listAtrib = $model->attributeLabels();
	if ($column->name != $model->getLogin() && !in_array($column->name,$model->getPrivate())){
		if ($column->isPrimaryKey === FALSE ) {
			if ($contComas != $total) {?>
<?php if ($column->type == "string") {?>
					{
                        // Campo de Texto
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    },
<?php } //if string?>
<?php if ($column->type == "smallint") {?>
					{
                        // Campo Booleano
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function (valor) {
                            if ( valor === 1 )
                                return 'Si';
                            
                            if ( valor === 0 )
                                return 'No';
                            
                            return '';
                        }
                    },
<?php } //if smallint?>
<?php if ($column->type == "float" || $column->type == "integer" && strpos($column->name,"fk_id_") === FALSE && strpos($column->name,"id_") === FALSE){?>
					{
                        // Campo Entero / Float
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    },
<?php } //if float?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					{
                        // Campo Fecha / Fecha y hora
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        xtype: 'datecolumn', 
                        format: 'Y-m-d'
                    },
<?php } //if date?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE){?>
					{
                        // Campo de llave foranea
                        text: '<?= substr($listAtrib[$column->name],6); ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
<?php foreach($model->getNameFKey() as $fk =>$listfk):
			if($listfk[1]==$column->name){
				$objOne = getPath($generator->generateClassName($listfk[0]));
			}
endforeach; ?>
                            return record.get( '<?=$objOne->getDisplay()?>' ); // Debe estar en el modelo
                        }
                    },
<?php } //if fk_id ?>
<?php if ($column->type == "text"){?>
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    },
<?php } //if text?>
<?php } else { ?>
<?php if ($column->type == "string") {?>
					{
                        // Campo de Texto
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    }
<?php } //if string ?>
<?php if ($column->type == "smallint") {?>
					{
                        // Campo Booleano
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function (valor) {
                            if ( valor === 1 )
                                return 'Si';
                            
                            if ( valor === 0 )
                                return 'No';
                            
                            return '';
                        }
                    }
<?php } //if smallint?>
<?php if ($column->type == "float" || $column->type == "integer" && strpos($column->name,"fk_id_") === FALSE && strpos($column->name,"id_") === FALSE ){?>
					{
                        // Campo Entero / Float
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    }
<?php } // if float?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					{
                        // Campo Fecha / Fecha y hora
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        xtype: 'datecolumn', 
                        format: 'Y-m-d'
                    }
<?php } //if date datetime ?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE){?>
					{
                        // Campo de llave foranea
                        text: '<?= substr($listAtrib[$column->name],6); ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
<?php foreach($model->getNameFKey() as $fk =>$listfk):
			if($listfk[1]==$column->name){
				$objOne = getPath($generator->generateClassName($listfk[0]));
			}
endforeach; ?>
                            return record.get( '<?=$objOne->getDisplay()?>' ); // Debe estar en el modelo
                        }
                    }
<?php } //if fk_id ?>
<?php if ($column->type == "text"){?>
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    }
<?php } // if text?>
<?php } // if comas?>
<?php } /*if pk*/ $contComas++;?>
<?php }/* if login rpivate*/  ?>
<?php endforeach; ?>
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});