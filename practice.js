
let baseCount = document.getElementById('js-counter')

let savedCount = document.getElementById('save-count')


let count = 0

function increment () {
  count += 1
  baseCount.innerText = count
}

function unincrement () {
  count += -1
  baseCount.innerText = count
}

function save () {
  newSavedCount = count + ", "
  savedCount.textContent += newSavedCount
  count = 0
  baseCount.textContent = 0
}
