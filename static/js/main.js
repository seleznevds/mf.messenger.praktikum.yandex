
import {App} from './components/App/App.js';
import { addHandlebarsHelpers} from './utils/handelbarsHelpers.js';

addHandlebarsHelpers();

const root = document.querySelector('[data-app-root]');
const app = new App();
app.attach(root);
app.mount();