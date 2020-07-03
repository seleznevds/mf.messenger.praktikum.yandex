import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './Message.hbs.js';

class Message extends AppComponent {    
    
    didMount(){
      
    }   


    render() {
        return this.renderTemplate(template, {
            message: this.props.message,
        });
    }
}

export { Message };