import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuración de Nodemailer (El "cartero")
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: '¡Servidor corriendo!' });
});

// Ruta de contacto actualizada
app.post('/api/contact', async (req: Request, res: Response): Promise<any> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    // Configuramos cómo se verá el correo que te llegará
    const mailOptions = {
      from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINATION, // Tu correo alan200470@hotmail.com
      subject: `💼 Nuevo mensaje de: ${name}`,
      text: `Has recibido un nuevo mensaje desde tu portafolio:\n\nNombre: ${name}\nEmail de contacto: ${email}\n\nMensaje:\n${message}`,
      replyTo: email, // Si le das "Responder" en Hotmail, le enviará el correo al reclutador/cliente
    };

    // Enviamos el correo
    await transporter.sendMail(mailOptions);
    
    console.log(`Mensaje de ${name} enviado con éxito a tu Hotmail.`);
    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
    
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Hubo un error al procesar el envío' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});