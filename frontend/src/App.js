import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, {useState} from 'react';
import axios from 'axios';


const useStyles = makeStyles(theme => createStyles({
  root: {
    padding: '50px 0',
  },
  container: {
    maxWidth: '70%',
    margin: 'auto',
  },
  containerUpload: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',   
    height: '300px', 
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '3px',
    '& h3': {
      color: theme.palette.tertiary.main,
    },
    '& i': {
      color: theme.palette.tertiary.main,
      padding: '10px 0'
    },
    '& label': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.tertiary.main,
      borderRadius: '5px',
      padding: '5px 20px'
    },
    '& label:hover': {
      backgroundColor: theme.palette.primary.light,
      cursor: 'pointer'
    },
    '& label:active': {
      backgroundColor: theme.palette.primary.dark,
    },
    '& label input': {
        overflow: 'hidden',
        width: '0'
    }
  },
  containerUploadHover: {
    backgroundColor: theme.palette.secondary.light,
  },
  containerGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    '& img': {
      width:'200px',
      height: '150px',
      margin: '15px 20px 15px 0',
      borderRadius: '3px'
    }
  },
}));

function App() {
  const [avatars, setAvatars] = useState([]);
  const [isDragOver, setDragOver] = useState(false);
  const classes = useStyles();

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
      setAvatars([...avatars, {name: result.data.name, url: dataURL}]);
    }

    uploadImage();
  };

  const handleDragOver = evt => {
    evt.stopPropagation();
    evt.preventDefault();
    
    setDragOver(true);
  };

  const handleDrop = evt => {
    evt.stopPropagation();
    evt.preventDefault();

    setDragOver(false);

    const file = evt.dataTransfer.files[0];
    handleSubmit(file);
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <section id="image-upload" 
               className={`${classes.container} ${classes.containerUpload} ${isDragOver ? classes.containerUploadHover : ''}`}
               onDragOver={evt => handleDragOver(evt)}
               onDrop={handleDrop}>
            <i className="fas fa-cloud-upload-alt fa-5x"></i>
            <label>
                <input type="file" name="avatar" onChange={e => handleSubmit(e.target.files[0])}/>
                Choose file to upload
            </label>
            <h3>or drag and drop them here</h3>
      </section>
      
      <section id="image-grid" className={`${classes.container}`}>
          <h3>Uploads</h3>
          <div className={`${classes.containerGrid}`}>
            {avatars.map((avatar, idx) => <img key={`${avatar.name}-${idx}`} src={avatar.url} /> )}
          </div>        
      </section>
    </Container>
  );
}

export default App;
