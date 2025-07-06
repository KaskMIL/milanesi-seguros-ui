import { Request, Response, Router } from 'express';
import { sendContactMail } from '../mailer/mailer-services';
import { prisma } from '../prisma/client';

const contactRouter = Router();

contactRouter.post('/', async (req: Request, res: Response) => {
  const { name, email, message, category, phoneNumber } = req.body;

  if (!name || !email || !message || !category || !phoneNumber) {
    res.status(400).json({ error: 'Todos los campos son obligatorios' });
  };

  try {
    await prisma.contact.create({
      data: {
        name: name, email: email, message: message, category: category, phoneNumber: phoneNumber
      }
    });

    await sendContactMail({ name, email, message, category, phoneNumber });

    res.status(201).json( { status: 'success' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e, message: 'Error en el servidor' });
  };
});

export default contactRouter;