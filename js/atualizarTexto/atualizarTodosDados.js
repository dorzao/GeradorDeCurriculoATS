import {AtualizarNome} from "./atualizarNome.js";
import { AtualizarCargo } from "./atualizarCargo.js";
import { AtualizarIdade } from "./atualizarIdade.js";
import { AtualizarEstadoCivil } from "./atualizarEstadoCivil.js";
import { AtualizarLocal } from "./atualizarLocal.js";
import { AtualizarSessaoObjetivo } from "./atualizarSessaoObjetivo.js";
import { AtualizarTituloContato } from "./atualizarTituloContato.js";
import { AtualizarTituloTecnologias } from "./atualizarTituloTecnologias.js";
import { AtualizarTituloExperiencia } from './atualizarTituloExperiencia.js';
import { AtualizarTituloFormacao } from "./atualizarTituloFormacao.js";

export class AtualizarTodosDados {
    constructor () {
        new AtualizarNome();
        new AtualizarCargo();
        new AtualizarIdade();
        new AtualizarEstadoCivil();
        new AtualizarLocal();
        new AtualizarSessaoObjetivo();
        new AtualizarTituloContato();
        new AtualizarTituloTecnologias();
        new AtualizarTituloExperiencia();
        new AtualizarTituloFormacao();
    }
}