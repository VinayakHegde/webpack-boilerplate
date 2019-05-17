import '../styles/appHost.scss';

class AppHost extends HTMLElement {
    /**
     * A custom element can define special lifecycle hooks for running code during interesting times of its existence. 
     * These are called custom element reactions.
     */
    
    constructor() {
        /**
         * An instance of the element is created or upgraded. 
         * Useful for initializing state, settings up event listeners, or creating shadow dom. 
         * See the spec (https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) for restrictions on what you can do in the constructor.
         */
        // always call super() first in the constructor.
        super(); 
    }
   
    connectedCallback() {
        /**
         * Called every time the element is inserted into the DOM. Useful for running setup code, such as fetching resources or rendering. 
         * Generally, you should try to delay work until this time.
         */
    }
    disconnectedCallback() {
        /**
         * Called every time the element is removed from the DOM. Useful for running clean up code.
         */
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        /**
         * Called when an observed attribute has been added, removed, updated, or replaced. 
         * Also called for initial values when an element is created by the parser, or upgraded. 
         * Note: only attributes listed in the observedAttributes property will receive this callback.
         */
    }
    adoptedCallback(){
        /**
         * 	The custom element has been moved into a new document (e.g. someone called document.adoptNode(el))
         */
    }
}

window.customElements.define('app-host', AppHost);