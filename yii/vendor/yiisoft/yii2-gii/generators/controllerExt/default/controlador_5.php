<?php 
require_once(__DIR__.'/../../Catequil.php');
#echo __DIR__;
#require_once (__DIR__."/../../model/default/instancia.php");
$model = getPath($className);
$listCodigo = divideCodigo($model->tableName());
$db = Yii::$app->get($generator->db, false);
$table = $db->getSchema()->getTableSchema($model->tableName());
#print_r($table);
$classNameP = $className;
$moduleP = $modulo;
foreach($model->getListHasOne()as $hasOne):
	$objHO = getPath($hasOne);
	$listCodHO = divideCodigo($objHO->tableName());
	if($listCodHO[2]=="01"){
		$classNameP = $hasOne;
		$moduleP = $objHO->getModule();
	}
endforeach;
?>
<?php 
$listClasHasMany=$model->getListHasMany();
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.controller.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>', {
    extend: '<?= $path;?>.controller.Base',
    stores: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>'
    ],
    views: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.Lista',
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.Form',
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.Window'
    ],
    refs: [
        {
            ref: '<?= getNameTableSinCod($classNameP); ?>Lista',
            selector: '[xtype=<?= $moduleP; ?>.<?= strtolower(getNameTableSinCod($classNameP)); ?>.lista]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>Window',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.window]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>Window<?= getNameTableSinCod($className); ?>',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($className)); ?>window]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=<?= $moduleP; ?>.<?= strtolower(getNameTableSinCod($classNameP)); ?>.lista] menuitem#<?= strtolower(getNameTableSinCod($className)); ?>': {
                    click: this.add
                },
                'grid[xtype=<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit<?= getNameTableSinCod($className); ?>,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#add': {
                    click: this.add<?= getNameTableSinCod($className); ?>
                },
                'grid[xtype=<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#edit': {
                    click: this.edit<?= getNameTableSinCod($className); ?>
                },
                'grid[xtype=<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#delete': {
                    click: this.delete<?= getNameTableSinCod($className); ?>
                },
                'window[xtype=<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($className)); ?>window] button#save': {
                    click: this.save
                },
                'window[xtype=<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($className)); ?>window] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function (grid, eOpts) {
        var me = this,
                store = grid.getStore(),
                grid2 = me.get<?= getNameTableSinCod($classNameP); ?>Lista(),
                record = grid2.getSelectionModel().getSelection()[0],
                data = record.getData();

        store.clearFilter(true);
<?php
$fk_id = $model->getMain();
$id="";
foreach($table->foreignKeys as $fks):
foreach($fks as $k => $val):
if($k === $fk_id)
	$id = $val;
endforeach;
endforeach;
?>
        store.filter("<?= $fk_id;  ?>", data['<?= $id; ?>']);
    },


    edit<?= getNameTableSinCod($className); ?>: function(view, record, item, index, e, eOpts) {
        var me = this;

        var grid = me.get<?= getNameTableSinCod($className); ?>Lista();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show window
        me.showEditWindow<?= getNameTableSinCod($className); ?>(record);
    },

    

    add: function( view, record, item, index, e, eOpts ) {
        var me = this;
        
        var grid = me.get<?= getNameTableSinCod($className); ?>Lista();
        var record = grid.getSelectionModel().getSelection()[0];

        // show window
        me.showEditWindow(record);
    },
    
    add<?= getNameTableSinCod($className); ?>: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('<?= $path;?>.model.<?= strtolower($moduleP); ?>.<?= getNameTableSinCod($className); ?>');

        // show window
        me.showEditWindow<?= getNameTableSinCod($className); ?>(record);
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.get<?= getNameTableSinCod($className); ?>Lista();
        var records = grid.getSelectionModel().getSelection();

        var botonEdit = grid.down("[xtype='toolbar'] button#edit");
        var botonDelete = grid.down("[xtype='toolbar'] button#delete");

        if (records.length > 0)
        {
            botonEdit.enable();
            botonDelete.enable();
        }
        else
        {
            botonEdit.disable();
            botonDelete.disable();
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.get<?= getNameTableSinCod($className); ?>Lista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;

        var grid<?= getNameTableSinCod($classNameP); ?> = me.get<?= getNameTableSinCod($classNameP); ?>Lista();
        var record<?= getNameTableSinCod($classNameP); ?> = grid<?= getNameTableSinCod($classNameP); ?>.getSelectionModel().getSelection()[0];
        var data<?= getNameTableSinCod($classNameP); ?> = record<?= getNameTableSinCod($classNameP); ?>.getData();

        values['<?= $fk_id;?>'] = data<?= getNameTableSinCod($classNameP); ?>['<?= $id ?>'];
        
        ////////////////////////////////////////////////////////////////////
        // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
        ///////////////////////////////////////////////////////////////////
<?php foreach ($listSubModMM as $subModMM) :
$submodel = getPath($subModMM);
?>
<?php 
$pk=$model->getNamePk();
$fk_id3="";
foreach($model->getListHasMany() as $hasMany):
$objHM =getPath($hasMany);
$listC = divideCodigo($objHM->tableName());
if($listC[2] == "02"){
	$subStruct = $db->getSchema()->getTableSchema($objHM->tableName());
	foreach($subStruct->foreignKeys as $fks2):
		foreach($fks2 as $k2 => $val2):
			if($val2 !==$pk[0])
				$fk_id3 = $k2;
		endforeach;
	endforeach;
}
endforeach;
?>
            var array<?= getNameTableSinCod($subModMM); ?> = [];
            var arrayLength = values['<?= strtolower(getNameTableSinCod($subModMM));?>'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['<?= strtolower(getNameTableSinCod($subModMM));?>'][i] > 0 )
                {
                    var tmp<?= getNameTableSinCod($subModMM);?> = {
                        <?= $fk_id3?> : values['<?= strtolower(getNameTableSinCod($subModMM));?>'][i]
                    };
                    array<?= getNameTableSinCod($subModMM);?>.push(tmp<?= getNameTableSinCod($subModMM);?>); // push this to the array
                }
            }

            values['<?= strtolower(getNameTableSinCod($subModMM));?>'] = Ext.encode(array<?= getNameTableSinCod($subModMM);?>);
<?php endforeach;?>  
        /////////////////////////////////////////////////////////////////
        // [FIN] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
        /////////////////////////////////////////////////////////////////

        record.set(values);
        
        if (!record.dirty) {
            win.close();
            return;
        }

        callbacks = {
            success: function(records, operation) {
                store.reload();
                win.close();
            },
            failure: function(records, operation) {
                store.rejectChanges();
            }
        };

        Ext.getBody().mask('Guardando <?= getNameTableSinCod($className); ?> ...');
        
        if (record.phantom) {
            store.rejectChanges();
            store.add(record);
        }
        
        store.sync(callbacks);
    },



    close: function(button, e, eOpts) {
        var me = this,
                win = button.up('window');
        // close the window
        win.close();
    },


    delete<?= getNameTableSinCod($className); ?>: function() {
        var me = this;

        var grid = me.get<?= getNameTableSinCod($className); ?>Lista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
        Ext.Msg.confirm('Atención', '¿Esta seguro que desea eliminar esta <?= getNameTableSinCod($className); ?>?. Esta acción no puede ser deshecha.', function(buttonId, text, opt) {
            if (buttonId === 'yes') {
                store.remove(record);
                store.sync({
                    failure: function(records, operation) {
                        store.rejectChanges();
                    }
                });
            }
        });
    },



    showEditWindow: function(record) {
        var me = this,
                win = me.get<?= getNameTableSinCod($className); ?>Window();
        
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.window', {
                title: '<?= getNameTableSinCod($className); ?>'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    showEditWindow<?= getNameTableSinCod($className); ?>: function(record) {
        var me = this,
                win = me.get<?= getNameTableSinCod($className); ?>Window<?= getNameTableSinCod($className); ?>(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($className)); ?>window', {
                title: isNew ? 'Añadir <?= getNameTableSinCod($className); ?>' : 'Editar <?= getNameTableSinCod($className); ?>'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();

        // load form with data
        win.down('form').loadRecord(record);
    }
});