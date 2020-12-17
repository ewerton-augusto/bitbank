export class SistemaAutenticacao{
    /*
    Polimorfismo
    
    receber um objeto de forma genérica 
    e poder reutilizar ele independente dele ser Diretor ou Gerente chama-se polimorfismo.
    
    Duck typing - independente do tipo do objeto o que vai importar é se ele 
    possui os métodos e propriedades do que precisamos fazer

    */
    static login(autenticavel,senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false; 
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}