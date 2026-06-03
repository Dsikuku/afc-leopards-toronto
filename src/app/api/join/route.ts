// app/api/join/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the email driver with your secret key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, location, position, experience } = body;

    // Simple backend data validation check
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing mandatory registration fields.' },
        { status: 400 }
      );
    }

    // Deliver the structured notification to your official club email
    const data = await resend.emails.send({
      from: 'Ingwe Toronto FC <onboarding@resend.dev>', // Update to your authenticated domain later
      to: ['info@ingwetoronto.com'], // The email that receives applications
      subject: `🚨 New Branch Membership Request: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0052cc; text-transform: uppercase;">New Membership Application</h2>
          <hr />
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Current Location:</strong> ${location || 'Not Specified'}</p>
          <p><strong>Preferred Field Position:</strong> ${position || 'Not Specified'}</p>
          <p><strong>Experience Level / Notes:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #0052cc;">
            ${experience || 'No description provided.'}
          </blockquote>
          <hr />
          <p style="font-size: 11px; color: #666;">Submitted via Ingwe Toronto FC Digital Portal</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}