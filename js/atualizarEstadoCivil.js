export class AtualizarEstadoCivil {
    constructor () {
        this.campoEstadoCivil = document.getElementById('campo-estado-civil');
        this.labelEstadoCivil = document.getElementById('label-estado-civil');

        // Verifica se o select e o label existem antes de adicionar o listener
        if (this.campoEstadoCivil && this.labelEstadoCivil) {
            this.campoEstadoCivil.addEventListener('change', () => this.atualizarEstadoCivil());
        } else {
            console.error("Elemento não encontrado: Verifique se 'campo-estado-civil' e 'label-estado-civil' existem no DOM.");
        }
    }

    atualizarEstadoCivil() {
        // Verifica se o valor do select não é vazio
        if (this.campoEstadoCivil.value) {
            this.labelEstadoCivil.textContent = `${this.campoEstadoCivil.value} | `;
        } else {
            this.labelEstadoCivil.textContent = '';
        }
    }
}
