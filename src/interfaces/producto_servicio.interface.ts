export interface ProductoServicio {
    id_producto_servicio: number
    tipo: 'Servicio' | ' Producto'
    nombre: string
    precio: number
}

export interface CrearProducto{
    id_producto_servicio: number
    tipo: 'Servicio' | ' Producto'
    nombre: string
    precio: number
}

export interface ActualizarProducto{
    id_producto_servicio: number
    tipo: 'Servicio' | ' Producto'
    nombre: string
    precio: number
}