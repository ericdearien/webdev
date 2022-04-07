//returns if character is a letter
module.exports.isUpperCase = function(char) {
    return (/[A-Z]/).test(char);
}
//returns if character is a digit
module.exports.isDigit = function(char) {
    return (/[1-9]/).test(char);
}
//returns if character is a letter or digit
module.exports.isLetterOrDigit = function(char) {
    return ((/[a-zA-Z]/).test(char) || (/[1-9]/).test(char));
}

