import { readFileSync, writeFileSync } from 'fs'
import { Doctor, GestionDoctores } from '../interfaces/doctor.interface' 



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
    const DoctoresFinales = LecturaDoctores()
    const UsuariosFinales = DoctoresFinales.filter((nombre) => nombre.id_usuario !== id_usuario)
    writeFileSync(direccionArchivo, JSON.stringify(UsuariosFinales))
}

const actualizarusuario = (id_usuario: number, actualizarUsuario: Actualizarusuario) => {
    const DoctoresFinales = LecturaUsuarios()
    const UsuarioAActualizar = DoctoresFinales.filter((nombre) => nombre.id_usuario === id_usuario)[0]
    if (actualizarUsuario.nombre) actualizarUsuario.nombre = actualizarUsuario.nombre
    if (actualizarUsuario.clave) actualizarUsuario.clave = actualizarUsuario.clave
    Eliminar(id_usuario)
    const UsuariosFinales = LecturaUsuarios()
    UsuariosFinales.push(UsuarioAActualizar)
    writeFileSync(direccionArchivo, JSON.stringify(UsuariosFinales))
}


export { LecturaUsuarios, gestionarhorarios, Eliminar }


