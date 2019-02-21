<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(strtolower(getNameTableSinCod($className))); ?>.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        '<?= $path;?>.ux.form.field.RemoteComboBox',
        'Ext.ux.form.ItemSelector'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: true,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: '<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.tab.info',
                            title: 'Info'
<?php
$listCodi=divideCodigo($model->tableName());
$limit=0;foreach ($model->getListHasMany() as $subModel):
$subMod = getPath($subModel);
$listSubCondi=divideCodigo($subMod->tableName());
if($listSubCondi[2] != 4 && $listCodi[0] == $listSubCondi[0] && $listCodi[1] == $listSubCondi[1]){
	$limit++;
}
endforeach;
?>
<?php if($limit == 0){?>
                        }
<?php } else {?>
						},
<?php } ?>

<?php $contComas=1;$model=getPath($className);$listCodi=divideCodigo($model->tableName());
foreach ($model->getListHasMany() as $subModel) :
$subMod = getPath($subModel);
$listSubCondi = divideCodigo($subMod->tableName());
if($listSubCondi[2] != 4 && $listCodi[0] == $listSubCondi[0] && $listCodi[1] == $listSubCondi[1]){
if ($contComas != $limit) {?>
                        {
                            xtype: '<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower(getNameTableSinCod($subModel)); ?>',
                            title: '<?= getNameTableSinCod($subModel); ?>'
                        },
<?php } else {?>
                        {
                            xtype: '<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower(getNameTableSinCod($subModel)); ?>',
                            title: '<?= getNameTableSinCod($subModel); ?>'
                        }
<?php }//if(comas)  ?>
<?php $contComas++;} endforeach;?>
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});