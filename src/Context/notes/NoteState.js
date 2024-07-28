import { useState } from "react";
import ContextNote from "./contextNote";

const NoteState = ({children}) => {
    const val= {
        "name":"sagar",
        "age": 25
    }
    const [change, setchange] = useState(val)
    const update = () =>{
        setTimeout(() => {
            setchange({
                "name":"Roky",
                "age": 28
            })
        }, 5000);
    }
  return (
        <ContextNote.Provider value={{change, update, val}}>
            {children}
            </ContextNote.Provider>
  )
}

export default NoteState
