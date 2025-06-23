import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarTituloContato {
    constructor() {
        this.campo = document.getElementById('campo-titulo-infocontato');
        this.titulo = document.getElementById('titulo-infocontato');

        new AtualizarTexto(this.campo, this.titulo);
    }

}