export class GerarPDF {
    constructor () {
        this.conteudoRascunho = document.getElementById('conteudo-rascunho');
        this.tamanhoMargem = document.getElementById('tamanho-margem');
        this.gerarPDF = document.getElementById('gerar-pdf');

        this.gerarPDF.addEventListener('click', () => this.disparar());
    }

    disparar () {
        
        window.onbeforeprint = () => {
            this.conteudoRascunho.style.margin = `${this.tamanhoMargem.value}mm`;
        };
        
        window.onafterprint = () => {
            this.conteudoRascunho.style.margin = `${this.tamanhoMargem.value}mm`;
        };

        window.print(); // Chama o método print
    }
}
