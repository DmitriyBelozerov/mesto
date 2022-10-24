export default class Section {
    constructor({ data, renderer }, containerSelector, api) {
        this._data = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._api = api;
    }

    renderAllElements() {
        this._data.forEach(element => {
            this._renderer(element);
        });
    };

    addItem(element) {
        this._container.prepend(element);
    }
}
 

