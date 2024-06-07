import { readFileSync, writeFileSync } from 'fs'
import { Actualizarusuario, Usuario, Crearusuario } from '../interfaces/usuario.interface'



const direccionArchivo = './src/data/usuarios.json'

const LecturaUsuarios = (): Usuario[] => {
    const archivo: string = readFileSync('./data/usuarios.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Usuario[]
}

const crearUsuario = (crearUsuario: Crearusuario) => {
    const Usuariosactuales = LecturaUsuarios()
    crearUsuario.id_usuario = crearUsuario.id_usuario // Agregar lógica para deteminar el siguiente ID
    Usuariosactuales.push(crearUsuario as Usuario)
    writeFileSync('./data/usuarios.json', JSON.stringify(Usuariosactuales))
}

const Eliminar = (id_usuario: number) => {
    const Usuariosactuales = LecturaUsuarios()
    const UsuariosFinales = Usuariosactuales.filter((nombre) => nombre.id_usuario !== id_usuario)
    writeFileSync(direccionArchivo, JSON.stringify(UsuariosFinales))
}

const actualizarusuario = (id_usuario: number, actualizarUsuario: Actualizarusuario) => {
    const Usuariosactuales = LecturaUsuarios()
    const UsuarioAActualizar = Usuariosactuales.filter((nombre) => nombre.id_usuario === id_usuario)[0]
    if (actualizarUsuario.nombre) actualizarUsuario.nombre = actualizarUsuario.nombre
    if (actualizarUsuario.clave) actualizarUsuario.clave = actualizarUsuario.clave
    Eliminar(id_usuario)
    const UsuariosFinales = LecturaUsuarios()
    UsuariosFinales.push(UsuarioAActualizar)
    writeFileSync(direccionArchivo, JSON.stringify(UsuariosFinales))
}


export { LecturaUsuarios, crearUsuario, Eliminar }


