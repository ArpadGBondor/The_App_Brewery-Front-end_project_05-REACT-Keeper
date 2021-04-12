import React, { useState } from 'react';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [formContent, setFormContent] = useState({ title: '', content: '' });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormContent((prevValue) => ({ ...prevValue, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(formContent);
    setFormContent({ title: '', content: '' });
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        onFocus={() => setExpanded(true)}
        // onBlur={() => setExpanded(false)}
      >
        {isExpanded && <input name="title" placeholder="Title" value={formContent.title} onChange={handleChange} />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={formContent.content}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
          <Fab className="new-note-button" onClick={handleSubmit}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
