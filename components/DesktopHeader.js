import GingerComponent from './GingerComponent.js';
class DesktopHeader extends GingerComponent {
    constructor() {
        super();
        this.variable = "1234"
        this.renderComponent();
    }

    getTemplate() {
        return `
            <header class="header">
                <a href="/" class="logo">
                    <img src="https://images.squarespace-cdn.com/content/v1/5b3fc0d48f513043f522f2e0/ba2e0b20-4b40-4499-b886-81e3e12d9912/new+avatar+22.png?format=1500w"/>
                </a>
                <nav class=>
                    <ul class="pepe">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Store</a>
                        </li>
                        <li>
                            <a href="#">Patreon</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }

    getStylesheet() {
        return `
            <style>
            .header {
                .logo {
                    & img {
                        max-width: 128px;
                    }
                    display: inline-block;
                }
                & nav {
                    display: inline-block;

                    & ul {
                        list-style: none;
                        display: inline-block;
                    
                        & li {
                          display: inline-block;
                    
                          & a {
                            color: black;
                            text-decoration: none;
                            padding: 10px;
                          }
                        }
                    }
                }
                @media (max-width: 1080px) {
                    display: none;
                }
            }
            
            </style>
        `
    }
}

customElements.define( "ginger-desktop-header", DesktopHeader );

export default DesktopHeader;