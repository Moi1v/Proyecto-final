import { readFileSync, writeFileSync } from 'fs'
import {  Crearusuario, Usuario  } from './usuario.interface'

const direccionArchivo = './src/data/productos.json'

const LecturaUsuarios = (): Usuario[] => {
    const archivo: string = readFileSync('./data/usuarios.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Usuario[]
}

const crearUsuario = (crearUsuario: Crearusuario) => {
    const Usuariosactuales = LecturaUsuarios()
    crearUsuario.id_usuario = 3 // Agregar lógica para deteminar el siguiente ID
    Usuariosactuales.push(crearUsuario as Usuario)
    writeFileSync('./data/usuarios.json', JSON.stringify(Usuariosactuales))
}



export { LecturaUsuarios, crearUsuario }