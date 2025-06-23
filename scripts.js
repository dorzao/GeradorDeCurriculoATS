import { FotoToggleMenu } from "./js/fotoToggleMenu.js";
import { ConfigurarMargem } from "./js/configurarMargem.js";
import {AtualizarTodosDados} from "./js/atualizarTexto/atualizarTodosDados.js";
import { FuncoesAdicionarRemoverFoto } from "./js/funcoesAdicionarRemoverFoto.js";
import {GerarPDF} from "./js/gerarPDF.js";
import { AdicionarNovoContato } from "./js/adicionarNovoContato.js";
import { AdicionarNovaTecnologia } from "./js/adicionarNovaTecnologia.js";
import { AdicionarNovoProjeto } from "./js/adicionarNovoProjeto.js";

// Instanciando importações
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM completamente carregado!");
  new FotoToggleMenu();
  
  
});


// Ativando função da margem
new ConfigurarMargem();
new AtualizarTodosDados();
new FuncoesAdicionarRemoverFoto();

new GerarPDF();
new AdicionarNovoContato();
new AdicionarNovaTecnologia();
new AdicionarNovoProjeto();

