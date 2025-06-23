import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarTituloExperiencia {

    constructor () {
        this.campo = document.getElementById('campo-titulo-experiencia');
        this.titulo = document.getElementById('titulo-experiencia');

        new AtualizarTexto(this.campo, this.titulo);
    }
    
}