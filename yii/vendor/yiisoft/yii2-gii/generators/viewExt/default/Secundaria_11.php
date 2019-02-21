<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($classPrincipal); ?>.<?= getNameTableSinCod($className); ?>Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($classPrincipal)); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($className)); ?>lista',
    store: '<?= getNameTableSinCod($className); ?>',
    requires: [
        'Ext.toolbar.Paging',
        '<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>',
        'Ext.selection.CellModel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.form.*'
    ],
    minHeight: 250,
    initComponent: function() {

        //var storeTablaReferencial1 = Ext.data.StoreManager.lookup('opciones.Referencial1');
        //storeTablaReferencial1.load();
        
        var me = this;
        
        me.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 2
        });
        
        Ext.applyIf(me, {
            selModel: {
                selType: 'cellmodel'
            },
            plugins: [me.cellEditing],
            columns: {
                defaults: {
                    flex: 1
                },
                items: [
<?php $total = getTotalCamSinLP($tableSchema->columns,$model->getLogin(),$model->getPrivate()); ?>
<?php $contComas=1;
foreach($tableSchema->columns as $column):
	$listAtrib = $model->attributeLabels();
	if ($column->name != $model->getLogin() && !in_array($column->name,$model->getPrivate())){
		if ($column->isPrimaryKey === FALSE){
			if ($contComas != $total) {?>
<?php if ($column->type == "string") {?>
					{
                        // Campo de Texto
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        editor: {
                            xtype: 'textfield',
                            allowBlack: false
                        }
                    },
<?php }?>
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
                        },
                        editor: {
                            xtype: 'combo',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data : [['Si', 1],['No', 0]]
                            }),
                            triggerAction: 'all',
                            valueField: 'valor',
                            displayField: 'nombre',
                            queryMode: 'local',
                            forceSelection: true,
                            editable: false
                        }
                    },
<?php }?>
<?php if ($column->type == "float" || $column->type == "integer" && strpos($column->name,"fk_id_") === FALSE && strpos($column->name,"id_") === FALSE ){?>
					{
                        // Campo Entero / Float
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        editor: {
                            xtype: 'numberfield'
                        }
                    },
<?php }?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					{
                        // Campo Fecha / Fecha y hora
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        xtype: 'datecolumn', 
                        format: 'Y-m-d',
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
<?php } ?>
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
<?php } ?>
<?php if ($column->type == "text"){?>
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Campo 5',
                        dataIndex: '<?= $column->name; ?>',
                        editor: {
                            xtype: 'textareafield',
                            name: '<?= $listAtrib[$column->name]; ?>',
                            fieldLabel: '<?= $listAtrib[$column->name]; ?>',
                            height: 80
                        }
                    },
<?php }?>
<?php } else {?>
<?php if ($column->type == "string") {?>
					{
                        // Campo de Texto
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        editor: {
                            xtype: 'textfield',
                            allowBlack: false
                        }
                    }
<?php }?>
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
                        },
                        editor: {
                            xtype: 'combo',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data : [['Si', 1],['No', 0]]
                            }),
                            triggerAction: 'all',
                            valueField: 'valor',
                            displayField: 'nombre',
                            queryMode: 'local',
                            forceSelection: true,
                            editable: false
                        }
                    }
<?php } //smaallint?>
<?php if ($column->type == "float" || $column->type == "integer" && strpos($column->name,"fk_id_") === FALSE && strpos($column->name,"id_") === FALSE ){?>
					{
                        // Campo Entero / Float
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        editor: {
                            xtype: 'numberfield'
                        }
                    }
<?php } // if float?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					{
                        // Campo Fecha / Fecha y hora
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        xtype: 'datecolumn', 
                        format: 'Y-m-d',
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    }
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
                    }
<?php } //if fk_id ?>
<?php if ($column->type == "text"){?>
					{
                        // Campo tipo "TEXT" (MySQL)
                        text: 'Campo 5',
                        dataIndex: '<?= $column->name; ?>',
                        editor: {
                            xtype: 'textareafield',
                            name: '<?= $listAtrib[$column->name]; ?>',
                            fieldLabel: '<?= $listAtrib[$column->name]; ?>',
                            height: 80
                        }
                    }
<?php } //if text?>
<?php } //if comas?>
<?php } $contComas++;?>
<?php } //if loogin private?>
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