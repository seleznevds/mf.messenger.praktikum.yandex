function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

export const AppComponent = class {
    constructor(id = `Component_${Math.random()}`, ...rest) {
        this.id = id;
        rest.pop();
        this.props = rest;
        this.children = [];
        this.eventHandlers = [];
        this.el = null;
    }

    attach(element) {
        element.innerHTML = this.render();
    }

    on(eventType, selector, listener, additionalParam) {
        const childElements = this.el.querySelectorAll(selector);

        this.el.addEventListener(eventType, event => {
            if (Object.values(childElements).includes(event.target)) {
                listener(event);
            }
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
        return this.renderTemplate();
    }

    rerender() {
        this.unmount();
        if (this.el) {
            this.el.replaceWith(htmlToElement(this.renderTemplate()));
        }

        this.mount();
    }

    mount() {
        this.el = document.getElementById(`${this.id}`);
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

    renderTemplate() {
        //can be implemented in inherited component
        return '';
    }
}