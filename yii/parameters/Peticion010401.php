
**************************************** CREATE **************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/create?records={"id_peticion":null,"fk_id_proceso":1,"fk_id_usuario":1,"fk_id_oec":1,"fk_id_codigo_peticion":1,"titulo_peticion":"valor","fechahora_peticion":"2015-01-01 00:00:00","descripcion_peticion":"valor","codigo_acreditacion_peticion":"valor","fecha_creacion_peticion":"2015-01-01 00:00:00","necesidad_comite_peticion":1}&callback=Ext
**************************************** UPDATE **************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/update?records={"id_peticion":1,"fk_id_proceso":1,"fk_id_usuario":1,"fk_id_oec":1,"fk_id_codigo_peticion":1,"titulo_peticion":"valorxx","fechahora_peticion":"2015-01-01 00:00:00","descripcion_peticion":"valorxx","codigo_acreditacion_peticion":"valorxx","fecha_creacion_peticion":"2015-01-01 00:00:00","necesidad_comite_peticion":1}&callback=Ext
**************************************** DELETE **************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/delete?records={"id_peticion":1}&callback=Ext
**************************************** READ ****************************************

http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/?start=0&limit=3&callback=Ext
**************************************************************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/?start=0&limit=3&filter=[{"property":"id_peticion","value":1}]&callback=Ext
**************************************************************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/?start=0&limit=3&sort=[{"property":"id_peticion","direction":"asc"}]&callback=Ext
**************************************************************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/?start=0&limit=3&filter=[{"property":"id_peticion","value":1}]&sort=[{"property":"id_peticion","direction":"asc"}]&callback=Ext

***************************************** QUERY *********************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/peticion010401/?start=0&limit=3&query=[{"id_peticion":1}]&callback=Ext

