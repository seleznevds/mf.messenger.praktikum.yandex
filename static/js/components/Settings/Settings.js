import { AppComponent } from '../../classes/AppComponent.js';
import { Header} from '../Header/Header.js';
import { template,  formTemplate } from './Settings.hbs.js';
import {Form} from '../Form/Form.js';


const initialValues = { name: '', email: '', password: '', password_confirm: '' };

const validationSchema = {
    fio: {
        regexp: /\S{3,}/i,
        error: 'Заполните поле. Не меньше 3-х символов.',
    },
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


class Settings extends AppComponent {
    onSubmit = (values) => {
        console.log(values);
    }

    render() {
        return this.renderTemplate(template, {
            Header,    
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

export { Settings };