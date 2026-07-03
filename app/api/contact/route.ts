import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, city, subject, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ message: "Champs requis manquants" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      // Utilisation des variables d'environnement
      from: process.env.EMAIL_FROM || "Nuisible Nantes <contact@nuisible-nantes.fr>",
      to: process.env.EMAIL_TO || "contact@nuisible-nantes.fr", 
      replyTo: email,
      subject: `🚨 Nouvelle demande : ${subject || 'Rappel Site'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 24px; border-radius: 12px;">
          <h2 style="color: #0056b3; margin-bottom: 20px; font-weight: 900;">🔥 Nouveau Contact - Nuisibles Nantes</h2>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 4px 0;"><strong>Client :</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #0056b3; font-weight: bold;">${phone}</a></p>
            <p style="margin: 4px 0;"><strong>Email :</strong> ${email}</p>
            <p style="margin: 4px 0;"><strong>Ville :</strong> ${city || 'Non renseignée'}</p>
          </div>

          <h3 style="color: #0f172a; margin-top: 0;">Message :</h3>
          <p style="color: #334155; line-height: 1.6; background-color: #fff; border-left: 4px solid #0056b3; padding-left: 12px;">${message}</p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ message: error.message }, { status: 400 });
    return NextResponse.json({ message: "Envoyé avec succès" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}