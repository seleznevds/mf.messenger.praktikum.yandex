import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './Chat.hbs.js';
import { Header} from '../Header/Header.js';
import { ChatList } from '../ChatList/ChatList.js';
import { MessageScreen } from '../MessageScreen/MessageScreen.js';
import { chatList, messages } from '../../data.js';


const sortByDateAsc = (first, second) => {
    return first.date - second.date;
}

const sortByDateDesc = (first, second) => {
    return second.date - first.date;
}


class Chat extends AppComponent {

    messages = [];
    selectedChat = null;

    handleChatSelect = (chatId) => {
        this.selectedChat = chatId;
        this.messages = (this.selectedChat ? [...messages[this.selectedChat]] : []).sort(sortByDateAsc); 


        this.rerender();
    };

       
    render() {

        return this.renderTemplate (template, {
            ChatList, 
            chatListProps: {
                chatList: [...chatList].sort(sortByDateDesc),
                selectedChat: this.selectedChat,
                handleChatSelect: this.handleChatSelect,
            },

            MessageScreen,
            messageScreenProps:{
                messages: this.messages,
                selectedChat: this.selectedChat,
            },

            Header,            
        });
    }
}

export { Chat };


