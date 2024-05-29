interface User {
    username: string;
    password: string;
    email: string;
}

class UserAccount {
    private users: User[] = [];

    public createAccount(username: string, password: string, email: string): string {
        if (!this.isUsernameValid(username)) {
            return "Nombre de usuario no válido";
        }

        if (!this.isPasswordValid(password)) {
            return "Contraseña no válida";
        }

        if (!this.isEmailValid(email)) {
            return "Correo electrónico no válido";
        }

        if (this.isUsernameTaken(username)) {
            return "Nombre de usuario ya está en uso";
        }

        const newUser: User = { username, password, email };
        this.users.push(newUser);
        return "Cuenta creada exitosamente";
    }

    public modifyUsername(oldUsername: string, newUsername: string): string {
        const user = this.findUserByUsername(oldUsername);
        if (!user) {
            return "Usuario no encontrado";
        }

        if (!this.isUsernameValid(newUsername)) {
            return "Nombre de usuario no válido";
        }

        if (this.isUsernameTaken(newUsername)) {
            return "Nombre de usuario ya está en uso";
        }

        user.username = newUsername;
        return "Nombre de usuario actualizado exitosamente";
    }

    public modifyPassword(username: string, newPassword: string): string {
        const user = this.findUserByUsername(username);
        if (!user) {
            return "Usuario no encontrado";
        }

        if (!this.isPasswordValid(newPassword)) {
            return "Contraseña no válida";
        }

        user.password = newPassword;
        return "Contraseña actualizada exitosamente";
    }

    public listUsers(): User[] {
        return this.users;
    }

    private isUsernameValid(username: string): boolean {
        return username.length >= 3;
    }

    private isPasswordValid(password: string): boolean {
        return password.length >= 6;
    }

    private isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private isUsernameTaken(username: string): boolean {
        return this.users.some(user => user.username === username);
    }

    private findUserByUsername(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }
}

// Ejemplo de uso
const userAccount = new UserAccount();
console.log(userAccount.createAccount('Juan Perez', 'Ju4N,P$R3z*', 'juanperez@example.com'));
console.log(userAccount.createAccount('Pedro López', 'p3DR,0LoPe7', 'pedrolopez@example.com'));
console.log(userAccount.modifyUsername('Juan Piri', 'nuevoUsuario1')); // Nombre de usuario actualizado exitosamente
console.log(userAccount.modifyPassword('nuevoUsuario1', 'Ju@NP!r!r')); // Contraseña actualizada exitosamente

// Mostrar los usuarios y contraseñas
const users = userAccount.listUsers();
console.log("Lista de usuarios y contraseñas:");
users.forEach(user => {
    console.log(`Usuario: ${user.username}, Contraseña: ${user.password}`);
});