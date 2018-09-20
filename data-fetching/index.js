function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('human-data');
const url = 'https://randomuser.me/api/?results=5';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let human = data.results;
  return human.map(function(human) {
    let li = createNode('li'),
        img = createNode('img'), 
        title = createNode('title'), 
        name = createNode('name'), 
        surname = createNode('surname'), 
        dob = createNode('dob'), 
        span = createNode('span'); 
    img.src = human.picture.medium;
    span.innerHTML = `${human.name.title} ${human.name.name} ${human.name.surname} ${human.name.dob}`;
    append(li, img,title, name, surname, dob);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   