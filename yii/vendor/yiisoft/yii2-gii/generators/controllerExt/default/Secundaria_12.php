<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
$id = $model->getNamePk();
$modFo=getPath($subModelClass);
$listFk = $modFo->getNameFKey();
$listSubFk = $listFk[$id[0]];
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.controller.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>', {
    extend: '<?= $path;?>.controller.Base',
    stores: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>'
    ],
    views: [
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.<?= getNameTableSinCod($subModelClass); ?>Lista',
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.<?= getNameTableSinCod($subModelClass); ?>Form',
        '<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>.edit.<?= getNameTableSinCod($subModelClass); ?>Window'
    ],
    refs: [
        {
            ref: '<?= getNameTableSinCod($subModelClass); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista]'
        },
        {
            ref: '<?= getNameTableSinCod($subModelClass); ?>Window',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($subModelClass)); ?>window]'
        },
        {
            ref: '<?= getNameTableSinCod($subModelClass); ?>Form',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($subModelClass)); ?>form]'
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
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    selectionchange: this.manejaBotones,
                    afterrender: this.manejaBotones
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista] button#add': {
                    click: this.add
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista] button#edit': {
                    click: this.edit
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($subModelClass)); ?>lista] button#delete': {
                    click: this.remove
                },
                'window[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($subModelClass)); ?>window] button#save': {
                    click: this.save
                },
                'window[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($subModelClass)); ?>window] button#cancel': {
                    click: this.close
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

                store.filter( '<?= $listSubFk[1] ?>', data['<?= $id[0]; ?>'] );
            }
        }
    },


    manejaBotones: function ( record, index, eOpts ){
        var me = this;
        var grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista();
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
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    },


    edit: function(records, index, node, eOpts) {
        var me = this;

        var grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista();
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
            record = Ext.create('<?= $path;?>.model.<?= $modulo; ?>.<?= getNameTableSinCod($subModelClass); ?>');
        
        var grid1 = me.get<?= getNameTableSinCod($className); ?>Lista();
        var recSeleccionados = grid1.getSelectionModel().getSelection();
        var cont<?= getNameTableSinCod($className); ?> = me.getController('<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>');

        if ( recSeleccionados.length === 1 && cont<?= getNameTableSinCod($className); ?>.bool<?= getNameTableSinCod($className); ?>Edit === 1 )
        {
            var record1 = recSeleccionados[0];
            var data1 = record1.getData();

            record.set('<?= $listSubFk[1] ?>', data1['<?= $id[0] ?>']);

            me.showEditWindow(record);
        }
        else
        {
            if ( cont<?= getNameTableSinCod($className); ?>.bool<?= getNameTableSinCod($className); ?>Edit === 0 )
            {
                me.showEditWindow(record);
            }
            else
            {
                console.log('[<?= getNameTableSinCod($subModelClass); ?>] Error al recuperar el ID de la <?= strtolower(getNameTableSinCod($className)); ?>');
                return 'Error';
            }
        }
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        record.set(values);

        if (!record.dirty) {
            win.close();
            return;
        }

        if ( form.isValid() )
        {
            var rowIndex = store.indexOf(record);
            ( rowIndex === -1 ) ? store.add(record) : form.updateRecord(record);

            win.close();
        }
        else
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
    },
            

    close: function(button, e, eOpts) {
        var me = this,
                win = button.up('window');
        // close the window
        win.close();
    },


    remove: function() {
        var me = this;
        var grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista();
        var store = grid.getStore();
        var record = grid.getSelectionModel().getSelection()[0];

        var cont<?= getNameTableSinCod($className); ?> = me.getController('<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>');

        // Se esta eliminando un registro del grid de Estado Civil
        // pero de un beneficiario nuevo. Solo se quita del store.
        if ( cont<?= getNameTableSinCod($className); ?>.bool<?= getNameTableSinCod($className); ?>Edit === 0 )
        {
            store.remove(record);
        }
        // Se esta eliminando un registro del grid de Estado Civil
        // pero de un beneficiario ya creado. Si es un registro recién creado (phantom == true)
        // solo se quita del store. Si no es un registro recién creado se lo quita del store
        // y de la base de datos (sync).
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
                    msg: '¿Esta seguro que desea eliminar este <?= strtolower(getNameTableSinCod($subModelClass)); ?>?. Esta acción no puede ser deshecha.',
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


    showEditWindow: function(record) {
        var me = this,
                win = me.get<?= getNameTableSinCod($subModelClass); ?>Window(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.edit.<?= strtolower(getNameTableSinCod($subModelClass)); ?>window', {
                title: isNew ? 'Añadir <?= getNameTableSinCod($subModelClass); ?>' : 'Editar <?= getNameTableSinCod($subModelClass); ?>'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
        // load form with data
        win.down('form').loadRecord(record);
    },


    sincronizar: function() {
        var me = this,
                grid = me.get<?= getNameTableSinCod($subModelClass); ?>Lista(),
                store = grid.getStore();
        
        store.sync();
    }
});