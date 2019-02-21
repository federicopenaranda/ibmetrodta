-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 11, 2016 at 10:17 AM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ibmetrodta`
--

-- --------------------------------------------------------

--
-- Table structure for table `accion_01_02_01`
--

CREATE TABLE IF NOT EXISTS `accion_01_02_01` (
  `id_accion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `fk_id_accion_tipo` int(11) NOT NULL,
  `fk_id_proceso` int(11) NOT NULL,
  `nombre_accion` varchar(145) NOT NULL COMMENT 'display',
  `descripcion_accion` varchar(145) DEFAULT NULL,
  `codigo_sub_accion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_accion`),
  UNIQUE KEY `nombre_accion_UNIQUE` (`nombre_accion`),
  KEY `fk_accion_accion_tipo1_idx` (`fk_id_accion_tipo`),
  KEY `fk_accion_proceso1_idx` (`fk_id_proceso`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=47 ;

--
-- Dumping data for table `accion_01_02_01`
--

INSERT INTO `accion_01_02_01` (`id_accion`, `fk_id_accion_tipo`, `fk_id_proceso`, `nombre_accion`, `descripcion_accion`, `codigo_sub_accion`) VALUES
(1, 1, 1, 'guardar-formulario-002', NULL, NULL),
(2, 1, 1, 'carga-cotizacion-pertinencia-alcance', NULL, NULL),
(3, 1, 1, 'carga-factura-pertinencia-alcance', NULL, NULL),
(4, 1, 1, 'verifica-factura-pertinencia-alcance', NULL, NULL),
(5, 1, 1, 'aprueba-da-cotizacion-pertinencia-alcance', NULL, NULL),
(6, 1, 1, 'aprobacion-pertinencia-consejo', NULL, NULL),
(7, 1, 1, 'carga-acta-consejo', NULL, NULL),
(8, 1, 1, 'carga-cotizacion-apertura-expediente', NULL, NULL),
(9, 1, 1, 'carga-factura-apertura-expediente', NULL, NULL),
(10, 1, 1, 'verifica-factura-apertura-expediente', NULL, NULL),
(11, 1, 1, 'aprueba-da-cotizacion-apertura-expediente', NULL, NULL),
(12, 1, 1, 'termina-carga-formularios-50s', NULL, NULL),
(13, 1, 1, 'termina-carga-archivos-base', NULL, NULL),
(14, 1, 1, 'carga-cotizacion-revision-documental', NULL, NULL),
(15, 1, 1, 'carga-factura-revision-documental', NULL, NULL),
(16, 1, 1, 'verifica-factura-revision-documental', NULL, NULL),
(17, 1, 1, 'aprueba-da-cotizacion-revision-documental', NULL, NULL),
(18, 1, 1, 'ra-aprueba-documentacion', NULL, NULL),
(19, 1, 1, 'finaliza-designacion-equipo-evaluador', NULL, NULL),
(20, 1, 1, 'aprueba-oec-designacion-equipo-evaluador', NULL, NULL),
(21, 1, 1, 'carga-cotizacion-evaluacion', NULL, NULL),
(22, 1, 1, 'carga-factura-evaluacion', NULL, NULL),
(23, 1, 1, 'verifica-factura-evaluacion', NULL, NULL),
(24, 1, 1, 'aprueba-da-cotizacion-evaluacion', NULL, NULL),
(25, 1, 1, 'aprueba-ee-documentacion', NULL, NULL),
(26, 1, 1, 'finaliza-oec-carga-archivos-adicionales', NULL, NULL),
(27, 1, 1, 'termina-carga-formulario-024', NULL, NULL),
(28, 1, 1, 'termina-carga-formulario-011-012', NULL, NULL),
(29, 1, 1, 'termina-carga-formulario-038', NULL, NULL),
(30, 1, 1, 'termina-carga-formulario-031-034-046', NULL, NULL),
(31, 1, 1, 'termina-carga-formulario-033-106', NULL, NULL),
(32, 1, 1, 'termina-carga-archivos-plan-accion', NULL, NULL),
(33, 1, 1, 'aprueba-el-archivos-plan-accion', NULL, NULL),
(34, 1, 1, 'termina-carga-formulario-050', NULL, NULL),
(35, 1, 1, 'aprobacion-ra-tramite-comite-tecnico', NULL, NULL),
(36, 1, 1, 'carga-acta-comite-tecnico', NULL, NULL),
(37, 1, 1, 'termina-carga-formulario-026', NULL, NULL),
(38, 1, 1, 'certificado-da-aprobado', NULL, NULL),
(39, 1, 1, 'aprobar-tramite-consejo', NULL, NULL),
(40, 1, 1, 'cargar-acta-consejo', NULL, NULL),
(41, 1, 1, 'carga-cotizacion-concesion-mantenimiento', NULL, NULL),
(42, 1, 1, 'carga-factura-concesion-mantenimiento', NULL, NULL),
(43, 1, 1, 'verifica-factura-concesion-mantenimiento', NULL, NULL),
(44, 1, 1, 'aprueba-da-cotizacion-concesion-mantenimiento', NULL, NULL),
(45, 1, 1, 'aprobacion-da-tramite-comite-tecnico', NULL, NULL),
(46, 1, 1, 'carga-informe-consejo', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `accion_transicion_01_02_02`
--

CREATE TABLE IF NOT EXISTS `accion_transicion_01_02_02` (
  `fk_id_transicion` int(11) NOT NULL COMMENT 'main',
  `fk_id_accion` int(11) NOT NULL,
  PRIMARY KEY (`fk_id_accion`,`fk_id_transicion`),
  KEY `fk_accion_transicion_transicion1_idx` (`fk_id_transicion`),
  KEY `fk_accion_transicion_accion1_idx` (`fk_id_accion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accion_transicion_01_02_02`
--

INSERT INTO `accion_transicion_01_02_02` (`fk_id_transicion`, `fk_id_accion`) VALUES
(1, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(3, 46),
(4, 8),
(4, 9),
(4, 10),
(5, 12),
(6, 13),
(7, 14),
(7, 15),
(7, 16),
(8, 18),
(9, 19),
(9, 20),
(10, 21),
(10, 22),
(10, 23),
(11, 25),
(11, 26),
(12, 27),
(13, 28),
(13, 29),
(13, 30),
(13, 31),
(14, 32),
(14, 33),
(15, 34),
(16, 35),
(16, 36),
(16, 45),
(17, 37),
(18, 38),
(19, 39),
(19, 40),
(20, 41),
(20, 42),
(20, 43),
(20, 44);

-- --------------------------------------------------------

--
-- Table structure for table `certificado_04_14_01`
--

CREATE TABLE IF NOT EXISTS `certificado_04_14_01` (
  `id_certificado` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `fecha_acreditacion_inicial_certificado` date DEFAULT NULL,
  `fecha_validez_certificado` date DEFAULT NULL,
  `texto1_certificado` text,
  `escaneado_certificado` varchar(200) DEFAULT NULL,
  `fecha_ultima_generacion_certificado` datetime DEFAULT NULL,
  `fecha_creacion_certificado` datetime DEFAULT NULL,
  `estado_certificado` set('aprobado','observado') DEFAULT NULL,
  PRIMARY KEY (`id_certificado`),
  KEY `fk_certificado_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `certificado_04_14_01`
--

INSERT INTO `certificado_04_14_01` (`id_certificado`, `fk_id_peticion`, `fecha_acreditacion_inicial_certificado`, `fecha_validez_certificado`, `texto1_certificado`, `escaneado_certificado`, `fecha_ultima_generacion_certificado`, `fecha_creacion_certificado`, `estado_certificado`) VALUES
(1, 3, '2016-01-06', '2016-01-08', 'jkhljljklhuhl', '', '2016-01-02 00:00:00', '2016-01-08 13:45:59', 'aprobado');

--
-- Triggers `certificado_04_14_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual20`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual20` BEFORE INSERT ON `certificado_04_14_01`
 FOR EACH ROW SET NEW.fecha_creacion_certificado = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `codigo_peticion_01_04_04`
--

CREATE TABLE IF NOT EXISTS `codigo_peticion_01_04_04` (
  `id_codigo_peticion` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_oec` int(11) NOT NULL,
  `codigo_peticion` varchar(45) NOT NULL COMMENT 'display',
  `correlativo_codigo_peticion` int(11) NOT NULL,
  PRIMARY KEY (`id_codigo_peticion`),
  UNIQUE KEY `codigo_peticion_UNIQUE` (`codigo_peticion`),
  UNIQUE KEY `correlativo_codigo_peticion_UNIQUE` (`correlativo_codigo_peticion`),
  KEY `fk_codigo_peticion_oec_02_00_011_idx` (`fk_id_oec`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `codigo_peticion_01_04_04`
--

INSERT INTO `codigo_peticion_01_04_04` (`id_codigo_peticion`, `fk_id_oec`, `codigo_peticion`, `correlativo_codigo_peticion`) VALUES
(1, 1, 'DTA-TRAM-001', 1),
(2, 1, 'DTA-TRAM-002', 2);

-- --------------------------------------------------------

--
-- Table structure for table `equipo_eval_04_08_03`
--

CREATE TABLE IF NOT EXISTS `equipo_eval_04_08_03` (
  `id_equipo_eval` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_eval_tecnica` int(11) NOT NULL,
  `nombre_equipo_eval` text,
  `disponibilidad_equipo_eval` text,
  `programa_calibracion_equipo_eval` text,
  `identificacion_individual_equipo_eval` text,
  `registros_equipo_eval` text,
  `verificaciones_intermedias_equipo_eval` text,
  `proteccion_equipo_eval` text,
  PRIMARY KEY (`id_equipo_eval`),
  KEY `fk_equipo_eval_eval_tecnica1_idx` (`fk_id_eval_tecnica`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `equipo_peticion_01_07_01`
--

CREATE TABLE IF NOT EXISTS `equipo_peticion_01_07_01` (
  `id_equipo_peticion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso;display',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `cantidad_horas_equipo_peticion` int(11) NOT NULL,
  `observaciones_equipo_peticion` text,
  `estado_equipo_peticion` set('n','e','a','r') NOT NULL COMMENT 'n = Nuevo ; e = Editado ; a = Aprobado ; r = Rechazado',
  PRIMARY KEY (`id_equipo_peticion`),
  KEY `fk_equipo_peticion_peticion1_idx` (`fk_id_peticion`),
  KEY `fk_equipo_peticion_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `equipo_peticion_01_07_01`
--

INSERT INTO `equipo_peticion_01_07_01` (`id_equipo_peticion`, `fk_id_peticion`, `fk_id_usuario`, `cantidad_horas_equipo_peticion`, `observaciones_equipo_peticion`, `estado_equipo_peticion`) VALUES
(3, 3, 2, 20, 'sadfsedf', 'n'),
(4, 3, 5, 20, 'dsfsd', 'n'),
(5, 3, 3, 8, 'sdf', 'n'),
(6, 3, 7, 20, 's', 'n'),
(7, 5, 9, 12, NULL, 'a');

-- --------------------------------------------------------

--
-- Table structure for table `estado_01_06_01`
--

CREATE TABLE IF NOT EXISTS `estado_01_06_01` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `fk_id_estado_tipo` int(11) NOT NULL,
  `fk_id_proceso` int(11) NOT NULL,
  `nombre_estado` varchar(145) NOT NULL COMMENT 'display;search',
  `descripcion_estado` text,
  PRIMARY KEY (`id_estado`),
  UNIQUE KEY `nombre_estado_UNIQUE` (`nombre_estado`),
  KEY `fk_estado_proceso_estado1_idx` (`fk_id_estado_tipo`),
  KEY `fk_estado_proceso1_idx` (`fk_id_proceso`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `estado_01_06_01`
--

INSERT INTO `estado_01_06_01` (`id_estado`, `fk_id_estado_tipo`, `fk_id_proceso`, `nombre_estado`, `descripcion_estado`) VALUES
(1, 1, 1, 'tramite-acreditacion-iniciado', NULL),
(2, 2, 1, 'formulario-002-llenado', NULL),
(3, 2, 1, 'cotizacion-pertinencia-aprobada', NULL),
(4, 2, 1, 'pertinencia-aprobada-consejo', NULL),
(5, 2, 1, 'cotizacion-apertura-expediente-aprobada', NULL),
(6, 2, 1, 'formularios-50s-llenados', NULL),
(7, 2, 1, 'carga-archivos-base-terminada', NULL),
(8, 2, 1, 'cotizacion-revision-documental-aprobada', NULL),
(9, 2, 1, 'documentacion-aprobada-ra', NULL),
(10, 2, 1, 'equipo-evaluador-asignado', NULL),
(11, 2, 1, 'cotizacion-evaluacion-aprobada', NULL),
(12, 2, 1, 'documentacion-aprobada-equipo-evaluador', NULL),
(13, 2, 1, 'formulario-024-llenado', NULL),
(14, 2, 1, 'carga-formularios-adicionales-finalizada', NULL),
(15, 2, 1, 'archivos-plan-accion-cargados', NULL),
(16, 2, 1, 'formulario-050-llenado', NULL),
(17, 2, 1, 'documentacion-aprobada-comite-tecnico', NULL),
(18, 2, 1, 'formulario-026-llenado', NULL),
(19, 2, 1, 'certificado-acreditacion-generado', NULL),
(20, 2, 1, 'tramite-aprobado-consejo', NULL),
(21, 3, 1, 'cotizacion-concesion-mantenimiento-aprobada', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `obs_peticion_accion_01_03_03`
--

CREATE TABLE IF NOT EXISTS `obs_peticion_accion_01_03_03` (
  `id_obs_peticion_accion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `fk_id_accion` int(11) NOT NULL,
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `obs_peticion_accion` text NOT NULL COMMENT 'display',
  `procede_obs_peticion_accion` tinyint(1) NOT NULL,
  `fecha_hora_obs_peticion_accion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_obs_peticion_accion`),
  KEY `fk_obs_peticion_accion_01_03_03_usuario_00_01_011_idx` (`fk_id_usuario`),
  KEY `fk_obs_peticion_accion_01_03_03_accion_01_02_011_idx` (`fk_id_accion`),
  KEY `fk_obs_peticion_accion_01_03_03_peticion_01_04_011_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `obs_peticion_accion_01_03_03`
--

INSERT INTO `obs_peticion_accion_01_03_03` (`id_obs_peticion_accion`, `fk_id_accion`, `fk_id_peticion`, `fk_id_usuario`, `obs_peticion_accion`, `procede_obs_peticion_accion`, `fecha_hora_obs_peticion_accion`) VALUES
(1, 39, 3, 6, 'asdfasdf', 1, '2016-01-09 20:53:40'),
(2, 43, 3, 1, 'adsfads', 1, '2016-01-09 21:21:38'),
(3, 44, 3, 1, '51515', 1, '2016-01-09 21:22:57'),
(4, 4, 5, 1, 'adsfasdf', 1, '2016-01-11 06:09:44'),
(5, 5, 5, 1, '5645', 1, '2016-01-11 06:10:58'),
(6, 6, 5, 6, 'adsfadsf', 1, '2016-01-11 06:12:44'),
(7, 6, 5, 6, 'Aprobación de Paso (Automático)', 1, '2016-01-11 06:13:48'),
(8, 10, 5, 1, '45645', 1, '2016-01-11 06:16:52'),
(9, 16, 5, 1, '564545', 1, '2016-01-11 06:23:24'),
(10, 25, 5, 9, 'Aprobación de Paso (Automático)', 1, '2016-01-11 07:27:39');

--
-- Triggers `obs_peticion_accion_01_03_03`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual26`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual26` BEFORE INSERT ON `obs_peticion_accion_01_03_03`
 FOR EACH ROW SET NEW.fecha_hora_obs_peticion_accion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `oec_02_00_01`
--

CREATE TABLE IF NOT EXISTS `oec_02_00_01` (
  `id_oec` int(11) NOT NULL AUTO_INCREMENT COMMENT 'oec',
  `fk_id_oec_tipo` int(11) NOT NULL,
  `fk_id_pais` int(11) NOT NULL,
  `fk_id_norma_referencia` int(11) NOT NULL,
  `nombre_oec` varchar(145) NOT NULL COMMENT 'display;search',
  `nit_oec` varchar(145) NOT NULL COMMENT 'search',
  `direccion_oec` text NOT NULL,
  `ciudad_oec` varchar(145) DEFAULT NULL,
  `departamento_oec` varchar(145) DEFAULT NULL,
  `telefono1_oec` varchar(45) DEFAULT NULL,
  `telefono2_oec` varchar(45) DEFAULT NULL,
  `celular_oec` varchar(45) DEFAULT NULL,
  `fax_oec` varchar(45) DEFAULT NULL,
  `email1_oec` varchar(45) NOT NULL,
  `email2_oec` varchar(45) DEFAULT NULL,
  `fecha_creacion_oec` datetime DEFAULT NULL,
  `fecha_actualizacion_oec` datetime DEFAULT NULL,
  PRIMARY KEY (`id_oec`),
  UNIQUE KEY `nombre_oec_UNIQUE` (`nombre_oec`),
  UNIQUE KEY `nit_oec_UNIQUE` (`nit_oec`),
  KEY `fk_oec_norma_referencia1_idx` (`fk_id_norma_referencia`),
  KEY `fk_oec_oec_tipo1_idx` (`fk_id_oec_tipo`),
  KEY `fk_oec_pais1_idx` (`fk_id_pais`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `oec_02_00_01`
--

INSERT INTO `oec_02_00_01` (`id_oec`, `fk_id_oec_tipo`, `fk_id_pais`, `fk_id_norma_referencia`, `nombre_oec`, `nit_oec`, `direccion_oec`, `ciudad_oec`, `departamento_oec`, `telefono1_oec`, `telefono2_oec`, `celular_oec`, `fax_oec`, `email1_oec`, `email2_oec`, `fecha_creacion_oec`, `fecha_actualizacion_oec`) VALUES
(1, 1, 1, 2, 'INTI', '24244422', 'Av bush', 'La Paz', 'La Paz', '21212121', '212121212666', '', '', 'fpenaranda@catequil.com.bo', '', '2015-12-30 19:52:00', NULL);

--
-- Triggers `oec_02_00_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual4`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual4` BEFORE INSERT ON `oec_02_00_01`
 FOR EACH ROW SET NEW.fecha_creacion_oec = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `peticion_01_04_01`
--

CREATE TABLE IF NOT EXISTS `peticion_01_04_01` (
  `id_peticion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `fk_id_proceso` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `fk_id_oec` int(11) NOT NULL,
  `fk_id_codigo_peticion` int(11) NOT NULL,
  `titulo_peticion` varchar(45) DEFAULT NULL COMMENT 'display',
  `fechahora_peticion` datetime DEFAULT NULL,
  `descripcion_peticion` text,
  `codigo_acreditacion_peticion` varchar(25) DEFAULT NULL COMMENT 'search',
  `fecha_creacion_peticion` datetime DEFAULT NULL,
  `necesidad_comite_peticion` tinyint(1) DEFAULT NULL,
  `estado_peticion` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_peticion`),
  KEY `fk_peticion_proceso1_idx` (`fk_id_proceso`),
  KEY `fk_peticion_usuario_00_01_011_idx` (`fk_id_usuario`),
  KEY `fk_peticion_oec1_idx` (`fk_id_oec`),
  KEY `fk_peticion_01_04_01_codigo_peticion1_idx` (`fk_id_codigo_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `peticion_01_04_01`
--

INSERT INTO `peticion_01_04_01` (`id_peticion`, `fk_id_proceso`, `fk_id_usuario`, `fk_id_oec`, `fk_id_codigo_peticion`, `titulo_peticion`, `fechahora_peticion`, `descripcion_peticion`, `codigo_acreditacion_peticion`, `fecha_creacion_peticion`, `necesidad_comite_peticion`, `estado_peticion`) VALUES
(3, 1, 1, 1, 1, 'TRAM1', NULL, '', '', '2015-12-30 19:56:04', 0, 0),
(5, 1, 1, 1, 1, 'PRUEBA2', NULL, '', '', '2016-01-11 06:02:07', NULL, 1);

--
-- Triggers `peticion_01_04_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual2`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual2` BEFORE INSERT ON `peticion_01_04_01`
 FOR EACH ROW SET NEW.fecha_creacion_peticion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `peticion_accion_01_03_01`
--

CREATE TABLE IF NOT EXISTS `peticion_accion_01_03_01` (
  `id_peticion_accion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso;display',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_accion` int(11) NOT NULL,
  `fk_id_transicion` int(11) NOT NULL,
  `fk_id_usuario` int(11) DEFAULT NULL COMMENT 'login',
  `completa_peticion_accion` tinyint(1) DEFAULT NULL,
  `activa_peticion_accion` tinyint(1) DEFAULT NULL,
  `observacion_peticion_accion` text,
  `fecha_creacion_peticion_accion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_peticion_accion`),
  KEY `fk_peticion_accion_accion1_idx` (`fk_id_accion`),
  KEY `fk_peticion_accion_transicion1_idx` (`fk_id_transicion`),
  KEY `fk_peticion_accion_usuario_00_01_011_idx` (`fk_id_usuario`),
  KEY `fk_peticion_accion_01_03_01_peticion_01_04_011_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=84 ;

--
-- Dumping data for table `peticion_accion_01_03_01`
--

INSERT INTO `peticion_accion_01_03_01` (`id_peticion_accion`, `fk_id_peticion`, `fk_id_accion`, `fk_id_transicion`, `fk_id_usuario`, `completa_peticion_accion`, `activa_peticion_accion`, `observacion_peticion_accion`, `fecha_creacion_peticion_accion`) VALUES
(1, 3, 1, 1, 1, 1, 0, '', '2015-12-30 19:56:04'),
(2, 3, 2, 2, 1, 1, 0, '', '2015-12-30 19:57:45'),
(3, 3, 3, 2, 1, 1, 0, '', '2015-12-30 19:57:45'),
(4, 3, 4, 2, 1, 1, 0, '', '2015-12-30 19:57:45'),
(5, 3, 5, 2, 1, 1, 0, '', '2015-12-30 19:57:45'),
(6, 3, 6, 3, 6, 1, 0, '', '2015-12-30 20:02:37'),
(7, 3, 7, 3, 1, 1, 0, '', '2015-12-30 20:02:37'),
(8, 3, 46, 3, 1, 1, 0, '', '2015-12-30 20:02:37'),
(13, 3, 8, 4, 1, 1, 0, '', '2015-12-31 01:56:19'),
(14, 3, 9, 4, 8, 1, 0, '', '2015-12-31 01:56:19'),
(15, 3, 10, 4, 1, 1, 0, '', '2015-12-31 01:56:19'),
(16, 3, 12, 5, 8, 1, 0, '', '2015-12-31 02:18:01'),
(17, 3, 13, 6, 8, 1, 0, '', '2015-12-31 02:31:56'),
(18, 3, 14, 7, 1, 1, 0, '', '2015-12-31 03:02:51'),
(19, 3, 15, 7, 8, 1, 0, '', '2015-12-31 03:02:51'),
(20, 3, 16, 7, 1, 1, 0, '', '2015-12-31 03:02:51'),
(22, 3, 18, 8, 1, 1, 0, '', '2015-12-31 03:27:30'),
(23, 3, 19, 9, 1, 1, 0, '', '2015-12-31 03:37:18'),
(24, 3, 20, 9, 8, 1, 0, '', '2015-12-31 03:37:18'),
(25, 3, 21, 10, 1, 1, 0, '', '2015-12-31 03:56:34'),
(26, 3, 22, 10, 8, 1, 0, '', '2015-12-31 03:56:34'),
(27, 3, 23, 10, 1, 1, 0, '', '2015-12-31 03:56:34'),
(29, 3, 25, 11, 2, 1, 0, '', '2015-12-31 04:38:49'),
(30, 3, 26, 11, 7, 1, 0, '', '2015-12-31 04:38:49'),
(31, 3, 27, 12, 7, 1, 0, '', '2016-01-04 16:28:29'),
(32, 3, 29, 13, 1, 1, 0, '', '2016-01-04 17:28:09'),
(33, 3, 30, 13, 1, 1, 0, '', '2016-01-04 17:28:09'),
(34, 3, 31, 13, 1, 1, 0, '', '2016-01-04 17:28:09'),
(35, 3, 28, 13, 1, 1, 0, '', '2016-01-04 17:28:09'),
(36, 3, 32, 14, 1, 1, 0, '', '2016-01-05 09:20:37'),
(37, 3, 33, 14, 1, 1, 0, '', '2016-01-05 09:20:37'),
(38, 3, 34, 15, 1, 1, 0, '', '2016-01-05 11:05:15'),
(39, 3, 35, 16, 1, 1, 0, '', '2016-01-05 12:22:10'),
(40, 3, 36, 16, 1, 1, 0, '', '2016-01-05 12:22:10'),
(41, 3, 45, 16, 1, 1, 0, '', '2016-01-05 12:22:10'),
(46, 3, 37, 17, 1, 1, 0, '', '2016-01-08 10:10:13'),
(47, 3, 38, 18, 1, 1, 0, '', '2016-01-08 12:56:33'),
(48, 3, 39, 19, 6, 1, 0, '', '2016-01-08 13:46:42'),
(49, 3, 40, 19, 1, 1, 0, '', '2016-01-08 13:46:42'),
(50, 3, 41, 20, 1, 1, 0, '', '2016-01-09 21:15:55'),
(51, 3, 42, 20, 1, 1, 0, '', '2016-01-09 21:15:55'),
(52, 3, 43, 20, 1, 1, 0, '', '2016-01-09 21:15:55'),
(53, 3, 44, 20, 1, 1, 0, '', '2016-01-09 21:15:55'),
(55, 5, 1, 1, 1, 1, 0, '', '2016-01-11 06:02:23'),
(56, 5, 2, 2, 1, 1, 0, '', '2016-01-11 06:04:36'),
(57, 5, 3, 2, 1, 1, 0, '', '2016-01-11 06:04:36'),
(58, 5, 4, 2, 1, 1, 0, '', '2016-01-11 06:04:36'),
(59, 5, 5, 2, 1, 1, 0, '', '2016-01-11 06:04:37'),
(60, 5, 6, 3, 6, 1, 0, '', '2016-01-11 06:11:46'),
(61, 5, 7, 3, 1, 1, 0, '', '2016-01-11 06:11:46'),
(62, 5, 46, 3, 1, 1, 0, '', '2016-01-11 06:11:46'),
(63, 5, 8, 4, 1, 1, 0, '', '2016-01-11 06:14:29'),
(64, 5, 9, 4, 8, 1, 0, '', '2016-01-11 06:14:29'),
(65, 5, 10, 4, 1, 1, 0, '', '2016-01-11 06:14:29'),
(66, 5, 12, 5, 1, 1, 0, '', '2016-01-11 06:17:37'),
(67, 5, 13, 6, 1, 1, 0, '', '2016-01-11 06:19:29'),
(68, 5, 14, 7, 1, 1, 0, '', '2016-01-11 06:20:57'),
(69, 5, 15, 7, 8, 1, 0, '', '2016-01-11 06:20:57'),
(70, 5, 16, 7, 1, 1, 0, '', '2016-01-11 06:20:57'),
(71, 5, 18, 8, 1, 1, 0, '', '2016-01-11 06:24:53'),
(72, 5, 19, 9, 1, 1, 0, '', '2016-01-11 06:25:34'),
(73, 5, 20, 9, 8, 1, 0, '', '2016-01-11 06:25:34'),
(74, 5, 21, 10, 1, 1, 0, '', '2016-01-11 06:42:26'),
(75, 5, 22, 10, 8, 1, 0, '', '2016-01-11 06:42:27'),
(76, 5, 23, 10, 1, 1, 0, '', '2016-01-11 06:42:27'),
(77, 5, 25, 11, 9, 1, 0, '', '2016-01-11 06:46:40'),
(78, 5, 26, 11, 8, 1, 0, '', '2016-01-11 06:46:40'),
(79, 5, 27, 12, 1, 1, 0, '', '2016-01-11 07:29:20'),
(80, 5, 28, 13, NULL, 0, 1, '', '2016-01-11 07:32:59'),
(81, 5, 29, 13, NULL, 0, 1, '', '2016-01-11 07:32:59'),
(82, 5, 30, 13, NULL, 0, 1, '', '2016-01-11 07:32:59'),
(83, 5, 31, 13, NULL, 0, 1, '', '2016-01-11 07:32:59');

--
-- Triggers `peticion_accion_01_03_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual25`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual25` BEFORE INSERT ON `peticion_accion_01_03_01`
 FOR EACH ROW SET NEW.fecha_creacion_peticion_accion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `peticion_archivo_01_04_01`
--

CREATE TABLE IF NOT EXISTS `peticion_archivo_01_04_01` (
  `id_peticion_archivo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `fk_id_peticion_estado` int(11) NOT NULL,
  `fk_id_accion` int(11) NOT NULL,
  `fk_id_peticion_archivo_tipo` int(11) DEFAULT NULL,
  `nombre_peticion_archivo` varchar(200) NOT NULL COMMENT 'display;file',
  `version_peticion_archivo` int(11) DEFAULT NULL,
  `activo_peticion_archivo` tinyint(1) DEFAULT NULL,
  `descripcion_peticion_archivo` text,
  `tipo_peticion_archivo` set('t','s') DEFAULT NULL COMMENT 't = Técnico, s = Sistema de Gestión',
  `estado_peticion_archivo` set('c','v') DEFAULT NULL COMMENT 'c = Cargado, v = Verificado',
  `adicional_peticion_archivo` tinyint(1) DEFAULT NULL,
  `escaneado_peticion_archivo` varchar(145) DEFAULT NULL COMMENT 'file',
  `fecha_creacion_peticion_archivo` datetime DEFAULT NULL,
  PRIMARY KEY (`id_peticion_archivo`),
  KEY `fk_peticion_archivo_peticion_estado1_idx` (`fk_id_peticion_estado`),
  KEY `fk_peticion_archivo_01_04_01_accion_01_02_011_idx` (`fk_id_accion`),
  KEY `fk_peticion_archivo_01_04_01_peticion_archivo_tipo_01_04_04_idx` (`fk_id_peticion_archivo_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `peticion_archivo_01_04_01`
--

INSERT INTO `peticion_archivo_01_04_01` (`id_peticion_archivo`, `fk_id_peticion_estado`, `fk_id_accion`, `fk_id_peticion_archivo_tipo`, `nombre_peticion_archivo`, `version_peticion_archivo`, `activo_peticion_archivo`, `descripcion_peticion_archivo`, `tipo_peticion_archivo`, `estado_peticion_archivo`, `adicional_peticion_archivo`, `escaneado_peticion_archivo`, `fecha_creacion_peticion_archivo`) VALUES
(1, 4, 2, NULL, '5551035c42bce0199396c21f314625ad.txt', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2015-12-30 19:58:35'),
(2, 4, 3, NULL, '455932f618c173f0a6ef7b71dca73eaa.txt', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2015-12-30 19:59:04'),
(3, 5, 46, NULL, 'd50849ac517cf500314dcee19ecbf758.mwb', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2015-12-30 20:02:50'),
(4, 5, 46, NULL, '094b73b1c00dbb28b3a5caf52afcab66.mwb', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2015-12-31 01:38:40'),
(5, 5, 7, NULL, '6287407cba59d731f08938a6d38257e9.mwb', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2015-12-31 01:51:02'),
(6, 5, 46, NULL, 'c42c7958f42d7e20654c458270d191f8.txt', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2015-12-31 01:56:05'),
(7, 5, 7, NULL, 'f506275e72ac8e2e29766d44f105daf0.txt', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2015-12-31 01:57:06'),
(8, 6, 8, NULL, '392042ec5b7f94b4efd41756702efe4b.txt', NULL, 1, 'carga-cotizacion-apertura-expediente', NULL, 'c', 0, NULL, '2015-12-31 02:13:45'),
(9, 6, 9, NULL, 'b1d2a1642439725aa9d72fb5ab82eaa2.docx', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2015-12-31 02:17:05'),
(10, 8, 13, 1, 'd9966fdd35b4d85763fc453f9dc65e83.txt', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2015-12-31 02:43:39'),
(11, 8, 13, 2, 'e444dacc6405f97478046cdeb9b477dc.xlsx', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2015-12-31 03:01:29'),
(12, 9, 14, NULL, '9007afb15450ea9e27bf37d7fe0de77c.docx', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2015-12-31 03:19:35'),
(13, 9, 15, NULL, 'ffc0f07d4258218717d3bd7a898fc99a.sql', NULL, 1, 'carga-factura-revision-documental', NULL, 'c', 0, NULL, '2015-12-31 03:25:58'),
(14, 12, 21, NULL, 'd83ae94d36a432f540818495f0ac7040.txt', NULL, 1, 'carga-cotizacion-evaluacion', NULL, 'c', 0, NULL, '2015-12-31 04:19:23'),
(15, 12, 22, NULL, 'f00df2696199425119ef3670e4de69d0.docx', NULL, 1, 'carga-factura-evaluacion', NULL, 'c', 0, NULL, '2015-12-31 04:21:42'),
(16, 13, 26, NULL, '42c07e3c86ccb2fa9191bd85955baa0d.sql', NULL, 1, 'finaliza-oec-carga-archivos-adicionales', NULL, 'c', 1, NULL, '2016-01-04 16:03:30'),
(17, 13, 26, NULL, '2c7697f62ed9a9ade7c717b106ed40ce.sql', NULL, 1, 'finaliza-oec-carga-archivos-adicionales', NULL, 'c', 1, NULL, '2016-01-04 16:05:56'),
(18, 13, 26, NULL, '2c7697f62ed9a9ade7c717b106ed40ce.sql', NULL, 1, 'finaliza-oec-carga-archivos-adicionales', NULL, 'c', 1, NULL, '2016-01-04 16:33:56'),
(19, 16, 32, NULL, 'e62807d84f86e36fb7e12d3375af9486.txt', NULL, 1, 'termina-carga-archivos-plan-accion', NULL, 'c', 0, NULL, '2016-01-05 10:51:52'),
(20, 16, 32, 8, '4619904739ed413bc3393c2e9a920221.txt', NULL, 1, 'termina-carga-archivos-plan-accion', NULL, 'c', 0, NULL, '2016-01-05 10:56:41'),
(21, 18, 36, NULL, '8d563fdd0cba0cf5fde7aee7ea425ad1.docx', NULL, 1, 'carga-acta-comite-tecnico', NULL, 'c', 0, NULL, '2016-01-08 10:07:03'),
(22, 24, 40, NULL, 'd6ac09f194f8b28de58870a705bd14ba.txt', NULL, 1, 'cargar-acta-consejo', NULL, 'c', 0, NULL, '2016-01-09 21:15:44'),
(23, 25, 41, NULL, '021bf253890843ecfdbfefed2e106aba.txt', NULL, 1, 'carga-cotizacion-concesion-mantenimiento', NULL, 'c', 0, NULL, '2016-01-09 21:20:41'),
(24, 25, 42, NULL, '967e1ed79da3557d662d6859e4c78453.mwb', NULL, 1, 'carga-factura-concesion-mantenimiento', NULL, 'c', 0, NULL, '2016-01-09 21:21:16'),
(25, 29, 2, NULL, '0457be5dba8314f5762c6416552faf6e.pdf', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-01-11 06:08:42'),
(26, 29, 3, NULL, '16bfdf3b4d815a0db233093717f6d541.pdf', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-01-11 06:08:56'),
(27, 30, 46, NULL, 'd9f6368656347362790ad0d8b20694c7.pdf', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-01-11 06:11:59'),
(28, 30, 7, NULL, '6a1cc18ddecb17304073a9ae8e05676c.pdf', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-01-11 06:14:24'),
(29, 31, 8, NULL, '92f85cad57a06af1d4804f9207a85e76.pdf', NULL, 1, 'carga-cotizacion-apertura-expediente', NULL, 'c', 0, NULL, '2016-01-11 06:15:46'),
(30, 31, 9, NULL, 'f7db856ea3c23bbb1ea17af4ae986479.pdf', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2016-01-11 06:16:30'),
(31, 33, 13, 1, 'cf44353c530643785d9b2ce8f19f3342.pdf', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-01-11 06:19:47'),
(32, 33, 13, 2, '77789e66242ae5d3621262b74c2ca4d1.pdf', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-01-11 06:20:26'),
(33, 33, 13, 7, '59380ac0ad370c4ac75d8b74cc577d68.pdf', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-01-11 06:20:38'),
(34, 34, 14, NULL, '82eafdf65c2584d58df293677f7541e6.pdf', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2016-01-11 06:21:04'),
(35, 34, 15, NULL, '16bfdf3b4d815a0db233093717f6d541.pdf', NULL, 1, 'carga-factura-revision-documental', NULL, 'c', 0, NULL, '2016-01-11 06:22:56'),
(36, 37, 21, NULL, 'cfc24d063483c2f451994644adbf83f0.pdf', NULL, 1, 'carga-cotizacion-evaluacion', NULL, 'c', 0, NULL, '2016-01-11 06:42:56'),
(37, 37, 22, NULL, 'f4dccc4f3b630a74162f697da0e0cb5e.pdf', NULL, 1, 'carga-factura-evaluacion', NULL, 'c', 0, NULL, '2016-01-11 06:43:14'),
(38, 38, 26, NULL, 'bf03f5a0e16b1d4e7a749038b722e526.pdf', NULL, 1, 'finaliza-oec-carga-archivos-adicionales', NULL, 'c', 1, NULL, '2016-01-11 07:28:53');

--
-- Triggers `peticion_archivo_01_04_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual3`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual3` BEFORE INSERT ON `peticion_archivo_01_04_01`
 FOR EACH ROW SET NEW.fecha_creacion_peticion_archivo = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `peticion_archivo_tipo_01_04_04`
--

CREATE TABLE IF NOT EXISTS `peticion_archivo_tipo_01_04_04` (
  `id_peticion_archivo_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_peticion_archivo_tipo` varchar(145) NOT NULL,
  `codigo_peticion_archivo_tipo` varchar(145) NOT NULL,
  PRIMARY KEY (`id_peticion_archivo_tipo`),
  UNIQUE KEY `nombre_peticion_archivo_tipo_UNIQUE` (`nombre_peticion_archivo_tipo`),
  UNIQUE KEY `codigo_peticion_archivo_tipo_UNIQUE` (`codigo_peticion_archivo_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `peticion_archivo_tipo_01_04_04`
--

INSERT INTO `peticion_archivo_tipo_01_04_04` (`id_peticion_archivo_tipo`, `nombre_peticion_archivo_tipo`, `codigo_peticion_archivo_tipo`) VALUES
(1, 'Manual de Calidad', 'manual-de-calidad'),
(2, 'Procedimientos', 'procedimientos'),
(3, 'Informe de Revisión por la Dirección', 'informe-de-revision-por-la-direccion'),
(4, 'Informe de Auditoria Interna', 'informe-de-auditoria-interna'),
(5, 'Informe de Validación', 'informe-de-validacion'),
(6, 'Certificado de Material de Referencia o Certificado de Patrones', 'certificado-de-material-referencia-o-patrones'),
(7, 'Lista Maestra de Documentos', 'lista-maestra-de-documentos'),
(8, 'Plan de Acción', 'plan-de-accion'),
(9, 'Acta de Comité Técnico', 'acta-comite-tecnico');

-- --------------------------------------------------------

--
-- Table structure for table `peticion_estado_01_04_03`
--

CREATE TABLE IF NOT EXISTS `peticion_estado_01_04_03` (
  `id_peticion_estado` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso;display',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_estado` int(11) NOT NULL,
  `activo_peticion_estado` tinyint(1) DEFAULT NULL,
  `fecha_creacion_peticion_estado` date DEFAULT NULL,
  PRIMARY KEY (`id_peticion_estado`),
  KEY `fk_peticion_estado_peticion1_idx` (`fk_id_peticion`),
  KEY `fk_peticion_estado_estado1_idx` (`fk_id_estado`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `peticion_estado_01_04_03`
--

INSERT INTO `peticion_estado_01_04_03` (`id_peticion_estado`, `fk_id_peticion`, `fk_id_estado`, `activo_peticion_estado`, `fecha_creacion_peticion_estado`) VALUES
(3, 3, 1, 0, '2016-01-04'),
(4, 3, 2, 0, '2016-01-04'),
(5, 3, 3, 0, '2016-01-04'),
(6, 3, 4, 0, '2016-01-04'),
(7, 3, 5, 0, '2016-01-04'),
(8, 3, 6, 0, '2016-01-04'),
(9, 3, 7, 0, '2016-01-04'),
(10, 3, 8, 0, '2016-01-04'),
(11, 3, 9, 0, '2016-01-04'),
(12, 3, 10, 0, '2016-01-04'),
(13, 3, 11, 0, '2016-01-04'),
(14, 3, 12, 0, '2016-01-04'),
(15, 3, 13, 0, '2016-01-04'),
(16, 3, 14, 0, '2016-01-05'),
(17, 3, 15, 0, '2016-01-05'),
(18, 3, 16, 0, '2016-01-05'),
(22, 3, 17, 0, '2016-01-08'),
(23, 3, 18, 0, '2016-01-08'),
(24, 3, 19, 0, '2016-01-08'),
(25, 3, 20, 0, '2016-01-09'),
(26, 3, 21, 1, '2016-01-09'),
(28, 5, 1, 0, '2016-01-11'),
(29, 5, 2, 0, '2016-01-11'),
(30, 5, 3, 0, '2016-01-11'),
(31, 5, 4, 0, '2016-01-11'),
(32, 5, 5, 0, '2016-01-11'),
(33, 5, 6, 0, '2016-01-11'),
(34, 5, 7, 0, '2016-01-11'),
(35, 5, 8, 0, '2016-01-11'),
(36, 5, 9, 0, '2016-01-11'),
(37, 5, 10, 0, '2016-01-11'),
(38, 5, 11, 0, '2016-01-11'),
(39, 5, 12, 0, '2016-01-11'),
(40, 5, 13, 1, '2016-01-11');

--
-- Triggers `peticion_estado_01_04_03`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual55`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual55` BEFORE INSERT ON `peticion_estado_01_04_03`
 FOR EACH ROW SET NEW.fecha_creacion_peticion_estado = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `proceso_01_01_01`
--

CREATE TABLE IF NOT EXISTS `proceso_01_01_01` (
  `id_proceso` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `nombre_proceso` varchar(145) NOT NULL COMMENT 'display',
  `valor_proceso` varchar(45) NOT NULL,
  PRIMARY KEY (`id_proceso`),
  UNIQUE KEY `nombre_proceso_UNIQUE` (`nombre_proceso`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `proceso_01_01_01`
--

INSERT INTO `proceso_01_01_01` (`id_proceso`, `nombre_proceso`, `valor_proceso`) VALUES
(1, 'Acreditación Inicial', 'acreditacion'),
(2, 'Reacreditación', 'reacreditacion'),
(3, 'Vigilancia 1', 'vigilancia1'),
(4, 'Vigilancia 2', 'vigilancia2'),
(5, 'Extraordinaria', 'extraordinaria');

-- --------------------------------------------------------

--
-- Table structure for table `transicion_01_02_02`
--

CREATE TABLE IF NOT EXISTS `transicion_01_02_02` (
  `id_transicion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'display',
  `fk_id_proceso` int(11) NOT NULL,
  `fk_id_estado_actual` int(11) NOT NULL,
  `fk_id_estado_siguiente` int(11) NOT NULL,
  PRIMARY KEY (`id_transicion`),
  KEY `fk_transicion_proceso1_idx` (`fk_id_proceso`),
  KEY `fk_transicion_estado1_idx` (`fk_id_estado_actual`),
  KEY `fk_transicion_estado2_idx` (`fk_id_estado_siguiente`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `transicion_01_02_02`
--

INSERT INTO `transicion_01_02_02` (`id_transicion`, `fk_id_proceso`, `fk_id_estado_actual`, `fk_id_estado_siguiente`) VALUES
(1, 1, 1, 2),
(2, 1, 2, 3),
(3, 1, 3, 4),
(4, 1, 4, 5),
(5, 1, 5, 6),
(6, 1, 6, 7),
(7, 1, 7, 8),
(8, 1, 8, 9),
(9, 1, 9, 10),
(10, 1, 10, 11),
(11, 1, 11, 12),
(12, 1, 12, 13),
(13, 1, 13, 14),
(14, 1, 14, 15),
(15, 1, 15, 16),
(16, 1, 16, 17),
(17, 1, 17, 18),
(18, 1, 18, 19),
(19, 1, 19, 20),
(20, 1, 20, 21);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `usuario_00_01_01`
--

INSERT INTO `usuario_00_01_01` (`id_usuario`, `primer_nombre_usuario`, `segundo_nombre_usuario`, `apellido_paterno_usuario`, `apellido_materno_usuario`, `codigo_usuario`, `login_usuario`, `contrasena_usuario`, `sexo_usuario`, `telefono_usuario`, `celular_usuario`, `correo_usuario`, `direccion_usuario`, `imagen_usuario`, `observaciones_usuario`, `acceso_ip_usuario`, `fecha_creacion_usuario`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'm', 'admin', 'admin', 'victorqcv@gmail.com', 'admin', 'admin', 'admin', '', '2015-12-18 17:16:00'),
(2, 'Federico', 'Guillermo', 'Peñaranda', 'Nervi', 'EVA-555', 'fpenaranda', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'm', '2223408', '70681784', 'federicopenaranda@gmail.com', 'Av. Bush', '', 'Prueba', '', '2015-12-18 18:24:56'),
(3, 'Fino', '', 'Prueba', '', 'EVA-588', 'oecfino1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'm', '212121212', '70707070', 'fpenaranda@catequil.com.bo', 'prueba', '', 'prueba', '', '2015-12-21 10:09:15'),
(4, 'Dta', '', 'Personal', '', 'EVA-968', 'dta1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'm', '3434234', '234234234', 'fpenaranda@ibmetro.gob.bo', 'prueba', '', 'prueba', '', '2015-12-21 10:10:53'),
(5, 'Directora', '', 'Dta', '', 'EVA-011', 'da1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'f', '234234', '234234', 'info@catequil.com.bo', 'prueba', '', '', '', '2015-12-21 10:12:04'),
(6, 'Consejo1', '', 'C1', '', 'adsfasd', 'consejo1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'f', '234234', '234234234', 'fasdf@docm.com', '', '', 'adsfadsfas', '', '2015-12-28 19:53:10'),
(7, 'Dta2', '', 'Dta2', '', 'qwer', 'dta2', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'f', 'qewrqw', 'qwerqewr', 'adsfasdf@dsafa.com', '', '', '', '', '2015-12-29 10:07:28'),
(8, 'Dueño', '', 'Inti', '', '2545', 'inti1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'm', '24242424', '2424224', 'fpenaranda@ibmetro.gob.bo', 'adsf', '', 'asdf', '', '2015-12-31 02:16:31'),
(9, 'Evaluador', '', 'Lider', '', 'EVA-515', 'el1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'm', '24352435', '24354235', 'fpenaranda@ibmetro.gob.bo', '', '', 'prueba', '', '2016-01-11 06:52:38');

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
-- Table structure for table `usuario_oec_00_01_02`
--

CREATE TABLE IF NOT EXISTS `usuario_oec_00_01_02` (
  `fk_id_usuario` int(11) NOT NULL COMMENT 'main',
  `fk_id_oec` int(11) NOT NULL,
  PRIMARY KEY (`fk_id_usuario`,`fk_id_oec`),
  KEY `fk_usuario_oec_usuario_00_01_011_idx` (`fk_id_usuario`),
  KEY `fk_usuario_oec_oec1_idx` (`fk_id_oec`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario_oec_00_01_02`
--

INSERT INTO `usuario_oec_00_01_02` (`fk_id_usuario`, `fk_id_oec`) VALUES
(1, 1),
(2, 1),
(3, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accion_01_02_01`
--
ALTER TABLE `accion_01_02_01`
  ADD CONSTRAINT `fk_accion_accion_tipo1` FOREIGN KEY (`fk_id_accion_tipo`) REFERENCES `accion_tipo_01_02_04` (`id_accion_tipo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_accion_proceso1` FOREIGN KEY (`fk_id_proceso`) REFERENCES `proceso_01_01_01` (`id_proceso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `accion_transicion_01_02_02`
--
ALTER TABLE `accion_transicion_01_02_02`
  ADD CONSTRAINT `fk_accion_transicion_accion1` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_accion_transicion_transicion1` FOREIGN KEY (`fk_id_transicion`) REFERENCES `transicion_01_02_02` (`id_transicion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `certificado_04_14_01`
--
ALTER TABLE `certificado_04_14_01`
  ADD CONSTRAINT `fk_certificado_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `codigo_peticion_01_04_04`
--
ALTER TABLE `codigo_peticion_01_04_04`
  ADD CONSTRAINT `fk_codigo_peticion_oec_02_00_011` FOREIGN KEY (`fk_id_oec`) REFERENCES `oec_02_00_01` (`id_oec`) ON UPDATE CASCADE;

--
-- Constraints for table `equipo_eval_04_08_03`
--
ALTER TABLE `equipo_eval_04_08_03`
  ADD CONSTRAINT `fk_equipo_eval_eval_tecnica1` FOREIGN KEY (`fk_id_eval_tecnica`) REFERENCES `eval_tecnica_04_08_01` (`id_eval_tecnica`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `equipo_peticion_01_07_01`
--
ALTER TABLE `equipo_peticion_01_07_01`
  ADD CONSTRAINT `fk_equipo_peticion_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_equipo_peticion_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON UPDATE CASCADE;

--
-- Constraints for table `estado_01_06_01`
--
ALTER TABLE `estado_01_06_01`
  ADD CONSTRAINT `fk_estado_proceso1` FOREIGN KEY (`fk_id_proceso`) REFERENCES `proceso_01_01_01` (`id_proceso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_estado_proceso_estado1` FOREIGN KEY (`fk_id_estado_tipo`) REFERENCES `estado_tipo_01_06_04` (`id_estado_tipo`) ON UPDATE CASCADE;

--
-- Constraints for table `obs_peticion_accion_01_03_03`
--
ALTER TABLE `obs_peticion_accion_01_03_03`
  ADD CONSTRAINT `fk_obs_peticion_accion_01_03_03_accion_01_02_011` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_obs_peticion_accion_01_03_03_peticion_01_04_011` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_obs_peticion_accion_01_03_03_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON UPDATE CASCADE;

--
-- Constraints for table `oec_02_00_01`
--
ALTER TABLE `oec_02_00_01`
  ADD CONSTRAINT `fk_oec_norma_referencia1` FOREIGN KEY (`fk_id_norma_referencia`) REFERENCES `norma_referencia_02_00_04` (`id_norma_referencia`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_oec_oec_tipo1` FOREIGN KEY (`fk_id_oec_tipo`) REFERENCES `oec_tipo_02_00_04` (`id_oec_tipo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_oec_pais1` FOREIGN KEY (`fk_id_pais`) REFERENCES `pais_02_00_04` (`id_pais`) ON UPDATE CASCADE;

--
-- Constraints for table `peticion_01_04_01`
--
ALTER TABLE `peticion_01_04_01`
  ADD CONSTRAINT `fk_peticion_01_04_01_codigo_peticion1` FOREIGN KEY (`fk_id_codigo_peticion`) REFERENCES `codigo_peticion_01_04_04` (`id_codigo_peticion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_oec1` FOREIGN KEY (`fk_id_oec`) REFERENCES `oec_02_00_01` (`id_oec`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_proceso1` FOREIGN KEY (`fk_id_proceso`) REFERENCES `proceso_01_01_01` (`id_proceso`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON UPDATE CASCADE;

--
-- Constraints for table `peticion_accion_01_03_01`
--
ALTER TABLE `peticion_accion_01_03_01`
  ADD CONSTRAINT `fk_peticion_accion_01_03_01_peticion_01_04_011` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_accion_accion1` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_accion_transicion1` FOREIGN KEY (`fk_id_transicion`) REFERENCES `transicion_01_02_02` (`id_transicion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_accion_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON UPDATE CASCADE;

--
-- Constraints for table `peticion_archivo_01_04_01`
--
ALTER TABLE `peticion_archivo_01_04_01`
  ADD CONSTRAINT `fk_peticion_archivo_01_04_01_accion_01_02_011` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_archivo_01_04_01_peticion_archivo_tipo_01_04_041` FOREIGN KEY (`fk_id_peticion_archivo_tipo`) REFERENCES `peticion_archivo_tipo_01_04_04` (`id_peticion_archivo_tipo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_archivo_peticion_estado1` FOREIGN KEY (`fk_id_peticion_estado`) REFERENCES `peticion_estado_01_04_03` (`id_peticion_estado`) ON UPDATE CASCADE;

--
-- Constraints for table `peticion_estado_01_04_03`
--
ALTER TABLE `peticion_estado_01_04_03`
  ADD CONSTRAINT `fk_peticion_estado_estado1` FOREIGN KEY (`fk_id_estado`) REFERENCES `estado_01_06_01` (`id_estado`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peticion_estado_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transicion_01_02_02`
--
ALTER TABLE `transicion_01_02_02`
  ADD CONSTRAINT `fk_transicion_estado1` FOREIGN KEY (`fk_id_estado_actual`) REFERENCES `estado_01_06_01` (`id_estado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_transicion_estado2` FOREIGN KEY (`fk_id_estado_siguiente`) REFERENCES `estado_01_06_01` (`id_estado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_transicion_proceso1` FOREIGN KEY (`fk_id_proceso`) REFERENCES `proceso_01_01_01` (`id_proceso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuario_oec_00_01_02`
--
ALTER TABLE `usuario_oec_00_01_02`
  ADD CONSTRAINT `fk_usuario_oec_oec1` FOREIGN KEY (`fk_id_oec`) REFERENCES `oec_02_00_01` (`id_oec`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuario_oec_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
