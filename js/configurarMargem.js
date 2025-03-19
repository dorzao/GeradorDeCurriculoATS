export class ConfigurarMargem {
    constructor () {
    
        // variáveis do sistema de margem===
        this.tamanhoMargem = document.getElementById('tamanho-margem');
        this.conteudoFormulario = document.getElementById('conteudo-formulario');
        this.conteudoRascunho = document.getElementById('conteudo-rascunho');
        // ==================================
        
        this.tamanhoMargem.addEventListener('input', () =>this.atualizarMargem());
   
    }

    atualizarMargem(){
        this.conteudoFormulario.style.margin = `${this.tamanhoMargem.value}mm`;
        this.conteudoRascunho.style.margin = `${this.tamanhoMargem.value}mm`;
        

    }
}