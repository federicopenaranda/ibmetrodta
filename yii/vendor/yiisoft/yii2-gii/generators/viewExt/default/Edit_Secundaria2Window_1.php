<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($classPrincipal); ?>.edit.<?= getNameTableSinCod($className); ?>Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.<?= strtolower($modulo)?>.<?= strtolower(getNameTableSinCod($classPrincipal)); ?>.edit.<?= strtolower(getNameTableSinCod($className)); ?>window',
    requires: [
        '<?= $path;?>.view.<?= strtolower($modulo)?>.<?= getNameTableSinCod($classPrincipal); ?>.edit.<?= getNameTableSinCod($className); ?>Form'
    ],
    iconCls: 'icon_gear',
    width: 450,
    height: 300,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    // include form
                    xtype: '<?= strtolower($modulo)?>.<?= strtolower(getNameTableSinCod($classPrincipal)); ?>.edit.<?= getNameTableSinCod($className); ?>form'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: 'Cancelar',
                            iconCls: 'icon_delete'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'Guardar',
                            iconCls: 'icon_save'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});