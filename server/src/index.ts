import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import contactRouter from './routes/contact';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('../client/dist'));

app.use('/api/contact', contactRouter);

// SERVIR EL FRONEND BUILD
app.get('{*splat}', (req, res) => {
  res.sendFile(path.resolve('../client/dist/index.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


