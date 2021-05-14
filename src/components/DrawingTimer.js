import { useState, useEffect } from "react"
import { Form} from 'semantic-ui-react'
import Swal from "sweetalert2"

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
        Swal.fire("Mouse pencils down!")
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
      <br></br>
      Use a timer to challenge your creativity!
      <br></br>
      <br></br>
      <Form onSubmit={handleTimerSubmit}>
        <label for="timer-set">Set number of seconds:</label>
          <input id="timer-set" type="number" min="5" value={timerInput} onChange={e => setTimerInput(e.target.value)}></input><br></br>
          <br></br>
          <input style={{background: 'purple', color: 'white', 'border-radius': '13px'}} className="submit-buttons" type="submit" value={displayTimer ? "Close Timer" : "Start timer!"}></input>
          {displayTimer && <Timer />}
      </Form>
    </>
  )
}

export default DrawingTimer