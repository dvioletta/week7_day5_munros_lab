const PubSub = require('../helpers/pub_sub');
const RequestHelper = require('../helpers/request_helper.js');

const Mountain = function(){
  this.mountain = [];

};

Mountain.prototype.getData = function(mountain){
  const url = 'https://munroapi.herokuapp.com/munros';
  const request = new RequestHelper(url);
  request.get()
  .then((data)=>{
    this.data = data;
    PubSub.publish('Mountains:Munros-Ready',this.data);
  })
  .catch((error)=>console.error(error));
};

module.exports = Mountain;
