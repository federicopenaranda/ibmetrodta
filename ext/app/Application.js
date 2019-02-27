Ext.define('ibmetrodta.Application', {
    name: 'ibmetrodta',
    extend: 'Ext.app.Application',
    globals: {
        globalTipoUsuario: '',
        globalNombreUsuario: '',
        globalIdUsuario: '',
        globalPrivilegios: [],
        globalPrivilegiosCargados: false,
        globalMenuCargado: false,

        //globalServerFilePath: 'http://sis.ibmetro.gob.bo:500/ibmetrodta/yii/web/',
        //globalServerPath: 'http://sis.ibmetro.gob.bo:500/ibmetrodta/yii/web/index.php/'

        globalServerFilePath: 'http://192.168.0.103/ibmetrodta/yii/web/',
        globalServerPath: 'http://192.168.0.103/ibmetrodta/yii/web/index.php/'

        //globalServerFilePath: 'http://localhost:8080/ibmetrodta/yii/web/',
        //globalServerPath: 'http://localhost:8080/ibmetrodta/yii/web/index.php/'
    },
    requires: [
        'Ext.data.Store',
        'Ext.data.JsonStore',
        'Ext.layout.container.Form',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.File',
        'Ext.form.FieldSet',
        'Ext.grid.column.Date',
        'Ext.grid.column.Template',
        'Ext.tab.Panel',
        'Ext.util.History',
        'Ext.data.proxy.JsonP',
        'Ext.grid.column.Boolean',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Radio',
        'Ext.form.RadioGroup',
        'Ext.form.field.Date',
        //'ibmetrodta.overrides.grid.RowEditor',
        'ibmetrodta.domain.Proxy',
        'ibmetrodta.ux.form.field.plugin.ClearTrigger',
        'Ext.ux.form.ItemSelector',
        'Ext.ux.window.Notification',
        'Ext.form.Label',
        'Ext.grid.column.Action',
        'Ext.layout.container.*',
        'Ext.layout.component.*',
        'Ext.Window.*',
        'Ext.fx.target.Sprite',
        'Ext.layout.container.Fit',
        'Ext.window.MessageBox',
        'Ext.chart.*',
        'Ext.layout.container.Fit',
        'Ext.window.MessageBox',
        'Ext.draw.Text',
        'Ext.form.field.Time',
        //'ibmetrodta.calendar.CalendarPanel',
        //'ibmetrodta.calendar.data.MemoryEventStore',
        'Ext.panel.*',
        //'ibmetrodta.calendar.data.MemoryEventStore',
        //'ibmetrodta.calendar.CalendarPanel',
        'Ext.toolbar.*',
        'Ext.button.*',
        'Ext.container.ButtonGroup',
        'Ext.selection.CellModel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.form.*',
        'Ext.tip.QuickTipManager',
        'Ext.form.field.ComboBox',
        'Ext.layout.container.Table',/*,
        'ibmetrodta.calendar.data.MemoryEventStore',
        'ibmetrodta.calendar.data.MemoryCalendarStore'*/
        
        
        'Ext.picker.Date',
        'Ext.calendar.util.Date',
        'Ext.calendar.CalendarPanel',
        'Ext.calendar.data.MemoryCalendarStore',
        'Ext.calendar.data.MemoryEventStore',
        'Ext.calendar.data.Events',
        'Ext.calendar.data.Calendars',
        'Ext.calendar.form.EventWindow'
        
        
    ],
    views: [
        'Viewport',
        'usuario.Usuario.edit.tab.UsuarioTipoUsuario',
        'usuario.Usuario.Lista',
        'usuario.Usuario.search.Form',
        'usuario.Usuario.search.Window',
        'usuario.Usuario.edit.Form',
        'usuario.Usuario.edit.Window',
        'usuario.Usuario.edit.UsuarioForm',
        'usuario.Usuario.edit.tab.Info',
        'usuario.Usuario.edit.tab.Sistema',
        'usuario.Usuario.edit.tab.UsuarioProceso',
        'usuario.Usuario.edit.tab.UsuarioOec',
        'usuario.UsuarioPrivilegio.Lista',
        'usuario.UsuarioPrivilegio.edit.Form',
        'usuario.UsuarioPrivilegio.edit.Window',
        'usuario.UsuarioTipo.edit.tab.UsuarioTipoPrivilegio',
        'usuario.UsuarioTipo.Lista',
        'usuario.UsuarioTipo.search.Form',
        'usuario.UsuarioTipo.search.Window',
        'usuario.UsuarioTipo.edit.Form',
        'usuario.UsuarioTipo.edit.Window',
        'usuario.UsuarioTipo.edit.UsuarioTipoForm',
        'usuario.UsuarioTipo.edit.tab.Info',
        
        /* INICIO: Opciones */
        'opciones.ActividadEconomica.Lista',
        'opciones.NormaReferencia.Lista',
        'opciones.OecTipo.Lista',
        'opciones.OecTitulo.Lista',
        'opciones.Pais.Lista',
        'opciones.CodigoPeticion.Lista',
        'opciones.CodigoPeticion.edit.Form',
        'opciones.CodigoPeticion.edit.Window',
        'opciones.CampoCalibracion.Lista',
        'opciones.CriterioEvaluacion.Lista',
        /* FIN: Usuario */

        /* INICIO: OEC */
        'oec.Oec.Lista',
        'oec.Oec.OecContactoLista',
        'oec.Oec.OecAcreditacionSolicitadaLista',

        'oec.Oec.edit.Form',
        'oec.Oec.edit.OecContactoForm',
        'oec.Oec.edit.OecAcreditacionSolicitadaForm',
        'oec.Oec.edit.OecAcreditacionSolicitadaWindow',
        'oec.Oec.edit.OecContactoWindow',
        'oec.Oec.edit.OecForm',
        'oec.Oec.edit.Window',

        'oec.Oec.edit.tab.Info',
        'oec.Oec.edit.tab.OecActividad',
        'oec.Oec.edit.tab.OecContacto',
        'oec.Oec.edit.tab.OecAcreditacionSolicitada',
        
        'oec.Oec.search.Form',
        'oec.Oec.search.Window',
        
        'oec.OecCatalogo.Lista',
        'oec.OecCatalogo.search.Form',
        'oec.OecCatalogo.search.Window',
        
        'tramite.Tramite.Lista',
        'tramite.Tramite.ListaOec',
        'tramite.Tramite.ListaPeticion',
        'tramite.Tramite.edit.Window',
        'tramite.Tramite.edit.Form',
        'tramite.Tramite.edit.tab.Paso1',
        'tramite.Tramite.edit.tab.Paso2',
        'tramite.Tramite.edit.tab.Paso3',
        'tramite.Tramite.edit.tab.Paso4',
        'tramite.Tramite.edit.tab.Paso5',
        'tramite.Tramite.edit.tab.Paso6',
        'tramite.Tramite.edit.tab.Paso7',
        'tramite.Tramite.edit.tab.Paso8',
        'tramite.Tramite.edit.tab.Paso9',
        'tramite.Tramite.edit.tab.Paso10',
        'tramite.Tramite.edit.tab.Paso11',
        'tramite.Tramite.edit.tab.Paso12',
        'tramite.Tramite.edit.tab.Paso13',
        'tramite.Tramite.edit.tab.Paso14',
        'tramite.Tramite.edit.tab.Paso15',
        'tramite.Tramite.edit.tab.Paso16',
        'tramite.Tramite.edit.tab.Paso17',
        'tramite.Tramite.edit.tab.Paso18',
        'tramite.Tramite.edit.tab.Paso19',
        'tramite.Tramite.edit.tab.Paso20',
        'tramite.Tramite.ListaConsejoPeticion',
        'tramite.Tramite.ListaConsejoPeticion2',
        'tramite.Tramite.edit.FormObservacion',
        'tramite.Tramite.edit.WindowObservacion',
        'tramite.Tramite.ListaEquipoEvaluadorPeticion',
        /* FIN: OEC */
               

        /* INICIO: Proceso */
        'proceso.Proceso.Lista',
        'proceso.Peticion.edit.WindowPeticion',
        'proceso.Peticion.edit.tab.Info',
        'proceso.Peticion.edit.PeticionForm',

        'proceso.PeticionArchivo.Lista',
        'proceso.PeticionArchivo.search.Form',
        'proceso.PeticionArchivo.search.Window',
        'proceso.PeticionArchivo.edit.Window',
        'proceso.PeticionArchivo.edit.PeticionArchivoWindow',
        'proceso.PeticionArchivo.edit.PeticionArchivoForm',
        'proceso.PeticionArchivo.edit.tab.Info',

        'proceso.PeticionArchivoPlanAccion.Lista',
        'proceso.PeticionArchivoPlanAccion.search.Form',
        'proceso.PeticionArchivoPlanAccion.search.Window',
        'proceso.PeticionArchivoPlanAccion.edit.Window',
        'proceso.PeticionArchivoPlanAccion.edit.PeticionArchivoPlanAccionWindow',
        'proceso.PeticionArchivoPlanAccion.edit.PeticionArchivoPlanAccionForm',
        'proceso.PeticionArchivoPlanAccion.edit.tab.Info',

        'proceso.PeticionArchivoAdicional.Lista',
        'proceso.PeticionArchivoAdicional.search.Form',
        'proceso.PeticionArchivoAdicional.search.Window',
        'proceso.PeticionArchivoAdicional.edit.Window',
        'proceso.PeticionArchivoAdicional.edit.PeticionArchivoAdicionalWindow',
        'proceso.PeticionArchivoAdicional.edit.PeticionArchivoAdicionalForm',
        'proceso.PeticionArchivoAdicional.edit.tab.Info',

        'proceso.EquipoPeticion.Lista',
//        'proceso.PeticionArchivoPlanA.edit.Window',
        'proceso.EquipoPeticion.edit.EquipoPeticionForm',
        'proceso.EquipoPeticion.edit.EquipoPeticionWindow',
        'proceso.EquipoPeticion.edit.tab.Info',
  //      'proceso.PeticionArchivoPlanA.edit.Window',
  
        'proceso.ObsPeticionAccion.edit.ObsPeticionAccionWindow',
        'proceso.ObsPeticionAccion.edit.tab.Info',
        
        'proceso.PeticionEstado.edit.Window',
        'proceso.PeticionEstado.Lista',
        /* FIN: Proceso */

        /* INICIO: Formularios */
        'formularios.InfoEnsayo.Lista',
        'formularios.InfoEnsayo.edit.InfoEnsayoForm',
        'formularios.InfoEnsayo.edit.InfoEnsayoWindow',
        'formularios.InfoEnsayo.edit.Window',
        'formularios.InfoEnsayo.edit.tab.Info',
        'formularios.InfoEnsayo.edit.tab.Info2',
        'formularios.InfoEnsayo.edit.tab.Info3',
        'formularios.InfoEnsayo.search.Form',
        'formularios.InfoEnsayo.search.Window',
        
        'formularios.DetalleEquipos.Lista',
        'formularios.DetalleEquipos.edit.DetalleEquiposForm',
        'formularios.DetalleEquipos.edit.DetalleEquiposWindow',
        'formularios.DetalleEquipos.edit.Window',
        'formularios.DetalleEquipos.edit.tab.Info',
        'formularios.DetalleEquipos.edit.tab.Info2',
        'formularios.DetalleEquipos.edit.tab.Info3',
        'formularios.DetalleEquipos.search.Form',
        'formularios.DetalleEquipos.search.Window',

        'formularios.DetalleInspeccion.Lista',
        'formularios.DetalleInspeccion.edit.DetalleInspeccionForm',
        'formularios.DetalleInspeccion.edit.DetalleInspeccionWindow',
        'formularios.DetalleInspeccion.edit.Window',
        'formularios.DetalleInspeccion.edit.tab.Info',
        'formularios.DetalleInspeccion.edit.tab.Info2',
        'formularios.DetalleInspeccion.edit.tab.Info3',
        'formularios.DetalleInspeccion.search.Form',
        'formularios.DetalleInspeccion.search.Window',

        'formularios.DetalleCertificacion.Lista',
        'formularios.DetalleCertificacion.edit.DetalleCertificacionForm',
        'formularios.DetalleCertificacion.edit.DetalleCertificacionWindow',
        'formularios.DetalleCertificacion.edit.Window',
        'formularios.DetalleCertificacion.edit.tab.Info',
        'formularios.DetalleCertificacion.edit.tab.Info2',
        'formularios.DetalleCertificacion.search.Form',
        'formularios.DetalleCertificacion.search.Window',

        'formularios.DetalleCalibracion.Lista',
        'formularios.DetalleCalibracion.edit.DetalleCalibracionForm',
        'formularios.DetalleCalibracion.edit.DetalleCalibracionWindow',
        'formularios.DetalleCalibracion.edit.Window',
        'formularios.DetalleCalibracion.edit.tab.Info',
        'formularios.DetalleCalibracion.edit.tab.Info2',
        'formularios.DetalleCalibracion.edit.tab.Info3',
        'formularios.DetalleCalibracion.edit.tab.Info4',
        'formularios.DetalleCalibracion.search.Form',
        'formularios.DetalleCalibracion.search.Window',

        'formularios.InformeEvaluacion.Lista',
        'formularios.InformeEvaluacion.edit.InformeEvaluacionForm',
        'formularios.InformeEvaluacion.edit.InformeEvaluacionWindow',
        'formularios.InformeEvaluacion.edit.Window',
        'formularios.InformeEvaluacion.edit.tab.Info',
        'formularios.InformeEvaluacion.edit.tab.Info2',
        'formularios.InformeEvaluacion.edit.tab.Info3',
        
        'formularios.NoConformidad.Lista',
        'formularios.NoConformidad.edit.NoConformidadForm',
        'formularios.NoConformidad.edit.NoConformidadWindow',
        'formularios.NoConformidad.edit.Window',
        'formularios.NoConformidad.edit.tab.Info',
        'formularios.NoConformidad.edit.tab.Info2',

        'formularios.SupervisionEvaluador.Lista',
        'formularios.SupervisionEvaluador.edit.SupervisionEvaluadorForm',
        'formularios.SupervisionEvaluador.edit.SupervisionEvaluadorWindow',
        'formularios.SupervisionEvaluador.edit.Window',
        'formularios.SupervisionEvaluador.edit.tab.Info',
        'formularios.SupervisionEvaluador.edit.tab.Tabla',

        'formularios.Certificado.Lista',
        'formularios.Certificado.edit.CertificadoForm',
        'formularios.Certificado.edit.CertificadoWindow',
        'formularios.Certificado.edit.Window',
        'formularios.Certificado.edit.tab.Info',

        'formularios.AnexoConvenio.Lista',
        'formularios.AnexoConvenio.AlcanceAcreditacionInsp2Lista',
        'formularios.AnexoConvenio.AlcanceAcreditacionLab2Lista',
        'formularios.AnexoConvenio.AlcanceAcreditacionCert2Lista',
        'formularios.AnexoConvenio.edit.AnexoConvenioForm',
        'formularios.AnexoConvenio.edit.AnexoConvenioWindow',
        'formularios.AnexoConvenio.edit.Window',
        'formularios.AnexoConvenio.edit.tab.Info',
        'formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionInsp2',
        'formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionCert2',
        'formularios.AnexoConvenio.edit.tab.PersonalAutorizado',
        'formularios.AnexoConvenio.edit.AlcanceAcreditacionLab2Window',
        'formularios.AnexoConvenio.edit.AlcanceAcreditacionLab2Form',
        'formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionLab2',

        'formularios.InformeAcred.Lista',
        'formularios.InformeAcred.edit.InformeAcredForm',
        'formularios.InformeAcred.edit.InformeAcredWindow',
        'formularios.InformeAcred.edit.Window',
        'formularios.InformeAcred.edit.tab.Info',
        'formularios.InformeAcred.edit.tab.Info2',

        'formularios.EvalTecnica.Lista',
        'formularios.EvalTecnica.edit.Window',
        'formularios.EvalTecnica.edit.EvalTecnicaForm',
        'formularios.EvalTecnica.edit.EvalTecnicaWindow',
        'formularios.EvalTecnica.edit.tab.Info',
        'formularios.EvalTecnica.edit.tab.Info2',
        'formularios.EvalTecnica.edit.tab.Info3',
        'formularios.EvalTecnica.edit.tab.Info4',
        'formularios.EvalTecnica.edit.tab.Info5',
        'formularios.EvalTecnica.edit.tab.Info6',
        'formularios.EvalTecnica.AspectosEvaluadosLista',
        'formularios.EvalTecnica.EquipoEvalLista',
        'formularios.EvalTecnica.ProveedorEvalLista',
        'formularios.EvalTecnica.edit.AspectosEvaluadosForm',
        'formularios.EvalTecnica.edit.AspectosEvaluadosWindow',
        'formularios.EvalTecnica.edit.EquipoEvalForm',
        'formularios.EvalTecnica.edit.EquipoEvalWindow',
        'formularios.EvalTecnica.edit.ProveedorEvalForm',
        'formularios.EvalTecnica.edit.ProveedorEvalWindow',
        'formularios.EvalTecnica.edit.tab.AspectosEvaluados',
        'formularios.EvalTecnica.edit.tab.EquipoEval',
        'formularios.EvalTecnica.edit.tab.ProveedorEval',

        'formularios.PruebaParticipacion.Lista',
        'formularios.PruebaParticipacion.edit.PruebaParticipacionForm',
        'formularios.PruebaParticipacion.edit.PruebaParticipacionWindow',
        'formularios.PruebaParticipacion.edit.Window',
        'formularios.PruebaParticipacion.edit.tab.Info',
        
        
        'formularios.DesignacionEvaluador.Lista',
        'formularios.DesignacionEvaluador.edit.DesignacionEvaluadorForm',
        'formularios.DesignacionEvaluador.edit.DesignacionEvaluadorWindow',
        'formularios.DesignacionEvaluador.edit.Window',
        'formularios.DesignacionEvaluador.edit.tab.Info',
        
        /* FIN: Formularios */
        
        /* INICIO: Evaluación */
        'evaluacion.Evaluacion.AlcanceAcreditacionCertLista',
        'evaluacion.Evaluacion.AlcanceAcreditacionInspLista',
        'evaluacion.Evaluacion.AlcanceAcreditacionLabLista',
        'evaluacion.Evaluacion.Lista',
        'evaluacion.Evaluacion.search.Form',
        'evaluacion.Evaluacion.search.Window',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionCertForm',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionCertWindow',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionInspForm',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionInspWindow',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionLabForm',
        'evaluacion.Evaluacion.edit.AlcanceAcreditacionLabWindow',
        'evaluacion.Evaluacion.edit.EvaluacionForm',
        'evaluacion.Evaluacion.edit.EvaluacionWindow',
        'evaluacion.Evaluacion.edit.Window',
        'evaluacion.Evaluacion.edit.tab.Info',
        'evaluacion.Evaluacion.edit.tab.Info2',
        'evaluacion.Evaluacion.edit.tab.Info3',
        'evaluacion.Evaluacion.edit.tab.AlcanceAcreditacionCert',
        'evaluacion.Evaluacion.edit.tab.AlcanceAcreditacionInsp',
        'evaluacion.Evaluacion.edit.tab.AlcanceAcreditacionLab',
        /* FIN: Evaluación */
        
        /*'dashboard.Dashboard',
        'dashboard.charts.Chart1',
        'dashboard.Panel1',*/
        
        //'calendar.Calendar',
        
        'programacion.Gestion.Lista',
        'programacion.Gestion.edit.Form',
        'programacion.Gestion.edit.Window',

        'programacion.Feriado.Lista',
        'programacion.Feriado.edit.Form',
        'programacion.Feriado.edit.Window',

        'programacion.Vacacion.Lista',
        'programacion.Vacacion.edit.Form',
        'programacion.Vacacion.edit.Window',
        
        'programacion.Actividad.Lista',
        'programacion.Actividad.edit.ActividadForm',
        'programacion.Actividad.edit.Window',
        'programacion.Actividad.edit.tab.Info',
        'programacion.Actividad.edit.tab.ActividadUsuario',
        

        'programacion.ActividadUsuario.Lista',
        'programacion.ActividadUsuario.edit.ActividadUsuarioForm',
        'programacion.ActividadUsuario.edit.Window',
        'programacion.ActividadUsuario.edit.tab.Info',
        
        'programacion.Actividad.search.Form',
        'programacion.Actividad.search.Window'
],
    controllers: [
        'App',
        'security.Security',
        /* INICIO: Usuario */
        'usuario.Usuario',
        'usuario.UsuarioTipo',
        'usuario.UsuarioPrivilegio',
        /* FIN: Usuario */

        /* INICIO: Opciones */
        'opciones.ActividadEconomica',
        'opciones.NormaReferencia',
        'opciones.OecTipo',
        'opciones.OecTitulo',
        'opciones.Pais',
        'opciones.CodigoPeticion',
        'opciones.CampoCalibracion',
        'opciones.CriterioEvaluacion',
        /* FIN: Usuario */
        
        /* INICIO: OEC */
        'oec.Oec',
        'oec.OecContacto',
        'oec.OecAcreditacionSolicitada',
        'oec.OecCatalogo',
        'tramite.Tramite',
        'tramite.Paso1',
        'tramite.Paso2',
        'tramite.Paso3',
        'tramite.Paso4',
        'tramite.Paso5',
        'tramite.Paso6',
        'tramite.Paso7',
        'tramite.Paso8',
        'tramite.Paso9',
        'tramite.Paso10',
        'tramite.Paso11',
        'tramite.Paso12',
        'tramite.Paso13',
        'tramite.Paso14',
        'tramite.Paso15',
        'tramite.Paso16',
        'tramite.Paso17',
        'tramite.Paso18',
        'tramite.Paso19',
        'tramite.Paso20',
        /* FIN: OEC */

        /* INICIO: Proceso */
        'proceso.Proceso',
        'proceso.Peticion',
        'proceso.PeticionArchivo',
        'proceso.PeticionArchivoPlanAccion',
        'proceso.PeticionArchivoAdicional',
        'proceso.ObsPeticionAccion',
        'proceso.PeticionEstado',
        /* FIN: Proceso */
    
        /* INICIO: Formularios */
        'formularios.InfoEnsayo',
        'formularios.DetalleEquipos',
        'formularios.DetalleInspeccion',
        'formularios.DetalleCertificacion',
        'formularios.DetalleCalibracion',
        'formularios.NoConformidad',
        'formularios.InformeAcred',
        'formularios.InformeEvaluacion',
        'formularios.EvalTecnica',
        'formularios.AspectosEvaluados',
        'formularios.EquipoEval',
        'formularios.ProveedorEval',
        'formularios.PruebaParticipacion',
        'formularios.DesignacionEvaluador',
        'formularios.AnexoConvenio',
        'formularios.AlcanceAcreditacionCert2',
        'formularios.AlcanceAcreditacionInsp2',
        'formularios.AlcanceAcreditacionLab2',
        'formularios.PersonalAutorizado',
        'formularios.Certificado',
        'formularios.SupervisionEvaluador',
        /* FIN: Formularios */
    
        /* INICIO: Evaluacion */
        'evaluacion.AlcanceAcreditacionCert',
        'evaluacion.AlcanceAcreditacionInsp',
        'evaluacion.AlcanceAcreditacionLab',
        'evaluacion.Evaluacion',
        /* FIN: Evaluacion */
        
        'dashboard.Dashboard',
        
        
        'programacion.Gestion',
        'programacion.Feriado',
        'programacion.Vacacion',
        'programacion.Actividad',
        //'programacion.ActividadCalendar',
        'programacion.ActividadUsuario'
    ],
    stores: [
        /* INICIO: Usuario */
        'usuario.Usuario',
        'usuario.UsuarioTipo',
        'usuario.UsuarioPrivilegio',
        'usuario.ListaUsuarioPrivilegio',
        /* FIN: Usuario */

        /* INICIO: Opciones */
        'opciones.ActividadEconomica',
        'opciones.NormaReferencia',
        'opciones.OecTipo',
        'opciones.OecTitulo',
        'opciones.Pais',
        'opciones.CodigoPeticion',
        'opciones.CampoCalibracion',
        'opciones.CriterioEvaluacion',
        /* FIN: Usuario */
        
        /* INICIO: OEC */
        'oec.Oec',
        'oec.OecContacto',
        'oec.OecAcreditacionSolicitada',
        'oec.OecCatalogo',
        /* FIN: OEC */

        /* INICIO: Proceso */
        'proceso.Proceso',
        'proceso.Peticion',
        'proceso.PeticionArchivo',
        'proceso.PeticionEstado',
        'proceso.EquipoPeticion',
        'tramite.EquipoEvaluadorPeticion',
        'tramite.OecPeticion',
        'tramite.UsuarioOec',
        'tramite.ConsejoPeticion',
        'tramite.ConsejoPeticion2',
        'tramite.ObsPeticionAccion',
        /* FIN: Proceso */
        
        /* INICIO: Formularios */
        'formularios.DetalleCalibracion',
        'formularios.DetalleCertificacion',
        'formularios.DetalleEquipos',
        'formularios.DetalleInspeccion',
        'formularios.InfoEnsayo',
        'formularios.InformeEvaluacion',
        'formularios.NoConformidad',
        'formularios.EvalTecnica',
        'formularios.AspectosEvaluados',
        'formularios.EquipoEval',
        'formularios.ProveedorEval',
        'formularios.PruebaParticipacion',
        'formularios.DesignacionEvaluador',
        'formularios.InformeAcred',
        'formularios.AlcanceAcreditacionCert2',
        'formularios.AlcanceAcreditacionInsp2',
        'formularios.AlcanceAcreditacionLab2',
        'formularios.Certificado',
        'formularios.SupervisionEvaluador',
        /* FIN: Formularios */

        /* INICIO: Evaluacion */
        'evaluacion.AlcanceAcreditacionCert',
        'evaluacion.AlcanceAcreditacionInsp',
        'evaluacion.AlcanceAcreditacionLab',
        'evaluacion.Evaluacion',
        'evaluacion.PlanEvaluacion',
        /* FIN: Evaluacion */
    
    
        //'oec.OecChart',
        
        //'calendar.Calendar',
        'programacion.Gestion',
        'programacion.Feriado',
        'programacion.Vacacion',
        'programacion.TipoActividad',
        'programacion.ActividadUsuario',
        'programacion.Actividad',
        'programacion.Actividad2',
        'programacion.TipoCurso'
    ],
    
    launch: function (args) {
        // "this" = Ext.app.Application
        var me = this,
                storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio'),
                arrayPrivilegios = [];

        Ext.getBody().mask('Cargando Privilegios ...');

        storePrivilegios.load({
            /*params: {
                filter: 'menu'
            },*/
            callback: function (records, operation, success) {
                ibmetrodta.app.globals.globalPrivilegiosCargados = true;
                    
                var val = '';
                
                Ext.Array.each ( records, function ( objeto, index, recs ) {
                    val = '';
                    val = objeto.getData();
                    arrayPrivilegios.push(val.nombre_privilegio_usuario_privilegio);
                });
                
                ibmetrodta.app.globals.globalPrivilegios = arrayPrivilegios;
                //me.dispatch2(token);
            }
        });

        // init Ext.util.History on app launch; if there is a hash in the url,
        // our controller will load the appropriate content
        Ext.util.History.init(function () {
            var hash = document.location.hash;
            me.getAppController().fireEvent('tokenchange', hash.replace('#', ''));
        });

        // add change handler for Ext.util.History; when a change in the token
        // occurs, this will fire our controller's event to load the appropriate content
        Ext.util.History.on('change', function (token) {
            me.getAppController().fireEvent('tokenchange', token);
        });





        

        var tmpUsuario = [],
                tmpUsuarioTipo;

        // Se obtiene el ID, tipo y nombre de usuario
        Ext.data.JsonP.request({
            url: ibmetrodta.app.globals.globalServerPath + 'permisos/tipousuario',
            success: function (response, options) {
                tmpUsuario = response.registros[0];
                tmpUsuarioTipo = tmpUsuario.fkIdUsuarioTipos[0];

                ibmetrodta.app.globals.globalTipoUsuario = tmpUsuarioTipo.nombre_usuario_tipo;
                ibmetrodta.app.globals.globalNombreUsuario = tmpUsuario.login_usuario;
                ibmetrodta.app.globals.globalIdUsuario = tmpUsuario.id_usuario;
            },
            failure: function (response, options) {
                Ext.Msg.alert('Atenci&oacute;n', 'Un error ocurri&oacute; durante su petici&oacute;n. Por favor intente nuevamente.');
            }
        });
    }
});
