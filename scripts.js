// Constantes ============================================
const temaSelect = document.getElementById("tema-select");
const modeloSelect = document.getElementById("modelo-select");
const margemInput = document.getElementById("margem-input");
const conteudoFormulario = document.getElementById("conteudo-formulario");
const fotoFormulario = document.getElementById("foto-formulario");
const inputFoto = document.getElementById("input-foto");
const labelToggleFoto = document.getElementById("label-toggle-foto");
const fotoRascunho = document.getElementById("foto-rascunho");
const labelNome = document.getElementById("label-nome");
const labelCargo = document.getElementById("label-cargo");
const idadeLabel = document.getElementById("idade-label");
const estadoCivilLabel = document.getElementById("estadocivil-label");
const localLabel = document.getElementById("local-label");
const margemValor = document.getElementById("valor-margem"); // Para mostrar a margem no rascunho
//=======================================================


// Tema ================================================
function atualizarTema() {
  if (temaSelect.value === 'claro') {
    document.body.classList.remove('escuro');
    document.body.classList.add('claro');
  } else {
    document.body.classList.remove('claro');
    document.body.classList.add('escuro');
  }
}
temaSelect.addEventListener("change", atualizarTema);
// =====================================================


// Foto ================================================
// Função para adicionar foto
function adicionarFoto() {
  inputFoto.click(); // Abre o seletor de arquivos
}

labelToggleFoto.addEventListener("click", adicionarFoto); // Atribui evento de clique ao botão de adicionar foto

inputFoto.addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Atualiza a foto no formulário
      fotoFormulario.style.backgroundImage = `url(${e.target.result})`;
      fotoFormulario.style.backgroundColor = 'transparent'; // Remove cor de fundo
      labelToggleFoto.style.display = "none"; // Esconde o botão de adicionar

      // Cria o botão de remover foto
      const removerBtn = document.createElement("button");
      removerBtn.id = "remover-foto";
      removerBtn.textContent = "Remover Foto";
      removerBtn.style.backgroundColor = "red";
      removerBtn.style.color = "white";
      fotoFormulario.appendChild(removerBtn);
      removerBtn.addEventListener("click", removerFoto);

      // Atualiza a foto no rascunho
      fotoRascunho.style.backgroundImage = `url(${e.target.result})`;
      fotoRascunho.style.backgroundColor = 'transparent';
      fotoRascunho.style.display = 'block'; // Torna visível a foto no rascunho
    };
    reader.readAsDataURL(file);
  }
});

// Função para remover foto
function removerFoto() {
  // Remove a foto no formulário
  fotoFormulario.style.backgroundImage = '';
  fotoFormulario.style.backgroundColor = '#eee'; // Volta à cor de fundo original
  labelToggleFoto.style.display = "inline-block"; // Exibe o botão de adicionar novamente
  // Remove o botão de "Remover Foto"
  const removerBtn = document.getElementById("remover-foto");
  if (removerBtn) removerBtn.remove();

  // Remove a foto no rascunho
  fotoRascunho.style.backgroundImage = '';
  fotoRascunho.style.backgroundColor = '#eee';
  fotoRascunho.style.display = 'none'; // Torna invisível a foto no rascunho

  // Reinicializa o input de foto para permitir nova seleção
  inputFoto.value = "";  // Isso força a reinicialização do input e permite nova seleção de foto
}
// =====================================================


// Margem ==============================================
function atualizarMargem() {
  const margemValorInput = margemInput.value;
  conteudoFormulario.style.margin = `${margemValorInput}mm`; // Atualiza a margem do conteúdo do formulário
  margemValor.textContent = `${margemValorInput}mm`; // Atualiza a margem no rascunho
}

margemInput.addEventListener("input", atualizarMargem); // Chama a função toda vez que o valor do input for alterado
// =====================================================


// Atualizar campos do formulário para o rascunho ===========================
function atualizarRascunho() {
  const nomeFormulario = document.getElementById("campo-nome").value;
  const cargoFormulario = document.getElementById("campo-cargo").value;
  const idadeFormulario = document.getElementById("idade-formulario").value;
  const estadoCivilFormulario = document.getElementById("estadocivil-formulario").value;
  const localFormulario = document.getElementById("local-formulario").value;

  // Atualiza os campos do rascunho
  labelNome.textContent = nomeFormulario;
  labelCargo.textContent = cargoFormulario;

  if (idadeFormulario) {
    idadeLabel.textContent = `${idadeFormulario} anos |`;
  } else {
    idadeLabel.textContent = '';
  }

  if (estadoCivilFormulario) {
    estadoCivilLabel.textContent = `${estadoCivilFormulario} |`;
  } else {
    estadoCivilLabel.textContent = '';
  }

  if (localFormulario) {
    localLabel.textContent = `${localFormulario} |`;
  } else {
    localLabel.textContent = '';
  }
}

document.getElementById("campo-nome").addEventListener("input", atualizarRascunho);
document.getElementById("campo-cargo").addEventListener("input", atualizarRascunho);
document.getElementById("idade-formulario").addEventListener("input", atualizarRascunho);
document.getElementById("estadocivil-formulario").addEventListener("change", atualizarRascunho);
document.getElementById("local-formulario").addEventListener("input", atualizarRascunho);
// ============================
