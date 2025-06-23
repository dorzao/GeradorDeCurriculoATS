import { AtualizarTexto } from "./atualizarTexto.js";

export class AtualizarTituloFormacao {
    constructor () {
        this.campo = document.getElementById('campo-titulo-formacao');
        this.titulo = document.getElementById('titulo-formacao');

        new AtualizarTexto(this.campo, this.titulo);
    }
}