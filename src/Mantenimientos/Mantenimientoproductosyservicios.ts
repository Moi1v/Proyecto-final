import { readFileSync, writeFileSync } from 'fs'
import { ProductoServicio, ActualizarProducto, CrearProducto } from '../interfaces/producto_servicio.interface' 


const direCcionArchivo = './src/data/productos_servicios.json'

const Lecturaproducto = (): ProductoServicio[] => {
    const archivo: string = readFileSync('./data/productos_servicios.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as ProductoServicio[]
}

const crearproducto = (crearProducto: CrearProducto ) => {
    const ProductosActuales = Lecturaproducto()
    crearProducto.id_producto_servicio = crearProducto.id_producto_servicio // Agregar lógica para deteminar el siguiente ID
    ProductosActuales.push(crearProducto as ProductoServicio)
    writeFileSync('./data/productos_servicios.json', JSON.stringify(ProductosActuales))
}

const Eliminarproducto = (id_producto_servicio: number) => {
    const ProductosActuales = Lecturaproducto()
    const ProductosFinales = ProductosActuales.filter((nombre) => nombre.id_producto_servicio !== id_producto_servicio)
    writeFileSync(direCcionArchivo, JSON.stringify(ProductosFinales))
}

const actualizarProducto = (id_producto_servicio: number, actualizarproducto: ActualizarProducto) => {
    const ProductosActuales = Lecturaproducto()
    const ProductoAActualizar = ProductosActuales.filter((nombre) => nombre.id_producto_servicio === id_producto_servicio)[0]
    if (actualizarproducto.nombre) actualizarproducto.nombre = actualizarproducto.nombre
    if (actualizarproducto.precio) actualizarproducto.precio = actualizarproducto.precio
    Eliminarproducto(id_producto_servicio)
    const ProductosFinales = Lecturaproducto()
    ProductosFinales.push(ProductoAActualizar)
    writeFileSync(direCcionArchivo, JSON.stringify(ProductosFinales))
}


export { Lecturaproducto, crearproducto, Eliminarproducto }


