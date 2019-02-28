const PubSub = require('../helpers/pub_sub.js');


const SelectView = function(container){
  this.container = container;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Mountains:Munros-Ready',(evt) =>{
    this.munros = evt.detail;
    console.log('hiya');
    // this.render();
  });
};


module.exports = SelectView;
