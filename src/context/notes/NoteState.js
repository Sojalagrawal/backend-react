
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "64e0c9f67648c389d567e219",
          "user": "64e0c9d77648c389d567e215",
          "title": "my title ",
          "description": "please wake up early in the morning",
          "tag": "personal",
          "date": "1692453366931",
          "__v": 0
        },
        {
          "_id": "64e0ca057648c389d567e21c",
          "user": "64e0c9d77648c389d567e215",
          "title": "my title 1",
          "description": "please wake up early in the morning",
          "tag": "personal",
          "date": "1692453381449",
          "__v": 0
        }
    ]
    const [notes,setNotes]=useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes,setNotes}}>  
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;