import {AppComponent} from '../../classes/AppComponent.js';
import { template} from './Menu.hbs.js';

class Menu extends AppComponent{
    constructor(props){
        super(props);
    }

    didMount() {
        function hideMenuListener(event) {
            if (!event.target.closest('.menu')) {
                menu.classList.remove("menu-visible");
                menuButton.classList.remove("menu-button-hidden");
                setTimeout(() => document.body.removeEventListener('click', hideMenuListener), 0);
            }
        };

        const menuButton = this.el.querySelector('.menu-button');
        const menu = this.el.querySelector('.menu');

        this.on('click', '.menu-button', () => {
            menu.classList.add("menu-visible");
            menuButton.classList.add("menu-button-hidden");
            setTimeout(() => document.body.addEventListener('click', hideMenuListener), 0);
        });        
    }
    
    renderTemplate(){
        return template({ id:this.id });
    }    
}

export {Menu};