import {AppComponent} from '../../classes/AppComponent.js';
import { template} from './ChatList.hbs.js';

class ChatList extends AppComponent{
    constructor(...props){
        super(...props);
        
    }

    didMount() {
       const handleClick =  this.props[2];
       this.on('click', '.chat-item', event => {
        const el = event.target;

        handleClick(el.dataset.id);

       })
    }
    
    renderTemplate(){
        return template({ id:this.id, chats:this.props[0],  selected: this.props[1]});
    }    
}

export {ChatList};