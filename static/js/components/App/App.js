import {AppComponent} from '../../classes/AppComponent.js';
import {template} from './App.hbs.js';
import {Menu} from '../Menu/Menu.js';
import {ChatList} from '../ChatList/ChatList.js';
import {MessageScreen} from '../MessageScreen/MessageScreen.js';
import {chatList, messages} from '../../data.js';
 

class App extends AppComponent{
    
    selectedChat = 'trr3trf';

    handleChatSelect = (chatId) => {
        this.selectedChat = chatId;
        this.rerender();
    };

    renderTemplate(){        
        return template({
            Menu,
            ChatList,
            MessageScreen,
            chatList,
            messages,
            selectedChat: this.selectedChat,
            handleChatSelect: this.handleChatSelect,
            ParentComponent: this,
            id: this.id
        });
    }    
}

export {App};
  

