var DataStore = require('./DataStore.js');
console.log('DataStore',DataStore);

var myStore = DataStore.store;
function Model(schema){
  this.schema = schema;
  this.id = null;


   for(key in schema){
    this[key] = null;
   }

   if(!myStore.hasOwnProperty('Model')){ //name of class that implements the model
     myStore.Model = [];
   }
};

Model.prototype.save = function(){
  if(!this.id){
    this.id = getNextId();
  }
};


// Model.prototype.destroy = function(){
//   if(this.id){
//     for
//   }
// }

// Model.getNextId = myStore.Model.reduce(function(prev,current){
//   if(current.id !== null && current.id > prev){
//     prev = current.id;
//   }
//   return prev+1;
// },0);

Model.getNextId = function(){
  var last = 0;
  for (var i = 0; i < myStore.Model.length; i++) {
    if(myStore.Model[i].id > last){
      last = myStore.Model[i].id
    }
    return last+1;
  };
}


module.exports = Model;