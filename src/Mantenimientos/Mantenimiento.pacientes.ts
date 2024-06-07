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
    crearRegistro.id_paciente = crearRegistro.id_paciente // Agregar lógica para deteminar el siguiente ID
    PacintesActuales.push(crearRegistro as Paciente)
    writeFileSync('./data/pacientes.json', JSON.stringify(PacintesActuales))
}

const EliminarPaciente = (id_paciente: number) => {
    const PacientesActuales = LecturaPacientes()
    const PacientesFinales = PacientesActuales.filter((nombre) => nombre.id_paciente !== id_paciente)
    writeFileSync(DirreccionArch, JSON.stringify(PacientesFinales))
}

const ActualizarRegistro = (id_paciente: number, Actualizarregistro: ActualizarRegistro) => {
    const PacintesActuales = LecturaPacientes()
    const PacienteAActualizar = PacintesActuales.filter((nombre) => nombre.id_paciente === id_paciente)[0]
    if (Actualizarregistro.nombre) Actualizarregistro.nombre = Actualizarregistro.nombre
    if (Actualizarregistro.telefono) Actualizarregistro.telefono = Actualizarregistro.telefono
    EliminarPaciente(id_paciente)
    const PacientesFinales = LecturaPacientes()
    PacientesFinales.push(PacienteAActualizar)
    writeFileSync(DirreccionArch, JSON.stringify(PacientesFinales))
}

export { CrearRegistro }