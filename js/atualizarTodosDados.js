import {AtualizarNome} from "./atualizarNome.js";
import { AtualizarCargo } from "./atualizarCargo.js";
import { AtualizarIdade } from "./atualizarIdade.js";

export class AtualizarTodosDados {
    constructor () {
        new AtualizarNome();
        new AtualizarCargo();
        new AtualizarIdade();
    }
}