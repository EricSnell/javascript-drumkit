(() => {

  // Function to play sound and add .active class
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`)
    const key = document.querySelector(`.key[data-key="${ e.keyCode }"]`)

    if (!audio) return      // Stop the function from running altogether

    audio.currentTime = 0   // Starts audio at the beginning

    audio.play()            // Plays sound

    key.classList.add('active')  // Adds .active class
  }

  // Function that removes active class
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return // skip if it's not a transform
    this.classList.remove('active')
  }


  // Run removeTransition function on transitionend event to return to normal state
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))


  window.addEventListener('keydown', playSound)

})()
