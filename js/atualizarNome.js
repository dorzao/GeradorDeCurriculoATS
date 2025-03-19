export class AtualizarNome {
  constructor () {
    this.labelNome = document.getElementById('label-nome');
    this.campoNome = document.getElementById('campo-nome');

    this.campoNome.addEventListener('input', () => this.atualizarNome());
  }

  atualizarNome () {
    this.labelNome.textContent = this.campoNome.value;
  }
}
