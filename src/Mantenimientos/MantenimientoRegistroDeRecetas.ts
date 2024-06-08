import { readFileSync, writeFileSync } from 'fs'
import { ActualizarRecetas, CrearRecetas, Receta } from '../interfaces/receta.interface'


const DirecArchv = './src/data/recetas.json'


const LecturaRecetas = (): Receta[] => {
    const archivo: string = readFileSync('./data/recetas.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Receta[]
}

const crearReceta = (crearreceta: CrearRecetas) => {
    const RecetasActuales = LecturaRecetas()
    crearreceta.id_doctor = crearreceta.id_doctor // Agregar lógica para deteminar el siguiente ID
RecetasActuales.push(crearreceta as Receta)
    writeFileSync('./data/recetas.json', JSON.stringify(RecetasActuales))
}

const EliminarRecetas = (id_paciente: number) => {
    const RecetasActuales = LecturaRecetas()
    const UsuariosFinales = RecetasActuales.filter((nombre) => nombre.id_paciente !== id_paciente)
    writeFileSync(DirecArchv, JSON.stringify(UsuariosFinales))
}

const ActualizarREcetas = (id_paciente: number, actualizarrecetas: ActualizarRecetas) => {
    const RecetasActuales = LecturaRecetas()
    const UsuarioAActualizar = RecetasActuales.filter((nombre) => nombre.id_paciente === id_paciente)[0]
    if (actualizarrecetas.id_paciente) actualizarrecetas.id_paciente = actualizarrecetas.id_paciente
    if (actualizarrecetas.id_doctor) actualizarrecetas.id_doctor = actualizarrecetas.id_doctor
    EliminarRecetas(id_paciente)
    const RecetasFinales = LecturaRecetas()
    RecetasFinales.push(UsuarioAActualizar)
    writeFileSync(DirecArchv, JSON.stringify(RecetasFinales))
}


export { LecturaRecetas, crearReceta, EliminarRecetas }
