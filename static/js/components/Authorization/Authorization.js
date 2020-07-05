import { AppComponent } from '../../classes/AppComponent.js';
import { template, formTemplate } from './Authorization.hbs.js';
import {Form} from '../Form/Form.js';

const initialValues = { email: '', password:''};

const validationSchema = {
    email: { 
        regexp: /.+@.+\..+/i,
        error: 'Укажите email',
    },
    password: { 
        regexp: /\S+/,
        error: 'Укажите пароль',
    },
};


class Authorization extends AppComponent {
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

export { Authorization };