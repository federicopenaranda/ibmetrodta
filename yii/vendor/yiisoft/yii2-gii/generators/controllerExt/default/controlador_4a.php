<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
$listCodigo = divideCodigo($model->tableName());
?>
<?php 
$listClasHasMany=$model->getListHasMany();
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.controller.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>',{
    extend:'<?= $path;?>.controller.Base',
    stores: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>'
    ],
    views: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.Lista'
    ],
    refs: [
	{
            ref: '<?= getNameTableSinCod($className); ?>Lista',
            selector:'[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista]'
	}
    ],
    init:function(){
        this.listen({
            controller:{},
            component:{
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista]': {
                    edit: this.save,
                    canceledit: this.cancel,
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#edit': {
                    click: this.edit2
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] gridview': {
                    itemadd: this.edit
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var store = grid.getStore();
        store.clearFilter(true);
        store.load();
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


    cancel: function(editor, context, eOpts) {
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    },


    edit: function(records, index, node, eOpts) {
        var me = this,
                grid = me.get<?= getNameTableSinCod($className); ?>Lista(),
                plugin = grid.editingPlugin;
        plugin.startEdit(records[ 0 ], 0);
    },


    edit2: function() {
        var me = this,
                grid = me.get<?= getNameTableSinCod($className); ?>Lista(),
                plugin = grid.editingPlugin,
                record = grid.getSelectionModel().getSelection()[0];

        plugin.startEdit(record, 0);
    },


    add: function(button, e, eOpts) {
        var me = this,
                grid = me.get<?= getNameTableSinCod($className); ?>Lista(),
                plugin = grid.editingPlugin,
                store = grid.getStore();

        if (plugin.editing) {
            Ext.Msg.alert('Atenci�n', 'Por favor termine de editar antes de ingresar un nuevo registro.');
            return false;
        }
                
        store.insert(0, {});
    },


    save: function(editor, context, eOpts) {
        var store = context.record.store,
                callbacks;

        callbacks = {
            success: function(records, operation) {
                store.reload();
            },
            failure: function(records, operation) {
                store.rejectChanges();
            }
        };
        
        // save
        store.sync(callbacks);
    },


    remove: function() {
        var me = this;

        var grid = me.get<?= getNameTableSinCod($className); ?>Lista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        Ext.Msg.confirm({
            title: 'Atención',
            msg: '¿Esta seguro que desea eliminar esta <?= getNameTableSinCod($className); ?>?. Esta acción no puede ser deshecha.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            buttonText: {
                yes: 'Eliminar',
                no: 'Cancelar'
            },
            fn: function(buttonId, text, opt) 
            {
                if (buttonId === 'yes') {
                    store.remove(record);
                    store.sync({
                        failure: function(records, operation) {
                            store.rejectChanges();
                        }
                    });
                    store.reload();
                }
            }
        });
    }
});