import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './ChatList.hbs.js';

class ChatList extends AppComponent {
    didMount() {        
        this.on('click', '.chat-item', event => {           
            const el = event.target;
            this.props.handleChatSelect(el.dataset.id);
           
        });
    }

    render() {
        return this.renderTemplate(template, {
            id: this.id,
            chats: this.props.chatList,
            selected: this.props.selectedChat
        });
    }
}

export { ChatList };