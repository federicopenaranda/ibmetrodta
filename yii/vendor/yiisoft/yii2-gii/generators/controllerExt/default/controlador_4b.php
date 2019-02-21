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
            ref: '<?= getNameTableSinCod($className); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>Window',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.window]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>Form',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#add': {
                    click: this.add
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.window] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
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


    loadRecords: function(grid, eOpts) {
        var store = grid.getStore();
        store.clearFilter(true);
        store.load();
    },


    edit: function(view, record, item, index, e, eOpts) {
        var me = this;
        var grid = me.get<?= getNameTableSinCod($className); ?>Lista();
        var record = grid.getSelectionModel().getSelection()[0];
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>');
        // show window
        me.showEditWindow(record);
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

        // set values of record from form
        record.set(values);
        // check if form is even dirty...if not, just close window and stop everything...nothing to see here
        if (!record.dirty) {
            win.close();
            return;
        }
        // setup generic callback config for create/save methods
        callbacks = {
            success: function(records, operation) {
                store.reload();
                win.close();
            },
            failure: function(records, operation) {
                // if failure, reject changes in store
                store.rejectChanges();
            }
        };
        
        // mask to prevent extra submits
        Ext.getBody().mask('Guardando <?= getNameTableSinCod($className); ?> ...');
        // if new record...
        if (record.phantom) {
            // reject any other changes
            store.rejectChanges();
            // add the new record
            store.add(record);
        }
        // persist the record
        store.sync(callbacks);
    },


    close: function(button, e, eOpts) {
        var win = button.up('window');
        // close the window
        win.close();
    },


    remove: function() {
        var me = this;

        var grid = me.get<?= getNameTableSinCod($className); ?>Lista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];
        
        // show confirmation before continuing
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
                }
            }
        });
    },


    showEditWindow: function(record) {
        var me = this,
                win = me.get<?= getNameTableSinCod($className); ?>Window(),
                isNew = record.phantom;

        if (!win) {
            win = Ext.widget('<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.window', {
                title: isNew ? 'Añadir <?= getNameTableSinCod($className); ?>' : 'Editar <?= getNameTableSinCod($className); ?>'
            });
        }

        win.show();
        win.doComponentLayout();
        win.down('form').loadRecord(record);
    }
});