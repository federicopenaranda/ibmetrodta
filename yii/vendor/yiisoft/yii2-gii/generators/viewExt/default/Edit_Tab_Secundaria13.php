<?php 
require_once(__DIR__.'/../../Catequil.php');
$model 		= getPath($className);
$subModMM	= getPath($subModelClass);
$codigo 	= divideCodigo($subModMM->tableName());
$listModRef2= getTablesReferential($subModMM->getListHasOne(),$className);
$objModRef2	= getPath($listModRef2);
$idR 		= $objModRef2->getNamePk();
$listCod = divideCodigo($objModRef2->tableName());
if($listCod[2]=="04")
	if($listModRef2 == "UsuarioPrivilegio000004")
		$submodulo=$modulo.".";
	else
		$submodulo="opciones.";
else {
	if($listCod[2]=="03" || $listCod[2]=="04"){
		foreach($objModRef2->getListHasOne() as $hasOneRef):
			$objHoRef	= getPath($hasOneRef);
			$listHORCod = divideCodigo($objHoRef->tableName());
			if($listHORCod[2]=="01" || $listHORCod[2]=="05")
				$submodulo=$objHoRef->getModule().".";
		endforeach;
	} else{
		if($listCod[2]=="01")
			$submodulo = $objModRef2->getModule().".";
		else
			$submodulo="";
	}
}
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.tab.<?= getNameTableSinCod($subModelClass) ?>', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower(getNameTableSinCod($subModelClass)); ?>',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        '<?= $path;?>.store.<?=$submodulo;?><?= getNameTableSinCod($listModRef2)?>',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('<?=$submodulo;?><?= getNameTableSinCod($listModRef2)?>');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: '<?= lcfirst($subModelClass."s"); ?>',
                    name: '<?= lcfirst($subModelClass."s"); ?>',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: '<?= getNameField($objModRef2->atributes());?>',
                    valueField: '<?=$idR[0]?>',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: '<?= $listModRef2?> Disponibles',
                    toTitle: '<?= $listModRef2?> Seleccionados',
                    buttons: [ 'add', 'remove' ],
                    delimiter: null,
                    height: 350,
                   	overflowY: 'scroll'
                }
            ]
        });
        me.callParent(arguments);
    }
});