export class AdicionarNovoProjeto {
    constructor () {
        this.caixaProjetosFormulario = document.getElementById('caixa-projetos-formulario');
        this.botaoNovoProjeto = document.getElementById('botao-novo-projeto');

        this.caixaProjetosRascunho = document.getElementById('caixa-projetos-rascunho');

        this.botaoNovoProjeto.addEventListener('click', () => this.adicionarNovoProjeto());

    }

    adicionarNovoProjeto () {
        // criando formulário
        let capaFormulario = this.criarCapa();
        let capaTitulo = this.criarCapaTitulo();
        let campoTitulo = this.criarCampo();
        let botaoX = this.criarBotaoX();
        let textoArea = this.criarTextoArea();

        // adicionando elementos à capa
        capaFormulario.appendChild(capaTitulo);
        capaTitulo.appendChild(campoTitulo);
        capaTitulo.appendChild(botaoX);
        capaFormulario.appendChild(textoArea);

        // criando rascunho
        let capaRascunho = this.criarCapa();
        let titulo = this.criarLabelTitulo();
        let paragrafo = this.criarParagrafo();

        // adicionando elementos a capa do rascunho
        capaRascunho.appendChild(titulo);
        capaRascunho.appendChild(paragrafo);

        this.caixaProjetosFormulario.insertBefore(capaFormulario, this.botaoNovoProjeto);
        this.caixaProjetosRascunho.appendChild(capaRascunho);

        //Adicionando funções de texto
        campoTitulo.addEventListener('input', () => this.atualizarTexto(campoTitulo, titulo));
        textoArea.addEventListener('input', () => this.atualizarTexto(textoArea, paragrafo));

        //Atribundo funções de remoção
        botaoX.addEventListener('click', () => this.removerItem(this.caixaProjetosFormulario, capaFormulario));
        botaoX.addEventListener('click', () => this.removerItem(this.caixaProjetosRascunho, capaRascunho));
    }

    criarCapa () {
        let capa = document.createElement('div');
        // capa.style.backgroundColor = 'yellow';
        
        return capa;
    }

    criarCapaTitulo () {
        let capa =  document.createElement('div');
        // capa.style.backgroundColor = 'blue';
        capa.style.justifyContent = 'space-between';
        capa.style.display = 'flex';
        capa.style.flexDirection = 'row';

        return capa;
    }

    criarCampo () {
        let campo  = document.createElement('input');
        campo.type = 'text';
        campo.placeholder = 'Título';
        campo.style.fontWeight = 'bold';
        return campo;
    }

    criarBotaoX () {
        let botao = document.createElement('button');
        botao.style.color = 'white';
        botao.style.backgroundColor = 'red';
        botao.style.fontWeight = 'bold';
        botao.style.fontSize = '20px';
        botao.textContent = 'X';
        botao.style.margin = '5px';
        return botao;
    }

    criarTextoArea () {
        let texto = document.createElement('textarea');
        texto.style.resize = 'none';
        texto.placeholder = 'Descrição do projeto';
        texto.style.width = '98%';
        return texto;
    }

    criarLabelTitulo () {
        let titulo = document.createElement('label');
        titulo.style.fontWeight = 'bold';
        titulo.style.marginBottom = '0.5mm';
        titulo.textContent = 'Título';
        titulo.style.fontSize = '14';
        return titulo;
    }

    criarParagrafo () {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = 'Descrição do projeto...';
        paragrafo.style.marginBottom = '1mm';
        paragrafo.style.fontSize = '14';
        return paragrafo;
    }

    atualizarTexto (campo, texto) {
        texto.textContent = campo.value;
    }

    removerItem (pai, elemento) {
        pai.removeChild(elemento);
    }
}