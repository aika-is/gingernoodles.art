import GingerComponent from './GingerComponent.js';
class MobileHeader extends GingerComponent {
    constructor() {
        super();
        this.variable = "1234"
        this.renderComponent();
        
    }

    bindEvents() {
        console.log(this.ui);
        this.ui.toggleButton.addEventListener("click", (event) => {
            console.log("CLICKY!");
            this.ui.floatingPanel.classList.toggle("visible");
        });
    }

    getTemplate() {
        return `
            <div class="mobileHeader">
                <button class="toggle" var="toggleButton">
                    <img src="./assets/hamburger.png"/>
                </button>
                <div class="floatingPanel" var="floatingPanel">
                </div>
            </div>
        `;
    }

    getStylesheet() {
        return `
            <style>
            .mobileHeader {
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 3em;
                background-color: green;

                .toggle {
                    & img {
                        height: 3em;
                    }
                }
                
                .floatingPanel {
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    background-color:red;

                    display: none;
                }
                .visible {
                    display: block;
                }

                @media (min-width: 1080px) {
                    display: none;
                }
            }
            
            </style>
        `
    }
}

customElements.define( "ginger-mobile-header", MobileHeader );

export default MobileHeader;