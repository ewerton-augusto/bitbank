import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static quantidadeContasCorrente = 0;

    constructor(agencia,cliente){
        super(0,agencia,cliente);
        ContaCorrente.quantidadeContasCorrente += 1;
    }

    sacar(valor){
        const taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}