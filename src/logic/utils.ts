/**
 * Convert any TS object into a plan JS object. Redux does not play nicely with TS objects.
 * @param object Any TS object
 */
export function jsonify(object: object): object{
  return JSON.parse(JSON.stringify(object))
}