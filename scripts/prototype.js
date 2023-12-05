/*
 * append variable value to string
 */
String.prototype.format = function () {
    var s = this;
    for (var i = 0; i < arguments.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i]);
    }
    return s;
};

/**
 * replace all substring in string
 * @param {any} search be replaced text
 * @param {any} replacement text to replace
 * @returns {string} replaced text
 */
// String.prototype.replaceAll = function (search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, "g"), replacement);
// };