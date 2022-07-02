import validation, { isArray } from 'validate.js'
import constraints from './validation'

export function validate(fieldName, value) {
    let result;
    var formValues = {}
    var formFields = {}

    formValues[fieldName] = value
    formFields[fieldName] = constraints[fieldName]


    result = validation(formValues, formFields)


    if (result) {
        return result[fieldName][0]
    }
    return null
}

export function validateConfirmPassword(fieldName, value) {
    let result;
    var formValues = {}
    var formFields = {}
    for (let i = 0; i < fieldName.length; i++) {
        formValues[fieldName[i]] = value[i]
        formFields[fieldName[i]] = constraints[fieldName[i]]
    }

    result = validation(formValues, formFields)

    if (result && isArray(fieldName) && isArray(value)) {
        return result[fieldName[0]][0]
    }
    return null
}