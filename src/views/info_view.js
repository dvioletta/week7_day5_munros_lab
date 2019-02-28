const InfoView = function (mountainContainer, mountain) {
  this.mountain = mountain;
  this.mountainContainer = mountainContainer
};

InfoView.prototype.render = function () {
  const mountainContainer = document.createElement('div');
  mountainContainer.classList.add('header')

  const name = this.createMountainHeading();
  mountainContainer.appendChild(name);

  const heightMeaningList = this.createHeightMeaningList();
  mountainContainer.appendChild(heightMeaningList)

  this.mountainContainer.appendChild(name)
  this.mountainContainer.appendChild(heightMeaningList)


}

InfoView.prototype.createMountainHeading = function () {
  const name = document.createElement('h2');
  name.textContent = this.mountain.name

  return name;

}

InfoView.prototype.createHeightMeaningList = function () {
  const list = document.createElement('ul');
  list.classList.add('meaning');
  this.populate(list);
  console.log(list);
  return list;
}

InfoView.prototype.populate = function(list) {
    const height = document.createElement('li')
    height.textContent = `Height ${this.mountain.height}`
    list.appendChild(height)

    const meaning = document.createElement('li')
    meaning.textContent =`Meaning ${this.mountain.meaning}`
    list.appendChild(meaning)

}


module.exports = InfoView
