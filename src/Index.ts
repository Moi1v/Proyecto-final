import { CrearCIta } from "./Mantenimientos/Mantenimiento.Programacion.de.citas";
import { CrearRegistro, EliminarPaciente } from "./Mantenimientos/Mantenimiento.pacientes";
import { crearUsuario } from "./Mantenimientos/Mantenimiento.usuarios";
import { crearGestionDeDoctor, EliminarGestionDeDoctores } from "./Mantenimientos/MantenimientoGestionDocs";
import { crearReceta, EliminarRecetas } from "./Mantenimientos/MantenimientoRegistroDeRecetas";
import { crearproducto, Eliminarproducto } from "./Mantenimientos/Mantenimientoproductosyservicios";



// Esta funcion nos sirve para crear un usuario nuevo.
// crearUsuario({id_usuario: 2, nombre: 'Moises Cabrera', carnet: 900088 , correo:'CabreraM@hotmal.com', clave: 'Cabre123', })
// Editar usuario
// 

// Esta otra funcion nos sirve para Eliminar un usuario nuevo o no deseado
// Eliminar(4)

// Esta funcion nos sirve para crear un registro medico del Paciente.
// CrearRegistro({id_paciente:3, nombre:"Paolo Martinez", direccion :"Ciudad de Guatemala", telefono:90908760, alergias:["Neumonia"],medicamentos_actuales:["Aspirina, Acetamonofen, Hibuprofeno"],condiciones_medicas :["Diabetes, Taquicardia"]})

// Esta funcion nos ayuda a eliminar un registro de un paciente
// EliminarPaciente(3)

// Esta funcion nos sirve para crear una cita nueva
// CrearCIta({ nombre: 'Paolo Martinez',  id_paciente: 1, id_doctor: 1 })

// Esta funcion nos sirve para una gestion sobre los doctores
// crearGestionDeDoctor({ id_doctor: 1, nombre: "María García", especialidad: "Odontología", horario: {dia: 'Lunes', hora_inicio: '12:00', hora_fin: '22:00'} })

// Esta funcion nos sirve para una creacion de receta
// crearReceta({ id_paciente: 1, id_doctor: 1, medicamentos: [{ nombre: "Ibuprofeno", dosis: "400mg", frecuencia_horas: 8, duracion_dias: 3}]})

