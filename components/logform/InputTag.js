import GingerComponent from '../../core/GingerComponent.js';
class InputTag extends GingerComponent {
    constructor(tag) {
        super();
        this.tag = tag;
        this.renderComponent();
    }

    bindEvents() {
    }

    unbindEvents() {
    }

    getTemplate() {
        return `
            <div class="inputTag">
                <span var="key">
                    ${this.tag.key}
                </span>
                <span var="value">
                    ${this.tag.value}
                </span>
            </div>
        `;
    }

    getStylesheet() {
        return `
            <style>
            
            </style>
        `
    }
}

customElements.define( "captain-input-tag", InputTag );

export default InputTag;