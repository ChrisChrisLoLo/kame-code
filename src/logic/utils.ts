/**
 * Convert any TS object into a plan JS object. Redux does not play nicely with TS objects.
 * @param object Any TS object
 */
export function jsonify(object: object){
  return JSON.parse(JSON.stringify(object))
}

/**
 * Does a quick deep compare between two objects.
 * Will cause issues if the object's properties are being manually added in different orders.
 * This should not be an issue since objects are made via classes in this codebase.
 * 
 * @return true if the two objects are equivalent 
 * @param objA 
 * @param objB 
 */
export function isDeepEquality<T>(objA: T, objB: T){
  return JSON.stringify(objA) === JSON.stringify(objB) 
}