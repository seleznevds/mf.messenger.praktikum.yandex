export const validate = (values, schema) => {
    const valuesMap = values.reduce((obj, [key, value]) => {
        return {
            ...obj,
            [key]: value
        };
    }, {});

    const errors = values.reduce((errors, [key, value]) => {
        const validator = schema[key];
        if (validator) {
            if (validator.func) {
                const error = validator.func(valuesMap);
                if (error) {
                    return { ...errors, [key]: error };
                }
            } else if (validator.regexp) {
                if (!validator.regexp.test(String(value))) {
                    return { ...errors, [key]: validator.error };
                }
            }
        }

        return errors;
    }, {});

    return errors;
};