import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [avatar, setAvatar] = useState('');

  const handleSubmit = file => {
  
    const encodeImage = (mimetype, arrayBuffer) => {
        let u8 = new Uint8Array(arrayBuffer)
        const b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
        return "data:"+mimetype+";base64,"+b64encoded;
    }

    const uploadImage = async () => {
      const data = new FormData();
      data.append('file', file);
      data.append('filename', file.name);

      // POST request
      const result = await axios.post('http://localhost:3000/upload', data, { 
                                        headers: { 'Content-Type': 'multipart/form-data'}
      });

      // console.log(result);
      const dataURL = encodeImage(result.data.mimetype, result.data.buffer.data);
      // console.log(dataURL);
      setAvatar(dataURL);
    }

    uploadImage();
  };

  return (
    <div>
      <h1>Upload an image to the server</h1>
      <form encType="multipart/form-data"> 
              <input type="file" name="avatar" onChange={e => handleSubmit(e.target.files[0])}/>
      </form>
      {avatar ? <img src={avatar} width="400" height="300"/> : undefined}
    </div>
  );
}

export default App;
