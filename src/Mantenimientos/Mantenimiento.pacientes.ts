import { readFileSync, writeFileSync } from 'fs'
import { Paciente, CrearRegistro, ActualizarRegistro } from "../interfaces/paciente.interface";

const DirreccionArch = './src/data/pacientes.json'

const LecturaPacientes = (): Paciente[] => {
    const archivo: string = readFileSync('./data/pacientes.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Paciente[]
}

const CrearRegistro = (crearRegistro: CrearRegistro) => {
    const PacintesActuales = LecturaPacientes()
    crearRegistro.id_paciente = crearRegistro.id_paciente 
    PacintesActuales.push(crearRegistro as Paciente)
    writeFileSync('./data/pacientes.json', JSON.stringify(PacintesActuales))
}


const ActualizarRegistro = (id_paciente: number, Actualizarregistro: ActualizarRegistro) => {
    const PacintesActuales = LecturaPacientes()
    const PacienteAActualizar = PacintesActuales.filter((nombre) => nombre.id_paciente === id_paciente)[0]
    if (Actualizarregistro.nombre) Actualizarregistro.nombre = Actualizarregistro.nombre
    if (Actualizarregistro.telefono) Actualizarregistro.telefono = Actualizarregistro.telefono
    const PacientesFinales = LecturaPacientes()
    PacientesFinales.push(PacienteAActualizar)
    writeFileSync(DirreccionArch, JSON.stringify(PacientesFinales))
}
// Función para editar un paciente
const editarPaciente = (idPaciente: number, registroActualizado: ActualizarRegistro) => {
    const pacientes = LecturaPacientes();
    const indice = pacientes.findIndex(paciente => paciente.id_paciente === idPaciente);
    if (indice !== -1) {
        pacientes[indice] = {
            ...pacientes[indice],
            ...registroActualizado
        };
    } else {
        console.log('Paciente no encontrado');
    }
};

// Función para eliminar un paciente
const eliminarPaciente = (idPaciente: number) => {
    const pacientes = LecturaPacientes();
    const pacientesFiltrados = pacientes.filter(paciente => paciente.id_paciente !== idPaciente);
};

// Función para obtener un paciente por su ID
const obtenerPacientePorId = (idPaciente: number): Paciente | undefined => {
    const pacientes = LecturaPacientes();
    return pacientes.find(paciente => paciente.id_paciente === idPaciente);
};

// Función para obtener la edad de un paciente
const obtenerEdadPaciente = (idPaciente: number): number | undefined => {
    const paciente = obtenerPacientePorId(idPaciente);
    if (paciente) {
        const hoy = new Date();
        const fechaNacimiento = new Date(paciente.fecha_nacimiento);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesActual = hoy.getMonth() + 1;
        const mesNacimiento = fechaNacimiento.getMonth() + 1;
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    return undefined;
};

// Función para obtener todos los pacientes
const obtenerTodosLosPacientes = (): Paciente[] => {
    return LecturaPacientes();
};

// Función para contar el total de pacientes registrados
const contarPacientes = (): number => {
    const pacientes = LecturaPacientes();
    return pacientes.length;
};

// Función para obtener las últimas 5 recetas de un paciente
const obtenerUltimas5RecetasPaciente = (idPaciente: number): string[] => {
    const paciente = obtenerPacientePorId(idPaciente);
    if (paciente) {
        return paciente.medicamentos_actuales.slice(-5);
    }
    return [];
};

export { CrearRegistro, eliminarPaciente, editarPaciente}