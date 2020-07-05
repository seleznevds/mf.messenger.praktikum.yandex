function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}


//TODO mount  and  unmount works on each rerender
//create real mount  and  unmount - call only one time per component live
export const AppComponent = class {
    constructor(props = {}) {
        this.id = `${this.constructor.name || 'Component'}_${Math.random()}_${Math.random()}`;

        if (props.__PARENT_COMPONENT__INSTANCE__) {
            props.__PARENT_COMPONENT__INSTANCE__.addChild(this);
        }

        this.props = props;
        this.children = [];
        this.eventHandlers = [];
        this.el = null;
    }

    attach(element) {
        element.innerHTML = this.render();
    }

    on(eventType, selector, listener, additionalParam) {
        const eventListenerWrapper = event => {            
            const el = event.target.closest(selector);
            if (el) {
                event.realTarget = el
                listener(event);
            }
        };

        this.el.addEventListener(eventType, eventListenerWrapper, additionalParam);

        this.eventHandlers.push({
            eventType,
            listener,
            additionalParam,
            eventListenerWrapper,
        });
    }

    off(eventType, listener, additionalParam) {
        const handler = this.eventHandlers.find(handler => handler.eventType === eventType && listener === handler.listener);

        if (handler) {
            this.el.removeEventListener(eventType, handler.eventListenerWrapper, additionalParam);
        }
    }

    _off(eventType, eventListenerWrapper, additionalParam) {
        this.el.removeEventListener(eventType, eventListenerWrapper, additionalParam);
    }

    addChild(component) {
        this.children.push(component);
    }

    render() {
        //abstract, can be implemented in inherited component
        return '';
    }

    rerender() {
        this.unmount();
        if (this.el) {
            this.el.replaceWith(htmlToElement(this.render()));
        }
        this.mount();
    }

    mount() {
        this.el = document.querySelector(`[data-component-id="${this.id}"]`);
        this.children.forEach(comp => comp.mount());
        this.didMount();
    }

    unmount() {
        this.willUnmount();
        this.eventHandlers.forEach(handler => this._off(handler.eventType,
            handler.eventListenerWrapper,
            handler.additionalParam));
        this.children.forEach(comp => comp.unmount());
        this.children = [];
        this.eventHandlers = [];
    }

    didMount() {
        //abstract, can be implemented in inherited component
    }

    willUnmount() {
        //abstract, can be implemented in inherited component
    }

    renderTemplate(template, context = {}) {
        const contextWithParent = {
            ...context,
            __PARENT_COMPONENT__INSTANCE__: this,
            __COMPONENT_ID__: this.id        //TODO  place to templates automatically    
        };

        const compiledTemplate = Handlebars.compile(template);
        return compiledTemplate(contextWithParent);
    }
}