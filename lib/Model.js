var DataStore = require('./DataStore.js');
console.log('DataStore',DataStore);

var myStore = DataStore.store;
function Model(schema){
  this.schema = schema;
  this.id = null;


   for(key in schema){
    this[key] = null;
   }

   if(!myStore.hasOwnProperty(this.constructor.name)){ //name of class that implements the model
     myStore[this.constructor.name] = [];
   }
};


Model.prototype.save = function(){
  if(this.id === null){
    this.id = this.constructor.getNextId();
    myStore[this.constructor.name].push(this);
  }
};

Model.prototype.destroy = function(){
  if(this.id !== null){
    for (var i = 0; i < myStore[this.constructor.name].length; i++) {
      if(myStore[this.constructor.name][i].id === this.id){
        myStore[this.constructor.name].splice(i,1);
        return;
      }
    };
  }
  return null;

}

Model.getNextId = function(){
  var last = 0;
  for (var i = 0; i < myStore[this.name].length; i++) {
    if(myStore[this.name][i].id !==null && myStore[this.name][i].id > last){
      last = myStore[this.name][i].id
    }
  };
  return last+1;
};

Model.find = function(id){
  for (var i = 0; i < myStore[this.name].length; i++) {
    if(myStore[this.name][i].id == id){
      return myStore[this.name][i];
    }
  };
  return null;
};

Model.extend = function(klass){
  for (var k in this.prototype) {
    if (this.prototype.hasOwnProperty(k)) {
      klass.prototype[k] = this.prototype[k];
    }
 }

  for (var k in this) {
    if (this.hasOwnProperty(k)) {
      klass[k] = this[k];
    }
 }
};
console.log('hello')


module.exports = Model;