import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './Header.hbs.js';
import { Menu } from '../Menu/Menu.js';

class Header extends AppComponent {
    render() {
        return this.renderTemplate (template, {
            Menu,                        
        });
    }
}

export { Header };