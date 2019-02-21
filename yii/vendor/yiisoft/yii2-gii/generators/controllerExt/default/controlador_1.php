<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
$listCodigo = divideCodigo($model->tableName());
?>
<?php $pk = $model->getNamePk();?>
<?php $listClasHasMany=$model->getListHasMany(); ?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.controller.<?= $modulo; ?>.<?= getNameTableSinCod($className); ?>', {
    extend: '<?= $path;?>.controller.Base',
    bool<?php echo getNameTableSinCod($className); ?>Edit: 0,
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
            ref: '<?php echo getNameTableSinCod($className); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista]'
        },
        {
            ref: '<?php echo getNameTableSinCod($className); ?>Window',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.window]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>Form',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.form]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>InfoTab',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.tab.info]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>SearchWindow',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.search.window]'
        },
        {
            ref: '<?= getNameTableSinCod($className); ?>SearchForm',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.search.form]'
<?php if(sizeof($listSubModMen)!=0 || sizeof($listSubModMay)!=0){?>
        },
<?php } else {?>
		}
<?php } ?>
//////////////////////// menor o igual que tres //////////////////////////////////////
<?php
foreach ($listSubModMen as $subModMen) :
$submodel=getPath($subModMen);
$listSubCodigo = divideCodigo($submodel->tableName());
if (sizeof($listSubModMen) != 0) {?>
		{
            ref: '<?= getNameTableSinCod($subModMen); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($subModMen)); ?>lista]'
        },
        {
            ref: '<?= getNameTableSinCod($subModMen); ?>Tab',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower(getNameTableSinCod($subModMen)); ?>]'
        },
<?php } else { ?>
        {
            ref: '<?= getNameTableSinCod($subModMen); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.<?= strtolower(getNameTableSinCod($subModMen)); ?>lista]'
        },
        {
            ref: '<?= getNameTableSinCod($subModMen); ?>Tab',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?= strtolower(getNameTableSinCod($subModMen)); ?>]'
        }
<?php }//if
endforeach; ?>
        //////////////////////// mayor que que tres //////////////////////////////////////
<?php
foreach ($listSubModMay as $subModMay) :
$submodel=getPath($subModMay);
$listSubCodigo = divideCodigo($submodel->tableName());
if (sizeof($listSubModMen) != 0 || sizeof($listSubModMM) != 0) {?>
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>lista]'
        },
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Window',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>windows]'
        },
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Form',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>form]'
        },
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Tab',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>]'
        },
<?php } else { ?> 
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Lista',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>lista]'
        },
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Window',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>windows]'
        },
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Form',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>form]'
        },
        {
            ref: '<?php echo getNameTableSinCod($subModMay); ?>Tab',
            selector: '[xtype=<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.tab.<?php echo strtolower(getNameTableSinCod($subModMay)); ?>]'
        }
<?php }//if
endforeach; ?>
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
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] button#buscar': {
                    click: this.showSearch
                },
                'grid[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.lista] menuitem#clear': {
                    click: this.clearSearch
                },
                'window[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.search.window] button#search': {
                    click: this.search
                },
                'window[xtype=<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.search.window] button#cancel': {
                    click: this.close
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    clearSearch: function( button, e, eOpts ) {
        var me = this,
            grid = me.get<?= getNameTableSinCod($className); ?>Lista(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.get<?= getNameTableSinCod($className); ?>SearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( '<?= $modulo; ?>.<?= strtolower(getNameTableSinCod($className)); ?>.search.window', {
                title: 'Buscar <?= getNameTableSinCod($className); ?>'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
    },
    
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.get<?= getNameTableSinCod($className); ?>SearchWindow(),
            form = win.down( 'form' ),
            grid = me.get<?= getNameTableSinCod($className); ?>Lista(),
            store = grid.getStore(),
            values = form.getValues(),
            filters=[];
        // loop over values to create filters
        Ext.Object.each( values, function( key, value, myself ) {
            if( !Ext.isEmpty( value ) ) {
                filters.push({
                    property: key,
                    value: value
                });
            }
        });
        // clear store filters
        store.clearFilter( true );
        store.filter( filters );
        // close window
        win.hide();
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
    	
        var me = this,
			grid = me.get<?php echo getNameTableSinCod($className); ?>Lista();
        me.bool<?= getNameTableSinCod($className); ?>Edit = 1;
        var record = grid.getSelectionModel().getSelection()[0];
        // show window
        me.showEditWindow(record);
    },


    add: function(button, e, eOpts) {
        var me = this,
                record = Ext.create('<?php echo $path;?>.model.<?= $modulo; ?>.<?php echo getNameTableSinCod($className); ?>');
        
        me.bool<?php echo getNameTableSinCod($className); ?>Edit = 0;
        
        // show window
        me.showEditWindow(record);
    },


    save: function(button, e, eOpts) {
        var me = this,
                grid = me.get<?php echo getNameTableSinCod($className); ?>Lista(),
                store = grid.getStore(),
                win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues(),
                callbacks;
        
        // Valida el formulario
        if ( form.isValid() )
        {
            if ( me.bool<?php echo getNameTableSinCod($className); ?>Edit === 0 && record.phantom )
            {
<?php foreach ($listSubModMay as $subModMay) :
        $submodel = getPath($subModMay);
        $listSubCodigo = divideCodigo($submodel->tableName());?>
                values['<?= $subModMay; ?>'] = me.saveTablaSecundaria(me.get<?= getNameTableSinCod($subModMay); ?>Lista());
<?php endforeach;?>
<?php foreach ($listSubModMen as $subModMen) :
        $submodel = getPath($subModMen);
        $listSubCodigo = divideCodigo($submodel->tableName());?>
                values['<?= $subModMen; ?>;'] = me.saveTablaSecundaria(me.get<?= getNameTableSinCod($subModMen); ?>Lista());
<?php endforeach;?>
            }
            else
            {
<?php foreach ($listSubModMay as $subModMay) :
        $submodel = getPath($subModMay);
        $listSubCodigo = divideCodigo($submodel->tableName());?>
        		me.getController('<?= $modulo; ?>.<?= getNameTableSinCod($subModMay); ?>').sincronizar();
<?php endforeach;?>
<?php foreach ($listSubModMen as $subModMen) :
        $submodel = getPath($subModMen);
        $listSubCodigo = divideCodigo($submodel->tableName());?>
        		me.getController('<?= $modulo; ?>.<?= getNameTableSinCod($subModMen); ?>').sincronizar();
<?php endforeach;?>
            }
			////////////////////////////////////////////////////////////////////
            // [INICIO] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            ////////////////////////////////////////////////////////////////////
<?php foreach ($listSubModMM as $subModMM) :
$submodel = getPath($subModMM);
$listA = $submodel->atributes();$pos = array_search("fk_".$pk[0], $listA);
$pos = $pos == 1? $pos-1:$pos+1; 
?>
            var array<?= getNameTableSinCod($subModMM); ?> = [];
            var arrayLength = values['<?= lcfirst($subModMM)."s";?>'].length;

            for (var i = 0; i < arrayLength; i++) {
                if ( values['<?= lcfirst($subModMM)."s";?>'][i] > 0 )
                {
                    var tmp<?= getNameTableSinCod($subModMM);?> = {
                        <?= $listA[$pos]; ?>: values['<?= lcfirst($subModMM)."s";?>'][i]
                    };
                    array<?= getNameTableSinCod($subModMM);?>.push(tmp<?= getNameTableSinCod($subModMM);?>); // push this to the array
                }
            }

            values['<?= lcfirst($subModMM)."s";?>'] = Ext.encode(array<?= getNameTableSinCod($subModMM);?>);
<?php endforeach;?>            
			/////////////////////////////////////////////////////////////////
            // [FIN] Procesamiento de tabla secundaria 3 (Muchos a Muchos)
            /////////////////////////////////////////////////////////////////

            record.set(values);

            if (record.dirty) {

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

                store.sync(callbacks);

                grid.getSelectionModel().clearSelections();
                //recordFamilia.set('familia_metodo_planificacion_familiar', fmpf_original);
            }
        }
        else
        {
            Ext.Msg.alert('Error de Validación', 'Por favor revise los datos del formulario.');
            return;
        }
    },
            

    close: function(button, e, eOpts) {
        var win = button.up('window');
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
                win = me.get<?php echo getNameTableSinCod($className); ?>Window(),
                isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if (!win) {
            win = Ext.widget('<?= $modulo; ?>.<?php echo strtolower(getNameTableSinCod($className)); ?>.edit.window', {
                title: isNew ? 'Añadir <?php echo getNameTableSinCod($className); ?>' : 'Editar <?php echo getNameTableSinCod($className); ?>'
            });
        }
        // show window
        win.show();
        win.doComponentLayout();
        // load form with data
        win.down('form').loadRecord(record);
    },

	saveTablaSecundaria: function ( grid ) {
        var store = grid.getStore(),
            records = store.getModifiedRecords();

        // Guarda registros de estado de una xxx nueva
        if (records.length > 0)
        {
            var array = [];

            for (var i = 0; i < records.length; i++) {
                var rec = records[i].getData();
                var tmp = rec;
                array.push(tmp);
            }

            var obj = Ext.encode(array);
            return obj;
        }
        else
        {
            return '';
        }
    },


    cancel: function(editor, context, eOpts) {
        // if the record is a phantom, remove from store and grid
        if (context.record.phantom) {
            context.store.remove(context.record);
        }
    }
});