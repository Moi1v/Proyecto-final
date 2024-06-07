export interface Paciente {
    id_paciente: number
    nombre: string
    fecha_nacimiento: Date
    direccion: string
    telefono: number
    alergias: string[]
    medicamentos_actuales: string[]
    condiciones_medicas: string[]
}

export interface CrearRegistro{
    id_paciente: number
    nombre: string
    fecha_nacimiento?: Date
    direccion: string
    telefono?: number
    alergias?: string[]
    medicamentos_actuales?: string[]
    condiciones_medicas?: string[]
}

export interface ActualizarRegistro{
    id_paciente?: number    
    nombre?: string
    direccion?: string
    telefono?: number

}