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
class ClinicSystem {
    private pacientes: Paciente[] = [];
    private currentId: number = 1;

    public registerPaciente(paciente: Omit<Paciente, 'id_paciente'>): string {
        if (!this.isValidPaciente(paciente)) {
            return "Datos del paciente no válidos";
        }

        const newPaciente: Paciente = { ...paciente, id_paciente: this.currentId++ };
        this.pacientes.push(newPaciente);
        return "Paciente registrado exitosamente";
    }

    public listPacientes(): Paciente[] {
        return this.pacientes;
    }

    private isValidPaciente(paciente: Omit<Paciente, 'id_paciente'>): boolean {
        return this.isNombreValid(paciente.nombre) &&
               this.isFechaNacimientoValid(paciente.fecha_nacimiento) &&
               this.isDireccionValid(paciente.direccion) &&
               this.isTelefonoValid(paciente.telefono);
    }

    private isNombreValid(nombre: string): boolean {
        return nombre.length > 0;
    }

    private isFechaNacimientoValid(fecha_nacimiento: Date): boolean {
        const today = new Date();
        return fecha_nacimiento < today;
    }

    private isDireccionValid(direccion: string): boolean {
        return direccion.length > 0;
    }

    private isTelefonoValid(telefono: number): boolean {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(telefono.toString());
    }
}

// Ejemplo de uso
const clinicSystem = new ClinicSystem();
console.log(clinicSystem.registerPaciente({
    nombre: 'Carlos Méndez',
    fecha_nacimiento: new Date('1990-05-15'),
    direccion: 'Ciudad de Guatemala',
    telefono: 12345678,
    alergias: ['Penicilina'],
    medicamentos_actuales: ['Aspirina'],
    condiciones_medicas: ['Diabetes']
}));
console.log(clinicSystem.registerPaciente({
    nombre: 'Luisa Martínez',
    fecha_nacimiento: new Date('1985-10-20'),
    direccion: 'Villa Nueva, Guatemala',
    telefono: 98765432,
    alergias: [],
    medicamentos_actuales: [],
    condiciones_medicas: ['Hipertensión']
}));

// Mostrar los pacientes registrados
const pacientes = clinicSystem.listPacientes();
console.log("Lista de pacientes registrados:");
pacientes.forEach(paciente => {
    console.log(`ID: ${paciente.id_paciente}, Nombre: ${paciente.nombre}, Fecha de nacimiento: ${paciente.fecha_nacimiento.toDateString()}, Dirección: ${paciente.direccion}, Teléfono: ${paciente.telefono}, Alergias: ${paciente.alergias.join(', ')}, Medicamentos actuales: ${paciente.medicamentos_actuales.join(', ')}, Condiciones médicas: ${paciente.condiciones_medicas.join(', ')}`);
});
