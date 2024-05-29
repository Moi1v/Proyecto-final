export interface Cita {
    fecha_hora: Date;
    id_paciente: number;
    id_doctor: number;
}

class ClinicSystem {
    private citas: Cita[] = [];

    public programarCita(cita: Cita): string {
        if (!this.isValidCita(cita)) {
            return "Datos de la cita no válidos";
        }

        this.citas.push(cita);
        return "Cita programada exitosamente";
    }

    public listarCitas(): Cita[] {
        return this.citas;
    }

    private isValidCita(cita: Cita): boolean {
        return cita.fecha_hora instanceof Date &&
               cita.id_paciente > 0 &&
               cita.id_doctor > 0;
    }
}

// Ejemplo de uso
const clinicSystem = new ClinicSystem();

// Programar citas
console.log(clinicSystem.programarCita({
    fecha_hora: new Date('2024-06-01T09:00:00'),
    id_paciente: 1,
    id_doctor: 1
}));

console.log(clinicSystem.programarCita({
    fecha_hora: new Date('2024-06-02T10:30:00'),
    id_paciente: 2,
    id_doctor: 2
}));

// Mostrar citas programadas
const citas = clinicSystem.listarCitas();
console.log("Lista de citas programadas:");
citas.forEach(cita => {
    console.log(`Fecha y hora: ${cita.fecha_hora.toISOString()}, Paciente: ${cita.id_paciente}, Doctor: ${cita.id_doctor}`);
});
