const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()
app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "./public/Images")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sen', upload.single('file'), (req,res) => {
  console.log(req.file);
  console.log(req.body.text);
  console.log(req.body.customfield);
})

app.listen(3001, () => {
  console.log("Server is running")
})