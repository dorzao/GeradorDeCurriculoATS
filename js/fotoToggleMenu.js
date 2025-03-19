export class FotoToggleMenu {
  constructor () {
    // variáveis
    this.fotoTogleMenu = document.getElementById('foto-toggle-menu');
    this.fotoRascunho = document.getElementById('foto-rascunho');
    this.fotoFormulario = document.getElementById('foto-formulario');
    
    this.fotoTogleMenu.addEventListener('change', () => this.alternarSimOuNaoFoto());
    
  }

  // Foto no Currículo: sim ou não? 
  alternarSimOuNaoFoto () {
    if (this.fotoTogleMenu.checked){
      this.fotoFormulario.style.display = "block";
      this.fotoRascunho.style.display = "block";
    } else {
      this.fotoFormulario.style.display = "none";
      this.fotoRascunho.style.display = "none";
    }
  }
}

