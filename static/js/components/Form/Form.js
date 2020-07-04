import { AppComponent } from '../../classes/AppComponent.js';


class Form extends AppComponent {
    didMount() {    
        const  handleClick = event => {               
            const el = event.realTarget;
            this.props.handleChatSelect(el.dataset.id);           
        }
        
        this.on('click', '.chat-item', handleClick );       
    }

    render() {
        return this.renderTemplate(this.protemplate, {
            chats: this.props.chatList,
            selected: this.props.selectedChat
        });
    }
}

export { Form };