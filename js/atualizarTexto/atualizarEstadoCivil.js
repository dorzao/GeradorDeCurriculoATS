import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarEstadoCivil {
    constructor () {
        this.campoEstadoCivil = document.getElementById('campo-estado-civil');
        this.labelEstadoCivil = document.getElementById('label-estado-civil');

        new AtualizarTexto(this.campoEstadoCivil, this.labelEstadoCivil, 'change', ' | ');
        
    }

    
}
