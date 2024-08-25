class GingerComponent extends HTMLElement {
    constructor() {
        super();
        this.rendered = false;
        this.attachShadow({ mode: 'open' })
        console.log("This is a Ginger Component");
    }

    renderComponent() {
        let template = this.getTemplate();
        let stylesheet = this.getStylesheet();

        if (stylesheet.constructor === String) {
            template = stylesheet + template;
        }else{
            this.shadowRoot.appendChild(stylesheet);
        }

        if (template.constructor === String) {
            this.shadowRoot.innerHTML = template;
        }else{
            this.shadowRoot.appendChild(template);
        }
        
        this.ui = {};
        this.toScope(this.shadowRoot, this.ui);

        this.rendered = true;

        this.bindEvents();
    }

    toScope(node, scope) {
        var children = node.children;
        for (var iChild = 0; iChild < children.length; iChild++) {
            if (children[iChild].getAttribute('var')) {
                var names = children[iChild].getAttribute('var').split('.');
                var obj = scope;
                while (names.length > 0)
                {
                    var _property = names.shift();
                    if (names.length == 0)
                    {
                        obj[_property] = children[iChild];
                    }
                    else
                    {
                        if (!obj.hasOwnProperty(_property)){
                            obj[_property] = {};
                        }
                        obj = obj[_property];
                    }
                }
            }
            this.toScope(children[iChild], scope);
        }
    }

    disconnectedCallback(){
        this.unbindEvents();
    }

    //--------------------OVERRIDE FUNCTIONS--------------------------

    bindEvents() {
        
    }

    unbindEvents() {
        
    }

    getTemplate() {
        throw "Unimplemented Template";
    }

    getStylesheet() {
        return "";
    }
}

export default GingerComponent;