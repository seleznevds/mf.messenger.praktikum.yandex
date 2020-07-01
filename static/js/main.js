import {AppComponent} from './classes/AppComponent.js';
import {App} from './components/App/App.js';

Handlebars.registerHelper('renderComponent', function (Component, parent, ...rest) {    
    if (typeof Component === 'function') {
        const comp = new Component(`${Component.name}_${Math.random()}`, ...rest);
        
        
        if (comp instanceof AppComponent) {
            if (parent instanceof AppComponent) {
                parent.addChild(comp);
            }

            const content = comp.render();

            return content;
        }
    }       
});

const root = document.querySelector('[data-app-root]');
const app = new App();
app.attach(root);
app.mount();