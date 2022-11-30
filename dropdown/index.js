const items = document.getElementsByClassName('list_dropdown-item')


const i = 0
const teste = ['a','b','c','d','e','f']
const newArray = teste.map(function(item) {
  items[i]
  console.log(items);
  console.log(item);
  // item[i]
  i++
})
