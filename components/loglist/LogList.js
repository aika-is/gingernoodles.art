import EventDispatcher from '../../core/EventDispatcher.js';
import GingerComponent from '../../core/GingerComponent.js';
import LogEntry from './LogEntry.js';
class LogList extends GingerComponent {
    constructor() {
        super();
        this.renderComponent();
        
    }

    bindEvents = () => {
        console.log("LISTEN LIST");
        EventDispatcher.getInstance().addEventListener(this.getAttribute("binding"),"update", this.onListUpdated)
    }

    unbindEvents = () => {
        EventDispatcher.getInstance().removeEventListener(this.getAttribute("binding"),"update", this.onListUpdated)
    }

    onListUpdated = (payload) => {
        const logsList = this.ui.logsList;
        
        //CLEAR logsList
        while (logsList.lastElementChild) {
            logsList.removeChild(logsList.lastElementChild);
        }

        payload.forEach((log) => {
            const le = new LogEntry(log);
            logsList.appendChild(le);
        });
    }

    getTemplate = () => {
        return `
            <div class="logsList" var="logsList">
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

customElements.define( "captain-loglist", LogList );

export default LogList;