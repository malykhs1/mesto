export default class Section {
    constructor ({ data, renderer}, cardSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._cardSelector = cardSelector;
        
    }

    setItem(element) {
        this._cardSelector.append(element); //метод, который добавляет в разметку
    }

    clear() {
        this._cardSelector.innerHTML = '';
      }

    renderItems() {
        this.clear();
        this._renderedItems.forEach(cards => {
        this._renderer(cards);
    });
    }
}