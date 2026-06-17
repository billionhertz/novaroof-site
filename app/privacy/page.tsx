import type { Metadata } from "next";
import { PageHero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { COMPANY } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information when you use our commercial roofing services.`,
  alternates: { canonical: `${COMPANY.url}/privacy` },
  openGraph: {
    title: "Privacy Policy",
    description: `Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
    url: `${COMPANY.url}/privacy`,
    images: [{ url: COMPANY.image }],
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 26, 2026";

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <PageHero
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
        size="small"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Introduction</h2>
              <p className="text-[#6B7280] leading-relaxed">
                {COMPANY.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request a quote, or use our commercial roofing services.
              </p>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                By using our website or services, you consent to the practices described in this Privacy Policy. If you do not agree with the terms of this policy, please do not access our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-[#1F2937] mt-6 mb-3">Personal Information You Provide</h3>
              <p className="text-[#6B7280] leading-relaxed">
                We collect personal information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mt-4 space-y-2">
                <li>Request a free roof inspection or quote</li>
                <li>Fill out a contact form on our website</li>
                <li>Call us or send us an email</li>
                <li>Schedule roofing services</li>
                <li>Subscribe to our newsletter or updates</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                This information may include your name, email address, phone number, business name, property address, and details about your roofing needs.
              </p>

              <h3 className="text-xl font-semibold text-[#1F2937] mt-6 mb-3">Information Collected Automatically</h3>
              <p className="text-[#6B7280] leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device and usage, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mt-4 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website or source</li>
                <li>Device identifiers</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">How We Use Your Information</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mt-4 space-y-2">
                <li>Responding to your inquiries and providing quotes</li>
                <li>Scheduling and performing roofing services</li>
                <li>Communicating with you about your project</li>
                <li>Sending service reminders and maintenance recommendations</li>
                <li>Improving our website and services</li>
                <li>Analyzing website traffic and usage patterns</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraudulent or unauthorized activity</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mt-4 space-y-2">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve our website performance</li>
                <li>Provide relevant content and advertisements</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                You can control cookie settings through your browser. However, disabling cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Information Sharing and Disclosure</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We do not sell your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mt-4 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., CRM systems, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our customers</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Data Security</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Your Privacy Rights</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mt-4 space-y-2">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to withdraw consent where applicable</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Third-Party Links</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Children&apos;s Privacy</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Changes to This Privacy Policy</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post any changes on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 p-6 bg-[#F5F5F5] rounded-lg">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Contact Us</h2>
              <p className="text-[#6B7280] leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-[#1F2937]">
                <p><strong>{COMPANY.name}</strong></p>
                <p>{COMPANY.address.full}</p>
                <p>Phone: <a href={`tel:${COMPANY.phone}`} className="text-[#7ED321] hover:underline">{COMPANY.phoneDisplay}</a></p>
                <p>Email: <a href={`mailto:${COMPANY.email}`} className="text-[#7ED321] hover:underline">{COMPANY.email}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
