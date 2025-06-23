import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarIdade {
    constructor () {
        this.campoIdade = document.getElementById('campo-idade');
        this.labelIdade = document.getElementById('label-idade');

        new AtualizarTexto(this.campoIdade, this.labelIdade, 'input', ' anos | ');
    }
    
}