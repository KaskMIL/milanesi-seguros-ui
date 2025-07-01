import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import router from './routes/contact';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('api/contact', router);

// SERVIR EL FRONEND BUILD
app.use(express.static(path.resolve(__dirname, '../../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'))
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running on port:'+PORT));

