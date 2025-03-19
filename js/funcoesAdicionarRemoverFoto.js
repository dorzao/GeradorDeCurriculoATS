export class FuncoesAdicionarRemoverFoto {
    constructor() {
        this.botaoProcurar = document.getElementById('botao-oculto-procurar');
        this.botao = document.getElementById('botao-adicionar-remover-foto');
        this.fotoFormulario = document.getElementById('foto-formulario');
        this.fotoRascunho = document.getElementById('foto-rascunho');

        // Escutadores de eventos
        this.botao.addEventListener('click', () => this.todasAsFuncoes());
        this.botaoProcurar.addEventListener('change', (event) => this.converterParaBase64(event));
    }

    // Função principal chamada ao clicar no botão
    todasAsFuncoes() {
        if (this.verificarSeHaFoto()) {
            // Se tiver foto, remover
            this.removerFoto();
        } else {
            // Se não tiver foto, adicionar
            this.dispararProcurar();
        }
    }

    // Método que dispara o botão de procurar arquivo
    dispararProcurar() {
        // Redefine o valor do input de arquivo para garantir que o navegador trate como um novo arquivo
        this.botaoProcurar.value = '';
        this.botaoProcurar.click();
    }

    // Função para converter a imagem para base64
    converterParaBase64(event) {
        const arquivo = event.target.files[0];

        if (arquivo) {
            const leitor = new FileReader();

            leitor.onload = () => {
                // A imagem foi carregada, agora vamos aplicar o background
                this.adicionarFotoAoFundo(leitor.result);

                // Verifica se a imagem foi aplicada no fundo
                this.verificarImagemAplicada();
            };

            leitor.readAsDataURL(arquivo);
        }
    }

    // Adiciona a foto ao fundo dos elementos
    adicionarFotoAoFundo(base64Imagem) {
        // Gerar uma URL única ou apenas aplicar a imagem sem parâmetros para garantir a atualização
        this.fotoFormulario.style.backgroundImage = `url(${base64Imagem})`;
        this.fotoFormulario.style.backgroundSize = 'cover';
        this.fotoFormulario.style.backgroundPosition = 'center';

        this.fotoRascunho.style.backgroundImage = `url(${base64Imagem})`;
        this.fotoRascunho.style.backgroundSize = 'cover';
        this.fotoRascunho.style.backgroundPosition = 'center';
    }

    // Remove a foto do fundo dos elementos
    removerFoto() {
        this.fotoFormulario.style.backgroundImage = 'none';
        this.fotoRascunho.style.backgroundImage = 'none';
        this.verificarImagemAplicada(); // Atualiza o estado do botão
    }

    // Verifica se há foto aplicada ao fundo
    verificarSeHaFoto() {
        const fotoFormularioEstilo = this.fotoFormulario.style.backgroundImage;
        return fotoFormularioEstilo && fotoFormularioEstilo !== 'none';
    }

    // Estiliza o botão dependendo da presença da foto
    verificarImagemAplicada() {
        if (this.verificarSeHaFoto()) {
            // Modifica o texto do botão
            this.botao.textContent = 'Remover Foto';
            
            // Define o background-color padrão como transparente
            this.botao.style.backgroundColor = 'transparent';

            // Modifica a cor do botão no estado hover (com imagem de fundo)
            this.botao.onmouseover = () => {
                this.botao.style.backgroundColor = 'rgba(100, 0, 0, 0.6)'; // Cor do botão no hover
            };

            this.botao.onmouseout = () => {
                this.botao.style.backgroundColor = 'transparent'; // Retorna ao estado transparente quando o mouse sai
            };
        } else {
            // Se não tiver imagem, retorna ao estado original
            this.botao.textContent = 'Adicionar Foto';
            this.botao.style.backgroundColor = 'transparent';

            // Modifica a cor do botão no estado hover (sem imagem de fundo)
            this.botao.onmouseover = () => {
                this.botao.style.backgroundColor = 'rgba(0, 100, 0, 0.6)'; // Cor do botão no hover
            };

            this.botao.onmouseout = () => {
                this.botao.style.backgroundColor = 'transparent'; // Retorna ao estado transparente quando o mouse sai
            };
        }
    }
}
