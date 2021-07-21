export default class Section {
    constructor ({ data, renderer}, cardSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._cardSelector = cardSelector;
        
    }

    setItem(element) {
        this._cardSelector.prepend(element); //метод, который добавляет в разметку
    }

    renderItems() {
        this._renderedItems.forEach(cards => {
        this._renderer(cards);
    });
    }
}