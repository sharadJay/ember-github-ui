import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  const [number] = params;
  return number > 1000 ? parseFloat((number / 1000).toFixed(1)) + "k" : `${number}`;
}

export default Ember.Helper.helper(niceNumber);
