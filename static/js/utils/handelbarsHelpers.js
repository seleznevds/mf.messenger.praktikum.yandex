import { AppComponent } from '../classes/AppComponent.js';
import { formatterTime, formatterDay } from '../utils/timeFormatter.js';

export const addHHandlebarsHelpers = () => {
    Handlebars.registerHelper('renderComponent', function (Component, parent, ...rest) {
        if (typeof Component === 'function') {
            rest.pop();

            const comp = new Component(`${Component.name}_${Math.random()}`, ...rest);
            if (comp instanceof AppComponent) {
                if (parent instanceof AppComponent) {
                    parent.addChild(comp);
                }
                const content = comp.render();

                return content;
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
        const messageDate = new Date(timestamp);
        return formatterTime.format(messageDate);
    });

    Handlebars.registerHelper('getFormattedTimeOrDay', function (timestamp) {
        const todayTimeStamp = new Date().setHours(0, 0, 0, 0);
        return todayTimeStamp > timestamp ? formatterDay.format(timestamp) : formatterTime.format(timestamp);
    });
};