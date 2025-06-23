import {AtualizarTexto} from './atualizarTexto.js';

export class AtualizarNome {
  constructor () {
    this.labelNome = document.getElementById('label-nome');
    this.campoNome = document.getElementById('campo-nome');

    new AtualizarTexto(this.campoNome, this.labelNome);
  }

  
}
