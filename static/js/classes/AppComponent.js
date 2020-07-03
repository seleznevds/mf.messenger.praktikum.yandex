function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

export const AppComponent = class {
    constructor(props={}) {
        this.id = `${this.constructor.name || 'Component'}_${Math.random()}_${Math.random()}`;
        
        if(props.__PARENT_COMPONENT__INSTANCE__){
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
        this.el.addEventListener(eventType, event => {
            const el = event.target.closest(selector);     
             
            if(el){                
                listener({...event, target: el });
            }    

            event.preventDefault();
                    
        }, additionalParam);

        this.eventHandlers.push({
            eventType,
            listener,
            additionalParam
        });

    }

    off(eventType, listener, additionalParam) {
        this.el.removeEventListener(eventType, listener, additionalParam);
    }

    addChild(component) {
        this.children.push(component);
    }

    render() {
        //can be implemented in inherited component
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
        this.eventHandlers.forEach(handler => this.off(handler.eventType,
            handler.listener,
            handler.additionalParam));
        this.children.forEach(comp => comp.unmount());
        this.children = [];
    }

    didMount() {
        //can be implemented in inherited component
    }

    willUnmount() {
        //can be implemented in inherited component
    }

    renderTemplate(template, context = {}) {
        const contextWithParent = {
            ...context,
            __PARENT_COMPONENT__INSTANCE__:this,
            __COMPONENT_ID__: this.id            
        };


        const compiledTemplate = Handlebars.compile(template);
        return compiledTemplate(contextWithParent);
    }
}