var classesurl = 'https://api.open5e.com/classes/';
var magicitemurl = 'https://api.open5e.com/magicitems/?limit=239';
function getapi(url) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();
  return xhr.responseText;
}

function getClasses() {
  var App = getapi(classesurl);
  var AppData = JSON.parse(App);
  Array.from(AppData.results).forEach(name => {

    var Class = document.createElement('li');
    Class.textContent = name.name;
    document.getElementsByClassName('classcontainer')[0].appendChild(Class);
  });
}
getClasses();

function getMagicItem() {
  var App = getapi(magicitemurl);
  var AppData = JSON.parse(App);
  Array.from(AppData.results).forEach(name => {

    var Class = document.createElement('li');
    Class.textContent = name.name;
    document.getElementsByClassName('magic')[0].appendChild(Class);
  });
}
getMagicItem();
