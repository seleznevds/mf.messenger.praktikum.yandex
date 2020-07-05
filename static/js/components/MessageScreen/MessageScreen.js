import {AppComponent} from '../../classes/AppComponent.js';
import { template,  formTemplate } from './MessageScreen.hbs.js';
import {Message} from '../Message/Message.js'
import {Form} from '../Form/Form.js';

const messageFormInitialValues = { message: '',};

const messageFormValidationSchema = {
    message: {
        regexp: /\S{3,}/i,
        error: 'Заполните поле. Не меньше 3-х символов.',
    },   
};

class MessageScreen extends AppComponent{
   
    onSubmit = (values) => {
        console.log(values);
    }
      
    render(){
        let dateOfMessageGroup = null;
        let lastAuthorId = null;


        const messages = this.props.messages.map(message =>  {
            const composedMessage = {
                message: {//we need to transform message to obj {message: message}, sad but true
                    ...message,
                    shouldDisplayDateLabel: false,
                    shouldDisplayAuthorBlock: false
                }
            };           
            
            const messageDate = new Date(message.date);
            const dateWithoutHours = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate());

            if(lastAuthorId !== message.authorId){
                //need to show author avatar, etc. in first message in groups (grouped by author)
                lastAuthorId = message.authorId;
                composedMessage.message.shouldDisplayAuthorBlock = true;
            }
            
            if (dateOfMessageGroup === null || dateWithoutHours.getTime() !== dateOfMessageGroup.getTime()) { 
                //need to show short date before messages groups (grouped by day)
                dateOfMessageGroup = dateWithoutHours;
                composedMessage.message.shouldDisplayDateLabel = true;
                composedMessage.message.shouldDisplayAuthorBlock = true; //should display author block in new group (grouped by day)
            }           

            return composedMessage;
        });

        return this.renderTemplate(template, { 
            Message,
            messages:messages,
            selectedChat:this.props.selectedChat,
            Form,
            formProps:{
                initialValues: messageFormInitialValues,
                validationSchema: messageFormValidationSchema,
                template: formTemplate,
                onSubmit:this.onSubmit,
            }
        });
    }    
}

export {MessageScreen};