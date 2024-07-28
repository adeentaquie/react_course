import { useState } from "react"

export function useInput(defaultValue,validationFN){
    const [enteredValue,setEnteredValue]=useState(defaultValue)
  const [didEdit,setDidEdit]=useState(false)

  const valueisValid=validationFN(enteredValue)

  function handleInputChange(event){

    setEnteredValue(event.target.value)
    setDidEdit(false)
  
    }
  
    function handleInputBlur(){
      setDidEdit(true)
  
    }

    return {
        value:enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError:didEdit&& !valueisValid
    }

}