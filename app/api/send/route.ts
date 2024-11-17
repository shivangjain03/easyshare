import { EmailTemplate } from '../../../app/_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const responce = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'easyshare@resend.dev',
      to: ['shivangjain2005@gmail.com'],
      subject: 'Hey! Your file is all set and waiting for you! 🗂️',
      react: EmailTemplate({ responce }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
