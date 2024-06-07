import { readFileSync, writeFileSync } from 'fs'
import { ActualizarDoctores, Doctor, GestionDoctores } from '../interfaces/doctor.interface' 



const DIreccionArchivo = './src/data/doctores.json'

const LecturaDoctores = (): Doctor[] => {
    const archivo: string = readFileSync('./data/doctores.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Doctor[]
}

const Gestiondoctores = (gestionarhorarios: GestionDoctores) => {
    const Usuariosactuales = LecturaDoctores()
    gestionarhorarios.id_doctor = gestionarhorarios.id_doctor // Agregar lógica para deteminar el siguiente ID
    Usuariosactuales.push(gestionarhorarios as Doctor)
    writeFileSync('./data/doctores.json', JSON.stringify(Usuariosactuales))
}

const EliminarDoctores = (id_doctor: number) => {
    const DoctoresActuales = LecturaDoctores()
    const DoctoresFinales = DoctoresActuales.filter((nombre) => nombre.id_doctor !== id_doctor)
    writeFileSync(DIreccionArchivo, JSON.stringify(DoctoresFinales))
}

const actualizardoctores = (id_doctor: number, actualizarDoctores: ActualizarDoctores) => {
    const DoctoresActuales = LecturaDoctores()
    const DoctorAActualizar = DoctoresActuales.filter((nombre) => nombre.id_doctor === id_doctor)[0]
    if (actualizarDoctores.nombre) actualizarDoctores.nombre = actualizarDoctores.nombre
    if (actualizarDoctores.id_doctor) actualizarDoctores.id_doctor = actualizarDoctores.id_doctor
    EliminarDoctores(id_doctor)
    const DoctoresFinales = LecturaDoctores()
    DoctoresFinales.push(DoctorAActualizar)
    writeFileSync(DIreccionArchivo, JSON.stringify(DoctoresFinales))
}


export {Gestiondoctores, EliminarDoctores }


