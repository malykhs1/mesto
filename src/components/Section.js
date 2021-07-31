export default class Section {
    constructor ({ items, renderer }, cardSelector) {
        this._renderedItems = items; 
        this._renderer = renderer;
        this._cardSelector = cardSelector;
    }

    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item));
    }

    setItem(item) {
        this._cardSelector.prepend(item); 
    }
}