export const validate = (valuesForValidating, schema, allValues = valuesForValidating) => {
    const valuesMap = allValues.reduce((obj, [key, value]) => {
        return {
            ...obj,
            [key]: value
        };
    }, {});

    const errors = valuesForValidating.reduce((errors, [key, value]) => {
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