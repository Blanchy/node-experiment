// import ReactDOM from 'react-dom';

export default class CustomButton extends HTMLElement {
    // static get observedAttributes() {
    //     return ['complex-data'];
    //   }
    constructor(args) {
        super(args)
        this._complexData = null;
        // this.attachShadow({mode:'open'});
    }
    connectedCallback() {
        this.renderStandard();
    }
    renderStandard() {
        this.style.display = 'inline-block';
        this.style.border = '1px solid red'
        this.style.backgroundColor = 'blue'
        this.style.width = '100px'
        // this.setAttribute('aria-label', this.innerText);
    }
    // attributeChangedCallback(name, oldValue, newValue) {
    //     // do something when an attribute has changed
    //     console.log('attributeChangedCallback')
    // }

    set complexData(d) {
        this._complexData =  d;
        this.innerText = d.title
    }
    get complexData() {
        return this._complexData;
    }
    disconnectedCallback() {
    }
}
window.customElements.define('custom-button', CustomButton);
