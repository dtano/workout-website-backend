const stringUtils = require("./stringUtils");

const validateRequestBodyMandatoryFields = (body, requiredFields) => {
    for(key of requiredFields){
        if(!body.hasOwnProperty(key) || (!body[key] || stringUtils.isEmptyOrSpaces(body[key]))){
            return false;           
        }
    }

    return true;
}

const validateRequestBodyAllowedFields = (body, allowedFields) => {
    for(const [key, value] of Object.entries(body)){
        if(!allowedFields.includes(key)){
            return false;
        }
    }

    return true;
}

module.exports = {
    validateRequestBodyMandatoryFields,
    validateRequestBodyAllowedFields
}