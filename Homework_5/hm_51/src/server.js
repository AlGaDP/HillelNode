import express from 'express'
import multer from 'multer'
import { Readable } from 'stream'


const app = express()
app.use(express.json());

 const upload = multer({ storage: storage, dest: 'uploads/' });

app.post('/upload', upload.single('video'), (req, res) => {
  try {
    const { file } = req;

    const fileSize = file.size;
    if (fileSize > 500 * 1024 * 1024) { 
      throw new Error('File size exceeds the limit.');
    }

    if (file.mimetype !== 'video/mp4') {
      throw new Error('Unsupported file type. Only MP4 videos are allowed.');
    }

    const readableStream = new Readable();
    readableStream._read = () => {};

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept-Ranges', 'bytes');

    readableStream.pipe(res);

    let offset = 0;
    const interval = setInterval(() => {
      const chunk = file.buffer.slice(offset, offset + 1024 * 1024);
      if (chunk.length === 0) {
        clearInterval(interval);
        readableStream.push(null);
      } else {
        readableStream.push(chunk);
        offset += chunk.length;
      }
    }, 100);

  } catch (error) {
    res.status(500).json({ message: 'Помилка завантаження відео.', error: error.message });
  }
});


export { app }