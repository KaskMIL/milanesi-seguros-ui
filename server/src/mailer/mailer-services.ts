// import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export interface ContactMail {
  name: string;
  email: string;
  message: string;
  category: string;
}

export async function sendContactMail({ name, email, message, category }: ContactMail) {
  // return sgMail.send({
  //   to: email,
  //   from: process.env.SENDGRID_EMAIL!,
  //   subject: `Nueva consulta por un seguro de ${category}`,
  //   html: `
  //     <p><strong>Nombre:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Mensaje:</strong> ${message}</p>
  //   `
  // });
  console.log(name, email, message, category)
};