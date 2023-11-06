import { useState } from "react"
 import axios from 'axios'

function App() {
  const [file, setFile] = useState()
  const [tex, setTex] = useState("qwe")
  const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("customfield", "This is some extra data");

    axios.post('http://localhost:3001/sen', formData, {headers: {
      'Content-Type': 'multipart/form-data'
    }})
     .then( res => {console.log `result: \n ${res}`})
     .catch(er => console.log(er))

    axios.postForm('http://localhost:3001/sen', {
      file: file,
      text: tex,
      customfield: "This is some extra data",
    })
  }
   return (
    <div>
      <form onSubmit={e => submitForm(e)}>
        <input name="text" type="text" value={tex} onChange={e => setTex(e.target.value)}/>
        <input name="file" type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <button type="submit">submit</button>
      </form>
      
    </div>
  )
}

export default App;
