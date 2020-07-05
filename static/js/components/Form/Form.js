import { AppComponent } from '../../classes/AppComponent.js';
import { validate } from './validate.js';

class Form extends AppComponent {
    constructor(props) {
        super(props);
        this.values = this.props.initialValues || {};
        this.errors = {};
    }

    didMount() {
        this.on('submit', 'form', (event) => {
            const form = event.realTarget;
            const formData = new FormData(form);
            const values = [...formData.entries()];

            if (this.props.validationSchema) {
                this.errors = validate(values, this.props.validationSchema);
            }
            
            this.values = values.reduce((obj, [key, value]) => {
                return {
                    ...obj,
                    [key]: value
                };
            }, {});

            if (!Object.values(this.errors).length && this.props.onSubmit) {
                this.props.onSubmit(this.values);
            }

            event.preventDefault();
            this.rerender();
        });

        this.on('focusout', 'form input, form textarea', (event) => {//TODO fix focusout bug when replacing focus from one field to another         
            const el = event.realTarget;
            const form = el.closest('form');
            const formData = new FormData(form);
            const values = [...formData.entries()];

            if (this.props.validationSchema) {
                const errors = validate([[el.name, el.value]], this.props.validationSchema, values);
                if (Object.values(errors).length) {
                    this.errors = {
                        ...this.errors,
                        ...errors
                    };
                    
                } else {
                    delete  this.errors[el.name];
                }

                this.values = {
                    ...this.values,
                    ...{ [el.name]:el.value }
                };

                this.rerender();
            }            
        });        
    }

    render() {
        const { validationSchema, onSubmit, initialValues, template, ...restProps } = this.props;

        return this.renderTemplate(`<div data-component-id={{__COMPONENT_ID__}}>${this.props.template}</div>`, {//TODO don't use div-wrapper
            errors: this.errors,
            values: this.values,
            ...restProps
        });
    }
}

export { Form };