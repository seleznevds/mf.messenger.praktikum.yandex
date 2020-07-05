import { App } from './components/App/App.js';


import { addHandlebarsHelpers } from './utils/handelbarsHelpers.js';

let app = new App();

const root = document.querySelector('[data-app-root]');
addHandlebarsHelpers();
app.attach(root);
app.mount();