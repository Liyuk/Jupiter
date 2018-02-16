// json
var deepClone = function(obj) {
    var _tmp, result;
    _tmp = JSON.stringify(obj);
    result = JSON.parse(_tmp);
    return result;
}

// object / array
var deepClone = function fnDeepClone(obj) {
    var result = typeof obj.splice === 'function' ? [] : {},
        key;
    if (obj && typeof obj === 'object') {
        for (key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = fnDeepClone(obj[key]);
            } else {
                result[key] = obj[key];
            }

        }
        return result;
    }
    return obj;
}