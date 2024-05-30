    export interface Usuario {
        id_usuario: number;
        nombre: string;
        carnet: number;
        correo: string;
        clave: string;
    }
    export interface Crearusuario {
        id_usuario?: number;
        nombre: string;
        carnet: number;
        correo: string;
        clave: string;
    }