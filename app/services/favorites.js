import Ember from 'ember';

export default Ember.Service.extend({
  items:[],
  log(){
    console.log(this.items);
  },
  favoriteItem(item){
    this.get('items').addObject(item);
  },
  unFavoriteItem(item){
    this.get('items').removeObject(item);
  }
});
