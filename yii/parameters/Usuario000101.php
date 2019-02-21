
**************************************** CREATE **************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/create?records={"id_usuario":null,"primer_nombre_usuario":"valor","segundo_nombre_usuario":"valor","apellido_paterno_usuario":"valor","apellido_materno_usuario":"valor","codigo_usuario":"valor","login_usuario":"valor","contrasena_usuario":"valor","sexo_usuario":"valor","telefono_usuario":"valor","celular_usuario":"valor","correo_usuario":"valor","direccion_usuario":"valor","imagen_usuario":"valor","observaciones_usuario":"valor","acceso_ip_usuario":"valor","fecha_creacion_usuario":"2015-01-01 00:00:00}&callback=Ext
**************************************** UPDATE **************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/update?records={"id_usuario":1,"primer_nombre_usuario":"valorxx","segundo_nombre_usuario":"valorxx","apellido_paterno_usuario":"valorxx","apellido_materno_usuario":"valorxx","codigo_usuario":"valorxx","login_usuario":"valorxx","contrasena_usuario":"valorxx","sexo_usuario":"valorxx","telefono_usuario":"valorxx","celular_usuario":"valorxx","correo_usuario":"valorxx","direccion_usuario":"valorxx","imagen_usuario":"valorxx","observaciones_usuario":"valorxx","acceso_ip_usuario":"valorxx","fecha_creacion_usuario":"2015-01-01 00:00:00"}&callback=Ext
**************************************** DELETE **************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/delete?records={"id_usuario":1}&callback=Ext
**************************************** READ ****************************************

http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/?start=0&limit=3&callback=Ext
**************************************************************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/?start=0&limit=3&filter=[{"property":"id_usuario","value":1}]&callback=Ext
**************************************************************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/?start=0&limit=3&sort=[{"property":"id_usuario","direction":"asc"}]&callback=Ext
**************************************************************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/?start=0&limit=3&filter=[{"property":"id_usuario","value":1}]&sort=[{"property":"id_usuario","direction":"asc"}]&callback=Ext

***************************************** QUERY *********************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/?start=0&limit=3&query=[{"id_usuario":1}]&callback=Ext

************************************** LISTAPRIVILEGIOSUSUARIO *********************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/listaPrivilegiosUsuario?start=0&limit=3&callback=Ext
***************************************** LOGIN *********************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/login?login_usuario=admin&contrasena_usuario=admin&callback=Ext

***************************************** LOGOUT *********************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/logout?callback=Ext

***************************************** INSERT *********************************************
http://192.168.100.103/ibmetrodta/yii/web/index.php/usuario000101/insert?callback=Ext
