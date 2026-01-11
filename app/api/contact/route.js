import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullName, email, phone, query, tab } = await request.json();

    // Validate required fields
    if (!fullName || !email || !phone || !query) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter - Configure with your email service
    // For Gmail, you need to enable "Less secure app access" or use App Passwords
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Determine the subject based on the tab
    const tabLabels = {
      core: 'Core Team Application',
      collab: 'Collaboration Request',
      speak: 'Speaker Inquiry',
    };

    const subject = `AWS Cloud Club - ${tabLabels[tab] || 'Contact Form'}`;

    // Email content
    const clubEmail = process.env.EMAIL_USER;
    const mailOptions = {
      from: clubEmail,
      to: clubEmail, // Club president's email (same as sender)
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1A2230; color: #FFFFFF;">
          <h2 style="color: #FF9900; border-bottom: 2px solid #FF9900; padding-bottom: 10px;">
            ${tabLabels[tab] || 'New Contact Form Submission'}
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #56B9F2;">Full Name:</strong><br/>
              ${fullName}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #56B9F2;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #FF9900;">${email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #56B9F2;">Phone:</strong><br/>
              ${phone}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #56B9F2;">Message:</strong><br/>
              <span style="white-space: pre-wrap;">${query}</span>
            </p>
          </div>
          
          <hr style="border: 1px solid #3D4D63; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #808080;">
            This email was sent from the AWS Cloud Club website contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting AWS Cloud Club!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1A2230; color: #FFFFFF;">
          <h2 style="color: #FF9900;">Thank You, ${fullName}!</h2>
          
          <p style="margin: 20px 0; line-height: 1.6;">
            We have received your message regarding <strong>${tabLabels[tab] || 'your inquiry'}</strong>. 
            Our team will review your submission and get back to you as soon as possible.
          </p>
          
          <p style="margin: 20px 0; line-height: 1.6;">
            In the meantime, feel free to explore our events and activities on our website.
          </p>
          
          <hr style="border: 1px solid #3D4D63; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #808080;">
            AWS Cloud Club - MLRITM, Hyderabad
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
