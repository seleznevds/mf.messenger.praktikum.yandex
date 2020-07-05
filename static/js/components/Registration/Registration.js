import { AppComponent } from '../../classes/AppComponent.js';
import { template, formTemplate } from './Registration.hbs.js';
import {Form} from '../Form/Form.js';

const initialValues = { name: '', email: '', password: '', password_confirm: '' };

const validationSchema = {
    email: {
        regexp: /.+@.+\..+/i,
        error: 'Укажите email',
    },
    name: {
        regexp: /\S{3,}/i,
        error: 'Заполните поле. Не меньше 3-х символов.',
    },
    password: {
        regexp: /[a-zA-Z0-9\!\@\#\$\%\^\&\*]{6,}/,
        error: 'Пароль должен состоять из латинских букв или цифр или спецсимволов ! @ # $ % ^ & *. Не меньше 6 символов.',
    },
    password_confirm: {
        func: values => {

            if (values.password !== values.password_confirm) {
                return 'Пароли должны совпадать'
            }

            return null;
        },
    },
};

class Registration extends AppComponent {  
    onSubmit = (values) => {
        console.log(values);
    }

    render() {
        return this.renderTemplate(template, {
            Form,
            formProps:{
                initialValues,
                validationSchema,
                template: formTemplate,
                onSubmit:this.onSubmit,
            }
        });
    }
}

export { Registration };