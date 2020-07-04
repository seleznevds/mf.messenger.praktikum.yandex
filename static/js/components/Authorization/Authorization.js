import { AppComponent } from '../../classes/AppComponent.js';
import { template } from './Authorization.hbs.js';
import { validate } from '../../utils/validate.js';

class Authorization extends AppComponent {
    values = { email: '', password:'',};
    errors = {};
    validateSchema = {
        email: { 
            regexp: /.+@.+\..+/i,
            error: 'Укажите email',
        },
        password: { 
            regexp: /\S+/,
            error: 'Укажите пароль',
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

export { Authorization };