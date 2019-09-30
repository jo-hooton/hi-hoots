const h1 = document.querySelector('h1')

let greetingCounter = 0
let visableGreeting = ""

greeting = 'Hi, my name is Joanne Hooton. Most people know me as Hoots.'

addCharacterToGreeting = () => {
    const character = greeting.charAt(greetingCounter)
    visableGreeting = visableGreeting.concat(character)
    greetingCounter++
    h1.innerHTML = visableGreeting
}

addSomeCharacters = () => {
    let interval = (Math.random() * 100)
    let looper = setInterval(() => {
      addCharacterToGreeting()
      let divider = (Math.random() * 10)
      if (greetingCounter >= divider)
      {
          clearInterval(looper);
      }
    }, interval)
  }

runGreeting = () => {
    setInterval(() => {
      addSomeCharacters()
    }, 100)
}

headerTransition = () => {
      const removeTextBeforeName = visableGreeting.slice(57, 63)
      visableGreeting = removeTextBeforeName
}
