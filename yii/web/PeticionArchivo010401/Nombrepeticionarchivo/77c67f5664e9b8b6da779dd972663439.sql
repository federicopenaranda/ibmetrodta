-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 24, 2016 at 10:17 AM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `pike2`
--

-- --------------------------------------------------------

--
-- Table structure for table `calificacion_evaluacion_02_02_03`
--

CREATE TABLE IF NOT EXISTS `calificacion_evaluacion_02_02_03` (
  `id_calificacion_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_subcontratista_evaluacion` int(11) NOT NULL,
  `fk_id_proyecto_subcontratista` int(11) NOT NULL,
  `fk_id_disciplina_evaluacion` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `calificacion_evaluacion` smallint(6) NOT NULL COMMENT 'display',
  `fecha_actualizacion_calificacion_evaluacion` datetime DEFAULT NULL,
  `fecha_creacion_calificacion_evaluacion` datetime DEFAULT NULL,
  `trade_calificacion_evaluacion` varchar(200) DEFAULT NULL,
  `contacto_calificacion_evaluacion` varchar(200) DEFAULT NULL,
  `observaciones_calificacion_evaluacion` text,
  PRIMARY KEY (`id_calificacion_evaluacion`),
  UNIQUE KEY `restringe_disciplina_subc_eval` (`fk_id_subcontratista_evaluacion`,`fk_id_proyecto_subcontratista`),
  UNIQUE KEY `restringe_disciplina_evaluacion` (`fk_id_subcontratista_evaluacion`,`fk_id_disciplina_evaluacion`),
  KEY `fk_calificacion_evaluacion_disciplina_evaluacion1_idx` (`fk_id_disciplina_evaluacion`),
  KEY `fk_calificacion_evaluacion_subcontratista_evaluacion1_idx` (`fk_id_subcontratista_evaluacion`),
  KEY `fk_calificacion_evaluacion_proyecto_subcontratista1_idx` (`fk_id_proyecto_subcontratista`),
  KEY `fk_calificacion_evaluacion_02_02_03_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `calificacion_evaluacion_02_02_03`
--
DROP TRIGGER IF EXISTS `fecha_creacion_calificacion_evaluacion_TRIGGER1`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_calificacion_evaluacion_TRIGGER1` BEFORE INSERT ON `calificacion_evaluacion_02_02_03`
 FOR EACH ROW SET NEW.fecha_creacion_calificacion_evaluacion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `disciplina_evaluacion_02_02_04`
--

CREATE TABLE IF NOT EXISTS `disciplina_evaluacion_02_02_04` (
  `id_disciplina_evaluacion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_disciplina_evaluacion` varchar(150) NOT NULL COMMENT 'display',
  `estado_disciplina_evaluacion` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_disciplina_evaluacion`),
  UNIQUE KEY `nombre_disciplina_evaluacion_UNIQUE` (`nombre_disciplina_evaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `log_sistema_03_00_03`
--

CREATE TABLE IF NOT EXISTS `log_sistema_03_00_03` (
  `id_log_sistema` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_usuario` int(11) DEFAULT NULL COMMENT 'login',
  `fecha_hora_log_sistema` datetime NOT NULL,
  `accion_log_sistema` varchar(145) NOT NULL,
  `tabla_log_sistema` varchar(145) NOT NULL,
  `ip_registro_log_sistema` varchar(15) NOT NULL,
  PRIMARY KEY (`id_log_sistema`),
  KEY `fk_log_sistema_usuario_00_01_001_idx` (`fk_id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `log_sistema_03_00_03`
--

INSERT INTO `log_sistema_03_00_03` (`id_log_sistema`, `fk_id_usuario`, `fecha_hora_log_sistema`, `accion_log_sistema`, `tabla_log_sistema`, `ip_registro_log_sistema`) VALUES
(1, 1, '2016-02-18 18:04:05', 'create', 'usuario_00_01_01', '192.168.100.100'),
(2, 1, '2016-02-18 18:04:05', 'create', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(3, 1, '2016-02-24 07:44:44', 'create', 'proyecto_02_01_01', '192.168.100.100'),
(4, 1, '2016-02-24 07:44:55', 'delete', 'proyecto_02_01_01', '192.168.100.100'),
(5, 1, '2016-02-24 09:07:01', 'create', 'subcontratista_02_01_04', '192.168.100.100'),
(6, 1, '2016-02-24 09:23:38', 'create', 'tipo_proyecto_subcontratista_02_01_04', '192.168.100.100'),
(7, 1, '2016-02-24 09:23:54', 'create', 'tipo_proyecto_subcontratista_02_01_04', '192.168.100.100'),
(8, 1, '2016-02-24 09:24:00', 'update', 'tipo_proyecto_subcontratista_02_01_04', '192.168.100.100'),
(9, 1, '2016-02-24 09:24:42', 'create', 'proyecto_02_01_01', '192.168.100.100'),
(12, 1, '2016-02-24 09:37:50', 'create', 'subcontratista_02_01_04', '192.168.100.100');

-- --------------------------------------------------------

--
-- Table structure for table `proyecto_02_01_01`
--

CREATE TABLE IF NOT EXISTS `proyecto_02_01_01` (
  `id_proyecto` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proyecto',
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `nombre_proyecto` varchar(200) NOT NULL COMMENT 'search',
  `codigo_proyecto` varchar(100) NOT NULL COMMENT 'display;search',
  `estado_proyecto` tinyint(1) NOT NULL,
  `fecha_creacion_proyecto` datetime DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`),
  UNIQUE KEY `nombre_proyecto_UNIQUE` (`nombre_proyecto`),
  UNIQUE KEY `codigo_proyecto_UNIQUE` (`codigo_proyecto`),
  KEY `fk_proyecto_02_01_01_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `proyecto_02_01_01`
--

INSERT INTO `proyecto_02_01_01` (`id_proyecto`, `fk_id_usuario`, `nombre_proyecto`, `codigo_proyecto`, `estado_proyecto`, `fecha_creacion_proyecto`) VALUES
(2, 1, 'asef', '234', 1, '2016-02-24 09:24:42');

--
-- Triggers `proyecto_02_01_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_proyecto_TRIGGER`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_proyecto_TRIGGER` BEFORE INSERT ON `proyecto_02_01_01`
 FOR EACH ROW SET NEW.fecha_creacion_proyecto = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `proyecto_subcontratista_02_01_03`
--

CREATE TABLE IF NOT EXISTS `proyecto_subcontratista_02_01_03` (
  `id_proyecto_subcontratista` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proyecto',
  `fk_id_proyecto` int(11) NOT NULL,
  `fk_id_subcontratista` int(11) NOT NULL,
  `fk_id_tipo_proyecto_subcontratista` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `estado_proyecto_subcontratista` tinyint(1) NOT NULL COMMENT 'display',
  `fecha_creacion_proyecto_subcontratista` datetime DEFAULT NULL,
  PRIMARY KEY (`id_proyecto_subcontratista`),
  UNIQUE KEY `restringe_proyecto_subc_tipo` (`fk_id_proyecto`,`fk_id_subcontratista`),
  KEY `fk_proyecto_subcontratista_proyecto1_idx` (`fk_id_proyecto`),
  KEY `fk_proyecto_subcontratista_subcontratista1_idx` (`fk_id_subcontratista`),
  KEY `fk_proyecto_subcontratista_tipo_proyecto_subcontratista1_idx` (`fk_id_tipo_proyecto_subcontratista`),
  KEY `fk_proyecto_subcontratista_02_01_03_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `proyecto_subcontratista_02_01_03`
--
DROP TRIGGER IF EXISTS `fecha_creacion_proyecto_subcontratista`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_proyecto_subcontratista` BEFORE INSERT ON `proyecto_subcontratista_02_01_03`
 FOR EACH ROW SET NEW.fecha_creacion_proyecto_subcontratista = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `reporte_03_00_04`
--

CREATE TABLE IF NOT EXISTS `reporte_03_00_04` (
  `id_reporte` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_reporte` varchar(45) NOT NULL,
  `nombre_reporte` varchar(145) NOT NULL,
  `descripcion_reporte` text,
  `estado_reporte` tinyint(1) NOT NULL,
  `ruta_reporte` varchar(145) NOT NULL,
  `tipo_reporte` set('vista','pdf','excel') NOT NULL,
  PRIMARY KEY (`id_reporte`),
  UNIQUE KEY `nombre_reporte_UNIQUE` (`nombre_reporte`),
  UNIQUE KEY `codigo_reporte_UNIQUE` (`codigo_reporte`),
  UNIQUE KEY `ruta_reporte_UNIQUE` (`ruta_reporte`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `subcontratista_02_01_04`
--

CREATE TABLE IF NOT EXISTS `subcontratista_02_01_04` (
  `id_subcontratista` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `codigo_subcontratista` varchar(15) NOT NULL COMMENT 'display;search',
  `nombre_subcontratista` varchar(200) NOT NULL COMMENT 'search',
  `observacion_subcontratista` text,
  `fecha_creacion_subcontratista` datetime DEFAULT NULL,
  PRIMARY KEY (`id_subcontratista`),
  UNIQUE KEY `nombre_subcontratista_UNIQUE` (`nombre_subcontratista`),
  UNIQUE KEY `codigo_subcontratista_UNIQUE` (`codigo_subcontratista`),
  KEY `fk_subcontratista_02_01_04_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `subcontratista_02_01_04`
--

INSERT INTO `subcontratista_02_01_04` (`id_subcontratista`, `fk_id_usuario`, `codigo_subcontratista`, `nombre_subcontratista`, `observacion_subcontratista`, `fecha_creacion_subcontratista`) VALUES
(1, 1, 'asdf', 'asdf', 'asdf', '2016-02-24 09:07:01'),
(2, 1, 'grgergerg', 'sdfgsdfgsfdg', 'dffff', '2016-02-24 09:37:50');

--
-- Triggers `subcontratista_02_01_04`
--
DROP TRIGGER IF EXISTS `fecha_creacion_subcontratista_TRIGGER`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_subcontratista_TRIGGER` BEFORE INSERT ON `subcontratista_02_01_04`
 FOR EACH ROW SET NEW.fecha_creacion_subcontratista = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `subcontratista_evaluacion_02_02_01`
--

CREATE TABLE IF NOT EXISTS `subcontratista_evaluacion_02_02_01` (
  `id_subcontratista_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_proyecto` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `fecha_subcontratista_evaluacion` date NOT NULL COMMENT 'display;search',
  `ano_subcontratista_evaluacion` int(11) NOT NULL COMMENT 'search;no_read',
  `mes_subcontratista_evaluacion` int(11) NOT NULL COMMENT 'search;no_read',
  `observaciones_subcontratista_evaluacion` text,
  `fecha_creacion_subcontratista_evaluacion` datetime DEFAULT NULL,
  `fecha_actualizacion_subcontratista_evaluacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_subcontratista_evaluacion`),
  UNIQUE KEY `mes_ano_subcontratista_evaluacion_UNIQUE` (`fk_id_proyecto`,`fecha_subcontratista_evaluacion`,`ano_subcontratista_evaluacion`,`mes_subcontratista_evaluacion`),
  KEY `fk_subcontratista_evaluacion_proyecto1_idx` (`fk_id_proyecto`),
  KEY `fk_subcontratista_evaluacion_02_02_01_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `subcontratista_evaluacion_02_02_01`
--
DROP TRIGGER IF EXISTS `fecha_actualizacion_subcontratista_evaluacion`;
DELIMITER //
CREATE TRIGGER `fecha_actualizacion_subcontratista_evaluacion` BEFORE UPDATE ON `subcontratista_evaluacion_02_02_01`
 FOR EACH ROW SET NEW.fecha_actualizacion_subcontratista_evaluacion = NOW(),
NEW.ano_subcontratista_evaluacion = concat(year(NEW.fecha_subcontratista_evaluacion),'-',MONTH(NEW.fecha_subcontratista_evaluacion))
//
DELIMITER ;
DROP TRIGGER IF EXISTS `fecha_creacion_subcontratista_evaluacion`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_subcontratista_evaluacion` BEFORE INSERT ON `subcontratista_evaluacion_02_02_01`
 FOR EACH ROW SET NEW.fecha_creacion_subcontratista_evaluacion = NOW(),
NEW.ano_subcontratista_evaluacion = concat(year(NEW.fecha_subcontratista_evaluacion),'-',MONTH(NEW.fecha_subcontratista_evaluacion))
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `tipo_proyecto_subcontratista_02_01_04`
--

CREATE TABLE IF NOT EXISTS `tipo_proyecto_subcontratista_02_01_04` (
  `id_tipo_proyecto_subcontratista` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_tipo_proyecto_subcontratista` varchar(45) NOT NULL COMMENT 'display',
  `descripcion_tipo_proyecto_subcontratista` text,
  PRIMARY KEY (`id_tipo_proyecto_subcontratista`),
  UNIQUE KEY `nombre_tipo_proyecto_subcontratista_UNIQUE` (`nombre_tipo_proyecto_subcontratista`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tipo_proyecto_subcontratista_02_01_04`
--

INSERT INTO `tipo_proyecto_subcontratista_02_01_04` (`id_tipo_proyecto_subcontratista`, `nombre_tipo_proyecto_subcontratista`, `descripcion_tipo_proyecto_subcontratista`) VALUES
(1, 'S', 'Supplier'),
(2, 'P', 'Project');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_00_01_01`
--

CREATE TABLE IF NOT EXISTS `usuario_00_01_01` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT COMMENT 'usuario',
  `primer_nombre_usuario` varchar(145) NOT NULL COMMENT 'search',
  `segundo_nombre_usuario` varchar(145) DEFAULT NULL COMMENT 'search',
  `apellido_paterno_usuario` varchar(145) NOT NULL COMMENT 'search',
  `apellido_materno_usuario` varchar(145) DEFAULT NULL COMMENT 'search',
  `codigo_usuario` varchar(45) NOT NULL COMMENT 'search;display',
  `login_usuario` varchar(45) NOT NULL,
  `contrasena_usuario` varchar(45) NOT NULL COMMENT 'no_read',
  `fecha_nacimiento_usuario` date DEFAULT NULL,
  `sexo_usuario` set('f','m') NOT NULL,
  `telefono_usuario` varchar(45) DEFAULT NULL,
  `celular_usuario` varchar(45) DEFAULT NULL,
  `correo_usuario` varchar(245) NOT NULL,
  `direccion_usuario` varchar(45) DEFAULT NULL,
  `imagen_usuario` text,
  `observaciones_usuario` varchar(45) DEFAULT NULL,
  `acceso_ip_usuario` varchar(15) DEFAULT NULL,
  `fecha_creacion_usuario` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `login_usuario_UNIQUE` (`login_usuario`),
  UNIQUE KEY `codigo_usuario_UNIQUE` (`codigo_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `usuario_00_01_01`
--

INSERT INTO `usuario_00_01_01` (`id_usuario`, `primer_nombre_usuario`, `segundo_nombre_usuario`, `apellido_paterno_usuario`, `apellido_materno_usuario`, `codigo_usuario`, `login_usuario`, `contrasena_usuario`, `fecha_nacimiento_usuario`, `sexo_usuario`, `telefono_usuario`, `celular_usuario`, `correo_usuario`, `direccion_usuario`, `imagen_usuario`, `observaciones_usuario`, `acceso_ip_usuario`, `fecha_creacion_usuario`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', '2016-02-18', 'm', 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', '', '2016-02-18 18:00:26'),
(2, 'Fede', '', 'Peñaranda', '', 'rfsdaf', 'fede', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2016-02-11', 'm', '234234', '3241324', 'dsaf@dccomcom.com', 'fadsf', '', 'dsaf', '', '2016-02-18 18:04:05');

--
-- Triggers `usuario_00_01_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual1`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual1` BEFORE INSERT ON `usuario_00_01_01`
 FOR EACH ROW SET NEW.fecha_creacion_usuario = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `usuario_privilegio_00_00_04`
--

CREATE TABLE IF NOT EXISTS `usuario_privilegio_00_00_04` (
  `id_usuario_privilegio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_privilegio_usuario_privilegio` varchar(145) NOT NULL COMMENT 'displayField',
  `accion_usuario_privilegio` varchar(145) NOT NULL,
  `opciones_usuario_privilegio` varchar(145) DEFAULT NULL,
  `funcion_usuario_privilegio` varchar(145) DEFAULT NULL,
  `descripcion_usuario_privilegio` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`id_usuario_privilegio`),
  UNIQUE KEY `nombre_privilegio_usuario_privilegio_UNIQUE` (`nombre_privilegio_usuario_privilegio`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=61 ;

--
-- Dumping data for table `usuario_privilegio_00_00_04`
--

INSERT INTO `usuario_privilegio_00_00_04` (`id_usuario_privilegio`, `nombre_privilegio_usuario_privilegio`, `accion_usuario_privilegio`, `opciones_usuario_privilegio`, `funcion_usuario_privilegio`, `descripcion_usuario_privilegio`) VALUES
(1, 'crea CalificacionEvaluacion020203', 'create', 'controlador', 'CalificacionEvaluacion020203', 'automatico'),
(2, 'lee CalificacionEvaluacion020203', 'index', 'controlador', 'CalificacionEvaluacion020203', 'automatico'),
(3, 'actualiza CalificacionEvaluacion020203', 'update', 'controlador', 'CalificacionEvaluacion020203', 'automatico'),
(4, 'elimina CalificacionEvaluacion020203', 'delete', 'controlador', 'CalificacionEvaluacion020203', 'automatico'),
(5, 'crea DisciplinaEvaluacion020204', 'create', 'controlador', 'DisciplinaEvaluacion020204', 'automatico'),
(6, 'lee DisciplinaEvaluacion020204', 'index', 'controlador', 'DisciplinaEvaluacion020204', 'automatico'),
(7, 'actualiza DisciplinaEvaluacion020204', 'update', 'controlador', 'DisciplinaEvaluacion020204', 'automatico'),
(8, 'elimina DisciplinaEvaluacion020204', 'delete', 'controlador', 'DisciplinaEvaluacion020204', 'automatico'),
(9, 'crea LogSistema030003', 'create', 'controlador', 'LogSistema030003', 'automatico'),
(10, 'lee LogSistema030003', 'index', 'controlador', 'LogSistema030003', 'automatico'),
(11, 'actualiza LogSistema030003', 'update', 'controlador', 'LogSistema030003', 'automatico'),
(12, 'elimina LogSistema030003', 'delete', 'controlador', 'LogSistema030003', 'automatico'),
(13, 'crea Proyecto020101', 'create', 'controlador', 'Proyecto020101', 'automatico'),
(14, 'lee Proyecto020101', 'index', 'controlador', 'Proyecto020101', 'automatico'),
(15, 'actualiza Proyecto020101', 'update', 'controlador', 'Proyecto020101', 'automatico'),
(16, 'elimina Proyecto020101', 'delete', 'controlador', 'Proyecto020101', 'automatico'),
(17, 'crea ProyectoSubcontratista020103', 'create', 'controlador', 'ProyectoSubcontratista020103', 'automatico'),
(18, 'lee ProyectoSubcontratista020103', 'index', 'controlador', 'ProyectoSubcontratista020103', 'automatico'),
(19, 'actualiza ProyectoSubcontratista020103', 'update', 'controlador', 'ProyectoSubcontratista020103', 'automatico'),
(20, 'elimina ProyectoSubcontratista020103', 'delete', 'controlador', 'ProyectoSubcontratista020103', 'automatico'),
(21, 'crea Reporte030004', 'create', 'controlador', 'Reporte030004', 'automatico'),
(22, 'lee Reporte030004', 'index', 'controlador', 'Reporte030004', 'automatico'),
(23, 'actualiza Reporte030004', 'update', 'controlador', 'Reporte030004', 'automatico'),
(24, 'elimina Reporte030004', 'delete', 'controlador', 'Reporte030004', 'automatico'),
(25, 'crea Subcontratista020104', 'create', 'controlador', 'Subcontratista020104', 'automatico'),
(26, 'lee Subcontratista020104', 'index', 'controlador', 'Subcontratista020104', 'automatico'),
(27, 'actualiza Subcontratista020104', 'update', 'controlador', 'Subcontratista020104', 'automatico'),
(28, 'elimina Subcontratista020104', 'delete', 'controlador', 'Subcontratista020104', 'automatico'),
(29, 'crea SubcontratistaEvaluacion020201', 'create', 'controlador', 'SubcontratistaEvaluacion020201', 'automatico'),
(30, 'lee SubcontratistaEvaluacion020201', 'index', 'controlador', 'SubcontratistaEvaluacion020201', 'automatico'),
(31, 'actualiza SubcontratistaEvaluacion020201', 'update', 'controlador', 'SubcontratistaEvaluacion020201', 'automatico'),
(32, 'elimina SubcontratistaEvaluacion020201', 'delete', 'controlador', 'SubcontratistaEvaluacion020201', 'automatico'),
(33, 'crea TipoProyectoSubcontratista020104', 'create', 'controlador', 'TipoProyectoSubcontratista020104', 'automatico'),
(34, 'lee TipoProyectoSubcontratista020104', 'index', 'controlador', 'TipoProyectoSubcontratista020104', 'automatico'),
(35, 'actualiza TipoProyectoSubcontratista020104', 'update', 'controlador', 'TipoProyectoSubcontratista020104', 'automatico'),
(36, 'elimina TipoProyectoSubcontratista020104', 'delete', 'controlador', 'TipoProyectoSubcontratista020104', 'automatico'),
(37, 'crea Usuario000101', 'create', 'controlador', 'Usuario000101', 'automatico'),
(38, 'lee Usuario000101', 'index', 'controlador', 'Usuario000101', 'automatico'),
(39, 'actualiza Usuario000101', 'update', 'controlador', 'Usuario000101', 'automatico'),
(40, 'elimina Usuario000101', 'delete', 'controlador', 'Usuario000101', 'automatico'),
(41, 'crea UsuarioPrivilegio000004', 'create', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(42, 'lee UsuarioPrivilegio000004', 'index', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(43, 'actualiza UsuarioPrivilegio000004', 'update', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(44, 'elimina UsuarioPrivilegio000004', 'delete', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(45, 'crea UsuarioProyecto000102', 'create', 'controlador', 'UsuarioProyecto000102', 'automatico'),
(46, 'lee UsuarioProyecto000102', 'index', 'controlador', 'UsuarioProyecto000102', 'automatico'),
(47, 'actualiza UsuarioProyecto000102', 'update', 'controlador', 'UsuarioProyecto000102', 'automatico'),
(48, 'elimina UsuarioProyecto000102', 'delete', 'controlador', 'UsuarioProyecto000102', 'automatico'),
(49, 'crea UsuarioTipo000201', 'create', 'controlador', 'UsuarioTipo000201', 'automatico'),
(50, 'lee UsuarioTipo000201', 'index', 'controlador', 'UsuarioTipo000201', 'automatico'),
(51, 'actualiza UsuarioTipo000201', 'update', 'controlador', 'UsuarioTipo000201', 'automatico'),
(52, 'elimina UsuarioTipo000201', 'delete', 'controlador', 'UsuarioTipo000201', 'automatico'),
(53, 'crea UsuarioTipoPrivilegio000202', 'create', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(54, 'lee UsuarioTipoPrivilegio000202', 'index', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(55, 'actualiza UsuarioTipoPrivilegio000202', 'update', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(56, 'elimina UsuarioTipoPrivilegio000202', 'delete', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(57, 'crea UsuarioTipoUsuario000102', 'create', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(58, 'lee UsuarioTipoUsuario000102', 'index', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(59, 'actualiza UsuarioTipoUsuario000102', 'update', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(60, 'elimina UsuarioTipoUsuario000102', 'delete', 'controlador', 'UsuarioTipoUsuario000102', 'automatico');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_proyecto_00_01_02`
--

CREATE TABLE IF NOT EXISTS `usuario_proyecto_00_01_02` (
  `fk_id_usuario` int(11) NOT NULL,
  `fk_id_proyecto` int(11) NOT NULL,
  PRIMARY KEY (`fk_id_usuario`,`fk_id_proyecto`),
  KEY `fk_usuario_proyecto_usuario_00_01_011_idx` (`fk_id_usuario`),
  KEY `fk_usuario_proyecto_proyecto_02_01_011_idx` (`fk_id_proyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usuario_tipo_00_02_01`
--

CREATE TABLE IF NOT EXISTS `usuario_tipo_00_02_01` (
  `id_usuario_tipo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'usuario',
  `nombre_usuario_tipo` varchar(145) NOT NULL COMMENT 'displayField',
  `descripcion_usuario_tipo` text,
  PRIMARY KEY (`id_usuario_tipo`),
  UNIQUE KEY `nombre_usuario_tipo_UNIQUE` (`nombre_usuario_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `usuario_tipo_00_02_01`
--

INSERT INTO `usuario_tipo_00_02_01` (`id_usuario_tipo`, `nombre_usuario_tipo`, `descripcion_usuario_tipo`) VALUES
(1, 'admin', 'administrador');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_tipo_privilegio_00_02_02`
--

CREATE TABLE IF NOT EXISTS `usuario_tipo_privilegio_00_02_02` (
  `fk_id_usuario_tipo` int(11) NOT NULL COMMENT 'main',
  `fk_id_usuario_privilegio` int(11) NOT NULL,
  PRIMARY KEY (`fk_id_usuario_tipo`,`fk_id_usuario_privilegio`),
  UNIQUE KEY `unico_usuario_tipo_privilegio` (`fk_id_usuario_tipo`,`fk_id_usuario_privilegio`),
  KEY `fk_usuario_tipo_privilegio_usuario_tipo1_idx` (`fk_id_usuario_tipo`),
  KEY `fk_usuario_tipo_privilegio_usuario_privilegio1_idx` (`fk_id_usuario_privilegio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario_tipo_privilegio_00_02_02`
--

INSERT INTO `usuario_tipo_privilegio_00_02_02` (`fk_id_usuario_tipo`, `fk_id_usuario_privilegio`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 23),
(1, 24),
(1, 25),
(1, 26),
(1, 27),
(1, 28),
(1, 29),
(1, 30),
(1, 31),
(1, 32),
(1, 33),
(1, 34),
(1, 35),
(1, 36),
(1, 37),
(1, 38),
(1, 39),
(1, 40),
(1, 41),
(1, 42),
(1, 43),
(1, 44),
(1, 45),
(1, 46),
(1, 47),
(1, 48),
(1, 49),
(1, 50),
(1, 51),
(1, 52),
(1, 53),
(1, 54),
(1, 55),
(1, 56),
(1, 57),
(1, 58),
(1, 59),
(1, 60);

-- --------------------------------------------------------

--
-- Table structure for table `usuario_tipo_usuario_00_01_02`
--

CREATE TABLE IF NOT EXISTS `usuario_tipo_usuario_00_01_02` (
  `fk_id_usuario_tipo` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`fk_id_usuario_tipo`,`fk_id_usuario`),
  UNIQUE KEY `unico_usuario_tipo_usuario` (`fk_id_usuario_tipo`,`fk_id_usuario`),
  KEY `fk_usuario_tipo_usuario_usuario_tipo1_idx` (`fk_id_usuario_tipo`),
  KEY `fk_usuario_tipo_usuario_usuario1_idx` (`fk_id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario_tipo_usuario_00_01_02`
--

INSERT INTO `usuario_tipo_usuario_00_01_02` (`fk_id_usuario_tipo`, `fk_id_usuario`) VALUES
(1, 1),
(1, 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `calificacion_evaluacion_02_02_03`
--
ALTER TABLE `calificacion_evaluacion_02_02_03`
  ADD CONSTRAINT `fk_calificacion_evaluacion_02_02_03_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_calificacion_evaluacion_disciplina_evaluacion1` FOREIGN KEY (`fk_id_disciplina_evaluacion`) REFERENCES `disciplina_evaluacion_02_02_04` (`id_disciplina_evaluacion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_calificacion_evaluacion_proyecto_subcontratista1` FOREIGN KEY (`fk_id_proyecto_subcontratista`) REFERENCES `proyecto_subcontratista_02_01_03` (`id_proyecto_subcontratista`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_calificacion_evaluacion_subcontratista_evaluacion1` FOREIGN KEY (`fk_id_subcontratista_evaluacion`) REFERENCES `subcontratista_evaluacion_02_02_01` (`id_subcontratista_evaluacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `log_sistema_03_00_03`
--
ALTER TABLE `log_sistema_03_00_03`
  ADD CONSTRAINT `fk_log_sistema_usuario_00_01_001` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proyecto_02_01_01`
--
ALTER TABLE `proyecto_02_01_01`
  ADD CONSTRAINT `fk_proyecto_02_01_01_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `proyecto_subcontratista_02_01_03`
--
ALTER TABLE `proyecto_subcontratista_02_01_03`
  ADD CONSTRAINT `fk_proyecto_subcontratista_02_01_03_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_proyecto_subcontratista_proyecto1` FOREIGN KEY (`fk_id_proyecto`) REFERENCES `proyecto_02_01_01` (`id_proyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_proyecto_subcontratista_subcontratista1` FOREIGN KEY (`fk_id_subcontratista`) REFERENCES `subcontratista_02_01_04` (`id_subcontratista`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_proyecto_subcontratista_tipo_proyecto_subcontratista1` FOREIGN KEY (`fk_id_tipo_proyecto_subcontratista`) REFERENCES `tipo_proyecto_subcontratista_02_01_04` (`id_tipo_proyecto_subcontratista`) ON UPDATE CASCADE;

--
-- Constraints for table `subcontratista_02_01_04`
--
ALTER TABLE `subcontratista_02_01_04`
  ADD CONSTRAINT `fk_subcontratista_02_01_04_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `subcontratista_evaluacion_02_02_01`
--
ALTER TABLE `subcontratista_evaluacion_02_02_01`
  ADD CONSTRAINT `fk_subcontratista_evaluacion_02_02_01_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_subcontratista_evaluacion_proyecto1` FOREIGN KEY (`fk_id_proyecto`) REFERENCES `proyecto_02_01_01` (`id_proyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `usuario_proyecto_00_01_02`
--
ALTER TABLE `usuario_proyecto_00_01_02`
  ADD CONSTRAINT `fk_usuario_proyecto_proyecto_02_01_011` FOREIGN KEY (`fk_id_proyecto`) REFERENCES `proyecto_02_01_01` (`id_proyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_proyecto_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `usuario_tipo_privilegio_00_02_02`
--
ALTER TABLE `usuario_tipo_privilegio_00_02_02`
  ADD CONSTRAINT `fk_usuario_tipo_privilegio_usuario_privilegio1` FOREIGN KEY (`fk_id_usuario_privilegio`) REFERENCES `usuario_privilegio_00_00_04` (`id_usuario_privilegio`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuario_tipo_privilegio_usuario_tipo1` FOREIGN KEY (`fk_id_usuario_tipo`) REFERENCES `usuario_tipo_00_02_01` (`id_usuario_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuario_tipo_usuario_00_01_02`
--
ALTER TABLE `usuario_tipo_usuario_00_01_02`
  ADD CONSTRAINT `fk_usuario_tipo_usuario_usuario1` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuario_tipo_usuario_usuario_tipo1` FOREIGN KEY (`fk_id_usuario_tipo`) REFERENCES `usuario_tipo_00_02_01` (`id_usuario_tipo`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
