import { readFileSync, writeFileSync } from 'fs'
import { Cita, CrearCita, ActualizarCitas} from '../interfaces/cita.interface'

const direccionArchivo = './src/data/citas.json'

const LecturaCitas = (): Cita[] => {
    const archivo: string = readFileSync('./data/citas.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Cita[]
}

const CrearCIta = (crearCita: CrearCita) => {
    const CitasActuales = LecturaCitas()
    crearCita.id_paciente = crearCita.id_paciente 
    CitasActuales.push(crearCita as Cita)
    writeFileSync('./data/citas.json', JSON.stringify(CitasActuales))
}

const EliminarCita = (id_paciente: number) => {
    const CitasActuales = LecturaCitas()
    const CitasFinales = CitasActuales.filter((nombre) => nombre.id_paciente !== id_paciente)
    writeFileSync(direccionArchivo, JSON.stringify(CitasFinales))
}

const ActualizarCITas = (id_paciente: number, ActualizarCiTas: ActualizarCitas) => {
    const CitasActuales = LecturaCitas()
    const PacienteAActualizar = CitasActuales.filter((nombre) => nombre.id_paciente === id_paciente)[0]
    if (ActualizarCiTas.id_paciente) ActualizarCiTas.id_paciente = ActualizarCiTas.id_paciente
    if (ActualizarCiTas.id_doctor) ActualizarCiTas.id_doctor = ActualizarCiTas.id_doctor
    EliminarCita(id_paciente)
    const CitasFinales = LecturaCitas()
    CitasFinales.push(PacienteAActualizar)
    writeFileSync(direccionArchivo, JSON.stringify(CitasFinales))
}

export { CrearCIta, EliminarCita}