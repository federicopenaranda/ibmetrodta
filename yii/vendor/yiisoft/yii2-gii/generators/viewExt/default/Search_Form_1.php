<?php 
require_once(__DIR__.'/../../Catequil.php');
$model = getPath($className);
$ListSearch= $model->getSearch();
$col = $tableSchema->columns;
#print_r($col);
$limit=0;
foreach($tableSchema->columns as $column):
	if(in_array($column->name,$ListSearch))
		$limit++;
endforeach;
#print_r($tableSchema);
$listAtrib=$model->attributeLabels();
?>
<?php if($generator->plataforma==1){ $subpath = str_replace("/var/www/html/","",Yii::getAlias('@app')); $path = str_replace("/yii","",$subpath);}
else {$path = str_replace("C:\\xampp\\htdocs\\yii2\\","",Yii::getAlias('@app')); }?>
Ext.define('<?= $path;?>.view.<?= $modulo; ?>.<?= getNameTableSinCod($className)?>.search.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.<?= strtolower($modulo); ?>.<?= strtolower(getNameTableSinCod($className))?>.search.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.slider.Multi',
        '<?= $path;?>.ux.form.field.RemoteComboBox',
        '<?= $path;?>.ux.form.field.plugin.ClearTrigger'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Criterios de Búsqueda',
                    collapsible: true,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
<script language="php">
$contCom=1;foreach($tableSchema->columns as $column):
	if(in_array($column->name,$ListSearch)){
			echo getFormatTipeSearch($column,$contCom,$limit,$listAtrib);
		$contCom++;
	}
endforeach;
</script>
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});