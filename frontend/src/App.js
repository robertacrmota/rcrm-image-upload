import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [avatar, setAvatar] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <div>
      <h1>Upload an image to the server</h1>
      <form encType="multipart/form-data"> 
              <input type="file" name="avatar" onChange={handleSubmit}/>
      </form>
      {avatar ? <img src={avatar} width="400" height="300"/> : undefined}
    </div>
  );
}

export default App;
