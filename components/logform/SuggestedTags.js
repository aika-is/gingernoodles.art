import EventDispatcher from '../../core/EventDispatcher.js';
import GingerComponent from '../../core/GingerComponent.js';
import InputTag from './InputTag.js';
class SuggestedTags extends GingerComponent {
    constructor() {
        super();
        this.renderComponent();
    }

    bindEvents = () => {
        EventDispatcher.getInstance().addEventListener(this.getAttribute("binding"),"update", this.onListUpdated)
    }

    unbindEvents = () => {
        EventDispatcher.getInstance().removeEventListener(this.getAttribute("binding"),"update", this.onListUpdated)
    }

    onListUpdated = (payload) => {
        console.log("SUGGESTED TAGS LIST UPDATE")
        const suggestedTagsList = this.ui.suggestedTagsList;
        
        //CLEAR logsList
        while (suggestedTagsList.lastElementChild) {
            suggestedTagsList.removeChild(suggestedTagsList.lastElementChild);
        }

        payload.forEach((tag) => {
            const le = new InputTag(tag);
            suggestedTagsList.appendChild(le);
        });
    }

    getTemplate = () => {
        return `
            <div class="suggestedTagsList" var="suggestedTagsList">
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

customElements.define( "captain-suggested-tags", SuggestedTags );

export default SuggestedTags;