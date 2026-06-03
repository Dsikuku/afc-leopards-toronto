// app/api/join/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // 1. SAFEGUARD: Move instantiation inside the handler so it only triggers on actual user submissions
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error("CRITICAL: RESEND_API_KEY is missing from environment variables.");
      return NextResponse.json(
        { error: 'Email delivery service misconfiguration.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    
    // 2. PARSE BODY DATA
    const body = await request.json();
    const { fullName, email, phone, location, position, experience } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Missing mandatory registration fields.' },
        { status: 400 }
      );
    }

    // 3. DISPATCH EMAIL
    const data = await resend.emails.send({
      from: 'Ingwe Toronto FC <onboarding@resend.dev>',
      to: ['info@ingwetoronto@gmail.com'], // Remember to change to your actual email string!
      subject: `🚨 New Branch Membership Request: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
          <h2>New Membership Application</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Location:</strong> ${location}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}