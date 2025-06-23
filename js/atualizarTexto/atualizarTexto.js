export class AtualizarTexto {
    constructor (campo, label, tipo = 'input', adicional = '') {
        this.campo = campo;
        this.label = label;
        this.tipo = tipo;
        this.adicional = adicional;
        
        this.campo.addEventListener(this.tipo, () => this.atualizar());
    }

    atualizar () {
        if (this.campo.value) {
            this.label.textContent = this.campo.value+this.adicional;
        } else {
            this.label.textContent = '';
        }
        
    }

}
