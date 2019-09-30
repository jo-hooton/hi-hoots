console.log("Linked")

start = () => {
    const looper = runGreeting()
    setTimeout(() => {
      clearInterval(looper)
      headerTransition()
    }, 8000)
    
  }

  start()