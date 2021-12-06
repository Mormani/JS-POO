export class SistemaAutenticação {

    // Metódos Públicos
    static login(auth, senha) {

        return auth.autenticar(senha);
    }
}