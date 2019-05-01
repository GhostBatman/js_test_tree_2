let trunk = {
  listItem1: 1,
  subList: {
    subSubList: {
      subSubListItem1: 1,
      subSubListItem3: 1,
      subSubListItem2: 'green'
    },
    subListItem1: 'blue'
  },
  listItem2: 1,
}

function createTree (obj, val) {
  let arr = []
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      let resultArr = createTree(obj[key], val)
      if (typeof resultArr[0] !== 'undefined') {
        arr.push({
          name: key,
          arr: resultArr
        })
      }
    } else if (obj[key] === val) {
      arr.push({ name: key })
    }
  }
  return arr
}

function render (branch, el) {
  branch.forEach(function (item) {
    let newEl = document.createElement('div')
    newEl.innerHTML = item.name
    el.appendChild(newEl)
    newEl.classList.add('name')
    if (item.hasOwnProperty('arr')) {
      render(item.arr, newEl)
    }
  })
}

let tree = createTree(trunk, 1)
render(tree, document.getElementsByClassName('nest')[0])