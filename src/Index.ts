import { CrearCIta } from "./Mantenimientos/Mantenimiento.Programacion.de.citas";
import { CrearRegistro, EliminarPaciente } from "./Mantenimientos/Mantenimiento.pacientes";
import { crearUsuario, Eliminar} from "./Mantenimientos/Mantenimiento.usuarios";

// Esta funcion nos sirve para crear un usuario nuevo.
// crearUsuario({id_usuario: 3,  nombre: 'Paolo Martinez', carnet: 2400088, correo: 'Paolom@hotmail.com', clave: 'P@ol0M@rt¡n3z' })

// Esta otra funcion nos sirve para Eliminar un usuario nuevo o no deseado
// Eliminar(4)

// Esta funcion nos sirve para crear un registro medico del Paciente.
// CrearRegistro({id_paciente:3, nombre:"Paolo Martinez", direccion :"Ciudad de Guatemala", telefono:90908760, alergias:["Neumonia"],medicamentos_actuales:["Aspirina, Acetamonofen, Hibuprofeno"],condiciones_medicas :["Diabetes, Taquicardia"]})

// Esta funcion nos ayuda a eliminar un registro de un paciente
// EliminarPaciente(3)

// Esta funcion nos sirve para crear una cita nueva
// CrearCIta({ nombre: 'Paolo Martinez',  id_paciente: 1, id_doctor: 1 })