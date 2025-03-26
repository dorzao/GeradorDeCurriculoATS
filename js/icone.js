export class Icone {
    constructor(titulo = '+ ícone') {
        this.titulo = titulo;
    }

    gerandoDivIcone() {
        

        // Criação da div principal do ícone
        let divIcone = document.createElement('div');
        divIcone.style.width = '6mm';
        divIcone.style.height = '6mm'; 
        divIcone.style.marginRight = '3px';
        
        
        divIcone.style.border = '1px solid black'; // Adicionando uma borda para visualização
        divIcone.style.borderRadius = '8px'; // Bordas arredondadas

        // Criação do botão
        let botaoAddRemoveIcone = document.createElement('button');
        botaoAddRemoveIcone.textContent = this.titulo;
        botaoAddRemoveIcone.style.cursor = 'pointer'; // Mudando o cursor para indicar que o botão é clicável
        botaoAddRemoveIcone.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        
        botaoAddRemoveIcone.style.width = '100%';
        botaoAddRemoveIcone.style.height = '100%';

        // Adiciona o botão à div
        divIcone.appendChild(botaoAddRemoveIcone);

        // Retorna a div criada
        return divIcone;
    }
}
