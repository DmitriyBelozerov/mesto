

export class TaskListItem {
    constructor(config, name, link) {
        this._config = config;
        this._name = name;
        this._link = link;
    }


    _getTemplate() {
        return document.querySelector(this._config.templateItem).
            content.children[0].
            cloneNode(true);
    }

    _addEventListeners() {
        this._view.querySelector(this._config.taskListItemDelete).
            addEventListener('click', this._deleteTask);

        this._view.querySelector(this._config.taskListItemLikeButtom).
            addEventListener('click', this._likeTask);
    }

    _deleteTask = (event) => {
        event.preventDefault();
        this._view.remove(event);
    }

    _likeTask = (event) => {
        event.target.classList.toggle("card__like_active");
    }

    render(tasksList) {
        this._view = this._getTemplate();

        const task = this._view.querySelector(this._config.taskListItemText);
        task.textContent = this._name;
        const urlArress = this._view.querySelector(this._config.taskListItemUrl);
        urlArress.src = this._link;

        this._addEventListeners();

        tasksList.prepend(this._view);
    }
};

