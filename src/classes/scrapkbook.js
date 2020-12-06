import Card from './card'

let editar = null

export default class Scrapbook {
    constructor() {
        this.card = new Card(null, null)
        this.atribuirEventos()
        this.editando = null
    }
    
    trocarTela(event) {

        if (event) {
            event.preventDefault();
        }    

        document.getElementsByClassName('list')[0].classList.toggle('d-none');
        document.getElementsByClassName('register')[0].classList.toggle('d-none');

        this.resetarFormulario();
        this.resetarCampos();
    }

    salvar(event) {

        if (event) {
            event.preventDefault();
        }

        this.resetarFormulario()

        let valido = true;

        const titulo = document.getElementById('title');
        const texto = document.getElementById('text');

        if (titulo.value) {
            this.card.title = titulo.value
        }

        if (texto.value) {
            this.card.text = texto.value
        }

        if (titulo.value.length === 0 || titulo.value.length > 20) {
            titulo.classList.add('error');
            valido = false;
        }

        if (texto.value.length === 0) {
            texto.classList.add('error');
            valido = false;
        }

        if (valido === false) {
            document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
        } else {

            if (this.editando) {
                this.editar(); 
            } else {
                this.adicionar();
            }
        
            document.getElementsByClassName('alert-success')[0].classList.remove('d-none');
            this.resetarCampos();
        }
    }

    resetarFormulario() {

        const titulo = document.getElementById('title');
        const texto = document.getElementById('text');

        if (titulo) {
            titulo.classList.remove('error');
        }

        if (texto) {
            texto.classList.remove('error');
        }
        document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
        document.getElementsByClassName('alert-success')[0].classList.add('d-none');
    }

    resetarCampos() {
        const titulo = document.getElementById('title');
        const texto = document.getElementById('text');

        titulo.value = ''
        texto.value = ''
    }

    adicionar() {
        document.getElementsByClassName('row-empty')[0].classList.add('d-none');
        document.getElementsByClassName('row-cards')[0].classList.remove('d-none');

        document.getElementsByClassName('row-cards')[0].innerHTML += this.card.criarCard();

        const buttonRemove = document.getElementsByClassName('btn-remove')

        if (this.card.cards.length > 0) {
            for (let botao of document.getElementsByClassName('btn-remove')) {
                this.atribuirEventoRemover(botao, this);
            }
    
            for (let botao of document.getElementsByClassName('btn-edit')) {
                this.atribuirEventoEditar(botao, this);
            }
        }

    }

    atribuirEventos() {
        document.getElementById('pesquisar').addEventListener('keyup', (event) => this.pesquisar(event))
        document.getElementsByClassName('btn-add')[0].addEventListener('click', (event) => this.trocarTela(event))
        document.getElementsByClassName('btn-save')[0].addEventListener('click', (event) => this.salvar(event))
        document.getElementsByClassName('btn-back')[0].addEventListener('click', (event) => this.trocarTela(event))
    }

    atribuirEventoRemover(botao) {


        botao.addEventListener('click', function(event) {
            event.preventDefault();

            this.parentNode.parentNode.parentNode.parentNode.remove();

            if (document.querySelectorAll('.row-cards .col-3').length === 0) {
                document.getElementsByClassName('row-empty')[0].classList.remove('d-none');
            }
        });
    }

    atribuirEventoEditar(botao, self) {

        const titulo = document.getElementById('title');
        const texto = document.getElementById('text');

        botao.addEventListener('click', function(event) {
            event.preventDefault();

            self.trocarTela();

            self.editando = this.parentNode.parentNode;

        
            titulo.value = self.editando.getElementsByClassName('h2')[0].innerHTML.trim();
            texto.value = self.editando.getElementsByClassName('card-text')[0].innerHTML.trim();
        });
    }

    editar() {

        console.log('editou')

        this.editando.getElementsByClassName('h2')[0].innerHTML = this.card.title;
        this.editando.getElementsByClassName('card-text')[0].innerHTML = this.card.text;

        this.editando = null;
    }

    pesquisar(event) {
        let cards = document.getElementsByClassName('card');
    
        for (let card of cards) {
            if (!card.getElementsByClassName('card-text')[0].innerText.toUpperCase().includes(event.target.value.toUpperCase())) {
                card.parentNode.classList.add('d-none');
            } else {
                card.parentNode.classList.remove('d-none');
            }
        }
    }
}