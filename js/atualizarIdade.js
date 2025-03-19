export class AtualizarIdade {
    constructor () {
        this.campoIdade = document.getElementById('campo-idade');
        this.labelIdade = document.getElementById('label-idade');

        this.campoIdade.addEventListener('input', () => this.atualizarIdade());
    }

    atualizarIdade () {
        if(this.campoIdade.value){
            this.labelIdade.textContent = `${this.campoIdade.value} anos | `
        } else {
            this.labelIdade.textContent = '';
        }
    }
}