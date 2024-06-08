import { readFileSync, writeFileSync } from 'fs'
import { Factura } from '../interfaces/factura.interface' 



function generarYAlmacenarFactura(factura: Factura) {
    console.log("Factura Generada:");
    console.log(factura);

    const facturaJSON = JSON.stringify(factura);

    writeFileSync('./src/data/facturas.json', facturaJSON);
}

const finalizarCita = (idFactura: number, idPaciente: number, idDoctor: number, serviciosConsumidos: number[], total: number) => {
    const fechaHora = new Date();
    const factura: Factura = {
        id_factura: idFactura,
        fecha_hora: fechaHora,
        id_paciente: idPaciente,
        id_doctor: idDoctor,
        servicios_consumidos: serviciosConsumidos,
        total: total
    };

    generarYAlmacenarFactura(factura);
};

finalizarCita(1, 3, 5, [2, 4, 7], 700);
