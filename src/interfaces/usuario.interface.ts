import { readFileSync } from 'fs'

const Ususariospredeterminados = () => {

    const Listausuarios:string = readFileSync('./../data/usuarios.json', 'utf8')
    console.log(Listausuarios)
}
export {Ususariospredeterminados}



export interface Usuario {
    id_usuario: number;
    nombre: string;
    carnet: number;
    correo: string;
    clave: string;
}


class ValidadorUsuario {
    public esUsuarioValido(usuario: Usuario): boolean {
        if (!this.esIDValido(usuario.id_usuario)) {
            console.log("El ID de usuario no es válido.");
            return false;
        }

        if (!this.esNombreValido(usuario.nombre)) {
            console.log("El nombre no es válido.");
            return false;
        }

        if (!this.esCarnetValido(usuario.carnet)) {
            console.log("El carnet no es válido.");
            return false;
        }

        if (!this.esCorreoValido(usuario.correo)) {
            console.log("El correo no es válido.");
            return false;
        }

        if (!this.esClaveValida(usuario.clave)) {
            console.log("La clave no es válida.");
            return false;
        }

        console.log("Usuario válido.");
        return true;
    }

    private esIDValido(id: number): boolean {
        if (id <= 0) {
            console.log("El ID debe ser un número positivo.");
            return false;
        }

        if (!Number.isInteger(id)) {
            console.log("El ID debe ser un número entero.");
            return false;
        }

        return true;
    }

    private esNombreValido(nombre: string): boolean {
        if (nombre.length < 3) {
            console.log("El nombre debe tener al menos 3 caracteres.");
            return false;
        }

        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            console.log("El nombre solo puede contener letras y espacios.");
            return false;
        }

        return true;
    }

    private esCarnetValido(carnet: number): boolean {
        if (carnet <= 0) {
            console.log("El carnet debe ser un número positivo.");
            return false;
        }

        if (!Number.isInteger(carnet)) {
            console.log("El carnet debe ser un número entero.");
            return false;
        }

        return true;
    }

    private esCorreoValido(correo: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(correo);
    }

    private esClaveValida(clave: string): boolean {
        if (clave.length < 6) {
            console.log("La clave debe tener al menos 6 caracteres.");
            return false;
        }

        return true;
    }
}


const validador = new ValidadorUsuario();
const usuario: Usuario = {
    id_usuario: 1,
    nombre: 'Juan Perez',
    carnet: 201912345,
    correo: 'juanperez@example.com',
    clave: 'Ju4N,P$R3z'
};


export {validador, usuario}

