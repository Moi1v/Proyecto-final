import { readFileSync, writeFileSync } from 'fs'
import {  Crearusuario, Usuario  } from './usuario.interface'

const direccionArchivo = './src/data/productos.json'

const Lecturausuarios = (): Usuario[] => {
    const archivo: string = readFileSync('./data/usuarios.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Usuario[]
}

const crearusuario = (crearusuario: Crearusuario) => {
    const usuariosactuales = Lecturausuarios()
    crearusuario.id_usuario = 4 // Agregar lógica para deteminar el siguiente ID
    usuariosactuales.push(crearusuario as Usuario)
    writeFileSync('./data/usuarios.json', JSON.stringify(usuariosactuales))
}