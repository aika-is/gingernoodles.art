import EventDispatcher from '../../core/EventDispatcher.js';
import GingerComponent from '../../core/GingerComponent.js';
class LogForm extends GingerComponent {
    constructor() {
        super();
        this._text = "";
        this._selectedTags = [];
        this._suggestedTags = [];
        this.renderComponent();
    }

    bindEvents = () => {
        this.ui.logText.addEventListener("input", this.onTextChange)
        this.ui.form.addEventListener("submit", this.onFormSubmit)
    }

    unbindEvents = () => {
        this.ui.logText.removeEventListener("input", this.onTextChange)
        this.ui.form.removeEventListener("submit", this.onFormSubmit)
    }

    onTextChange = (evt) => {
        this.text = this.ui.logText.value
        EventDispatcher.getInstance().dispatchEvent(null, "textChange", {message: this._text, tags: this._selectedTags})
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();

        EventDispatcher.getInstance().dispatchEvent(null, "submitLog", {message: this._text, tags: this._selectedTags})
        this.resetForm();

        return false;
    }

    resetForm = () => {
        this.text = "";
        this.ui.logText.value = "";
        this.selectedTags = []
    }

    set text(value){
        this._text = value;
        this.ui.logText.value = value;
    }

    set selectedTags(value){
        this._selectedTags = value;
    }

    getTemplate = () => {
        return `
            <div class="logsForm">
                <form var="form">
                    <input type="text" placeholder="Log Something" var="logText"/>
                    <input type="submit"/>
                </form>
                <captain-suggested-tags binding="suggestedTags"></captain-suggested-tags>
            </div>
        `;
    }

    getStylesheet = () => {
        return `
            <style>
            
            </style>
        `
    }
}

customElements.define( "captain-logform", LogForm );

export default LogForm;