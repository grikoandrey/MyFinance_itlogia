export class ValidationUtils {

    static validateForm(validations) {
        let isValid = true;

        for (let i = 0; i < validations.length; i++) {
            if (!ValidationUtils.validateFields(validations[i].element, validations[i].options)) {
                isValid = false;
            }
        }
        return isValid;
    };

    static validateFields(element, options) {
        let condition = element.value;
        if (options) {
            if (options.hasOwnProperty('pattern')) {
                condition = element.value && element.value.match(options.pattern);
            } else if (options.hasOwnProperty('compareTo')) {
                condition = element.value && element.value === options.compareTo;
            }
        }

        if (condition) {
            element.classList.remove('is-invalid');
            return true;
        } else {
            element.classList.add('is-invalid');
            return false;
        }
    };
}