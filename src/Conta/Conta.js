//Classe abstrata - classes que serão usadas apenas para heranças

/*

Possuimos encapsulamentos para proteger nossos métodos e atributos, com os acessores get/set, 
métodos e atributos restritos _ 

*/ 

import {Cliente} from "../Cliente.js";

export class Conta{

    constructor(saldo,agencia,cliente){
        
        if(this.constructor == Conta){
            throw new Error("A classe Conta não pode ser instanciada diretamente pois é uma classe abstrata.");
        }

        this._agencia = agencia;
        this._cliente = cliente;        
        this._saldo = saldo;
    }
    
    set cliente(valorCliente){
        if(valorCliente instanceof Cliente){
            this._cliente = valorCliente;            
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //método abstrato
    sacar(){
        throw new Error("Sacar é um método abstrato");
    }

    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        //early return
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}