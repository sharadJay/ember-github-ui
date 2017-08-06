import Ember from 'ember';
const {computed} = Ember;

export default function isInArray(orgKey, listKey) {
  return computed(orgKey, `${listKey}.[]`, function () {
    const org = this.get(orgKey+".id") || this.get(orgKey) ;
    const items = this.get(listKey);
    return items.indexOf(org) >= 0;
  });
}
