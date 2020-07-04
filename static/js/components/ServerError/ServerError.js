import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './ServerError.hbs.js';

class ServerError extends AppComponent {
    render() {
        return this.renderTemplate(template);
    }
}

export { ServerError };