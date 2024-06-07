import { Horario } from './horario.interface'

export interface Doctor {
    id_doctor: number
    nombre: string
    especialidad: 'Odontología' | 'Cirujano Oral'
    horario: Horario
}

export interface GestionDoctores{
    id_doctor?: number
    nombre: string
    especialidad: 'Odontología' | 'Cirujano Oral'
    horario?: Horario
}

export interface ActualizarDoctores{
    id_doctor?: number
    nombre: string
    especialidad?: 'Odontología' | 'Cirujano Oral'
    horario?: Horario
}

