import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, city, nuisible, message } = body;

    // Configuration SMTP Hostinger
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // true pour port 465
      auth: {
        user: process.env.SMTP_USER, // Votre email pro (ex: contact@express-nuisibles.fr)
        pass: process.env.SMTP_PASS, // Le mot de passe de cet email
      },
    });

    // Envoi du mail
   // ... imports et config du transporter ...

await transporter.sendMail({
  from: `"Devis Express Nuisibles" <${process.env.SMTP_USER}>`,
  to: process.env.SMTP_USER,
  subject: `📩 Nouveau Lead : ${nuisible.toUpperCase()} - ${name}`,
  html: `
    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #0f172a; padding: 20px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0;">Express Nuisibles</h2>
      </div>
      <div style="padding: 20px;">
        <h3 style="color: #059669;">Nouvelle demande de devis</h3>
        <p>Une nouvelle demande a été soumise sur votre site :</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Nom :</strong></td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Téléphone :</strong></td><td style="padding: 8px;"><a href="tel:${phone}" style="color: #059669; font-weight: bold;">${phone}</a></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email :</strong></td><td style="padding: 8px;">${email || 'Non précisé'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Ville :</strong></td><td style="padding: 8px;">${city}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Service :</strong></td><td style="padding: 8px;">${nuisible}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
          <strong>Message du client :</strong>
          <p style="font-style: italic;">"${message}"</p>
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
        Ceci est une notification automatique de votre site web.
      </div>
    </div>
  `,
});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi SMTP :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}