import express from 'express';
import { sendContactMail } from '../mailer/mailer-services';
import { prisma } from '../../prisma/client';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message, category } = req.body;

  if (!name || !email || !message || !category) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  };

  try {
    await prisma.contact.create({
      data: {
        name: name, email: email, message: message, category: category
      }
    });

    await sendContactMail({ name, email, message, category });

    return res.status(201);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e, message: 'Error en el servidor' });
  };
});

export default router;