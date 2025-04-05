import { Icone } from "./icone.js";
import { AdicionarRemoverFoto } from "./adicionarRemoverFoto.js";

export class AdicionarNovoContato {
    constructor() {
        this.botaoAdicionarContato = document.getElementById('botao-adicionar-contato');
        this.caixaInfocontatoFormulario = document.getElementById('caixa-infocontato-formulario');
        this.caixaInfocontatoRascunho = document.getElementById('caixa-infocontato-rascunho');
        

        
        // Verifica se os elementos existem antes de adicionar o evento
        if (this.botaoAdicionarContato && this.caixaInfocontatoFormulario) {
            this.botaoAdicionarContato.addEventListener('click', () => this.adicionarContato());
        } else {
            console.error("Elementos não encontrados no DOM.");
        }
    }

    adicionarContato() {
        
        // Criando as 2 divs 
        let novoContato = this.criarNovoContatoDiv();
        let novoContatoRascunho = this.criarNovoContatoDiv();

        // Criar o ícone
        
        let divIcone = this.criarDivIconeFormulario();
        let botaoIconeFormulario = this.criarBotaoIconeFormulario();
        let botaoProcurarIcone = this.criarBotaoProcurarIcone();



        let divIconeRascunho = this.criarDivIconeRascunho();

        //Adicionando elementos ao icone formulario
        divIcone.append(botaoIconeFormulario);
        divIcone.append(botaoProcurarIcone);
        new AdicionarRemoverFoto(botaoProcurarIcone, botaoIconeFormulario, divIcone, divIconeRascunho);


        // Criando label e campo de descrição
        let campoDescricaoContato = this.criarCampoDescricaoContato();
        let labelDescricao = this.criarLabelDescricaoContato();

        // Criando campos de texto de link
        let campoTextoLink = this.criarCampoTextoLink();
        let labelTextoLink = this.CriarLabelTextoLink();

        // Gerando campo link
        let campoLink = this.criarCampoLink();

        // Criando botão x
        let botaoX = this.criarBotaoX();
        

        // Adicionando o ícone e o campo de texto ao novo contato
        novoContato.appendChild(divIcone);
        novoContato.appendChild(campoDescricaoContato);
        novoContato.appendChild(campoTextoLink);
        novoContato.appendChild(campoLink);
        novoContato.appendChild(botaoX);

        //Adicionando elementos a caixa do rascunho 
        novoContatoRascunho.append(divIconeRascunho);
        novoContatoRascunho.append(labelDescricao);
        novoContatoRascunho.append(labelTextoLink);
        

        // função do botão excluir
        botaoX.addEventListener('click', () => this.removerNovoContato(this.caixaInfocontatoFormulario, novoContato));
        botaoX.addEventListener('click', () => this.removerNovoContato(this.caixaInfocontatoRascunho, novoContatoRascunho));

        // função atualizar texto da descrição
        campoDescricaoContato.addEventListener('input', () => this.atualizarTexto(campoDescricaoContato, labelDescricao));

        // função atualizar texto do link
        campoTextoLink.addEventListener('input', () => this.atualizarTexto(campoTextoLink, labelTextoLink));

        // função atualizar link de fato
        campoLink.addEventListener('input', () => this.atualizarLink(labelTextoLink, campoLink.value));

        // Adicionando o novo contato após o botão, não antes dele
        this.caixaInfocontatoFormulario.insertBefore(novoContato, this.botaoAdicionarContato);
        this.caixaInfocontatoRascunho.appendChild(novoContatoRascunho);
    }

    criarNovoContatoDiv () {
        let novoContato = document.createElement('div');
        //novoContato.style.border = '2px solid red';
        novoContato.style.padding = '2px'; // Adicionando algum padding para espaçamento
        novoContato.style.marginBottom = '2px'; // Adicionando margem para separar os contatos
        novoContato.style.display = 'flex';
        novoContato.style.flexDirection = 'row';
        return novoContato;
    }

    criarDivIconeFormulario () {
        let divIcone = document.createElement('div');
        divIcone.style.width = '6mm';
        divIcone.style.height = '6mm';
        divIcone.style.border = '1px solid black';
        divIcone.style.marginRight = '3px';
        return divIcone;
    }

    criarBotaoIconeFormulario () {
        let botao = document.createElement('button');
        botao.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        botao.textContent = '+';
        
        return botao;
    }

    criarBotaoProcurarIcone () {
        let botao = document.createElement('input');
        botao.type = 'file';
        botao.style.display = 'none';
        return botao;
    }

    criarDivIconeRascunho () {
        let icone = document.createElement('div');
        icone.style.width = '6mm';
        icone.style.height = '6mm';
        icone.style.border = '1px solid blue';
        icone.style.marginRight = '2mm';

        return icone;
    }

    criarCampoDescricaoContato () {
        // Criar o campo de descrição
        let campo = document.createElement('input');
        campo.type = 'text';
        campo.placeholder = 'Descrição';
        campo.style.overflow = 'hidden';
        campo.style.width = '18mm';
        return campo;
    }

    criarLabelDescricaoContato () {
        let labelDescricao = document.createElement('label');
        labelDescricao.textContent = 'descrição';
        return labelDescricao;
    }

    criarCampoTextoLink () {
        let campo = document.createElement('input');
        campo.type = 'text';
        campo.placeholder = 'Texto do llink';
        campo.style.overflow = 'hidden';
        campo.style.width = '22mm';
        return campo;
    }

    CriarLabelTextoLink () {
        let label = document.createElement('a');
        label.href = 'https://www.google.com';
        label.target = '_blank';
        return label;

    }

    criarCampoLink () {
        let campo = document.createElement('input');
        campo.type = 'text';
        campo.placeholder = 'link/';
        campo.style.width = '12mm';
        campo.title = 'https://www.seulink.com/';

        return campo;
    }

    atualizarLink (elemento, novolink) {
        elemento.href = novolink;
    }

    atualizarTexto (campo, texto){
        texto.textContent = campo.value;
    }


    criarBotaoX () {
        // Removedor
        let botaoX = document.createElement('button');
        botaoX.textContent = 'X';
        botaoX.style.color = 'white';
        botaoX.style.backgroundColor = 'red'
        botaoX.style.fontWeight = 'bold';
        botaoX.style.marginLeft = '3px';
        return botaoX;
    }
    removerNovoContato (pai, elemento) {
        pai.removeChild(elemento);
    }
}
