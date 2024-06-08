import { Medicamento } from './medicamento.interface'


export interface Receta {
    nombre: string
    id_paciente: number
    id_doctor: number
    medicamentos?: Medicamento[]

}

export interface CrearRecetas{
    nombre?: string
    id_paciente: number
    id_doctor: number
    medicamentos?: Medicamento[]

}

export interface ActualizarRecetas{
    nombre: string
    id_paciente?: number
    id_doctor: number
    medicamentos: Medicamento[]

}