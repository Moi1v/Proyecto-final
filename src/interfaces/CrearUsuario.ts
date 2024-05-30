import { writeFileSync } from 'fs';
import { Usuario, Lecturausuarios } from './Mantenimiento.usuarios';

const CrearUsuario = (CrearUsuario: Usuario) => {
    const usuariosnuevos = Lecturausuarios();
    CrearUsuario.id_usuario = 4; // Agregar lógica para deteminar el siguiente ID
    Lecturausuarios.push(CrearUsuario as Usuario);
    writeFileSync('./data/usuarios.json', JSON.stringify(Lecturausuarios));
};
