import { AdicionarRemoverFoto } from "./adicionarRemoverFoto.js";

    export class AdicionarNovaTecnologia {
    constructor () {
        this.botaoAdicionarTecnologia = document.getElementById('botao-adicionar-tecnologia');
        this.caixaTecnologiasFormulario = document.getElementById('caixa-tecnologias-formulario');
        this.caixaTecnologiasRascunho = document.getElementById('caixa-tecnologias-rascunho');

        this.botaoAdicionarTecnologia.addEventListener('click', () => this.adicionarNovaTecnologia());


    }

    adicionarNovaTecnologia () {
        // Criando as duas divs
        let divFormulario = this.criarNovaDiv();
        let divRascunho = this.criarNovaDiv();

        // Criando as divs dos icones
        let divIconeFormulario = this.criarDivIcone();
        let divIconeRascunho = this.criarDivIcone();
        let botaoIcone = this.criarBotaoIcone();
        let botaoProcurar = this.criarBotaoProcurar();

        // Embutindo botoes no na div de icone do formulário
        divIconeFormulario.append(botaoIcone);
        divIconeFormulario.append(botaoProcurar);

        // Atribuindo função de geração de ícone 
        new AdicionarRemoverFoto(botaoProcurar, botaoIcone, divIconeFormulario, divIconeRascunho);

        //Modificando o comportamento da div formulário
        divFormulario.style.justifyContent = 'space-between';

        //Criando campo de texto
        let campo = this.criarCampo()

        //Label
        let label = this.criarLabel();


        // Criando botão x
        let botaoX = this.criarBotaoX();

        // Adicionando função de atualizar texto da label
        campo.addEventListener('input', () => this.atualizarTextoLabel(campo, label));

        // Adicionando função de dupla remoção
        botaoX.addEventListener('click', () => this.removerDiv(this.caixaTecnologiasFormulario, divFormulario));
        botaoX.addEventListener('click', () => this.removerDiv(this.caixaTecnologiasRascunho, divRascunho));

        //Adicionando elementos a div formulário
        divFormulario.append(divIconeFormulario);
        divFormulario.append(campo);
        divFormulario.append(botaoX);

        // Adicionando elementos à div rascunho
        divRascunho.append(divIconeRascunho);
        divRascunho.append(label);

        // jogando as divs  nas caixas
        this.caixaTecnologiasFormulario.insertBefore(divFormulario, this.botaoAdicionarTecnologia);
        this.caixaTecnologiasRascunho.append(divRascunho);
    }

    criarNovaDiv () {
        let div = document.createElement('div');
        //div.style.border = '2px solid green';
        div.style.padding = '1mm';
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
        return div;
    }

    criarDivIcone () {
        let divIcone = document.createElement('div');
        divIcone.style.border = '1mm solid black';
        divIcone.style.height = '5mm';
        divIcone.style.width = '5mm';
        divIcone.style.marginRight = '1mm';
        divIcone.style.backgroundColor = 'transparent';
        return divIcone;
    }

    criarBotaoIcone () {
        let botao = document.createElement('button');
        botao.textContent = '+';
        botao.backgrundColor = 'trasparent';
        return botao;
    }

    criarBotaoProcurar () {
        let botao = document.createElement('input');
        botao.type = 'file';
        botao.style.display = 'none';
        return botao;
    }

    criarCampo () {
        let campo = document.createElement('input');
        campo.type = 'text'
        campo.placeholder = 'Tecnologia'
        return campo;
    }

    criarLabel () {
        let label = document.createElement('label');
        label.textContent = 'tecnologia';
        return label;
    }

    atualizarTextoLabel (campo, label) {
        label.textContent = campo.value;
    }

    criarBotaoX () {
        let botao = document.createElement('button');
        botao.textContent = 'X';
        botao.style.fontWeight = 'bold';
        botao.style.color = 'white';
        botao.style.backgroundColor = 'red';
        botao.style.height = '5mm';
        botao.style.width = '5mm';
        return botao;
    }

    removerDiv (pai, item) {
        pai.removeChild(item);
    }

}