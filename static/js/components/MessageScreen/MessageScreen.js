import {AppComponent} from '../../classes/AppComponent.js';
import { template} from './MessageScreen.hbs.js';
import {Message} from '../Message/Message.js'


class MessageScreen extends AppComponent{
   

    didMount() {
       
    }
    
    render(){
        const messages = this.props.messages.map(message => ({message}));
        return this.renderTemplate(template, { Message,  messages:messages, selectedChat:this.props.selectedChat});
    }    
}

export {MessageScreen};