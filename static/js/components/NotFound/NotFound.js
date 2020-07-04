import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './NotFound.hbs.js';

class NotFound extends AppComponent {
    render() {
        return this.renderTemplate(template);
    }
}

export { NotFound };