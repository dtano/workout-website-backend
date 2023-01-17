const stringUtils = require("./stringUtils");

const validateRequestBody = (body, requiredFields) => {
    for(key of requiredFields){
        if(!body.hasOwnProperty(key) || (!body[key] || stringUtils.isEmptyOrSpaces(body[key]))){
            return false;           
        }
    }

    return true;
}

module.exports = {
    validateRequestBody
}