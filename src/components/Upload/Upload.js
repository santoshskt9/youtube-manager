import React from 'react';
import axios from 'axios';

const Upload = () => {

  const [form, setForm] = React.useState({
    title: "",
    description: "",
    file: null
  });

  const handleChange = (e) => {
    const inputValue = e.target.name === 'file' ? 
                        e.target.files[0] : e.target.value;

    console.log(inputValue);

    setForm({
      ...form,
      [e.target.name]: inputValue
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const videoData = new FormData();

    videoData.append('videoFile', form.file);
    videoData.append('title', form.title);
    videoData.append('description', form.description);

    axios
      .post("http://localhost:3001/upload", videoData)
      .then(response => {
        console.log(response.data);
      })

  }

  return (
    <>
        <dir>
            <h1>Upload Videos to Youtube</h1>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <input onChange={handleChange} type='text' name='title' autoComplete='off' placeholder="Title" />
              </div>
              <div>
                <textarea onChange={handleChange} type='text' name='description' autoComplete='off' placeholder="Description" />
              </div>
              <div>
                <input onChange={handleChange} type="file" accept='video/mp4' name="file" id="file" placeholder='Add Video File'/>
              </div>
              <div>
                <button type="submit">Upload Video</button>
              </div>
            </form>

            <div>
              <h2>Preview</h2>
              <div>
                <video controls>
                  <source src='' type='video/mp4'/>
                </video>
              </div>
            </div>
        </dir>
    </>
  )
}

export default Upload;