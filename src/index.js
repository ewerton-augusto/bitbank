
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"

import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"

import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const cliente1 = new Cliente("Ricardo",1111111111);
const cliente2 = new Cliente("Aline",1111111112);

const contaCorrenteRicardo = new ContaCorrente("1001", cliente1);
const contaCorrenteAline = new ContaCorrente("1002", cliente2);
const contaPoupancaRicardo = new ContaPoupanca(50,"1001",cliente1);
const contaSalarioRicardo = new ContaSalario(cliente1);

const diretor = new Diretor("Pedro",10000,12345678900);
const gerente = new Gerente("Luan",6000,12345678901);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");

console.log(gerenteEstaLogado, diretorEstaLogado);

const cliente3 = new Cliente("Luan",1234567891,"1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente3,"1234");

console.log(clienteEstaLogado);