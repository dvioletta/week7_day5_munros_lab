const PubSub = require('../helpers/pub_sub.js');
const InfoView = require('./info_view.js');


const SelectView = function(container){
  this.container = container;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Mountains:Munros-Ready',(evt) =>{
    this.munros = evt.detail;
    console.log("munros", this.munros);
    this.render();
  });
};

SelectView.prototype.render = function(){
  this.munros.forEach((munro)=>{
    const infoView = new InfoView(this.container, munro);
    infoView.render();
  })
};

module.exports = SelectView;
