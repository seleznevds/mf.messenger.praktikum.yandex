import { AppComponent } from '../classes/AppComponent.js';
import { formatterTime, formatterDay } from '../utils/timeFormatter.js';

export const addHandlebarsHelpers = () => {
    Handlebars.registerHelper('renderComponent', function (ComponentClass, ...rest) {        
        const meta = rest.pop();
        const props = rest.shift() || {};
        if(meta 
            && meta.data 
            && meta.data.root 
            && meta.data.root.__PARENT_COMPONENT__INSTANCE__
            && meta.data.root.__PARENT_COMPONENT__INSTANCE__ instanceof AppComponent){
                props.__PARENT_COMPONENT__INSTANCE__ = meta.data.root.__PARENT_COMPONENT__INSTANCE__;                
        }


        if (typeof ComponentClass === 'function') {
            const comp = new ComponentClass(props);
            if (comp instanceof AppComponent) {           
                
                return comp.render();
            }
        }
    });

    Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });

    Handlebars.registerHelper('getFormattedDay', function (timestamp) {
        const messageDate = new Date(timestamp);
        const dateWithoutHours = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate());
        return formatterDay.format(dateWithoutHours);
    });

    Handlebars.registerHelper('getFormattedTime', function (timestamp) {
        console.log(timestamp, '---');
        const messageDate = new Date(timestamp);
        console.log( messageDate , '===');
        return formatterTime.format(messageDate);
    });

    Handlebars.registerHelper('getFormattedTimeOrDay', function (timestamp) {
        const todayTimeStamp = new Date().setHours(0, 0, 0, 0);
        return todayTimeStamp > timestamp ? formatterDay.format(timestamp) : formatterTime.format(timestamp);
    });
};