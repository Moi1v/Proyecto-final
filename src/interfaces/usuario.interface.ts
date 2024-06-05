    export interface Usuario {
        id_usuario: number;
        nombre: string;
        carnet: number;
        correo: string;
        clave: string;
    }
    export interface Crearusuario {
        id_usuario: number;
        nombre: string;
        carnet: number;
        correo: string;
        clave: string;
    }
    export interface Actualizarusuario {
        nombre?: string
        correo?: number
        clave?: number
    }