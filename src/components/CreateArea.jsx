import React, { useState } from "react";
import CreateIcon from '@material-ui/icons/Create';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isReady,checkIfReady]= useState(false) ;
function ifIsReady(){
  checkIfReady(true);
}
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

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
  }

  return (
    <div>
      <form className="create-note" onClick={ifIsReady}>
        <input
        style={{display:isReady ?  "block":"none"}}
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
          rows={isReady ? "3" : "1" }
        />
        <Zoom in={isReady}>
        <Fab onClick={submitNote}>
          <CreateIcon/>
          </Fab>
          </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
