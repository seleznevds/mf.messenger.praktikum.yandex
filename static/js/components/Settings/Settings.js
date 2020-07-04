import { AppComponent } from '../../classes/AppComponent.js';
import { Header} from '../Header/Header.js';
import { template } from './Settings.hbs.js';

class Settings extends AppComponent {
    didMount() {        
        
    }

    render() {
        return this.renderTemplate(template, {
            Header    
        });
    }
}

export { Settings };