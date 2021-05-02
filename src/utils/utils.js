export const isObject = (obj) =>
    typeof obj === 'object' && obj.constructor === Object;

export const isObjectEmpty = (obj) =>
    isObject(obj) && Object.keys(obj).length === 0;

export const isObjectNotEmpty = (obj) =>
    isObject(obj) && Object.keys(obj).length > 0;

// TODO make this return a copy of the obj
export const traverseObject = (
    obj,
    ignoredProperties = [
        'coverLetter',
        'meta',
        '$schema',
        '__translation__',
    ]
) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const property in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(property)) {
            if (obj[property]?.length === 0 || ignoredProperties.includes(property)) {
                // eslint-disable-next-line no-param-reassign
                delete obj[property];
            } else {
                if (typeof obj[property] === 'object') {
                    traverseObject(obj[property]);
                }

                // eslint-disable-next-line no-param-reassign
                obj[property] = {
                    value: obj[property],
                    enabled: true,
                };
            }

        }
    }

    return obj;
};

export const capitalize = (string) => {
    if (!string) {
        return '';
    }

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const varNameToString = (varObj) => Object.keys(varObj)[0];
