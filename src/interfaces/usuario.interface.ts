    export interface Usuario {
        id_usuario: number;
        nombre: string;
        carnet: number;
        correo: string;
        clave: string;
    }

    class ClinicSystem {
        private usuarios: Usuario[] = [];
        private currentUsuarioId: number = 1;

        public registerUsuario(usuario: Omit<Usuario, 'id_usuario'>): string {
            if (!this.isValidUsuario(usuario)) {
                return "Datos del usuario no válidos";
            }

            const newUsuario: Usuario = { ...usuario, id_usuario: this.currentUsuarioId++ };
            this.usuarios.push(newUsuario);
            return "Usuario registrado exitosamente";
        }

        public listUsuarios(): Usuario[] {
            return this.usuarios;
        }

        private isValidUsuario(usuario: Omit<Usuario, 'id_usuario'>): boolean {
            return this.isNombreValid(usuario.nombre) &&
                this.isCarnetValid(usuario.carnet) &&
                this.isCorreoValid(usuario.correo) &&
                this.isClaveValid(usuario.clave);
        }

        private isNombreValid(nombre: string): boolean {
            return nombre.length > 0;
        }

        private isCarnetValid(carnet: number): boolean {
            const carnetRegex = /^[0-9]{8}$/; // Ejemplo: un carnet con 8 dígitos
            return carnetRegex.test(carnet.toString());
        }

        private isCorreoValid(correo: string): boolean {
            const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return correoRegex.test(correo);
        }

        private isClaveValid(clave: string): boolean {
            return clave.length >= 6;
        }
    }

    // Ejemplo de uso
    const clinicSystem = new ClinicSystem();
    console.log(clinicSystem.registerUsuario({
        nombre: 'Juan Perez',
        carnet: 201912345,
        correo: 'juanperez@example.com',
        clave: 'Ju4N,P$R3z*'
    }));
    console.log(clinicSystem.registerUsuario({
        nombre: 'Pedro López',
        carnet: 201922222,
        correo: 'pedrolopez@example.com',
        clave: 'p3DR,0LoPe7'
    }));

    // Mostrar los usuarios registrados
    const usuarios = clinicSystem.listUsuarios();
    console.log("Lista de usuarios registrados:");
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id_usuario}, Nombre: ${usuario.nombre}, Carnet: ${usuario.carnet}, Correo: ${usuario.correo}, Clave: ${usuario.clave}`);
    });
