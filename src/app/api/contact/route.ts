import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { phoneCode, phoneNumber, email, query } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'info@tachoaviation.com',
      replyTo: email,
      subject: `New Website Contact Form Submission`,
      text: `we have a new sumission via the website and cxyz\n\nEmail: ${email}\nPhone: ${phoneCode} ${phoneNumber}\nQuery:\n${query}`,
      html: `
        <p>we have a new sumission via the website and cxyz</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneCode} ${phoneNumber}</p>
        <p><strong>Query:</strong><br/>${query.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
