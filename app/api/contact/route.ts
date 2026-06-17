import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "william@novaroof.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    let subject: string;
    let htmlContent: string;

    if (formType === "quote") {
      // Quote form submission
      const services = formData.services
        ?.map((s: string) => {
          const labels: Record<string, string> = {
            maintenance: "Roof Maintenance",
            repair: "Roof Repair",
            replacement: "Roof Replacement",
            restoration: "Roof Restoration/Coating",
            inspection: "Roof Inspection",
            consulting: "Roof Consulting",
          };
          return labels[s] || s;
        })
        .join(", ");

      subject = `New Quote Request from ${formData.name}`;
      htmlContent = `
        <h2>New Quote Request</h2>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Company:</strong> ${formData.company || "N/A"}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        
        <h3>Property Information</h3>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>City:</strong> ${formData.city}, ${formData.state} ${formData.zip}</p>
        <p><strong>Building Type:</strong> ${formData.buildingType || "N/A"}</p>
        <p><strong>Roof Size:</strong> ${formData.roofSize || "N/A"}</p>
        
        <h3>Roof Details</h3>
        <p><strong>Current Roof Type:</strong> ${formData.currentRoofType || "N/A"}</p>
        <p><strong>Roof Age:</strong> ${formData.roofAge || "N/A"}</p>
        <p><strong>Services Interested In:</strong> ${services || "N/A"}</p>
        
        <h3>Current Issues</h3>
        <p>${formData.issues || "None specified"}</p>
        
        <hr>
        <p><em>Submitted from NovaRoof website</em></p>
      `;
    } else {
      // Contact form submission
      subject = `New Contact Form Message from ${formData.name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        
        <h3>Message</h3>
        <p>${formData.message || "No message provided"}</p>
        
        <hr>
        <p><em>Submitted from NovaRoof website</em></p>
      `;
    }

    const { error } = await resend.emails.send({
      from: "NovaRoof Website <noreply@novaroof.com>",
      to: RECIPIENT_EMAIL,
      replyTo: formData.email,
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
