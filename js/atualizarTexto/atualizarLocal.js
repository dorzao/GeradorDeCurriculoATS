import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarLocal {
    constructor () {
        this.campoLocal = document.getElementById('campo-local');
        this.labelLocal = document.getElementById('label-local');

        new AtualizarTexto(this.campoLocal, this.labelLocal);
    }

    
}