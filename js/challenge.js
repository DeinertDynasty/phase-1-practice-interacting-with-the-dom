let counter = document.getElementById('counter')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let commentForm = document.getElementById('comment-form')
let commentInput = document.getElementById('comment-input')
let commentList = document.getElementById('list')
let likesList = document.querySelector('.likes')

let count = 0
let paused = false
let likes = {}

let timer = setInterval(incrementCounter, 1000)

function incrementCounter() {
  if (!paused) {
    count++
    counter.innerText = count
  }
}

function decrementCounter() {
  count--
  counter.innerText = count
}

function incrementLikes() {
  likes[count] = likes[count] ? likes[count] + 1 : 1

  likesList.innerHTML = ""
  for (let key in likes) {
    let li = document.createElement('li')
    li.innerText = `${key} has been liked ${likes[key]} time(s).`
    likesList.append(li)
  }
}

function togglePause() {
  paused = !paused
  pause.innerText = paused ? "resume" : "pause"
  minus.disabled = paused
  plus.disabled = paused
  heart.disabled = paused
}

function submitComment(e) {
  e.preventDefault()
  let p = document.createElement('p')
  p.innerText = commentInput.value
  commentList.append(p)
  commentInput.value = ""
}

minus.addEventListener('click', decrementCounter)
plus.addEventListener('click', incrementCounter)
heart.addEventListener('click', incrementLikes)
pause.addEventListener('click', togglePause)
commentForm.addEventListener('submit', submitComment)
