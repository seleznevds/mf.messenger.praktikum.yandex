
import {App} from './components/App/App.js';
import { addHHandlebarsHelpers} from './utils/handelbarsHelpers.js';

addHHandlebarsHelpers();

const root = document.querySelector('[data-app-root]');
const app = new App();
app.attach(root);
app.mount();