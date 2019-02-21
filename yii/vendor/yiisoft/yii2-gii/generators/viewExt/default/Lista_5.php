<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?php echo $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista',
    header: false,
    iconCls: 'icon_user',
    store: {
        type: '<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>'
    },
    minHeight: 250,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: 1
                },
                sortAscText: 'Ordenar Ascendentemente',
                sortDescText: 'Ordenar Descendentemente',
                columnsText: 'Columnas',
                items: [
<?php $total = getTotalCamSinLP($tableSchema->columns,$model->getLogin(),$model->getPrivate()); ?>
<?php $contComas=1;foreach($tableSchema->columns as $column):
$listAtrib = $model->attributeLabels();
if ($column->name != $model->getLogin() && !in_array($column->name,$model->getPrivate())){
	if($contComas != $total) {?>
<?php if ($column->type == "text" || $column->type == "string") {?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    },
<?php }#if text?>
<?php if ($column->type == "smallint") {?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                        }
                    },
<?php }#if smallint?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
<?php }#date ?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE){?>
					{
                        text: '<?= substr($listAtrib[$column->name],6); ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
<?php foreach($model->getNameFKey() as $fk =>$listfk):
			if($listfk[1]==$column->name){
				$objOne = getPath($generator->generateClassName($listfk[0]));
			}
endforeach; ?>
                            return record.get( '<?=$objOne->getDisplay()?>' ); 
                        }
                    },			
<?php }#if fk ?>
<?php if ($column->type == "float"){?>
					{
                    	text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    },
<?php } #if float?>
<?php } else {?>
<?php if ($column->type == "text" || $column->type == "string") {?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    }
<?php }#if text?>
<?php if ($column->type == "smallint") {?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                        }
                    }
<?php }#if smallint?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    }
<?php }#if date ?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") !== FALSE){?>
					{
                        text: '<?= substr($listAtrib[$column->name],6); ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
<?php foreach($model->getNameFKey() as $fk =>$listfk):
			if($listfk[1]==$column->name){
				$objOne = getPath($generator->generateClassName($listfk[0]));
			}
endforeach; ?>
                            return record.get( '<?=$objOne->getDisplay()?>' );
                        }
                    }
<?php }#if fk ?>
<?php if ($column->type == "float"){?>
					{
                    	text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    }
<?php }#if float ?>
<?php }#if $contComas != $total ?>
<?php }#if login & private 
$contComas++;//if comas ?>
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
                },
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent(arguments);
    }
});