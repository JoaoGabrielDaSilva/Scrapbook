export default class Card {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.cards = []
    }

    criarCard() {
        this.cards.push('card')
        return `<div class="col-3 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="action float-right">
                                <a href="#" class="btn-edit">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                </a>
                                <a href="#" class="btn-remove">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fill-rule="evenodd"
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                            <p class="h2">${this.title}</p>
                            <p class="card-text">
                                ${this.text}
                            </p>
                            <small class="text-muted float-right">João</small>
                        </div>
                    </div>
                </div>`;
    }
}