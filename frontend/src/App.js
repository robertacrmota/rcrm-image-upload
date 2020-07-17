import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [avatar, setAvatar] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    uploadImage();

    async function uploadImage() {
      const file = evt.target.files[0];

      const data = new FormData();
      data.append('file', file);
      data.append('filename', file.name);

      // POST request
      const result = await axios.post('http://localhost:3000/upload', data, { 
                                        headers: { 'Content-Type': 'multipart/form-data'}
      });

      console.log(result);
    }
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
