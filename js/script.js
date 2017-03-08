(() => {

  window.addEventListener('keydown', (e) => {

    const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`)
    const key = document.querySelector(`.key[data-key="${ e.keyCode }"]`)

    if (!audio) return      // Stop the function from running altogether

    audio.currentTime = 0   // Starts audio at the beginning

    audio.play()

    console.log(key)

  })

})()
