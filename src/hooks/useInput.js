import { useState } from "react"

export function useInput(defaultValue, validationFn) {
    const [enteredInfo, setEnteredInfo] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enteredInfo)

    function handleChanges(event) {
        setEnteredInfo(event.target.value)
        setDidEdit(false)
    }
    
    function handleInputBlur() {
        setDidEdit(true)
    }

    return {
        value: enteredInfo,
        handleChanges,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}