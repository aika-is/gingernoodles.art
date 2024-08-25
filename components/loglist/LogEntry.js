import GingerComponent from '../../core/GingerComponent.js';
class LogEntry extends GingerComponent {
    constructor(log) {
        super();
        this.log = log;
        this.renderComponent();
        
    }

    bindEvents() {
    }

    unbindEvents() {
    }

    getTemplate() {
        return `
            <div class="logEntry">
                <span var="message">
                    ${this.log.message}
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

customElements.define( "captain-log-entry", LogEntry );

export default LogEntry;