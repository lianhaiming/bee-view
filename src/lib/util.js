/**
 * 
 * @param {Number} start 
 * @param {Number} end 
 */

export function bRandom(start, end) {
    return Math.round(start + Math.random()*(end - start));
}

export function dateformat(dt, format) {
    var now = dt || new Date();
    var fm = format || 'yyyy-MM-dd';
    var o = {
        'M+': now.getMonth() + 1,
        'd+': now.getDate(),
        'h+': now.getHours(),
        'm+': now.getMinutes(),
        's+': now.getSeconds()
    }
    if(/(y+)/.test(fm)) {
        fm = fm.replace(RegExp.$1, (now.getFullYear()+'').substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        var regk = new RegExp('('+k +')');

        if(regk.test(fm)) {
            fm = fm.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return fm;
}