import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarTituloTecnologias {
    constructor () {
        this.campoTecnologia = document.getElementById('campo-titulo-tecnologias');
        this.labelTecnologia = document.getElementById('titulo-tecnologias');

        new AtualizarTexto(this.campoTecnologia, this.labelTecnologia);
    }

}