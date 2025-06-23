import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarCargo {
    constructor () {
        this.campoCargo = document.getElementById('campo-cargo');
        this.labelCargo = document.getElementById('label-cargo');

        new AtualizarTexto(this.campoCargo, this.labelCargo);
    }
   
}