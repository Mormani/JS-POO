export class SistemaAutenticação {

    // Metódos Públicos
    static login(auth, senha) {

        if(SistemaAutenticação.ehAuth(auth))
            return auth.autenticar(senha);

        return false;
    }

    static ehAuth(auth) {

        return "autenticar" in auth &&
                auth.autenticar instanceof Function;
    }
}