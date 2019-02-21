-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 30, 2015 at 07:29 PM
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
-- Table structure for table `accion_notificacion_01_02_03`
--

CREATE TABLE IF NOT EXISTS `accion_notificacion_01_02_03` (
  `id_accion_notificacion` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_accion` int(11) NOT NULL,
  `fk_id_usuario_tipo` int(11) NOT NULL,
  `asunto_accion_notificacion` varchar(145) NOT NULL,
  `mensaje_accion_notificacion` text NOT NULL,
  PRIMARY KEY (`id_accion_notificacion`),
  KEY `fk_accion_notificacion_accion_01_02_011_idx` (`fk_id_accion`),
  KEY `fk_accion_notificacion_usuario_tipo_00_02_011_idx` (`fk_id_usuario_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=63 ;

--
-- Dumping data for table `accion_notificacion_01_02_03`
--

INSERT INTO `accion_notificacion_01_02_03` (`id_accion_notificacion`, `fk_id_accion`, `fk_id_usuario_tipo`, `asunto_accion_notificacion`, `mensaje_accion_notificacion`) VALUES
(1, 1, 5, '[IBMETRO] Aprobación de Paso 1', 'Se ha terminado de llenar el formulario 002 por la OEC.'),
(2, 2, 2, '[IBMETRO] Cotización por Pertinencia Cargada', 'Se ha cargado la cotización por la Pertinencia del Alcance, por favor ingrese al sistema, al paso 2 y descarguela para realizar el pago correspondiente.'),
(3, 3, 5, '[IBMETRO] Carga de Factura Realizada', 'Se ha cargado la factura correspondiente a la Pertinencia del Alcance, por favor ingrese al paso 2 y realice la verificación correspondiente.'),
(4, 4, 4, '[IBMETRO] Factura por Pertinencia de Alcance Verificada', 'Se ha verificado la factura cargada por la OEC, por favor ingrese al paso 2 y apruebe u observe este paso.'),
(5, 5, 5, '[IBMETRO] Aprobación de Paso 2', 'La DA ha aprobado el Paso 2 del trámite.'),
(6, 5, 2, '[IBMETRO] Aprobación de Paso 2', 'Se ha aprobado el paso 2 de su trámite.'),
(7, 5, 3, '[IBMETRO] Aprobación de Paso 2', 'Se ha aprobado el paso 2 del trámite, el mismo ahora debe revisarse y aprobarse por los miembros del consejo. '),
(8, 6, 5, '[IBMETRO] Aprobación de Consejo', 'El consejo ha aprobado el trámite, se debe cargar el Acta de Consejo.'),
(9, 6, 4, '[IBMETRO] Aprobación de Consejo', 'El consejo ha aprobado el trámite, se debe cargar el Acta de Consejo.'),
(10, 8, 2, '[IBMETRO] Cotización por Apertura de Expediente', 'Se ha cargado la cotización por la Apertura de Expediente, por favor ingrese al sistema, al paso 4 y descarguela para realizar el pago correspondiente.'),
(11, 9, 5, '[IBMETRO] Carga de Factura Realizada', 'Se ha cargado la factura correspondiente a la Apertura de Expediente, por favor ingrese al paso 4 y realice la verificación correspondiente.'),
(12, 10, 4, '[IBMETRO] Factura por Apertura de Expediente Verificada', 'Se ha verificado la factura cargada por la OEC, por favor ingrese al paso 4 y apruebe u observe este paso.'),
(13, 11, 5, '[IBMETRO] Aprobación de Paso 4', 'La DA ha aprobado el Paso 4 del trámite.'),
(14, 11, 2, '[IBMETRO] Aprobación de Paso 4', 'Se ha aprobado el paso 4 de su trámite.'),
(15, 12, 4, '[IBMETRO] Aprobación de Paso 5', 'Se ha aprobado el paso 5 del trámite.'),
(16, 12, 5, '[IBMETRO] Aprobación de Paso 5', 'Se ha aprobado el paso 5 del trámite.'),
(17, 13, 4, '[IBMETRO] Aprobación de Paso 6', 'Se ha aprobado el paso 6 del trámite. Se han terminado de cargar los archivos base.'),
(18, 13, 5, '[IBMETRO] Aprobación de Paso 6', 'Se ha aprobado el paso 6 del trámite. Se han terminado de cargar los archivos base.'),
(19, 14, 2, '[IBMETRO] Cotización por Revisión Documental', 'Se ha cargado la cotización por la Revisión Documental, por favor ingrese al sistema, al paso 7 y descarguela para realizar el pago correspondiente.'),
(20, 15, 5, '[IBMETRO] Carga de Factura Realizada', 'Se ha cargado la factura correspondiente a la Revisión Documental, por favor ingrese al paso 7 y realice la verificación correspondiente.'),
(21, 16, 4, '[IBMETRO] Factura por Revisión Documental Verificada', 'Se ha verificado la factura cargada por la OEC, por favor ingrese al paso 7 y apruebe u observe este paso.'),
(22, 17, 5, '[IBMETRO] Aprobación de Paso 7', 'La DA ha aprobado el Paso 7 del trámite.'),
(23, 17, 2, '[IBMETRO] Aprobación de Paso 7', 'Se ha aprobado el paso 7 de su trámite.'),
(24, 18, 2, '[IBMETRO] Aprobación de Paso 8', 'Se ha aprobado el paso 8 de su trámite.'),
(25, 18, 5, '[IBMETRO] Aprobación de Paso 8', 'Se ha aprobado el paso 8 del trámite.'),
(26, 18, 4, '[IBMETRO] Aprobación de Paso 8', 'Se ha aprobado el paso 8 del trámite.'),
(27, 19, 2, '[IBMETRO] Designación de Equipo Evaluador', 'Se ha finalizado la designación del equipo evaluador, debe ingresar al sistema, al Paso 9 para aprobar el equipo u observarlo.'),
(28, 20, 5, '[IBMETRO] Aprobación de Equipo Evaluador', 'La OEC ha aprobado la designación del Equipo Evaluador.'),
(29, 20, 4, '[IBMETRO] Aprobación de Equipo Evaluador', 'La OEC ha aprobado la designación del Equipo Evaluador.'),
(30, 21, 2, '[IBMETRO] Cotización por Evaluación', 'Se ha cargado la cotización por la Evaluación, por favor ingrese al sistema, al paso 10 y descarguela para realizar el pago correspondiente.'),
(31, 22, 5, '[IBMETRO] Carga de Factura Realizada', 'Se ha cargado la factura correspondiente a la Evaluación, por favor ingrese al paso 10 y realice la verificación correspondiente.'),
(32, 23, 4, '[IBMETRO] Factura por Evaluación Verificada', 'Se ha verificado la factura cargada por la OEC, por favor ingrese al paso 10 y apruebe u observe este paso.'),
(33, 24, 5, '[IBMETRO] Aprobación de Paso 10', 'La DA ha aprobado el Paso 10 del trámite.'),
(34, 24, 2, '[IBMETRO] Aprobación de Paso 10', 'Se ha aprobado el paso 10 de su trámite.'),
(35, 25, 2, '[IBMETRO] Aprobación de Documentación', 'Se ha aprobado la documentación del trámite, ingrese a su trámite, al paso 11 para cargar archivos adicionales si fuese necesario.'),
(36, 25, 5, '[IBMETRO] Aprobación de Documentación', 'Se ha aprobado la documentación del trámite.'),
(37, 25, 4, '[IBMETRO] Aprobación de Documentación', 'Se ha aprobado la documentación del trámite.'),
(38, 26, 4, '[IBMETRO] Archivos Adicionales Cargados', 'Se ha finalizado la carga de los archivos adicionales por parte de la OEC.'),
(39, 26, 5, '[IBMETRO] Archivos Adicionales Cargados', 'Se ha finalizado la carga de los archivos adicionales por parte de la OEC.'),
(40, 27, 5, '[IBMETRO] Formulario 024 Llenado', 'Se ha terminado de llenar el formulario 024.'),
(41, 28, 9, '[IBMETRO] Formularios 11 y 12 llenados', 'Se han llenado los formularios 11 y 12, por favor ingrese al paso 13 para llenar el formulario 38.'),
(42, 29, 6, '[IBMETRO] Formulario 38 llenado', 'Se ha llenado el formulario 38, por favor ingrese al paso 13 para llenar los formularios 31, 34 y 46.'),
(43, 30, 2, '[IBMETRO] Formularios 31, 34 y 46 llenados', 'Se han llenado los formularios 31, 34 y 46, por favor ingrese al paso 13 para llenar el formulario 33.'),
(44, 31, 5, '[IBMETRO] Formulario 33 llenado', 'Se ha terminado de llenar el formulario 33.'),
(45, 31, 2, '[IBMETRO] Formulario 33 llenado', 'Se ha terminado de llenar el formulario 33. Debe ingresar al sistema, al paso 14 y llenar los archivos de Plan de Acción.'),
(46, 32, 7, '[IBMETRO] Archivos de Plan de Acción Cargados', 'Se han terminado de cargar los archivos de Plan de Acción, ingrese al sistema en el paso 14 y apruebe u observe los archivos de Plan de Acción.'),
(47, 32, 5, '[IBMETRO] Archivos de Plan de Acción Cargados', 'Se han terminado de cargar los archivos de Plan de Acción, el Evaluador Lider debe ingresar al sistema en el paso 14 y aprobar u observar los archivos de Plan de Acción.'),
(48, 33, 2, '[IBMETRO] Archivos de Plan de Acción Aprobados', 'Se han aprobado los archivos del Plan de Acción, ingrese al sistema, al paso 15 para llenar el formulario 050.'),
(49, 33, 5, '[IBMETRO] Archivos de Plan de Acción Aprobados', 'Se han aprobado los archivos del Plan de Acción.'),
(50, 34, 5, '[IBMETRO] Formulario 050 Llenado', 'La OEC ha finalizado de llenar el formulario 050. Se debe ingresar al sistema y definir si es necesario un Comité Técnico.'),
(51, 35, 4, '[IBMETRO] Documentación Aprobada por RA', 'El Responsable de Acreditación ha aprobado la documentación del trámite. Debe ingresar al Paso 16 y aprobar u observar el trámite.'),
(52, 37, 5, '[IBMETRO] Llenado de Formulario 026', 'La OEC ha finalizado de llenar el formulario 026.'),
(53, 38, 2, '[IBMETRO] Certificado Aprobado', 'Se ha aprobado el certificado de su trámite.'),
(54, 38, 3, '[IBMETRO] Certificado Aprobado', 'Se ha aprobado el certificado del trámite: [codigo_tramite], los miembros del consejo deben ingresar y aprobar el trámite.'),
(55, 39, 5, '[IBMETRO] Trámite aprobado por el Consejo', 'El consejo ha aprobado el trámite: [codigo_tramite], se debe cargar el acta del consejo en el Paso 19.'),
(56, 40, 5, '[IBMETRO] Acta de Consejo Cargada', 'Se ha cagado el acta del consejo en el trámite: [codigo_tramite]'),
(57, 41, 2, '[IBMETRO] Cotización por Concesión y Mantenimiento', 'Se ha cargado la cotización por la Concesión y Mantenimiento, por favor ingrese al sistema, al paso 20 y descarguela para realizar el pago correspondiente.'),
(58, 42, 5, '[IBMETRO] Carga de Factura Realizada', 'Se ha cargado la factura correspondiente a la Concesión y Mantenimiento, por favor ingrese al paso 20 y realice la verificación correspondiente.'),
(59, 43, 4, '[IBMETRO] Factura por Concesión y Mantenimiento Verificada', 'Se ha verificado la factura cargada por la OEC, por favor ingrese al paso 20 y apruebe u observe este paso.'),
(60, 44, 5, '[IBMETRO] Aprobación de Paso 20', 'La DA ha aprobado el Paso 20 del trámite.'),
(61, 44, 2, '[IBMETRO] Aprobación de Paso 20', 'Se ha aprobado el paso 20 de su trámite.'),
(62, 46, 3, '[IBMETRO] Informe para Consejo Cargado', 'Se ha cargado el informe para el Consejo referente al trámite con código [codigo_tramite]');

-- --------------------------------------------------------

--
-- Table structure for table `accion_tipo_01_02_04`
--

CREATE TABLE IF NOT EXISTS `accion_tipo_01_02_04` (
  `id_accion_tipo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `nombre_accion_tipo` varchar(145) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_accion_tipo`),
  UNIQUE KEY `nombre_accion_tipo_UNIQUE` (`nombre_accion_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `accion_tipo_01_02_04`
--

INSERT INTO `accion_tipo_01_02_04` (`id_accion_tipo`, `nombre_accion_tipo`) VALUES
(1, 'aprobar'),
(2, 'cancelar'),
(3, 'denegar'),
(4, 'reiniciar'),
(5, 'resolver');

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
(4, 11),
(5, 12),
(6, 13),
(7, 14),
(7, 15),
(7, 16),
(7, 17),
(8, 18),
(9, 19),
(9, 20),
(10, 21),
(10, 22),
(10, 23),
(10, 24),
(11, 25),
(11, 26),
(12, 27),
(13, 29),
(13, 30),
(13, 31),
(13, 32),
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
-- Table structure for table `actividad_01_05_01`
--

CREATE TABLE IF NOT EXISTS `actividad_01_05_01` (
  `id_actividad` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `fk_id_actividad_tipo` int(11) NOT NULL,
  `fk_id_proceso` int(11) NOT NULL,
  `nombre_actividad` varchar(145) NOT NULL COMMENT 'display;search',
  `descripcion_actividad` text,
  PRIMARY KEY (`id_actividad`),
  UNIQUE KEY `nombre_actividad_UNIQUE` (`nombre_actividad`),
  KEY `fk_actividad_proceso_actividad_tipo1_idx` (`fk_id_actividad_tipo`),
  KEY `fk_actividad_proceso_proceso1_idx` (`fk_id_proceso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `actividad_economica_02_00_04`
--

CREATE TABLE IF NOT EXISTS `actividad_economica_02_00_04` (
  `id_actividad_economica` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_actividad_economica` varchar(245) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_actividad_economica`),
  UNIQUE KEY `nombre_actividad_economica_UNIQUE` (`nombre_actividad_economica`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `actividad_economica_02_00_04`
--

INSERT INTO `actividad_economica_02_00_04` (`id_actividad_economica`, `nombre_actividad_economica`) VALUES
(1, 'AGRICULTURA, GANADERÍA, CAZA Y SILVICULTURA'),
(2, 'COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHÍCULOS'),
(3, 'CONSTRUCCIÓN'),
(4, 'EXPLOTACIÓN DE MINAS Y CANTERAS'),
(5, 'HOTELES Y RESTAURANTES'),
(6, 'INDUSTRIA MANUFACTURERA'),
(7, 'INTERMEDIACIÓN FINANCIERA'),
(8, 'PESCA'),
(9, 'SISTEMAS'),
(10, 'SUMINISTRO DE ELECTRICIDAD, GAS Y AGUA'),
(11, 'TRANSPORTE, ALMACENAMIENTO Y COMUNICACIONES');

-- --------------------------------------------------------

--
-- Table structure for table `actividad_estado_01_06_02`
--

CREATE TABLE IF NOT EXISTS `actividad_estado_01_06_02` (
  `fk_id_actividad` int(11) NOT NULL COMMENT 'main',
  `fk_id_estado` int(11) NOT NULL,
  PRIMARY KEY (`fk_id_actividad`,`fk_id_estado`),
  KEY `fk_actividad_estado_actividad1_idx` (`fk_id_actividad`),
  KEY `fk_actividad_estado_estado1_idx` (`fk_id_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `actividad_tipo_01_05_04`
--

CREATE TABLE IF NOT EXISTS `actividad_tipo_01_05_04` (
  `id_actividad_tipo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `nombre_actividad_tipo` varchar(145) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_actividad_tipo`),
  UNIQUE KEY `nombre_actividad_tipo_UNIQUE` (`nombre_actividad_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `actividad_transicion_01_05_02`
--

CREATE TABLE IF NOT EXISTS `actividad_transicion_01_05_02` (
  `fk_id_actividad` int(11) NOT NULL COMMENT 'main',
  `fk_id_transicion` int(11) NOT NULL,
  PRIMARY KEY (`fk_id_actividad`,`fk_id_transicion`),
  KEY `fk_actividad_transicion_actividad1_idx` (`fk_id_actividad`),
  KEY `fk_actividad_transicion_transicion1_idx` (`fk_id_transicion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `alcance_acreditacion_cert_03_00_03`
--

CREATE TABLE IF NOT EXISTS `alcance_acreditacion_cert_03_00_03` (
  `id_alcance_acreditacion_cert` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_evaluacion` int(11) NOT NULL,
  `producto_alcance_acreditacion_cert` text,
  `norma_referencia_alcance_acreditacion_cert` text,
  `sector_economico_alcance_acreditacion_cert` text,
  `actividad_alcance_acreditacion_cert` text,
  `codigo_iaf_alcance_acreditacion_cert` text,
  PRIMARY KEY (`id_alcance_acreditacion_cert`),
  KEY `fk_alcance_acreditacion_cert_evaluacion1_idx` (`fk_id_evaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `alcance_acreditacion_cert_04_13_03`
--

CREATE TABLE IF NOT EXISTS `alcance_acreditacion_cert_04_13_03` (
  `id_alcance_acreditacion_cert` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_anexo_convenio` int(11) NOT NULL,
  `fecha_acreditacion_alcance_acreditacion_cert` date DEFAULT NULL,
  `producto_alcance_acreditacion_cert` text,
  `norma_referencia_alcance_acreditacion_cert` text,
  `sector_economico_alcance_acreditacion_cert` text,
  `actividad_sector_alcance_acreditacion_cert` text,
  `codigo_iaf_alcance_acreditacion_cert` text,
  PRIMARY KEY (`id_alcance_acreditacion_cert`),
  KEY `fk_alcance_acreditacion_cert_anexo_convenio1_idx` (`fk_id_anexo_convenio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `alcance_acreditacion_insp_03_00_03`
--

CREATE TABLE IF NOT EXISTS `alcance_acreditacion_insp_03_00_03` (
  `id_alcance_acreditacion_insp` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_evaluacion` int(11) NOT NULL,
  `procedimiento_inspeccion_alcance_acreditacion_insp` text,
  `norma_referencia_alcance_acreditacion_insp` text,
  `items_inspeccionados_alcance_acreditacion_insp` text,
  `items_referencia_alcance_acreditacion_insp` text,
  `signatario_alcance_acreditacion_insp` text,
  PRIMARY KEY (`id_alcance_acreditacion_insp`),
  KEY `fk_alcance_acreditacion_insp_evaluacion1_idx` (`fk_id_evaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `alcance_acreditacion_insp_04_13_03`
--

CREATE TABLE IF NOT EXISTS `alcance_acreditacion_insp_04_13_03` (
  `id_alcance_acreditacion_insp` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_anexo_convenio` int(11) NOT NULL,
  `fecha_acreditacion_alcance_acreditacion_insp` date DEFAULT NULL,
  `procedimiento_alcance_acreditacion_insp` text,
  `norma_ref_alcance_acreditacion_insp` text,
  `items_inspeccionados_alcance_acreditacion_insp` text,
  `items_referencia_alcance_acreditacion_insp` text,
  `signatario_alcance_acreditacion_insp` text,
  PRIMARY KEY (`id_alcance_acreditacion_insp`),
  KEY `fk_alcance_acreditacion_anexo_convenio1_idx` (`fk_id_anexo_convenio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `alcance_acreditacion_lab_03_00_03`
--

CREATE TABLE IF NOT EXISTS `alcance_acreditacion_lab_03_00_03` (
  `id_alcance_acreditacion_lab` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_evaluacion` int(11) NOT NULL,
  `descripcion_ensayo_alcance_acreditacion_lab` text,
  `metodo_ensayo_alcance_acreditacion_lab` text,
  `rango_medicion_alcance_acreditacion_lab` text,
  `incertidumbre_alcance_acreditacion_lab` text,
  PRIMARY KEY (`id_alcance_acreditacion_lab`),
  KEY `fk_alcance_acreditacion_lab_evaluacion1_idx` (`fk_id_evaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `anexo_convenio_04_13_01`
--

CREATE TABLE IF NOT EXISTS `anexo_convenio_04_13_01` (
  `id_anexo_convenio` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_norma_referencia` int(11) NOT NULL,
  `responsable_anexo_convenio` varchar(200) DEFAULT NULL COMMENT 'display',
  `cargo_anexo_convenio` varchar(200) DEFAULT NULL,
  `fecha_anexo_convenio` date DEFAULT NULL,
  `cips_anexo_convenio` varchar(200) DEFAULT NULL,
  `numero_anexo_convenio` varchar(200) DEFAULT NULL,
  `escaneado_anexo_convenio` varchar(200) DEFAULT NULL COMMENT 'file',
  `estado_anexo_convenio` tinyint(1) DEFAULT NULL,
  `fecha_creacion_anexo_convenio` datetime DEFAULT NULL,
  PRIMARY KEY (`id_anexo_convenio`),
  KEY `fk_anexo_convenio_norma_referencia1_idx` (`fk_id_norma_referencia`),
  KEY `fk_anexo_convenio_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `anexo_convenio_04_13_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual19`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual19` BEFORE INSERT ON `anexo_convenio_04_13_01`
 FOR EACH ROW SET NEW.fecha_creacion_anexo_convenio = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `aspectos_evaluados_04_08_03`
--

CREATE TABLE IF NOT EXISTS `aspectos_evaluados_04_08_03` (
  `id_aspectos_evaluados` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_eval_tecnica` int(11) NOT NULL,
  `nombre_aspectos_evaluados` text,
  `educacion_aspectos_evaluados` text,
  `formacion_aspectos_evaluados` text,
  `experiencia_aspectos_evaluados` text,
  `habilidades_aspectos_evaluados` text,
  PRIMARY KEY (`id_aspectos_evaluados`),
  KEY `fk_aspectos_evaluados_eval_tecnica1_idx` (`fk_id_eval_tecnica`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `campo_calibracion_04_00_04`
--

CREATE TABLE IF NOT EXISTS `campo_calibracion_04_00_04` (
  `id_campo_calibracion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_campo_calibracion` varchar(245) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_campo_calibracion`),
  UNIQUE KEY `nombre_campo_calibracion_UNIQUE` (`nombre_campo_calibracion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `campo_calibracion_04_00_04`
--

INSERT INTO `campo_calibracion_04_00_04` (`id_campo_calibracion`, `nombre_campo_calibracion`) VALUES
(7, 'Acústica y/o vibraciones'),
(1, 'Dimensional'),
(9, 'Electricidad'),
(3, 'Fuerza y/o Dureza'),
(2, 'Masa'),
(13, 'Óptica'),
(4, 'Presión'),
(14, 'Radiaciones ionizantes'),
(12, 'Radiofrecuencia'),
(10, 'Temperatura y/o humedad'),
(11, 'Tiempo y/o frecuencia'),
(6, 'Vacío'),
(8, 'Viscosidad'),
(5, 'Volumetría y/o masa específica');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



-- --------------------------------------------------------

--
-- Table structure for table `criterio_evaluacion_04_00_04`
--

CREATE TABLE IF NOT EXISTS `criterio_evaluacion_04_00_04` (
  `id_criterio_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `nombre_criterio_evaluacion` varchar(145) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_criterio_evaluacion`),
  UNIQUE KEY `nombre_criterio_evaluacion_UNIQUE` (`nombre_criterio_evaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `criterio_satisfaccion_04_12_04`
--

CREATE TABLE IF NOT EXISTS `criterio_satisfaccion_04_12_04` (
  `id_criterio_satisfaccion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `nombre_criterio_satisfaccion` varchar(200) NOT NULL COMMENT 'display',
  `estado_criterio_satisfaccion` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_criterio_satisfaccion`),
  UNIQUE KEY `nombre_criterio_satisfaccion_UNIQUE` (`nombre_criterio_satisfaccion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `criterio_supervision_04_11_04`
--

CREATE TABLE IF NOT EXISTS `criterio_supervision_04_11_04` (
  `id_criterio_supervision` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `tipo_criterio_supervision` set('admin','eval') NOT NULL COMMENT 'display',
  `pregunta_criterio_supervision` varchar(200) NOT NULL,
  `estado_criterio_supervision` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_criterio_supervision`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `designacion_evaluador_04_10_01`
--

CREATE TABLE IF NOT EXISTS `designacion_evaluador_04_10_01` (
  `id_designacion_evaluador` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `por_dta_nombre_designacion_evaluador` varchar(250) DEFAULT NULL,
  `por_dta_fecha_designacion_evaluador` date DEFAULT NULL,
  `fecha_creacion_designacion_evaluador` datetime DEFAULT NULL,
  PRIMARY KEY (`id_designacion_evaluador`),
  KEY `fk_designacion_evaluador_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `designacion_evaluador_04_10_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual15`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual15` BEFORE INSERT ON `designacion_evaluador_04_10_01`
 FOR EACH ROW SET NEW.fecha_creacion_designacion_evaluador = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `detalle_calibracion_04_03_01`
--

CREATE TABLE IF NOT EXISTS `detalle_calibracion_04_03_01` (
  `id_detalle_calibracion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_campo_calibracion` int(11) NOT NULL,
  `estado_detalle_calibracion` tinyint(1) NOT NULL,
  `objetivo_detalle_calibracion` set('acreditacion_inicial','reacreditacion','extension_acreditacion') DEFAULT NULL,
  `descripcion_detalle_calibracion` text,
  `norma_detalle_calibracion` text,
  `equipo_calibrado_detalle_calibracion` text,
  `tipo_servicio_detalle_calibracion` set('eil','elm','fl') DEFAULT NULL COMMENT 'eli = Realizado en las instalaciones del laboratorio; elm = Realizado en laboratorio movil; fl = Realizado fuera de laboratorio.',
  `personal_autorizado_detalle_calibracion` text,
  `rango_calibracion_detalle_calibracion` text,
  `mejor_capacidad_medicion_detalle_calibracion` text,
  `equipos_utilizados_detalle_calibracion` text,
  `ad_estimacion_incertidumbre_detalle_calibracion` text,
  `ad_patrones_referencia_detalle_calibracion` text,
  `ad_manipulacion_patrones_referencia_detalle_calibracion` text,
  `ad_fecha_ultima_calibracion_detalle_calibracion` date DEFAULT NULL,
  `ad_organismo_realizo_calibracion_detalle_calibracion` text,
  `ad_certificado_calibracion_detalle_calibracion` text,
  `ad_fecha_proxima_calibracion_detalle_calibracion` date DEFAULT NULL,
  `ad_declaracion_trazabilidad_detalle_calibracion` text,
  `ad_criterio_aceptacion_detalle_calibracion` text,
  `ad_comparaciones_interlaboratorios_detalle_calibracion` text,
  `fecha_creacion_detalle_calibracion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_detalle_calibracion`),
  KEY `fk_detalle_calibracion_peticion1_idx` (`fk_id_peticion`),
  KEY `fk_detalle_calibracion_campo_calibracion1_idx` (`fk_id_campo_calibracion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `detalle_calibracion_04_03_01`
--

--
-- Triggers `detalle_calibracion_04_03_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual8`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual8` BEFORE INSERT ON `detalle_calibracion_04_03_01`
 FOR EACH ROW SET NEW.fecha_creacion_detalle_calibracion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `detalle_certificacion_04_05_01`
--

CREATE TABLE IF NOT EXISTS `detalle_certificacion_04_05_01` (
  `id_detalle_certificacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `estado_detalle_certificacion` tinyint(1) NOT NULL,
  `objetivo_detalle_certificacion` set('acreditacion_inicial','reacreditacion','extension_acreditacion') DEFAULT NULL,
  `tipo_certificacion_detalle_certificacion` set('sis-gestion','producto','persona') DEFAULT NULL,
  `documento_normativo_detalle_certificacion` text,
  `procedimiento_certificacion_detalle_certificacion` text,
  `producto_certificar_detalle_certificacion` text,
  `codigo_nace_detalle_certificacion` text,
  `auditores_calificados_detalle_certificacion` text,
  `expertos_tecnicos_detalle_certificacion` text,
  `observaciones_detalle_certificacion` text,
  `ensayos_en_produccto_detalle_certificacion` text,
  `laboratorios_ensayos_detalle_certificacion` text,
  `fecha_creacion_detalle_certificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_detalle_certificacion`),
  KEY `fk_detalle_certificacion_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `detalle_certificacion_04_05_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual10`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual10` BEFORE INSERT ON `detalle_certificacion_04_05_01`
 FOR EACH ROW SET NEW.fecha_creacion_detalle_certificacion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `detalle_equipos_04_02_01`
--

CREATE TABLE IF NOT EXISTS `detalle_equipos_04_02_01` (
  `id_detalle_equipos` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `estado_detalle_equipos` tinyint(1) NOT NULL,
  `objetivo_detalle_equipos` set('acreditacion_inicial','reacreditacion','extension_acreditacion') DEFAULT NULL,
  `nombre_detalle_equipos` text,
  `norma_detalle_equipos` text,
  `matriz_detalle_equipos` text,
  `tipo_equipo_detalle_equipos` text,
  `personal_responsable_detalle_equipos` text,
  `codigo_equipo_detalle_equipos` text,
  `numero_serie_detalle_equipos` text,
  `nombre_fabricante_detalle_equipos` text,
  `fecha_puesta_servicio_detalle_equipos` date DEFAULT NULL,
  `fecha_ultima_calibracion_detalle_equipos` date DEFAULT NULL,
  `organismo_realizo_calibracion_detalle_equipos` text,
  `certificado_calibracion_detalle_equipos` text,
  `fecha_proxima_calibracion_detalle_equipos` date DEFAULT NULL,
  `criterio_aceptacion_cert_detalle_equipos` set('lab-ibmetro','lab-rec-ibmetro','lab-acred-dta','lab-otros-inm','lab-acred-ona','solucion-dta-oec') DEFAULT NULL,
  `procedimientos_uso_detalle_equipos` text,
  `patrones_comprobaciones_detalle_equipos` text,
  `fecha_creacion_detalle_equipos` datetime DEFAULT NULL,
  PRIMARY KEY (`id_detalle_equipos`),
  KEY `fk_detalle_equipos_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `detalle_equipos_04_02_01`
--


--
-- Triggers `detalle_equipos_04_02_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual7`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual7` BEFORE INSERT ON `detalle_equipos_04_02_01`
 FOR EACH ROW SET NEW.fecha_creacion_detalle_equipos = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `detalle_inspeccion_04_04_01`
--

CREATE TABLE IF NOT EXISTS `detalle_inspeccion_04_04_01` (
  `id_detalle_inspeccion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `estado_detalle_inspeccion` tinyint(1) NOT NULL,
  `objetivo_detalle_inspeccion` set('acreditacion_inicial','reacreditacion','extension_acreditacion') DEFAULT NULL,
  `nombre_detalle_inspeccion` text,
  `tipo_detalle_inspeccion` set('a','b','c') DEFAULT NULL,
  `matriz_inspeccionada_detalle_inspeccion` text,
  `documento_normativo_detalle_inspeccion` text,
  `procedimiento_inspeccion_detalle_inspeccion` text,
  `inspeccion_se_realiza_detalle_inspeccion` set('solo-of-principal-oi','solo-delef-oi','of-principal-deleg-oi','fuera-inst-oi') DEFAULT NULL,
  `direccion_delegaciones_detalle_inspeccion` text,
  `inspectores_autorizados_detalle_inspeccion` text,
  `equipos_utilizados_inspeccion_detalle_inspeccion` text,
  `ad_patrones_referencia_detalle_inspeccion` text,
  `ad_material_referencia_cert_detalle_inspeccion` text,
  `fecha_creacion_detalle_inspeccion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_detalle_inspeccion`),
  KEY `fk_detalle_inspeccion_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `detalle_inspeccion_04_04_01`
--


--
-- Triggers `detalle_inspeccion_04_04_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual9`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual9` BEFORE INSERT ON `detalle_inspeccion_04_04_01`
 FOR EACH ROW SET NEW.fecha_creacion_detalle_inspeccion = NOW()
//
DELIMITER ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `equipo_peticion_01_07_01`
--


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
-- Table structure for table `estado_notificacion_01_02_03`
--

CREATE TABLE IF NOT EXISTS `estado_notificacion_01_02_03` (
  `id_estado_notificacion` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_estado` int(11) NOT NULL,
  `fk_id_usuario_tipo` int(11) NOT NULL,
  `asunto_estado_notificacion` varchar(145) NOT NULL,
  `mensaje_estado_notificacion` text NOT NULL,
  PRIMARY KEY (`id_estado_notificacion`),
  KEY `fk_estado_notificacion_estado_01_06_011_idx` (`fk_id_estado`),
  KEY `fk_estado_notificacion_usuario_tipo_00_02_011_idx` (`fk_id_usuario_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `estado_notificacion_01_02_03`
--

INSERT INTO `estado_notificacion_01_02_03` (`id_estado_notificacion`, `fk_id_estado`, `fk_id_usuario_tipo`, `asunto_estado_notificacion`, `mensaje_estado_notificacion`) VALUES
(1, 1, 2, '[IBMETRO] Inicio de Trámite', 'Se ha iniciado su trámite de acreditación, su código de trámite es: {codigo_peticion}'),
(2, 1, 4, '[IBMETRO] Inicio de Trámite', 'Se ha iniciado un nuevo trámite con el código: {codigo_peticion}'),
(3, 2, 5, '[IBMETRO] Aprobación de Paso 1', 'El trámite {codigo_peticion} ha pasado a un nuevo estado. Se ha terminado el llenado del formulario 002.'),
(4, 2, 4, '[IBMETRO] Aprobación de Paso 1', 'El trámite {codigo_peticion} ha pasado a un nuevo estado. Se ha terminado el llenado del formulario 002.'),
(5, 3, 2, '[IBMETRO] Aprobación de Paso 2', 'Su trámite con código {codigo_peticion} ha sido aprobado para la pertinencia. Ahora ha pasado al paso 3.'),
(6, 4, 2, '[IBMETRO] Aprobación de Paso 3', 'El consejo ha aprobado la pertinencia de su trámite, ahora esta en el paso 4.'),
(7, 4, 5, '[IBMETRO] Aprobación de Paso 3', 'El consejo ha aprobado la pertinencia del trámite: {codigo_peticion}, ahora está en el paso 4.'),
(8, 5, 2, '[IBMETRO] Aprobación de Paso 4', 'Se ha aprobado la Apertura de su Expediente para el trámite: {codigo_peticion}, ahora su trámite está en el paso 5.'),
(9, 5, 5, '[IBMETRO] Aprobación de Paso 4', 'Se ha aprobado la Apertura de Expediente para el trámite: {codigo_peticion}, ahora el trámite está en el paso 5.'),
(10, 6, 5, '[IBMETRO] Aprobación de Paso 5', 'Se ha terminado de cargar los formularios 50s en el trámite {codigo_peticion}'),
(11, 7, 5, '[IBMETRO] Aprobación de Paso 6', 'Se han terminado de cargar los Archivos Base en el trámite {codigo_peticion}'),
(12, 8, 2, '[IBMETRO] Aprobación de Paso 7', 'Se ha aprobado la Revisión Documental para el trámite: {codigo_peticion}, ahora su trámite está en el paso 8.'),
(13, 8, 5, '[IBMETRO] Aprobación de Paso 7', 'Se ha aprobado la Revisión Documental para el trámite: {codigo_peticion}, ahora el trámite está en el paso 8.'),
(14, 9, 5, '[IBMETRO] Aprobación de Paso 8', 'Se ha aprobado la Documentación para el trámite: {codigo_peticion}, ahora el trámite está en el paso 9.'),
(15, 10, 2, '[IBMETRO] Aprobación de Paso 9', 'Se ha aprobado el Grupo Evaluador para su trámite: {codigo_peticion}, ahora el trámite está en el paso 9.'),
(16, 10, 5, '[IBMETRO] Aprobación de Paso 9', 'Se ha aprobado el Grupo Evaluador para el trámite: {codigo_peticion}, ahora el trámite está en el paso 10.'),
(17, 11, 2, '[IBMETRO] Aprobación de Paso 10', 'Se ha aprobado la Evaluación para el trámite: {codigo_peticion}, ahora su trámite está en el paso 11.'),
(18, 11, 2, '[IBMETRO] Aprobación de Paso 10', 'Se ha aprobado la Evaluación para el trámite: {codigo_peticion}, ahora el trámite está en el paso 11.'),
(19, 12, 2, '[IBMETRO] Aprobación de Paso 11', 'Se ha aprobado la Revisión Documental para el trámite: {codigo_peticion}, ahora el trámite está en el paso 12.'),
(20, 12, 5, '[IBMETRO] Aprobación de Paso 11', 'Se ha aprobado la Revisión Documental para el trámite: {codigo_peticion}, ahora el trámite está en el paso 12.'),
(21, 13, 2, '[IBMETRO] Aprobación de Paso 12', 'Se ha terminado de llenar el Formulario 024 del trámite: {codigo_peticion}, ahora el trámite está en el paso 13.'),
(22, 13, 5, '[IBMETRO] Aprobación de Paso 12', 'Se ha terminado de llenar el Formulario 024 del trámite: {codigo_peticion}, ahora el trámite está en el paso 13.'),
(23, 14, 5, '[IBMETRO] Aprobación de Paso 13', 'Se ha terminado de llenar los Formularios Adicionales del trámite: {codigo_peticion}, ahora el trámite está en el paso 14.'),
(24, 14, 2, '[IBMETRO] Aprobación de Paso 13', 'Se ha terminado de llenar los Formularios Adicionales del trámite: {codigo_peticion}, ahora el trámite está en el paso 14.'),
(25, 15, 2, '[IBMETRO] Aprobación de Paso 14', 'Se ha terminado de llenar los Archivos del Plan de Acción del trámite: {codigo_peticion}, ahora el trámite está en el paso 15.'),
(26, 15, 5, '[IBMETRO] Aprobación de Paso 14', 'Se ha terminado de llenar los Archivos del Plan de Acción del trámite: {codigo_peticion}, ahora el trámite está en el paso 15.'),
(27, 16, 2, '[IBMETRO] Aprobación de Paso 15', 'Se ha terminado de llenar el Formulario 050 del trámite: {codigo_peticion}, ahora el trámite está en el paso 16.'),
(28, 16, 5, '[IBMETRO] Aprobación de Paso 15', 'Se ha terminado de llenar el Formulario 050 del trámite: {codigo_peticion}, ahora el trámite está en el paso 16.'),
(29, 17, 4, '[IBMETRO] Aprobación de Paso 16', 'El Comité Técnico ha aprobado el trámite: {codigo_peticion}, ahora el trámite está en el paso 17.'),
(30, 17, 2, '[IBMETRO] Aprobación de Paso 16', 'El Comité Técnico ha aprobado el trámite: {codigo_peticion}, ahora el trámite está en el paso 17.'),
(31, 17, 4, '[IBMETRO] Aprobación de Paso 16', 'Se ha terminado de llenar los Archivos del Plan de Acción del trámite: {codigo_peticion}, ahora el trámite está en el paso 17.'),
(32, 18, 2, '[IBMETRO] Aprobación de Paso 17', 'Se ha terminado de llenar el Formulario 026 del trámite: {codigo_peticion}, ahora el trámite está en el paso 18.'),
(33, 18, 5, '[IBMETRO] Aprobación de Paso 17', 'Se ha terminado de llenar el Formulario 026 del trámite: {codigo_peticion}, ahora el trámite está en el paso 18.'),
(34, 19, 2, '[IBMETRO] Aprobación de Paso 18', 'Se ha generado el Certificado del trámite: {codigo_peticion}, ahora el trámite está en el paso 19.'),
(35, 20, 2, '[IBMETRO] Aprobación de Paso 19', 'El consejo ha aprobado el trámite: {codigo_peticion}, ahora el trámite está en el paso 20.'),
(36, 21, 2, '[IBMETRO] Aprobación de Paso 20 (Trámite Finalizado)', 'El consejo ha aprobado el trámite: {codigo_peticion}, el trámite ha concluido.'),
(37, 21, 4, '[IBMETRO] Aprobación de Paso 20 (Trámite Finalizado)', 'El consejo ha aprobado el trámite: {codigo_peticion}, el trámite ha concluido.'),
(38, 21, 5, '[IBMETRO] Aprobación de Paso 20 (Trámite Finalizado)', 'El consejo ha aprobado el trámite: {codigo_peticion}, el trámite ha concluido.');

-- --------------------------------------------------------

--
-- Table structure for table `estado_tipo_01_06_04`
--

CREATE TABLE IF NOT EXISTS `estado_tipo_01_06_04` (
  `id_estado_tipo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `nombre_proceso_estado` varchar(145) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_estado_tipo`),
  UNIQUE KEY `nombre_proceso_estado_UNIQUE` (`nombre_proceso_estado`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `estado_tipo_01_06_04`
--

INSERT INTO `estado_tipo_01_06_04` (`id_estado_tipo`, `nombre_proceso_estado`) VALUES
(5, 'cancelado'),
(3, 'completado'),
(4, 'denegado'),
(1, 'inicio'),
(2, 'normal');

-- --------------------------------------------------------

--
-- Table structure for table `evaluacion_03_00_01`
--

CREATE TABLE IF NOT EXISTS `evaluacion_03_00_01` (
  `id_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_oec_contacto_alta_direccion` int(11) NOT NULL,
  `fk_id_oec_contacto_gerente_tecnico` int(11) NOT NULL,
  `fk_id_oec_contacto_gerente_calidad` int(11) NOT NULL,
  `codigo_evaluacion` varchar(45) NOT NULL COMMENT 'display;search',
  `fecha_inicio_evaluacion` date DEFAULT NULL COMMENT 'search',
  `fecha_fin_evaluacion` date DEFAULT NULL,
  `objetivo_evaluacion` text,
  `documento_referencia_evaluacion` text,
  `identificacion_manual_evaluacion` text,
  `fecha_reunion_inicial_evaluacion` date DEFAULT NULL,
  `hora_reunion_inicial_evaluacion` time DEFAULT NULL,
  `fecha_reunion_ee_evaluacion` date DEFAULT NULL,
  `hora_reunion_ee_evaluacion` time DEFAULT NULL,
  `fecha_reunion_final_evaluacion` date DEFAULT NULL,
  `hora_reunion_final_evaluacion` time DEFAULT NULL,
  `idioma_evaluacion` set('es','en') DEFAULT NULL COMMENT 'es = Espanol, en = English',
  `observacion_ra_oec_evaluacion` text,
  `observacion_ra_ee_evaluacion` text,
  `cumplimiento_etapas_evaluacion` text,
  `recomendacion_ra_evaluacion` text,
  `recomendacion_fecha_evaluacion` date DEFAULT NULL,
  `decision_da_evaluacion` text,
  `decision_fecha_da_evaluacion` date DEFAULT NULL,
  `fecha_creacion_evaluacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_evaluacion`),
  KEY `fk_evaluacion_oec_contacto1_idx` (`fk_id_oec_contacto_alta_direccion`),
  KEY `fk_evaluacion_oec_contacto2_idx` (`fk_id_oec_contacto_gerente_tecnico`),
  KEY `fk_evaluacion_oec_contacto3_idx` (`fk_id_oec_contacto_gerente_calidad`),
  KEY `fk_evaluacion_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `evaluacion_03_00_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual5`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual5` BEFORE INSERT ON `evaluacion_03_00_01`
 FOR EACH ROW SET NEW.fecha_creacion_evaluacion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `eval_tecnica_04_08_01`
--

CREATE TABLE IF NOT EXISTS `eval_tecnica_04_08_01` (
  `id_eval_tecnica` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios;display',
  `fk_id_peticion` int(11) NOT NULL,
  `area_ensayo_eval_tecnica` text,
  `metodo_ensayo_eval_tecnica` text,
  `lista_signatarios_eval_tecnica` text,
  `supervision_personal_eval_tecnica` text,
  `autorizacion_eval_tecnica` text,
  `adecuacion_eval_tecnica` text,
  `seguimiento_eval_tecnica` text,
  `separacion_areas_eval_tecnica` text,
  `control_acceso_eval_tecnica` text,
  `orden_limpieza_eval_tecnica` text,
  `uso_metodos_apropiados_eval_tecnica` text,
  `confirmacion_metodos_eval_tecnica` text,
  `instructivo_uso_eval_tecnica` text,
  `validacion_desviaciones_eval_tecnica` text,
  `estimacion_incertidumbre_eval_tecnica` text,
  `verificacion_calculos_eval_tecnica` text,
  `procedimientos_calibracion_eval_tecnica` text,
  `trazabilidad_calibracion_eval_tecnica` text,
  `disponibilidad_material_eval_tecnica` text,
  `certificados_calibracion_eval_tecnica` text,
  `plan_muestreo_eval_tecnica` text,
  `registros_muestreo_eval_tecnica` text,
  `tecnicas_estadisticas_eval_tecnica` text,
  `procedimiento_muestras_eval_tecnica` text,
  `sistema_identificacion_eval_tecnica` text,
  `adecuacion_instalaciones_eval_tecnica` text,
  `procedimiento_aseguramiento_eval_tecnica` text,
  `uso_regular_material_eval_tecnica` text,
  `participacion_intercomparaciones_eval_tecnica` text,
  `repeticion_ensayos_eval_tecnica` text,
  `correlacion_eval_tecnica` text,
  `registro_aseguramiento_eval_tecnica` text,
  `formatos_apropiados_eval_tecnica` text,
  `cumple_requisitos_norma_eval_tecnica` text,
  `documentacion_opiniones_eval_tecnica` text,
  `seguridad_transmision_eval_tecnica` text,
  `confidencialidad_eval_tecnica` text,
  `criterios_insertidumbre_eval_tecnica` text,
  `criterios_trazabilidad_eval_tecnica` text,
  `numero_requisito_eval_tecnica` text,
  `comentario_requisito_eval_tecnica` text,
  `conclusion_eval_tecnica` text,
  `fecha_inicio_eval_tecnica` date DEFAULT NULL,
  `fecha_fin_eval_tecnica` date DEFAULT NULL,
  `hora_inicio_eval_tecnica` int(11) DEFAULT NULL,
  `hora_fin_eval_tecnica` time DEFAULT NULL,
  `fecha_creacion_eval_tecnica` datetime DEFAULT NULL,
  PRIMARY KEY (`id_eval_tecnica`),
  KEY `fk_eval_tecnica_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='				' AUTO_INCREMENT=1 ;

--
-- Triggers `eval_tecnica_04_08_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual13`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual13` BEFORE INSERT ON `eval_tecnica_04_08_01`
 FOR EACH ROW SET NEW.fecha_creacion_eval_tecnica = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `informe_acred_04_13_01`
--

CREATE TABLE IF NOT EXISTS `informe_acred_04_13_01` (
  `id_informe_acred` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `observaciones_ra_oec_informe_acred` text,
  `observaciones_ra_ee_informe_acred` text,
  `cumplimiento_etapas_informe_acred` text,
  `recomendacion_ra_informe_acred` text,
  `recomendacion_fecha_informe_acred` date DEFAULT NULL,
  `toma_decision_da_informe_acred` text,
  `toma_decision_da_fecha_informe_acred` date DEFAULT NULL,
  `fecha_creacion_informe_acred` datetime DEFAULT NULL,
  PRIMARY KEY (`id_informe_acred`),
  KEY `fk_informe_acred_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `informe_acred_04_13_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual18`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual18` BEFORE INSERT ON `informe_acred_04_13_01`
 FOR EACH ROW SET NEW.fecha_creacion_informe_acred = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `informe_evaluacion_04_06_01`
--

CREATE TABLE IF NOT EXISTS `informe_evaluacion_04_06_01` (
  `id_informe_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `fecha_inicio_informe_evaluacion` date DEFAULT NULL,
  `fecha_fin_informe_evaluacion` date DEFAULT NULL,
  `lugar_informe_evaluacion` text,
  `objetivo_informe_evaluacion` set('acreditacion_inicial','reacreditacion','extension_acreditacion') DEFAULT NULL,
  `documentos_referencia_informe_evaluacion` text,
  `instalaciones_visitadas_informe_evaluacion` text,
  `profesionales_visitados_informe_evaluacion` text,
  `equipo_evaluador_informe_evaluacion` text,
  `alcance_acreditacion_informe_evaluacion` text,
  `comentario_requisito_informe_evaluacion` text,
  `comentario_evaluacion_informe_evaluacion` text,
  `conclusion_informe_evaluacion` text,
  `anexos_informe_evaluacion` text,
  `fecha_emision_informe_evaluacion` datetime DEFAULT NULL,
  `lugar_emision_informe_evaluacion` text,
  `fecha_creacion_informe_evaluacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_informe_evaluacion`),
  KEY `fk_informe_evaluacion_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `informe_evaluacion_04_06_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual11`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual11` BEFORE INSERT ON `informe_evaluacion_04_06_01`
 FOR EACH ROW SET NEW.fecha_creacion_informe_evaluacion = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `info_ensayo_04_01_01`
--

CREATE TABLE IF NOT EXISTS `info_ensayo_04_01_01` (
  `id_info_ensayo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `estado_info_ensayo` tinyint(1) NOT NULL,
  `objetivo_info_ensayo` set('acreditacion_inicial','reacreditacion','extension_acreditacion') DEFAULT NULL,
  `nombre_info_ensayo` text,
  `norma_info_ensayo` text,
  `matriz_info_ensayo` text,
  `tipo_servicio_info_ensayo` set('eil','elm','fl') DEFAULT NULL COMMENT 'eli = Realizado en las instalaciones del laboratorio; elm = Realizado en laboratorio movil; fl = Realizado fuera de laboratorio.',
  `categoria_info_ensayo` set('i','ii','iii','iv','na') DEFAULT NULL,
  `pesonal_autorizado_info_ensayo` text,
  `rango_medicion_info_ensayo` text,
  `incertidumbre_medicion_info_ensayo` text,
  `lista_equipos_utilizados_info_ensayo` text,
  `ad_calculo_incertidumbre_info_ensayo` text,
  `ad_confirmacion_aplicacion_info_ensayo` text,
  `ad_validacion_info_ensayo` text,
  `ad_patrones_referencia_info_ensayo` text,
  `ad_material_referencia_info_ensayo` text,
  `ad_comparaciones_interlaboratorios_info_ensayo` text,
  `fecha_creacion_info_ensayo` datetime DEFAULT NULL,
  PRIMARY KEY (`id_info_ensayo`),
  KEY `fk_info_ensayo_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `info_ensayo_04_01_01`
--

--
-- Triggers `info_ensayo_04_01_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual6`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual6` BEFORE INSERT ON `info_ensayo_04_01_01`
 FOR EACH ROW SET NEW.fecha_creacion_info_ensayo = NOW()
//
DELIMITER ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `log_sistema_03_00_03`
--

-- --------------------------------------------------------

--
-- Table structure for table `norma_referencia_02_00_04`
--

CREATE TABLE IF NOT EXISTS `norma_referencia_02_00_04` (
  `id_norma_referencia` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_norma_referencia` varchar(145) NOT NULL COMMENT 'display',
  `descripcion_norma_referencia` text,
  PRIMARY KEY (`id_norma_referencia`),
  UNIQUE KEY `nombre_norma_referencia_UNIQUE` (`nombre_norma_referencia`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `norma_referencia_02_00_04`
--

INSERT INTO `norma_referencia_02_00_04` (`id_norma_referencia`, `nombre_norma_referencia`, `descripcion_norma_referencia`) VALUES
(1, 'NB-ISO-IEC 17025:2005', ''),
(2, 'NB-ISO 15189:2008', ''),
(3, 'NB-ISO-IEC 17020:2012', ''),
(4, 'NB-ISO-IEC 17021:2011', ''),
(5, 'NB-ISO-IEC 17024:2012', ''),
(6, 'NB-ISO-IEC 17065:2012', '');

-- --------------------------------------------------------

--
-- Table structure for table `no_conformidad_04_07_01`
--

CREATE TABLE IF NOT EXISTS `no_conformidad_04_07_01` (
  `id_no_conformidad` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `objetivo_no_conformidad` set('acreditacion_inicial','reacreditacion','extension_acreditacion') DEFAULT NULL,
  `numero_no_conformidad` text,
  `nombre_persona_no_conformidad` varchar(145) DEFAULT NULL,
  `fecha_no_conformidad` date DEFAULT NULL,
  `ref_norma_no_conformidad` text,
  `ref_requisito_no_conformidad` text,
  `no_conformidad` text,
  `evidencia_no_conformidad` text,
  `representate_oec_no_conformidad` text,
  `representate_oec_cargo_no_conformidad` text,
  `fecha_creacion_no_conformidad` datetime DEFAULT NULL,
  PRIMARY KEY (`id_no_conformidad`),
  KEY `fk_no_conformidad_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `no_conformidad_04_07_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual12`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual12` BEFORE INSERT ON `no_conformidad_04_07_01`
 FOR EACH ROW SET NEW.fecha_creacion_no_conformidad = NOW()
//
DELIMITER ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `obs_peticion_accion_01_03_03`
--


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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `oec_02_00_01`
--

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
-- Table structure for table `oec_acreditacion_solicitada_02_00_03`
--

CREATE TABLE IF NOT EXISTS `oec_acreditacion_solicitada_02_00_03` (
  `id_oec_acreditacion_solicitada` int(11) NOT NULL AUTO_INCREMENT COMMENT 'oec',
  `fk_id_oec` int(11) NOT NULL,
  `inspeccion_oec_acreditacion_solicitada` text NOT NULL,
  `especificaciones_oec_acreditacion_solicitada` text NOT NULL,
  PRIMARY KEY (`id_oec_acreditacion_solicitada`),
  KEY `fk_oec_acreditacion_solicitada_oec1_idx` (`fk_id_oec`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `oec_acreditacion_solicitada_02_00_03`
--


-- --------------------------------------------------------

--
-- Table structure for table `oec_actividad_02_00_02`
--

CREATE TABLE IF NOT EXISTS `oec_actividad_02_00_02` (
  `fk_id_actividad_economica` int(11) NOT NULL,
  `fk_id_oec` int(11) NOT NULL COMMENT 'main',
  PRIMARY KEY (`fk_id_actividad_economica`,`fk_id_oec`),
  KEY `fk_table1_actividad_economica1_idx` (`fk_id_actividad_economica`),
  KEY `fk_table1_oec1_idx` (`fk_id_oec`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oec_actividad_02_00_02`
--


-- --------------------------------------------------------

--
-- Table structure for table `oec_contacto_02_00_03`
--

CREATE TABLE IF NOT EXISTS `oec_contacto_02_00_03` (
  `id_oec_contacto` int(11) NOT NULL AUTO_INCREMENT COMMENT 'oec',
  `fk_id_oec` int(11) NOT NULL,
  `fk_id_oec_titulo` int(11) NOT NULL,
  `primer_nombre_oec_contacto` varchar(145) NOT NULL COMMENT 'display',
  `segundo_nombre_oec_contacto` varchar(145) DEFAULT NULL,
  `apellido_paterno_oec_contacto` varchar(145) NOT NULL,
  `apellido_materno_oec_contacto` varchar(145) DEFAULT NULL,
  `cargo_oec_contacto` varchar(245) NOT NULL,
  `email_oec_contacto` varchar(145) NOT NULL,
  `celular_oec_contacto` varchar(45) DEFAULT NULL,
  `telefono_oec_contacto` varchar(45) NOT NULL,
  `representante_legal_oec_contacto` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_oec_contacto`),
  KEY `fk_oec_contacto_oec1_idx` (`fk_id_oec`),
  KEY `fk_oec_contacto_oec_titulo1_idx` (`fk_id_oec_titulo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `oec_contacto_02_00_03`
--

-- --------------------------------------------------------

--
-- Table structure for table `oec_tipo_02_00_04`
--

CREATE TABLE IF NOT EXISTS `oec_tipo_02_00_04` (
  `id_oec_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_oec_tipo` varchar(145) NOT NULL COMMENT 'display',
  `codigo_oec_tipo` varchar(45) NOT NULL,
  `descripcion_oec_tipo` text,
  PRIMARY KEY (`id_oec_tipo`),
  UNIQUE KEY `nombre_oec_tipo_UNIQUE` (`nombre_oec_tipo`),
  UNIQUE KEY `codigo_oec_tipo_UNIQUE` (`codigo_oec_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `oec_tipo_02_00_04`
--

INSERT INTO `oec_tipo_02_00_04` (`id_oec_tipo`, `nombre_oec_tipo`, `codigo_oec_tipo`, `descripcion_oec_tipo`) VALUES
(1, 'Laboratorio de Ensayo', 'laboratorio-ensayo', ''),
(2, 'Laboratorio de Calibración', 'laboratorio-calibracion', ''),
(3, 'Organismo de Inspección', 'organismo-inspeccion', ''),
(4, 'Organismo de Certificación', 'organismo-certificacion', '');

-- --------------------------------------------------------

--
-- Table structure for table `oec_titulo_02_00_04`
--

CREATE TABLE IF NOT EXISTS `oec_titulo_02_00_04` (
  `id_oec_titulo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_oec_titulo` varchar(145) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_oec_titulo`),
  UNIQUE KEY `nombre_oec_titulo_UNIQUE` (`nombre_oec_titulo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `oec_titulo_02_00_04`
--

INSERT INTO `oec_titulo_02_00_04` (`id_oec_titulo`, `nombre_oec_titulo`) VALUES
(4, 'Dr.'),
(3, 'Lic.'),
(1, 'Sr.'),
(2, 'Sra.');

-- --------------------------------------------------------

--
-- Table structure for table `pais_02_00_04`
--

CREATE TABLE IF NOT EXISTS `pais_02_00_04` (
  `id_pais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_pais` varchar(145) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_pais`),
  UNIQUE KEY `nombre_pais_UNIQUE` (`nombre_pais`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `pais_02_00_04`
--

INSERT INTO `pais_02_00_04` (`id_pais`, `nombre_pais`) VALUES
(2, 'Argentina'),
(1, 'Bolivia'),
(4, 'Brasil'),
(3, 'Chile'),
(7, 'Colombia'),
(8, 'Ecuador'),
(9, 'Guyana'),
(10, 'Paraguay'),
(5, 'Perú'),
(11, 'Surinam'),
(6, 'Uruguay'),
(12, 'Venezuela');

-- --------------------------------------------------------

--
-- Table structure for table `personal_autorizado_04_13_03`
--

CREATE TABLE IF NOT EXISTS `personal_autorizado_04_13_03` (
  `id_personal_autorizado` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_anexo_convenio` int(11) NOT NULL,
  `ensayista_personal_autorizado` text,
  `ensayo_personal_autorizado` text,
  PRIMARY KEY (`id_personal_autorizado`),
  KEY `fk_personal_autorizado_anexo_convenio1_idx` (`fk_id_anexo_convenio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
  PRIMARY KEY (`id_peticion`),
  KEY `fk_peticion_proceso1_idx` (`fk_id_proceso`),
  KEY `fk_peticion_usuario_00_01_011_idx` (`fk_id_usuario`),
  KEY `fk_peticion_oec1_idx` (`fk_id_oec`),
  KEY `fk_peticion_01_04_01_codigo_peticion1_idx` (`fk_id_codigo_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `peticion_01_04_01`
--

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `peticion_accion_01_03_01`
--

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `peticion_archivo_01_04_01`
--

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

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
(7, 'Lista Maestra de Documentos', 'lista-maestra-de-documentos');

-- --------------------------------------------------------

--
-- Table structure for table `peticion_estado_01_04_03`
--

CREATE TABLE IF NOT EXISTS `peticion_estado_01_04_03` (
  `id_peticion_estado` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso;display',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_estado` int(11) NOT NULL,
  `activo_peticion_estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_peticion_estado`),
  KEY `fk_peticion_estado_peticion1_idx` (`fk_id_peticion`),
  KEY `fk_peticion_estado_estado1_idx` (`fk_id_estado`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `peticion_estado_01_04_03`
--


-- --------------------------------------------------------

--
-- Table structure for table `plan_evaluacion_03_00_03`
--

CREATE TABLE IF NOT EXISTS `plan_evaluacion_03_00_03` (
  `id_plan_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_evaluacion` int(11) NOT NULL,
  `fk_id_oec_contacto` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `fecha_plan_evaluacion` date DEFAULT NULL,
  `hora_plan_evaluacion` time DEFAULT NULL,
  `requisitos_norma_plan_evaluacion` text,
  `metodologia_plan_evaluacion` text,
  PRIMARY KEY (`id_plan_evaluacion`),
  KEY `fk_plan_evaluacion_evaluacion1_idx` (`fk_id_evaluacion`),
  KEY `fk_plan_evaluacion_oec_contacto1_idx` (`fk_id_oec_contacto`),
  KEY `fk_plan_evaluacion_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
-- Table structure for table `proveedor_eval_04_08_03`
--

CREATE TABLE IF NOT EXISTS `proveedor_eval_04_08_03` (
  `id_proveedor_eval` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_eval_tecnica` int(11) NOT NULL,
  `nombre_proveedor_eval` text,
  `resultados_proveedor_eval` text,
  `indicador_desempeno_proveedor_eval` text,
  `conclusion_desempeno_proveedor_eval` text,
  PRIMARY KEY (`id_proveedor_eval`),
  KEY `fk_proveedor_eval_eval_tecnica1_idx` (`fk_id_eval_tecnica`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `prueba_participacion_04_09_01`
--

CREATE TABLE IF NOT EXISTS `prueba_participacion_04_09_01` (
  `id_prueba_participacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `fk_id_criterio_evaluacion` int(11) NOT NULL,
  `horas_evaluacion_prueba_participacion` int(11) DEFAULT NULL,
  `dir_nombre_responsable_prueba_participacion` text,
  `dir_cargo_prueba_participacion` text,
  `dir_fecha_prueba_participacion` date DEFAULT NULL,
  `oec_nombre_responsable_prueba_participacion` text,
  `oec_cargo_prueba_participacion` text,
  `oec_fecha_prueba_participacion` date DEFAULT NULL,
  `fecha_creacion_prueba_participacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_prueba_participacion`),
  KEY `fk_prueba_participacion_peticion1_idx` (`fk_id_peticion`),
  KEY `fk_prueba_participacion_criterio_evaluacion1_idx` (`fk_id_criterio_evaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `prueba_participacion_04_09_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual14`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual14` BEFORE INSERT ON `prueba_participacion_04_09_01`
 FOR EACH ROW SET NEW.fecha_creacion_prueba_participacion = NOW()
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
-- Table structure for table `satisfaccion_cliente_04_12_01`
--

CREATE TABLE IF NOT EXISTS `satisfaccion_cliente_04_12_01` (
  `id_satisfaccion_cliente` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `reclamos_satisfaccion_cliente` text COMMENT 'display',
  `empresa_satisfaccion_cliente` text,
  `contacto_satisfaccion_cliente` text,
  `lugar_satisfaccion_cliente` text,
  `fecha_satisfaccion_cliente` date DEFAULT NULL,
  `fecha_creacion_satisfaccion_cliente` datetime DEFAULT NULL,
  PRIMARY KEY (`id_satisfaccion_cliente`),
  KEY `fk_satisfaccion_cliente_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Triggers `satisfaccion_cliente_04_12_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual17`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual17` BEFORE INSERT ON `satisfaccion_cliente_04_12_01`
 FOR EACH ROW SET NEW.fecha_creacion_satisfaccion_cliente = NOW()
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `satisfaccion_evaluacion_04_12_03`
--

CREATE TABLE IF NOT EXISTS `satisfaccion_evaluacion_04_12_03` (
  `id_satisfaccion_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_criterio_satisfaccion` int(11) NOT NULL,
  `fk_id_satisfaccion_cliente` int(11) NOT NULL,
  `puntaje_satisfaccion_evaluacion` int(11) DEFAULT NULL,
  `etiqueta_satisfaccion_evaluacion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_satisfaccion_evaluacion`),
  KEY `fk_satisfaccion_evaluacion_criterio_satisfaccion1_idx` (`fk_id_criterio_satisfaccion`),
  KEY `fk_satisfaccion_evaluacion_satisfaccion_cliente1_idx` (`fk_id_satisfaccion_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `supervision_criterio_04_11_03`
--

CREATE TABLE IF NOT EXISTS `supervision_criterio_04_11_03` (
  `id_supervision_criterio` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_supervision_evaluador` int(11) NOT NULL,
  `fk_id_criterio_supervision` int(11) NOT NULL,
  `puntaje_supervision_criterio` set('1','2','3','4','5') DEFAULT NULL,
  PRIMARY KEY (`id_supervision_criterio`),
  KEY `fk_supervision_criterio_supervision_evaluador1_idx` (`fk_id_supervision_evaluador`),
  KEY `fk_supervision_criterio_criterio_supervision1_idx` (`fk_id_criterio_supervision`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `supervision_evaluador_04_11_01`
--

CREATE TABLE IF NOT EXISTS `supervision_evaluador_04_11_01` (
  `id_supervision_evaluador` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `fk_id_peticion` int(11) NOT NULL,
  `criterio_evaluacion_supervision_evaluador` text NOT NULL COMMENT 'display',
  `comentarios_supervision_evaluador` text,
  `observaciones_supervision_evaluador` text,
  `nombre_supervision_evaluador` varchar(200) DEFAULT NULL,
  `cargo_supervision_evaluador` varchar(200) DEFAULT NULL,
  `fecha_supervision_evaluador` date DEFAULT NULL,
  `fecha_creacion_supervision_evaluador` datetime DEFAULT NULL,
  PRIMARY KEY (`id_supervision_evaluador`),
  KEY `fk_supervision_evaluador_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `supervision_evaluador_04_11_01`
--

--
-- Triggers `supervision_evaluador_04_11_01`
--
DROP TRIGGER IF EXISTS `fecha_creacion_actual16`;
DELIMITER //
CREATE TRIGGER `fecha_creacion_actual16` BEFORE INSERT ON `supervision_evaluador_04_11_01`
 FOR EACH ROW SET NEW.fecha_creacion_supervision_evaluador = NOW()
//
DELIMITER ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `usuario_00_01_01`
--

INSERT INTO `usuario_00_01_01` (`id_usuario`, `primer_nombre_usuario`, `segundo_nombre_usuario`, `apellido_paterno_usuario`, `apellido_materno_usuario`, `codigo_usuario`, `login_usuario`, `contrasena_usuario`, `sexo_usuario`, `telefono_usuario`, `celular_usuario`, `correo_usuario`, `direccion_usuario`, `imagen_usuario`, `observaciones_usuario`, `acceso_ip_usuario`, `fecha_creacion_usuario`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'm', 'admin', 'admin', 'victorqcv@gmail.com', 'admin', 'admin', 'admin', '', '2015-12-18 17:16:00'),
(2, 'Federico', 'Guillermo', 'Peñaranda', 'Nervi', 'EVA-555', 'fpenaranda', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'm', '2223408', '70681784', 'federicopenaranda@gmail.com', 'Av. Bush', '', 'Prueba', '', '2015-12-18 18:24:56'),
(3, 'Fino', '', 'Prueba', '', 'EVA-588', 'oecfino1', '0b862fce40e546a619759af864cadf71d3d3ecd4', 'm', '212121212', '70707070', 'fpenaranda@catequil.com.bo', 'prueba', '', 'prueba', '', '2015-12-21 10:09:15'),
(4, 'Dta', '', 'Personal', '', 'EVA-968', 'dta1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'm', '3434234', '234234234', 'fpenaranda@ibmetro.gob.bo', 'prueba', '', 'prueba', '', '2015-12-21 10:10:53'),
(5, 'Directora', '', 'Dta', '', 'EVA-011', 'da1', 'cdd4f874095045f4ae6670038cbbd05fac9d4802', 'f', '234234', '234234', 'info@catequil.com.bo', 'prueba', '', '', '', '2015-12-21 10:12:04'),
(6, 'Consejo1', '', 'C1', '', 'adsfasd', 'consejo1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'f', '234234', '234234234', 'fasdf@docm.com', '', '', 'adsfadsfas', '', '2015-12-28 19:53:10'),
(7, 'Dta2', '', 'Dta2', '', 'qwer', 'dta2', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'f', 'qewrqw', 'qwerqewr', 'adsfasdf@dsafa.com', '', '', '', '', '2015-12-29 10:07:28');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=273 ;

--
-- Dumping data for table `usuario_privilegio_00_00_04`
--

INSERT INTO `usuario_privilegio_00_00_04` (`id_usuario_privilegio`, `nombre_privilegio_usuario_privilegio`, `accion_usuario_privilegio`, `opciones_usuario_privilegio`, `funcion_usuario_privilegio`, `descripcion_usuario_privilegio`) VALUES
(1, 'crea Accion010201', 'create', 'controlador', 'Accion010201', 'automatico'),
(2, 'lee Accion010201', 'index', 'controlador', 'Accion010201', 'automatico'),
(3, 'actualiza Accion010201', 'update', 'controlador', 'Accion010201', 'automatico'),
(4, 'elimina Accion010201', 'delete', 'controlador', 'Accion010201', 'automatico'),
(5, 'crea AccionTipo010204', 'create', 'controlador', 'AccionTipo010204', 'automatico'),
(6, 'lee AccionTipo010204', 'index', 'controlador', 'AccionTipo010204', 'automatico'),
(7, 'actualiza AccionTipo010204', 'update', 'controlador', 'AccionTipo010204', 'automatico'),
(8, 'elimina AccionTipo010204', 'delete', 'controlador', 'AccionTipo010204', 'automatico'),
(9, 'crea AccionTransicion010202', 'create', 'controlador', 'AccionTransicion010202', 'automatico'),
(10, 'lee AccionTransicion010202', 'index', 'controlador', 'AccionTransicion010202', 'automatico'),
(11, 'actualiza AccionTransicion010202', 'update', 'controlador', 'AccionTransicion010202', 'automatico'),
(12, 'elimina AccionTransicion010202', 'delete', 'controlador', 'AccionTransicion010202', 'automatico'),
(13, 'crea Actividad010501', 'create', 'controlador', 'Actividad010501', 'automatico'),
(14, 'lee Actividad010501', 'index', 'controlador', 'Actividad010501', 'automatico'),
(15, 'actualiza Actividad010501', 'update', 'controlador', 'Actividad010501', 'automatico'),
(16, 'elimina Actividad010501', 'delete', 'controlador', 'Actividad010501', 'automatico'),
(17, 'crea ActividadEconomica020004', 'create', 'controlador', 'ActividadEconomica020004', 'automatico'),
(18, 'lee ActividadEconomica020004', 'index', 'controlador', 'ActividadEconomica020004', 'automatico'),
(19, 'actualiza ActividadEconomica020004', 'update', 'controlador', 'ActividadEconomica020004', 'automatico'),
(20, 'elimina ActividadEconomica020004', 'delete', 'controlador', 'ActividadEconomica020004', 'automatico'),
(21, 'crea ActividadEstado010602', 'create', 'controlador', 'ActividadEstado010602', 'automatico'),
(22, 'lee ActividadEstado010602', 'index', 'controlador', 'ActividadEstado010602', 'automatico'),
(23, 'actualiza ActividadEstado010602', 'update', 'controlador', 'ActividadEstado010602', 'automatico'),
(24, 'elimina ActividadEstado010602', 'delete', 'controlador', 'ActividadEstado010602', 'automatico'),
(25, 'crea ActividadTipo010504', 'create', 'controlador', 'ActividadTipo010504', 'automatico'),
(26, 'lee ActividadTipo010504', 'index', 'controlador', 'ActividadTipo010504', 'automatico'),
(27, 'actualiza ActividadTipo010504', 'update', 'controlador', 'ActividadTipo010504', 'automatico'),
(28, 'elimina ActividadTipo010504', 'delete', 'controlador', 'ActividadTipo010504', 'automatico'),
(29, 'crea ActividadTransicion010502', 'create', 'controlador', 'ActividadTransicion010502', 'automatico'),
(30, 'lee ActividadTransicion010502', 'index', 'controlador', 'ActividadTransicion010502', 'automatico'),
(31, 'actualiza ActividadTransicion010502', 'update', 'controlador', 'ActividadTransicion010502', 'automatico'),
(32, 'elimina ActividadTransicion010502', 'delete', 'controlador', 'ActividadTransicion010502', 'automatico'),
(33, 'crea AlcanceAcreditacionCert030003', 'create', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(34, 'lee AlcanceAcreditacionCert030003', 'index', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(35, 'actualiza AlcanceAcreditacionCert030003', 'update', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(36, 'elimina AlcanceAcreditacionCert030003', 'delete', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(37, 'crea AlcanceAcreditacionCert041303', 'create', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(38, 'lee AlcanceAcreditacionCert041303', 'index', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(39, 'actualiza AlcanceAcreditacionCert041303', 'update', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(40, 'elimina AlcanceAcreditacionCert041303', 'delete', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(41, 'crea AlcanceAcreditacionInsp030003', 'create', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(42, 'lee AlcanceAcreditacionInsp030003', 'index', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(43, 'actualiza AlcanceAcreditacionInsp030003', 'update', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(44, 'elimina AlcanceAcreditacionInsp030003', 'delete', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(45, 'crea AlcanceAcreditacionInsp041303', 'create', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(46, 'lee AlcanceAcreditacionInsp041303', 'index', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(47, 'actualiza AlcanceAcreditacionInsp041303', 'update', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(48, 'elimina AlcanceAcreditacionInsp041303', 'delete', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(49, 'crea AlcanceAcreditacionLab030003', 'create', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(50, 'lee AlcanceAcreditacionLab030003', 'index', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(51, 'actualiza AlcanceAcreditacionLab030003', 'update', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(52, 'elimina AlcanceAcreditacionLab030003', 'delete', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(53, 'crea AnexoConvenio041301', 'create', 'controlador', 'AnexoConvenio041301', 'automatico'),
(54, 'lee AnexoConvenio041301', 'index', 'controlador', 'AnexoConvenio041301', 'automatico'),
(55, 'actualiza AnexoConvenio041301', 'update', 'controlador', 'AnexoConvenio041301', 'automatico'),
(56, 'elimina AnexoConvenio041301', 'delete', 'controlador', 'AnexoConvenio041301', 'automatico'),
(57, 'crea AspectosEvaluados040803', 'create', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(58, 'lee AspectosEvaluados040803', 'index', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(59, 'actualiza AspectosEvaluados040803', 'update', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(60, 'elimina AspectosEvaluados040803', 'delete', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(61, 'crea CampoCalibracion040004', 'create', 'controlador', 'CampoCalibracion040004', 'automatico'),
(62, 'lee CampoCalibracion040004', 'index', 'controlador', 'CampoCalibracion040004', 'automatico'),
(63, 'actualiza CampoCalibracion040004', 'update', 'controlador', 'CampoCalibracion040004', 'automatico'),
(64, 'elimina CampoCalibracion040004', 'delete', 'controlador', 'CampoCalibracion040004', 'automatico'),
(65, 'crea Certificado041401', 'create', 'controlador', 'Certificado041401', 'automatico'),
(66, 'lee Certificado041401', 'index', 'controlador', 'Certificado041401', 'automatico'),
(67, 'actualiza Certificado041401', 'update', 'controlador', 'Certificado041401', 'automatico'),
(68, 'elimina Certificado041401', 'delete', 'controlador', 'Certificado041401', 'automatico'),
(69, 'crea CodigoPeticion010404', 'create', 'controlador', 'CodigoPeticion010404', 'automatico'),
(70, 'lee CodigoPeticion010404', 'index', 'controlador', 'CodigoPeticion010404', 'automatico'),
(71, 'actualiza CodigoPeticion010404', 'update', 'controlador', 'CodigoPeticion010404', 'automatico'),
(72, 'elimina CodigoPeticion010404', 'delete', 'controlador', 'CodigoPeticion010404', 'automatico'),
(73, 'crea CriterioEvaluacion040004', 'create', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(74, 'lee CriterioEvaluacion040004', 'index', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(75, 'actualiza CriterioEvaluacion040004', 'update', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(76, 'elimina CriterioEvaluacion040004', 'delete', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(77, 'crea CriterioSatisfaccion041204', 'create', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(78, 'lee CriterioSatisfaccion041204', 'index', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(79, 'actualiza CriterioSatisfaccion041204', 'update', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(80, 'elimina CriterioSatisfaccion041204', 'delete', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(81, 'crea CriterioSupervision041104', 'create', 'controlador', 'CriterioSupervision041104', 'automatico'),
(82, 'lee CriterioSupervision041104', 'index', 'controlador', 'CriterioSupervision041104', 'automatico'),
(83, 'actualiza CriterioSupervision041104', 'update', 'controlador', 'CriterioSupervision041104', 'automatico'),
(84, 'elimina CriterioSupervision041104', 'delete', 'controlador', 'CriterioSupervision041104', 'automatico'),
(85, 'crea DesignacionEvaluador041001', 'create', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(86, 'lee DesignacionEvaluador041001', 'index', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(87, 'actualiza DesignacionEvaluador041001', 'update', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(88, 'elimina DesignacionEvaluador041001', 'delete', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(89, 'crea DetalleCalibracion040301', 'create', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(90, 'lee DetalleCalibracion040301', 'index', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(91, 'actualiza DetalleCalibracion040301', 'update', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(92, 'elimina DetalleCalibracion040301', 'delete', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(93, 'crea DetalleCertificacion040501', 'create', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(94, 'lee DetalleCertificacion040501', 'index', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(95, 'actualiza DetalleCertificacion040501', 'update', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(96, 'elimina DetalleCertificacion040501', 'delete', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(97, 'crea DetalleEquipos040201', 'create', 'controlador', 'DetalleEquipos040201', 'automatico'),
(98, 'lee DetalleEquipos040201', 'index', 'controlador', 'DetalleEquipos040201', 'automatico'),
(99, 'actualiza DetalleEquipos040201', 'update', 'controlador', 'DetalleEquipos040201', 'automatico'),
(100, 'elimina DetalleEquipos040201', 'delete', 'controlador', 'DetalleEquipos040201', 'automatico'),
(101, 'crea DetalleInspeccion040401', 'create', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(102, 'lee DetalleInspeccion040401', 'index', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(103, 'actualiza DetalleInspeccion040401', 'update', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(104, 'elimina DetalleInspeccion040401', 'delete', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(105, 'crea EquipoEval040803', 'create', 'controlador', 'EquipoEval040803', 'automatico'),
(106, 'lee EquipoEval040803', 'index', 'controlador', 'EquipoEval040803', 'automatico'),
(107, 'actualiza EquipoEval040803', 'update', 'controlador', 'EquipoEval040803', 'automatico'),
(108, 'elimina EquipoEval040803', 'delete', 'controlador', 'EquipoEval040803', 'automatico'),
(109, 'crea EquipoPeticion010701', 'create', 'controlador', 'EquipoPeticion010701', 'automatico'),
(110, 'lee EquipoPeticion010701', 'index', 'controlador', 'EquipoPeticion010701', 'automatico'),
(111, 'actualiza EquipoPeticion010701', 'update', 'controlador', 'EquipoPeticion010701', 'automatico'),
(112, 'elimina EquipoPeticion010701', 'delete', 'controlador', 'EquipoPeticion010701', 'automatico'),
(113, 'crea Estado010601', 'create', 'controlador', 'Estado010601', 'automatico'),
(114, 'lee Estado010601', 'index', 'controlador', 'Estado010601', 'automatico'),
(115, 'actualiza Estado010601', 'update', 'controlador', 'Estado010601', 'automatico'),
(116, 'elimina Estado010601', 'delete', 'controlador', 'Estado010601', 'automatico'),
(117, 'crea EstadoTipo010604', 'create', 'controlador', 'EstadoTipo010604', 'automatico'),
(118, 'lee EstadoTipo010604', 'index', 'controlador', 'EstadoTipo010604', 'automatico'),
(119, 'actualiza EstadoTipo010604', 'update', 'controlador', 'EstadoTipo010604', 'automatico'),
(120, 'elimina EstadoTipo010604', 'delete', 'controlador', 'EstadoTipo010604', 'automatico'),
(121, 'crea EvalTecnica040801', 'create', 'controlador', 'EvalTecnica040801', 'automatico'),
(122, 'lee EvalTecnica040801', 'index', 'controlador', 'EvalTecnica040801', 'automatico'),
(123, 'actualiza EvalTecnica040801', 'update', 'controlador', 'EvalTecnica040801', 'automatico'),
(124, 'elimina EvalTecnica040801', 'delete', 'controlador', 'EvalTecnica040801', 'automatico'),
(125, 'crea Evaluacion030001', 'create', 'controlador', 'Evaluacion030001', 'automatico'),
(126, 'lee Evaluacion030001', 'index', 'controlador', 'Evaluacion030001', 'automatico'),
(127, 'actualiza Evaluacion030001', 'update', 'controlador', 'Evaluacion030001', 'automatico'),
(128, 'elimina Evaluacion030001', 'delete', 'controlador', 'Evaluacion030001', 'automatico'),
(129, 'crea InfoEnsayo040101', 'create', 'controlador', 'InfoEnsayo040101', 'automatico'),
(130, 'lee InfoEnsayo040101', 'index', 'controlador', 'InfoEnsayo040101', 'automatico'),
(131, 'actualiza InfoEnsayo040101', 'update', 'controlador', 'InfoEnsayo040101', 'automatico'),
(132, 'elimina InfoEnsayo040101', 'delete', 'controlador', 'InfoEnsayo040101', 'automatico'),
(133, 'crea InformeAcred041301', 'create', 'controlador', 'InformeAcred041301', 'automatico'),
(134, 'lee InformeAcred041301', 'index', 'controlador', 'InformeAcred041301', 'automatico'),
(135, 'actualiza InformeAcred041301', 'update', 'controlador', 'InformeAcred041301', 'automatico'),
(136, 'elimina InformeAcred041301', 'delete', 'controlador', 'InformeAcred041301', 'automatico'),
(137, 'crea InformeEvaluacion040601', 'create', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(138, 'lee InformeEvaluacion040601', 'index', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(139, 'actualiza InformeEvaluacion040601', 'update', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(140, 'elimina InformeEvaluacion040601', 'delete', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(141, 'crea LogSistema030003', 'create', 'controlador', 'LogSistema030003', 'automatico'),
(142, 'lee LogSistema030003', 'index', 'controlador', 'LogSistema030003', 'automatico'),
(143, 'actualiza LogSistema030003', 'update', 'controlador', 'LogSistema030003', 'automatico'),
(144, 'elimina LogSistema030003', 'delete', 'controlador', 'LogSistema030003', 'automatico'),
(145, 'crea NoConformidad040701', 'create', 'controlador', 'NoConformidad040701', 'automatico'),
(146, 'lee NoConformidad040701', 'index', 'controlador', 'NoConformidad040701', 'automatico'),
(147, 'actualiza NoConformidad040701', 'update', 'controlador', 'NoConformidad040701', 'automatico'),
(148, 'elimina NoConformidad040701', 'delete', 'controlador', 'NoConformidad040701', 'automatico'),
(149, 'crea NormaReferencia020004', 'create', 'controlador', 'NormaReferencia020004', 'automatico'),
(150, 'lee NormaReferencia020004', 'index', 'controlador', 'NormaReferencia020004', 'automatico'),
(151, 'actualiza NormaReferencia020004', 'update', 'controlador', 'NormaReferencia020004', 'automatico'),
(152, 'elimina NormaReferencia020004', 'delete', 'controlador', 'NormaReferencia020004', 'automatico'),
(153, 'crea ObsPeticionAccion010303', 'create', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(154, 'lee ObsPeticionAccion010303', 'index', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(155, 'actualiza ObsPeticionAccion010303', 'update', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(156, 'elimina ObsPeticionAccion010303', 'delete', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(157, 'crea Oec020001', 'create', 'controlador', 'Oec020001', 'automatico'),
(158, 'lee Oec020001', 'index', 'controlador', 'Oec020001', 'automatico'),
(159, 'actualiza Oec020001', 'update', 'controlador', 'Oec020001', 'automatico'),
(160, 'elimina Oec020001', 'delete', 'controlador', 'Oec020001', 'automatico'),
(161, 'crea OecAcreditacionSolicitada020003', 'create', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(162, 'lee OecAcreditacionSolicitada020003', 'index', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(163, 'actualiza OecAcreditacionSolicitada020003', 'update', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(164, 'elimina OecAcreditacionSolicitada020003', 'delete', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(165, 'crea OecActividad020002', 'create', 'controlador', 'OecActividad020002', 'automatico'),
(166, 'lee OecActividad020002', 'index', 'controlador', 'OecActividad020002', 'automatico'),
(167, 'actualiza OecActividad020002', 'update', 'controlador', 'OecActividad020002', 'automatico'),
(168, 'elimina OecActividad020002', 'delete', 'controlador', 'OecActividad020002', 'automatico'),
(169, 'crea OecContacto020003', 'create', 'controlador', 'OecContacto020003', 'automatico'),
(170, 'lee OecContacto020003', 'index', 'controlador', 'OecContacto020003', 'automatico'),
(171, 'actualiza OecContacto020003', 'update', 'controlador', 'OecContacto020003', 'automatico'),
(172, 'elimina OecContacto020003', 'delete', 'controlador', 'OecContacto020003', 'automatico'),
(173, 'crea OecTipo020004', 'create', 'controlador', 'OecTipo020004', 'automatico'),
(174, 'lee OecTipo020004', 'index', 'controlador', 'OecTipo020004', 'automatico'),
(175, 'actualiza OecTipo020004', 'update', 'controlador', 'OecTipo020004', 'automatico'),
(176, 'elimina OecTipo020004', 'delete', 'controlador', 'OecTipo020004', 'automatico'),
(177, 'crea OecTitulo020004', 'create', 'controlador', 'OecTitulo020004', 'automatico'),
(178, 'lee OecTitulo020004', 'index', 'controlador', 'OecTitulo020004', 'automatico'),
(179, 'actualiza OecTitulo020004', 'update', 'controlador', 'OecTitulo020004', 'automatico'),
(180, 'elimina OecTitulo020004', 'delete', 'controlador', 'OecTitulo020004', 'automatico'),
(181, 'crea Pais020004', 'create', 'controlador', 'Pais020004', 'automatico'),
(182, 'lee Pais020004', 'index', 'controlador', 'Pais020004', 'automatico'),
(183, 'actualiza Pais020004', 'update', 'controlador', 'Pais020004', 'automatico'),
(184, 'elimina Pais020004', 'delete', 'controlador', 'Pais020004', 'automatico'),
(185, 'crea PersonalAutorizado041303', 'create', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(186, 'lee PersonalAutorizado041303', 'index', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(187, 'actualiza PersonalAutorizado041303', 'update', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(188, 'elimina PersonalAutorizado041303', 'delete', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(189, 'crea Peticion010401', 'create', 'controlador', 'Peticion010401', 'automatico'),
(190, 'lee Peticion010401', 'index', 'controlador', 'Peticion010401', 'automatico'),
(191, 'actualiza Peticion010401', 'update', 'controlador', 'Peticion010401', 'automatico'),
(192, 'elimina Peticion010401', 'delete', 'controlador', 'Peticion010401', 'automatico'),
(193, 'crea PeticionAccion010301', 'create', 'controlador', 'PeticionAccion010301', 'automatico'),
(194, 'lee PeticionAccion010301', 'index', 'controlador', 'PeticionAccion010301', 'automatico'),
(195, 'actualiza PeticionAccion010301', 'update', 'controlador', 'PeticionAccion010301', 'automatico'),
(196, 'elimina PeticionAccion010301', 'delete', 'controlador', 'PeticionAccion010301', 'automatico'),
(197, 'crea PeticionArchivo010401', 'create', 'controlador', 'PeticionArchivo010401', 'automatico'),
(198, 'lee PeticionArchivo010401', 'index', 'controlador', 'PeticionArchivo010401', 'automatico'),
(199, 'actualiza PeticionArchivo010401', 'update', 'controlador', 'PeticionArchivo010401', 'automatico'),
(200, 'elimina PeticionArchivo010401', 'delete', 'controlador', 'PeticionArchivo010401', 'automatico'),
(201, 'crea PeticionEstado010403', 'create', 'controlador', 'PeticionEstado010403', 'automatico'),
(202, 'lee PeticionEstado010403', 'index', 'controlador', 'PeticionEstado010403', 'automatico'),
(203, 'actualiza PeticionEstado010403', 'update', 'controlador', 'PeticionEstado010403', 'automatico'),
(204, 'elimina PeticionEstado010403', 'delete', 'controlador', 'PeticionEstado010403', 'automatico'),
(205, 'crea PlanEvaluacion030003', 'create', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(206, 'lee PlanEvaluacion030003', 'index', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(207, 'actualiza PlanEvaluacion030003', 'update', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(208, 'elimina PlanEvaluacion030003', 'delete', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(209, 'crea Proceso010101', 'create', 'controlador', 'Proceso010101', 'automatico'),
(210, 'lee Proceso010101', 'index', 'controlador', 'Proceso010101', 'automatico'),
(211, 'actualiza Proceso010101', 'update', 'controlador', 'Proceso010101', 'automatico'),
(212, 'elimina Proceso010101', 'delete', 'controlador', 'Proceso010101', 'automatico'),
(213, 'crea ProveedorEval040803', 'create', 'controlador', 'ProveedorEval040803', 'automatico'),
(214, 'lee ProveedorEval040803', 'index', 'controlador', 'ProveedorEval040803', 'automatico'),
(215, 'actualiza ProveedorEval040803', 'update', 'controlador', 'ProveedorEval040803', 'automatico'),
(216, 'elimina ProveedorEval040803', 'delete', 'controlador', 'ProveedorEval040803', 'automatico'),
(217, 'crea PruebaParticipacion040901', 'create', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(218, 'lee PruebaParticipacion040901', 'index', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(219, 'actualiza PruebaParticipacion040901', 'update', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(220, 'elimina PruebaParticipacion040901', 'delete', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(221, 'crea Reporte030004', 'create', 'controlador', 'Reporte030004', 'automatico'),
(222, 'lee Reporte030004', 'index', 'controlador', 'Reporte030004', 'automatico'),
(223, 'actualiza Reporte030004', 'update', 'controlador', 'Reporte030004', 'automatico'),
(224, 'elimina Reporte030004', 'delete', 'controlador', 'Reporte030004', 'automatico'),
(225, 'crea SatisfaccionCliente041201', 'create', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(226, 'lee SatisfaccionCliente041201', 'index', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(227, 'actualiza SatisfaccionCliente041201', 'update', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(228, 'elimina SatisfaccionCliente041201', 'delete', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(229, 'crea SatisfaccionEvaluacion041203', 'create', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(230, 'lee SatisfaccionEvaluacion041203', 'index', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(231, 'actualiza SatisfaccionEvaluacion041203', 'update', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(232, 'elimina SatisfaccionEvaluacion041203', 'delete', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(233, 'crea SupervisionCriterio041103', 'create', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(234, 'lee SupervisionCriterio041103', 'index', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(235, 'actualiza SupervisionCriterio041103', 'update', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(236, 'elimina SupervisionCriterio041103', 'delete', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(237, 'crea SupervisionEvaluador041101', 'create', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(238, 'lee SupervisionEvaluador041101', 'index', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(239, 'actualiza SupervisionEvaluador041101', 'update', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(240, 'elimina SupervisionEvaluador041101', 'delete', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(241, 'crea Transicion010202', 'create', 'controlador', 'Transicion010202', 'automatico'),
(242, 'lee Transicion010202', 'index', 'controlador', 'Transicion010202', 'automatico'),
(243, 'actualiza Transicion010202', 'update', 'controlador', 'Transicion010202', 'automatico'),
(244, 'elimina Transicion010202', 'delete', 'controlador', 'Transicion010202', 'automatico'),
(245, 'crea Usuario000101', 'create', 'controlador', 'Usuario000101', 'automatico'),
(246, 'lee Usuario000101', 'index', 'controlador', 'Usuario000101', 'automatico'),
(247, 'actualiza Usuario000101', 'update', 'controlador', 'Usuario000101', 'automatico'),
(248, 'elimina Usuario000101', 'delete', 'controlador', 'Usuario000101', 'automatico'),
(249, 'crea UsuarioOec000102', 'create', 'controlador', 'UsuarioOec000102', 'automatico'),
(250, 'lee UsuarioOec000102', 'index', 'controlador', 'UsuarioOec000102', 'automatico'),
(251, 'actualiza UsuarioOec000102', 'update', 'controlador', 'UsuarioOec000102', 'automatico'),
(252, 'elimina UsuarioOec000102', 'delete', 'controlador', 'UsuarioOec000102', 'automatico'),
(253, 'crea UsuarioPrivilegio000004', 'create', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(254, 'lee UsuarioPrivilegio000004', 'index', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(255, 'actualiza UsuarioPrivilegio000004', 'update', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(256, 'elimina UsuarioPrivilegio000004', 'delete', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(257, 'crea UsuarioProceso000102', 'create', 'controlador', 'UsuarioProceso000102', 'automatico'),
(258, 'lee UsuarioProceso000102', 'index', 'controlador', 'UsuarioProceso000102', 'automatico'),
(259, 'actualiza UsuarioProceso000102', 'update', 'controlador', 'UsuarioProceso000102', 'automatico'),
(260, 'elimina UsuarioProceso000102', 'delete', 'controlador', 'UsuarioProceso000102', 'automatico'),
(261, 'crea UsuarioTipo000201', 'create', 'controlador', 'UsuarioTipo000201', 'automatico'),
(262, 'lee UsuarioTipo000201', 'index', 'controlador', 'UsuarioTipo000201', 'automatico'),
(263, 'actualiza UsuarioTipo000201', 'update', 'controlador', 'UsuarioTipo000201', 'automatico'),
(264, 'elimina UsuarioTipo000201', 'delete', 'controlador', 'UsuarioTipo000201', 'automatico'),
(265, 'crea UsuarioTipoPrivilegio000202', 'create', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(266, 'lee UsuarioTipoPrivilegio000202', 'index', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(267, 'actualiza UsuarioTipoPrivilegio000202', 'update', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(268, 'elimina UsuarioTipoPrivilegio000202', 'delete', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(269, 'crea UsuarioTipoUsuario000102', 'create', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(270, 'lee UsuarioTipoUsuario000102', 'index', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(271, 'actualiza UsuarioTipoUsuario000102', 'update', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(272, 'elimina UsuarioTipoUsuario000102', 'delete', 'controlador', 'UsuarioTipoUsuario000102', 'automatico');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_proceso_00_01_02`
--

CREATE TABLE IF NOT EXISTS `usuario_proceso_00_01_02` (
  `fk_id_proceso` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'main',
  PRIMARY KEY (`fk_id_proceso`,`fk_id_usuario`),
  KEY `fk_usuario_proceso_proceso1_idx` (`fk_id_proceso`),
  KEY `fk_usuario_proceso_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario_proceso_00_01_02`
--

INSERT INTO `usuario_proceso_00_01_02` (`fk_id_proceso`, `fk_id_usuario`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `usuario_tipo_00_02_01`
--

INSERT INTO `usuario_tipo_00_02_01` (`id_usuario_tipo`, `nombre_usuario_tipo`, `descripcion_usuario_tipo`) VALUES
(1, 'admin', 'Administrador'),
(2, 'oec', 'Organismo de Evaluación de la Conformidad'),
(3, 'consejo', 'Miembro del Consejo'),
(4, 'da', 'Director de Acreditación'),
(5, 'dta', 'Dirección Técnica de Acreditación'),
(6, 'ra', 'Responsable de Acreditación'),
(7, 'el', 'Evaluador Lider'),
(8, 'ext', 'Experto Técnico'),
(9, 'et', 'Evaluador Técnico'),
(10, 'eent', 'Evaluador de Entrenamiento');

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
(1, 60),
(1, 61),
(1, 62),
(1, 63),
(1, 64),
(1, 65),
(1, 66),
(1, 67),
(1, 68),
(1, 69),
(1, 70),
(1, 71),
(1, 72),
(1, 73),
(1, 74),
(1, 75),
(1, 76),
(1, 77),
(1, 78),
(1, 79),
(1, 80),
(1, 81),
(1, 82),
(1, 83),
(1, 84),
(1, 85),
(1, 86),
(1, 87),
(1, 88),
(1, 89),
(1, 90),
(1, 91),
(1, 92),
(1, 93),
(1, 94),
(1, 95),
(1, 96),
(1, 97),
(1, 98),
(1, 99),
(1, 100),
(1, 101),
(1, 102),
(1, 103),
(1, 104),
(1, 105),
(1, 106),
(1, 107),
(1, 108),
(1, 109),
(1, 110),
(1, 111),
(1, 112),
(1, 113),
(1, 114),
(1, 115),
(1, 116),
(1, 117),
(1, 118),
(1, 119),
(1, 120),
(1, 121),
(1, 122),
(1, 123),
(1, 124),
(1, 125),
(1, 126),
(1, 127),
(1, 128),
(1, 129),
(1, 130),
(1, 131),
(1, 132),
(1, 133),
(1, 134),
(1, 135),
(1, 136),
(1, 137),
(1, 138),
(1, 139),
(1, 140),
(1, 141),
(1, 142),
(1, 143),
(1, 144),
(1, 145),
(1, 146),
(1, 147),
(1, 148),
(1, 149),
(1, 150),
(1, 151),
(1, 152),
(1, 153),
(1, 154),
(1, 155),
(1, 156),
(1, 157),
(1, 158),
(1, 159),
(1, 160),
(1, 161),
(1, 162),
(1, 163),
(1, 164),
(1, 165),
(1, 166),
(1, 167),
(1, 168),
(1, 169),
(1, 170),
(1, 171),
(1, 172),
(1, 173),
(1, 174),
(1, 175),
(1, 176),
(1, 177),
(1, 178),
(1, 179),
(1, 180),
(1, 181),
(1, 182),
(1, 183),
(1, 184),
(1, 185),
(1, 186),
(1, 187),
(1, 188),
(1, 189),
(1, 190),
(1, 191),
(1, 192),
(1, 193),
(1, 194),
(1, 195),
(1, 196),
(1, 197),
(1, 198),
(1, 199),
(1, 200),
(1, 201),
(1, 202),
(1, 203),
(1, 204),
(1, 205),
(1, 206),
(1, 207),
(1, 208),
(1, 209),
(1, 210),
(1, 211),
(1, 212),
(1, 213),
(1, 214),
(1, 215),
(1, 216),
(1, 217),
(1, 218),
(1, 219),
(1, 220),
(1, 221),
(1, 222),
(1, 223),
(1, 224),
(1, 225),
(1, 226),
(1, 227),
(1, 228),
(1, 229),
(1, 230),
(1, 231),
(1, 232),
(1, 233),
(1, 234),
(1, 235),
(1, 236),
(1, 237),
(1, 238),
(1, 239),
(1, 240),
(1, 241),
(1, 242),
(1, 243),
(1, 244),
(1, 245),
(1, 246),
(1, 247),
(1, 248),
(1, 249),
(1, 250),
(1, 251),
(1, 252),
(1, 253),
(1, 254),
(1, 255),
(1, 256),
(1, 257),
(1, 258),
(1, 259),
(1, 260),
(1, 261),
(1, 262),
(1, 263),
(1, 264),
(1, 265),
(1, 266),
(1, 267),
(1, 268),
(1, 269),
(1, 270),
(1, 271),
(1, 272),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),
(2, 21),
(2, 22),
(2, 23),
(2, 24),
(2, 25),
(2, 26),
(2, 27),
(2, 28),
(2, 29),
(2, 30),
(2, 31),
(2, 32),
(2, 33),
(2, 34),
(2, 35),
(2, 36),
(2, 37),
(2, 38),
(2, 39),
(2, 40),
(2, 41),
(2, 42),
(2, 43),
(2, 44),
(2, 45),
(2, 46),
(2, 47),
(2, 48),
(2, 49),
(2, 50),
(2, 51),
(2, 52),
(2, 53),
(2, 54),
(2, 55),
(2, 56),
(2, 57),
(2, 58),
(2, 59),
(2, 60),
(2, 61),
(2, 62),
(2, 63),
(2, 64),
(2, 65),
(2, 66),
(2, 67),
(2, 68),
(2, 69),
(2, 70),
(2, 71),
(2, 72),
(2, 73),
(2, 74),
(2, 75),
(2, 76),
(2, 77),
(2, 78),
(2, 79),
(2, 80),
(2, 81),
(2, 82),
(2, 83),
(2, 84),
(2, 85),
(2, 86),
(2, 87),
(2, 88),
(2, 89),
(2, 90),
(2, 91),
(2, 92),
(2, 93),
(2, 94),
(2, 95),
(2, 96),
(2, 97),
(2, 98),
(2, 99),
(2, 100),
(2, 101),
(2, 102),
(2, 103),
(2, 104),
(2, 105),
(2, 106),
(2, 107),
(2, 108),
(2, 109),
(2, 110),
(2, 111),
(2, 112),
(2, 113),
(2, 114),
(2, 115),
(2, 116),
(2, 117),
(2, 118),
(2, 119),
(2, 120),
(2, 121),
(2, 122),
(2, 123),
(2, 124),
(2, 125),
(2, 126),
(2, 127),
(2, 128),
(2, 129),
(2, 130),
(2, 131),
(2, 132),
(2, 133),
(2, 134),
(2, 135),
(2, 136),
(2, 137),
(2, 138),
(2, 139),
(2, 140),
(2, 141),
(2, 142),
(2, 143),
(2, 144),
(2, 145),
(2, 146),
(2, 147),
(2, 148),
(2, 149),
(2, 150),
(2, 151),
(2, 152),
(2, 153),
(2, 154),
(2, 155),
(2, 156),
(2, 157),
(2, 158),
(2, 159),
(2, 160),
(2, 161),
(2, 162),
(2, 163),
(2, 164),
(2, 165),
(2, 166),
(2, 167),
(2, 168),
(2, 169),
(2, 170),
(2, 171),
(2, 172),
(2, 173),
(2, 174),
(2, 175),
(2, 176),
(2, 177),
(2, 178),
(2, 179),
(2, 180),
(2, 181),
(2, 182),
(2, 183),
(2, 184),
(2, 185),
(2, 186),
(2, 187),
(2, 188),
(2, 189),
(2, 190),
(2, 191),
(2, 192),
(2, 193),
(2, 194),
(2, 195),
(2, 196),
(2, 197),
(2, 198),
(2, 199),
(2, 200),
(2, 201),
(2, 202),
(2, 203),
(2, 204),
(2, 205),
(2, 206),
(2, 207),
(2, 208),
(2, 209),
(2, 210),
(2, 211),
(2, 212),
(2, 213),
(2, 214),
(2, 215),
(2, 216),
(2, 217),
(2, 218),
(2, 219),
(2, 220),
(2, 221),
(2, 222),
(2, 223),
(2, 224),
(2, 225),
(2, 226),
(2, 227),
(2, 228),
(2, 229),
(2, 230),
(2, 231),
(2, 232),
(2, 233),
(2, 234),
(2, 235),
(2, 236),
(2, 237),
(2, 238),
(2, 239),
(2, 240),
(2, 241),
(2, 242),
(2, 243),
(2, 244),
(2, 245),
(2, 246),
(2, 247),
(2, 248),
(2, 249),
(2, 250),
(2, 251),
(2, 252),
(2, 253),
(2, 254),
(2, 255),
(2, 256),
(2, 257),
(2, 258),
(2, 259),
(2, 260),
(2, 261),
(2, 262),
(2, 263),
(2, 264),
(2, 265),
(2, 266),
(2, 267),
(2, 268),
(2, 269),
(2, 270),
(2, 271),
(2, 272),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 15),
(3, 16),
(3, 17),
(3, 18),
(3, 19),
(3, 20),
(3, 21),
(3, 22),
(3, 23),
(3, 24),
(3, 25),
(3, 26),
(3, 27),
(3, 28),
(3, 29),
(3, 30),
(3, 31),
(3, 32),
(3, 33),
(3, 34),
(3, 35),
(3, 36),
(3, 37),
(3, 38),
(3, 39),
(3, 40),
(3, 41),
(3, 42),
(3, 43),
(3, 44),
(3, 45),
(3, 46),
(3, 47),
(3, 48),
(3, 49),
(3, 50),
(3, 51),
(3, 52),
(3, 53),
(3, 54),
(3, 55),
(3, 56),
(3, 57),
(3, 58),
(3, 59),
(3, 60),
(3, 61),
(3, 62),
(3, 63),
(3, 64),
(3, 65),
(3, 66),
(3, 67),
(3, 68),
(3, 69),
(3, 70),
(3, 71),
(3, 72),
(3, 73),
(3, 74),
(3, 75),
(3, 76),
(3, 77),
(3, 78),
(3, 79),
(3, 80),
(3, 81),
(3, 82),
(3, 83),
(3, 84),
(3, 85),
(3, 86),
(3, 87),
(3, 88),
(3, 89),
(3, 90),
(3, 91),
(3, 92),
(3, 93),
(3, 94),
(3, 95),
(3, 96),
(3, 97),
(3, 98),
(3, 99),
(3, 100),
(3, 101),
(3, 102),
(3, 103),
(3, 104),
(3, 105),
(3, 106),
(3, 107),
(3, 108),
(3, 109),
(3, 110),
(3, 111),
(3, 112),
(3, 113),
(3, 114),
(3, 115),
(3, 116),
(3, 117),
(3, 118),
(3, 119),
(3, 120),
(3, 121),
(3, 122),
(3, 123),
(3, 124),
(3, 125),
(3, 126),
(3, 127),
(3, 128),
(3, 129),
(3, 130),
(3, 131),
(3, 132),
(3, 133),
(3, 134),
(3, 135),
(3, 136),
(3, 137),
(3, 138),
(3, 139),
(3, 140),
(3, 141),
(3, 142),
(3, 143),
(3, 144),
(3, 145),
(3, 146),
(3, 147),
(3, 148),
(3, 149),
(3, 150),
(3, 151),
(3, 152),
(3, 153),
(3, 154),
(3, 155),
(3, 156),
(3, 157),
(3, 158),
(3, 159),
(3, 160),
(3, 161),
(3, 162),
(3, 163),
(3, 164),
(3, 165),
(3, 166),
(3, 167),
(3, 168),
(3, 169),
(3, 170),
(3, 171),
(3, 172),
(3, 173),
(3, 174),
(3, 175),
(3, 176),
(3, 177),
(3, 178),
(3, 179),
(3, 180),
(3, 181),
(3, 182),
(3, 183),
(3, 184),
(3, 185),
(3, 186),
(3, 187),
(3, 188),
(3, 189),
(3, 190),
(3, 191),
(3, 192),
(3, 193),
(3, 194),
(3, 195),
(3, 196),
(3, 197),
(3, 198),
(3, 199),
(3, 200),
(3, 201),
(3, 202),
(3, 203),
(3, 204),
(3, 205),
(3, 206),
(3, 207),
(3, 208),
(3, 209),
(3, 210),
(3, 211),
(3, 212),
(3, 213),
(3, 214),
(3, 215),
(3, 216),
(3, 217),
(3, 218),
(3, 219),
(3, 220),
(3, 221),
(3, 222),
(3, 223),
(3, 224),
(3, 225),
(3, 226),
(3, 227),
(3, 228),
(3, 229),
(3, 230),
(3, 231),
(3, 232),
(3, 233),
(3, 234),
(3, 235),
(3, 236),
(3, 237),
(3, 238),
(3, 239),
(3, 240),
(3, 241),
(3, 242),
(3, 243),
(3, 244),
(3, 245),
(3, 246),
(3, 247),
(3, 248),
(3, 249),
(3, 250),
(3, 251),
(3, 252),
(3, 253),
(3, 254),
(3, 255),
(3, 256),
(3, 257),
(3, 258),
(3, 259),
(3, 260),
(3, 261),
(3, 262),
(3, 263),
(3, 264),
(3, 265),
(3, 266),
(3, 267),
(3, 268),
(3, 269),
(3, 270),
(3, 271),
(3, 272),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(4, 12),
(4, 13),
(4, 14),
(4, 15),
(4, 16),
(4, 17),
(4, 18),
(4, 19),
(4, 20),
(4, 21),
(4, 22),
(4, 23),
(4, 24),
(4, 25),
(4, 26),
(4, 27),
(4, 28),
(4, 29),
(4, 30),
(4, 31),
(4, 32),
(4, 33),
(4, 34),
(4, 35),
(4, 36),
(4, 37),
(4, 38),
(4, 39),
(4, 40),
(4, 41),
(4, 42),
(4, 43),
(4, 44),
(4, 45),
(4, 46),
(4, 47),
(4, 48),
(4, 49),
(4, 50),
(4, 51),
(4, 52),
(4, 53),
(4, 54),
(4, 55),
(4, 56),
(4, 57),
(4, 58),
(4, 59),
(4, 60),
(4, 61),
(4, 62),
(4, 63),
(4, 64),
(4, 65),
(4, 66),
(4, 67),
(4, 68),
(4, 69),
(4, 70),
(4, 71),
(4, 72),
(4, 73),
(4, 74),
(4, 75),
(4, 76),
(4, 77),
(4, 78),
(4, 79),
(4, 80),
(4, 81),
(4, 82),
(4, 83),
(4, 84),
(4, 85),
(4, 86),
(4, 87),
(4, 88),
(4, 89),
(4, 90),
(4, 91),
(4, 92),
(4, 93),
(4, 94),
(4, 95),
(4, 96),
(4, 97),
(4, 98),
(4, 99),
(4, 100),
(4, 101),
(4, 102),
(4, 103),
(4, 104),
(4, 105),
(4, 106),
(4, 107),
(4, 108),
(4, 109),
(4, 110),
(4, 111),
(4, 112),
(4, 113),
(4, 114),
(4, 115),
(4, 116),
(4, 117),
(4, 118),
(4, 119),
(4, 120),
(4, 121),
(4, 122),
(4, 123),
(4, 124),
(4, 125),
(4, 126),
(4, 127),
(4, 128),
(4, 129),
(4, 130),
(4, 131),
(4, 132),
(4, 133),
(4, 134),
(4, 135),
(4, 136),
(4, 137),
(4, 138),
(4, 139),
(4, 140),
(4, 141),
(4, 142),
(4, 143),
(4, 144),
(4, 145),
(4, 146),
(4, 147),
(4, 148),
(4, 149),
(4, 150),
(4, 151),
(4, 152),
(4, 153),
(4, 154),
(4, 155),
(4, 156),
(4, 157),
(4, 158),
(4, 159),
(4, 160),
(4, 161),
(4, 162),
(4, 163),
(4, 164),
(4, 165),
(4, 166),
(4, 167),
(4, 168),
(4, 169),
(4, 170),
(4, 171),
(4, 172),
(4, 173),
(4, 174),
(4, 175),
(4, 176),
(4, 177),
(4, 178),
(4, 179),
(4, 180),
(4, 181),
(4, 182),
(4, 183),
(4, 184),
(4, 185),
(4, 186),
(4, 187),
(4, 188),
(4, 189),
(4, 190),
(4, 191),
(4, 192),
(4, 193),
(4, 194),
(4, 195),
(4, 196),
(4, 197),
(4, 198),
(4, 199),
(4, 200),
(4, 201),
(4, 202),
(4, 203),
(4, 204),
(4, 205),
(4, 206),
(4, 207),
(4, 208),
(4, 209),
(4, 210),
(4, 211),
(4, 212),
(4, 213),
(4, 214),
(4, 215),
(4, 216),
(4, 217),
(4, 218),
(4, 219),
(4, 220),
(4, 221),
(4, 222),
(4, 223),
(4, 224),
(4, 225),
(4, 226),
(4, 227),
(4, 228),
(4, 229),
(4, 230),
(4, 231),
(4, 232),
(4, 233),
(4, 234),
(4, 235),
(4, 236),
(4, 237),
(4, 238),
(4, 239),
(4, 240),
(4, 241),
(4, 242),
(4, 243),
(4, 244),
(4, 245),
(4, 246),
(4, 247),
(4, 248),
(4, 249),
(4, 250),
(4, 251),
(4, 252),
(4, 253),
(4, 254),
(4, 255),
(4, 256),
(4, 257),
(4, 258),
(4, 259),
(4, 260),
(4, 261),
(4, 262),
(4, 263),
(4, 264),
(4, 265),
(4, 266),
(4, 267),
(4, 268),
(4, 269),
(4, 270),
(4, 271),
(4, 272),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(5, 15),
(5, 16),
(5, 17),
(5, 18),
(5, 19),
(5, 20),
(5, 21),
(5, 22),
(5, 23),
(5, 24),
(5, 25),
(5, 26),
(5, 27),
(5, 28),
(5, 29),
(5, 30),
(5, 31),
(5, 32),
(5, 33),
(5, 34),
(5, 35),
(5, 36),
(5, 37),
(5, 38),
(5, 39),
(5, 40),
(5, 41),
(5, 42),
(5, 43),
(5, 44),
(5, 45),
(5, 46),
(5, 47),
(5, 48),
(5, 49),
(5, 50),
(5, 51),
(5, 52),
(5, 53),
(5, 54),
(5, 55),
(5, 56),
(5, 57),
(5, 58),
(5, 59),
(5, 60),
(5, 61),
(5, 62),
(5, 63),
(5, 64),
(5, 65),
(5, 66),
(5, 67),
(5, 68),
(5, 69),
(5, 70),
(5, 71),
(5, 72),
(5, 73),
(5, 74),
(5, 75),
(5, 76),
(5, 77),
(5, 78),
(5, 79),
(5, 80),
(5, 81),
(5, 82),
(5, 83),
(5, 84),
(5, 85),
(5, 86),
(5, 87),
(5, 88),
(5, 89),
(5, 90),
(5, 91),
(5, 92),
(5, 93),
(5, 94),
(5, 95),
(5, 96),
(5, 97),
(5, 98),
(5, 99),
(5, 100),
(5, 101),
(5, 102),
(5, 103),
(5, 104),
(5, 105),
(5, 106),
(5, 107),
(5, 108),
(5, 109),
(5, 110),
(5, 111),
(5, 112),
(5, 113),
(5, 114),
(5, 115),
(5, 116),
(5, 117),
(5, 118),
(5, 119),
(5, 120),
(5, 121),
(5, 122),
(5, 123),
(5, 124),
(5, 125),
(5, 126),
(5, 127),
(5, 128),
(5, 129),
(5, 130),
(5, 131),
(5, 132),
(5, 133),
(5, 134),
(5, 135),
(5, 136),
(5, 137),
(5, 138),
(5, 139),
(5, 140),
(5, 141),
(5, 142),
(5, 143),
(5, 144),
(5, 145),
(5, 146),
(5, 147),
(5, 148),
(5, 149),
(5, 150),
(5, 151),
(5, 152),
(5, 153),
(5, 154),
(5, 155),
(5, 156),
(5, 157),
(5, 158),
(5, 159),
(5, 160),
(5, 161),
(5, 162),
(5, 163),
(5, 164),
(5, 165),
(5, 166),
(5, 167),
(5, 168),
(5, 169),
(5, 170),
(5, 171),
(5, 172),
(5, 173),
(5, 174),
(5, 175),
(5, 176),
(5, 177),
(5, 178),
(5, 179),
(5, 180),
(5, 181),
(5, 182),
(5, 183),
(5, 184),
(5, 185),
(5, 186),
(5, 187),
(5, 188),
(5, 189),
(5, 190),
(5, 191),
(5, 192),
(5, 193),
(5, 194),
(5, 195),
(5, 196),
(5, 197),
(5, 198),
(5, 199),
(5, 200),
(5, 201),
(5, 202),
(5, 203),
(5, 204),
(5, 205),
(5, 206),
(5, 207),
(5, 208),
(5, 209),
(5, 210),
(5, 211),
(5, 212),
(5, 213),
(5, 214),
(5, 215),
(5, 216),
(5, 217),
(5, 218),
(5, 219),
(5, 220),
(5, 221),
(5, 222),
(5, 223),
(5, 224),
(5, 225),
(5, 226),
(5, 227),
(5, 228),
(5, 229),
(5, 230),
(5, 231),
(5, 232),
(5, 233),
(5, 234),
(5, 235),
(5, 236),
(5, 237),
(5, 238),
(5, 239),
(5, 240),
(5, 241),
(5, 242),
(5, 243),
(5, 244),
(5, 245),
(5, 246),
(5, 247),
(5, 248),
(5, 249),
(5, 250),
(5, 251),
(5, 252),
(5, 253),
(5, 254),
(5, 255),
(5, 256),
(5, 257),
(5, 258),
(5, 259),
(5, 260),
(5, 261),
(5, 262),
(5, 263),
(5, 264),
(5, 265),
(5, 266),
(5, 267),
(5, 268),
(5, 269),
(5, 270),
(5, 271),
(5, 272);

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
(2, 3),
(3, 6),
(4, 2),
(4, 5),
(5, 4),
(5, 7);

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
-- Constraints for table `accion_notificacion_01_02_03`
--
ALTER TABLE `accion_notificacion_01_02_03`
  ADD CONSTRAINT `fk_accion_notificacion_accion_01_02_011` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_accion_notificacion_usuario_tipo_00_02_011` FOREIGN KEY (`fk_id_usuario_tipo`) REFERENCES `usuario_tipo_00_02_01` (`id_usuario_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `accion_transicion_01_02_02`
--
ALTER TABLE `accion_transicion_01_02_02`
  ADD CONSTRAINT `fk_accion_transicion_accion1` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_accion_transicion_transicion1` FOREIGN KEY (`fk_id_transicion`) REFERENCES `transicion_01_02_02` (`id_transicion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `actividad_01_05_01`
--
ALTER TABLE `actividad_01_05_01`
  ADD CONSTRAINT `fk_actividad_proceso_actividad_tipo1` FOREIGN KEY (`fk_id_actividad_tipo`) REFERENCES `actividad_tipo_01_05_04` (`id_actividad_tipo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_actividad_proceso_proceso1` FOREIGN KEY (`fk_id_proceso`) REFERENCES `proceso_01_01_01` (`id_proceso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `actividad_estado_01_06_02`
--
ALTER TABLE `actividad_estado_01_06_02`
  ADD CONSTRAINT `fk_actividad_estado_actividad1` FOREIGN KEY (`fk_id_actividad`) REFERENCES `actividad_01_05_01` (`id_actividad`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_actividad_estado_estado1` FOREIGN KEY (`fk_id_estado`) REFERENCES `estado_01_06_01` (`id_estado`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `actividad_transicion_01_05_02`
--
ALTER TABLE `actividad_transicion_01_05_02`
  ADD CONSTRAINT `fk_actividad_transicion_actividad1` FOREIGN KEY (`fk_id_actividad`) REFERENCES `actividad_01_05_01` (`id_actividad`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_actividad_transicion_transicion1` FOREIGN KEY (`fk_id_transicion`) REFERENCES `transicion_01_02_02` (`id_transicion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `alcance_acreditacion_cert_03_00_03`
--
ALTER TABLE `alcance_acreditacion_cert_03_00_03`
  ADD CONSTRAINT `fk_alcance_acreditacion_cert_evaluacion1` FOREIGN KEY (`fk_id_evaluacion`) REFERENCES `evaluacion_03_00_01` (`id_evaluacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `alcance_acreditacion_cert_04_13_03`
--
ALTER TABLE `alcance_acreditacion_cert_04_13_03`
  ADD CONSTRAINT `fk_alcance_acreditacion_cert_anexo_convenio1` FOREIGN KEY (`fk_id_anexo_convenio`) REFERENCES `anexo_convenio_04_13_01` (`id_anexo_convenio`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `alcance_acreditacion_insp_03_00_03`
--
ALTER TABLE `alcance_acreditacion_insp_03_00_03`
  ADD CONSTRAINT `fk_alcance_acreditacion_insp_evaluacion1` FOREIGN KEY (`fk_id_evaluacion`) REFERENCES `evaluacion_03_00_01` (`id_evaluacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `alcance_acreditacion_insp_04_13_03`
--
ALTER TABLE `alcance_acreditacion_insp_04_13_03`
  ADD CONSTRAINT `fk_alcance_acreditacion_anexo_convenio1` FOREIGN KEY (`fk_id_anexo_convenio`) REFERENCES `anexo_convenio_04_13_01` (`id_anexo_convenio`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `alcance_acreditacion_lab_03_00_03`
--
ALTER TABLE `alcance_acreditacion_lab_03_00_03`
  ADD CONSTRAINT `fk_alcance_acreditacion_lab_evaluacion1` FOREIGN KEY (`fk_id_evaluacion`) REFERENCES `evaluacion_03_00_01` (`id_evaluacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `anexo_convenio_04_13_01`
--
ALTER TABLE `anexo_convenio_04_13_01`
  ADD CONSTRAINT `fk_anexo_convenio_norma_referencia1` FOREIGN KEY (`fk_id_norma_referencia`) REFERENCES `norma_referencia_02_00_04` (`id_norma_referencia`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_anexo_convenio_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `aspectos_evaluados_04_08_03`
--
ALTER TABLE `aspectos_evaluados_04_08_03`
  ADD CONSTRAINT `fk_aspectos_evaluados_eval_tecnica1` FOREIGN KEY (`fk_id_eval_tecnica`) REFERENCES `eval_tecnica_04_08_01` (`id_eval_tecnica`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `designacion_evaluador_04_10_01`
--
ALTER TABLE `designacion_evaluador_04_10_01`
  ADD CONSTRAINT `fk_designacion_evaluador_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detalle_calibracion_04_03_01`
--
ALTER TABLE `detalle_calibracion_04_03_01`
  ADD CONSTRAINT `fk_detalle_calibracion_campo_calibracion1` FOREIGN KEY (`fk_id_campo_calibracion`) REFERENCES `campo_calibracion_04_00_04` (`id_campo_calibracion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_detalle_calibracion_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detalle_certificacion_04_05_01`
--
ALTER TABLE `detalle_certificacion_04_05_01`
  ADD CONSTRAINT `fk_detalle_certificacion_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detalle_equipos_04_02_01`
--
ALTER TABLE `detalle_equipos_04_02_01`
  ADD CONSTRAINT `fk_detalle_equipos_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detalle_inspeccion_04_04_01`
--
ALTER TABLE `detalle_inspeccion_04_04_01`
  ADD CONSTRAINT `fk_detalle_inspeccion_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `estado_notificacion_01_02_03`
--
ALTER TABLE `estado_notificacion_01_02_03`
  ADD CONSTRAINT `fk_estado_notificacion_estado_01_06_011` FOREIGN KEY (`fk_id_estado`) REFERENCES `estado_01_06_01` (`id_estado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_estado_notificacion_usuario_tipo_00_02_011` FOREIGN KEY (`fk_id_usuario_tipo`) REFERENCES `usuario_tipo_00_02_01` (`id_usuario_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `evaluacion_03_00_01`
--
ALTER TABLE `evaluacion_03_00_01`
  ADD CONSTRAINT `fk_evaluacion_oec_contacto1` FOREIGN KEY (`fk_id_oec_contacto_alta_direccion`) REFERENCES `oec_contacto_02_00_03` (`id_oec_contacto`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_evaluacion_oec_contacto2` FOREIGN KEY (`fk_id_oec_contacto_gerente_tecnico`) REFERENCES `oec_contacto_02_00_03` (`id_oec_contacto`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_evaluacion_oec_contacto3` FOREIGN KEY (`fk_id_oec_contacto_gerente_calidad`) REFERENCES `oec_contacto_02_00_03` (`id_oec_contacto`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_evaluacion_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `eval_tecnica_04_08_01`
--
ALTER TABLE `eval_tecnica_04_08_01`
  ADD CONSTRAINT `fk_eval_tecnica_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `informe_acred_04_13_01`
--
ALTER TABLE `informe_acred_04_13_01`
  ADD CONSTRAINT `fk_informe_acred_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `informe_evaluacion_04_06_01`
--
ALTER TABLE `informe_evaluacion_04_06_01`
  ADD CONSTRAINT `fk_informe_evaluacion_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `info_ensayo_04_01_01`
--
ALTER TABLE `info_ensayo_04_01_01`
  ADD CONSTRAINT `fk_info_ensayo_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `log_sistema_03_00_03`
--
ALTER TABLE `log_sistema_03_00_03`
  ADD CONSTRAINT `fk_log_sistema_usuario_00_01_001` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `no_conformidad_04_07_01`
--
ALTER TABLE `no_conformidad_04_07_01`
  ADD CONSTRAINT `fk_no_conformidad_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `oec_acreditacion_solicitada_02_00_03`
--
ALTER TABLE `oec_acreditacion_solicitada_02_00_03`
  ADD CONSTRAINT `fk_oec_acreditacion_solicitada_oec1` FOREIGN KEY (`fk_id_oec`) REFERENCES `oec_02_00_01` (`id_oec`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `oec_actividad_02_00_02`
--
ALTER TABLE `oec_actividad_02_00_02`
  ADD CONSTRAINT `fk_table1_actividad_economica1` FOREIGN KEY (`fk_id_actividad_economica`) REFERENCES `actividad_economica_02_00_04` (`id_actividad_economica`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_table1_oec1` FOREIGN KEY (`fk_id_oec`) REFERENCES `oec_02_00_01` (`id_oec`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `oec_contacto_02_00_03`
--
ALTER TABLE `oec_contacto_02_00_03`
  ADD CONSTRAINT `fk_oec_contacto_oec1` FOREIGN KEY (`fk_id_oec`) REFERENCES `oec_02_00_01` (`id_oec`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_oec_contacto_oec_titulo1` FOREIGN KEY (`fk_id_oec_titulo`) REFERENCES `oec_titulo_02_00_04` (`id_oec_titulo`) ON UPDATE CASCADE;

--
-- Constraints for table `personal_autorizado_04_13_03`
--
ALTER TABLE `personal_autorizado_04_13_03`
  ADD CONSTRAINT `fk_personal_autorizado_anexo_convenio1` FOREIGN KEY (`fk_id_anexo_convenio`) REFERENCES `anexo_convenio_04_13_01` (`id_anexo_convenio`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `plan_evaluacion_03_00_03`
--
ALTER TABLE `plan_evaluacion_03_00_03`
  ADD CONSTRAINT `fk_plan_evaluacion_evaluacion1` FOREIGN KEY (`fk_id_evaluacion`) REFERENCES `evaluacion_03_00_01` (`id_evaluacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_plan_evaluacion_oec_contacto1` FOREIGN KEY (`fk_id_oec_contacto`) REFERENCES `oec_contacto_02_00_03` (`id_oec_contacto`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_plan_evaluacion_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON UPDATE CASCADE;

--
-- Constraints for table `proveedor_eval_04_08_03`
--
ALTER TABLE `proveedor_eval_04_08_03`
  ADD CONSTRAINT `fk_proveedor_eval_eval_tecnica1` FOREIGN KEY (`fk_id_eval_tecnica`) REFERENCES `eval_tecnica_04_08_01` (`id_eval_tecnica`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `prueba_participacion_04_09_01`
--
ALTER TABLE `prueba_participacion_04_09_01`
  ADD CONSTRAINT `fk_prueba_participacion_criterio_evaluacion1` FOREIGN KEY (`fk_id_criterio_evaluacion`) REFERENCES `criterio_evaluacion_04_00_04` (`id_criterio_evaluacion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_prueba_participacion_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `satisfaccion_cliente_04_12_01`
--
ALTER TABLE `satisfaccion_cliente_04_12_01`
  ADD CONSTRAINT `fk_satisfaccion_cliente_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `satisfaccion_evaluacion_04_12_03`
--
ALTER TABLE `satisfaccion_evaluacion_04_12_03`
  ADD CONSTRAINT `fk_satisfaccion_evaluacion_criterio_satisfaccion1` FOREIGN KEY (`fk_id_criterio_satisfaccion`) REFERENCES `criterio_satisfaccion_04_12_04` (`id_criterio_satisfaccion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_satisfaccion_evaluacion_satisfaccion_cliente1` FOREIGN KEY (`fk_id_satisfaccion_cliente`) REFERENCES `satisfaccion_cliente_04_12_01` (`id_satisfaccion_cliente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `supervision_criterio_04_11_03`
--
ALTER TABLE `supervision_criterio_04_11_03`
  ADD CONSTRAINT `fk_supervision_criterio_criterio_supervision1` FOREIGN KEY (`fk_id_criterio_supervision`) REFERENCES `criterio_supervision_04_11_04` (`id_criterio_supervision`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_supervision_criterio_supervision_evaluador1` FOREIGN KEY (`fk_id_supervision_evaluador`) REFERENCES `supervision_evaluador_04_11_01` (`id_supervision_evaluador`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `supervision_evaluador_04_11_01`
--
ALTER TABLE `supervision_evaluador_04_11_01`
  ADD CONSTRAINT `fk_supervision_evaluador_peticion1` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE;

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

--
-- Constraints for table `usuario_proceso_00_01_02`
--
ALTER TABLE `usuario_proceso_00_01_02`
  ADD CONSTRAINT `fk_usuario_proceso_proceso1` FOREIGN KEY (`fk_id_proceso`) REFERENCES `proceso_01_01_01` (`id_proceso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuario_proceso_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

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
