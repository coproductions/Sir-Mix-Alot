var DataStore = require('./DataStore.js');
var myDataStore = new DataStore();



function Model(schema){
 this.store = myDataStore;
 this.schema = schema;
 this.id = null;

 for(key in schema){
  this[key] = schema[key];
 }

 if(!DataStore.store.hasOwnProperty('Model'))
   DataStore.store.Model = [];
}


module.exports = Model;