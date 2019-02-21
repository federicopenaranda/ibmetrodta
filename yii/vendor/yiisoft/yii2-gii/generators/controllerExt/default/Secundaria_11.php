<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
$pk = $model->getNamePk();
$modFo=getPath($subModelClass);
$listFk = $modFo->getNameFKey();
$listSubFk = $listFk[$pk[0]];
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.controller.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>', {
    extend: '<?= $path;?>.controller.Base',
    stores: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>'
    ],
    views: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($className);?>.<?= getNameTableSinCod($subModelClass); ?>Lista',
        '<?= $modulo; ?>.<?= getNameTableSinCod($className);?>.Lista'
    ],
    refs: [
        {
            ref: '<?= getNameTableSinCod($subModelClass); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className));?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className));?>.lista]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className));?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className));?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista] button#add': {
                    click: this.add
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className));?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista] button#edit': {
                    click: this.edit2
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className));?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista] button#delete': {
                    click: this.remove
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className));?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista] gridview': {
                    itemadd: this.edit
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },


    loadRecords: function(grid, eOpts) {
        var me = this;
        var store = grid.getStore();

        store.clearFilter(true);
        var cont<?= getNameTableSinCod($className); ?> = me.getController('<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>');
        
        if ( cont<?= getNameTableSinCod($className); ?>.bool<?= getNameTableSinCod($className); ?>Edit === 1)
        {
            var grid2 = me.get<?= getNameTableSinCod($className); ?>Lista();
            var dd = grid2.getSelectionModel().getSelection();

            if ( dd.length === 1 )
            {
                var record = dd[0];
                var data = record.getData();

                store.filter( '<?= $listSubFk[1] ?>', data['<?= $pk[0] ?>'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this,
                grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista(),
                records = grid.getSelectionModel().getSelection(),
                botonEdit = grid.down("[xtype='toolbar'] button#edit"),
                botonDelete = grid.down("[xtype='toolbar'] button#delete");

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
                grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista(),
                plugin = grid.editingPlugin;

        plugin.startEdit(records[ 0 ], 0);
    },


    edit2: function() {
        var me = this,
                grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista(),
                plugin = grid.editingPlugin,
                record = grid.getSelectionModel().getSelection()[0];

        plugin.startEdit(record, 0);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>');
        
        var grid1 = me.get<?= getNameTableSinCod($className); ?>Lista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        
        var grid2 = me.get<?= getNameTableSinCod($subModelClass); ?>Lista();
        var store2 = grid2.getStore();
        var cont<?= getNameTableSinCod($className); ?> = me.getController('<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>');

        if ( recSeleccionados.length === 1 && cont<?= getNameTableSinCod($className); ?>.bool<?= getNameTableSinCod($className); ?>Edit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('<?= $listSubFk[1] ?>', data1['<?= $pk[0] ?>']);

            store2.insert(0, record);
            grid2.cellEditing.startEditByPosition({
                row: 0, 
                column: 0
            });
        }
        else
        {
            if ( cont<?= getNameTableSinCod($className); ?>.bool<?= getNameTableSinCod($className); ?>Edit === 0 )
            {
                store2.insert(0, record);
                grid2.cellEditing.startEditByPosition({
                    row: 0, 
                    column: 0
                });
            }
            else
            {
                console.log('[<?= getNameTableSinCod($subModelClass); ?>] Error al recuperar el ID del <?= strtolower(getNameTableSinCod($className)); ?>');
                return 'Error';
            }
        }
    },


    remove: function( button, e, eOpts ) {
        var me = this,
                grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista(),
                store = grid.getStore(),
                record = grid.getSelectionModel().getSelection()[0],
                cont<?= getNameTableSinCod($className); ?> = me.getController('<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>');
        
        if ( cont<?= getNameTableSinCod($className); ?>.bool<?= getNameTableSinCod($className); ?>Edit === 0 )
        {
            store.remove(record);
        }
        else
        {
            if ( record.phantom )
            {
                store.remove(record);
            }
            else
            {
                Ext.Msg.confirm({
                    title: 'Atención',
                    msg: '¿Esta seguro que desea eliminar este Teléfono?. Esta acción no puede ser deshecha.',
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(buttonId, text, opt) 
                    {
                        if (buttonId === 'yes') {
                            store.remove(record);
                        }
                    }
                });
            }
        }
    },


    sincronizar: function() {
        var me = this,
                grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista(),
                store = grid.getStore();
        
        store.sync();
    }
});