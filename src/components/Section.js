export default class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    setItems(data) {
        this._data = data;
    }

    renderAllElements() {
        this._data.forEach(element => {
            this.addItem(element)
        });
    };

    addItem(item) {
        const card = this._renderer(item);
        this._container.prepend(card);
    }
}


