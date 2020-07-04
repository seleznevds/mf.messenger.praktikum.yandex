import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './Registration.hbs.js';
import { validate } from '../../utils/validate.js';

class Registration extends AppComponent {
    values = { name: '', email: '', password: '', ['password_confirm']: '' };
    errors = {};
    validateSchema = {
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
        ['password_confirm']: {
            func: values => {

                if (values.password !== values['password_confirm']) {
                    return 'Пароли должны совпадать'
                }

                return null;
            },
        },
    };

    didMount() {
        this.on('submit', 'form', (event) => {
            //TODO move to form component
            const form = event.realTarget;
            const formData = new FormData(form);
            const values = [...formData.entries()];

            this.errors = validate(values, this.validateSchema);
            this.values = values.reduce((obj, [key, value]) => {
                return {
                    ...obj,
                    [key]: value
                };
            }, {});

            if (!Object.values(this.errors).length) {
                for (var [key, value] of values.entries()) {
                    console.log(key, value);
                }
            }

            event.preventDefault();
            this.rerender();
        })
    }

    render() {
        return this.renderTemplate(template, {
            errors: this.errors,
            values: this.values
        });
    }
}

export { Registration };