export default class Section {
    constructor({
        renderer,
        container
    }) {
        this._container = container;
        this._renderer = renderer;
    }

    renderItems(renderItems) {
        renderItems.forEach(item => this._renderer(item));
    }

    setItem(item) {
        this._container.prepend(item);
    }
}