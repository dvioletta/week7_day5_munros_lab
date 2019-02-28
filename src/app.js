const SelectView = require('./views/select_view.js');
const Mountain = require('./models/mountain.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const mountainContainer = document.querySelector('#mountains');
  const selectView = new SelectView(mountainContainer);
  selectView.bindEvents();

  const mountain = new Mountain();
  mountain.getData();
});
