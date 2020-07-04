import { AppComponent } from '../../classes/AppComponent.js';
import { Chat } from '../Chat/Chat.js';
import { Settings } from '../Settings/Settings.js';
import { Authorization } from '../Authorization/Authorization.js';
import { Registration } from '../Registration/Registration.js';
import { ServerError } from '../ServerError/ServerError.js';
import { NotFound } from '../NotFound/NotFound.js';
import { template } from './App.hbs.js';

class App extends AppComponent {
    component = null;

    render() {
        let addWrapperClassName = false; //TODO don't use, replace with cool css styles 

        switch (window.location.pathname) {//TODO create better router
            case '/':
            case '/index.html':
                this.component = Chat;
                addWrapperClassName = true;
                break;
            case '/settings.html':
                this.component = Settings; 
                addWrapperClassName = true;               
                break;
           case '/authorization.html':
                this.component = Authorization;
                break;
             case '/registration.html':
                this.component = Registration;
                break;
            case '/500.html':
                this.component = ServerError;
                break;
            default:
                this.component = NotFound;            
        }

        return this.renderTemplate(template, {
            Component: this.component,
            addWrapperClassName
        });
    }
}

export { App  };