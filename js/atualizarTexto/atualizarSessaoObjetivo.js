import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarSessaoObjetivo{
    constructor () {
        this.campoTituloObjetivo = document.getElementById('campo-titulo-objetivo');
        this.campoObjetivo = document.getElementById('campo-objetivo');

        this.tituloObjetivo = document.getElementById('titulo-objetivo');
        this.paragrafoObjetivo = document.getElementById('paragrafo-objetivo');

        // Atualizando título
        new AtualizarTexto(this.campoTituloObjetivo, this.tituloObjetivo);

        //Atualizando parágrafo
        new AtualizarTexto(this.campoObjetivo, this.paragrafoObjetivo);
    }
   
}