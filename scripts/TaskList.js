export class TaskList {
    constructor(config) {
        this._config = config;
    }


    _getTemplate() {
        return document.querySelector(this._config.templateItem).
            content.children[0].
            cloneNode(true);
    }



    render(tasksList) {
        this._view = this._getTemplate();
        const formInputAddNamePhoto = document.querySelector(".form__input_add_photo");
        const formInputAddUrl = document.querySelector(".form__input_add_url");

        const task = this._view.querySelector(this._config.taskListItemText);
        task.textContent = formInputAddNamePhoto.value;
        const urlArress = this._view.querySelector(this._config.taskListItemUrl);
        urlArress.src = formInputAddUrl.value;

        tasksList.prepend(this._view);
    }
};