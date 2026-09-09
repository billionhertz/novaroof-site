import Link from "next/link";
import Image from "next/image";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COMPANY } from "@/lib/data/company";
import { projects } from "@/lib/projects-data";
import {
  Shield,
  Clock,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Wrench,
  ClipboardCheck,
  Layers,
  Factory,
  Building2,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  Leaf,
  Blocks,
  CalendarCheck,
  RefreshCw,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const homeFaqs = [
  {
    question: "What areas does Nova Roof serve?",
    answer: "We serve commercial building owners throughout the Shenandoah Valley including Harrisonburg, Staunton, Charlottesville, Waynesboro, Winchester, and over 115 surrounding towns across Virginia.",
  },
  {
    question: "What types of commercial roofs do you work on?",
    answer: "We specialize in flat and low-slope commercial roofing systems including EPDM, TPO, PVC, modified bitumen, metal, and built-up roofing.",
  },
  {
    question: "How much does commercial roof restoration cost?",
    answer: "Restoration typically costs 40-60% less than full replacement, ranging from $4-$8 per square foot depending on roof condition and system chosen.",
  },
  {
    question: "Do you offer free roof inspections?",
    answer: "Yes, every project starts with a complimentary, no-obligation roof inspection with a detailed photo report.",
  },
];

const reviews = [
  {
    name: "Carol Maddox",
    timeAgo: "5 months ago",
    text: "They have great customer service and were willing to answer many questions. Novaroof were efficient and timely in providing service. The job was complete and clean up was taken care of. As a business I would like to say Thank you for taking care of us when we were desperately in need. We will use you again in the future.",
  },
  {
    name: "Jonathan Berry",
    timeAgo: "5 months ago",
    text: "Novaroof fixed our issues at a great price. The staff was very professional and efficient. I definitely recommend them if you have a commercial building metal roof.",
  },
  {
    name: "Mike Bender",
    timeAgo: "4 years ago",
    text: "I have nothing but great things to say about the service from Hertzler Commercial Roofing! Working with William was a pleasant experience from the estimate through to the finished work! Great communication and service!",
  },
  {
    name: "Zan Erskine",
    timeAgo: "2 years ago",
    text: "William was very responsive and hands on during our project, from the quoting process all the way through the completion and final inspection. Very happy with the end result!",
  },
  {
    name: "Conrad Miller",
    timeAgo: "5 years ago",
    text: "Mr. Hertzler cares about his clients and delivers exceptional workmanship and service!",
  },
];

const serviceAreas = [
  { name: "Harrisonburg", slug: "harrisonburg" },
  { name: "Staunton", slug: "staunton" },
  { name: "Charlottesville", slug: "charlottesville" },
  { name: "Waynesboro", slug: "waynesboro" },
  { name: "Richmond", slug: "richmond" },
  { name: "Lynchburg", slug: "lynchburg" },
  { name: "Bridgewater", slug: "bridgewater" },
  { name: "Front Royal", slug: "front-royal" },
];

export default function HomePage() {
  return (
    <>
      <FAQJsonLd faqs={homeFaqs} />

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Commercial Roofing Contractor in Harrisonburg, VA — Repair, Restore &amp; Maintain
      </h1>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1F2937]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0308-i59gcbV61SfD9ontJPvL5PL9j2sC5w.mp4"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-[#1F2937]/75" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7ED321] mb-6">
                <Shield className="h-4 w-4 text-[#7ED321]" />
                <span className="text-[#7ED321] text-sm font-medium">
                  Commercial Roofing Experts — Serving Virginia
                </span>
              </div>

              {/* Visual Headline */}
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-[#E5E5E5]">Stop Paying for Roof Replacements</span>{" "}
                <span className="text-[#7ED321]">You Don&apos;t Need.</span>
              </p>

              {/* Subheadline */}
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                NovaRoof helps commercial building owners eliminate costly roof replacements through expert repairs, preventative maintenance, and renewable membrane restoration systems.
              </p>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-[#7ED321]" />
                  <div>
                    <div className="text-white font-bold">15–20 Year</div>
                    <div className="text-gray-400 text-sm">Roof Life Extension</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-[#7ED321]" />
                  <div>
                    <div className="text-white font-bold">Up to 50%</div>
                    <div className="text-gray-400 text-sm">Cost Savings</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-[#7ED321]" />
                  <div>
                    <div className="text-white font-bold">Zero</div>
                    <div className="text-gray-400 text-sm">Tear-Off Waste</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#1F2937]">Book a Consultation</h2>
              <p className="mt-2 text-gray-600">No obligation — just honest answers.</p>
              
              <form className="mt-6 space-y-4">
                <Input placeholder="Full Name *" className="h-12" required />
                <Input placeholder="Phone *" type="tel" className="h-12" required />
                <Input placeholder="Email" type="email" className="h-12" />
                <Input placeholder="Property Address *" className="h-12" required />
                <Textarea placeholder="How can we help?" className="min-h-[100px]" />
                <Button className="w-full h-12 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937] font-semibold">
                  Book My Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Our Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1F2937]">
              Repair. Maintain. Restore. Replace.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Every service we offer is designed to extend your roof&apos;s life and reduce long-term costs. And when replacement is the only option, we handle that too.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {/* Service Card 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#7ED321]/10 mb-4">
                  <Wrench className="h-6 w-6 text-[#7ED321]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">Commercial Roof Repairs</h3>
                <p className="mt-4 text-gray-600">
                  Leak detection, seam failures, flashing repairs, ponding water, and membrane damage — all performed with future maintenance and restoration in mind.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Leak Detection & Repair", "Seam & Flashing Failures", "Ponding Water Solutions", "Penetration Repairs"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#7ED321]" />
                      <span className="text-[#1F2937]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                  <Link href="/services/commercial-roof-repair">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial-roof-membrane-seam-repair-novaroof-qTTPJ6YuTXEXFfDzo4urwJtgldxv1D.jpg"
                  alt="Commercial roof membrane seam repair by NovaRoof"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#7ED321]/10 mb-4">
                  <ClipboardCheck className="h-6 w-6 text-[#7ED321]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">Preventative Maintenance</h3>
                <p className="mt-4 text-gray-600">
                  Scheduled inspections, proactive repairs, and condition documentation that reduce emergencies, extend roof life, and lower your total cost of ownership.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Scheduled Inspections", "Proactive Minor Repairs", "Condition Documentation", "Long-Term Budget Planning"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#7ED321]" />
                      <span className="text-[#1F2937]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                  <Link href="/services/preventative-maintenance">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/novaroof-commercial-roof-inspection-maintenance-oqBJ4N5nBNFsJseHYJq5fx5DCuWBft.jpg"
                  alt="NovaRoof technician performing commercial roof inspection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#7ED321]/10 mb-4">
                  <Layers className="h-6 w-6 text-[#7ED321]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">Membrane Roof Restoration</h3>
                <p className="mt-4 text-gray-600">
                  Our renewable restoration system extends your roof&apos;s life 15–20 years per cycle. Works on EPDM, TPO, and PVC — no tear-off required.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Thorough Cleaning & Prep", "Seam Reinforcement with Fabric", "UV-Resistant Acrylic Topcoat", "Renewable Every 15–20 Years"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#7ED321]" />
                      <span className="text-[#1F2937]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                  <Link href="/services/membrane-restoration">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial-roof-restoration-before-after-novaroof-7bAcfUhbhy4NaMyeZNHo1IKDRBLa6O.jpg"
                  alt="Before and after commercial roof restoration by NovaRoof"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#7ED321]/10 mb-4">
                  <Factory className="h-6 w-6 text-[#7ED321]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">Metal Roof Restoration</h3>
                <p className="mt-4 text-gray-600">
                  Extend the life of your standing seam or corrugated metal roof with our liquid-applied restoration system. Stop leaks, eliminate rust, and restore performance — without a costly tear-off.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Rust Treatment & Prep", "Fastener & Seam Sealing", "Reflective Elastomeric Coating", "Eliminates Leaks at Penetrations"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#7ED321]" />
                      <span className="text-[#1F2937]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                  <Link href="/services/metal-roof-restoration">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metal-roof-restoration-coating-application-novaroof-CxCiVWNAgVj0kXHsHr3IFeXKaQDg6N.jpg"
                  alt="Metal roof restoration coating application by NovaRoof"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#7ED321]/10 mb-4">
                  <Building2 className="h-6 w-6 text-[#7ED321]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">Commercial Roof Replacement</h3>
                <p className="mt-4 text-gray-600">
                  When a roof is truly beyond repair or restoration, NovaRoof provides full commercial roof replacement with quality materials and expert installation. We&apos;ll always explore every alternative first.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Full Tear-Off & Replacement", "TPO, EPDM & PVC Systems", "Metal Roof Installation", "Code-Compliant Installation"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#7ED321]" />
                      <span className="text-[#1F2937]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                  <Link href="/services/commercial-roof-replacement">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial-roof-replacement-project-novaroof-i4BeUpcZlA2xEaYql3DCaK9A2ap25p.jpg"
                  alt="Commercial roof replacement project by NovaRoof"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR APPROACH */}
      <section className="py-20 bg-[#1F2937]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Our Approach</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              A Smarter Way to Manage Your Roof
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Most building owners are stuck choosing between endless repairs and expensive replacements. We offer a third path.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { num: "01", icon: Wrench, title: "Repair With Purpose", desc: "Every repair we make serves a long-term purpose. We don't just patch leaks — we build toward your roof's future restoration." },
              { num: "02", icon: CalendarCheck, title: "Maintain Proactively", desc: "Scheduled maintenance catches small issues before they become emergencies, reducing costs and extending your roof's lifespan dramatically." },
              { num: "03", icon: RefreshCw, title: "Restore When Ready", desc: "When the time is right, our membrane or metal roof restoration system gives your roof another 15–20 years — without a tear-off. And it's renewable." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.num} className="bg-[#374151] border-0 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-[#7ED321]/10">
                    {item.num}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <Icon className="h-10 w-10 text-[#7ED321] mb-4" />
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
              <Link href="/get-quote">
                Start With a Free Inspection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY MAINTENANCE MATTERS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Why Maintenance Matters</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1F2937]">
              Stop Wasting Money on Band-Aid Fixes
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              The typical cycle of patch-and-replace costs building owners thousands more than necessary. A forward-thinking maintenance strategy changes everything.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { icon: AlertTriangle, title: "Emergency Repairs Are Expensive", desc: "Reactive roof management costs 2–3x more than a proactive maintenance plan over the life of a roof." },
              { icon: TrendingDown, title: "Replacement Isn't Your Only Option", desc: "Many roofs labeled as 'needing replacement' can be restored at a fraction of the cost with the right system." },
              { icon: Leaf, title: "Sustainability Matters", desc: "Roof restoration eliminates tear-off waste from landfills and reduces the environmental impact of your building." },
              { icon: Blocks, title: "Repairs Build Toward Restoration", desc: "With the right strategy, every dollar you spend on maintenance today supports a longer-term restoration plan." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="bg-[#F5F5F5] border-0">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-[#7ED321] mb-4" />
                    <h3 className="text-xl font-bold text-[#1F2937]">{item.title}</h3>
                    <p className="mt-3 text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROJECT GALLERY */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Our Work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1F2937]">
              Project Gallery
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              See the results of our repair, maintenance, and restoration work on commercial roofs across Virginia.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["All", "Restoration", "Metal Restoration", "Replacement"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "All"
                    ? "bg-[#7ED321] text-[#1F2937]"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={`${project.name} – ${project.roofType}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#1F2937]/80 rounded text-[#7ED321] text-xs font-medium">
                      {project.roofType}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-[#1F2937] group-hover:text-[#7ED321] transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{project.systemDescription || project.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: CUSTOMER REVIEWS */}
      <section className="py-20 bg-[#1F2937]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Customer Reviews</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
            
            {/* Rating Summary */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-[#7ED321] text-[#7ED321]" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">5.0</span>
              <span className="text-gray-400">(8 reviews)</span>
              <span className="text-gray-400 flex items-center gap-1">
                <span className="font-bold text-white">G</span> Google Reviews
              </span>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <Card key={review.name} className="bg-[#374151] border-0 relative">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-4xl text-[#7ED321]/30">&quot;</div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#7ED321] text-[#7ED321]" />
                    ))}
                  </div>
                  <p className="text-white text-sm leading-relaxed line-clamp-4">{review.text}</p>
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.timeAgo}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ABOUT NOVAROOF */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#7ED321] font-semibold tracking-wide uppercase">About NovaRoof</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1F2937]">
                We Believe Roofs Should Last — Not Just Survive
              </h2>
              
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  NovaRoof Commercial Solutions was founded on a simple idea: commercial roofs don&apos;t need to be torn off just because they&apos;re aging. With the right care, most roofs can last indefinitely.
                </p>
                <p>
                  We specialize in flat and low-slope commercial roofing — repairing, maintaining, and restoring membrane systems for warehouses, office buildings, retail centers, churches, and industrial facilities across Virginia.
                </p>
                <p>
                  Our approach is different. We don&apos;t sell fear. We don&apos;t push unnecessary replacements. Instead, we work with building owners to develop a long-term plan that treats their roof as a strategic asset — one that can be maintained and renewed for decades.
                </p>
              </div>
              
              <Button asChild className="mt-8 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {/* Stats */}
              <div className="grid gap-4">
                {[
                  { stat: "15–20 Years", label: "Roof life extension per restoration cycle" },
                  { stat: "EPDM, TPO, PVC", label: "Membrane systems we restore" },
                  { stat: "Virginia", label: "Regional commercial service area" },
                ].map((item) => (
                  <div key={item.stat} className="bg-[#F5F5F5] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#1F2937]">{item.stat}</div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-[#7ED321] pl-4 italic text-gray-600">
                &quot;Very responsive and hands on during our project, from the quoting process all the way through the completion and final inspection. Very happy with the end result!&quot;
                <footer className="mt-2 font-semibold text-[#1F2937]">— Z. Erskine</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE AREA */}
      <section className="py-20 bg-[#1F2937]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Service Area</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              Serving Commercial Properties Across Virginia
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              NovaRoof provides commercial roof repairs, maintenance, and restoration services throughout Virginia. We work with building owners and property managers across the state.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="flex items-center gap-2 text-white hover:text-[#7ED321] transition-colors"
              >
                <MapPin className="h-5 w-5 text-[#7ED321]" />
                <span>{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#1F2937]">
              <Link href="/service-area">View All Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">FAQ</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1F2937]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="space-y-4">
              {homeFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-0 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-[#1F2937] font-semibold hover:text-[#7ED321]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 10: CONTACT FORM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Get Started</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1F2937]">
                Book a Consultation
              </h2>
              <p className="mt-4 text-gray-600">
                Book a complimentary consultation. We&apos;ll assess your roof&apos;s condition and provide a clear, honest report — no pressure, no obligation.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#7ED321]" />
                  <a href={`tel:${COMPANY.phone}`} className="text-[#1F2937] hover:text-[#7ED321]">
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#7ED321]" />
                  <a href={`mailto:${COMPANY.email}`} className="text-[#1F2937] hover:text-[#7ED321]">
                    {COMPANY.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#7ED321]" />
                  <span className="text-[#1F2937]">Serving Virginia</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-[#F5F5F5] rounded-2xl p-8">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name *" className="h-12 bg-white" required />
                  <Input placeholder="Phone *" type="tel" className="h-12 bg-white" required />
                </div>
                <Input placeholder="Email" type="email" className="h-12 bg-white" />
                <Input placeholder="Property Address *" className="h-12 bg-white" required />
                <select className="w-full h-12 px-3 rounded-md border border-input bg-white text-gray-600">
                  <option value="">Property Type</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="office">Office Building</option>
                  <option value="retail">Retail Center</option>
                  <option value="church">Church/Non-Profit</option>
                  <option value="industrial">Industrial/Manufacturing</option>
                  <option value="other">Other</option>
                </select>
                <Textarea placeholder="How can we help?" className="min-h-[100px] bg-white" />
                <Button className="w-full h-12 bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937] font-semibold">
                  Book My Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
