import { readFileSync, writeFileSync } from 'fs'
import { ActualizarDoctores, Doctor, GestionDoctores } from '../interfaces/doctor.interface' 


const DIreccionArchivo = './src/data/doctores.json'


const LecturaDoctores = (): Doctor[] => {
    const archivo: string = readFileSync('./data/doctores.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Doctor[]
}

const crearGestionDeDoctor = (creargestiondedoctor: GestionDoctores) => {
    const DoctoresActuales = LecturaDoctores()
    creargestiondedoctor.id_doctor = creargestiondedoctor.id_doctor // Agregar lógica para deteminar el siguiente ID
    DoctoresActuales.push(creargestiondedoctor as Doctor)
    writeFileSync('./data/doctores.json', JSON.stringify(DoctoresActuales))
}

const EliminarGestionDeDoctores = (id_doctor: number) => {
    const DoctoresActuales = LecturaDoctores()
    const UsuariosFinales = DoctoresActuales.filter((nombre) => nombre.id_doctor !== id_doctor)
    writeFileSync(DIreccionArchivo, JSON.stringify(UsuariosFinales))
}

const actualizargestionDoctores = (id_doctor: number, actualizarGestiondoctores: ActualizarDoctores) => {
    const DoctoresActuales = LecturaDoctores()
    const UsuarioAActualizar = DoctoresActuales.filter((nombre) => nombre.id_doctor === id_doctor)[0]
    if (actualizarGestiondoctores.nombres) actualizarGestiondoctores.nombres = actualizarGestiondoctores.nombres
    if (actualizarGestiondoctores.id_doctor) actualizarGestiondoctores.id_doctor = actualizarGestiondoctores.id_doctor
    EliminarGestionDeDoctores(id_doctor)
    const UsuariosFinales = LecturaDoctores()
    UsuariosFinales.push(UsuarioAActualizar)
    writeFileSync(DIreccionArchivo, JSON.stringify(UsuariosFinales))
}


export { LecturaDoctores, crearGestionDeDoctor, EliminarGestionDeDoctores }
