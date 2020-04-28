window.addEventListener('DOMContentLoaded', () => {

    class options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv() {
            let div = document.createElement('div');
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.bg = this.bg;
            div.style.fontSize = this.fontSize;
            div.style.textAlign = this.textAlign;
            div.textContent = '123';
            return div;
        }
    }

    let insert = document.querySelector('.insert'),
        square = new options(10, 10, '123', 15, 'Text');

    insert.appendChild(square.createDiv());

});