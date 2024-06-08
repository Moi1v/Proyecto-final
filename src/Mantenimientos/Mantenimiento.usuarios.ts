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

const deshabilitarUsuario = (idUsuario: number) => {
    const usuariosActuales = LecturaUsuarios();
    const usuariosFinales = usuariosActuales.map((usuario) => {
        if (usuario.id_usuario === idUsuario) {
            usuario.activo // Cambiar la propiedad activo a false
        }
        return usuario;
    });
    writeFileSync('./src/data/usuarios.json', JSON.stringify(usuariosFinales));
};

deshabilitarUsuario(1);

const autenticarUsuario = (nombre: string, clave: string): Usuario | null => {
    const usuarios = LecturaUsuarios();
    const usuarioAutenticado = usuarios.find((usuario) => usuario.nombre === nombre && usuario.clave === clave && usuario.activo);

    if (usuarioAutenticado) {
        console.log('Usuario autenticado:', usuarioAutenticado);
        return usuarioAutenticado;
    } else {
        console.log('Credenciales incorrectas o usuario deshabilitado');
        return null;
    }
};

const nombre = 'Paolo Martinez';
const clave = 'P@ol0M@rt¡n3z';

autenticarUsuario(nombre, clave);

const actualizarusuario = (id_usuario: number, actualizarUsuario: Actualizarusuario) => {
    const Usuariosactuales = LecturaUsuarios()
    const UsuarioAActualizar = Usuariosactuales.filter((nombre) => nombre.id_usuario === id_usuario)[0]
    if (actualizarUsuario.nombre) actualizarUsuario.nombre = actualizarUsuario.nombre
    if (actualizarUsuario.clave) actualizarUsuario.clave = actualizarUsuario.clave
    deshabilitarUsuario(id_usuario)
    const UsuariosFinales = LecturaUsuarios()
    UsuariosFinales.push(UsuarioAActualizar)
    writeFileSync(direccionArchivo, JSON.stringify(UsuariosFinales))
}


export { LecturaUsuarios, crearUsuario, deshabilitarUsuario, autenticarUsuario }


