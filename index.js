var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left
dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  } else if (e.which === 39) {
    moveDodgerRight()
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left => 10) {
    console.log(left)
    dodger.style.left = `${left - 5}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left + 5}px`
  }
}
