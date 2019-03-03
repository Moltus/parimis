var teas = [
  'chamomile',
  'green',
  'breakfast',
  'earl grey'
]
var container = document.getElementById('container');

function createListElement(data){
  var ul = document.createElement('ul');
  for (i in data){
    var li = document.createElement('li');
    var text = document.createTextNode(data[i]);
    li.appendChild(text);
    ul.appendChild(li);
  }
  return ul;
}

var teaList = createListElement(teas);
container.appendChild(teaList);