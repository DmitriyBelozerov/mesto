

export default class Section {
    // items - массив данных
    //renderer - функция, которая 
    //отвечает за создание и отрисовку данных на странице(каждого отдельного элемента).
    constructor({name, link}, containerSelector, card) {
        this._data = data;
        this._container = document.querySelector(containerSelector);
        this._card = card;
    }

    //отрисовка всех элементов
    renderAllElements() {
        this._data.forEach(element => {
            const card = new Card(element);
            const cardElement = card.generateCard();
            return cardElement;
        });
        this._addItem(cardElement);
    };

        
    

//принимает DOM-элемент и добавляет его в контейнер
addItem(element) {
    this._container.prepend(element);
}

log() {
    console.log(this._data);
}
}

// У класса Section нет своей разметки.
// Он получает разметку через функцию-колбэк и вставляет её в контейнер.

