class Button{
    btnElement:HTMLButtonElement
    callback:() => void

    constructor(element:Element, html:string, classes:string, callback:() => void){
        this.callback = callback
        this.btnElement = string2html(`<button class="${classes}">${html}</button>`) as HTMLButtonElement
        element.appendChild(this.btnElement)
        this.btnElement.addEventListener('click', () => {
            this.callback()
        })
    }
}

function string2html(string):HTMLElement{
    var div = document.createElement('div')
    div.innerHTML = string;
    return div.children[0] as HTMLElement;
}