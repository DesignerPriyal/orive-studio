"use client";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-900">
  <div className="max-w-[1600px] mx-auto px-14 py-8 flex items-center justify-between">

    {/* Logo */}
    <a
      href="#"
      className="text-white tracking-[0.35em] text-[18px] font-medium"
    >
      ORIVE/STUDIO
    </a>

    {/* Navigation */}
    <nav className="flex items-center gap-16">
      <a
        href="#services"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Services
      </a>

      <a
        href="#work"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Work
      </a>

      <a
        href="#process"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Process
      </a>

      <a
        href="#contact"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Contact
      </a>
    </nav>

    {/* CTA Button */}
    <a
      href="#contact"
      className="px-8 py-4 border border-zinc-800 rounded-full text-white hover:bg-orange-300 hover:text-black transition-all duration-300"
    >
      Start a Project →
    </a>

  </div>
</header>

      {/* Hero */}
      <section className="min-h-screen px-14 pt-40 pb-20 flex flex-col justify-center">
  
  <p className="uppercase tracking-[0.35em] text-zinc-600 text-sm mb-10">
    Independent Design Studio — Est. 2023
  </p>

  <div className="max-w-[1600px]">
    <h1 className="font-serif text-[180px] leading-[0.9] tracking-[-0.05em] text-white">
      We build brands
      <br />
      that <span className="text-orange-300">people</span> remember.
    </h1>

    <p className="mt-12 text-zinc-300 text-[25px] leading-relaxed max-w-[700px]">
      Strategic branding, UI/UX design, and digital experiences
      engineered to drive growth and build lasting cultural value.
    </p>
  </div>

{/* STUDIO SECTION */}
<section
  id="studio"
  className="border-t border-zinc-800 bg-black text-white px-10 lg:px-14 py-28"
>
  <div className="grid lg:grid-cols-[220px_1fr] gap-10">

    {/* Left Label */}
    <div>
      <p className="uppercase tracking-[0.35em] text-[14px] text-zinc-500">
        (01) — STUDIO
      </p>
    </div>

    {/* Right Content */}
    <div>

      {/* Heading */}
      <h2
        className="
          font-serif
          text-[58px]
          md:text-[82px]
          lg:text-[90px]
          leading-[0.95]
          tracking-[-0.05em]
          max-w-[980px]
        "
      >
        A Boutique studio with a sharp
        <br />
        point of view on brand,
        <br />
        design, and digital
        <br />
        experience.
      </h2>

      {/* Paragraph */}
      <div className="mt-14 max-w-[760px]">
        <p className="text-zinc-400 text-[24px] leading-[1.8]">
          Orive is an independent design and branding studio.
          We partner with ambitious founders and
          forward-looking teams to shape identities,
          products, and stories that earn attention —
          and keep it.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800 my-20"></div>

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14">

        <div>
          <h3 className="font-serif text-[76px] leading-none text-orange-300">
            10+
          </h3>

          <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mt-4">
            Projects
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[76px] leading-none text-orange-300">
            15+
          </h3>

          <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mt-4">
            Clients
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[76px] leading-none text-orange-300">
            2+
          </h3>

          <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mt-4">
            Years
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[76px] leading-none text-orange-300">
            100%
          </h3>

          <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mt-4">
            Satisfaction
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
{/* Services Section */}
<section
  id="services"
  className="border-t border-zinc-800 px-12 py-24"
>
 <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-6 mt-10">

    <div>
      <p className="uppercase tracking-[0.3em] text-zinc-500">
        (02) — Services
      </p>
    </div>

    <div>
      {/* Heading */}
      <h2
  className="
    font-serif
    text-[58px]
    md:text-[82px]
    lg:text-[90px]
    leading-[0.95]
    tracking-[-0.05em]
    max-w-[980px]
  "
>
What we make,end to end.
</h2>
    </div>

  </div>

  <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-6 mt-10">

    {/* Card 1 */}
    <div className="border border-zinc-800 rounded-3xl p-8">
      <p className="text-zinc-500 uppercase tracking-widest mb-10">
        01 • DESIGN
      </p>

      <h3 className="text-4xl font-serif mb-8">
        Interfaces that convert
      </h3>

      <ul className="text-zinc-400 space-y-4">
        <li>• UI/UX Design</li>
        <li>• Website Design</li>
        <li>• Mobile App Design</li>
        <li>• Wireframing</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="border border-zinc-800 rounded-3xl p-8">
      <p className="text-zinc-500 uppercase tracking-widest mb-10">
        02 • BRANDING
      </p>

      <h3 className="text-4xl font-serif mb-8">
        Identities that stick
      </h3>

      <ul className="text-zinc-400 space-y-4">
        <li>• Brand Strategy</li>
        <li>• Logo Design</li>
        <li>• Visual Identity</li>
        <li>• Brand Guidelines</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="border border-zinc-800 rounded-3xl p-8">
      <p className="text-zinc-500 uppercase tracking-widest mb-10">
        03 • MARKETING
      </p>

      <h3 className="text-4xl font-serif mb-8">
        Growth, not guesswork
      </h3>

      <ul className="text-zinc-400 space-y-4">
        <li>• Social Media Marketing</li>
        <li>• SEO</li>
        <li>• Content Strategy</li>
        <li>• Email Marketing</li>
      </ul>
    </div>

    {/* Card 4 */}
    <div className="border border-zinc-800 rounded-3xl p-8">
      <p className="text-zinc-500 uppercase tracking-widest mb-10">
        04 • DEVELOPMENT
      </p>

      <h3 className="text-4xl font-serif mb-8">
        Built for scale
      </h3>

      <ul className="text-zinc-400 space-y-4">
        <li>• Website Development</li>
        <li>• Landing Pages</li>
        <li>• E-Commerce</li>
        <li>• CMS Integration</li>
      </ul>
    </div>

  </div>


</section>{/* Process Section */}
<section className="border-t border-zinc-800 px-12 py-32 bg-black text-white">

  {/* Header */}
  <div className="grid grid-cols-12 mb-24">

    <div className="col-span-3">
      <p className="uppercase tracking-[0.3em] text-zinc-500">
        (04) — PROCESS
      </p>
    </div>

    <div className="col-span-9">
      <h2 className="text-[90px] leading-[1] font-serif">
        How the work gets
        <br />
        made.
      </h2>
    </div>

  </div>

  {/* Timeline */}
  <div className="relative">

    {/* Line */}
    <div className="absolute top-4 left-0 w-full border-t border-zinc-800"></div>

    <div className="grid grid-cols-5 gap-10 relative">

      {/* Step 1 */}
      <div>
        <div className="w-8 h-8 rounded-full bg-orange-300 mb-12"></div>

        <p className="text-sm tracking-[0.25em] text-zinc-500 mb-6">
          STEP 01
        </p>

        <h3 className="text-5xl font-serif mb-4">
          Discovery
        </h3>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Workshops, interviews and audits. We get inside your business,
          market and ambition.
        </p>
      </div>

      {/* Step 2 */}
      <div>
        <div className="w-8 h-8 rounded-full bg-orange-300 mb-12"></div>

        <p className="text-sm tracking-[0.25em] text-zinc-500 mb-6">
          STEP 02
        </p>

        <h3 className="text-5xl font-serif mb-4">
          Research
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Audience study, competitive landscape and opportunity mapping.
        </p>
      </div>

      {/* Step 3 */}
      <div>
        <div className="w-8 h-8 rounded-full bg-orange-300 mb-12"></div>

        <p className="text-sm tracking-[0.25em] text-zinc-500 mb-6">
          STEP 03
        </p>

        <h3 className="text-5xl font-serif mb-4">
          Strategy
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Positioning, narrative, brand architecture and clear creative direction.
        </p>
      </div>

      {/* Step 4 */}
      <div>
        <div className="w-8 h-8 rounded-full bg-orange-300 mb-12"></div>

        <p className="text-sm tracking-[0.25em] text-zinc-500 mb-6">
          STEP 04
        </p>

        <h3 className="text-5xl font-serif mb-4">
          Design
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Identity, product and digital systems crafted with obsessive detail.
        </p>
      </div>

      {/* Step 5 */}
      <div>
        <div className="w-8 h-8 rounded-full bg-orange-300 mb-12"></div>

        <p className="text-sm tracking-[0.25em] text-zinc-500 mb-6">
          STEP 05
        </p>

        <h3 className="text-4xl font-serif mb-4">
          Launch
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Rollout assets, guidelines and ongoing support to build momentum.
        </p>
      </div>

    </div>

  </div>

</section>{/* Testimonials */}
<section className="border-t border-zinc-800 px-8 py-24 bg-black text-white">

  <div className="grid grid-cols-12 mb-16">

    <div className="col-span-3">
      <p className="uppercase tracking-[0.3em] text-zinc-500">
        (05) — TESTIMONIALS
      </p>
    </div>

    <div className="col-span-9">
      <div className="flex justify-between items-start">

        <h2 className="text-[90px] leading-none font-serif">
          From the people
          <br />
          we built for.
        </h2>

        <div className="flex gap-4">
          <button className="w-16 h-16 rounded-full border border-zinc-700">
            ←
          </button>

          <button className="w-16 h-16 rounded-full border border-zinc-700">
            →
          </button>
        </div>

      </div>
    </div>

  </div>

  <div className="max-w-6xl mx-auto">

    <blockquote className="text-[72px] leading-[1.05] font-serif">

      <span className="text-orange-300">“</span>

      Working with Orive was the easiest creative decision we've made.
      They understood the journey we wanted our audience to feel and
      shipped it with real strategic depth.

      <span className="text-orange-300">”</span>

    </blockquote>

    <div className="border-t border-zinc-800 mt-20 pt-10 flex items-center gap-6">

      <div className="w-20 h-20 rounded-full bg-orange-300"></div>

      <div>
        <h4 className="text-2xl font-medium">
          Founder
        </h4>

        <p className="text-zinc-500">
          Josh Journey
        </p>
      </div>

    </div>

  </div>

</section>{/* Contact Section */}
<section
  id="contact"
  className="border-t border-zinc-800 px-12 py-32 bg-black text-white"
>
  <div className="grid lg:grid-cols-2">

    {/* Left Side */}
    <div className="pr-20">

      <p className="uppercase tracking-[0.35em] text-zinc-500 mb-12">
        (08) — CONTACT
      </p>

      <h2 className="font-serif text-[120px] leading-[0.95] mb-12 max-w-[650px]">
        Let's build
        <br />
        something
        <br />
        <span className="text-orange-300">
          unforgettable.
        </span>
      </h2>

      <div className="space-y-12">

        <div>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            EMAIL
          </p>

          <p className="text-5xl font-serif">
            work@orivedesignstudio.com
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            PHONE
          </p>

          <p className="text-5xl font-serif">
            +91 78275 07583
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            STUDIO
          </p>

          <p className="text-5xl font-serif">
            Gwalior, Madhya Pradesh
          </p>
        </div>

      </div>
    </div>

    {/* Right Side */}
    <div className="border-l border-zinc-800 pl-16">

      {/* Name */}
      <div className="mb-14">
        <label className="block text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
          YOUR NAME
        </label>

        <input
          type="text"
          placeholder="Alex Doe"
          className="w-full bg-transparent border-b border-zinc-600 pb-5 text-4xl outline-none placeholder:text-zinc-700"
        />
      </div>

      {/* Email */}
      <div className="mb-14">
        <label className="block text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
          EMAIL
        </label>

        <input
          type="email"
          placeholder="alex@company.com"
          className="w-full bg-transparent border-b border-zinc-600 pb-5 text-4xl outline-none placeholder:text-zinc-700"
        />
      </div>

      {/* Company */}
      <div className="mb-14">
        <label className="block text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
          COMPANY
        </label>

        <input
          type="text"
          placeholder="Company Inc."
          className="w-full bg-transparent border-b border-zinc-600 pb-5 text-4xl outline-none placeholder:text-zinc-700"
        />
      </div>

      {/* Project Type */}
      <div className="mb-14">

        <label className="block text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
          PROJECT TYPE
        </label>

        <div className="flex flex-wrap gap-4">

          {[
            "Branding",
            "Web",
            "Product",
            "Packaging",
            "Strategy",
          ].map((item) => (
            <button
              key={item}
              className="px-8 py-4 border border-zinc-700 rounded-full hover:border-orange-300 transition"
            >
              {item}
            </button>
          ))}

        </div>
      </div>

      {/* Message */}
      <div className="mb-16">

        <label className="block text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
          TELL US ABOUT IT
        </label>

        <textarea
          rows={4}
          placeholder="A short brief, budget, and timeline."
          className="w-full bg-transparent border-b border-zinc-600 pb-5 text-3xl outline-none resize-none placeholder:text-zinc-700"
        />
      </div>

     <a
  href="mailto:work@orivedesignstudio.com?subject=Project Inquiry"
  className="inline-flex items-center justify-center bg-orange-300 text-black px-12 py-5 rounded-full text-lg font-medium hover:opacity-90 transition"
>
  Send Inquiry →
</a>

    </div>
  </div>
</section>
{/* Footer */}
<footer className="border-t border-zinc-800 bg-black-500 text-white">
  <div className="px-12 py-20">

    <div className="flex justify-left mb-20">
  <h2 className="font-serif text-[220px] leading-none">
    Orive<span className="text-orange-300">.</span>
  </h2>
</div>

    <div className="border-t border-zinc-800 pt-8 flex justify-between items-center">

      <p className="text-zinc-500">
        © 2026 Orive Design Studio. All rights reserved.
      </p>

      <div className="flex gap-8">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Behance</a>
        <a href="#">Dribbble</a>
      </div>

    </div>

  </div>
      </footer>
      </section>
    </main>
  );
}