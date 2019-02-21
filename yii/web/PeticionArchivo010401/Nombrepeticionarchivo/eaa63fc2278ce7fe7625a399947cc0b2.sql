-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 30, 2016 at 11:43 AM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

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
  KEY `fk_accion_accion_tipo1_idx` (`fk_id_accion_tipo`),
  KEY `fk_accion_proceso1_idx` (`fk_id_proceso`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=201 ;

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
(28, 1, 1, 'termina-carga-formulario-031-034', NULL, NULL),
(29, 1, 1, 'termina-carga-formulario-011-038-046', NULL, NULL),
(30, 1, 1, 'termina-carga-formulario-033-106', NULL, NULL),
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
(45, 1, 1, 'aprobacion-da-tramite-comite-tecnico', NULL, NULL),
(46, 1, 1, 'carga-informe-consejo', NULL, NULL),
(47, 1, 2, 'aprueba-oec-designacion-equipo-evaluador', NULL, NULL),
(48, 1, 2, 'finaliza-designacion-equipo-evaluador', NULL, NULL),
(49, 1, 2, 'carga-cotizacion-evaluacion', NULL, NULL),
(50, 1, 2, 'carga-factura-evaluacion', NULL, NULL),
(51, 1, 2, 'verifica-factura-evaluacion', NULL, NULL),
(52, 1, 2, 'finaliza-oec-carga-archivos-adicionales', NULL, NULL),
(53, 1, 2, 'aprueba-ee-documentacion', NULL, NULL),
(54, 1, 2, 'termina-carga-formulario-024', NULL, NULL),
(55, 1, 2, 'termina-carga-formulario-031-034-046', NULL, NULL),
(56, 1, 2, 'termina-carga-formulario-033-106', NULL, NULL),
(57, 1, 2, 'termina-carga-formulario-011-012', NULL, NULL),
(58, 1, 2, 'termina-carga-formulario-038', NULL, NULL),
(59, 1, 2, 'termina-carga-archivos-plan-accion', NULL, NULL),
(60, 1, 2, 'aprueba-el-archivos-plan-accion', NULL, NULL),
(61, 1, 2, 'termina-carga-formulario-050', NULL, NULL),
(62, 1, 2, 'aprobacion-ra-tramite-comite-tecnico', NULL, NULL),
(63, 1, 2, 'carga-acta-comite-tecnico', NULL, NULL),
(64, 1, 2, 'aprobacion-da-tramite-comite-tecnico', NULL, NULL),
(65, 1, 2, 'termina-carga-formulario-026', NULL, NULL),
(66, 1, 2, 'certificado-da-aprobado', NULL, NULL),
(67, 1, 2, 'aprobar-tramite-consejo', NULL, NULL),
(68, 1, 2, 'cargar-acta-consejo', NULL, NULL),
(69, 1, 2, 'verifica-factura-concesion-mantenimiento', NULL, NULL),
(71, 1, 2, 'carga-cotizacion-concesion-mantenimiento', NULL, NULL),
(72, 1, 2, 'carga-factura-concesion-mantenimiento', NULL, NULL),
(73, 1, 3, 'aprueba-oec-designacion-equipo-evaluador', NULL, NULL),
(74, 1, 3, 'finaliza-designacion-equipo-evaluador', NULL, NULL),
(75, 1, 3, 'carga-cotizacion-evaluacion', NULL, NULL),
(76, 1, 3, 'carga-factura-evaluacion', NULL, NULL),
(77, 1, 3, 'verifica-factura-evaluacion', NULL, NULL),
(78, 1, 3, 'finaliza-oec-carga-archivos-adicionales', NULL, NULL),
(79, 1, 3, 'aprueba-ee-documentacion', NULL, NULL),
(80, 1, 3, 'termina-carga-formulario-024', NULL, NULL),
(81, 1, 3, 'termina-carga-formulario-031-034-046', NULL, NULL),
(82, 1, 3, 'termina-carga-formulario-033-106', NULL, NULL),
(83, 1, 3, 'termina-carga-formulario-011-012', NULL, NULL),
(84, 1, 3, 'termina-carga-formulario-038', NULL, NULL),
(85, 1, 3, 'termina-carga-archivos-plan-accion', NULL, NULL),
(86, 1, 3, 'aprueba-el-archivos-plan-accion', NULL, NULL),
(87, 1, 3, 'termina-carga-formulario-050', NULL, NULL),
(88, 1, 3, 'aprobacion-ra-tramite-comite-tecnico', NULL, NULL),
(89, 1, 3, 'carga-acta-comite-tecnico', NULL, NULL),
(90, 1, 3, 'aprobacion-da-tramite-comite-tecnico', NULL, NULL),
(91, 1, 3, 'termina-carga-formulario-026', NULL, NULL),
(92, 1, 3, 'certificado-da-aprobado', NULL, NULL),
(93, 1, 3, 'aprobar-tramite-consejo', NULL, NULL),
(94, 1, 3, 'cargar-acta-consejo', NULL, NULL),
(95, 1, 3, 'verifica-factura-concesion-mantenimiento', NULL, NULL),
(97, 1, 3, 'carga-cotizacion-concesion-mantenimiento', NULL, NULL),
(98, 1, 3, 'carga-factura-concesion-mantenimiento', NULL, NULL),
(99, 1, 4, 'termina-carga-formularios-50s', NULL, NULL),
(100, 1, 4, 'termina-carga-archivos-base', NULL, NULL),
(101, 1, 4, 'carga-cotizacion-revision-documental', NULL, NULL),
(102, 1, 4, 'carga-factura-revision-documental', NULL, NULL),
(103, 1, 4, 'verifica-factura-revision-documental', NULL, NULL),
(104, 1, 4, 'ra-aprueba-documentacion', NULL, NULL),
(105, 1, 4, 'finaliza-designacion-equipo-evaluador', NULL, NULL),
(106, 1, 4, 'aprueba-oec-designacion-equipo-evaluador', NULL, NULL),
(107, 1, 4, 'carga-cotizacion-evaluacion', NULL, NULL),
(108, 1, 4, 'carga-factura-evaluacion', NULL, NULL),
(109, 1, 4, 'verifica-factura-evaluacion', NULL, NULL),
(110, 1, 4, 'aprueba-ee-documentacion', NULL, NULL),
(111, 1, 4, 'finaliza-oec-carga-archivos-adicionales', NULL, NULL),
(112, 1, 4, 'termina-carga-formulario-024', NULL, NULL),
(113, 1, 4, 'termina-carga-formulario-038', NULL, NULL),
(114, 1, 4, 'termina-carga-formulario-031-034-046', NULL, NULL),
(115, 1, 4, 'termina-carga-formulario-033-106', NULL, NULL),
(116, 1, 4, 'termina-carga-formulario-011-012', NULL, NULL),
(117, 1, 4, 'termina-carga-archivos-plan-accion', NULL, NULL),
(118, 1, 4, 'aprueba-el-archivos-plan-accion', NULL, NULL),
(119, 1, 4, 'termina-carga-formulario-050', NULL, NULL),
(120, 1, 4, 'aprobacion-ra-tramite-comite-tecnico', NULL, NULL),
(121, 1, 4, 'carga-acta-comite-tecnico', NULL, NULL),
(122, 1, 4, 'aprobacion-da-tramite-comite-tecnico', NULL, NULL),
(123, 1, 4, 'termina-carga-formulario-026', NULL, NULL),
(124, 1, 4, 'certificado-da-aprobado', NULL, NULL),
(125, 1, 4, 'aprobar-tramite-consejo', NULL, NULL),
(126, 1, 4, 'cargar-acta-consejo', NULL, NULL),
(127, 1, 4, 'carga-factura-concesion-mantenimiento', NULL, NULL),
(128, 1, 4, 'verifica-factura-concesion-mantenimiento', NULL, NULL),
(130, 1, 4, 'carga-cotizacion-concesion-mantenimiento', NULL, NULL),
(131, 1, 5, 'aprueba-oec-designacion-equipo-evaluador', NULL, NULL),
(132, 1, 5, 'finaliza-designacion-equipo-evaluador', NULL, NULL),
(133, 1, 5, 'carga-cotizacion-evaluacion', NULL, NULL),
(134, 1, 5, 'carga-factura-evaluacion', NULL, NULL),
(135, 1, 5, 'verifica-factura-evaluacion', NULL, NULL),
(136, 1, 5, 'finaliza-oec-carga-archivos-adicionales', NULL, NULL),
(137, 1, 5, 'aprueba-ee-documentacion', NULL, NULL),
(138, 1, 5, 'termina-carga-formulario-024', NULL, NULL),
(139, 1, 5, 'termina-carga-formulario-031-034-046', NULL, NULL),
(140, 1, 5, 'termina-carga-formulario-033-106', NULL, NULL),
(141, 1, 5, 'termina-carga-formulario-011-012', NULL, NULL),
(142, 1, 5, 'termina-carga-formulario-038', NULL, NULL),
(143, 1, 5, 'termina-carga-archivos-plan-accion', NULL, NULL),
(144, 1, 5, 'aprueba-el-archivos-plan-accion', NULL, NULL),
(145, 1, 5, 'termina-carga-formulario-050', NULL, NULL),
(146, 1, 5, 'aprobacion-ra-tramite-comite-tecnico', NULL, NULL),
(147, 1, 5, 'carga-acta-comite-tecnico', NULL, NULL),
(148, 1, 5, 'aprobacion-da-tramite-comite-tecnico', NULL, NULL),
(149, 1, 5, 'termina-carga-formulario-026', NULL, NULL),
(150, 1, 5, 'certificado-da-aprobado', NULL, NULL),
(151, 1, 5, 'aprobar-tramite-consejo', NULL, NULL),
(152, 1, 5, 'cargar-acta-consejo', NULL, NULL),
(153, 1, 5, 'verifica-factura-concesion-mantenimiento', NULL, NULL),
(155, 1, 5, 'carga-cotizacion-concesion-mantenimiento', NULL, NULL),
(156, 1, 5, 'carga-factura-concesion-mantenimiento', NULL, NULL),
(157, 1, 6, 'termina-carga-formularios-50s', NULL, NULL),
(158, 1, 6, 'termina-carga-archivos-base', NULL, NULL),
(159, 1, 6, 'carga-cotizacion-revision-documental', NULL, NULL),
(160, 1, 6, 'carga-factura-revision-documental', NULL, NULL),
(161, 1, 6, 'verifica-factura-revision-documental', NULL, NULL),
(162, 1, 6, 'ra-aprueba-documentacion', NULL, NULL),
(163, 1, 6, 'finaliza-designacion-equipo-evaluador', NULL, NULL),
(164, 1, 6, 'aprueba-oec-designacion-equipo-evaluador', NULL, NULL),
(165, 1, 6, 'carga-cotizacion-evaluacion', NULL, NULL),
(166, 1, 6, 'carga-factura-evaluacion', NULL, NULL),
(167, 1, 6, 'verifica-factura-evaluacion', NULL, NULL),
(168, 1, 6, 'aprueba-ee-documentacion', NULL, NULL),
(169, 1, 6, 'finaliza-oec-carga-archivos-adicionales', NULL, NULL),
(170, 1, 6, 'termina-carga-formulario-024', NULL, NULL),
(171, 1, 6, 'termina-carga-formulario-038', NULL, NULL),
(172, 1, 6, 'termina-carga-formulario-031-034-046', NULL, NULL),
(173, 1, 6, 'termina-carga-formulario-033-106', NULL, NULL),
(174, 1, 6, 'termina-carga-formulario-011-012', NULL, NULL),
(175, 1, 6, 'termina-carga-archivos-plan-accion', NULL, NULL),
(176, 1, 6, 'aprueba-el-archivos-plan-accion', NULL, NULL),
(177, 1, 6, 'termina-carga-formulario-050', NULL, NULL),
(178, 1, 6, 'aprobacion-ra-tramite-comite-tecnico', NULL, NULL),
(179, 1, 6, 'carga-acta-comite-tecnico', NULL, NULL),
(180, 1, 6, 'aprobacion-da-tramite-comite-tecnico', NULL, NULL),
(181, 1, 6, 'termina-carga-formulario-026', NULL, NULL),
(182, 1, 6, 'certificado-da-aprobado', NULL, NULL),
(183, 1, 6, 'aprobar-tramite-consejo', NULL, NULL),
(184, 1, 6, 'cargar-acta-consejo', NULL, NULL),
(185, 1, 6, 'carga-factura-concesion-mantenimiento', NULL, NULL),
(186, 1, 6, 'verifica-factura-concesion-mantenimiento', NULL, NULL),
(188, 1, 6, 'carga-cotizacion-concesion-mantenimiento', NULL, NULL),
(189, 1, 1, 'carga-evidencias-plan-accion', NULL, NULL),
(190, 1, 2, 'carga-evidencias-plan-accion', NULL, NULL),
(191, 1, 3, 'carga-evidencias-plan-accion', NULL, NULL),
(192, 1, 4, 'carga-evidencias-plan-accion', NULL, NULL),
(193, 1, 5, 'carga-evidencias-plan-accion', NULL, NULL),
(194, 1, 6, 'carga-evidencias-plan-accion', NULL, NULL),
(195, 1, 1, 'carga-formulario-108', NULL, NULL),
(196, 1, 2, 'carga-formulario-108', NULL, NULL),
(197, 1, 3, 'carga-formulario-108', NULL, NULL),
(198, 1, 4, 'carga-formulario-108', NULL, NULL),
(199, 1, 5, 'carga-formulario-108', NULL, NULL),
(200, 1, 6, 'carga-formulario-108', NULL, NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=64 ;

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
(62, 46, 3, '[IBMETRO] Informe para Consejo Cargado', 'Se ha cargado el informe para el Consejo referente al trámite con código [codigo_tramite]'),
(63, 7, 5, '[IBMETRO] Acta de Consejo Cargada', 'Se ha cargado en el sistema el Acta de Consejo para el trámite: [codigo_tramite], en el Paso 3.');

-- --------------------------------------------------------

--
-- Table structure for table `accion_observacion_01_02_03`
--

CREATE TABLE IF NOT EXISTS `accion_observacion_01_02_03` (
  `id_accion_observacion` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_accion` int(11) NOT NULL,
  `fk_id_usuario_tipo` int(11) NOT NULL,
  `asunto_accion_observacion` text NOT NULL,
  PRIMARY KEY (`id_accion_observacion`),
  UNIQUE KEY `accion_tipo_usuario` (`fk_id_accion`,`fk_id_usuario_tipo`),
  KEY `fk_accion_observacion_accion_01_02_011_idx` (`fk_id_accion`),
  KEY `fk_accion_observacion_usuario_tipo_00_02_011_idx` (`fk_id_usuario_tipo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `accion_observacion_01_02_03`
--

INSERT INTO `accion_observacion_01_02_03` (`id_accion_observacion`, `fk_id_accion`, `fk_id_usuario_tipo`, `asunto_accion_observacion`) VALUES
(1, 6, 4, '[Paso 3] Observación'),
(2, 6, 6, '[Paso 3] Observación'),
(3, 4, 2, '[Paso 2] Observación de Factura'),
(4, 5, 5, '[Paso 2] Recomendación de la DA'),
(5, 53, 2, '[Paso 11] Observaciones'),
(6, 53, 5, '[Paso 11] Observaciones'),
(7, 79, 2, '[Paso 11] Observaciones'),
(8, 79, 5, '[Paso 11] Observaciones'),
(9, 110, 2, '[Paso 11] Observaciones'),
(10, 110, 5, '[Paso 11] Observaciones'),
(11, 137, 2, '[Paso 11] Observaciones'),
(12, 137, 5, '[Paso 11] Observaciones'),
(13, 168, 2, '[Paso 11] Observaciones'),
(14, 168, 5, '[Paso 11] Observaciones'),
(15, 18, 2, '[Paso 8] Observación de Documentación'),
(16, 104, 2, '[Paso 8] Observación de Documentación'),
(17, 162, 2, '[Paso 8] Observación de Documentación');

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
(14, 32),
(14, 33),
(14, 189),
(14, 195),
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
(21, 47),
(21, 48),
(22, 49),
(22, 50),
(22, 51),
(23, 52),
(23, 53),
(24, 54),
(25, 55),
(25, 56),
(25, 57),
(25, 58),
(26, 59),
(26, 60),
(27, 61),
(28, 62),
(28, 63),
(28, 64),
(29, 65),
(30, 66),
(31, 67),
(31, 68),
(32, 69),
(32, 71),
(32, 72),
(33, 73),
(33, 74),
(34, 75),
(34, 76),
(34, 77),
(35, 78),
(35, 79),
(36, 80),
(37, 81),
(37, 82),
(37, 83),
(37, 84),
(38, 85),
(38, 86),
(39, 87),
(40, 88),
(40, 89),
(40, 90),
(41, 91),
(42, 92),
(43, 93),
(43, 94),
(44, 95),
(44, 97),
(44, 98),
(46, 99),
(47, 100),
(48, 101),
(48, 102),
(48, 103),
(49, 104),
(50, 105),
(50, 106),
(51, 107),
(51, 108),
(51, 109),
(52, 110),
(52, 111),
(53, 112),
(54, 113),
(54, 114),
(54, 115),
(54, 116),
(55, 117),
(55, 118),
(56, 119),
(57, 120),
(57, 121),
(57, 122),
(58, 123),
(59, 124),
(60, 125),
(60, 126),
(61, 127),
(61, 128),
(61, 130),
(63, 131),
(63, 132),
(64, 133),
(64, 134),
(64, 135),
(65, 136),
(65, 137),
(66, 138),
(67, 139),
(67, 140),
(67, 141),
(67, 142),
(68, 143),
(68, 144),
(69, 145),
(70, 146),
(70, 147),
(70, 148),
(71, 149),
(72, 150),
(73, 151),
(73, 152),
(74, 153),
(74, 155),
(74, 156),
(75, 157),
(76, 158),
(77, 159),
(77, 160),
(77, 161),
(78, 162),
(79, 163),
(79, 164),
(80, 165),
(80, 166),
(80, 167),
(81, 168),
(81, 169),
(82, 170),
(83, 171),
(83, 172),
(83, 173),
(83, 174),
(84, 175),
(84, 176),
(85, 177),
(86, 178),
(86, 179),
(86, 180),
(87, 181),
(88, 182),
(89, 183),
(89, 184),
(90, 185),
(90, 186),
(90, 188);

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
-- Table structure for table `actividad_05_01_01`
--

CREATE TABLE IF NOT EXISTS `actividad_05_01_01` (
  `id_actividad` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `fk_id_oec` int(11) NOT NULL,
  `fk_id_tipo_actividad` int(11) NOT NULL,
  `fk_id_tipo_curso` int(11) DEFAULT NULL,
  `codigo_actividad` varchar(45) NOT NULL COMMENT 'display',
  `fecha_actividad` date NOT NULL,
  `nombre_actividad` varchar(200) NOT NULL,
  `descripcion_actividad` text,
  `fecha_inicial_actividad` date NOT NULL,
  `fecha_final_actividad` date NOT NULL,
  `prs_actividad` int(11) DEFAULT NULL,
  `horas_actividad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_actividad`),
  UNIQUE KEY `codigo_actividad_UNIQUE` (`codigo_actividad`),
  KEY `fk_actividad_tipo_actividad1_idx` (`fk_id_tipo_actividad`),
  KEY `fk_actividad_oec_02_00_011_idx` (`fk_id_oec`),
  KEY `fk_actividad_05_01_01_tipo_curso_05_01_041_idx` (`fk_id_tipo_curso`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `actividad_05_01_01`
--

INSERT INTO `actividad_05_01_01` (`id_actividad`, `fk_id_oec`, `fk_id_tipo_actividad`, `fk_id_tipo_curso`, `codigo_actividad`, `fecha_actividad`, `nombre_actividad`, `descripcion_actividad`, `fecha_inicial_actividad`, `fecha_final_actividad`, `prs_actividad`, `horas_actividad`) VALUES
(1, 1, 1, 1, 'DTA-REG-2/2016', '0000-00-00', 'adsf', 'asdf', '2016-01-16', '2016-01-16', 12, NULL),
(2, 1, 4, 1, 'DTA-CAP-2/2016', '0000-00-00', 'asdf', 'asdf', '2016-01-02', '2016-01-16', 2, NULL),
(3, 1, 5, 1, 'DTA-DIF-2/2016', '0000-00-00', 'wefwe', 'fwefwef', '2016-01-02', '2016-01-09', 1, NULL),
(4, 1, 1, 1, 'DTA-REG-1/2016', '0000-00-00', 'ljhoiu', 'lkjhlk', '2016-01-02', '2016-01-09', 12, NULL),
(5, 1, 1, 1, 'DTA-REG-3/2016', '0000-00-00', 'adsf', 'adsf', '2016-01-02', '2016-01-09', 11, NULL),
(6, 1, 1, 1, 'DTA-REG-4/2016', '0000-00-00', 'asdf', 'asdf', '2016-01-02', '2016-01-16', 12, NULL),
(7, 1, 1, 1, 'DTA-REG-5/2016', '0000-00-00', 'asdf', 'asdf', '2016-01-11', '2016-01-18', 12, NULL),
(8, 1, 1, 1, 'DTA-REG-6/2016', '0000-00-00', 'sdfds', 'fsdfsd', '2016-01-08', '2016-01-29', 12, NULL),
(9, 1, 1, 1, 'DTA-REG-7/2016', '0000-00-00', 'adsf', 'adsf', '2016-01-11', '2016-01-27', 12, NULL),
(10, 1, 1, 1, 'DTA-REG-8/2016', '0000-00-00', 'ejemplo', 'Ejemplo', '2016-01-27', '2016-01-27', 13, NULL),
(11, 1, 1, 1, 'DTA-REG-9/2016', '0000-00-00', 'asdf', 'adsfsadf', '2016-01-02', '2016-01-09', 12, 12),
(12, 1, 2, 1, 'DTA-PRS-3/2016', '0000-00-00', 'dsf', 'adsfasdf', '2016-01-11', '2016-01-18', 23, 23),
(13, 1, 1, NULL, 'REG-10/2016', '0000-00-00', 'adsf', 'asdfads', '2016-01-08', '2016-01-30', NULL, 23),
(14, 1, 3, NULL, 'VT-3/2016', '0000-00-00', 'asdf', 'adsfasd', '2016-01-15', '2016-01-16', NULL, 23),
(15, 1, 1, NULL, 'REG-11/2016', '0000-00-00', 'asdfadsf', 'adsfadsf', '2016-03-07', '2016-03-10', NULL, 23),
(16, 1, 2, NULL, 'PRS-4/2016', '0000-00-00', 'lkjk', 'lkjhk', '2016-01-28', '2016-01-30', NULL, 12);

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
-- Table structure for table `actividad_usuario_05_01_03`
--

CREATE TABLE IF NOT EXISTS `actividad_usuario_05_01_03` (
  `id_actividad_usuario` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `fk_id_actividad` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `rol_actividad_usuario` set('responsable','facilitador','evaluador_lider','evaluador_tecnico','experto_tecnico','evaluacion_entrenamiento','observador') NOT NULL,
  PRIMARY KEY (`id_actividad_usuario`),
  UNIQUE KEY `unico_actividad_usuario` (`fk_id_actividad`,`fk_id_usuario`),
  KEY `fk_actividad_usuario_actividad1_idx` (`fk_id_actividad`),
  KEY `fk_actividad_usuario_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `actividad_usuario_05_01_03`
--

INSERT INTO `actividad_usuario_05_01_03` (`id_actividad_usuario`, `fk_id_actividad`, `fk_id_usuario`, `rol_actividad_usuario`) VALUES
(1, 1, 1, 'evaluador_tecnico'),
(2, 1, 4, 'evaluador_tecnico'),
(3, 3, 1, 'responsable'),
(4, 4, 1, 'responsable'),
(5, 5, 1, 'responsable'),
(6, 6, 2, 'facilitador'),
(7, 7, 1, 'evaluador_lider'),
(8, 8, 1, 'experto_tecnico'),
(9, 9, 1, 'facilitador'),
(10, 10, 1, 'responsable');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `alcance_acreditacion_insp_04_13_03`
--

INSERT INTO `alcance_acreditacion_insp_04_13_03` (`id_alcance_acreditacion_insp`, `fk_id_anexo_convenio`, `fecha_acreditacion_alcance_acreditacion_insp`, `procedimiento_alcance_acreditacion_insp`, `norma_ref_alcance_acreditacion_insp`, `items_inspeccionados_alcance_acreditacion_insp`, `items_referencia_alcance_acreditacion_insp`, `signatario_alcance_acreditacion_insp`) VALUES
(2, 2, '2016-12-03', '', 'asdf', 'asdf', 'asdf', 'asdf');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `alcance_acreditacion_lab_03_00_03`
--

INSERT INTO `alcance_acreditacion_lab_03_00_03` (`id_alcance_acreditacion_lab`, `fk_id_evaluacion`, `descripcion_ensayo_alcance_acreditacion_lab`, `metodo_ensayo_alcance_acreditacion_lab`, `rango_medicion_alcance_acreditacion_lab`, `incertidumbre_alcance_acreditacion_lab`) VALUES
(1, 5, 'ethr', 'er', 'erht', 'th'),
(2, 5, 'er', 'hterhte', 'rth', 'erht'),
(3, 6, 'adsf', 'asd', 'dsf', 'asdfa'),
(4, 6, 'asdf', 'asd', 'fa', 'sdfasd'),
(5, 6, 'asd', 'fasd', 'fasd', 'fasdf');

-- --------------------------------------------------------

--
-- Table structure for table `alcance_acreditacion_lab_04_13_03`
--

CREATE TABLE IF NOT EXISTS `alcance_acreditacion_lab_04_13_03` (
  `id_alcance_acreditacion_lab` int(11) NOT NULL AUTO_INCREMENT COMMENT 'evaluacion',
  `fk_id_anexo_convenio` int(11) NOT NULL,
  `descripcion_ensayo_alcance_acreditacion_lab` text,
  `metodo_ensayo_alcance_acreditacion_lab` text,
  `rango_medicion_alcance_acreditacion_lab` text,
  `incertidumbre_alcance_acreditacion_lab` text,
  PRIMARY KEY (`id_alcance_acreditacion_lab`),
  KEY `fk_alcance_acreditacion_lab_04_13_03_anexo_convenio_04_13_0_idx` (`fk_id_anexo_convenio`)
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `anexo_convenio_04_13_01`
--

INSERT INTO `anexo_convenio_04_13_01` (`id_anexo_convenio`, `fk_id_peticion`, `fk_id_norma_referencia`, `responsable_anexo_convenio`, `cargo_anexo_convenio`, `fecha_anexo_convenio`, `cips_anexo_convenio`, `numero_anexo_convenio`, `escaneado_anexo_convenio`, `estado_anexo_convenio`, `fecha_creacion_anexo_convenio`) VALUES
(2, 26, 2, 'asdf', 'asdf', '2016-03-04', 'asdf', 'asdf', '', 1, '2016-03-11 17:41:16'),
(3, 28, 2, 'adsf', 'adsf', '2016-03-03', 'asdf', '234', '', 1, '2016-03-21 01:17:38'),
(4, 29, 1, 'adsf', 'adsf', '2016-03-03', '232', '2323', '', 1, '2016-03-30 10:50:35');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `aspectos_evaluados_04_08_03`
--

INSERT INTO `aspectos_evaluados_04_08_03` (`id_aspectos_evaluados`, `fk_id_eval_tecnica`, `nombre_aspectos_evaluados`, `educacion_aspectos_evaluados`, `formacion_aspectos_evaluados`, `experiencia_aspectos_evaluados`, `habilidades_aspectos_evaluados`) VALUES
(3, 6, 'lkjl', 'jklj', 'kljlkj', 'kljkl', 'jkl'),
(4, 7, 'adsf', 'ads', 'fa', 'sdfads', 'f');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `certificado_04_14_01`
--

INSERT INTO `certificado_04_14_01` (`id_certificado`, `fk_id_peticion`, `fecha_acreditacion_inicial_certificado`, `fecha_validez_certificado`, `texto1_certificado`, `escaneado_certificado`, `fecha_ultima_generacion_certificado`, `fecha_creacion_certificado`, `estado_certificado`) VALUES
(2, 26, '2016-03-11', '2016-03-04', 'adsfasdf', '', '2016-03-12 00:00:00', '2016-03-11 17:51:54', 'aprobado'),
(3, 28, '2016-03-04', '2016-03-11', 'afsdfads', '', '2016-03-04 00:00:00', '2016-03-21 01:26:57', 'aprobado'),
(4, 29, '2016-03-04', '2016-03-03', 'asefdsaf', '', '2016-03-05 00:00:00', '2016-03-30 09:08:58', 'aprobado');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `codigo_peticion_01_04_04`
--

INSERT INTO `codigo_peticion_01_04_04` (`id_codigo_peticion`, `fk_id_oec`, `codigo_peticion`, `correlativo_codigo_peticion`) VALUES
(1, 1, 'DTA-TRAM-001', 1),
(2, 1, 'DTA-TRAM-002', 2),
(3, 3, 'DTA-TRAM-003', 3),
(4, 2, 'DTA-TRAM-004', 4);

-- --------------------------------------------------------

--
-- Table structure for table `criterio_evaluacion_04_00_04`
--

CREATE TABLE IF NOT EXISTS `criterio_evaluacion_04_00_04` (
  `id_criterio_evaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'formularios',
  `nombre_criterio_evaluacion` varchar(145) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_criterio_evaluacion`),
  UNIQUE KEY `nombre_criterio_evaluacion_UNIQUE` (`nombre_criterio_evaluacion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `criterio_evaluacion_04_00_04`
--

INSERT INTO `criterio_evaluacion_04_00_04` (`id_criterio_evaluacion`, `nombre_criterio_evaluacion`) VALUES
(7, 'GUIA NB-ISO 66'),
(6, 'GUIA NB-ISO-IEC 65'),
(4, 'NB-ISO 15189:2004'),
(3, 'NB-ISO-IEC 17020'),
(8, 'NB-ISO-IEC 17021'),
(5, 'NB-ISO-IEC 17024'),
(1, 'NB-ISO-IEC 17025:2001'),
(2, 'NB-ISO-IEC 17025:2005');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `designacion_evaluador_04_10_01`
--

INSERT INTO `designacion_evaluador_04_10_01` (`id_designacion_evaluador`, `fk_id_peticion`, `por_dta_nombre_designacion_evaluador`, `por_dta_fecha_designacion_evaluador`, `fecha_creacion_designacion_evaluador`) VALUES
(2, 26, 'asdf', '2016-03-11', '2016-03-11 10:52:16'),
(3, 28, 'asdf', '2016-03-10', '2016-03-18 17:00:47'),
(4, 29, 'sdfa', '2016-03-09', '2016-03-27 14:13:34');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `detalle_equipos_04_02_01`
--

INSERT INTO `detalle_equipos_04_02_01` (`id_detalle_equipos`, `fk_id_peticion`, `estado_detalle_equipos`, `objetivo_detalle_equipos`, `nombre_detalle_equipos`, `norma_detalle_equipos`, `matriz_detalle_equipos`, `tipo_equipo_detalle_equipos`, `personal_responsable_detalle_equipos`, `codigo_equipo_detalle_equipos`, `numero_serie_detalle_equipos`, `nombre_fabricante_detalle_equipos`, `fecha_puesta_servicio_detalle_equipos`, `fecha_ultima_calibracion_detalle_equipos`, `organismo_realizo_calibracion_detalle_equipos`, `certificado_calibracion_detalle_equipos`, `fecha_proxima_calibracion_detalle_equipos`, `criterio_aceptacion_cert_detalle_equipos`, `procedimientos_uso_detalle_equipos`, `patrones_comprobaciones_detalle_equipos`, `fecha_creacion_detalle_equipos`) VALUES
(3, 26, 1, 'acreditacion_inicial', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdfads', '2016-03-25', '2016-03-25', 'adsf', 'asdfasd', '2016-03-10', 'lab-ibmetro', 'asdfasd', 'fasdfads', '2016-03-10 10:37:02'),
(4, 28, 1, 'acreditacion_inicial', 'asdf', 'asdf', 'asdf', 'asdf', 'adsf', 'asdf', 'asdf', 'asdf', '2016-03-17', '2016-03-17', 'ads', 'fasdf', '2016-03-11', 'lab-ibmetro', 'asdf', 'adsf', '2016-03-16 16:44:04'),
(5, 29, 1, 'acreditacion_inicial', 'asdf', 'adsf', 'a', 'sdfasd', 'asdf', 'asd', 'fa', 'asdf', '2016-03-24', '2016-03-24', 'adsf', 'asdfa', '2016-03-11', 'lab-ibmetro', 'asdf', 'asdf', '2016-03-21 20:52:55');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `equipo_eval_04_08_03`
--

INSERT INTO `equipo_eval_04_08_03` (`id_equipo_eval`, `fk_id_eval_tecnica`, `nombre_equipo_eval`, `disponibilidad_equipo_eval`, `programa_calibracion_equipo_eval`, `identificacion_individual_equipo_eval`, `registros_equipo_eval`, `verificaciones_intermedias_equipo_eval`, `proteccion_equipo_eval`) VALUES
(3, 6, 'kljlkj', 'lkjlk', 'jlkj', 'lkjkl', 'jklj', 'lkj', 'kljlk'),
(4, 7, 'adsf', 'asd', 'fasd', 'fasd', 'fa', 'sdf', 'asdf');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `equipo_peticion_01_07_01`
--

INSERT INTO `equipo_peticion_01_07_01` (`id_equipo_peticion`, `fk_id_peticion`, `fk_id_usuario`, `cantidad_horas_equipo_peticion`, `observaciones_equipo_peticion`, `estado_equipo_peticion`) VALUES
(15, 26, 9, 8, 'asdf', 'n'),
(17, 26, 5, 20, 'asda', 'n'),
(36, 28, 6, 16, 'adsf', 'n'),
(37, 28, 3, 8, 's', 'n'),
(38, 29, 1, 8, 'asdf', 'n'),
(39, 29, 2, 16, 'sdf', 'n');

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
  UNIQUE KEY `nombre_estado_UNIQUE` (`nombre_estado`,`fk_id_proceso`),
  KEY `fk_estado_proceso_estado1_idx` (`fk_id_estado_tipo`),
  KEY `fk_estado_proceso1_idx` (`fk_id_proceso`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=199 ;

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
(21, 3, 1, 'cotizacion-concesion-mantenimiento-aprobada', NULL),
(61, 1, 2, 'documentacion-aprobada-ra', NULL),
(62, 2, 2, 'equipo-evaluador-asignado', NULL),
(63, 2, 2, 'cotizacion-evaluacion-aprobada', NULL),
(64, 2, 2, 'documentacion-aprobada-equipo-evaluador', NULL),
(65, 2, 2, 'formulario-024-llenado', NULL),
(66, 2, 2, 'carga-formularios-adicionales-finalizada', NULL),
(67, 2, 2, 'archivos-plan-accion-cargados', NULL),
(68, 2, 2, 'formulario-050-llenado', NULL),
(69, 2, 2, 'documentacion-aprobada-comite-tecnico', NULL),
(70, 2, 2, 'formulario-026-llenado', NULL),
(71, 2, 2, 'certificado-acreditacion-generado', NULL),
(72, 2, 2, 'tramite-aprobado-consejo', NULL),
(73, 3, 2, 'cotizacion-concesion-mantenimiento-aprobada', NULL),
(74, 1, 3, 'documentacion-aprobada-ra', NULL),
(75, 2, 3, 'equipo-evaluador-asignado', NULL),
(76, 2, 3, 'cotizacion-evaluacion-aprobada', NULL),
(77, 2, 3, 'documentacion-aprobada-equipo-evaluador', NULL),
(78, 2, 3, 'formulario-024-llenado', NULL),
(79, 2, 3, 'carga-formularios-adicionales-finalizada', NULL),
(80, 2, 3, 'archivos-plan-accion-cargados', NULL),
(81, 2, 3, 'formulario-050-llenado', NULL),
(82, 2, 3, 'documentacion-aprobada-comite-tecnico', NULL),
(83, 2, 3, 'formulario-026-llenado', NULL),
(84, 2, 3, 'certificado-acreditacion-generado', NULL),
(85, 2, 3, 'tramite-aprobado-consejo', NULL),
(86, 3, 3, 'cotizacion-concesion-mantenimiento-aprobada', NULL),
(87, 1, 5, 'documentacion-aprobada-ra', NULL),
(88, 2, 5, 'equipo-evaluador-asignado', NULL),
(89, 2, 5, 'cotizacion-evaluacion-aprobada', NULL),
(90, 2, 5, 'documentacion-aprobada-equipo-evaluador', NULL),
(91, 2, 5, 'formulario-024-llenado', NULL),
(92, 2, 5, 'carga-formularios-adicionales-finalizada', NULL),
(93, 2, 5, 'archivos-plan-accion-cargados', NULL),
(94, 2, 5, 'formulario-050-llenado', NULL),
(95, 2, 5, 'documentacion-aprobada-comite-tecnico', NULL),
(96, 2, 5, 'formulario-026-llenado', NULL),
(97, 2, 5, 'certificado-acreditacion-generado', NULL),
(98, 2, 5, 'tramite-aprobado-consejo', NULL),
(99, 3, 5, 'cotizacion-concesion-mantenimiento-aprobada', NULL),
(165, 1, 4, 'cotizacion-apertura-expediente-aprobada', NULL),
(166, 2, 4, 'formularios-50s-llenados', NULL),
(167, 2, 4, 'carga-archivos-base-terminada', NULL),
(168, 2, 4, 'cotizacion-revision-documental-aprobada', NULL),
(169, 2, 4, 'documentacion-aprobada-ra', NULL),
(170, 2, 4, 'equipo-evaluador-asignado', NULL),
(171, 2, 4, 'cotizacion-evaluacion-aprobada', NULL),
(172, 2, 4, 'documentacion-aprobada-equipo-evaluador', NULL),
(173, 2, 4, 'formulario-024-llenado', NULL),
(174, 2, 4, 'carga-formularios-adicionales-finalizada', NULL),
(175, 2, 4, 'archivos-plan-accion-cargados', NULL),
(176, 2, 4, 'formulario-050-llenado', NULL),
(177, 2, 4, 'documentacion-aprobada-comite-tecnico', NULL),
(178, 2, 4, 'formulario-026-llenado', NULL),
(179, 2, 4, 'certificado-acreditacion-generado', NULL),
(180, 2, 4, 'tramite-aprobado-consejo', NULL),
(181, 3, 4, 'cotizacion-concesion-mantenimiento-aprobada', NULL),
(182, 1, 6, 'cotizacion-apertura-expediente-aprobada', NULL),
(183, 2, 6, 'formularios-50s-llenados', NULL),
(184, 2, 6, 'carga-archivos-base-terminada', NULL),
(185, 2, 6, 'cotizacion-revision-documental-aprobada', NULL),
(186, 2, 6, 'documentacion-aprobada-ra', NULL),
(187, 2, 6, 'equipo-evaluador-asignado', NULL),
(188, 2, 6, 'cotizacion-evaluacion-aprobada', NULL),
(189, 2, 6, 'documentacion-aprobada-equipo-evaluador', NULL),
(190, 2, 6, 'formulario-024-llenado', NULL),
(191, 2, 6, 'carga-formularios-adicionales-finalizada', NULL),
(192, 2, 6, 'archivos-plan-accion-cargados', NULL),
(193, 2, 6, 'formulario-050-llenado', NULL),
(194, 2, 6, 'documentacion-aprobada-comite-tecnico', NULL),
(195, 2, 6, 'formulario-026-llenado', NULL),
(196, 2, 6, 'certificado-acreditacion-generado', NULL),
(197, 2, 6, 'tramite-aprobado-consejo', NULL),
(198, 3, 6, 'cotizacion-concesion-mantenimiento-aprobada', NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `evaluacion_03_00_01`
--

INSERT INTO `evaluacion_03_00_01` (`id_evaluacion`, `fk_id_peticion`, `fk_id_oec_contacto_alta_direccion`, `fk_id_oec_contacto_gerente_tecnico`, `fk_id_oec_contacto_gerente_calidad`, `codigo_evaluacion`, `fecha_inicio_evaluacion`, `fecha_fin_evaluacion`, `objetivo_evaluacion`, `documento_referencia_evaluacion`, `identificacion_manual_evaluacion`, `fecha_reunion_inicial_evaluacion`, `hora_reunion_inicial_evaluacion`, `fecha_reunion_ee_evaluacion`, `hora_reunion_ee_evaluacion`, `fecha_reunion_final_evaluacion`, `hora_reunion_final_evaluacion`, `idioma_evaluacion`, `observacion_ra_oec_evaluacion`, `observacion_ra_ee_evaluacion`, `cumplimiento_etapas_evaluacion`, `recomendacion_ra_evaluacion`, `recomendacion_fecha_evaluacion`, `decision_da_evaluacion`, `decision_fecha_da_evaluacion`, `fecha_creacion_evaluacion`) VALUES
(5, 28, 5, 5, 6, 'g45t', '2016-03-16', '2016-03-16', 'retge', 'thetrhetr', 'erht', '2016-03-04', '07:30:00', '2016-03-11', '07:30:00', '2016-03-11', '07:00:00', 'es', 'ethr', 'erht', 'erht', 'hterht', NULL, 'er', NULL, '2016-03-17 17:13:12'),
(6, 28, 3, 6, 5, 'd32', '2016-02-25', '2016-03-09', 'wefd', 'qewdfqwer', 'adsfasd', '2016-02-25', '06:30:00', '2016-03-03', '06:00:00', '2016-02-25', '07:00:00', 'es', 'afds', 'asd', 'fads', 'fasdf', NULL, 'fasd', NULL, '2016-03-17 17:14:19');

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
  `hora_inicio_eval_tecnica` time DEFAULT NULL,
  `hora_fin_eval_tecnica` time DEFAULT NULL,
  `fecha_creacion_eval_tecnica` datetime DEFAULT NULL,
  PRIMARY KEY (`id_eval_tecnica`),
  KEY `fk_eval_tecnica_peticion1_idx` (`fk_id_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='				' AUTO_INCREMENT=8 ;

--
-- Dumping data for table `eval_tecnica_04_08_01`
--

INSERT INTO `eval_tecnica_04_08_01` (`id_eval_tecnica`, `fk_id_peticion`, `area_ensayo_eval_tecnica`, `metodo_ensayo_eval_tecnica`, `lista_signatarios_eval_tecnica`, `supervision_personal_eval_tecnica`, `autorizacion_eval_tecnica`, `adecuacion_eval_tecnica`, `seguimiento_eval_tecnica`, `separacion_areas_eval_tecnica`, `control_acceso_eval_tecnica`, `orden_limpieza_eval_tecnica`, `uso_metodos_apropiados_eval_tecnica`, `confirmacion_metodos_eval_tecnica`, `instructivo_uso_eval_tecnica`, `validacion_desviaciones_eval_tecnica`, `estimacion_incertidumbre_eval_tecnica`, `verificacion_calculos_eval_tecnica`, `procedimientos_calibracion_eval_tecnica`, `trazabilidad_calibracion_eval_tecnica`, `disponibilidad_material_eval_tecnica`, `certificados_calibracion_eval_tecnica`, `plan_muestreo_eval_tecnica`, `registros_muestreo_eval_tecnica`, `tecnicas_estadisticas_eval_tecnica`, `procedimiento_muestras_eval_tecnica`, `sistema_identificacion_eval_tecnica`, `adecuacion_instalaciones_eval_tecnica`, `procedimiento_aseguramiento_eval_tecnica`, `uso_regular_material_eval_tecnica`, `participacion_intercomparaciones_eval_tecnica`, `repeticion_ensayos_eval_tecnica`, `correlacion_eval_tecnica`, `registro_aseguramiento_eval_tecnica`, `formatos_apropiados_eval_tecnica`, `cumple_requisitos_norma_eval_tecnica`, `documentacion_opiniones_eval_tecnica`, `seguridad_transmision_eval_tecnica`, `confidencialidad_eval_tecnica`, `criterios_insertidumbre_eval_tecnica`, `criterios_trazabilidad_eval_tecnica`, `numero_requisito_eval_tecnica`, `comentario_requisito_eval_tecnica`, `conclusion_eval_tecnica`, `fecha_inicio_eval_tecnica`, `fecha_fin_eval_tecnica`, `hora_inicio_eval_tecnica`, `hora_fin_eval_tecnica`, `fecha_creacion_eval_tecnica`) VALUES
(2, 26, 'asd', 'fasdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asd', 'fasd', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', '', 'asdf', 'asdf', 'asdf', 'asdf', 'asd', 'fasd', 'asdf', 'a', 'asdf', 'asdf', 'asdf', 'asdfas', 'df', 'asdf', 'asdf', 'asd', 'asdf', 'fasdf', 'asdf', 'asdf', '', 'asdf', 'asdf', 'asdf', 'asdfasdf', '2016-03-24', '2016-03-24', '00:00:07', NULL, '2016-03-11 10:51:04'),
(6, 28, 'lkjhljkh', 'jkh', 'kjhkj', 'hkj', 'hkjh', 'kjhl', 'kjhl', 'kjhl', 'kljlk', 'jl', 'lkjk', 'jklj', 'klkl', 'lk', 'lkj', 'lkj', '', 'lkjl', 'kjkl', 'jlk', 'jklj', 'lj', 'lj', 'kjlk', 'lk', 'kjljkl', 'jlkj', 'lkjkl', 'jlkj', 'lkjl', 'kjlk', 'jlkj', 'lkj', 'lkjkl', 'jkl', 'jlkj', 'lkjkl', 'jkl', 'jlkj', 'lkj', 'kljlk', 'jhgk', '2016-03-04', '2016-03-03', '01:30:00', '02:00:00', '2016-03-19 02:06:01'),
(7, 29, 'ads', 'fadsf', 'adsf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'adsfa', 'dsf', 'jkhjk', 'hk', 'jh', 'jhkh', 'kjhj', 'kh', '', 'lkj', 'kljl', 'jkj', 'kljlk', 'jkl', 'jlkj', 'lkjlk', 'jkl', 'l', 'jklj', 'kljlk', 'jl', 'jlkj', 'lkjlk', 'jl', 'j', 'lkj', 'kljlkjk', 'lkj', 'ljl', 'kjlk', 'jlkj', 'lkj', 'ljl', 'adsfasdf', '2016-03-04', '2016-03-11', '01:30:00', '02:00:00', '2016-03-27 14:37:04');

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
-- Table structure for table `feriado_05_01_04`
--

CREATE TABLE IF NOT EXISTS `feriado_05_01_04` (
  `id_feriado` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `fecha_feriado` date NOT NULL,
  `descripcion_feriado` text NOT NULL,
  `tipo_feriado` set('feriado','civico','otro') NOT NULL,
  PRIMARY KEY (`id_feriado`),
  UNIQUE KEY `fecha_feriado_UNIQUE` (`fecha_feriado`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `feriado_05_01_04`
--

INSERT INTO `feriado_05_01_04` (`id_feriado`, `fecha_feriado`, `descripcion_feriado`, `tipo_feriado`) VALUES
(1, '2016-01-22', 'Feriado 1', 'feriado'),
(2, '2016-02-08', 'Carnaval', 'feriado');

-- --------------------------------------------------------

--
-- Table structure for table `gestion_05_01_04`
--

CREATE TABLE IF NOT EXISTS `gestion_05_01_04` (
  `id_gestion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `nombre_gestion` varchar(10) NOT NULL COMMENT 'display',
  `estado_gestion` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_gestion`),
  UNIQUE KEY `nombre_gestion_UNIQUE` (`nombre_gestion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `gestion_05_01_04`
--

INSERT INTO `gestion_05_01_04` (`id_gestion`, `nombre_gestion`, `estado_gestion`) VALUES
(1, '2016', 1),
(2, '2017', 0);

-- --------------------------------------------------------

--
-- Table structure for table `gestion_tipo_actividad_05_01_03`
--

CREATE TABLE IF NOT EXISTS `gestion_tipo_actividad_05_01_03` (
  `id_gestion_tipo_actividad` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `fk_id_gestion` int(11) NOT NULL,
  `fk_id_tipo_actividad` int(11) NOT NULL,
  `correlativo_gestion_tipo_actividad` int(11) NOT NULL,
  `prefijo_gestion_tipo_actividad` varchar(15) NOT NULL,
  PRIMARY KEY (`id_gestion_tipo_actividad`),
  KEY `fk_gestion_tipo_actividad_gestion_05_01_041_idx` (`fk_id_gestion`),
  KEY `fk_gestion_tipo_actividad_tipo_actividad_05_01_041_idx` (`fk_id_tipo_actividad`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `gestion_tipo_actividad_05_01_03`
--

INSERT INTO `gestion_tipo_actividad_05_01_03` (`id_gestion_tipo_actividad`, `fk_id_gestion`, `fk_id_tipo_actividad`, `correlativo_gestion_tipo_actividad`, `prefijo_gestion_tipo_actividad`) VALUES
(1, 1, 1, 12, 'DTA-REG'),
(2, 1, 2, 5, 'DTA-PRS'),
(3, 1, 3, 4, 'DTA-VT'),
(4, 1, 4, 3, 'DTA-CAP'),
(5, 1, 5, 3, 'DTA-DIF');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `informe_acred_04_13_01`
--

INSERT INTO `informe_acred_04_13_01` (`id_informe_acred`, `fk_id_peticion`, `observaciones_ra_oec_informe_acred`, `observaciones_ra_ee_informe_acred`, `cumplimiento_etapas_informe_acred`, `recomendacion_ra_informe_acred`, `recomendacion_fecha_informe_acred`, `toma_decision_da_informe_acred`, `toma_decision_da_fecha_informe_acred`, `fecha_creacion_informe_acred`) VALUES
(3, 26, 'asdf', 'asdf', '', '', '2016-03-23', '', '2016-03-24', '2016-03-11 17:06:15'),
(4, 29, 'asdf', 'adsf', '', '', '2016-03-22', '', '2016-03-29', '2016-03-27 23:04:39');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `informe_evaluacion_04_06_01`
--

INSERT INTO `informe_evaluacion_04_06_01` (`id_informe_evaluacion`, `fk_id_peticion`, `fecha_inicio_informe_evaluacion`, `fecha_fin_informe_evaluacion`, `lugar_informe_evaluacion`, `objetivo_informe_evaluacion`, `documentos_referencia_informe_evaluacion`, `instalaciones_visitadas_informe_evaluacion`, `profesionales_visitados_informe_evaluacion`, `equipo_evaluador_informe_evaluacion`, `alcance_acreditacion_informe_evaluacion`, `comentario_requisito_informe_evaluacion`, `comentario_evaluacion_informe_evaluacion`, `conclusion_informe_evaluacion`, `anexos_informe_evaluacion`, `fecha_emision_informe_evaluacion`, `lugar_emision_informe_evaluacion`, `fecha_creacion_informe_evaluacion`) VALUES
(2, 26, '2016-03-03', '2016-03-03', 'asdf', 'acreditacion_inicial', 'ads', 'adsf', 'asdf', 'asdf', 'adsf', 'adsf', 'asdf', 'asdf', 'asdf', '2016-03-04 00:00:00', 'asdf', '2016-03-11 10:49:42'),
(3, 28, '2016-03-01', '2016-03-01', 'fads', 'reacreditacion', 'ads', 'fasd', 'fasdf', 'asdfadsf', 'asdf', 'asdf', 'asdf', 'fasdfads', 'asd', '2016-03-04 00:00:00', 'fasdfadsf', '2016-03-19 00:00:00'),
(4, 29, '2016-03-02', '2016-03-02', 'asdf', 'reacreditacion', 'asdf', 'asdf', 'adsf', 'fadsf', 'adsf', 'adsf', 'asd', 'adsf', 'asdf', '2016-03-10 20:00:00', 'asdfa', '2016-03-27 14:26:31');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `info_ensayo_04_01_01`
--

INSERT INTO `info_ensayo_04_01_01` (`id_info_ensayo`, `fk_id_peticion`, `estado_info_ensayo`, `objetivo_info_ensayo`, `nombre_info_ensayo`, `norma_info_ensayo`, `matriz_info_ensayo`, `tipo_servicio_info_ensayo`, `categoria_info_ensayo`, `pesonal_autorizado_info_ensayo`, `rango_medicion_info_ensayo`, `incertidumbre_medicion_info_ensayo`, `lista_equipos_utilizados_info_ensayo`, `ad_calculo_incertidumbre_info_ensayo`, `ad_confirmacion_aplicacion_info_ensayo`, `ad_validacion_info_ensayo`, `ad_patrones_referencia_info_ensayo`, `ad_material_referencia_info_ensayo`, `ad_comparaciones_interlaboratorios_info_ensayo`, `fecha_creacion_info_ensayo`) VALUES
(4, 26, 1, 'reacreditacion', 'asdf', 'asdf', 'asdf', 'eil', 'ii', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'dfasdf', 'as', 'adsf', 'asdf', 'asdf', '2016-03-10 10:36:15'),
(5, 28, 1, 'acreditacion_inicial', 'asdf', 'asdf', 'asdf', 'eil', 'i', 'asdf', 'asd', 'fasdf', 'fasdf', 'asd', 'asdf', 'asdf', 'asdf', 'asd', 'asdf', '2016-03-16 16:34:46'),
(6, 29, 1, 'reacreditacion', 'asdf', 'asdf', 'ase', 'eil', 'ii', 'fasdf', 'adsf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asd', 'asdf', '2016-03-21 20:52:29');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1609 ;

--
-- Dumping data for table `log_sistema_03_00_03`
--

INSERT INTO `log_sistema_03_00_03` (`id_log_sistema`, `fk_id_usuario`, `fecha_hora_log_sistema`, `accion_log_sistema`, `tabla_log_sistema`, `ip_registro_log_sistema`) VALUES
(1, 1, '2015-12-30 23:52:00', 'create', 'oec_02_00_01', '192.168.100.102'),
(2, 1, '2015-12-30 23:52:00', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.102'),
(3, 1, '2015-12-30 23:52:00', 'create', 'oec_actividad_02_00_02', '192.168.100.102'),
(4, 1, '2015-12-30 23:52:00', 'create', 'oec_actividad_02_00_02', '192.168.100.102'),
(5, 1, '2015-12-30 23:52:00', 'create', 'oec_contacto_02_00_03', '192.168.100.102'),
(6, 1, '2015-12-30 23:52:15', 'create', 'codigo_peticion_01_04_04', '192.168.100.102'),
(9, 1, '2015-12-30 23:53:27', 'update', 'usuario_00_01_01', '192.168.100.102'),
(10, 1, '2015-12-30 23:53:27', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.102'),
(11, 1, '2015-12-30 23:53:27', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(12, 1, '2015-12-30 23:53:27', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(13, 1, '2015-12-30 23:53:27', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(14, 1, '2015-12-30 23:53:27', 'update', 'usuario_oec_00_01_02', '192.168.100.102'),
(17, 1, '2015-12-30 23:55:54', 'create', 'codigo_peticion_01_04_04', '192.168.100.102'),
(18, 1, '2015-12-30 23:56:04', 'create', 'peticion_01_04_01', '192.168.100.102'),
(19, 1, '2015-12-30 23:56:04', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(20, 1, '2015-12-30 23:56:04', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(21, 1, '2015-12-30 23:57:37', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(22, 1, '2015-12-30 23:57:45', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(23, 1, '2015-12-30 23:57:45', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(24, 1, '2015-12-30 23:57:45', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(25, 1, '2015-12-30 23:57:45', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(26, 1, '2015-12-30 23:58:35', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(27, 1, '2015-12-30 23:58:35', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(28, 1, '2015-12-30 23:59:04', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(29, 1, '2015-12-30 23:59:04', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(30, 1, '2015-12-30 23:59:28', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(31, 1, '2015-12-31 00:01:42', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(32, 1, '2015-12-31 00:02:09', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(33, 1, '2015-12-31 00:02:27', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(34, 1, '2015-12-31 00:02:37', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(35, 1, '2015-12-31 00:02:37', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(36, 1, '2015-12-31 00:02:37', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(37, 1, '2015-12-31 00:02:50', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(38, 1, '2015-12-31 00:02:50', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(39, 1, '2015-12-31 00:04:17', 'update', 'usuario_00_01_01', '192.168.100.102'),
(40, 1, '2015-12-31 00:04:17', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.102'),
(41, 1, '2015-12-31 00:04:17', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(42, 1, '2015-12-31 00:04:17', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(43, 1, '2015-12-31 00:04:17', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(44, 1, '2015-12-31 00:04:17', 'update', 'usuario_oec_00_01_02', '192.168.100.102'),
(45, 6, '2015-12-31 00:05:23', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(46, 6, '2015-12-31 00:05:30', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(47, 6, '2015-12-31 00:05:30', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(48, 1, '2015-12-31 00:08:02', 'create', 'equipo_peticion_01_07_01', '192.168.100.102'),
(49, 1, '2015-12-31 00:08:10', 'create', 'equipo_peticion_01_07_01', '192.168.100.102'),
(50, 1, '2015-12-31 00:09:27', 'delete', 'equipo_peticion_01_07_01', '192.168.100.102'),
(51, 1, '2015-12-31 00:09:31', 'delete', 'equipo_peticion_01_07_01', '192.168.100.102'),
(52, 1, '2015-12-31 00:09:38', 'create', 'equipo_peticion_01_07_01', '192.168.100.102'),
(53, 1, '2015-12-31 00:09:47', 'create', 'equipo_peticion_01_07_01', '192.168.100.102'),
(54, 1, '2015-12-31 00:09:58', 'create', 'equipo_peticion_01_07_01', '192.168.100.102'),
(55, 1, '2015-12-31 05:38:40', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(56, 1, '2015-12-31 05:38:40', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(57, 6, '2015-12-31 05:48:54', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(58, 6, '2015-12-31 05:48:54', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(59, 1, '2015-12-31 05:51:02', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(60, 1, '2015-12-31 05:51:02', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(61, 1, '2015-12-31 05:51:06', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(62, 1, '2015-12-31 05:51:06', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(63, 1, '2015-12-31 05:51:06', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(64, 1, '2015-12-31 05:51:06', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(65, 1, '2015-12-31 05:56:05', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(66, 1, '2015-12-31 05:56:05', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(67, 1, '2015-12-31 05:56:19', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(68, 1, '2015-12-31 05:56:19', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(69, 1, '2015-12-31 05:56:19', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(70, 1, '2015-12-31 05:57:06', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(71, 1, '2015-12-31 05:57:06', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(72, 1, '2015-12-31 06:13:45', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(73, 1, '2015-12-31 06:13:45', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(74, 1, '2015-12-31 06:16:31', 'create', 'usuario_00_01_01', '192.168.100.102'),
(75, 1, '2015-12-31 06:16:31', 'create', 'usuario_tipo_usuario_00_01_02', '192.168.100.102'),
(76, 1, '2015-12-31 06:16:31', 'create', 'usuario_proceso_00_01_02', '192.168.100.102'),
(77, 1, '2015-12-31 06:16:31', 'create', 'usuario_proceso_00_01_02', '192.168.100.102'),
(78, 1, '2015-12-31 06:16:31', 'create', 'usuario_proceso_00_01_02', '192.168.100.102'),
(79, 1, '2015-12-31 06:16:31', 'create', 'usuario_proceso_00_01_02', '192.168.100.102'),
(80, 1, '2015-12-31 06:16:31', 'create', 'usuario_proceso_00_01_02', '192.168.100.102'),
(81, 1, '2015-12-31 06:16:31', 'create', 'usuario_oec_00_01_02', '192.168.100.102'),
(82, 8, '2015-12-31 06:17:05', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(83, 8, '2015-12-31 06:17:05', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(84, 1, '2015-12-31 06:17:39', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(85, 1, '2015-12-31 06:17:51', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(86, 1, '2015-12-31 06:18:01', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(87, 8, '2015-12-31 06:27:10', 'create', 'info_ensayo_04_01_01', '192.168.100.102'),
(88, 8, '2015-12-31 06:30:21', 'create', 'detalle_equipos_04_02_01', '192.168.100.102'),
(89, 8, '2015-12-31 06:31:46', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(90, 8, '2015-12-31 06:31:56', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(91, 8, '2015-12-31 06:43:39', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(92, 1, '2015-12-31 07:01:29', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(93, 8, '2015-12-31 07:02:46', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(94, 8, '2015-12-31 07:02:51', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(95, 8, '2015-12-31 07:02:51', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(96, 8, '2015-12-31 07:02:51', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(97, 8, '2015-12-31 07:02:51', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(98, 1, '2015-12-31 07:19:35', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(99, 1, '2015-12-31 07:19:35', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(100, 8, '2015-12-31 07:25:58', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(101, 8, '2015-12-31 07:25:59', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(102, 1, '2015-12-31 07:26:18', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(103, 1, '2015-12-31 07:26:29', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(104, 1, '2015-12-31 07:27:25', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(105, 1, '2015-12-31 07:27:30', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(106, 1, '2015-12-31 07:36:43', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(107, 1, '2015-12-31 07:37:08', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(108, 1, '2015-12-31 07:37:18', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(109, 1, '2015-12-31 07:37:18', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(110, 1, '2015-12-31 07:53:09', 'update', 'equipo_peticion_01_07_01', '192.168.100.102'),
(111, 1, '2015-12-31 07:53:23', 'create', 'equipo_peticion_01_07_01', '192.168.100.102'),
(112, 1, '2015-12-31 07:53:54', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(113, 1, '2015-12-31 07:53:54', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(114, 8, '2015-12-31 07:56:14', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(115, 8, '2015-12-31 07:56:30', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(116, 8, '2015-12-31 07:56:34', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(117, 8, '2015-12-31 07:56:34', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(118, 8, '2015-12-31 07:56:34', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(119, 8, '2015-12-31 07:56:34', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(120, 1, '2015-12-31 08:19:23', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(121, 1, '2015-12-31 08:19:23', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(122, 8, '2015-12-31 08:21:42', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(123, 8, '2015-12-31 08:21:42', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(124, 1, '2015-12-31 08:22:04', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(125, 1, '2015-12-31 08:22:09', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(126, 1, '2015-12-31 08:38:39', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(127, 1, '2015-12-31 08:38:49', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(128, 1, '2015-12-31 08:38:49', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(129, 2, '2015-12-31 09:13:14', 'update', 'usuario_00_01_01', '192.168.100.102'),
(130, 2, '2015-12-31 09:13:14', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.102'),
(131, 2, '2015-12-31 09:13:14', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(132, 2, '2015-12-31 09:13:14', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(133, 2, '2015-12-31 09:13:14', 'update', 'usuario_proceso_00_01_02', '192.168.100.102'),
(134, 2, '2015-12-31 09:13:14', 'update', 'usuario_oec_00_01_02', '192.168.100.102'),
(135, 2, '2015-12-31 10:19:35', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(136, 2, '2015-12-31 10:20:09', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(137, 2, '2015-12-31 10:20:10', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(138, 2, '2015-12-31 10:28:38', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(139, 1, '2015-12-31 15:05:54', 'update', 'peticion_01_04_01', '192.168.100.102'),
(140, 1, '2015-12-31 15:05:54', 'update', 'detalle_equipos_04_02_01', '192.168.100.102'),
(141, 1, '2016-01-04 16:33:51', 'create', 'informe_evaluacion_04_06_01', '192.168.100.101'),
(142, 1, '2016-01-04 16:44:22', 'create', 'informe_evaluacion_04_06_01', '192.168.100.101'),
(143, 1, '2016-01-04 16:51:02', 'delete', 'informe_evaluacion_04_06_01', '192.168.100.101'),
(144, 1, '2016-01-04 16:51:28', 'create', 'no_conformidad_04_07_01', '192.168.100.101'),
(145, 5, '2016-01-04 17:59:15', 'update', 'usuario_00_01_01', '192.168.100.101'),
(146, 5, '2016-01-04 17:59:15', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.101'),
(147, 5, '2016-01-04 17:59:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(148, 5, '2016-01-04 17:59:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(149, 5, '2016-01-04 17:59:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(150, 5, '2016-01-04 17:59:15', 'update', 'usuario_oec_00_01_02', '192.168.100.101'),
(158, 5, '2016-01-04 18:36:34', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(159, 3, '2016-01-04 18:43:08', 'update', 'usuario_00_01_01', '192.168.100.101'),
(160, 3, '2016-01-04 18:43:08', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.101'),
(161, 3, '2016-01-04 18:43:08', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(162, 3, '2016-01-04 18:43:08', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(163, 3, '2016-01-04 18:43:08', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(164, 3, '2016-01-04 18:43:08', 'update', 'usuario_oec_00_01_02', '192.168.100.101'),
(165, 3, '2016-01-04 18:43:26', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(166, 3, '2016-01-04 18:44:36', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(167, 3, '2016-01-04 18:45:00', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(168, 7, '2016-01-04 18:51:07', 'update', 'usuario_00_01_01', '192.168.100.101'),
(169, 7, '2016-01-04 18:51:07', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.101'),
(170, 7, '2016-01-04 18:51:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(171, 7, '2016-01-04 18:51:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(172, 7, '2016-01-04 18:51:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(173, 7, '2016-01-04 18:51:07', 'update', 'usuario_oec_00_01_02', '192.168.100.101'),
(174, 7, '2016-01-04 18:52:47', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(175, 7, '2016-01-04 20:03:30', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(176, 7, '2016-01-04 20:05:56', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(177, 7, '2016-01-04 20:28:14', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(178, 7, '2016-01-04 20:28:29', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(179, 7, '2016-01-04 20:33:56', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(180, 7, '2016-01-04 21:27:58', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(181, 7, '2016-01-04 21:28:09', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(182, 7, '2016-01-04 21:28:09', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(183, 7, '2016-01-04 21:28:09', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(184, 7, '2016-01-04 21:28:09', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(185, 1, '2016-01-05 07:00:06', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(186, 1, '2016-01-05 08:17:33', 'create', 'eval_tecnica_04_08_01', '192.168.100.101'),
(187, 1, '2016-01-05 08:17:41', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(188, 1, '2016-01-05 08:17:53', 'create', 'designacion_evaluador_04_10_01', '192.168.100.101'),
(189, 1, '2016-01-05 08:40:10', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(190, 1, '2016-01-05 08:40:31', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(191, 1, '2016-01-05 08:40:47', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(192, 1, '2016-01-05 08:41:06', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(193, 1, '2016-01-05 08:41:22', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(194, 1, '2016-01-05 08:41:38', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(195, 1, '2016-01-05 08:41:57', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(196, 1, '2016-01-05 08:42:13', 'create', 'criterio_evaluacion_04_00_04', '192.168.100.101'),
(197, 1, '2016-01-05 08:42:37', 'create', 'prueba_participacion_04_09_01', '192.168.100.101'),
(198, 1, '2016-01-05 09:05:24', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(199, 1, '2016-01-05 09:05:47', 'create', 'supervision_evaluador_04_11_01', '192.168.100.101'),
(200, 1, '2016-01-05 09:20:27', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(201, 1, '2016-01-05 09:20:37', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(202, 1, '2016-01-05 09:20:37', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(203, 1, '2016-01-05 10:51:52', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(204, 1, '2016-01-05 10:56:41', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(205, 1, '2016-01-05 11:01:20', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(206, 1, '2016-01-05 11:02:11', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(207, 1, '2016-01-05 11:05:05', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(208, 1, '2016-01-05 11:05:15', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(209, 1, '2016-01-05 11:35:52', 'create', 'informe_acred_04_13_01', '192.168.100.101'),
(210, 1, '2016-01-05 12:22:00', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(211, 1, '2016-01-05 12:22:10', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(212, 1, '2016-01-05 12:22:10', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(213, 1, '2016-01-05 12:22:10', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(214, 1, '2016-01-05 13:37:02', 'update', 'norma_referencia_02_00_04', '192.168.100.101'),
(215, 1, '2016-01-05 13:41:13', 'update', 'norma_referencia_02_00_04', '192.168.100.101'),
(216, 1, '2016-01-05 15:06:23', 'update', 'info_ensayo_04_01_01', '192.168.1.4'),
(217, 1, '2016-01-05 15:55:13', 'update', 'peticion_accion_01_03_01', '192.168.1.4'),
(218, 1, '2016-01-05 15:56:35', 'update', 'peticion_accion_01_03_01', '192.168.1.4'),
(219, 1, '2016-01-05 15:57:27', 'create', 'peticion_estado_01_04_03', '192.168.1.4'),
(220, 1, '2016-01-05 15:57:41', 'create', 'peticion_accion_01_03_01', '192.168.1.4'),
(221, 1, '2016-01-05 15:58:28', 'create', 'anexo_convenio_04_13_01', '192.168.1.4'),
(222, 1, '2016-01-05 15:58:28', 'create', 'alcance_acreditacion_insp_04_13_03', '192.168.1.4'),
(223, 1, '2016-01-05 15:58:28', 'create', 'personal_autorizado_04_13_03', '192.168.1.4'),
(224, 1, '2016-01-05 16:04:36', 'create', 'peticion_estado_01_04_03', '192.168.1.4'),
(225, 1, '2016-01-05 16:04:52', 'create', 'peticion_accion_01_03_01', '192.168.1.4'),
(226, 1, '2016-01-05 16:10:24', 'create', 'peticion_estado_01_04_03', '192.168.1.4'),
(227, 1, '2016-01-05 16:10:34', 'create', 'peticion_accion_01_03_01', '192.168.1.4'),
(228, 1, '2016-01-05 16:10:34', 'create', 'peticion_accion_01_03_01', '192.168.1.4'),
(229, 1, '2016-01-07 09:54:32', 'update', 'peticion_01_04_01', '192.168.100.101'),
(230, 1, '2016-01-07 09:54:32', 'update', 'detalle_equipos_04_02_01', '192.168.100.101'),
(231, 1, '2016-01-07 09:55:05', 'update', 'peticion_01_04_01', '192.168.100.101'),
(232, 1, '2016-01-07 09:55:05', 'update', 'detalle_equipos_04_02_01', '192.168.100.101'),
(233, 1, '2016-01-07 09:55:14', 'update', 'peticion_01_04_01', '192.168.100.101'),
(234, 1, '2016-01-07 09:55:14', 'update', 'detalle_equipos_04_02_01', '192.168.100.101'),
(235, 1, '2016-01-07 09:55:16', 'update', 'peticion_01_04_01', '192.168.100.101'),
(236, 1, '2016-01-07 09:55:16', 'update', 'detalle_equipos_04_02_01', '192.168.100.101'),
(237, 1, '2016-01-07 18:38:09', 'update', 'peticion_01_04_01', '192.168.100.101'),
(238, 1, '2016-01-07 18:38:09', 'update', 'detalle_equipos_04_02_01', '192.168.100.101'),
(239, 1, '2016-01-07 18:38:13', 'update', 'peticion_01_04_01', '192.168.100.101'),
(240, 1, '2016-01-07 18:38:13', 'update', 'detalle_equipos_04_02_01', '192.168.100.101'),
(241, 1, '2016-01-08 09:44:09', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(242, 1, '2016-01-08 09:46:57', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(243, 1, '2016-01-08 10:07:03', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(244, 1, '2016-01-08 10:07:03', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(245, 1, '2016-01-08 10:10:00', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(246, 1, '2016-01-08 10:10:13', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(247, 1, '2016-01-08 12:56:16', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(248, 1, '2016-01-08 12:56:33', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(249, 1, '2016-01-08 13:45:59', 'create', 'certificado_04_14_01', '192.168.100.101'),
(250, 1, '2016-01-08 13:46:32', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(251, 1, '2016-01-08 13:46:42', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(252, 1, '2016-01-08 13:46:42', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(253, 6, '2016-01-09 16:00:28', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(254, 6, '2016-01-09 17:47:22', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(255, 6, '2016-01-09 17:47:52', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(256, 6, '2016-01-09 18:11:08', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(257, 1, '2016-01-09 19:14:44', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(258, 1, '2016-01-09 19:20:13', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(259, 6, '2016-01-09 19:46:35', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(260, 6, '2016-01-09 19:48:13', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(261, 6, '2016-01-09 19:49:59', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(262, 6, '2016-01-09 20:23:43', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(263, 6, '2016-01-09 20:24:46', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(264, 6, '2016-01-09 20:29:57', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(265, 6, '2016-01-09 20:33:21', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(266, 6, '2016-01-09 20:39:20', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(267, 6, '2016-01-09 20:48:54', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(268, 6, '2016-01-09 20:49:14', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(269, 6, '2016-01-09 20:53:40', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(270, 6, '2016-01-09 20:54:00', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(271, 1, '2016-01-09 21:15:44', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(272, 1, '2016-01-09 21:15:50', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(273, 1, '2016-01-09 21:15:55', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(274, 1, '2016-01-09 21:15:55', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(275, 1, '2016-01-09 21:15:55', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(276, 1, '2016-01-09 21:15:55', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(277, 1, '2016-01-09 21:20:41', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(278, 1, '2016-01-09 21:20:41', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(279, 1, '2016-01-09 21:21:16', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(280, 1, '2016-01-09 21:21:16', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(281, 1, '2016-01-09 21:21:38', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(282, 1, '2016-01-09 21:22:30', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(283, 1, '2016-01-09 21:22:57', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(284, 1, '2016-01-09 21:23:37', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(285, 1, '2016-01-11 05:52:52', 'update', 'usuario_00_01_01', '192.168.100.101'),
(286, 1, '2016-01-11 05:52:52', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.101'),
(287, 1, '2016-01-11 05:52:52', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(288, 1, '2016-01-11 05:52:52', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(289, 1, '2016-01-11 05:52:52', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(290, 1, '2016-01-11 05:52:52', 'update', 'usuario_oec_00_01_02', '192.168.100.101'),
(291, 1, '2016-01-11 05:56:27', 'create', 'peticion_01_04_01', '192.168.100.101'),
(292, 1, '2016-01-11 05:56:27', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(293, 1, '2016-01-11 05:56:39', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(294, 1, '2016-01-11 06:01:46', 'delete', 'peticion_01_04_01', '192.168.100.101'),
(295, 1, '2016-01-11 06:02:07', 'create', 'peticion_01_04_01', '192.168.100.101'),
(296, 1, '2016-01-11 06:02:07', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(297, 1, '2016-01-11 06:02:23', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(298, 1, '2016-01-11 06:02:50', 'update', 'oec_02_00_01', '192.168.100.101'),
(299, 1, '2016-01-11 06:02:50', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.101'),
(300, 1, '2016-01-11 06:02:50', 'update', 'oec_actividad_02_00_02', '192.168.100.101'),
(301, 1, '2016-01-11 06:02:50', 'update', 'oec_actividad_02_00_02', '192.168.100.101'),
(302, 1, '2016-01-11 06:02:50', 'update', 'oec_contacto_02_00_03', '192.168.100.101'),
(303, 1, '2016-01-11 06:04:27', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(304, 1, '2016-01-11 06:04:36', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(305, 1, '2016-01-11 06:04:36', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(306, 1, '2016-01-11 06:04:36', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(307, 1, '2016-01-11 06:04:36', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(308, 1, '2016-01-11 06:08:42', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(309, 1, '2016-01-11 06:08:42', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(310, 1, '2016-01-11 06:08:56', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(311, 1, '2016-01-11 06:08:56', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(312, 1, '2016-01-11 06:09:44', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(313, 1, '2016-01-11 06:10:44', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(314, 1, '2016-01-11 06:10:58', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(315, 1, '2016-01-11 06:11:36', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(316, 1, '2016-01-11 06:11:46', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(317, 1, '2016-01-11 06:11:46', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(318, 1, '2016-01-11 06:11:46', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(319, 1, '2016-01-11 06:11:59', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(320, 1, '2016-01-11 06:11:59', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(321, 6, '2016-01-11 06:12:44', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(322, 6, '2016-01-11 06:13:48', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(323, 6, '2016-01-11 06:14:05', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(324, 1, '2016-01-11 06:14:24', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(325, 1, '2016-01-11 06:14:24', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(326, 1, '2016-01-11 06:14:29', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(327, 1, '2016-01-11 06:14:29', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(328, 1, '2016-01-11 06:14:29', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(329, 1, '2016-01-11 06:15:46', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(330, 1, '2016-01-11 06:15:47', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(331, 8, '2016-01-11 06:16:30', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(332, 8, '2016-01-11 06:16:30', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(333, 1, '2016-01-11 06:16:52', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(334, 1, '2016-01-11 06:17:28', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(335, 1, '2016-01-11 06:17:37', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(336, 1, '2016-01-11 06:18:26', 'create', 'info_ensayo_04_01_01', '192.168.100.101'),
(337, 1, '2016-01-11 06:18:53', 'create', 'detalle_equipos_04_02_01', '192.168.100.101'),
(338, 1, '2016-01-11 06:19:05', 'update', 'info_ensayo_04_01_01', '192.168.100.101'),
(339, 1, '2016-01-11 06:19:20', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(340, 1, '2016-01-11 06:19:29', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(341, 1, '2016-01-11 06:19:47', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(342, 1, '2016-01-11 06:20:26', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(343, 1, '2016-01-11 06:20:38', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(344, 1, '2016-01-11 06:20:53', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(345, 1, '2016-01-11 06:20:57', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(346, 1, '2016-01-11 06:20:57', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(347, 1, '2016-01-11 06:20:57', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(348, 1, '2016-01-11 06:21:04', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(349, 1, '2016-01-11 06:21:04', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(350, 8, '2016-01-11 06:22:56', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(351, 8, '2016-01-11 06:22:57', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(352, 1, '2016-01-11 06:23:24', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(353, 1, '2016-01-11 06:24:48', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(354, 1, '2016-01-11 06:24:53', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(355, 1, '2016-01-11 06:25:24', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(356, 1, '2016-01-11 06:25:34', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(357, 1, '2016-01-11 06:25:34', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(358, 1, '2016-01-11 06:40:56', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(359, 8, '2016-01-11 06:42:22', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(360, 8, '2016-01-11 06:42:26', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(361, 8, '2016-01-11 06:42:26', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(362, 8, '2016-01-11 06:42:26', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(363, 1, '2016-01-11 06:42:56', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(364, 1, '2016-01-11 06:42:56', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(365, 8, '2016-01-11 06:43:14', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(366, 8, '2016-01-11 06:43:14', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(367, 1, '2016-01-11 06:46:31', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(368, 1, '2016-01-11 06:46:40', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(369, 1, '2016-01-11 06:46:40', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(370, 1, '2016-01-11 06:52:38', 'create', 'usuario_00_01_01', '192.168.100.101'),
(371, 1, '2016-01-11 06:52:38', 'create', 'usuario_tipo_usuario_00_01_02', '192.168.100.101'),
(372, 1, '2016-01-11 06:52:38', 'create', 'usuario_proceso_00_01_02', '192.168.100.101'),
(373, 1, '2016-01-11 06:52:38', 'create', 'usuario_proceso_00_01_02', '192.168.100.101'),
(374, 1, '2016-01-11 06:52:38', 'create', 'usuario_proceso_00_01_02', '192.168.100.101'),
(375, 1, '2016-01-11 06:52:38', 'create', 'usuario_proceso_00_01_02', '192.168.100.101'),
(376, 1, '2016-01-11 06:52:38', 'create', 'usuario_proceso_00_01_02', '192.168.100.101'),
(377, 1, '2016-01-11 06:52:38', 'create', 'usuario_oec_00_01_02', '192.168.100.101'),
(378, 9, '2016-01-11 07:27:39', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.101'),
(379, 9, '2016-01-11 07:28:00', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(380, 8, '2016-01-11 07:28:53', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(381, 8, '2016-01-11 07:29:10', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(382, 8, '2016-01-11 07:29:20', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(383, 1, '2016-01-11 07:32:49', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(384, 1, '2016-01-11 07:32:59', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(385, 1, '2016-01-11 07:32:59', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(386, 1, '2016-01-11 07:32:59', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(387, 1, '2016-01-11 07:32:59', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(388, 1, '2016-01-11 13:30:35', 'update', 'peticion_01_04_01', '192.168.65.1'),
(389, 1, '2016-01-11 13:30:35', 'update', 'detalle_equipos_04_02_01', '192.168.65.1'),
(392, 1, '2016-01-11 13:32:11', 'create', 'peticion_archivo_01_04_01', '192.168.65.1'),
(393, 1, '2016-01-11 13:32:35', 'create', 'peticion_archivo_01_04_01', '192.168.65.1'),
(394, 1, '2016-01-11 13:53:24', 'create', 'peticion_archivo_01_04_01', '192.168.65.1'),
(395, 1, '2016-01-25 08:48:24', 'create', 'usuario_00_01_01', '192.168.100.100'),
(396, 1, '2016-01-25 08:48:24', 'create', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(397, 1, '2016-01-25 08:48:24', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(398, 1, '2016-01-25 08:48:24', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(399, 1, '2016-01-25 08:48:24', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(400, 1, '2016-01-25 08:48:24', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(401, 1, '2016-01-25 08:48:24', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(402, 1, '2016-01-25 08:48:24', 'create', 'usuario_oec_00_01_02', '192.168.100.100'),
(403, 1, '2016-01-25 08:51:18', 'create', 'usuario_00_01_01', '192.168.100.100'),
(404, 1, '2016-01-25 08:51:18', 'create', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(405, 1, '2016-01-25 08:51:18', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(406, 1, '2016-01-25 08:51:18', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(407, 1, '2016-01-25 08:51:18', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(408, 1, '2016-01-25 08:51:18', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(409, 1, '2016-01-25 08:51:18', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(410, 1, '2016-01-25 08:51:18', 'create', 'usuario_oec_00_01_02', '192.168.100.100'),
(411, 1, '2016-01-25 09:12:52', 'create', 'oec_02_00_01', '192.168.100.100'),
(412, 1, '2016-01-25 09:12:52', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(413, 1, '2016-01-25 09:12:52', 'create', 'oec_actividad_02_00_02', '192.168.100.100'),
(414, 1, '2016-01-25 09:12:52', 'create', 'oec_contacto_02_00_03', '192.168.100.100'),
(415, 1, '2016-01-25 11:58:47', 'create', 'feriado_05_01_04', '192.168.100.100'),
(416, 1, '2016-01-25 12:00:54', 'create', 'feriado_05_01_04', '192.168.100.100'),
(417, 1, '2016-01-25 12:31:17', 'create', 'vacacion_05_01_04', '192.168.100.100'),
(418, 1, '2016-01-26 14:49:30', 'create', 'vacacion_05_01_04', '192.168.100.100'),
(419, 1, '2016-01-26 14:50:10', 'create', 'vacacion_05_01_04', '192.168.100.100'),
(420, 1, '2016-01-27 02:05:19', 'create', 'actividad_05_01_01', '192.168.100.100'),
(421, 1, '2016-01-27 02:05:19', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(422, 1, '2016-01-27 02:05:19', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(423, 1, '2016-01-27 02:25:23', 'create', 'actividad_05_01_01', '192.168.100.100'),
(424, 1, '2016-01-27 09:31:25', 'create', 'actividad_05_01_01', '192.168.100.100'),
(425, 1, '2016-01-27 09:31:25', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(426, 1, '2016-01-27 19:35:11', 'create', 'actividad_05_01_01', '192.168.100.100'),
(427, 1, '2016-01-27 19:35:11', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(428, 1, '2016-01-27 19:39:03', 'create', 'actividad_05_01_01', '192.168.100.100'),
(429, 1, '2016-01-27 19:39:03', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(430, 1, '2016-01-27 19:39:34', 'create', 'actividad_05_01_01', '192.168.100.100'),
(431, 1, '2016-01-27 19:39:34', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(432, 1, '2016-01-27 19:40:42', 'create', 'vacacion_05_01_04', '192.168.100.100'),
(433, 1, '2016-01-27 19:41:16', 'create', 'actividad_05_01_01', '192.168.100.100'),
(434, 1, '2016-01-27 19:41:16', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(435, 1, '2016-01-27 19:45:11', 'create', 'actividad_05_01_01', '192.168.100.100'),
(436, 1, '2016-01-27 19:45:11', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(437, 1, '2016-01-27 19:50:25', 'create', 'actividad_05_01_01', '192.168.100.100'),
(438, 1, '2016-01-27 19:50:25', 'create', 'actividad_usuario_05_01_03', '192.168.100.100'),
(439, 1, '2016-01-27 21:11:43', 'create', 'actividad_05_01_01', '192.168.100.105'),
(440, 1, '2016-01-27 21:11:43', 'create', 'actividad_usuario_05_01_03', '192.168.100.105'),
(441, 1, '2016-01-27 21:12:00', 'update', 'actividad_05_01_01', '192.168.100.105'),
(442, 1, '2016-01-28 08:29:18', 'create', 'actividad_05_01_01', '192.168.100.100'),
(443, 1, '2016-01-28 08:32:34', 'create', 'actividad_05_01_01', '192.168.100.100'),
(444, 1, '2016-01-28 08:45:02', 'create', 'actividad_05_01_01', '192.168.100.100'),
(445, 1, '2016-01-28 08:55:46', 'create', 'actividad_05_01_01', '192.168.100.100'),
(446, 1, '2016-01-28 11:35:28', 'delete', 'vacacion_05_01_04', '192.168.100.100'),
(447, 1, '2016-01-28 11:35:32', 'delete', 'vacacion_05_01_04', '192.168.100.100'),
(448, 1, '2016-01-28 11:35:34', 'delete', 'vacacion_05_01_04', '192.168.100.100'),
(449, 1, '2016-01-28 11:36:46', 'create', 'actividad_05_01_01', '192.168.100.100'),
(450, 1, '2016-01-28 11:42:19', 'create', 'actividad_05_01_01', '192.168.100.100'),
(451, 1, '2016-01-28 14:25:35', 'create', 'gestion_05_01_04', '192.168.100.100'),
(452, 1, '2016-01-31 09:38:22', 'update', 'feriado_05_01_04', '192.168.100.100'),
(453, 1, '2016-01-31 09:38:45', 'update', 'feriado_05_01_04', '192.168.100.100'),
(454, 1, '2016-02-01 17:54:31', 'update', 'usuario_00_01_01', '192.168.100.100'),
(455, 1, '2016-02-01 17:54:31', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(456, 1, '2016-02-01 17:54:31', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(457, 1, '2016-02-01 17:54:31', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(458, 1, '2016-02-01 17:54:31', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(459, 1, '2016-02-01 17:54:31', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(460, 1, '2016-02-01 17:54:31', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(461, 1, '2016-02-01 17:54:31', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(462, 1, '2016-02-01 18:03:13', 'update', 'usuario_00_01_01', '192.168.100.100'),
(463, 1, '2016-02-01 18:03:13', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(464, 1, '2016-02-01 18:03:13', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(465, 1, '2016-02-01 18:03:13', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(466, 1, '2016-02-01 18:03:13', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(467, 1, '2016-02-01 18:03:13', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(468, 1, '2016-02-01 18:03:13', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(469, 1, '2016-02-01 18:03:13', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(470, 1, '2016-02-01 19:05:56', 'create', 'oec_02_00_01', '192.168.100.100'),
(471, 1, '2016-02-01 19:05:56', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(472, 1, '2016-02-01 19:05:56', 'create', 'oec_actividad_02_00_02', '192.168.100.100'),
(473, 1, '2016-02-01 19:05:56', 'create', 'oec_contacto_02_00_03', '192.168.100.100'),
(474, 1, '2016-02-01 19:06:15', 'create', 'codigo_peticion_01_04_04', '192.168.100.100'),
(475, 1, '2016-02-01 19:06:19', 'create', 'peticion_01_04_01', '192.168.100.100'),
(476, 1, '2016-02-01 19:06:19', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(477, 1, '2016-02-01 19:06:19', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(478, 1, '2016-02-01 19:06:41', 'update', 'usuario_00_01_01', '192.168.100.100'),
(479, 1, '2016-02-01 19:06:41', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(480, 1, '2016-02-01 19:06:41', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(481, 1, '2016-02-01 19:06:41', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(482, 1, '2016-02-01 19:06:41', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(483, 1, '2016-02-01 19:06:41', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(484, 1, '2016-02-01 19:06:41', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(485, 1, '2016-02-01 20:22:15', 'update', 'peticion_01_04_01', '192.168.100.100'),
(486, 1, '2016-02-01 20:22:15', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(487, 1, '2016-02-10 16:39:57', 'update', 'usuario_00_01_01', '192.168.100.101'),
(488, 1, '2016-02-10 16:39:57', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.101'),
(489, 1, '2016-02-10 16:39:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(490, 1, '2016-02-10 16:39:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(491, 1, '2016-02-10 16:39:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.101'),
(492, 1, '2016-02-10 16:39:57', 'update', 'usuario_oec_00_01_02', '192.168.100.101'),
(493, 1, '2016-02-10 16:39:57', 'update', 'usuario_oec_00_01_02', '192.168.100.101'),
(494, 1, '2016-02-18 19:08:37', 'update', 'usuario_00_01_01', '192.168.100.100'),
(495, 1, '2016-02-18 19:08:37', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(496, 1, '2016-02-18 19:08:37', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(497, 1, '2016-02-18 19:08:37', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(498, 1, '2016-02-18 19:08:37', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(499, 1, '2016-02-18 19:08:37', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(500, 1, '2016-02-18 19:08:37', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(501, 1, '2016-02-18 19:08:45', 'update', 'usuario_00_01_01', '192.168.100.100'),
(502, 1, '2016-02-18 19:08:45', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(503, 1, '2016-02-18 19:08:45', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(504, 1, '2016-02-18 19:08:45', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(505, 1, '2016-02-18 19:08:45', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(506, 1, '2016-02-18 19:08:45', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(507, 1, '2016-02-18 19:08:45', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(508, 1, '2016-02-18 19:08:57', 'update', 'usuario_00_01_01', '192.168.100.100'),
(509, 1, '2016-02-18 19:08:57', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(510, 1, '2016-02-18 19:08:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(511, 1, '2016-02-18 19:08:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(512, 1, '2016-02-18 19:08:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(513, 1, '2016-02-18 19:08:57', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(514, 1, '2016-02-18 19:08:57', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(515, 1, '2016-02-18 19:09:39', 'update', 'usuario_00_01_01', '192.168.100.100'),
(516, 1, '2016-02-18 19:09:39', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(517, 1, '2016-02-18 19:09:39', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(518, 1, '2016-02-18 19:09:39', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(519, 1, '2016-02-18 19:09:39', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(520, 1, '2016-02-18 19:09:39', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(521, 1, '2016-02-18 19:09:39', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(523, 1, '2016-02-18 19:15:53', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(524, 1, '2016-02-18 19:16:36', 'update', 'usuario_00_01_01', '192.168.100.103'),
(525, 1, '2016-02-18 19:16:36', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.103'),
(526, 1, '2016-02-18 19:16:36', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(527, 1, '2016-02-18 19:16:36', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(528, 1, '2016-02-18 19:16:36', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(529, 1, '2016-02-18 19:16:36', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(530, 1, '2016-02-18 19:16:36', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(531, 1, '2016-02-18 19:17:15', 'update', 'usuario_00_01_01', '192.168.100.103'),
(532, 1, '2016-02-18 19:17:15', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.103'),
(533, 1, '2016-02-18 19:17:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(534, 1, '2016-02-18 19:17:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(535, 1, '2016-02-18 19:17:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(536, 1, '2016-02-18 19:17:15', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(537, 1, '2016-02-18 19:17:15', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(538, 1, '2016-02-18 19:20:51', 'update', 'usuario_00_01_01', '192.168.100.103'),
(539, 1, '2016-02-18 19:20:51', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.103'),
(540, 1, '2016-02-18 19:20:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(541, 1, '2016-02-18 19:20:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(542, 1, '2016-02-18 19:20:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(543, 1, '2016-02-18 19:20:51', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(544, 1, '2016-02-18 19:20:51', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(545, 1, '2016-02-18 19:21:24', 'update', 'usuario_00_01_01', '192.168.100.103'),
(546, 1, '2016-02-18 19:21:24', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.103'),
(547, 1, '2016-02-18 19:21:24', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(548, 1, '2016-02-18 19:21:24', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(549, 1, '2016-02-18 19:21:24', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(550, 1, '2016-02-18 19:21:24', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(551, 1, '2016-02-18 19:21:24', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(552, 1, '2016-02-18 19:24:52', 'update', 'usuario_00_01_01', '192.168.100.103'),
(553, 1, '2016-02-18 19:25:39', 'update', 'usuario_00_01_01', '192.168.100.103'),
(554, 1, '2016-02-18 19:27:39', 'update', 'usuario_00_01_01', '192.168.100.103'),
(555, 1, '2016-02-18 19:35:07', 'update', 'accion_01_02_01', '192.168.100.103'),
(556, 1, '2016-02-18 19:37:14', 'update', 'oec_02_00_01', '192.168.100.100'),
(557, 1, '2016-02-18 19:37:14', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(558, 1, '2016-02-18 19:37:14', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(559, 1, '2016-02-18 19:37:14', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(560, 1, '2016-02-18 19:37:14', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(561, 1, '2016-02-18 19:45:45', 'update', 'usuario_00_01_01', '192.168.100.103'),
(562, 1, '2016-02-18 19:46:22', 'update', 'usuario_00_01_01', '192.168.100.103'),
(563, 1, '2016-02-18 19:47:22', 'update', 'usuario_00_01_01', '192.168.100.103'),
(564, 1, '2016-02-18 19:49:24', 'update', 'usuario_00_01_01', '192.168.100.103'),
(565, 1, '2016-02-18 19:50:51', 'update', 'usuario_00_01_01', '192.168.100.103'),
(566, 1, '2016-02-18 19:50:51', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.103'),
(567, 1, '2016-02-18 19:50:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(568, 1, '2016-02-18 19:50:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(569, 1, '2016-02-18 19:50:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(570, 1, '2016-02-18 19:50:51', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(571, 1, '2016-02-18 19:50:51', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(598, 1, '2016-02-18 20:01:09', 'update', 'usuario_00_01_01', '192.168.100.103'),
(599, 1, '2016-02-18 20:01:09', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.103'),
(600, 1, '2016-02-18 20:01:09', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(601, 1, '2016-02-18 20:01:09', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(602, 1, '2016-02-18 20:01:09', 'update', 'usuario_proceso_00_01_02', '192.168.100.103'),
(603, 1, '2016-02-18 20:01:09', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(604, 1, '2016-02-18 20:01:09', 'update', 'usuario_oec_00_01_02', '192.168.100.103'),
(605, 1, '2016-02-18 20:05:44', 'update', 'oec_02_00_01', '192.168.100.103'),
(606, 1, '2016-02-18 20:08:30', 'update', 'oec_02_00_01', '192.168.100.103'),
(607, 1, '2016-02-18 20:12:29', 'update', 'oec_02_00_01', '192.168.100.103'),
(613, 1, '2016-02-18 20:30:39', 'create', 'peticion_01_04_01', '192.168.100.100'),
(614, 1, '2016-02-18 20:30:39', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(615, 1, '2016-02-18 20:30:39', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(616, 1, '2016-02-18 20:31:19', 'create', 'peticion_01_04_01', '192.168.100.100'),
(617, 1, '2016-02-18 20:31:19', 'create', 'peticion_estado_01_04_03', '192.168.100.100');
INSERT INTO `log_sistema_03_00_03` (`id_log_sistema`, `fk_id_usuario`, `fecha_hora_log_sistema`, `accion_log_sistema`, `tabla_log_sistema`, `ip_registro_log_sistema`) VALUES
(618, 1, '2016-02-18 20:31:19', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(620, 1, '2016-02-18 20:33:45', 'update', 'oec_02_00_01', '192.168.100.100'),
(621, 1, '2016-02-18 20:33:45', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(622, 1, '2016-02-18 20:33:45', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(623, 1, '2016-02-18 20:33:45', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(624, 1, '2016-02-18 20:34:48', 'update', 'oec_02_00_01', '192.168.100.100'),
(625, 1, '2016-02-18 20:34:48', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(626, 1, '2016-02-18 20:34:48', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(627, 1, '2016-02-18 20:34:48', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(628, 1, '2016-02-18 20:34:56', 'update', 'oec_02_00_01', '192.168.100.100'),
(629, 1, '2016-02-18 20:34:56', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(630, 1, '2016-02-18 20:34:56', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(631, 1, '2016-02-18 20:34:56', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(632, 1, '2016-02-18 20:35:09', 'update', 'oec_02_00_01', '192.168.100.100'),
(633, 1, '2016-02-18 20:35:09', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(634, 1, '2016-02-18 20:35:09', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(635, 1, '2016-02-18 20:35:09', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(636, 1, '2016-02-18 20:35:09', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(637, 1, '2016-02-18 20:35:52', 'create', 'oec_contacto_02_00_03', '192.168.100.100'),
(638, 1, '2016-02-18 20:38:48', 'update', 'usuario_00_01_01', '192.168.100.100'),
(639, 1, '2016-02-18 20:38:48', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(640, 1, '2016-02-18 20:38:48', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(641, 1, '2016-02-18 20:38:48', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(642, 1, '2016-02-18 20:38:48', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(643, 1, '2016-02-18 20:38:48', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(644, 1, '2016-02-18 20:38:48', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(645, 1, '2016-02-18 20:42:47', 'update', 'peticion_01_04_01', '192.168.100.100'),
(646, 1, '2016-02-18 20:42:47', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(647, 8, '2016-02-19 12:07:36', 'create', 'peticion_01_04_01', '192.168.100.100'),
(648, 8, '2016-02-19 12:07:36', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(649, 1, '2016-02-23 01:03:19', 'create', 'codigo_peticion_01_04_04', '192.168.100.100'),
(650, 1, '2016-02-23 01:03:23', 'create', 'peticion_01_04_01', '192.168.100.100'),
(651, 1, '2016-02-23 01:03:23', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(652, 1, '2016-02-23 01:03:23', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(653, 1, '2016-02-23 01:03:23', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(654, 1, '2016-02-23 01:04:57', 'update', 'usuario_00_01_01', '192.168.100.100'),
(655, 1, '2016-02-23 01:04:57', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(656, 1, '2016-02-23 01:04:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(657, 1, '2016-02-23 01:04:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(658, 1, '2016-02-23 01:04:57', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(659, 1, '2016-02-23 01:04:57', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(660, 1, '2016-02-23 01:04:57', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(661, 1, '2016-02-23 01:04:57', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(662, 1, '2016-02-23 01:05:50', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(663, 1, '2016-02-23 01:05:59', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(664, 1, '2016-02-23 01:06:04', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(665, 1, '2016-02-23 01:08:50', 'create', 'usuario_00_01_01', '192.168.100.100'),
(666, 1, '2016-02-23 01:08:50', 'create', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(667, 1, '2016-02-23 01:08:50', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(668, 1, '2016-02-23 01:08:50', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(669, 1, '2016-02-23 01:08:50', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(670, 1, '2016-02-23 01:08:50', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(671, 1, '2016-02-23 01:08:50', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(672, 1, '2016-02-23 01:08:50', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(673, 1, '2016-02-23 01:08:50', 'create', 'usuario_oec_00_01_02', '192.168.100.100'),
(674, 12, '2016-02-23 01:10:50', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(675, 12, '2016-02-23 01:10:50', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(676, 12, '2016-02-23 01:10:50', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(677, 12, '2016-02-23 01:10:50', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(678, 1, '2016-02-23 01:27:22', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(679, 1, '2016-02-23 01:27:26', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(680, 1, '2016-02-23 01:27:40', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(681, 1, '2016-02-23 01:27:49', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(682, 1, '2016-02-23 01:27:59', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(683, 1, '2016-02-23 01:28:03', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(684, 12, '2016-02-23 01:28:12', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(685, 12, '2016-02-23 01:28:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(686, 12, '2016-02-23 01:28:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(687, 12, '2016-02-23 01:28:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(688, 1, '2016-02-23 02:00:17', 'create', 'peticion_01_04_01', '192.168.100.100'),
(689, 1, '2016-02-23 02:00:17', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(690, 1, '2016-02-23 02:00:17', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(691, 1, '2016-02-23 02:07:34', 'create', 'peticion_01_04_01', '192.168.100.100'),
(692, 1, '2016-02-23 02:07:34', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(693, 1, '2016-02-23 02:07:34', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(698, 1, '2016-02-23 09:01:03', 'create', 'peticion_01_04_01', '192.168.100.100'),
(699, 1, '2016-02-23 09:01:03', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(700, 1, '2016-02-23 09:01:03', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(701, 1, '2016-02-23 09:01:03', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(702, 1, '2016-02-24 19:20:58', 'create', 'peticion_01_04_01', '192.168.100.100'),
(703, 1, '2016-02-24 19:20:58', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(704, 1, '2016-02-24 19:20:58', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(705, 1, '2016-02-24 19:28:50', 'create', 'oec_contacto_02_00_03', '192.168.100.100'),
(706, 1, '2016-02-24 19:28:50', 'update', 'oec_02_00_01', '192.168.100.100'),
(707, 1, '2016-02-24 19:28:50', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(708, 1, '2016-02-24 19:28:50', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(709, 1, '2016-02-24 19:28:50', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(710, 1, '2016-02-24 19:28:50', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(711, 1, '2016-02-24 19:28:50', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(712, 1, '2016-02-24 20:07:56', 'update', 'oec_02_00_01', '192.168.100.100'),
(713, 1, '2016-02-24 20:07:56', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(714, 1, '2016-02-24 20:07:56', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(715, 1, '2016-02-24 20:07:56', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(716, 1, '2016-02-24 20:07:56', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(717, 1, '2016-02-24 20:07:56', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(718, 1, '2016-02-24 20:07:56', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(719, 1, '2016-02-24 20:08:27', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(720, 1, '2016-02-24 20:14:20', 'update', 'oec_02_00_01', '192.168.100.100'),
(721, 1, '2016-02-24 20:14:20', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(722, 1, '2016-02-24 20:14:20', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(723, 1, '2016-02-24 20:14:20', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(724, 1, '2016-02-24 20:14:20', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(725, 1, '2016-02-24 20:14:20', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(726, 1, '2016-02-24 20:14:20', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(727, 1, '2016-02-24 20:14:20', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(728, 1, '2016-02-25 05:24:35', 'update', 'oec_02_00_01', '192.168.100.100'),
(729, 1, '2016-02-25 05:24:35', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(730, 1, '2016-02-25 05:24:35', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(731, 1, '2016-02-25 05:24:35', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(732, 1, '2016-02-25 05:24:35', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(733, 1, '2016-02-25 05:24:35', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(734, 1, '2016-02-25 05:24:35', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(735, 1, '2016-02-25 05:24:35', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(736, 1, '2016-02-25 05:26:13', 'update', 'oec_02_00_01', '192.168.100.100'),
(737, 1, '2016-02-25 05:26:13', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(738, 1, '2016-02-25 05:26:13', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(739, 1, '2016-02-25 05:26:13', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(740, 1, '2016-02-25 05:26:13', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(741, 1, '2016-02-25 05:26:13', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(742, 1, '2016-02-25 05:26:13', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(743, 1, '2016-02-25 05:26:13', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(744, 1, '2016-02-25 05:38:04', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(745, 1, '2016-02-25 05:38:04', 'update', 'oec_02_00_01', '192.168.100.100'),
(746, 1, '2016-02-25 05:38:04', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(747, 1, '2016-02-25 05:38:04', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(748, 1, '2016-02-25 05:38:04', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(749, 1, '2016-02-25 05:38:04', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(750, 1, '2016-02-25 05:38:04', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(751, 1, '2016-02-25 05:38:04', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(752, 1, '2016-02-25 05:38:04', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(753, 1, '2016-02-25 05:38:04', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(754, 1, '2016-02-25 05:43:26', 'create', 'oec_contacto_02_00_03', '192.168.100.100'),
(755, 1, '2016-02-25 05:43:26', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(756, 1, '2016-02-25 05:43:26', 'update', 'oec_02_00_01', '192.168.100.100'),
(757, 1, '2016-02-25 05:43:26', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(758, 1, '2016-02-25 05:43:26', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(759, 1, '2016-02-25 05:43:26', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(760, 1, '2016-02-25 05:43:26', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(761, 1, '2016-02-25 05:43:26', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(762, 1, '2016-02-25 05:43:26', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(763, 1, '2016-02-25 05:43:26', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(764, 1, '2016-02-25 05:43:26', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(765, 1, '2016-02-25 05:43:26', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(766, 1, '2016-02-25 05:43:26', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(767, 1, '2016-02-25 05:46:36', 'update', 'oec_02_00_01', '192.168.100.100'),
(768, 1, '2016-02-25 05:46:36', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(769, 1, '2016-02-25 05:46:36', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(770, 1, '2016-02-25 05:46:36', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(771, 1, '2016-02-25 05:46:36', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(772, 1, '2016-02-25 05:46:36', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(773, 1, '2016-02-25 05:46:36', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(774, 1, '2016-02-25 05:46:36', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(775, 1, '2016-02-25 05:46:36', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(776, 1, '2016-02-25 05:46:36', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(777, 1, '2016-02-25 05:46:36', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(778, 1, '2016-02-25 05:46:36', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(779, 1, '2016-02-25 05:46:36', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(780, 1, '2016-02-25 05:51:54', 'update', 'oec_02_00_01', '192.168.100.100'),
(781, 1, '2016-02-25 05:51:54', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(782, 1, '2016-02-25 05:51:54', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(783, 1, '2016-02-25 05:51:54', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(784, 1, '2016-02-25 05:51:54', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(785, 1, '2016-02-25 05:51:54', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(786, 1, '2016-02-25 05:51:54', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(787, 1, '2016-02-25 05:51:54', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(788, 1, '2016-02-25 05:51:54', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(789, 1, '2016-02-25 05:51:54', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(790, 1, '2016-02-25 05:51:54', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(791, 1, '2016-02-25 05:51:54', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(792, 1, '2016-02-25 05:51:54', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(793, 1, '2016-02-25 06:01:50', 'update', 'oec_02_00_01', '192.168.100.100'),
(794, 1, '2016-02-25 06:01:50', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(795, 1, '2016-02-25 06:01:50', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(796, 1, '2016-02-25 06:01:50', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(797, 1, '2016-02-25 06:01:50', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(798, 1, '2016-02-25 06:01:50', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(799, 1, '2016-02-25 06:01:50', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(800, 1, '2016-02-25 06:01:50', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(801, 1, '2016-02-25 06:01:50', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(802, 1, '2016-02-25 06:01:50', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(803, 1, '2016-02-25 06:01:50', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(804, 1, '2016-02-25 06:01:50', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(805, 1, '2016-02-25 06:01:50', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(806, 1, '2016-02-25 06:20:34', 'create', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(807, 1, '2016-02-25 06:20:34', 'create', 'oec_contacto_02_00_03', '192.168.100.100'),
(808, 1, '2016-02-25 06:20:34', 'update', 'oec_02_00_01', '192.168.100.100'),
(809, 1, '2016-02-25 06:20:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(810, 1, '2016-02-25 06:20:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(811, 1, '2016-02-25 06:20:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(812, 1, '2016-02-25 06:20:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(813, 1, '2016-02-25 06:20:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(814, 1, '2016-02-25 06:20:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(815, 1, '2016-02-25 06:20:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(816, 1, '2016-02-25 06:20:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(817, 1, '2016-02-25 06:20:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(818, 1, '2016-02-25 06:20:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(819, 1, '2016-02-25 06:20:34', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(820, 1, '2016-02-25 06:20:34', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(821, 1, '2016-02-25 06:20:34', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(822, 1, '2016-02-25 06:20:48', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(823, 1, '2016-02-25 06:21:01', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(824, 1, '2016-02-25 06:21:01', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(825, 1, '2016-02-25 06:21:01', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(826, 1, '2016-02-25 06:21:01', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(827, 1, '2016-02-25 06:21:15', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(828, 1, '2016-02-25 06:21:15', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(829, 1, '2016-02-25 06:24:22', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(830, 1, '2016-02-25 06:24:22', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(831, 1, '2016-02-25 06:25:20', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(832, 1, '2016-02-25 06:25:33', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(833, 1, '2016-02-25 06:28:07', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(834, 1, '2016-02-25 06:28:16', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(835, 1, '2016-02-25 06:28:17', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(836, 1, '2016-02-25 06:28:17', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(837, 1, '2016-02-25 06:30:08', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(838, 1, '2016-02-25 06:30:08', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(839, 6, '2016-02-25 07:27:21', 'update', 'usuario_00_01_01', '192.168.100.100'),
(840, 6, '2016-02-25 07:27:21', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(841, 6, '2016-02-25 07:27:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(842, 6, '2016-02-25 07:27:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(843, 6, '2016-02-25 07:27:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(844, 6, '2016-02-25 07:27:21', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(845, 6, '2016-02-25 07:27:21', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(846, 6, '2016-02-25 07:27:21', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(847, 6, '2016-02-25 07:27:41', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(848, 6, '2016-02-25 07:27:49', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(849, 1, '2016-02-25 07:59:47', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(850, 1, '2016-02-25 07:59:47', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(851, 1, '2016-02-25 07:59:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(852, 1, '2016-02-25 07:59:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(853, 1, '2016-02-25 07:59:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(854, 1, '2016-02-25 08:00:13', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(855, 1, '2016-02-25 08:00:13', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(856, 8, '2016-02-25 08:01:00', 'update', 'usuario_00_01_01', '192.168.100.100'),
(857, 8, '2016-02-25 08:01:00', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(858, 8, '2016-02-25 08:01:00', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(859, 8, '2016-02-25 08:01:00', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(860, 8, '2016-02-25 08:01:00', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(861, 8, '2016-02-25 08:01:00', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(862, 8, '2016-02-25 08:01:00', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(863, 8, '2016-02-25 08:01:00', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(864, 8, '2016-02-25 08:01:00', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(865, 8, '2016-02-25 08:01:00', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(866, 8, '2016-02-25 08:01:22', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(867, 8, '2016-02-25 08:01:22', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(868, 1, '2016-02-25 08:01:57', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(869, 1, '2016-02-25 08:02:08', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(870, 1, '2016-02-25 08:03:13', 'create', 'detalle_certificacion_04_05_01', '192.168.100.100'),
(871, 1, '2016-02-25 08:03:34', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(872, 1, '2016-02-25 08:03:46', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(873, 1, '2016-02-25 08:04:01', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(874, 1, '2016-02-25 08:04:13', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(875, 1, '2016-02-25 08:04:29', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(876, 1, '2016-02-25 08:04:34', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(877, 1, '2016-02-25 08:04:34', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(878, 1, '2016-02-25 08:04:34', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(879, 1, '2016-02-25 08:04:41', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(880, 1, '2016-02-25 08:04:41', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(881, 8, '2016-02-25 08:05:02', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(882, 8, '2016-02-25 08:05:02', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(883, 1, '2016-02-25 08:05:20', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(884, 1, '2016-02-25 08:05:45', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(885, 1, '2016-02-25 08:05:50', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(886, 1, '2016-02-25 08:25:17', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(887, 1, '2016-02-25 08:25:56', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(888, 1, '2016-02-25 08:26:08', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(889, 1, '2016-02-25 08:26:08', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(890, 1, '2016-02-25 08:35:54', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(891, 1, '2016-02-25 08:36:06', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(892, 1, '2016-02-25 08:39:20', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(893, 8, '2016-02-25 08:40:31', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(894, 8, '2016-02-25 08:40:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(895, 8, '2016-02-25 08:40:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(896, 8, '2016-02-25 08:40:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(897, 1, '2016-02-25 08:40:53', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(898, 1, '2016-02-25 08:40:54', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(899, 8, '2016-02-25 08:41:09', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(900, 8, '2016-02-25 08:41:09', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(901, 1, '2016-02-25 08:41:29', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(902, 1, '2016-02-25 08:41:41', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(903, 1, '2016-02-25 08:41:41', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(904, 1, '2016-02-25 09:18:29', 'update', 'usuario_00_01_01', '192.168.100.100'),
(905, 1, '2016-02-25 09:18:29', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(906, 1, '2016-02-25 09:18:29', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(907, 1, '2016-02-25 09:18:29', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(908, 1, '2016-02-25 09:18:29', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(909, 1, '2016-02-25 09:18:29', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(910, 1, '2016-02-25 09:18:29', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(911, 1, '2016-02-25 09:18:29', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(912, 4, '2016-02-25 09:18:41', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(913, 4, '2016-02-25 09:18:52', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(914, 1, '2016-02-25 09:22:07', 'update', 'usuario_00_01_01', '192.168.100.100'),
(915, 1, '2016-02-25 09:22:07', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(916, 1, '2016-02-25 09:22:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(917, 1, '2016-02-25 09:22:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(918, 1, '2016-02-25 09:22:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(919, 1, '2016-02-25 09:22:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(920, 1, '2016-02-25 09:22:07', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(921, 1, '2016-02-25 09:22:07', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(922, 1, '2016-02-25 09:22:07', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(923, 1, '2016-02-25 09:22:07', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(924, 9, '2016-02-25 09:22:19', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(925, 9, '2016-02-25 09:22:53', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(926, 9, '2016-02-25 09:23:10', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(927, 1, '2016-02-25 22:24:12', 'create', 'peticion_01_04_01', '192.168.100.102'),
(928, 1, '2016-02-25 22:24:12', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(929, 1, '2016-02-25 22:24:16', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(930, 1, '2016-02-25 22:31:43', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(931, 1, '2016-02-25 22:31:56', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(932, 1, '2016-02-25 22:31:56', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(933, 1, '2016-02-25 22:31:56', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(934, 1, '2016-02-25 22:31:56', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(935, 1, '2016-02-25 22:32:04', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(936, 1, '2016-02-25 22:32:04', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(937, 1, '2016-02-25 22:33:39', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(938, 1, '2016-02-25 22:33:39', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(939, 1, '2016-02-25 22:33:48', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(940, 1, '2016-02-25 22:34:13', 'create', 'peticion_estado_01_04_03', '192.168.100.102'),
(941, 1, '2016-02-25 22:34:22', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(942, 1, '2016-02-25 22:34:22', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(943, 1, '2016-02-25 22:34:22', 'create', 'peticion_accion_01_03_01', '192.168.100.102'),
(944, 1, '2016-02-25 22:34:42', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(945, 1, '2016-02-25 22:34:42', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(946, 6, '2016-02-25 23:07:53', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.102'),
(947, 6, '2016-02-25 23:08:11', 'update', 'peticion_accion_01_03_01', '192.168.100.102'),
(948, 4, '2016-02-25 23:09:05', 'create', 'peticion_archivo_01_04_01', '192.168.100.102'),
(949, 1, '2016-02-26 07:25:58', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(951, 1, '2016-02-26 08:26:10', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(952, 1, '2016-02-26 08:26:27', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(953, 1, '2016-02-26 08:26:27', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(954, 1, '2016-02-26 08:26:27', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(955, 1, '2016-02-26 08:26:27', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(956, 1, '2016-02-27 14:39:37', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(958, 1, '2016-02-27 14:50:20', 'create', 'peticion_archivo_01_04_01', '192.168.100.101'),
(959, 1, '2016-02-28 17:09:09', 'create', 'usuario_00_01_01', '192.168.100.100'),
(960, 1, '2016-02-28 17:09:09', 'create', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(961, 1, '2016-02-28 17:09:09', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(962, 1, '2016-02-28 17:09:09', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(963, 1, '2016-02-28 17:09:09', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(964, 1, '2016-02-28 17:09:09', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(965, 1, '2016-02-28 17:09:09', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(966, 1, '2016-02-28 17:09:09', 'create', 'usuario_proceso_00_01_02', '192.168.100.100'),
(967, 1, '2016-02-28 17:09:09', 'create', 'usuario_oec_00_01_02', '192.168.100.100'),
(968, 1, '2016-02-28 17:09:09', 'create', 'usuario_oec_00_01_02', '192.168.100.100'),
(969, 1, '2016-02-28 17:09:09', 'create', 'usuario_oec_00_01_02', '192.168.100.100'),
(970, 1, '2016-02-28 17:10:08', 'create', 'usuario_00_01_01', '192.168.100.100'),
(971, 1, '2016-02-28 17:10:21', 'update', 'usuario_00_01_01', '192.168.100.100'),
(972, 1, '2016-02-28 17:10:21', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(973, 1, '2016-02-28 17:10:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(974, 1, '2016-02-28 17:10:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(975, 1, '2016-02-28 17:10:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(976, 1, '2016-02-28 17:10:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(977, 1, '2016-02-28 17:10:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(978, 1, '2016-02-28 17:10:21', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(979, 1, '2016-02-28 17:10:21', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(980, 1, '2016-02-28 17:10:21', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(981, 1, '2016-02-28 17:10:21', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(982, 1, '2016-02-28 17:14:00', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(984, 1, '2016-02-28 17:23:54', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(986, 1, '2016-02-28 17:24:36', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(987, 1, '2016-03-01 19:32:53', 'update', 'oec_02_00_01', '192.168.100.100'),
(988, 1, '2016-03-01 19:32:53', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(989, 1, '2016-03-01 19:32:53', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(990, 1, '2016-03-01 19:32:53', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(991, 1, '2016-03-01 19:32:53', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(992, 1, '2016-03-01 19:32:53', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(993, 1, '2016-03-01 19:32:53', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(994, 1, '2016-03-01 19:32:53', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(995, 1, '2016-03-01 19:32:53', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(996, 1, '2016-03-01 19:32:53', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(997, 1, '2016-03-01 19:32:53', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(998, 1, '2016-03-01 19:32:53', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(999, 1, '2016-03-01 19:32:53', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1000, 1, '2016-03-01 19:32:53', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1001, 1, '2016-03-01 19:32:53', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1002, 1, '2016-03-01 19:32:53', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1003, 1, '2016-03-01 19:33:34', 'update', 'oec_02_00_01', '192.168.100.100'),
(1004, 1, '2016-03-01 19:33:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(1005, 1, '2016-03-01 19:33:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(1006, 1, '2016-03-01 19:33:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(1007, 1, '2016-03-01 19:33:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(1008, 1, '2016-03-01 19:33:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(1009, 1, '2016-03-01 19:33:34', 'update', 'oec_acreditacion_solicitada_02_00_03', '192.168.100.100'),
(1010, 1, '2016-03-01 19:33:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(1011, 1, '2016-03-01 19:33:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(1012, 1, '2016-03-01 19:33:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(1013, 1, '2016-03-01 19:33:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(1014, 1, '2016-03-01 19:33:34', 'update', 'oec_actividad_02_00_02', '192.168.100.100'),
(1015, 1, '2016-03-01 19:33:34', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1016, 1, '2016-03-01 19:33:34', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1017, 1, '2016-03-01 19:33:34', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1018, 1, '2016-03-01 19:33:34', 'update', 'oec_contacto_02_00_03', '192.168.100.100'),
(1019, 1, '2016-03-01 19:34:17', 'create', 'info_ensayo_04_01_01', '192.168.100.100'),
(1020, 1, '2016-03-01 19:49:29', 'update', 'info_ensayo_04_01_01', '192.168.100.100'),
(1025, 1, '2016-03-02 16:09:02', 'create', 'peticion_01_04_01', '192.168.100.100'),
(1026, 1, '2016-03-02 16:09:02', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1027, 1, '2016-03-02 16:09:02', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1032, 1, '2016-03-02 16:31:36', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1033, 1, '2016-03-02 16:31:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1034, 1, '2016-03-02 16:31:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1035, 1, '2016-03-02 16:31:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1036, 1, '2016-03-02 16:31:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1037, 1, '2016-03-02 16:31:59', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1038, 1, '2016-03-02 16:31:59', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1039, 1, '2016-03-02 16:32:05', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1040, 1, '2016-03-02 16:32:05', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1041, 1, '2016-03-02 16:32:10', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1042, 1, '2016-03-02 16:32:12', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1043, 1, '2016-03-02 16:32:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1044, 1, '2016-03-02 16:32:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1045, 1, '2016-03-02 16:32:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1046, 1, '2016-03-02 17:18:39', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1047, 1, '2016-03-02 17:18:39', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1048, 6, '2016-03-02 17:18:51', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1049, 6, '2016-03-02 17:19:38', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1050, 6, '2016-03-02 17:20:04', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1051, 1, '2016-03-09 23:01:58', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1052, 1, '2016-03-09 23:01:58', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1053, 1, '2016-03-09 23:01:58', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1054, 1, '2016-03-09 23:01:58', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1055, 1, '2016-03-09 23:01:58', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1056, 1, '2016-03-09 23:23:31', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1057, 1, '2016-03-09 23:23:31', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1058, 6, '2016-03-09 23:32:26', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1059, 6, '2016-03-10 09:25:16', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1060, 6, '2016-03-10 09:25:50', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1061, 6, '2016-03-10 09:26:46', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1062, 13, '2016-03-10 09:34:43', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1063, 14, '2016-03-10 09:35:36', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1064, 13, '2016-03-10 09:45:12', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1065, 13, '2016-03-10 09:47:54', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1066, 6, '2016-03-10 09:50:49', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1067, 14, '2016-03-10 09:56:11', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1068, 14, '2016-03-10 09:58:29', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1069, 14, '2016-03-10 10:10:15', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1070, 14, '2016-03-10 10:16:39', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1071, 14, '2016-03-10 10:17:59', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1072, 14, '2016-03-10 10:23:41', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1073, 1, '2016-03-10 10:33:01', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1074, 1, '2016-03-10 10:33:01', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1075, 1, '2016-03-10 10:33:01', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1076, 1, '2016-03-10 10:33:01', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1077, 1, '2016-03-10 10:33:01', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1078, 1, '2016-03-10 10:33:52', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1079, 1, '2016-03-10 10:33:52', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1080, 12, '2016-03-10 10:34:51', 'update', 'usuario_00_01_01', '192.168.100.100'),
(1081, 12, '2016-03-10 10:34:51', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(1082, 12, '2016-03-10 10:34:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1083, 12, '2016-03-10 10:34:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1084, 12, '2016-03-10 10:34:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1085, 12, '2016-03-10 10:34:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1086, 12, '2016-03-10 10:34:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1087, 12, '2016-03-10 10:34:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1088, 12, '2016-03-10 10:34:51', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1089, 12, '2016-03-10 10:34:51', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1090, 12, '2016-03-10 10:34:51', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1091, 12, '2016-03-10 10:35:11', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1092, 12, '2016-03-10 10:35:11', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1093, 1, '2016-03-10 10:35:24', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1094, 1, '2016-03-10 10:35:24', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1095, 12, '2016-03-10 10:36:15', 'create', 'info_ensayo_04_01_01', '192.168.100.100'),
(1096, 12, '2016-03-10 10:37:02', 'create', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1097, 12, '2016-03-10 10:37:19', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1098, 12, '2016-03-10 10:37:19', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1099, 1, '2016-03-10 10:37:51', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1100, 1, '2016-03-10 10:43:34', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1101, 1, '2016-03-10 11:12:07', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1102, 1, '2016-03-10 11:12:21', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1103, 1, '2016-03-10 11:12:34', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1104, 1, '2016-03-10 11:12:46', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1105, 12, '2016-03-10 11:15:44', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1106, 12, '2016-03-10 11:15:44', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1107, 12, '2016-03-10 11:15:44', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1108, 12, '2016-03-10 11:15:44', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1109, 1, '2016-03-10 12:00:50', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1110, 1, '2016-03-10 12:00:50', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1111, 1, '2016-03-10 12:00:50', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1112, 1, '2016-03-10 12:00:50', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1113, 1, '2016-03-10 12:03:16', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1114, 1, '2016-03-10 12:03:16', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1115, 12, '2016-03-10 12:03:54', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1116, 12, '2016-03-10 12:03:54', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1117, 1, '2016-03-10 12:04:04', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1118, 1, '2016-03-10 12:04:04', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1119, 1, '2016-03-10 12:04:48', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1120, 1, '2016-03-10 12:04:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1121, 1, '2016-03-10 12:04:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1122, 1, '2016-03-10 12:06:12', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1123, 1, '2016-03-10 12:32:15', 'update', 'usuario_00_01_01', '192.168.100.100'),
(1124, 1, '2016-03-10 12:32:15', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(1125, 1, '2016-03-10 12:32:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1126, 1, '2016-03-10 12:32:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1127, 1, '2016-03-10 12:32:15', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1128, 1, '2016-03-10 12:32:15', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1129, 1, '2016-03-10 12:38:51', 'update', 'usuario_00_01_01', '192.168.100.100'),
(1130, 1, '2016-03-10 12:38:51', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(1131, 1, '2016-03-10 12:38:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1132, 1, '2016-03-10 12:38:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1133, 1, '2016-03-10 12:38:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1134, 1, '2016-03-10 12:38:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1135, 1, '2016-03-10 12:38:51', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1136, 1, '2016-03-10 12:38:51', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1137, 1, '2016-03-10 12:38:51', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1138, 1, '2016-03-10 12:38:51', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1139, 1, '2016-03-10 15:45:28', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1140, 1, '2016-03-10 15:46:26', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1141, 1, '2016-03-10 15:48:14', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1142, 1, '2016-03-10 15:48:20', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1143, 12, '2016-03-10 15:49:07', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1144, 12, '2016-03-10 15:49:07', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1145, 12, '2016-03-10 15:49:07', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1146, 12, '2016-03-10 15:49:07', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1147, 1, '2016-03-10 15:59:18', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1148, 1, '2016-03-10 15:59:18', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1149, 12, '2016-03-10 15:59:52', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1150, 12, '2016-03-10 15:59:52', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1151, 1, '2016-03-10 16:00:04', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1152, 1, '2016-03-10 16:00:04', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1153, 1, '2016-03-10 16:00:04', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1154, 9, '2016-03-10 16:24:04', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1155, 9, '2016-03-10 16:24:32', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1156, 5, '2016-03-10 16:30:53', 'update', 'usuario_00_01_01', '192.168.100.100'),
(1157, 5, '2016-03-10 16:30:53', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(1158, 5, '2016-03-10 16:30:53', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1159, 5, '2016-03-10 16:30:53', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1160, 5, '2016-03-10 16:30:53', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1161, 5, '2016-03-10 16:30:53', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1162, 5, '2016-03-10 16:30:53', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1163, 5, '2016-03-10 16:30:53', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1164, 5, '2016-03-10 16:31:04', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1165, 5, '2016-03-10 16:31:57', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1166, 5, '2016-03-10 16:32:07', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1167, 5, '2016-03-10 16:32:07', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1168, 1, '2016-03-10 17:40:35', 'create', 'evaluacion_03_00_01', '192.168.100.100'),
(1169, 1, '2016-03-10 19:48:03', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1170, 1, '2016-03-10 19:48:03', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1171, 1, '2016-03-10 19:48:03', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1172, 1, '2016-03-10 19:48:03', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1173, 1, '2016-03-10 19:48:03', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1174, 1, '2016-03-11 10:49:42', 'create', 'informe_evaluacion_04_06_01', '192.168.100.100'),
(1175, 1, '2016-03-11 10:50:01', 'create', 'no_conformidad_04_07_01', '192.168.100.100'),
(1176, 1, '2016-03-11 10:50:08', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1177, 1, '2016-03-11 10:51:04', 'create', 'eval_tecnica_04_08_01', '192.168.100.100'),
(1178, 1, '2016-03-11 10:52:01', 'update', 'eval_tecnica_04_08_01', '192.168.100.100'),
(1179, 1, '2016-03-11 10:52:09', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1180, 1, '2016-03-11 10:52:16', 'create', 'designacion_evaluador_04_10_01', '192.168.100.100'),
(1181, 1, '2016-03-11 10:52:38', 'create', 'prueba_participacion_04_09_01', '192.168.100.100'),
(1182, 1, '2016-03-11 10:52:46', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1183, 1, '2016-03-11 10:52:57', 'create', 'supervision_evaluador_04_11_01', '192.168.100.100'),
(1184, 1, '2016-03-11 10:53:05', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1185, 1, '2016-03-11 10:53:05', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1186, 1, '2016-03-11 10:53:05', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1187, 1, '2016-03-11 11:44:05', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1188, 1, '2016-03-11 11:44:16', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1189, 1, '2016-03-11 11:44:20', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1190, 1, '2016-03-11 15:57:41', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1191, 1, '2016-03-11 15:57:41', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1192, 1, '2016-03-11 16:21:45', 'create', 'informe_acred_04_13_01', '192.168.100.100'),
(1193, 1, '2016-03-11 16:49:23', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1194, 1, '2016-03-11 16:49:23', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1195, 1, '2016-03-11 16:49:23', 'create', 'peticion_accion_01_03_01', '192.168.100.100');
INSERT INTO `log_sistema_03_00_03` (`id_log_sistema`, `fk_id_usuario`, `fecha_hora_log_sistema`, `accion_log_sistema`, `tabla_log_sistema`, `ip_registro_log_sistema`) VALUES
(1196, 1, '2016-03-11 16:49:23', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1197, 1, '2016-03-11 16:49:32', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1198, 1, '2016-03-11 16:49:32', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1199, 1, '2016-03-11 17:06:07', 'delete', 'informe_acred_04_13_01', '192.168.100.100'),
(1200, 1, '2016-03-11 17:06:15', 'create', 'informe_acred_04_13_01', '192.168.100.100'),
(1201, 1, '2016-03-11 17:06:48', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1202, 1, '2016-03-11 17:06:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1203, 1, '2016-03-11 17:06:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1204, 1, '2016-03-11 17:06:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1205, 1, '2016-03-11 17:33:37', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1206, 1, '2016-03-11 17:36:19', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1207, 1, '2016-03-11 17:36:19', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1208, 5, '2016-03-11 17:37:31', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1209, 5, '2016-03-11 17:37:31', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1210, 4, '2016-03-11 17:41:16', 'create', 'anexo_convenio_04_13_01', '192.168.100.100'),
(1211, 4, '2016-03-11 17:41:16', 'create', 'alcance_acreditacion_insp_04_13_03', '192.168.100.100'),
(1212, 4, '2016-03-11 17:41:16', 'create', 'personal_autorizado_04_13_03', '192.168.100.100'),
(1213, 1, '2016-03-11 17:49:49', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1214, 1, '2016-03-11 17:49:49', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1215, 1, '2016-03-11 17:51:54', 'create', 'certificado_04_14_01', '192.168.100.100'),
(1216, 1, '2016-03-11 17:52:07', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1217, 1, '2016-03-11 17:52:07', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1218, 1, '2016-03-11 17:52:07', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1219, 6, '2016-03-11 17:54:25', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1220, 13, '2016-03-11 17:57:13', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1221, 14, '2016-03-11 17:59:53', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1222, 14, '2016-03-11 18:00:21', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1223, 1, '2016-03-14 06:12:26', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1224, 1, '2016-03-14 06:12:26', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1225, 1, '2016-03-14 06:12:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1226, 1, '2016-03-14 06:12:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1227, 1, '2016-03-14 06:12:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1228, 1, '2016-03-14 06:13:12', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1229, 1, '2016-03-14 06:13:12', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1230, 1, '2016-03-14 06:13:17', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1231, 1, '2016-03-14 06:13:17', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1232, 1, '2016-03-14 06:13:20', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1233, 1, '2016-03-14 09:36:52', 'create', 'peticion_01_04_01', '192.168.100.100'),
(1234, 1, '2016-03-14 09:36:52', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1235, 1, '2016-03-14 09:36:52', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1236, 1, '2016-03-16 09:42:15', 'create', 'peticion_01_04_01', '192.168.100.100'),
(1237, 1, '2016-03-16 09:42:15', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1238, 1, '2016-03-16 09:42:15', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1239, 1, '2016-03-16 09:45:18', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1240, 1, '2016-03-16 09:45:18', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1241, 1, '2016-03-16 09:45:18', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1242, 1, '2016-03-16 09:45:18', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1243, 1, '2016-03-16 09:45:18', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1244, 1, '2016-03-16 09:45:48', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1245, 1, '2016-03-16 09:45:48', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1246, 1, '2016-03-16 09:45:52', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1247, 1, '2016-03-16 09:45:52', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1248, 1, '2016-03-16 09:45:54', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1249, 1, '2016-03-16 09:45:56', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1250, 1, '2016-03-16 09:45:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1251, 1, '2016-03-16 09:45:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1252, 1, '2016-03-16 09:45:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1253, 1, '2016-03-16 11:26:50', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1254, 1, '2016-03-16 11:26:50', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1255, 1, '2016-03-16 12:05:36', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1256, 1, '2016-03-16 12:08:15', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1257, 1, '2016-03-16 12:08:15', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1258, 6, '2016-03-16 15:14:38', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1259, 13, '2016-03-16 15:15:44', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1260, 14, '2016-03-16 15:16:49', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1261, 14, '2016-03-16 15:17:12', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1262, 1, '2016-03-16 15:17:39', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1263, 1, '2016-03-16 15:17:40', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1264, 1, '2016-03-16 15:17:40', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1265, 1, '2016-03-16 15:17:40', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1266, 1, '2016-03-16 15:17:40', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1267, 1, '2016-03-16 15:48:58', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1268, 1, '2016-03-16 15:48:58', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1269, 1, '2016-03-16 15:53:30', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1270, 1, '2016-03-16 15:53:30', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1271, 1, '2016-03-16 15:53:37', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1272, 1, '2016-03-16 15:53:48', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1273, 1, '2016-03-16 15:56:04', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1274, 1, '2016-03-16 16:06:28', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1275, 1, '2016-03-16 16:06:28', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1276, 1, '2016-03-16 16:34:46', 'create', 'info_ensayo_04_01_01', '192.168.100.100'),
(1277, 1, '2016-03-16 16:44:04', 'create', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1278, 1, '2016-03-16 16:44:20', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1279, 1, '2016-03-16 16:44:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1280, 1, '2016-03-16 17:39:17', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1281, 1, '2016-03-16 17:39:36', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1282, 1, '2016-03-16 17:48:15', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1283, 1, '2016-03-16 17:48:26', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1284, 1, '2016-03-16 17:48:45', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1285, 1, '2016-03-16 17:48:55', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1286, 1, '2016-03-16 17:49:32', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1287, 1, '2016-03-16 17:49:39', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1288, 1, '2016-03-16 17:50:04', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1289, 1, '2016-03-16 17:50:14', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1290, 1, '2016-03-16 17:53:31', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1291, 1, '2016-03-16 17:53:31', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1292, 1, '2016-03-16 17:53:31', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1293, 1, '2016-03-16 17:53:31', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1294, 1, '2016-03-16 18:03:01', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1295, 1, '2016-03-16 18:03:01', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1296, 1, '2016-03-16 18:04:21', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1297, 1, '2016-03-16 18:04:21', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1298, 12, '2016-03-16 18:05:11', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1299, 12, '2016-03-16 18:05:11', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1300, 1, '2016-03-16 18:23:35', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1301, 1, '2016-03-16 18:23:35', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1302, 12, '2016-03-16 18:27:49', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1303, 12, '2016-03-16 18:27:49', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1304, 1, '2016-03-16 18:28:13', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1305, 1, '2016-03-16 18:28:13', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1306, 1, '2016-03-16 18:38:16', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1307, 1, '2016-03-16 18:38:16', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1308, 1, '2016-03-16 18:38:16', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1309, 1, '2016-03-16 18:38:26', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1310, 1, '2016-03-16 18:40:28', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1311, 1, '2016-03-16 18:42:25', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1312, 1, '2016-03-17 09:19:49', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1313, 1, '2016-03-17 09:24:05', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1314, 1, '2016-03-17 09:24:08', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1315, 1, '2016-03-17 09:24:20', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1316, 1, '2016-03-17 09:29:15', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1317, 1, '2016-03-17 09:29:33', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1318, 1, '2016-03-17 09:29:35', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1319, 1, '2016-03-17 09:29:37', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1320, 1, '2016-03-17 09:29:39', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1321, 1, '2016-03-17 09:29:46', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1322, 1, '2016-03-17 09:32:39', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1323, 1, '2016-03-17 09:44:58', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1324, 1, '2016-03-17 09:51:08', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1325, 1, '2016-03-17 09:51:10', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1326, 1, '2016-03-17 09:51:19', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1327, 1, '2016-03-17 09:56:00', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1328, 1, '2016-03-17 09:59:49', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1329, 1, '2016-03-17 09:59:52', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1330, 1, '2016-03-17 10:00:00', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1331, 1, '2016-03-17 10:00:07', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1332, 1, '2016-03-17 10:01:16', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1333, 1, '2016-03-17 10:01:18', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1334, 1, '2016-03-17 10:01:23', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1335, 1, '2016-03-17 10:01:38', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1336, 1, '2016-03-17 10:05:09', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1337, 1, '2016-03-17 10:12:09', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1338, 1, '2016-03-17 10:12:20', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1339, 1, '2016-03-17 10:15:15', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1340, 1, '2016-03-17 10:15:25', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1341, 1, '2016-03-17 10:16:20', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1342, 1, '2016-03-17 10:16:35', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1343, 1, '2016-03-17 10:16:54', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1344, 1, '2016-03-17 10:16:57', 'delete', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1345, 1, '2016-03-17 10:17:10', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1346, 1, '2016-03-17 10:19:29', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1347, 1, '2016-03-17 10:20:35', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1348, 12, '2016-03-17 10:21:31', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1349, 12, '2016-03-17 10:21:31', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1350, 12, '2016-03-17 10:21:31', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1351, 12, '2016-03-17 10:21:31', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1352, 1, '2016-03-17 10:47:55', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1353, 1, '2016-03-17 10:47:55', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1354, 12, '2016-03-17 10:59:27', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1355, 12, '2016-03-17 10:59:27', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1356, 1, '2016-03-17 11:01:15', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1357, 1, '2016-03-17 11:01:15', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1358, 1, '2016-03-17 11:01:15', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1359, 6, '2016-03-17 11:10:39', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1360, 6, '2016-03-17 11:11:17', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1361, 6, '2016-03-17 11:11:47', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1362, 3, '2016-03-17 11:12:46', 'update', 'usuario_00_01_01', '192.168.100.100'),
(1363, 3, '2016-03-17 11:12:46', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(1364, 3, '2016-03-17 11:12:46', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1365, 3, '2016-03-17 11:12:46', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1366, 3, '2016-03-17 11:12:46', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1367, 3, '2016-03-17 11:12:46', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1368, 3, '2016-03-17 11:12:46', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1369, 3, '2016-03-17 11:12:46', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1370, 3, '2016-03-17 14:49:19', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1371, 3, '2016-03-17 14:49:46', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1372, 3, '2016-03-17 14:50:26', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1373, 3, '2016-03-17 14:50:47', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1374, 3, '2016-03-17 14:50:59', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1375, 3, '2016-03-17 14:50:59', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1376, 1, '2016-03-17 15:49:59', 'create', 'evaluacion_03_00_01', '192.168.100.100'),
(1377, 1, '2016-03-17 16:36:56', 'update', 'evaluacion_03_00_01', '192.168.100.100'),
(1378, 1, '2016-03-17 16:41:20', 'update', 'evaluacion_03_00_01', '192.168.100.100'),
(1379, 1, '2016-03-17 16:42:25', 'update', 'evaluacion_03_00_01', '192.168.100.100'),
(1380, 1, '2016-03-17 17:01:52', 'create', 'evaluacion_03_00_01', '192.168.100.100'),
(1381, 1, '2016-03-17 17:10:17', 'create', 'evaluacion_03_00_01', '192.168.100.100'),
(1382, 1, '2016-03-17 17:12:20', 'delete', 'evaluacion_03_00_01', '192.168.100.100'),
(1383, 1, '2016-03-17 17:12:22', 'delete', 'evaluacion_03_00_01', '192.168.100.100'),
(1384, 1, '2016-03-17 17:12:25', 'delete', 'evaluacion_03_00_01', '192.168.100.100'),
(1385, 1, '2016-03-17 17:12:28', 'delete', 'evaluacion_03_00_01', '192.168.100.100'),
(1386, 1, '2016-03-17 17:13:12', 'create', 'evaluacion_03_00_01', '192.168.100.100'),
(1387, 1, '2016-03-17 17:13:12', 'create', 'alcance_acreditacion_lab_03_00_03', '192.168.100.100'),
(1388, 1, '2016-03-17 17:13:12', 'create', 'alcance_acreditacion_lab_03_00_03', '192.168.100.100'),
(1389, 1, '2016-03-17 17:14:19', 'create', 'evaluacion_03_00_01', '192.168.100.100'),
(1390, 1, '2016-03-17 17:14:19', 'create', 'alcance_acreditacion_lab_03_00_03', '192.168.100.100'),
(1391, 1, '2016-03-17 17:14:19', 'create', 'alcance_acreditacion_lab_03_00_03', '192.168.100.100'),
(1392, 1, '2016-03-17 17:14:19', 'create', 'alcance_acreditacion_lab_03_00_03', '192.168.100.100'),
(1393, 1, '2016-03-17 17:20:35', 'update', 'evaluacion_03_00_01', '192.168.100.100'),
(1394, 1, '2016-03-17 17:20:52', 'update', 'evaluacion_03_00_01', '192.168.100.100'),
(1395, 1, '2016-03-17 17:42:33', 'update', 'evaluacion_03_00_01', '192.168.100.100'),
(1396, 1, '2016-03-17 17:42:48', 'update', 'evaluacion_03_00_01', '192.168.100.100'),
(1397, 1, '2016-03-17 17:43:12', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1398, 1, '2016-03-17 17:43:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1399, 1, '2016-03-17 17:43:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1400, 1, '2016-03-17 17:43:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1401, 1, '2016-03-17 17:43:12', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1402, 1, '2016-03-18 16:50:35', 'create', 'supervision_evaluador_04_11_01', '192.168.100.101'),
(1403, 1, '2016-03-18 16:50:41', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(1404, 1, '2016-03-18 17:00:47', 'create', 'designacion_evaluador_04_10_01', '192.168.100.101'),
(1405, 1, '2016-03-18 17:01:07', 'create', 'prueba_participacion_04_09_01', '192.168.100.101'),
(1406, 1, '2016-03-18 17:08:06', 'update', 'peticion_accion_01_03_01', '192.168.100.101'),
(1407, 1, '2016-03-18 17:16:48', 'create', 'informe_evaluacion_04_06_01', '192.168.100.101'),
(1408, 1, '2016-03-18 17:21:19', 'create', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1409, 1, '2016-03-18 17:34:47', 'update', 'informe_evaluacion_04_06_01', '192.168.100.101'),
(1410, 1, '2016-03-18 18:54:57', 'create', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1411, 1, '2016-03-18 18:59:34', 'create', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1412, 1, '2016-03-18 18:59:34', 'create', 'aspectos_evaluados_04_08_03', '192.168.100.101'),
(1413, 1, '2016-03-18 18:59:34', 'create', 'aspectos_evaluados_04_08_03', '192.168.100.101'),
(1414, 1, '2016-03-18 18:59:34', 'create', 'equipo_eval_04_08_03', '192.168.100.101'),
(1415, 1, '2016-03-18 18:59:34', 'create', 'equipo_eval_04_08_03', '192.168.100.101'),
(1416, 1, '2016-03-18 18:59:34', 'create', 'proveedor_eval_04_08_03', '192.168.100.101'),
(1417, 1, '2016-03-18 18:59:34', 'create', 'proveedor_eval_04_08_03', '192.168.100.101'),
(1418, 1, '2016-03-18 19:04:20', 'update', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1419, 1, '2016-03-18 19:06:43', 'delete', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1420, 1, '2016-03-18 19:06:46', 'delete', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1421, 1, '2016-03-18 19:06:48', 'delete', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1422, 1, '2016-03-19 02:06:01', 'create', 'eval_tecnica_04_08_01', '192.168.100.101'),
(1423, 1, '2016-03-19 02:06:01', 'create', 'aspectos_evaluados_04_08_03', '192.168.100.101'),
(1424, 1, '2016-03-19 02:06:01', 'create', 'equipo_eval_04_08_03', '192.168.100.101'),
(1425, 1, '2016-03-19 02:06:01', 'create', 'proveedor_eval_04_08_03', '192.168.100.101'),
(1426, 1, '2016-03-19 02:06:48', 'create', 'peticion_estado_01_04_03', '192.168.100.101'),
(1427, 1, '2016-03-19 02:06:48', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(1428, 1, '2016-03-19 02:06:48', 'create', 'peticion_accion_01_03_01', '192.168.100.101'),
(1429, 1, '2016-03-20 18:08:10', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1430, 1, '2016-03-20 18:17:17', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1431, 1, '2016-03-20 18:23:15', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1432, 1, '2016-03-20 18:28:54', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1433, 1, '2016-03-20 18:29:58', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1434, 1, '2016-03-20 18:36:07', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1435, 1, '2016-03-20 18:36:16', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1436, 1, '2016-03-20 18:37:18', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1437, 1, '2016-03-20 18:42:38', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1438, 1, '2016-03-20 18:42:48', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1439, 1, '2016-03-20 18:43:49', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1440, 1, '2016-03-20 18:43:49', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1441, 1, '2016-03-20 20:10:20', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1442, 1, '2016-03-20 20:10:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1443, 1, '2016-03-20 20:10:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1444, 1, '2016-03-20 20:10:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1445, 1, '2016-03-20 20:10:28', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1446, 1, '2016-03-20 20:10:28', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1447, 1, '2016-03-20 20:10:33', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1448, 1, '2016-03-20 20:10:33', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1449, 1, '2016-03-20 20:11:30', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1450, 1, '2016-03-20 20:11:30', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1451, 1, '2016-03-20 20:12:15', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1452, 1, '2016-03-20 20:12:15', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1453, 1, '2016-03-20 20:31:46', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1454, 1, '2016-03-20 20:31:46', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1455, 1, '2016-03-20 20:39:32', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1456, 1, '2016-03-20 20:39:32', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1457, 1, '2016-03-20 20:39:32', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1458, 1, '2016-03-20 20:39:32', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1459, 1, '2016-03-20 20:40:06', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1460, 1, '2016-03-20 20:40:06', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1461, 1, '2016-03-20 20:40:06', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1462, 1, '2016-03-20 20:40:06', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1463, 1, '2016-03-20 21:14:28', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1464, 1, '2016-03-20 21:14:28', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1465, 1, '2016-03-21 01:17:38', 'create', 'anexo_convenio_04_13_01', '192.168.100.100'),
(1466, 1, '2016-03-21 01:17:38', 'create', 'personal_autorizado_04_13_03', '192.168.100.100'),
(1467, 1, '2016-03-21 01:21:46', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1468, 1, '2016-03-21 01:21:46', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1469, 1, '2016-03-21 01:26:57', 'create', 'certificado_04_14_01', '192.168.100.100'),
(1470, 1, '2016-03-21 01:27:28', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1471, 1, '2016-03-21 01:27:28', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1472, 1, '2016-03-21 01:27:28', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1473, 1, '2016-03-21 07:59:02', 'create', 'peticion_01_04_01', '192.168.100.100'),
(1474, 1, '2016-03-21 07:59:02', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1475, 1, '2016-03-21 07:59:02', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1476, 1, '2016-03-21 08:00:14', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1477, 1, '2016-03-21 08:00:14', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1478, 1, '2016-03-21 08:00:14', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1479, 1, '2016-03-21 08:00:14', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1480, 1, '2016-03-21 08:00:14', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1481, 1, '2016-03-21 08:03:13', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1482, 1, '2016-03-21 08:03:13', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1483, 1, '2016-03-21 08:03:25', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1484, 1, '2016-03-21 08:03:25', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1485, 1, '2016-03-21 08:05:28', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1486, 1, '2016-03-21 08:13:24', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1487, 1, '2016-03-21 08:15:02', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1488, 1, '2016-03-21 08:17:26', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1489, 1, '2016-03-21 08:17:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1490, 1, '2016-03-21 08:17:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1491, 1, '2016-03-21 08:17:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1492, 1, '2016-03-21 08:35:37', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1493, 1, '2016-03-21 08:35:37', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1494, 1, '2016-03-21 08:41:51', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1495, 1, '2016-03-21 08:41:51', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1496, 1, '2016-03-21 08:41:59', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1497, 1, '2016-03-21 08:42:56', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1498, 1, '2016-03-21 20:46:02', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1499, 1, '2016-03-21 20:46:02', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1500, 1, '2016-03-21 20:49:26', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1501, 1, '2016-03-21 20:49:26', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1502, 1, '2016-03-21 20:49:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1503, 1, '2016-03-21 20:49:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1504, 1, '2016-03-21 20:49:26', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1505, 1, '2016-03-21 20:50:43', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1506, 1, '2016-03-21 20:50:43', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1507, 1, '2016-03-21 20:51:08', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1508, 1, '2016-03-21 20:51:08', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1509, 1, '2016-03-21 20:52:29', 'create', 'info_ensayo_04_01_01', '192.168.100.100'),
(1510, 1, '2016-03-21 20:52:55', 'create', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1511, 1, '2016-03-21 20:53:00', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1512, 1, '2016-03-21 20:53:00', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1513, 1, '2016-03-21 20:53:10', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1514, 1, '2016-03-27 11:07:48', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1515, 1, '2016-03-27 11:07:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1516, 1, '2016-03-27 11:07:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1517, 1, '2016-03-27 11:07:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1518, 1, '2016-03-27 12:08:44', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1519, 1, '2016-03-27 12:08:44', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1520, 1, '2016-03-27 12:08:49', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1521, 1, '2016-03-27 12:08:49', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1522, 1, '2016-03-27 12:09:10', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1523, 1, '2016-03-27 12:09:10', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1524, 1, '2016-03-27 12:51:17', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1525, 1, '2016-03-27 12:51:17', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1526, 1, '2016-03-27 12:51:17', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1527, 1, '2016-03-27 12:52:37', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1528, 1, '2016-03-27 12:52:43', 'create', 'equipo_peticion_01_07_01', '192.168.100.100'),
(1529, 1, '2016-03-27 12:52:48', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1530, 12, '2016-03-27 12:54:56', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1531, 12, '2016-03-27 12:54:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1532, 12, '2016-03-27 12:54:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1533, 12, '2016-03-27 12:54:56', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1534, 1, '2016-03-27 13:17:07', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1535, 1, '2016-03-27 13:17:07', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1536, 12, '2016-03-27 13:17:30', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1537, 12, '2016-03-27 13:17:30', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1538, 1, '2016-03-27 13:18:33', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1539, 1, '2016-03-27 13:18:33', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1540, 1, '2016-03-27 13:18:33', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1541, 1, '2016-03-27 13:26:19', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1542, 1, '2016-03-27 13:26:19', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1543, 2, '2016-03-27 13:26:58', 'update', 'usuario_00_01_01', '192.168.100.100'),
(1544, 2, '2016-03-27 13:26:58', 'update', 'usuario_tipo_usuario_00_01_02', '192.168.100.100'),
(1545, 2, '2016-03-27 13:26:58', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1546, 2, '2016-03-27 13:26:58', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1547, 2, '2016-03-27 13:26:58', 'update', 'usuario_proceso_00_01_02', '192.168.100.100'),
(1548, 2, '2016-03-27 13:26:58', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1549, 2, '2016-03-27 13:26:58', 'update', 'usuario_oec_00_01_02', '192.168.100.100'),
(1550, 1, '2016-03-27 13:31:17', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1551, 1, '2016-03-27 13:31:17', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1552, 1, '2016-03-27 13:42:26', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1553, 1, '2016-03-27 13:55:05', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1554, 2, '2016-03-27 13:55:44', 'create', 'obs_peticion_accion_01_03_03', '192.168.100.100'),
(1555, 2, '2016-03-27 13:55:44', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1556, 1, '2016-03-27 13:57:19', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1557, 1, '2016-03-27 13:57:27', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1558, 1, '2016-03-27 13:57:27', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1559, 1, '2016-03-27 14:07:47', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1560, 1, '2016-03-27 14:07:47', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1561, 1, '2016-03-27 14:07:47', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1562, 1, '2016-03-27 14:07:47', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1563, 1, '2016-03-27 14:13:34', 'create', 'designacion_evaluador_04_10_01', '192.168.100.100'),
(1564, 1, '2016-03-27 14:22:50', 'create', 'prueba_participacion_04_09_01', '192.168.100.100'),
(1565, 1, '2016-03-27 14:26:31', 'create', 'informe_evaluacion_04_06_01', '192.168.100.100'),
(1566, 1, '2016-03-27 14:37:04', 'create', 'eval_tecnica_04_08_01', '192.168.100.100'),
(1567, 1, '2016-03-27 14:37:04', 'create', 'aspectos_evaluados_04_08_03', '192.168.100.100'),
(1568, 1, '2016-03-27 14:37:04', 'create', 'equipo_eval_04_08_03', '192.168.100.100'),
(1569, 1, '2016-03-27 14:37:04', 'create', 'proveedor_eval_04_08_03', '192.168.100.100'),
(1570, 1, '2016-03-27 16:26:42', 'create', 'supervision_evaluador_04_11_01', '192.168.100.100'),
(1571, 1, '2016-03-27 22:32:16', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1572, 1, '2016-03-27 22:32:19', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1573, 1, '2016-03-27 22:32:20', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1574, 1, '2016-03-27 22:32:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1575, 1, '2016-03-27 22:32:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1576, 1, '2016-03-27 22:32:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1577, 1, '2016-03-27 22:32:20', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1578, 1, '2016-03-27 22:44:30', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1579, 1, '2016-03-27 22:44:38', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1580, 1, '2016-03-27 22:44:54', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1581, 1, '2016-03-27 23:02:31', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1582, 1, '2016-03-27 23:02:37', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1583, 1, '2016-03-27 23:02:56', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1584, 1, '2016-03-27 23:03:03', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1585, 1, '2016-03-27 23:03:03', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1586, 1, '2016-03-27 23:04:39', 'create', 'informe_acred_04_13_01', '192.168.100.100'),
(1587, 1, '2016-03-27 23:04:47', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1588, 1, '2016-03-27 23:04:47', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1589, 1, '2016-03-27 23:04:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1590, 1, '2016-03-27 23:04:48', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1591, 1, '2016-03-27 23:18:05', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1592, 1, '2016-03-27 23:18:05', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1593, 1, '2016-03-27 23:18:55', 'update', 'peticion_01_04_01', '192.168.100.100'),
(1594, 1, '2016-03-27 23:18:55', 'update', 'detalle_equipos_04_02_01', '192.168.100.100'),
(1595, 1, '2016-03-27 23:56:12', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1596, 1, '2016-03-28 00:19:23', 'create', 'peticion_archivo_01_04_01', '192.168.100.100'),
(1597, 1, '2016-03-28 00:19:23', 'update', 'peticion_accion_01_03_01', '192.168.100.100'),
(1598, 1, '2016-03-28 00:19:36', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1599, 1, '2016-03-28 00:19:36', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1600, 1, '2016-03-28 01:37:25', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1601, 1, '2016-03-28 01:37:25', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1602, 1, '2016-03-30 09:08:58', 'create', 'certificado_04_14_01', '192.168.100.100'),
(1603, 1, '2016-03-30 10:50:35', 'create', 'anexo_convenio_04_13_01', '192.168.100.100'),
(1604, 1, '2016-03-30 10:50:35', 'create', 'personal_autorizado_04_13_03', '192.168.100.100'),
(1605, 1, '2016-03-30 10:50:35', 'create', 'personal_autorizado_04_13_03', '192.168.100.100'),
(1606, 1, '2016-03-30 11:17:33', 'create', 'peticion_estado_01_04_03', '192.168.100.100'),
(1607, 1, '2016-03-30 11:17:33', 'create', 'peticion_accion_01_03_01', '192.168.100.100'),
(1608, 1, '2016-03-30 11:17:33', 'create', 'peticion_accion_01_03_01', '192.168.100.100');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `no_conformidad_04_07_01`
--

INSERT INTO `no_conformidad_04_07_01` (`id_no_conformidad`, `fk_id_peticion`, `objetivo_no_conformidad`, `numero_no_conformidad`, `nombre_persona_no_conformidad`, `fecha_no_conformidad`, `ref_norma_no_conformidad`, `ref_requisito_no_conformidad`, `no_conformidad`, `evidencia_no_conformidad`, `representate_oec_no_conformidad`, `representate_oec_cargo_no_conformidad`, `fecha_creacion_no_conformidad`) VALUES
(2, 26, 'acreditacion_inicial', 'adsf', 'asdf', '2016-03-11', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', '2016-03-11 10:50:01');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=52 ;

--
-- Dumping data for table `obs_peticion_accion_01_03_03`
--

INSERT INTO `obs_peticion_accion_01_03_03` (`id_obs_peticion_accion`, `fk_id_accion`, `fk_id_peticion`, `fk_id_usuario`, `obs_peticion_accion`, `procede_obs_peticion_accion`, `fecha_hora_obs_peticion_accion`) VALUES
(25, 6, 26, 13, 'Aprobación de Paso (Automático)', 1, '2016-03-10 09:47:54'),
(26, 6, 26, 6, 'Aprobación de Paso (Automático)', 1, '2016-03-10 09:50:49'),
(31, 6, 26, 14, 'Aprobación de Paso (Automático)', 1, '2016-03-10 10:23:41'),
(32, 25, 26, 9, 'Aprobación de Paso (Automático)', 1, '2016-03-10 16:24:04'),
(33, 25, 26, 5, 'Aprobación de Paso (Automático)', 1, '2016-03-10 16:31:04'),
(34, 39, 26, 6, 'Aprobación de Paso (Automático)', 1, '2016-03-11 17:54:25'),
(35, 39, 26, 13, 'Aprobación de Paso (Automático)', 1, '2016-03-11 17:57:13'),
(36, 39, 26, 14, 'Aprobación de Paso (Automático)', 1, '2016-03-11 17:59:53'),
(37, 6, 28, 6, 'Aprobación de Paso (Automático)', 1, '2016-03-16 15:14:38'),
(38, 6, 28, 13, 'Aprobación de Paso (Automático)', 1, '2016-03-16 15:15:44'),
(39, 6, 28, 14, 'Aprobación de Paso (Automático)', 1, '2016-03-16 15:16:49'),
(40, 25, 28, 6, 'asdfadsf', 0, '2016-03-17 11:10:39'),
(41, 25, 28, 6, 'Aprobación de Paso (Automático)', 1, '2016-03-17 11:11:17'),
(42, 25, 28, 3, 'Aprobación de Paso (Automático)', 1, '2016-03-17 14:49:19'),
(43, 195, 28, 1, 'asfasdf', 1, '2016-03-20 18:36:16'),
(44, 33, 28, 1, 'dsfadsf', 0, '2016-03-20 18:42:48'),
(45, 4, 29, 1, 'primera prueba', 0, '2016-03-21 08:05:28'),
(46, 5, 29, 1, 'prueba 2', 0, '2016-03-21 08:15:02'),
(50, 25, 29, 1, 'Aprobación de Paso (Automático)', 1, '2016-03-27 13:55:05'),
(51, 25, 29, 2, 'Aprobación de Paso (Automático)', 1, '2016-03-27 13:55:44');

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
  `empresa_publica_oec` tinyint(1) NOT NULL,
  `fecha_creacion_oec` datetime DEFAULT NULL,
  `zona_oec` set('urbano','rural') NOT NULL,
  PRIMARY KEY (`id_oec`),
  UNIQUE KEY `nombre_oec_UNIQUE` (`nombre_oec`),
  UNIQUE KEY `nit_oec_UNIQUE` (`nit_oec`),
  KEY `fk_oec_norma_referencia1_idx` (`fk_id_norma_referencia`),
  KEY `fk_oec_oec_tipo1_idx` (`fk_id_oec_tipo`),
  KEY `fk_oec_pais1_idx` (`fk_id_pais`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `oec_02_00_01`
--

INSERT INTO `oec_02_00_01` (`id_oec`, `fk_id_oec_tipo`, `fk_id_pais`, `fk_id_norma_referencia`, `nombre_oec`, `nit_oec`, `direccion_oec`, `ciudad_oec`, `departamento_oec`, `telefono1_oec`, `telefono2_oec`, `celular_oec`, `fax_oec`, `email1_oec`, `email2_oec`, `empresa_publica_oec`, `fecha_creacion_oec`, `zona_oec`) VALUES
(1, 1, 1, 1, 'INTI', 'valorxx', 'valorxx', 'valorxx', 'valorxx', 'valorxx', '222222', 'valorxx', 'valorxx', 'valorxx', '', 0, '2015-01-01 00:00:00', 'urbano'),
(2, 2, 1, 1, 'fede', '2343242', 'adsfasdfasf', 'La Paz', 'La Paz', '413241324', '1324132', '1234124', '341234', 'adsfa@adsfl.com', 'adsfa@adsfl.com', 1, '2016-01-25 09:12:52', 'urbano'),
(3, 1, 1, 1, 'Catequil Soluciones SRL', '13241234', 'prueba22255566611111', 'El Alto', 'La Paz', '3151651651611', '6516516518888', '651651651', '651651651', 'fpenaranda@catequil.com.bo', 'asdfad2@fasdf.col', 1, '2016-02-01 19:05:56', 'rural');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `oec_acreditacion_solicitada_02_00_03`
--

INSERT INTO `oec_acreditacion_solicitada_02_00_03` (`id_oec_acreditacion_solicitada`, `fk_id_oec`, `inspeccion_oec_acreditacion_solicitada`, `especificaciones_oec_acreditacion_solicitada`) VALUES
(1, 1, 'asdf', 'adsf'),
(2, 2, 'adsf', 'asdf'),
(3, 3, 'adsf', 'adsf'),
(4, 3, 'adsf222', 'asdadsaddd22'),
(5, 3, '5g5g5g', '5g5g5gg5'),
(6, 3, 'asedf', 'wefaqefw'),
(7, 3, 'sdf', 'sdfgsdf'),
(8, 3, 'adsf', 'asdf');

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

INSERT INTO `oec_actividad_02_00_02` (`fk_id_actividad_economica`, `fk_id_oec`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 3),
(4, 3),
(6, 3),
(10, 3);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `oec_contacto_02_00_03`
--

INSERT INTO `oec_contacto_02_00_03` (`id_oec_contacto`, `fk_id_oec`, `fk_id_oec_titulo`, `primer_nombre_oec_contacto`, `segundo_nombre_oec_contacto`, `apellido_paterno_oec_contacto`, `apellido_materno_oec_contacto`, `cargo_oec_contacto`, `email_oec_contacto`, `celular_oec_contacto`, `telefono_oec_contacto`, `representante_legal_oec_contacto`) VALUES
(1, 1, 1, 'Federico', '', 'Pe\\u00f1aranda', '', 'Gerente', 'fpenaranda@ibmetro.gob.bo', '', '24242', 1),
(2, 2, 1, 'adsf', 'asdf', 'asdf', 'asdf', 'adsf', '122132', 'asdf', 'asdf', 1),
(3, 3, 1, 'Federico', 'Guillermo', 'Pe\\u00f1aranda', 'Nervi', 'Gerente', 'fpenaranda@catequil.com.bo', '5675765', '67657657', 1),
(4, 1, 1, 'dfasdf', 'asdf', 'asdf', 'asdf', 'asdfasd', 'asdfasd@Ssd.cc', '234324', 'adsfadsf', 1),
(5, 3, 1, 'asdf', 'asdf', 'wefw2', 'fwefw', 'wefwef', 'fwfewfwe@asdf.cc', '123213', '12321321', 0),
(6, 3, 1, 'sdfgs', 'fs', 'gsdf', 'gsdfg', 'sdfg', 'zdsf@adsfc.com', '234234', '234342', 0),
(7, 3, 4, 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', '23', 'asdf', 1);

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
-- Table structure for table `participantes_curso_05_01_03`
--

CREATE TABLE IF NOT EXISTS `participantes_curso_05_01_03` (
  `id_participantes_curso` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `fk_id_actividad` int(11) NOT NULL,
  `primer_nombre_participantes_curso` varchar(200) NOT NULL COMMENT 'display',
  `segundo_nombre_participantes_curso` varchar(200) DEFAULT NULL,
  `apellido_paterno_participantes_curso` varchar(200) NOT NULL,
  `apellido_materno_participantes_curso` varchar(200) DEFAULT NULL,
  `estado_participantes_curso` set('inscrito','deserto','finalizo') DEFAULT NULL,
  PRIMARY KEY (`id_participantes_curso`),
  KEY `fk_participantes_curso_actividad_05_01_011_idx` (`fk_id_actividad`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `personal_autorizado_04_13_03`
--

INSERT INTO `personal_autorizado_04_13_03` (`id_personal_autorizado`, `fk_id_anexo_convenio`, `ensayista_personal_autorizado`, `ensayo_personal_autorizado`) VALUES
(2, 2, 'asdf', 'asdf'),
(3, 3, 'asdf', 'adsf'),
(4, 4, 'asdf1', 'asdf1'),
(5, 4, 'asdf2', 'asdfads2');

-- --------------------------------------------------------

--
-- Table structure for table `peticion_01_04_01`
--

CREATE TABLE IF NOT EXISTS `peticion_01_04_01` (
  `id_peticion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'proceso',
  `fk_id_proceso` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL COMMENT 'login',
  `fk_id_oec` int(11) NOT NULL,
  `fk_id_codigo_peticion` int(11) DEFAULT NULL,
  `titulo_peticion` varchar(45) DEFAULT NULL COMMENT 'display',
  `fechahora_peticion` datetime DEFAULT NULL,
  `descripcion_peticion` text,
  `codigo_acreditacion_peticion` varchar(25) DEFAULT NULL COMMENT 'search',
  `fecha_creacion_peticion` datetime DEFAULT NULL,
  `necesidad_comite_peticion` tinyint(1) DEFAULT NULL,
  `estado_peticion` tinyint(1) NOT NULL,
  `codigo_temporal` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_peticion`),
  KEY `fk_peticion_proceso1_idx` (`fk_id_proceso`),
  KEY `fk_peticion_usuario_00_01_011_idx` (`fk_id_usuario`),
  KEY `fk_peticion_oec1_idx` (`fk_id_oec`),
  KEY `fk_peticion_01_04_01_codigo_peticion1_idx` (`fk_id_codigo_peticion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `peticion_01_04_01`
--

INSERT INTO `peticion_01_04_01` (`id_peticion`, `fk_id_proceso`, `fk_id_usuario`, `fk_id_oec`, `fk_id_codigo_peticion`, `titulo_peticion`, `fechahora_peticion`, `descripcion_peticion`, `codigo_acreditacion_peticion`, `fecha_creacion_peticion`, `necesidad_comite_peticion`, `estado_peticion`, `codigo_temporal`) VALUES
(26, 1, 1, 3, 1, '467', NULL, '', '', '2016-03-02 16:09:02', 1, 1, 'tt4t4t4t4t55'),
(27, 1, 1, 1, 1, '134132', NULL, '', '', '2016-03-14 09:36:52', NULL, 1, '23423'),
(28, 1, 1, 3, 1, '2017', NULL, '', '', '2016-03-16 09:42:15', 1, 1, '010101'),
(29, 1, 1, 3, 1, 'prueba final', NULL, '', '', '2016-03-21 07:59:02', NULL, 1, 'FINAL-001');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=273 ;

--
-- Dumping data for table `peticion_accion_01_03_01`
--

INSERT INTO `peticion_accion_01_03_01` (`id_peticion_accion`, `fk_id_peticion`, `fk_id_accion`, `fk_id_transicion`, `fk_id_usuario`, `completa_peticion_accion`, `activa_peticion_accion`, `observacion_peticion_accion`, `fecha_creacion_peticion_accion`) VALUES
(136, 26, 1, 1, 1, 1, 0, '', '2016-03-02 16:09:02'),
(137, 26, 2, 2, 1, 0, 1, '', '2016-03-02 16:31:36'),
(138, 26, 3, 2, 1, 0, 1, '', '2016-03-02 16:31:36'),
(139, 26, 4, 2, 1, 0, 1, '', '2016-03-02 16:31:36'),
(140, 26, 5, 2, 1, 0, 1, '', '2016-03-02 16:31:36'),
(141, 26, 6, 3, 14, 1, 0, '', '2016-03-02 16:32:12'),
(142, 26, 7, 3, 1, 1, 0, '', '2016-03-02 16:32:12'),
(143, 26, 46, 3, 1, 1, 0, '', '2016-03-02 16:32:12'),
(148, 26, 8, 4, 1, 1, 0, '', '2016-03-10 10:33:01'),
(149, 26, 9, 4, 12, 1, 0, '', '2016-03-10 10:33:01'),
(150, 26, 10, 4, 1, 1, 0, '', '2016-03-10 10:33:01'),
(151, 26, 12, 5, 12, 1, 0, '', '2016-03-10 10:35:24'),
(152, 26, 13, 6, 1, 0, 1, '', '2016-03-10 10:37:19'),
(156, 26, 14, 7, 1, 1, 0, '', '2016-03-10 12:00:50'),
(157, 26, 15, 7, 12, 1, 0, '', '2016-03-10 12:00:50'),
(158, 26, 16, 7, 1, 1, 0, '', '2016-03-10 12:00:50'),
(159, 26, 18, 8, 1, 1, 0, '', '2016-03-10 12:04:04'),
(160, 26, 19, 9, 1, 1, 0, '', '2016-03-10 12:04:48'),
(161, 26, 20, 9, 12, 1, 0, '', '2016-03-10 12:04:48'),
(162, 26, 21, 10, 1, 1, 0, '', '2016-03-10 15:49:07'),
(163, 26, 22, 10, 12, 1, 0, '', '2016-03-10 15:49:07'),
(164, 26, 23, 10, 1, 1, 0, '', '2016-03-10 15:49:07'),
(165, 26, 25, 11, 9, 1, 0, '', '2016-03-10 16:00:04'),
(166, 26, 26, 11, 5, 1, 0, '', '2016-03-10 16:00:04'),
(167, 26, 27, 12, 1, 0, 1, '', '2016-03-10 16:32:07'),
(168, 26, 28, 13, 1, 1, 0, '', '2016-03-10 19:48:03'),
(169, 26, 29, 13, 1, 1, 0, '', '2016-03-10 19:48:03'),
(170, 26, 30, 13, 1, 1, 0, '', '2016-03-10 19:48:03'),
(171, 26, 31, 13, 1, 1, 0, '', '2016-03-10 19:48:03'),
(172, 26, 32, 14, 1, 1, 0, '', '2016-03-11 10:53:05'),
(173, 26, 33, 14, 1, 1, 0, '', '2016-03-11 10:53:05'),
(174, 26, 34, 15, 1, 1, 0, '', '2016-03-11 15:57:41'),
(178, 26, 35, 16, 1, 1, 0, '', '2016-03-11 17:06:48'),
(179, 26, 36, 16, 1, 1, 0, '', '2016-03-11 17:06:48'),
(180, 26, 45, 16, 5, 1, 0, '', '2016-03-11 17:06:48'),
(181, 26, 37, 17, 1, 1, 0, '', '2016-03-11 17:37:31'),
(182, 26, 38, 18, 1, 1, 0, '', '2016-03-11 17:49:49'),
(183, 26, 39, 19, 14, 1, 0, '', '2016-03-11 17:52:07'),
(184, 26, 40, 19, 1, 1, 0, '', '2016-03-11 17:52:07'),
(185, 26, 41, 20, 1, 1, 0, '', '2016-03-14 06:12:26'),
(186, 26, 42, 20, 1, 1, 0, '', '2016-03-14 06:12:26'),
(187, 26, 43, 20, 1, 1, 0, '', '2016-03-14 06:12:26'),
(188, 27, 1, 1, NULL, 0, 1, '', '2016-03-14 09:36:52'),
(189, 28, 1, 1, 1, 1, 0, '', '2016-03-16 09:42:15'),
(190, 28, 2, 2, 1, 0, 1, '', '2016-03-16 09:45:18'),
(191, 28, 3, 2, 1, 0, 1, '', '2016-03-16 09:45:18'),
(192, 28, 4, 2, 1, 0, 1, '', '2016-03-16 09:45:18'),
(193, 28, 5, 2, 1, 0, 1, '', '2016-03-16 09:45:18'),
(194, 28, 6, 3, 14, 1, 0, '', '2016-03-16 09:45:56'),
(195, 28, 7, 3, 1, 1, 0, '', '2016-03-16 09:45:56'),
(196, 28, 46, 3, 1, 1, 0, '', '2016-03-16 09:45:56'),
(197, 28, 8, 4, 1, 1, 0, '', '2016-03-16 15:17:40'),
(198, 28, 9, 4, 1, 1, 0, '', '2016-03-16 15:17:40'),
(199, 28, 10, 4, 1, 1, 0, '', '2016-03-16 15:17:40'),
(200, 28, 12, 5, 1, 1, 0, '', '2016-03-16 16:06:28'),
(201, 28, 13, 6, 1, 1, 0, '', '2016-03-16 16:44:20'),
(202, 28, 14, 7, 1, 1, 0, '', '2016-03-16 17:53:31'),
(203, 28, 15, 7, 12, 1, 0, '', '2016-03-16 17:53:31'),
(204, 28, 16, 7, 1, 1, 0, '', '2016-03-16 17:53:31'),
(205, 28, 18, 8, 1, 1, 0, '', '2016-03-16 18:28:13'),
(206, 28, 19, 9, 1, 1, 0, '', '2016-03-16 18:38:16'),
(207, 28, 20, 9, 12, 1, 0, '', '2016-03-16 18:38:16'),
(208, 28, 21, 10, 1, 1, 0, '', '2016-03-17 10:21:31'),
(209, 28, 22, 10, 12, 1, 0, '', '2016-03-17 10:21:31'),
(210, 28, 23, 10, 1, 1, 0, '', '2016-03-17 10:21:31'),
(211, 28, 25, 11, 3, 1, 0, '', '2016-03-17 11:01:15'),
(212, 28, 26, 11, 3, 1, 0, '', '2016-03-17 11:01:15'),
(213, 28, 27, 12, 1, 0, 1, '', '2016-03-17 14:50:59'),
(214, 28, 28, 13, 1, 1, 0, '', '2016-03-17 17:43:12'),
(215, 28, 29, 13, 1, 1, 0, '', '2016-03-17 17:43:12'),
(216, 28, 30, 13, 1, 1, 0, '', '2016-03-17 17:43:12'),
(218, 28, 32, 14, 1, 1, 0, '', '2016-03-19 02:06:48'),
(219, 28, 33, 14, 1, 1, 0, '', '2016-03-19 02:06:48'),
(220, 28, 189, 14, 1, 1, 0, '', '2016-03-20 11:38:57'),
(221, 28, 195, 14, 1, 1, 0, '', '2016-03-20 11:39:16'),
(222, 28, 34, 15, 1, 1, 0, '', '2016-03-20 18:43:49'),
(226, 28, 35, 16, 1, 1, 0, '', '2016-03-20 20:39:32'),
(227, 28, 36, 16, 1, 1, 0, '', '2016-03-20 20:39:32'),
(228, 28, 45, 16, 1, 1, 0, '', '2016-03-20 20:39:32'),
(229, 28, 37, 17, 1, 1, 0, '', '2016-03-20 20:40:06'),
(230, 28, 38, 18, 1, 1, 0, '', '2016-03-21 01:21:46'),
(231, 28, 39, 19, NULL, 0, 1, '', '2016-03-21 01:27:28'),
(232, 28, 40, 19, NULL, 0, 1, '', '2016-03-21 01:27:28'),
(233, 29, 1, 1, 1, 1, 0, '', '2016-03-21 07:59:02'),
(234, 29, 2, 2, 1, 1, 0, '', '2016-03-21 08:00:14'),
(235, 29, 3, 2, 1, 1, 0, '', '2016-03-21 08:00:14'),
(236, 29, 4, 2, 1, 1, 0, '', '2016-03-21 08:00:14'),
(237, 29, 5, 2, 1, 1, 0, '', '2016-03-21 08:00:14'),
(238, 29, 6, 3, 1, 1, 0, '', '2016-03-21 08:17:26'),
(239, 29, 7, 3, 1, 1, 0, '', '2016-03-21 08:17:26'),
(240, 29, 46, 3, 1, 1, 0, '', '2016-03-21 08:17:26'),
(241, 29, 8, 4, 1, 1, 0, '', '2016-03-21 20:49:26'),
(242, 29, 9, 4, 1, 1, 0, '', '2016-03-21 20:49:26'),
(243, 29, 10, 4, 1, 1, 0, '', '2016-03-21 20:49:26'),
(244, 29, 12, 5, 1, 1, 0, '', '2016-03-21 20:51:08'),
(245, 29, 13, 6, 1, 1, 0, '', '2016-03-21 20:53:00'),
(246, 29, 14, 7, 1, 1, 0, '', '2016-03-27 11:07:48'),
(247, 29, 15, 7, 1, 1, 0, '', '2016-03-27 11:07:48'),
(248, 29, 16, 7, 1, 1, 0, '', '2016-03-27 11:07:48'),
(249, 29, 18, 8, 1, 1, 0, '', '2016-03-27 12:09:10'),
(250, 29, 19, 9, 1, 1, 0, '', '2016-03-27 12:51:17'),
(251, 29, 20, 9, 12, 1, 0, '', '2016-03-27 12:51:17'),
(252, 29, 21, 10, 1, 1, 0, '', '2016-03-27 12:54:56'),
(253, 29, 22, 10, 12, 1, 0, '', '2016-03-27 12:54:56'),
(254, 29, 23, 10, 1, 1, 0, '', '2016-03-27 12:54:56'),
(255, 29, 25, 11, 2, 1, 0, '', '2016-03-27 13:18:33'),
(256, 29, 26, 11, 1, 1, 0, '', '2016-03-27 13:18:33'),
(257, 29, 27, 12, 1, 1, 0, '', '2016-03-27 13:57:27'),
(258, 29, 28, 13, 1, 1, 0, '', '2016-03-27 14:07:47'),
(259, 29, 29, 13, 1, 1, 0, '', '2016-03-27 14:07:47'),
(260, 29, 30, 13, 1, 1, 0, '', '2016-03-27 14:07:47'),
(261, 29, 32, 14, 1, 1, 0, '', '2016-03-27 22:32:20'),
(262, 29, 33, 14, 1, 1, 0, '', '2016-03-27 22:32:20'),
(263, 29, 189, 14, 1, 1, 0, '', '2016-03-27 22:32:20'),
(264, 29, 195, 14, 1, 1, 0, '', '2016-03-27 22:32:20'),
(265, 29, 34, 15, 1, 1, 0, '', '2016-03-27 23:03:03'),
(266, 29, 35, 16, 1, 1, 0, '', '2016-03-27 23:04:48'),
(267, 29, 36, 16, 1, 1, 0, '', '2016-03-27 23:04:48'),
(268, 29, 45, 16, 1, 1, 0, '', '2016-03-27 23:04:48'),
(269, 29, 37, 17, 1, 1, 0, '', '2016-03-28 00:19:36'),
(270, 29, 38, 18, 1, 1, 0, '', '2016-03-28 01:37:25'),
(271, 29, 39, 19, NULL, 0, 1, '', '2016-03-30 11:17:33'),
(272, 29, 40, 19, NULL, 0, 1, '', '2016-03-30 11:17:33');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=139 ;

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
(38, 38, 26, NULL, 'bf03f5a0e16b1d4e7a749038b722e526.pdf', NULL, 1, 'finaliza-oec-carga-archivos-adicionales', NULL, 'c', 1, NULL, '2016-01-11 07:28:53'),
(39, 8, 13, 1, 'c2eb29ce85b8832812f3731eaf92921a.sql', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-01-11 13:32:11'),
(40, 33, 13, 1, 'd68ea4ea377e1cb21ea48f5bf11f940f.docx', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-01-11 13:32:35'),
(41, 33, 13, 1, '04fe5b3f5a968458cb67371916f1569e.sql', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-01-11 13:53:24'),
(42, 53, 2, NULL, '77c67f5664e9b8b6da779dd972663439.sql', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-02-25 06:21:15'),
(43, 53, 3, NULL, 'b058d7a3ab5325c2341bb111b9c3e1b6.txt', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-02-25 06:24:22'),
(44, 54, 46, NULL, '2891705ef065fcd1ddb176b19ecb3c78.txt', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-02-25 06:30:08'),
(45, 54, 7, NULL, '9fd987a7f0d770e8bcd17f710c12f8a8.txt', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-02-25 07:59:47'),
(46, 55, 8, NULL, '5af005e06246f32e6f88c7fd82448e92.csv', NULL, 1, 'carga-cotizacion-apertura-expediente', NULL, 'c', 0, NULL, '2016-02-25 08:00:13'),
(47, 55, 9, NULL, '8ec6b1077a9b41a96c7138bbc0bd40b9.csv', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2016-02-25 08:01:22'),
(48, 57, 13, 1, '4d7f515385f5a74d1483e118e5ad319f.sql', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-02-25 08:04:01'),
(49, 57, 13, 2, 'aa46702bd4ef0fee5fdb9a115bcf6132.sql', NULL, 1, 'termina-carga-archivos-base', NULL, 'c', 0, NULL, '2016-02-25 08:04:13'),
(50, 58, 14, NULL, 'a2f977b49e61a41be347646fa54f23a3.txt', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2016-02-25 08:04:41'),
(51, 58, 15, NULL, 'c0f71d7b6e81f0805d4a88a3f12dcc30.sql', NULL, 1, 'carga-factura-revision-documental', NULL, 'c', 0, NULL, '2016-02-25 08:05:02'),
(52, 61, 21, NULL, '056b677bb370143354273ee7919c3187.txt', NULL, 1, 'carga-cotizacion-evaluacion', NULL, 'c', 0, NULL, '2016-02-25 08:40:53'),
(53, 61, 22, NULL, 'ba71b5bfb04b2404217ee6391285aca9.sql', NULL, 1, 'carga-factura-evaluacion', NULL, 'c', 0, NULL, '2016-02-25 08:41:09'),
(54, 65, 2, NULL, '867a040b28f0bd567403fe78f9a245b6.csv', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-02-25 22:32:04'),
(55, 65, 3, NULL, 'bf8e45bdf6fad40c42bdf6d78b0dd5ee.csv', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-02-25 22:33:39'),
(56, 66, 46, NULL, '722c9a528188530e84fb49e610fa5fbb.csv', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-02-25 22:34:42'),
(57, 66, 7, NULL, '60e3f3d63cb8ba69fe67abb7cbc17336.sql', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-02-25 23:09:05'),
(58, 66, 7, NULL, '4f416965c2935f4eaff2aff09c648391.sql', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-02-26 07:25:58'),
(59, 66, 7, NULL, 'cdcf58cb7115794c67cf02f892ab3ef2.sql', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-02-27 14:39:37'),
(60, 66, 7, NULL, 'aa468212869dd3b7d438b36a39aec377.sql', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-02-27 14:50:20'),
(61, 66, 7, NULL, '061d68ccaf0d873cca3436cc7a2a40a9.txt', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-02-28 17:14:00'),
(62, 65, 3, NULL, 'c305eba9fbb6db24cb416ee66572ce82.txt', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-02-28 17:23:54'),
(63, 65, 3, NULL, 'abc9afb20058ac998b47dabf2ca8404b.txt', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-02-28 17:24:36'),
(64, 75, 2, NULL, '113143d14966bb7765374a2f8255db15.txt', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-02 16:31:59'),
(65, 75, 3, NULL, 'e5350e3556908e112b32eedeba4cd599.txt', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-02 16:32:05'),
(66, 76, 46, NULL, 'e6d2584e0c2e639d8f932d1dfea978cb.txt', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-03-02 17:18:39'),
(67, 76, 46, NULL, '8d0d4c06ef654fc0ae6cb558da54ec6b.txt', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-03-09 23:23:31'),
(68, 76, 7, NULL, '51619aedf3586950427a5c5cf790842e.xlsx', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-03-10 10:33:01'),
(69, 78, 8, NULL, '20070a3a92f3779c62ca049fb212def5.xlsx', NULL, 1, 'carga-cotizacion-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-10 10:33:52'),
(70, 78, 9, NULL, '36b83b3c36913d7585926c4ff88aba27.jpg', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-10 10:35:11'),
(75, 80, 13, 1, 'fcaccebe37ccc7f574d77e26af05cc29.jpg', NULL, 1, 'adsfasdf', NULL, 'c', 0, NULL, '2016-03-10 11:12:34'),
(77, 82, 14, NULL, '0a4b2c86aaf44d0b20f39512cbd5fb8b.jpg', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2016-03-10 12:03:16'),
(78, 82, 15, NULL, 'ed3b634260ca435d0c0457e6e1da073d.jpg', NULL, 1, 'carga-factura-revision-documental', NULL, 'c', 0, NULL, '2016-03-10 12:03:54'),
(79, 85, 21, NULL, 'e0f1b20662160d52db336f0b33dca0a8.txt', NULL, 1, 'carga-cotizacion-evaluacion', NULL, 'c', 0, NULL, '2016-03-10 15:59:18'),
(80, 85, 22, NULL, '71224e78a60edbeaa9758aecfb9c2da0.txt', NULL, 1, 'carga-factura-evaluacion', NULL, 'c', 0, NULL, '2016-03-10 15:59:52'),
(81, 86, 26, NULL, 'd108847bbc0989def23b0b966554ece7.jpg', NULL, 1, 'sadf', NULL, 'c', 1, NULL, '2016-03-10 16:31:57'),
(83, 89, 32, 8, '3320fc4ad58c68c2884f64e06f664575.jpg', NULL, 1, 'adsfads', NULL, 'c', 0, NULL, '2016-03-11 11:44:16'),
(84, 91, 36, NULL, '49d40261f46cdff3f43681047b8a7aaa.jpg', NULL, 1, 'carga-acta-comite-tecnico', NULL, 'c', 0, NULL, '2016-03-11 17:36:19'),
(85, 94, 40, NULL, 'b8d0c432e68c27b09004b413a07b9382.txt', NULL, 1, 'cargar-acta-consejo', NULL, 'c', 0, NULL, '2016-03-14 06:12:26'),
(86, 95, 41, NULL, 'c326666cbca661e6256f7ccf080494c1.txt', NULL, 1, 'carga-cotizacion-concesion-mantenimiento', NULL, 'c', 0, NULL, '2016-03-14 06:13:12'),
(87, 95, 42, NULL, '5d7b823f624a9cf99d25ac327bf1feb0.txt', NULL, 1, 'carga-factura-concesion-mantenimiento', NULL, 'c', 0, NULL, '2016-03-14 06:13:17'),
(88, 99, 2, NULL, 'e5858619f0b5934da72f3efd165885de.xcf', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-16 09:45:48'),
(89, 99, 3, NULL, '250006c1f3be6bf3d25a8108c4e91354.xcf', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-16 09:45:52'),
(90, 100, 46, NULL, '1875a3401fc8f8a0fd59c39e690428d8.txt', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-03-16 11:26:50'),
(91, 100, 46, NULL, '1bee2ace8a765a17e3bb11d4645d93d1.jpg', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-03-16 12:05:36'),
(92, 100, 46, NULL, '892b5e52f5554c67ed62aef803267767.txt', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-03-16 12:08:15'),
(93, 100, 7, NULL, '2a6748c138e2edadf7c88c1d911bfd8c.txt', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-03-16 15:17:39'),
(94, 101, 8, NULL, '5e088bd9c7a51a2013a7b3c608bdebc4.xcf', NULL, 1, 'carga-cotizacion-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-16 15:48:58'),
(95, 101, 9, NULL, '1d90a322756606f050c1e85aec519423.txt', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-16 15:53:30'),
(96, 101, 9, NULL, '617e3050f042fb7a7811a56e61526e4a.txt', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-16 15:53:37'),
(97, 101, 9, NULL, '874d2a52dfebd3036cd72807d4f0d3b0.txt', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-16 15:53:48'),
(98, 101, 9, NULL, '44c65eb2ea08c0d6a6b04b8a8763a28d.jpg', NULL, 1, 'carga-factura-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-16 15:56:04'),
(99, 103, 13, NULL, '8ecf73398c83465f8e81826b8f7c7e8c.txt', NULL, 1, 'Prueba1', NULL, 'c', 0, NULL, '2016-03-16 17:39:17'),
(100, 103, 13, NULL, 'dc65646d8405040a95550b9b6f47043a.txt', NULL, 1, 'Prueba 2', NULL, 'c', 0, NULL, '2016-03-16 17:39:36'),
(101, 103, 13, 1, '576dcbdbb5b0ae72b1af29d1b9d6bde4.pdf', NULL, 1, 'Manual de Calidad 1', NULL, 'c', 0, NULL, '2016-03-16 17:48:15'),
(102, 103, 13, 1, 'e0eeeffde44c2d8f4830a32a5da08cce.pdf', NULL, 1, 'Manual de Calidad 2', NULL, 'c', 0, NULL, '2016-03-16 17:48:26'),
(103, 103, 13, 2, 'b6f6d374d07652fc48ed63af91498713.pdf', NULL, 1, 'Procedimientos 1', NULL, 'c', 0, NULL, '2016-03-16 17:48:45'),
(105, 103, 13, 4, 'c22f8702058c54ae35a48ce7ee13eca8.txt', NULL, 1, 'Informe de Auditoria Interna 1', NULL, 'c', 0, NULL, '2016-03-16 17:49:32'),
(106, 103, 13, 4, 'dc243af614799ea9c41a0208391620a3.pdf', NULL, 1, 'Informe de Auditoria Interna 2', NULL, 'c', 0, NULL, '2016-03-16 17:49:39'),
(107, 103, 13, 7, '3c45d93e057d71d27e0ff288dc9fdf1e.dat', NULL, 1, 'Lista Maestra de Documentos 1', NULL, 'c', 0, NULL, '2016-03-16 17:50:04'),
(108, 103, 13, 7, 'c49f557469f43e4c91626c56e9014887.xcf', NULL, 1, 'Lista Maestra de Documentos 2', NULL, 'c', 0, NULL, '2016-03-16 17:50:14'),
(109, 104, 14, NULL, 'b4cfbb13faf584f3030f1a210a9c41e5.pdf', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2016-03-16 18:03:01'),
(110, 104, 14, NULL, '6ce70eabf429fc014b9a460e1a44644a.txt', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2016-03-16 18:04:21'),
(111, 104, 15, NULL, '093d2d22cc367c548692d4662cd5524f.pdf', NULL, 1, 'carga-factura-revision-documental', NULL, 'c', 0, NULL, '2016-03-16 18:05:11'),
(112, 104, 14, NULL, 'e0155c2e086ef170ead4b9357ac7b64c.xcf', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2016-03-16 18:23:35'),
(113, 104, 15, NULL, '98dcf99e9c5a419a3c0c4845fbac92b7.txt', NULL, 1, 'carga-factura-revision-documental', NULL, 'c', 0, NULL, '2016-03-16 18:27:49'),
(114, 107, 21, NULL, '4e61cb0825cdeb04e53f64a843f5e0bf.txt', NULL, 1, 'carga-cotizacion-evaluacion', NULL, 'c', 0, NULL, '2016-03-17 10:47:55'),
(115, 107, 22, NULL, '094d9dcdd300fd644792433d0d0288a5.xcf', NULL, 1, 'carga-factura-evaluacion', NULL, 'c', 0, NULL, '2016-03-17 10:59:27'),
(116, 108, 26, NULL, 'bf0785d35c3bd33c0ef833b31222a77b.txt', NULL, 1, 'prueba 11', NULL, 'c', 1, NULL, '2016-03-17 14:50:26'),
(117, 108, 26, NULL, 'f5c4b7665e24a7c0118102d140c96ea8.xcf', NULL, 1, 'Prueba 11 2', NULL, 'c', 1, NULL, '2016-03-17 14:50:47'),
(119, 111, 189, NULL, '1c9a8954f9a4b234aa37e40e1cef76c1.txt', NULL, 1, '6514', NULL, 'c', 0, NULL, '2016-03-20 18:17:17'),
(120, 111, 189, NULL, 'cf89106ecbbfd44c1b41f0b73a5174f7.txt', NULL, 1, '333', NULL, 'c', 0, NULL, '2016-03-20 18:23:15'),
(121, 111, 195, NULL, '7b82de05158e473ae518325795566935.txt', NULL, 1, '108', NULL, 'c', 0, NULL, '2016-03-20 18:28:54'),
(122, 111, 195, NULL, 'e18cd3815b39ead65eec6085b91260b6.doc', NULL, 1, 'carga-formulario-108', NULL, 'c', 0, NULL, '2016-03-20 18:29:58'),
(123, 119, 2, NULL, '9a0c80402b86354441d4253fd1dadd50.doc', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-21 08:03:13'),
(124, 119, 3, NULL, '3f49bb048a97569aec9f21a81ce35972.doc', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-21 08:03:25'),
(125, 119, 2, NULL, '610cd30ffcc509b4f6022f592ec7ad07.doc', NULL, 1, 'carga-cotizacion-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-21 08:35:37'),
(126, 119, 3, NULL, '16612da427f57d88f92c26d3d888d2ea.doc', NULL, 1, 'carga-factura-pertinencia-alcance', NULL, 'c', 0, NULL, '2016-03-21 08:41:51'),
(127, 120, 46, NULL, '1faea9b0dc03e9723624ddb32ca3779b.php', NULL, 1, 'carga-informe-consejo', NULL, 'c', 0, NULL, '2016-03-21 20:46:02'),
(128, 120, 7, NULL, 'd81bb70ac1b3a247706c6b7e50162518.txt', NULL, 1, 'carga-acta-consejo', NULL, 'c', 0, NULL, '2016-03-21 20:49:26'),
(129, 121, 8, NULL, 'a3ced5d1062940825764dd2441e8439f.php', NULL, 1, 'carga-cotizacion-apertura-expediente', NULL, 'c', 0, NULL, '2016-03-21 20:50:43'),
(130, 124, 14, NULL, 'f56f675e83ee3c6e90ab643ddb26ee66.txt', NULL, 1, 'carga-cotizacion-revision-documental', NULL, 'c', 0, NULL, '2016-03-27 12:08:44'),
(131, 124, 15, NULL, 'cede232dfafe78be32b9d82944cae82f.txt', NULL, 1, 'carga-factura-revision-documental', NULL, 'c', 0, NULL, '2016-03-27 12:08:49'),
(132, 127, 21, NULL, '7116b7f5b2b4702d8555d05fea69ef89.txt', NULL, 1, 'carga-cotizacion-evaluacion', NULL, 'c', 0, NULL, '2016-03-27 13:17:07'),
(133, 127, 22, NULL, '7acd9d8a84e3e39b32cb77d0ad266235.txt', NULL, 1, 'carga-factura-evaluacion', NULL, 'c', 0, NULL, '2016-03-27 13:17:30'),
(134, 128, 26, NULL, '23984ae88b90d2968799395b5e5991ef.txt', NULL, 1, 'sd', NULL, 'c', 1, NULL, '2016-03-27 13:57:19'),
(135, 131, 32, 8, '8fa742ebf4c0349674659d365441a418.docx', NULL, 1, '1', NULL, 'c', 0, NULL, '2016-03-27 22:44:30'),
(136, 131, 189, NULL, 'de2ee4da6a1e9e1e0761c99f41da0282.docx', NULL, 1, '2', NULL, 'c', 0, NULL, '2016-03-27 23:02:31'),
(137, 131, 195, NULL, '139554853f3879d9e762f7485f401ead.docx', NULL, 1, '3', NULL, 'c', 0, NULL, '2016-03-27 23:02:56'),
(138, 133, 36, NULL, 'b98bcef1641fbe807bfca33f176d77a8.pdf', NULL, 1, 'carga-acta-comite-tecnico', NULL, 'c', 0, NULL, '2016-03-28 00:19:23');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=137 ;

--
-- Dumping data for table `peticion_estado_01_04_03`
--

INSERT INTO `peticion_estado_01_04_03` (`id_peticion_estado`, `fk_id_peticion`, `fk_id_estado`, `activo_peticion_estado`, `fecha_creacion_peticion_estado`) VALUES
(3, 26, 1, 0, '2016-01-04'),
(4, 26, 2, 1, '2016-01-04'),
(5, 26, 3, 0, '2016-01-04'),
(6, 26, 4, 0, '2016-01-04'),
(7, 26, 5, 0, '2016-01-04'),
(8, 26, 6, 0, '2016-01-04'),
(9, 26, 7, 0, '2016-01-04'),
(10, 26, 8, 0, '2016-01-04'),
(11, 26, 9, 0, '2016-01-04'),
(12, 26, 10, 0, '2016-01-04'),
(13, 26, 11, 0, '2016-01-04'),
(14, 26, 12, 0, '2016-01-04'),
(15, 26, 13, 0, '2016-01-04'),
(16, 26, 14, 0, '2016-01-05'),
(17, 26, 15, 0, '2016-01-05'),
(18, 26, 16, 0, '2016-01-05'),
(22, 26, 17, 0, '2016-01-08'),
(23, 26, 18, 0, '2016-01-08'),
(24, 26, 19, 0, '2016-01-08'),
(25, 26, 20, 0, '2016-01-09'),
(26, 26, 21, 0, '2016-01-09'),
(28, 26, 1, 0, '2016-01-11'),
(29, 26, 2, 0, '2016-01-11'),
(30, 26, 3, 0, '2016-01-11'),
(31, 26, 4, 0, '2016-01-11'),
(32, 26, 5, 0, '2016-01-11'),
(33, 26, 6, 0, '2016-01-11'),
(34, 26, 7, 0, '2016-01-11'),
(35, 26, 8, 0, '2016-01-11'),
(36, 26, 9, 0, '2016-01-11'),
(37, 26, 10, 0, '2016-01-11'),
(38, 26, 11, 0, '2016-01-11'),
(39, 26, 12, 0, '2016-01-11'),
(40, 26, 13, 0, '2016-01-11'),
(41, 26, 1, 0, '2016-02-01'),
(42, 26, 1, 0, '2016-02-18'),
(43, 26, 1, 0, '2016-02-18'),
(44, 26, 61, 0, '2016-02-19'),
(45, 26, 61, 0, '2016-02-23'),
(47, 26, 165, 0, '2016-02-23'),
(48, 26, 1, 0, '2016-02-23'),
(51, 26, 74, 0, '2016-02-23'),
(52, 26, 1, 0, '2016-02-24'),
(53, 26, 2, 0, '2016-02-25'),
(54, 26, 3, 0, '2016-02-25'),
(55, 26, 4, 0, '2016-02-25'),
(56, 26, 5, 0, '2016-02-25'),
(57, 26, 6, 0, '2016-02-25'),
(58, 26, 7, 0, '2016-02-25'),
(59, 26, 8, 0, '2016-02-25'),
(60, 26, 9, 0, '2016-02-25'),
(61, 26, 10, 0, '2016-02-25'),
(62, 26, 11, 0, '2016-02-25'),
(63, 26, 12, 0, '2016-02-25'),
(64, 26, 1, 0, '2016-02-25'),
(65, 26, 2, 0, '2016-02-25'),
(66, 26, 3, 0, '2016-02-25'),
(68, 26, 13, 0, '2016-02-26'),
(71, 26, 1, 0, '2016-03-02'),
(75, 26, 2, 0, '2016-03-02'),
(76, 26, 3, 0, '2016-03-02'),
(77, 26, 2, 0, '2016-03-09'),
(78, 26, 4, 0, '2016-03-10'),
(79, 26, 5, 0, '2016-03-10'),
(80, 26, 6, 0, '2016-03-10'),
(82, 26, 7, 0, '2016-03-10'),
(83, 26, 8, 0, '2016-03-10'),
(84, 26, 9, 0, '2016-03-10'),
(85, 26, 10, 0, '2016-03-10'),
(86, 26, 11, 0, '2016-03-10'),
(87, 26, 12, 0, '2016-03-10'),
(88, 26, 13, 0, '2016-03-10'),
(89, 26, 14, 0, '2016-03-11'),
(90, 26, 15, 0, '2016-03-11'),
(91, 26, 16, 0, '2016-03-11'),
(92, 26, 17, 0, '2016-03-11'),
(93, 26, 18, 0, '2016-03-11'),
(94, 26, 19, 0, '2016-03-11'),
(95, 26, 20, 0, '2016-03-14'),
(96, 26, 21, 0, '2016-03-14'),
(97, 27, 1, 1, '2016-03-14'),
(98, 28, 1, 0, '2016-03-16'),
(99, 28, 2, 0, '2016-03-16'),
(100, 28, 3, 0, '2016-03-16'),
(101, 28, 4, 0, '2016-03-16'),
(102, 28, 5, 0, '2016-03-16'),
(103, 28, 6, 0, '2016-03-16'),
(104, 28, 7, 0, '2016-03-16'),
(105, 28, 8, 0, '2016-03-16'),
(106, 28, 9, 0, '2016-03-16'),
(107, 28, 10, 0, '2016-03-17'),
(108, 28, 11, 0, '2016-03-17'),
(109, 28, 12, 0, '2016-03-17'),
(110, 28, 13, 0, '2016-03-17'),
(111, 28, 14, 0, '2016-03-19'),
(112, 28, 15, 0, '2016-03-20'),
(114, 28, 16, 0, '2016-03-20'),
(115, 28, 17, 0, '2016-03-20'),
(116, 28, 18, 0, '2016-03-21'),
(117, 28, 19, 1, '2016-03-21'),
(118, 29, 1, 0, '2016-03-21'),
(119, 29, 2, 0, '2016-03-21'),
(120, 29, 3, 0, '2016-03-21'),
(121, 29, 4, 0, '2016-03-21'),
(122, 29, 5, 0, '2016-03-21'),
(123, 29, 6, 0, '2016-03-21'),
(124, 29, 7, 0, '2016-03-27'),
(125, 29, 8, 0, '2016-03-27'),
(126, 29, 9, 0, '2016-03-27'),
(127, 29, 10, 0, '2016-03-27'),
(128, 29, 11, 0, '2016-03-27'),
(129, 29, 12, 0, '2016-03-27'),
(130, 29, 13, 0, '2016-03-27'),
(131, 29, 14, 0, '2016-03-27'),
(132, 29, 15, 0, '2016-03-27'),
(133, 29, 16, 0, '2016-03-27'),
(134, 29, 17, 0, '2016-03-28'),
(135, 29, 18, 0, '2016-03-28'),
(136, 29, 19, 1, '2016-03-30');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `proceso_01_01_01`
--

INSERT INTO `proceso_01_01_01` (`id_proceso`, `nombre_proceso`, `valor_proceso`) VALUES
(1, 'Acreditación Inicial', 'acreditacion'),
(2, 'Vigilancia 1', 'vigilancia1'),
(3, 'Vigilancia 2', 'vigilancia2'),
(4, 'Reacreditación', 'reacreditacion'),
(5, 'Extraordinaria', 'extraordinaria'),
(6, 'Ampliación', 'ampliacion');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `proveedor_eval_04_08_03`
--

INSERT INTO `proveedor_eval_04_08_03` (`id_proveedor_eval`, `fk_id_eval_tecnica`, `nombre_proveedor_eval`, `resultados_proveedor_eval`, `indicador_desempeno_proveedor_eval`, `conclusion_desempeno_proveedor_eval`) VALUES
(3, 6, 'kljkl', 'jklj', 'lkjkl', 'jlkk'),
(4, 7, 'adsf', 'ads', 'fasd', 'fads');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `prueba_participacion_04_09_01`
--

INSERT INTO `prueba_participacion_04_09_01` (`id_prueba_participacion`, `fk_id_peticion`, `fk_id_criterio_evaluacion`, `horas_evaluacion_prueba_participacion`, `dir_nombre_responsable_prueba_participacion`, `dir_cargo_prueba_participacion`, `dir_fecha_prueba_participacion`, `oec_nombre_responsable_prueba_participacion`, `oec_cargo_prueba_participacion`, `oec_fecha_prueba_participacion`, `fecha_creacion_prueba_participacion`) VALUES
(2, 26, 1, 1, 'asdf', 'asdf', '2016-03-11', 'adsf', 'asdf', '2016-03-14', '2016-03-11 10:52:38'),
(3, 28, 2, 2, 'adsf', 'asdf', '2016-03-10', 'asd', 'fasdf', '2016-03-03', '2016-03-18 17:01:07'),
(4, 29, 1, 3, 'adsf', 'asdf', '2016-03-03', 'asdf', 'asdf', '2016-03-04', '2016-03-27 14:22:50');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `supervision_evaluador_04_11_01`
--

INSERT INTO `supervision_evaluador_04_11_01` (`id_supervision_evaluador`, `fk_id_peticion`, `criterio_evaluacion_supervision_evaluador`, `comentarios_supervision_evaluador`, `observaciones_supervision_evaluador`, `nombre_supervision_evaluador`, `cargo_supervision_evaluador`, `fecha_supervision_evaluador`, `fecha_creacion_supervision_evaluador`) VALUES
(2, 26, 'asdf', 'asdf', 'asdf', 'sa', 'asdfasd', '2016-03-09', '2016-03-11 10:52:57'),
(3, 28, 'adsf', 'adsf', 'asdf', 'asdf', 'asdf', '2016-03-01', '2016-03-18 16:50:35'),
(4, 29, 'asdf', 'adsf', 'adsf', 'asdf', 'asdf', '2016-03-02', '2016-03-27 16:26:42');

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
-- Table structure for table `tipo_actividad_05_01_04`
--

CREATE TABLE IF NOT EXISTS `tipo_actividad_05_01_04` (
  `id_tipo_actividad` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `nombre_tipo_actividad` varchar(145) NOT NULL COMMENT 'display',
  `codigo_tipo_actividad` varchar(45) NOT NULL,
  PRIMARY KEY (`id_tipo_actividad`),
  UNIQUE KEY `nombre_tipo_actividad_UNIQUE` (`nombre_tipo_actividad`),
  UNIQUE KEY `codigo_tipo_actividad_UNIQUE` (`codigo_tipo_actividad`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tipo_actividad_05_01_04`
--

INSERT INTO `tipo_actividad_05_01_04` (`id_tipo_actividad`, `nombre_tipo_actividad`, `codigo_tipo_actividad`) VALUES
(1, 'Evaluaciones Regulares', 'REG'),
(2, 'Evaluaciones PRS', 'PRS'),
(3, 'Evaluaciones Básicas', 'VT'),
(4, 'Curso', 'CAP'),
(5, 'Difusiones', 'DIF');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_curso_05_01_04`
--

CREATE TABLE IF NOT EXISTS `tipo_curso_05_01_04` (
  `id_tipo_curso` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `nombre_tipo_curso` varchar(200) NOT NULL COMMENT 'display',
  PRIMARY KEY (`id_tipo_curso`),
  UNIQUE KEY `nombre_tipo_curso_UNIQUE` (`nombre_tipo_curso`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tipo_curso_05_01_04`
--

INSERT INTO `tipo_curso_05_01_04` (`id_tipo_curso`, `nombre_tipo_curso`) VALUES
(1, 'Curso'),
(3, 'Jornada'),
(2, 'Taller');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=91 ;

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
(20, 1, 20, 21),
(21, 2, 61, 62),
(22, 2, 62, 63),
(23, 2, 63, 64),
(24, 2, 64, 65),
(25, 2, 65, 66),
(26, 2, 66, 67),
(27, 2, 67, 68),
(28, 2, 68, 69),
(29, 2, 69, 70),
(30, 2, 70, 71),
(31, 2, 71, 72),
(32, 2, 72, 73),
(33, 3, 74, 75),
(34, 3, 75, 76),
(35, 3, 76, 77),
(36, 3, 77, 78),
(37, 3, 78, 79),
(38, 3, 79, 80),
(39, 3, 80, 81),
(40, 3, 81, 82),
(41, 3, 82, 83),
(42, 3, 83, 84),
(43, 3, 84, 85),
(44, 3, 85, 86),
(46, 4, 165, 166),
(47, 4, 166, 167),
(48, 4, 167, 168),
(49, 4, 168, 169),
(50, 4, 169, 170),
(51, 4, 170, 171),
(52, 4, 171, 172),
(53, 4, 172, 173),
(54, 4, 173, 174),
(55, 4, 174, 175),
(56, 4, 175, 176),
(57, 4, 176, 177),
(58, 4, 177, 178),
(59, 4, 178, 179),
(60, 4, 179, 180),
(61, 4, 180, 181),
(63, 5, 87, 88),
(64, 5, 88, 89),
(65, 5, 89, 90),
(66, 5, 90, 91),
(67, 5, 91, 92),
(68, 5, 92, 93),
(69, 5, 93, 94),
(70, 5, 94, 95),
(71, 5, 95, 96),
(72, 5, 96, 97),
(73, 5, 97, 98),
(74, 5, 98, 99),
(75, 6, 182, 183),
(76, 6, 183, 184),
(77, 6, 184, 185),
(78, 6, 185, 186),
(79, 6, 186, 187),
(80, 6, 187, 188),
(81, 6, 188, 189),
(82, 6, 189, 190),
(83, 6, 190, 191),
(84, 6, 191, 192),
(85, 6, 192, 193),
(86, 6, 193, 194),
(87, 6, 194, 195),
(88, 6, 195, 196),
(89, 6, 196, 197),
(90, 6, 197, 198);

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
  `codigo_usuario` varchar(45) DEFAULT NULL COMMENT 'search;display',
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
  `empresa_usuario` text,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `login_usuario_UNIQUE` (`login_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `usuario_00_01_01`
--

INSERT INTO `usuario_00_01_01` (`id_usuario`, `primer_nombre_usuario`, `segundo_nombre_usuario`, `apellido_paterno_usuario`, `apellido_materno_usuario`, `codigo_usuario`, `login_usuario`, `contrasena_usuario`, `fecha_nacimiento_usuario`, `sexo_usuario`, `telefono_usuario`, `celular_usuario`, `correo_usuario`, `direccion_usuario`, `imagen_usuario`, `observaciones_usuario`, `acceso_ip_usuario`, `fecha_creacion_usuario`, `empresa_usuario`) VALUES
(1, 'admin', 'admin12', 'admin12', 'admin12', 'admin', 'admin', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '1978-01-12', 'm', 'admin', 'admin', 'victorhola@gmail.com', 'admin', 'admin', 'admin', '', '2015-12-18 17:16:00', NULL),
(2, 'Federico', 'Guillermo', 'Peñaranda', 'Nervi', 'EVA-555', 'fpenaranda', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, 'm', '2223408', '70681784', 'federicopenaranda@gmail.com', 'Av. Bush', '', 'Prueba', '', '2015-12-18 18:24:56', 'YPFB'),
(3, 'Fino', '', 'Prueba', '', 'EVA-588', 'oecfino1', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, 'm', '212121212', '70707070', 'fpenaranda@catequil.com.bo', 'prueba', '', 'prueba', '', '2015-12-21 10:09:15', ''),
(4, 'Dta', '', 'Personal', '', 'EVA-968', 'dta1', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, 'm', '3434234', '234234234', 'fpenaranda@ibmetro.gob.bo', 'prueba', '', 'prueba', '', '2015-12-21 10:10:53', NULL),
(5, 'Directora', '', 'Dta', '', 'EVA-011', 'da1', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, 'f', '234234', '234234', 'info@catequil.com.bo', 'prueba', '', '', '', '2015-12-21 10:12:04', ''),
(6, 'Consejo1', '', 'C1', '', 'adsfasd', 'consejo1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', NULL, 'f', '234234', '234234234', 'fasdf@docm.com', '', '', 'adsfadsfas', '', '2015-12-28 19:53:10', NULL),
(7, 'Dta2', '', 'Dta2', '', 'qwer', 'dta2', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', NULL, 'f', 'qewrqw', 'qwerqewr', 'adsfasdf@dsafa.com', '', '', '', '', '2015-12-29 10:07:28', NULL),
(8, 'Dueño', '', 'Inti', '', '2545', 'inti1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', NULL, 'm', '24242424', '2424224', 'fpenaranda@ibmetro.gob.bo', 'adsf', '', 'asdf', '', '2015-12-31 02:16:31', NULL),
(9, 'Evaluador', '', 'Lider', '', 'EVA-515', 'el1', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, 'm', '24352435', '24354235', 'fpenaranda@ibmetro.gob.bo', '', '', 'prueba', '', '2016-01-11 06:52:38', 'Maaya'),
(10, 'adsf', 'adsf', 'adsf', 'asdf', 'EVA-9825', 'fpenn2', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '1977-12-31', 'f', '23424', '4654654654', 'fpenar@nad.com', 'adslfas', '', 'alsdfadsf', '', '2016-01-25 08:48:24', NULL),
(11, 'adsf', 'asdf', 'asdf', 'adsf', '234234', 'fefefe', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2015-12-31', 'f', '234234', '234234342', 'asdfa@aedsf.coc', '234', '', 'aerf', '', '2016-01-25 08:51:18', NULL),
(12, 'adsf', 'adsf', 'asdf', 'adsfasdf', 'afe22f22', 'oec1', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '2016-02-01', 'f', '234234', '23432432', 'adsfasdf@asd.com', 'asdf', '', 'asdfasdf', '', '2016-02-23 01:08:50', NULL),
(13, 'Consejo2', '', 'apsdlf', '', 'asdfads', 'consejo2', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2016-02-03', 'f', '', '', 'adfdsa@adslfkjas.com', '', '', '', '', '2016-02-28 17:09:09', NULL),
(14, 'Consejo3', '', 'asdf', '', 'adfasd', 'consejo3', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2016-02-01', 'f', '', '', 'adsf2@dsoafj.com', 'ads', '', 'adsf', '', '2016-02-28 17:10:08', NULL);

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
(1, 2),
(1, 3),
(2, 1),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(4, 1),
(4, 2),
(4, 3),
(5, 1),
(5, 2),
(5, 3),
(6, 1),
(6, 2),
(6, 3),
(7, 1),
(8, 1),
(8, 2),
(8, 3),
(9, 1),
(9, 2),
(9, 3),
(10, 1),
(11, 1),
(12, 1),
(12, 2),
(12, 3),
(13, 1),
(13, 2),
(13, 3),
(14, 1),
(14, 2),
(14, 3);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=326 ;

--
-- Dumping data for table `usuario_privilegio_00_00_04`
--

INSERT INTO `usuario_privilegio_00_00_04` (`id_usuario_privilegio`, `nombre_privilegio_usuario_privilegio`, `accion_usuario_privilegio`, `opciones_usuario_privilegio`, `funcion_usuario_privilegio`, `descripcion_usuario_privilegio`) VALUES
(1, 'crea Accion010201', 'create', 'controlador', 'Accion010201', 'automatico'),
(2, 'lee Accion010201', 'index', 'controlador', 'Accion010201', 'automatico'),
(3, 'actualiza Accion010201', 'update', 'controlador', 'Accion010201', 'automatico'),
(4, 'elimina Accion010201', 'delete', 'controlador', 'Accion010201', 'automatico'),
(5, 'crea AccionNotificacion010203', 'create', 'controlador', 'AccionNotificacion010203', 'automatico'),
(6, 'lee AccionNotificacion010203', 'index', 'controlador', 'AccionNotificacion010203', 'automatico'),
(7, 'actualiza AccionNotificacion010203', 'update', 'controlador', 'AccionNotificacion010203', 'automatico'),
(8, 'elimina AccionNotificacion010203', 'delete', 'controlador', 'AccionNotificacion010203', 'automatico'),
(9, 'crea AccionTipo010204', 'create', 'controlador', 'AccionTipo010204', 'automatico'),
(10, 'lee AccionTipo010204', 'index', 'controlador', 'AccionTipo010204', 'automatico'),
(11, 'actualiza AccionTipo010204', 'update', 'controlador', 'AccionTipo010204', 'automatico'),
(12, 'elimina AccionTipo010204', 'delete', 'controlador', 'AccionTipo010204', 'automatico'),
(13, 'crea AccionTransicion010202', 'create', 'controlador', 'AccionTransicion010202', 'automatico'),
(14, 'lee AccionTransicion010202', 'index', 'controlador', 'AccionTransicion010202', 'automatico'),
(15, 'actualiza AccionTransicion010202', 'update', 'controlador', 'AccionTransicion010202', 'automatico'),
(16, 'elimina AccionTransicion010202', 'delete', 'controlador', 'AccionTransicion010202', 'automatico'),
(17, 'crea Actividad010501', 'create', 'controlador', 'Actividad010501', 'automatico'),
(18, 'lee Actividad010501', 'index', 'controlador', 'Actividad010501', 'automatico'),
(19, 'actualiza Actividad010501', 'update', 'controlador', 'Actividad010501', 'automatico'),
(20, 'elimina Actividad010501', 'delete', 'controlador', 'Actividad010501', 'automatico'),
(21, 'crea Actividad050101', 'create', 'controlador', 'Actividad050101', 'automatico'),
(22, 'lee Actividad050101', 'index', 'controlador', 'Actividad050101', 'automatico'),
(23, 'actualiza Actividad050101', 'update', 'controlador', 'Actividad050101', 'automatico'),
(24, 'elimina Actividad050101', 'delete', 'controlador', 'Actividad050101', 'automatico'),
(25, 'crea ActividadEconomica020004', 'create', 'controlador', 'ActividadEconomica020004', 'automatico'),
(26, 'lee ActividadEconomica020004', 'index', 'controlador', 'ActividadEconomica020004', 'automatico'),
(27, 'actualiza ActividadEconomica020004', 'update', 'controlador', 'ActividadEconomica020004', 'automatico'),
(28, 'elimina ActividadEconomica020004', 'delete', 'controlador', 'ActividadEconomica020004', 'automatico'),
(29, 'crea ActividadEstado010602', 'create', 'controlador', 'ActividadEstado010602', 'automatico'),
(30, 'lee ActividadEstado010602', 'index', 'controlador', 'ActividadEstado010602', 'automatico'),
(31, 'actualiza ActividadEstado010602', 'update', 'controlador', 'ActividadEstado010602', 'automatico'),
(32, 'elimina ActividadEstado010602', 'delete', 'controlador', 'ActividadEstado010602', 'automatico'),
(33, 'crea ActividadTipo010504', 'create', 'controlador', 'ActividadTipo010504', 'automatico'),
(34, 'lee ActividadTipo010504', 'index', 'controlador', 'ActividadTipo010504', 'automatico'),
(35, 'actualiza ActividadTipo010504', 'update', 'controlador', 'ActividadTipo010504', 'automatico'),
(36, 'elimina ActividadTipo010504', 'delete', 'controlador', 'ActividadTipo010504', 'automatico'),
(37, 'crea ActividadTransicion010502', 'create', 'controlador', 'ActividadTransicion010502', 'automatico'),
(38, 'lee ActividadTransicion010502', 'index', 'controlador', 'ActividadTransicion010502', 'automatico'),
(39, 'actualiza ActividadTransicion010502', 'update', 'controlador', 'ActividadTransicion010502', 'automatico'),
(40, 'elimina ActividadTransicion010502', 'delete', 'controlador', 'ActividadTransicion010502', 'automatico'),
(41, 'crea ActividadUsuario050103', 'create', 'controlador', 'ActividadUsuario050103', 'automatico'),
(42, 'lee ActividadUsuario050103', 'index', 'controlador', 'ActividadUsuario050103', 'automatico'),
(43, 'actualiza ActividadUsuario050103', 'update', 'controlador', 'ActividadUsuario050103', 'automatico'),
(44, 'elimina ActividadUsuario050103', 'delete', 'controlador', 'ActividadUsuario050103', 'automatico'),
(45, 'crea AlcanceAcreditacionCert030003', 'create', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(46, 'lee AlcanceAcreditacionCert030003', 'index', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(47, 'actualiza AlcanceAcreditacionCert030003', 'update', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(48, 'elimina AlcanceAcreditacionCert030003', 'delete', 'controlador', 'AlcanceAcreditacionCert030003', 'automatico'),
(49, 'crea AlcanceAcreditacionCert041303', 'create', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(50, 'lee AlcanceAcreditacionCert041303', 'index', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(51, 'actualiza AlcanceAcreditacionCert041303', 'update', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(52, 'elimina AlcanceAcreditacionCert041303', 'delete', 'controlador', 'AlcanceAcreditacionCert041303', 'automatico'),
(53, 'crea AlcanceAcreditacionInsp030003', 'create', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(54, 'lee AlcanceAcreditacionInsp030003', 'index', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(55, 'actualiza AlcanceAcreditacionInsp030003', 'update', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(56, 'elimina AlcanceAcreditacionInsp030003', 'delete', 'controlador', 'AlcanceAcreditacionInsp030003', 'automatico'),
(57, 'crea AlcanceAcreditacionInsp041303', 'create', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(58, 'lee AlcanceAcreditacionInsp041303', 'index', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(59, 'actualiza AlcanceAcreditacionInsp041303', 'update', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(60, 'elimina AlcanceAcreditacionInsp041303', 'delete', 'controlador', 'AlcanceAcreditacionInsp041303', 'automatico'),
(61, 'crea AlcanceAcreditacionLab030003', 'create', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(62, 'lee AlcanceAcreditacionLab030003', 'index', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(63, 'actualiza AlcanceAcreditacionLab030003', 'update', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(64, 'elimina AlcanceAcreditacionLab030003', 'delete', 'controlador', 'AlcanceAcreditacionLab030003', 'automatico'),
(65, 'crea AnexoConvenio041301', 'create', 'controlador', 'AnexoConvenio041301', 'automatico'),
(66, 'lee AnexoConvenio041301', 'index', 'controlador', 'AnexoConvenio041301', 'automatico'),
(67, 'actualiza AnexoConvenio041301', 'update', 'controlador', 'AnexoConvenio041301', 'automatico'),
(68, 'elimina AnexoConvenio041301', 'delete', 'controlador', 'AnexoConvenio041301', 'automatico'),
(69, 'crea AspectosEvaluados040803', 'create', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(70, 'lee AspectosEvaluados040803', 'index', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(71, 'actualiza AspectosEvaluados040803', 'update', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(72, 'elimina AspectosEvaluados040803', 'delete', 'controlador', 'AspectosEvaluados040803', 'automatico'),
(73, 'crea CampoCalibracion040004', 'create', 'controlador', 'CampoCalibracion040004', 'automatico'),
(74, 'lee CampoCalibracion040004', 'index', 'controlador', 'CampoCalibracion040004', 'automatico'),
(75, 'actualiza CampoCalibracion040004', 'update', 'controlador', 'CampoCalibracion040004', 'automatico'),
(76, 'elimina CampoCalibracion040004', 'delete', 'controlador', 'CampoCalibracion040004', 'automatico'),
(77, 'crea Certificado041401', 'create', 'controlador', 'Certificado041401', 'automatico'),
(78, 'lee Certificado041401', 'index', 'controlador', 'Certificado041401', 'automatico'),
(79, 'actualiza Certificado041401', 'update', 'controlador', 'Certificado041401', 'automatico'),
(80, 'elimina Certificado041401', 'delete', 'controlador', 'Certificado041401', 'automatico'),
(81, 'crea CodigoPeticion010404', 'create', 'controlador', 'CodigoPeticion010404', 'automatico'),
(82, 'lee CodigoPeticion010404', 'index', 'controlador', 'CodigoPeticion010404', 'automatico'),
(83, 'actualiza CodigoPeticion010404', 'update', 'controlador', 'CodigoPeticion010404', 'automatico'),
(84, 'elimina CodigoPeticion010404', 'delete', 'controlador', 'CodigoPeticion010404', 'automatico'),
(85, 'crea CriterioEvaluacion040004', 'create', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(86, 'lee CriterioEvaluacion040004', 'index', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(87, 'actualiza CriterioEvaluacion040004', 'update', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(88, 'elimina CriterioEvaluacion040004', 'delete', 'controlador', 'CriterioEvaluacion040004', 'automatico'),
(89, 'crea CriterioSatisfaccion041204', 'create', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(90, 'lee CriterioSatisfaccion041204', 'index', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(91, 'actualiza CriterioSatisfaccion041204', 'update', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(92, 'elimina CriterioSatisfaccion041204', 'delete', 'controlador', 'CriterioSatisfaccion041204', 'automatico'),
(93, 'crea CriterioSupervision041104', 'create', 'controlador', 'CriterioSupervision041104', 'automatico'),
(94, 'lee CriterioSupervision041104', 'index', 'controlador', 'CriterioSupervision041104', 'automatico'),
(95, 'actualiza CriterioSupervision041104', 'update', 'controlador', 'CriterioSupervision041104', 'automatico'),
(96, 'elimina CriterioSupervision041104', 'delete', 'controlador', 'CriterioSupervision041104', 'automatico'),
(97, 'crea DesignacionEvaluador041001', 'create', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(98, 'lee DesignacionEvaluador041001', 'index', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(99, 'actualiza DesignacionEvaluador041001', 'update', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(100, 'elimina DesignacionEvaluador041001', 'delete', 'controlador', 'DesignacionEvaluador041001', 'automatico'),
(101, 'crea DetalleCalibracion040301', 'create', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(102, 'lee DetalleCalibracion040301', 'index', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(103, 'actualiza DetalleCalibracion040301', 'update', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(104, 'elimina DetalleCalibracion040301', 'delete', 'controlador', 'DetalleCalibracion040301', 'automatico'),
(105, 'crea DetalleCertificacion040501', 'create', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(106, 'lee DetalleCertificacion040501', 'index', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(107, 'actualiza DetalleCertificacion040501', 'update', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(108, 'elimina DetalleCertificacion040501', 'delete', 'controlador', 'DetalleCertificacion040501', 'automatico'),
(109, 'crea DetalleEquipos040201', 'create', 'controlador', 'DetalleEquipos040201', 'automatico'),
(110, 'lee DetalleEquipos040201', 'index', 'controlador', 'DetalleEquipos040201', 'automatico'),
(111, 'actualiza DetalleEquipos040201', 'update', 'controlador', 'DetalleEquipos040201', 'automatico'),
(112, 'elimina DetalleEquipos040201', 'delete', 'controlador', 'DetalleEquipos040201', 'automatico'),
(113, 'crea DetalleInspeccion040401', 'create', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(114, 'lee DetalleInspeccion040401', 'index', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(115, 'actualiza DetalleInspeccion040401', 'update', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(116, 'elimina DetalleInspeccion040401', 'delete', 'controlador', 'DetalleInspeccion040401', 'automatico'),
(117, 'crea EquipoEval040803', 'create', 'controlador', 'EquipoEval040803', 'automatico'),
(118, 'lee EquipoEval040803', 'index', 'controlador', 'EquipoEval040803', 'automatico'),
(119, 'actualiza EquipoEval040803', 'update', 'controlador', 'EquipoEval040803', 'automatico'),
(120, 'elimina EquipoEval040803', 'delete', 'controlador', 'EquipoEval040803', 'automatico'),
(121, 'crea EquipoPeticion010701', 'create', 'controlador', 'EquipoPeticion010701', 'automatico'),
(122, 'lee EquipoPeticion010701', 'index', 'controlador', 'EquipoPeticion010701', 'automatico'),
(123, 'actualiza EquipoPeticion010701', 'update', 'controlador', 'EquipoPeticion010701', 'automatico'),
(124, 'elimina EquipoPeticion010701', 'delete', 'controlador', 'EquipoPeticion010701', 'automatico'),
(125, 'crea Estado010601', 'create', 'controlador', 'Estado010601', 'automatico'),
(126, 'lee Estado010601', 'index', 'controlador', 'Estado010601', 'automatico'),
(127, 'actualiza Estado010601', 'update', 'controlador', 'Estado010601', 'automatico'),
(128, 'elimina Estado010601', 'delete', 'controlador', 'Estado010601', 'automatico'),
(129, 'crea EstadoNotificacion010203', 'create', 'controlador', 'EstadoNotificacion010203', 'automatico'),
(130, 'lee EstadoNotificacion010203', 'index', 'controlador', 'EstadoNotificacion010203', 'automatico'),
(131, 'actualiza EstadoNotificacion010203', 'update', 'controlador', 'EstadoNotificacion010203', 'automatico'),
(132, 'elimina EstadoNotificacion010203', 'delete', 'controlador', 'EstadoNotificacion010203', 'automatico'),
(133, 'crea EstadoTipo010604', 'create', 'controlador', 'EstadoTipo010604', 'automatico'),
(134, 'lee EstadoTipo010604', 'index', 'controlador', 'EstadoTipo010604', 'automatico'),
(135, 'actualiza EstadoTipo010604', 'update', 'controlador', 'EstadoTipo010604', 'automatico'),
(136, 'elimina EstadoTipo010604', 'delete', 'controlador', 'EstadoTipo010604', 'automatico'),
(137, 'crea EvalTecnica040801', 'create', 'controlador', 'EvalTecnica040801', 'automatico'),
(138, 'lee EvalTecnica040801', 'index', 'controlador', 'EvalTecnica040801', 'automatico'),
(139, 'actualiza EvalTecnica040801', 'update', 'controlador', 'EvalTecnica040801', 'automatico'),
(140, 'elimina EvalTecnica040801', 'delete', 'controlador', 'EvalTecnica040801', 'automatico'),
(141, 'crea Evaluacion030001', 'create', 'controlador', 'Evaluacion030001', 'automatico'),
(142, 'lee Evaluacion030001', 'index', 'controlador', 'Evaluacion030001', 'automatico'),
(143, 'actualiza Evaluacion030001', 'update', 'controlador', 'Evaluacion030001', 'automatico'),
(144, 'elimina Evaluacion030001', 'delete', 'controlador', 'Evaluacion030001', 'automatico'),
(145, 'crea Feriado050104', 'create', 'controlador', 'Feriado050104', 'automatico'),
(146, 'lee Feriado050104', 'index', 'controlador', 'Feriado050104', 'automatico'),
(147, 'actualiza Feriado050104', 'update', 'controlador', 'Feriado050104', 'automatico'),
(148, 'elimina Feriado050104', 'delete', 'controlador', 'Feriado050104', 'automatico'),
(149, 'crea Gestion050104', 'create', 'controlador', 'Gestion050104', 'automatico'),
(150, 'lee Gestion050104', 'index', 'controlador', 'Gestion050104', 'automatico'),
(151, 'actualiza Gestion050104', 'update', 'controlador', 'Gestion050104', 'automatico'),
(152, 'elimina Gestion050104', 'delete', 'controlador', 'Gestion050104', 'automatico'),
(153, 'crea GestionTipoActividad050103', 'create', 'controlador', 'GestionTipoActividad050103', 'automatico'),
(154, 'lee GestionTipoActividad050103', 'index', 'controlador', 'GestionTipoActividad050103', 'automatico'),
(155, 'actualiza GestionTipoActividad050103', 'update', 'controlador', 'GestionTipoActividad050103', 'automatico'),
(156, 'elimina GestionTipoActividad050103', 'delete', 'controlador', 'GestionTipoActividad050103', 'automatico'),
(157, 'crea InfoEnsayo040101', 'create', 'controlador', 'InfoEnsayo040101', 'automatico'),
(158, 'lee InfoEnsayo040101', 'index', 'controlador', 'InfoEnsayo040101', 'automatico'),
(159, 'actualiza InfoEnsayo040101', 'update', 'controlador', 'InfoEnsayo040101', 'automatico'),
(160, 'elimina InfoEnsayo040101', 'delete', 'controlador', 'InfoEnsayo040101', 'automatico'),
(161, 'crea InformeAcred041301', 'create', 'controlador', 'InformeAcred041301', 'automatico'),
(162, 'lee InformeAcred041301', 'index', 'controlador', 'InformeAcred041301', 'automatico'),
(163, 'actualiza InformeAcred041301', 'update', 'controlador', 'InformeAcred041301', 'automatico'),
(164, 'elimina InformeAcred041301', 'delete', 'controlador', 'InformeAcred041301', 'automatico'),
(165, 'crea InformeEvaluacion040601', 'create', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(166, 'lee InformeEvaluacion040601', 'index', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(167, 'actualiza InformeEvaluacion040601', 'update', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(168, 'elimina InformeEvaluacion040601', 'delete', 'controlador', 'InformeEvaluacion040601', 'automatico'),
(169, 'crea LogSistema030003', 'create', 'controlador', 'LogSistema030003', 'automatico'),
(170, 'lee LogSistema030003', 'index', 'controlador', 'LogSistema030003', 'automatico'),
(171, 'actualiza LogSistema030003', 'update', 'controlador', 'LogSistema030003', 'automatico'),
(172, 'elimina LogSistema030003', 'delete', 'controlador', 'LogSistema030003', 'automatico'),
(173, 'crea NoConformidad040701', 'create', 'controlador', 'NoConformidad040701', 'automatico'),
(174, 'lee NoConformidad040701', 'index', 'controlador', 'NoConformidad040701', 'automatico'),
(175, 'actualiza NoConformidad040701', 'update', 'controlador', 'NoConformidad040701', 'automatico'),
(176, 'elimina NoConformidad040701', 'delete', 'controlador', 'NoConformidad040701', 'automatico'),
(177, 'crea NormaReferencia020004', 'create', 'controlador', 'NormaReferencia020004', 'automatico'),
(178, 'lee NormaReferencia020004', 'index', 'controlador', 'NormaReferencia020004', 'automatico'),
(179, 'actualiza NormaReferencia020004', 'update', 'controlador', 'NormaReferencia020004', 'automatico'),
(180, 'elimina NormaReferencia020004', 'delete', 'controlador', 'NormaReferencia020004', 'automatico'),
(181, 'crea ObsPeticionAccion010303', 'create', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(182, 'lee ObsPeticionAccion010303', 'index', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(183, 'actualiza ObsPeticionAccion010303', 'update', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(184, 'elimina ObsPeticionAccion010303', 'delete', 'controlador', 'ObsPeticionAccion010303', 'automatico'),
(185, 'crea Oec020001', 'create', 'controlador', 'Oec020001', 'automatico'),
(186, 'lee Oec020001', 'index', 'controlador', 'Oec020001', 'automatico'),
(187, 'actualiza Oec020001', 'update', 'controlador', 'Oec020001', 'automatico'),
(188, 'elimina Oec020001', 'delete', 'controlador', 'Oec020001', 'automatico'),
(189, 'crea OecAcreditacionSolicitada020003', 'create', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(190, 'lee OecAcreditacionSolicitada020003', 'index', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(191, 'actualiza OecAcreditacionSolicitada020003', 'update', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(192, 'elimina OecAcreditacionSolicitada020003', 'delete', 'controlador', 'OecAcreditacionSolicitada020003', 'automatico'),
(193, 'crea OecActividad020002', 'create', 'controlador', 'OecActividad020002', 'automatico'),
(194, 'lee OecActividad020002', 'index', 'controlador', 'OecActividad020002', 'automatico'),
(195, 'actualiza OecActividad020002', 'update', 'controlador', 'OecActividad020002', 'automatico'),
(196, 'elimina OecActividad020002', 'delete', 'controlador', 'OecActividad020002', 'automatico'),
(197, 'crea OecContacto020003', 'create', 'controlador', 'OecContacto020003', 'automatico'),
(198, 'lee OecContacto020003', 'index', 'controlador', 'OecContacto020003', 'automatico'),
(199, 'actualiza OecContacto020003', 'update', 'controlador', 'OecContacto020003', 'automatico'),
(200, 'elimina OecContacto020003', 'delete', 'controlador', 'OecContacto020003', 'automatico'),
(201, 'crea OecTipo020004', 'create', 'controlador', 'OecTipo020004', 'automatico'),
(202, 'lee OecTipo020004', 'index', 'controlador', 'OecTipo020004', 'automatico'),
(203, 'actualiza OecTipo020004', 'update', 'controlador', 'OecTipo020004', 'automatico'),
(204, 'elimina OecTipo020004', 'delete', 'controlador', 'OecTipo020004', 'automatico'),
(205, 'crea OecTitulo020004', 'create', 'controlador', 'OecTitulo020004', 'automatico'),
(206, 'lee OecTitulo020004', 'index', 'controlador', 'OecTitulo020004', 'automatico'),
(207, 'actualiza OecTitulo020004', 'update', 'controlador', 'OecTitulo020004', 'automatico'),
(208, 'elimina OecTitulo020004', 'delete', 'controlador', 'OecTitulo020004', 'automatico'),
(209, 'crea Pais020004', 'create', 'controlador', 'Pais020004', 'automatico'),
(210, 'lee Pais020004', 'index', 'controlador', 'Pais020004', 'automatico'),
(211, 'actualiza Pais020004', 'update', 'controlador', 'Pais020004', 'automatico'),
(212, 'elimina Pais020004', 'delete', 'controlador', 'Pais020004', 'automatico'),
(213, 'crea ParticipantesCurso050103', 'create', 'controlador', 'ParticipantesCurso050103', 'automatico'),
(214, 'lee ParticipantesCurso050103', 'index', 'controlador', 'ParticipantesCurso050103', 'automatico'),
(215, 'actualiza ParticipantesCurso050103', 'update', 'controlador', 'ParticipantesCurso050103', 'automatico'),
(216, 'elimina ParticipantesCurso050103', 'delete', 'controlador', 'ParticipantesCurso050103', 'automatico'),
(217, 'crea PersonalAutorizado041303', 'create', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(218, 'lee PersonalAutorizado041303', 'index', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(219, 'actualiza PersonalAutorizado041303', 'update', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(220, 'elimina PersonalAutorizado041303', 'delete', 'controlador', 'PersonalAutorizado041303', 'automatico'),
(221, 'crea Peticion010401', 'create', 'controlador', 'Peticion010401', 'automatico'),
(222, 'lee Peticion010401', 'index', 'controlador', 'Peticion010401', 'automatico'),
(223, 'actualiza Peticion010401', 'update', 'controlador', 'Peticion010401', 'automatico'),
(224, 'elimina Peticion010401', 'delete', 'controlador', 'Peticion010401', 'automatico'),
(225, 'crea PeticionAccion010301', 'create', 'controlador', 'PeticionAccion010301', 'automatico'),
(226, 'lee PeticionAccion010301', 'index', 'controlador', 'PeticionAccion010301', 'automatico'),
(227, 'actualiza PeticionAccion010301', 'update', 'controlador', 'PeticionAccion010301', 'automatico'),
(228, 'elimina PeticionAccion010301', 'delete', 'controlador', 'PeticionAccion010301', 'automatico'),
(229, 'crea PeticionArchivo010401', 'create', 'controlador', 'PeticionArchivo010401', 'automatico'),
(230, 'lee PeticionArchivo010401', 'index', 'controlador', 'PeticionArchivo010401', 'automatico'),
(231, 'actualiza PeticionArchivo010401', 'update', 'controlador', 'PeticionArchivo010401', 'automatico'),
(232, 'elimina PeticionArchivo010401', 'delete', 'controlador', 'PeticionArchivo010401', 'automatico'),
(233, 'crea PeticionArchivoTipo010404', 'create', 'controlador', 'PeticionArchivoTipo010404', 'automatico'),
(234, 'lee PeticionArchivoTipo010404', 'index', 'controlador', 'PeticionArchivoTipo010404', 'automatico'),
(235, 'actualiza PeticionArchivoTipo010404', 'update', 'controlador', 'PeticionArchivoTipo010404', 'automatico'),
(236, 'elimina PeticionArchivoTipo010404', 'delete', 'controlador', 'PeticionArchivoTipo010404', 'automatico'),
(237, 'crea PeticionEstado010403', 'create', 'controlador', 'PeticionEstado010403', 'automatico'),
(238, 'lee PeticionEstado010403', 'index', 'controlador', 'PeticionEstado010403', 'automatico'),
(239, 'actualiza PeticionEstado010403', 'update', 'controlador', 'PeticionEstado010403', 'automatico'),
(240, 'elimina PeticionEstado010403', 'delete', 'controlador', 'PeticionEstado010403', 'automatico'),
(241, 'crea PlanEvaluacion030003', 'create', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(242, 'lee PlanEvaluacion030003', 'index', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(243, 'actualiza PlanEvaluacion030003', 'update', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(244, 'elimina PlanEvaluacion030003', 'delete', 'controlador', 'PlanEvaluacion030003', 'automatico'),
(245, 'crea Proceso010101', 'create', 'controlador', 'Proceso010101', 'automatico'),
(246, 'lee Proceso010101', 'index', 'controlador', 'Proceso010101', 'automatico'),
(247, 'actualiza Proceso010101', 'update', 'controlador', 'Proceso010101', 'automatico'),
(248, 'elimina Proceso010101', 'delete', 'controlador', 'Proceso010101', 'automatico'),
(249, 'crea ProveedorEval040803', 'create', 'controlador', 'ProveedorEval040803', 'automatico'),
(250, 'lee ProveedorEval040803', 'index', 'controlador', 'ProveedorEval040803', 'automatico'),
(251, 'actualiza ProveedorEval040803', 'update', 'controlador', 'ProveedorEval040803', 'automatico'),
(252, 'elimina ProveedorEval040803', 'delete', 'controlador', 'ProveedorEval040803', 'automatico'),
(253, 'crea PruebaParticipacion040901', 'create', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(254, 'lee PruebaParticipacion040901', 'index', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(255, 'actualiza PruebaParticipacion040901', 'update', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(256, 'elimina PruebaParticipacion040901', 'delete', 'controlador', 'PruebaParticipacion040901', 'automatico'),
(257, 'crea Reporte030004', 'create', 'controlador', 'Reporte030004', 'automatico'),
(258, 'lee Reporte030004', 'index', 'controlador', 'Reporte030004', 'automatico'),
(259, 'actualiza Reporte030004', 'update', 'controlador', 'Reporte030004', 'automatico'),
(260, 'elimina Reporte030004', 'delete', 'controlador', 'Reporte030004', 'automatico'),
(261, 'crea SatisfaccionCliente041201', 'create', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(262, 'lee SatisfaccionCliente041201', 'index', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(263, 'actualiza SatisfaccionCliente041201', 'update', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(264, 'elimina SatisfaccionCliente041201', 'delete', 'controlador', 'SatisfaccionCliente041201', 'automatico'),
(265, 'crea SatisfaccionEvaluacion041203', 'create', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(266, 'lee SatisfaccionEvaluacion041203', 'index', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(267, 'actualiza SatisfaccionEvaluacion041203', 'update', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(268, 'elimina SatisfaccionEvaluacion041203', 'delete', 'controlador', 'SatisfaccionEvaluacion041203', 'automatico'),
(269, 'crea SupervisionCriterio041103', 'create', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(270, 'lee SupervisionCriterio041103', 'index', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(271, 'actualiza SupervisionCriterio041103', 'update', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(272, 'elimina SupervisionCriterio041103', 'delete', 'controlador', 'SupervisionCriterio041103', 'automatico'),
(273, 'crea SupervisionEvaluador041101', 'create', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(274, 'lee SupervisionEvaluador041101', 'index', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(275, 'actualiza SupervisionEvaluador041101', 'update', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(276, 'elimina SupervisionEvaluador041101', 'delete', 'controlador', 'SupervisionEvaluador041101', 'automatico'),
(277, 'crea TipoActividad050104', 'create', 'controlador', 'TipoActividad050104', 'automatico'),
(278, 'lee TipoActividad050104', 'index', 'controlador', 'TipoActividad050104', 'automatico'),
(279, 'actualiza TipoActividad050104', 'update', 'controlador', 'TipoActividad050104', 'automatico'),
(280, 'elimina TipoActividad050104', 'delete', 'controlador', 'TipoActividad050104', 'automatico'),
(281, 'crea TipoCurso050104', 'create', 'controlador', 'TipoCurso050104', 'automatico'),
(282, 'lee TipoCurso050104', 'index', 'controlador', 'TipoCurso050104', 'automatico'),
(283, 'actualiza TipoCurso050104', 'update', 'controlador', 'TipoCurso050104', 'automatico'),
(284, 'elimina TipoCurso050104', 'delete', 'controlador', 'TipoCurso050104', 'automatico'),
(285, 'crea Transicion010202', 'create', 'controlador', 'Transicion010202', 'automatico'),
(286, 'lee Transicion010202', 'index', 'controlador', 'Transicion010202', 'automatico'),
(287, 'actualiza Transicion010202', 'update', 'controlador', 'Transicion010202', 'automatico'),
(288, 'elimina Transicion010202', 'delete', 'controlador', 'Transicion010202', 'automatico'),
(289, 'crea Usuario000101', 'create', 'controlador', 'Usuario000101', 'automatico'),
(290, 'lee Usuario000101', 'index', 'controlador', 'Usuario000101', 'automatico'),
(291, 'actualiza Usuario000101', 'update', 'controlador', 'Usuario000101', 'automatico'),
(292, 'elimina Usuario000101', 'delete', 'controlador', 'Usuario000101', 'automatico'),
(293, 'crea UsuarioOec000102', 'create', 'controlador', 'UsuarioOec000102', 'automatico'),
(294, 'lee UsuarioOec000102', 'index', 'controlador', 'UsuarioOec000102', 'automatico'),
(295, 'actualiza UsuarioOec000102', 'update', 'controlador', 'UsuarioOec000102', 'automatico'),
(296, 'elimina UsuarioOec000102', 'delete', 'controlador', 'UsuarioOec000102', 'automatico'),
(297, 'crea UsuarioPrivilegio000004', 'create', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(298, 'lee UsuarioPrivilegio000004', 'index', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(299, 'actualiza UsuarioPrivilegio000004', 'update', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(300, 'elimina UsuarioPrivilegio000004', 'delete', 'controlador', 'UsuarioPrivilegio000004', 'automatico'),
(301, 'crea UsuarioProceso000102', 'create', 'controlador', 'UsuarioProceso000102', 'automatico'),
(302, 'lee UsuarioProceso000102', 'index', 'controlador', 'UsuarioProceso000102', 'automatico'),
(303, 'actualiza UsuarioProceso000102', 'update', 'controlador', 'UsuarioProceso000102', 'automatico'),
(304, 'elimina UsuarioProceso000102', 'delete', 'controlador', 'UsuarioProceso000102', 'automatico'),
(305, 'crea UsuarioTipo000201', 'create', 'controlador', 'UsuarioTipo000201', 'automatico'),
(306, 'lee UsuarioTipo000201', 'index', 'controlador', 'UsuarioTipo000201', 'automatico'),
(307, 'actualiza UsuarioTipo000201', 'update', 'controlador', 'UsuarioTipo000201', 'automatico'),
(308, 'elimina UsuarioTipo000201', 'delete', 'controlador', 'UsuarioTipo000201', 'automatico'),
(309, 'crea UsuarioTipoPrivilegio000202', 'create', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(310, 'lee UsuarioTipoPrivilegio000202', 'index', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(311, 'actualiza UsuarioTipoPrivilegio000202', 'update', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(312, 'elimina UsuarioTipoPrivilegio000202', 'delete', 'controlador', 'UsuarioTipoPrivilegio000202', 'automatico'),
(313, 'crea UsuarioTipoUsuario000102', 'create', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(314, 'lee UsuarioTipoUsuario000102', 'index', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(315, 'actualiza UsuarioTipoUsuario000102', 'update', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(316, 'elimina UsuarioTipoUsuario000102', 'delete', 'controlador', 'UsuarioTipoUsuario000102', 'automatico'),
(317, 'crea Vacacion050104', 'create', 'controlador', 'Vacacion050104', 'automatico'),
(318, 'lee Vacacion050104', 'index', 'controlador', 'Vacacion050104', 'automatico'),
(319, 'actualiza Vacacion050104', 'update', 'controlador', 'Vacacion050104', 'automatico'),
(320, 'elimina Vacacion050104', 'delete', 'controlador', 'Vacacion050104', 'automatico'),
(321, 'menu.Programacion.Actividad', 'menu', 'menu', NULL, NULL),
(322, 'menu.Calendar.Calendar', 'menu', 'menu', NULL, NULL),
(323, 'menu.Programacion.Gestion', 'menu', 'menu', NULL, NULL),
(324, 'menu.Programacion.Feriados', 'menu', 'menu', NULL, NULL),
(325, 'menu.Programacion.Vacacion', 'menu', 'menu', NULL, NULL);

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
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
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
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(4, 12),
(4, 13),
(4, 14),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(6, 12),
(6, 13),
(6, 14);

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
(1, 273),
(1, 274),
(1, 275),
(1, 276),
(1, 277),
(1, 278),
(1, 279),
(1, 280),
(1, 281),
(1, 282),
(1, 283),
(1, 284),
(1, 285),
(1, 286),
(1, 287),
(1, 288),
(1, 289),
(1, 290),
(1, 291),
(1, 292),
(1, 293),
(1, 294),
(1, 295),
(1, 296),
(1, 297),
(1, 298),
(1, 299),
(1, 300),
(1, 301),
(1, 302),
(1, 303),
(1, 304),
(1, 305),
(1, 306),
(1, 307),
(1, 308),
(1, 309),
(1, 310),
(1, 311),
(1, 312),
(1, 313),
(1, 314),
(1, 315),
(1, 316),
(1, 317),
(1, 318),
(1, 319),
(1, 320),
(1, 321),
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
(2, 273),
(2, 274),
(2, 275),
(2, 276),
(2, 277),
(2, 278),
(2, 279),
(2, 280),
(2, 281),
(2, 282),
(2, 283),
(2, 284),
(2, 285),
(2, 286),
(2, 287),
(2, 288),
(2, 289),
(2, 290),
(2, 291),
(2, 292),
(2, 293),
(2, 294),
(2, 295),
(2, 296),
(2, 297),
(2, 298),
(2, 299),
(2, 300),
(2, 301),
(2, 302),
(2, 303),
(2, 304),
(2, 305),
(2, 306),
(2, 307),
(2, 308),
(2, 309),
(2, 310),
(2, 311),
(2, 312),
(2, 313),
(2, 314),
(2, 315),
(2, 316),
(2, 317),
(2, 318),
(2, 319),
(2, 320),
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
(3, 273),
(3, 274),
(3, 275),
(3, 276),
(3, 277),
(3, 278),
(3, 279),
(3, 280),
(3, 281),
(3, 282),
(3, 283),
(3, 284),
(3, 285),
(3, 286),
(3, 287),
(3, 288),
(3, 289),
(3, 290),
(3, 291),
(3, 292),
(3, 293),
(3, 294),
(3, 295),
(3, 296),
(3, 297),
(3, 298),
(3, 299),
(3, 300),
(3, 301),
(3, 302),
(3, 303),
(3, 304),
(3, 305),
(3, 306),
(3, 307),
(3, 308),
(3, 309),
(3, 310),
(3, 311),
(3, 312),
(3, 313),
(3, 314),
(3, 315),
(3, 316),
(3, 317),
(3, 318),
(3, 319),
(3, 320),
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
(4, 273),
(4, 274),
(4, 275),
(4, 276),
(4, 277),
(4, 278),
(4, 279),
(4, 280),
(4, 281),
(4, 282),
(4, 283),
(4, 284),
(4, 285),
(4, 286),
(4, 287),
(4, 288),
(4, 289),
(4, 290),
(4, 291),
(4, 292),
(4, 293),
(4, 294),
(4, 295),
(4, 296),
(4, 297),
(4, 298),
(4, 299),
(4, 300),
(4, 301),
(4, 302),
(4, 303),
(4, 304),
(4, 305),
(4, 306),
(4, 307),
(4, 308),
(4, 309),
(4, 310),
(4, 311),
(4, 312),
(4, 313),
(4, 314),
(4, 315),
(4, 316),
(4, 317),
(4, 318),
(4, 319),
(4, 320),
(4, 321),
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
(5, 272),
(5, 273),
(5, 274),
(5, 275),
(5, 276),
(5, 277),
(5, 278),
(5, 279),
(5, 280),
(5, 281),
(5, 282),
(5, 283),
(5, 284),
(5, 285),
(5, 286),
(5, 287),
(5, 288),
(5, 289),
(5, 290),
(5, 291),
(5, 292),
(5, 293),
(5, 294),
(5, 295),
(5, 296),
(5, 297),
(5, 298),
(5, 299),
(5, 300),
(5, 301),
(5, 302),
(5, 303),
(5, 304),
(5, 305),
(5, 306),
(5, 307),
(5, 308),
(5, 309),
(5, 310),
(5, 311),
(5, 312),
(5, 313),
(5, 314),
(5, 315),
(5, 316),
(5, 317),
(5, 318),
(5, 319),
(5, 320),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 6),
(7, 7),
(7, 8),
(7, 9),
(7, 10),
(7, 11),
(7, 12),
(7, 13),
(7, 14),
(7, 15),
(7, 16),
(7, 17),
(7, 18),
(7, 19),
(7, 20),
(7, 21),
(7, 22),
(7, 23),
(7, 24),
(7, 25),
(7, 26),
(7, 27),
(7, 28),
(7, 29),
(7, 30),
(7, 31),
(7, 32),
(7, 33),
(7, 34),
(7, 35),
(7, 36),
(7, 37),
(7, 38),
(7, 39),
(7, 40),
(7, 41),
(7, 42),
(7, 43),
(7, 44),
(7, 45),
(7, 46),
(7, 47),
(7, 48),
(7, 49),
(7, 50),
(7, 51),
(7, 52),
(7, 53),
(7, 54),
(7, 55),
(7, 56),
(7, 57),
(7, 58),
(7, 59),
(7, 60),
(7, 61),
(7, 62),
(7, 63),
(7, 64),
(7, 65),
(7, 66),
(7, 67),
(7, 68),
(7, 69),
(7, 70),
(7, 71),
(7, 72),
(7, 73),
(7, 74),
(7, 75),
(7, 76),
(7, 77),
(7, 78),
(7, 79),
(7, 80),
(7, 81),
(7, 82),
(7, 83),
(7, 84),
(7, 85),
(7, 86),
(7, 87),
(7, 88),
(7, 89),
(7, 90),
(7, 91),
(7, 92),
(7, 93),
(7, 94),
(7, 95),
(7, 96),
(7, 97),
(7, 98),
(7, 99),
(7, 100),
(7, 101),
(7, 102),
(7, 103),
(7, 104),
(7, 105),
(7, 106),
(7, 107),
(7, 108),
(7, 109),
(7, 110),
(7, 111),
(7, 112),
(7, 113),
(7, 114),
(7, 115),
(7, 116),
(7, 117),
(7, 118),
(7, 119),
(7, 120),
(7, 121),
(7, 122),
(7, 123),
(7, 124),
(7, 125),
(7, 126),
(7, 127),
(7, 128),
(7, 129),
(7, 130),
(7, 131),
(7, 132),
(7, 133),
(7, 134),
(7, 135),
(7, 136),
(7, 137),
(7, 138),
(7, 139),
(7, 140),
(7, 141),
(7, 142),
(7, 143),
(7, 144),
(7, 145),
(7, 146),
(7, 147),
(7, 148),
(7, 149),
(7, 150),
(7, 151),
(7, 152),
(7, 153),
(7, 154),
(7, 155),
(7, 156),
(7, 157),
(7, 158),
(7, 159),
(7, 160),
(7, 161),
(7, 162),
(7, 163),
(7, 164),
(7, 165),
(7, 166),
(7, 167),
(7, 168),
(7, 169),
(7, 170),
(7, 171),
(7, 172),
(7, 173),
(7, 174),
(7, 175),
(7, 176),
(7, 177),
(7, 178),
(7, 179),
(7, 180),
(7, 181),
(7, 182),
(7, 183),
(7, 184),
(7, 185),
(7, 186),
(7, 187),
(7, 188),
(7, 189),
(7, 190),
(7, 191),
(7, 192),
(7, 193),
(7, 194),
(7, 195),
(7, 196),
(7, 197),
(7, 198),
(7, 199),
(7, 200),
(7, 201),
(7, 202),
(7, 203),
(7, 204),
(7, 205),
(7, 206),
(7, 207),
(7, 208),
(7, 209),
(7, 210),
(7, 211),
(7, 212),
(7, 213),
(7, 214),
(7, 215),
(7, 216),
(7, 217),
(7, 218),
(7, 219),
(7, 220),
(7, 221),
(7, 222),
(7, 223),
(7, 224),
(7, 225),
(7, 226),
(7, 227),
(7, 228),
(7, 229),
(7, 230),
(7, 231),
(7, 232),
(7, 233),
(7, 234),
(7, 235),
(7, 236),
(7, 237),
(7, 238),
(7, 239),
(7, 240),
(7, 241),
(7, 242),
(7, 243),
(7, 244),
(7, 245),
(7, 246),
(7, 247),
(7, 248),
(7, 249),
(7, 250),
(7, 251),
(7, 252),
(7, 253),
(7, 254),
(7, 255),
(7, 256),
(7, 257),
(7, 258),
(7, 259),
(7, 260),
(7, 261),
(7, 262),
(7, 263),
(7, 264),
(7, 265),
(7, 266),
(7, 267),
(7, 268),
(7, 269),
(7, 270),
(7, 271),
(7, 272),
(7, 273),
(7, 274),
(7, 275),
(7, 276),
(7, 277),
(7, 278),
(7, 279),
(7, 280),
(7, 281),
(7, 282),
(7, 283),
(7, 284),
(7, 285),
(7, 286),
(7, 287),
(7, 288),
(7, 289),
(7, 290),
(7, 291),
(7, 292),
(7, 293),
(7, 294),
(7, 295),
(7, 296),
(7, 297),
(7, 298),
(7, 299),
(7, 300),
(7, 301),
(7, 302),
(7, 303),
(7, 304),
(7, 305),
(7, 306),
(7, 307),
(7, 308),
(7, 309),
(7, 310),
(7, 311),
(7, 312),
(7, 313),
(7, 314),
(7, 315),
(7, 316),
(7, 317),
(7, 318),
(7, 319),
(7, 320);

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
(1, 10),
(1, 11),
(2, 3),
(2, 8),
(2, 12),
(3, 6),
(3, 13),
(3, 14),
(4, 2),
(4, 5),
(5, 4),
(5, 7),
(7, 9);

-- --------------------------------------------------------

--
-- Table structure for table `vacacion_05_01_04`
--

CREATE TABLE IF NOT EXISTS `vacacion_05_01_04` (
  `id_vacacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'actividad',
  `fk_id_usuario` int(11) NOT NULL,
  `fecha_inicio_vacacion` date NOT NULL,
  `fecha_fin_vacacion` date NOT NULL,
  PRIMARY KEY (`id_vacacion`),
  KEY `fk_vacacion_usuario_00_01_011_idx` (`fk_id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `vacacion_05_01_04`
--

INSERT INTO `vacacion_05_01_04` (`id_vacacion`, `fk_id_usuario`, `fecha_inicio_vacacion`, `fecha_fin_vacacion`) VALUES
(4, 1, '2016-01-17', '2016-01-22');

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
-- Constraints for table `accion_observacion_01_02_03`
--
ALTER TABLE `accion_observacion_01_02_03`
  ADD CONSTRAINT `fk_accion_observacion_accion_01_02_011` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_accion_observacion_usuario_tipo_00_02_011` FOREIGN KEY (`fk_id_usuario_tipo`) REFERENCES `usuario_tipo_00_02_01` (`id_usuario_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `actividad_05_01_01`
--
ALTER TABLE `actividad_05_01_01`
  ADD CONSTRAINT `fk_actividad_05_01_01_tipo_curso_05_01_041` FOREIGN KEY (`fk_id_tipo_curso`) REFERENCES `tipo_curso_05_01_04` (`id_tipo_curso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_actividad_oec_02_00_011` FOREIGN KEY (`fk_id_oec`) REFERENCES `oec_02_00_01` (`id_oec`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_actividad_tipo_actividad1` FOREIGN KEY (`fk_id_tipo_actividad`) REFERENCES `tipo_actividad_05_01_04` (`id_tipo_actividad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Constraints for table `actividad_usuario_05_01_03`
--
ALTER TABLE `actividad_usuario_05_01_03`
  ADD CONSTRAINT `fk_actividad_usuario_actividad1` FOREIGN KEY (`fk_id_actividad`) REFERENCES `actividad_05_01_01` (`id_actividad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_actividad_usuario_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Constraints for table `alcance_acreditacion_lab_04_13_03`
--
ALTER TABLE `alcance_acreditacion_lab_04_13_03`
  ADD CONSTRAINT `fk_alcance_acreditacion_lab_04_13_03_anexo_convenio_04_13_011` FOREIGN KEY (`fk_id_anexo_convenio`) REFERENCES `anexo_convenio_04_13_01` (`id_anexo_convenio`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `gestion_tipo_actividad_05_01_03`
--
ALTER TABLE `gestion_tipo_actividad_05_01_03`
  ADD CONSTRAINT `fk_gestion_tipo_actividad_gestion_05_01_041` FOREIGN KEY (`fk_id_gestion`) REFERENCES `gestion_05_01_04` (`id_gestion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_gestion_tipo_actividad_tipo_actividad_05_01_041` FOREIGN KEY (`fk_id_tipo_actividad`) REFERENCES `tipo_actividad_05_01_04` (`id_tipo_actividad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
  ADD CONSTRAINT `fk_obs_peticion_accion_01_03_03_accion_01_02_011` FOREIGN KEY (`fk_id_accion`) REFERENCES `accion_01_02_01` (`id_accion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_obs_peticion_accion_01_03_03_peticion_01_04_011` FOREIGN KEY (`fk_id_peticion`) REFERENCES `peticion_01_04_01` (`id_peticion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_obs_peticion_accion_01_03_03_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `participantes_curso_05_01_03`
--
ALTER TABLE `participantes_curso_05_01_03`
  ADD CONSTRAINT `fk_participantes_curso_actividad_05_01_011` FOREIGN KEY (`fk_id_actividad`) REFERENCES `actividad_05_01_01` (`id_actividad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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

--
-- Constraints for table `vacacion_05_01_04`
--
ALTER TABLE `vacacion_05_01_04`
  ADD CONSTRAINT `fk_vacacion_usuario_00_01_011` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario_00_01_01` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
