<?php foreach($models as $model):?>
case 'opciones/<?= $model ?>':
	config = {
		xtype: 'opciones.<?= strtolower($model); ?>.lista',
		title: 'Administraci&oacute;n de <?= $model ?>',
		iconCls: 'icon_color',
		store: Ext.create( 'produccionspc.store.opciones.<?= $model ?>', {
			pageSize: 10
		})
	};
	break;
    
    
<?php endforeach; ?>