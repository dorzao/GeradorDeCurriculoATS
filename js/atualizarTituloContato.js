export class AtualizarTituloContato {
    constructor() {
        this.campo = document.getElementById('campo-titulo-infocontato');
        this.titulo = document.getElementById('titulo-infocontato');

        this.campo.addEventListener('input', () => this.atualizarTituloContato());
    }

    atualizarTituloContato () {
        this.titulo.textContent = this.campo.value;
    }
}