function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

module.exports = {
    isEmptyOrSpaces
}