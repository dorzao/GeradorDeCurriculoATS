export class AtualizarTituloTecnologias {
    constructor () {
        this.campoTecnologia = document.getElementById('campo-titulo-tecnologias');
        this.labelTecnologia = document.getElementById('titulo-tecnologias');

        this.campoTecnologia.addEventListener('input', () => this.atualizarTituloTecnologias());

    }

    atualizarTituloTecnologias () {
        this.labelTecnologia.textContent = this.campoTecnologia.value;
    }
}