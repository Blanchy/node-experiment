
export default class CustomList extends HTMLUListElement {
    // static get observedAttributes() {
    //     return ['list-data'];
    // }
    constructor(args) {
        super(args)
        this._listData = null;
    }
    connectedCallback() {
        this.renderStandard();
    }
    renderStandard() {
        this.style.display = 'inline-block';
        this.style.border = '1px solid red'
        this.style.backgroundColor = 'blue'
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        console.log('attributeChangedCallback')
    }
    setListData(d) {
        console.log('set listData')
        if (!d || !Array.isArray(d)){
            return;
        }
        this._listData =  d;
        console.log('rendering')
        const html = this._listData.map(data=>{
            return `<li>{data.FirstNameLastName}<\li>`
        });
        this.innerHTML = html.join('');
    }

    set listData(d) {
        console.log('set listData1')
        this.setListData(d)
        // this._listData =  d;
    }
    get listData() {
        return this._listData;
    }

    disconnectedCallback() {
    }
}
window.customElements.define('custom-list', CustomList, {extends: 'ul'});
