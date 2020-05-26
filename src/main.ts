/**
 * Memoized function - remembers last value
 * 
 * @param fn
 */
export function memoize<T, V>(fn: (arg0: T) => V): (arg0: T) => V {
    // Cache value
    let cache: null|any = null;

    return arg0 => cache ? cache : (cache = fn(arg0));
}