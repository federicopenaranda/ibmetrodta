<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?php echo $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista',
    title: 'Administrar <?= getNameTableSinCod($className); ?>',
    iconCls: 'icon_user',
    store: '<?= getNameTableSinCod($className); ?>',
    minHeight: 250,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                	flex: .2
                },
                items: [
<?php $total = getTotalCamSinLP($tableSchema->columns,$model->getLogin(),$model->getPrivate()); ?>
<?php $contComas=1;foreach($tableSchema->columns as $column):
$listAtrib = $model->attributeLabels();
if($column->isPrimaryKey ===FALSE){
if ($column->name != $model->getLogin() && !in_array($column->name,$model->getPrivate())){
	if($contComas != $total) {?>
<?php if ($column->type == "text" || $column->type == "string") {?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                    },
<?php }?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") === FALSE){?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                        //maxValue: [VALOR MÁXIMO],
                        //minValue: [VALOR MÍNIMO]
                    },
<?php } ?>
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
<?php }?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					{
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
<?php } ?>
<?php if ($column->type == "float") {?>
                  	 {
                     	text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                        //maxValue: [VALOR MÁXIMO],
                        //minValue: [VALOR MÍNIMO]
                     },
<?php }?>
<?php } else { ?>
<?php if ($column->type == "text" || $column->type == "string") {?>
					 {
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                     }
<?php }?>
<?php if ($column->type == "integer" && strpos($column->name,"fk_id_") === FALSE){?>
					 {
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                        //maxValue: [VALOR MÁXIMO],
                        //minValue: [VALOR MÍNIMO]
                     }
<?php } ?>
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
<?php }?>
<?php if ($column->type == "date" || $column->type == "datetime"){?>
					 {
                        text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                     }
<?php } ?>
<?php if ($column->type == "float") {?>
                  	 {
                     	text: '<?= $listAtrib[$column->name]; ?>',
                        dataIndex: '<?= $column->name; ?>'
                        //maxValue: [VALOR MÁXIMO],
                        //minValue: [VALOR MÍNIMO]
                     }
<?php }?>
<?php } ?>
<?php } ?>
<?php }//login & private 
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
                            //hidden: me.privilegio('<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.delete'),
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
    },


    privilegio: function( opcion ) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return ( res !== null ) ? false : true;
    }
});