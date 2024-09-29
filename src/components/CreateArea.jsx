import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[isClicked, setIsClicked] = useState(false);

  function expand() {
    setIsClicked(!isClicked);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <form  className="create-note">
       {isClicked? <div>  
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={true}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom> </div> :
         <div> <input 
         onClick={expand}
         name="title"
         onChange={handleChange}
         value={note.title}
         placeholder="Type your note here"
       /> </div>}
        
      </form>
    </div>
  );
}

export default CreateArea;
