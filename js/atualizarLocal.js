export class AtualizarLocal {
    constructor () {
        this.campoLocal = document.getElementById('campo-local');
        this.labelLocal = document.getElementById('label-local');

        this.campoLocal.addEventListener('input', () => this.atualizarLocal());
    }

    atualizarLocal () {
        if (this.campoLocal.value) {
            this.labelLocal.textContent = this.campoLocal.value;
        } else {
            this.labelLocal.textContent = '';
        }
    }
}