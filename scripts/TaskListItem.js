

export class TaskListItem {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }


    _getTemplate() {
        const cardElement = document
            .querySelector('#card')
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }

    _addEventListeners() {
        this._element.querySelector('.card__delete').
            addEventListener('click', this._deleteTask);

        this._element.querySelector('.card__like').
            addEventListener('click', this._likeTask);
    }

    _deleteTask = (event) => {
        event.preventDefault();
        this._element.remove();
    }

    _likeTask = (event) => {
        event.target.classList.toggle("card__like_active");
    }


    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__photo').src = this._link;
        this._addEventListeners();
        return this._element;
    }
};
