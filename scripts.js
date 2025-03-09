document.addEventListener("DOMContentLoaded", function() {
  // Referências aos elementos do formulário e rascunho
  const campoNome = document.getElementById("campo-nome");
  const campoCargo = document.getElementById("campo-cargo");
  const idadeFormulario = document.getElementById("idade-formulario");
  const estadoCivilFormulario = document.getElementById("estadocivil-formulario");
  const localFormulario = document.getElementById("local-formulario");

  const labelNome = document.getElementById("label-nome");
  const labelCargo = document.getElementById("label-cargo");
  const idadeLabel = document.getElementById("idade-label");
  const estadoCivilLabel = document.getElementById("estadocivil-label");
  const localLabel = document.getElementById("local-label");

  const fotoFormulario = document.getElementById("foto-formulario");
  const fotoRascunho = document.getElementById("foto-rascunho");

  const labelToggleFoto = document.getElementById("label-toggle-foto");
  const inputFoto = document.getElementById("input-foto");

  let removerFotoButton;

  // Função para atualizar as labels do rascunho em tempo real
  function atualizarLabels() {
    labelNome.textContent = campoNome.value || "Nome";
    labelCargo.textContent = campoCargo.value || "Cargo";
    idadeLabel.textContent = idadeFormulario.value ? idadeFormulario.value + " anos |" : "";
    estadoCivilLabel.textContent = estadoCivilFormulario.value ? estadoCivilFormulario.value + " |" : "";
    localLabel.textContent = localFormulario.value ? localFormulario.value + " |" : "";
  }

  // Atualiza as labels sempre que o usuário digitar algo
  campoNome.addEventListener("input", atualizarLabels);
  campoCargo.addEventListener("input", atualizarLabels);
  idadeFormulario.addEventListener("input", atualizarLabels);
  estadoCivilFormulario.addEventListener("change", atualizarLabels);
  localFormulario.addEventListener("input", atualizarLabels);

  // Função para manipular a foto e o texto do botão de adicionar/remover foto
  function adicionarFoto() {
    const file = inputFoto.files[0];
    if (file) {
      // Define a foto como background do formulário
      const reader = new FileReader();
      reader.onload = function(e) {
        // Define o background da foto com largura de 120px e altura proporcional
        fotoFormulario.style.backgroundImage = `url(${e.target.result})`;
        fotoFormulario.style.backgroundSize = "120px auto"; // Tamanho ajustado
        fotoFormulario.style.backgroundRepeat = "no-repeat";
        
        // Define o background no rascunho com a mesma configuração
        fotoRascunho.style.backgroundImage = `url(${e.target.result})`;
        fotoRascunho.style.backgroundSize = "120px auto"; // Tamanho ajustado
        fotoRascunho.style.backgroundRepeat = "no-repeat";
        
        fotoRascunho.style.display = "block"; // Exibe a foto no rascunho

        // Esconde o botão "Adicionar Foto"
        labelToggleFoto.style.display = "none"; 
        
        // Cria o botão "Remover Foto"
        removerFotoButton = document.createElement("button");
        removerFotoButton.textContent = "Remover Foto";
        removerFotoButton.style.position = "absolute";
        removerFotoButton.style.top = "10px";
        removerFotoButton.style.left = "10px";
        removerFotoButton.style.padding = "5px 10px";
        removerFotoButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        removerFotoButton.style.color = "#fff";
        removerFotoButton.style.border = "none";
        removerFotoButton.style.cursor = "pointer";
        fotoFormulario.appendChild(removerFotoButton);

        removerFotoButton.addEventListener("click", removerFoto);
      };
      reader.readAsDataURL(file);
    }
  }

  // Função para remover a foto
  function removerFoto() {
    fotoFormulario.style.backgroundImage = ""; // Remove o background da foto no formulário
    fotoRascunho.style.backgroundImage = ""; // Remove o background da foto no rascunho
    fotoRascunho.style.display = "none"; // Esconde a foto no rascunho

    // Remove o botão "Remover Foto"
    removerFotoButton.remove();

    // Exibe o botão "Adicionar Foto" novamente
    labelToggleFoto.style.display = "block"; 

    inputFoto.value = ""; // Limpa o campo de foto
  }

  // Adiciona o evento de clique para o botão de adicionar/remover foto
  labelToggleFoto.addEventListener("click", function() {
    if (labelToggleFoto.style.display === "block") {
      inputFoto.click(); // Se for "Adicionar Foto", abre o seletor de foto
    }
  });

  // Manipula a foto quando a seleção do arquivo for realizada
  inputFoto.addEventListener("change", adicionarFoto);

  // Atualiza as labels e as fotos ao carregar a página
  atualizarLabels();
});
