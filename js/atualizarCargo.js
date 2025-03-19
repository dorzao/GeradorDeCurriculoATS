export class AtualizarCargo {
    constructor () {
        this.campoCargo = document.getElementById('campo-cargo');
        this.labelCargo = document.getElementById('label-cargo');

        this.campoCargo.addEventListener('input', () => this.atualizarCargo());
    }

    atualizarCargo () {
        this.labelCargo.textContent = this.campoCargo.value;
    }
}