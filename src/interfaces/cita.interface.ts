export interface Cita {
    fecha_hora: Date;
    id_paciente: number;
    id_doctor: number;
}

export interface CrearCita{
    nombre:string;
    fecha_hora?: Date;
    id_paciente: number;
    id_doctor: number;
}

export interface ActualizarCitas{
    nombre?:string;
    fecha_hora?: Date;
    id_paciente: number;
    id_doctor: number;
}