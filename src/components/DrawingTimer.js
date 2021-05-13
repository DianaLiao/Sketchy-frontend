import { useState, useEffect } from "react"

function DrawingTimer(){

  const [timerInput, setTimerInput] = useState(60)

  function handleTimerSubmit(event){
    event.preventDefault()
  }

  return(
    <>
      Optional Timer
      <form onSubmit={handleTimerSubmit}>
        <label for="timer-set">Set number of seconds:</label>
          <input id="timer-set" type="number" min="5" value={timerInput} onChange={e => setTimerInput(e.target.value)}></input>
          <input type="submit" value="Start timer!"></input>
      </form>
    </>
  )
}

export default DrawingTimer