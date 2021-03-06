import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './ChatList.hbs.js';

class ChatList extends AppComponent {
    didMount() {    
        const  handleClick = event => {               
            const el = event.realTarget;
            this.props.handleChatSelect(el.dataset.id);           
        }
        
        this.on('click', '.chat-item', handleClick );       
    }

    render() {
        return this.renderTemplate(template, {
            chats: this.props.chatList,
            selected: this.props.selectedChat
        });
    }
}

export { ChatList };