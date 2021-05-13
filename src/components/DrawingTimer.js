import { useState, useEffect } from "react"

function DrawingTimer(){

  const [timerInput, setTimerInput] = useState(60)
  const [displayTimer, toggleDisplayTimer] = useState(false)

  function handleTimerSubmit(event){
    event.preventDefault()
    toggleDisplayTimer(oldState => !oldState)
  }

  function Timer(){

    const [timeRemaining, setTimeRemaining] = useState(timerInput)

    function decreaseTime(){
      if (timeRemaining === 0){
        setTimeRemaining("Done!")
      }
      else if (timeRemaining === "Done!"){
        alert("time's up!")
      }
      else {setTimeRemaining(oldTime => oldTime-1)}
    }

    useEffect(() => {

      let timer = setTimeout(() => decreaseTime(), 1000)
    
      return function cleanup(){
        clearInterval(timer)
      }
    }, [timeRemaining])

    return(
      <div className="timer">
        {timeRemaining}
      </div>
    )
  }

  return(
    <>
      Optional Timer
      <form onSubmit={handleTimerSubmit}>
        <label for="timer-set">Set number of seconds:</label>
          <input id="timer-set" type="number" min="5" value={timerInput} onChange={e => setTimerInput(e.target.value)}></input>
          <input type="submit" value={displayTimer ? "Close Timer" : "Start timer!"}></input>
          {displayTimer && <Timer />}
      </form>
    </>
  )
}

export default DrawingTimer