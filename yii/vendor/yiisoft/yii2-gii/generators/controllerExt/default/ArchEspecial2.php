<?php foreach($models as $model):?>
{
	text: 'Adm. <?= $model; ?>',
	itemId: 'opciones/<?= $model; ?>',
	iconCls: 'icon_gear'/*,
	hidden: me.privilegio('menu.opciones.<?= $model ?>')*/
}
    
    
<?php endforeach; ?>