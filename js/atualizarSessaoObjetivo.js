export class AtualizarSessaoObjetivo{
    constructor () {
        this.campoTituloObjetivo = document.getElementById('campo-titulo-objetivo');
        this.campoObjetivo = document.getElementById('campo-objetivo');

        this.tituloObjetivo = document.getElementById('titulo-objetivo');
        this.paragrafoObjetivo = document.getElementById('paragrafo-objetivo');

        this.campoTituloObjetivo.addEventListener('input', () => this.atualizarTituloObjetivo());
        this.campoObjetivo.addEventListener('input', () => this.atualizarCampoObjetivo());
    }

    atualizarTituloObjetivo () {
        this.tituloObjetivo.textContent = this.campoTituloObjetivo.value;
        
    }

    atualizarCampoObjetivo () {
        this.paragrafoObjetivo.textContent = this.campoObjetivo.value;
    }
}