/**
 * 
 * @param {Number} start 
 * @param {Number} end 
 */

export function bRandom(start, end) {
    return Math.round(start + Math.random()*(end - start));
}