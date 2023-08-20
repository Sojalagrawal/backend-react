import React from 'react'

const Noteitem = (props) => {
  const {note}=props;
  return (
        <div class="card" style={{width: "18rem",display:"inline-block",margin:"10px 10px 0px 0px"}}>
           <div class="card-body">
             <h5 class="card-title">{note.title}</h5>
             <p class="card-text">{note.description}</p>
             <a href="/" class="btn btn-primary">Go somewhere</a>
           </div>
        </div>

  )
}

export default Noteitem