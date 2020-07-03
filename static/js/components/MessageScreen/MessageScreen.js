import {AppComponent} from '../../classes/AppComponent.js';
import { template} from './MessageScreen.hbs.js';

class MessageScreen extends AppComponent{
    constructor(...props){
        super(...props);       
    }

    didMount() {
       
    }
    
    renderTemplate(){



        return template({ id:this.id,  chats:this.props[0]});
    }    
}

export {MessageScreen};