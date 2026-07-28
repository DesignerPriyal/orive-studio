"use client";
import { useState } from "react";
export default function Home() {
  const testimonials = [
  {
    quote:
      "Working with Orive was the easiest creative decision we've made. They understood our audience and transformed our vision into a timeless brand.",
    name: "Nitin",
    role: "Founder, Josh Journey",
  },
  {
    quote:
      "The team delivered beyond expectations. Every detail—from branding to our website—felt intentional, premium, and perfectly aligned with our business.",
    name: "Priyanshi",
    role: "Principal Architect, Ontogenesis",
  },
];

const [currentTestimonial, setCurrentTestimonial] = useState(0);

const nextTestimonial = () => {
  setCurrentTestimonial((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
};

const prevTestimonial = () => {
  setCurrentTestimonial((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};
return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-900">
  <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 py-5 md:py-8 flex items-center justify-between">

    {/* Logo */}
    <a
      href="#"
      className="text-white tracking-[0.28em] md:tracking-[0.35em] text-[15px] md:text-[18px] font-medium"
    >
      ORIVE/STUDIO
    </a>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-10 lg:gap-16">
      <a
        href="#services"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Services
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
  className="hidden md:block px-6 lg:px-8 py-3 lg:py-4 border border-zinc-800 rounded-full text-white hover:bg-orange-300 hover:text-black transition-all duration-300"
>
  Start a Project →
</a>

{/* Mobile Menu Button */}
<button className="md:hidden text-white text-3xl">
  ☰
</button>

</div>
</header>

      {/* Hero */}
      <section className="min-h-screen px-6 md:px-10 lg:px-14 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 flex flex-col justify-center">
  
  <p className="uppercase tracking-[0.3em] text-zinc-600 text-xs md:text-sm mb-6 md:mb-10">
    Independent Design Studio — Est. 2023
  </p>

  <div className="max-w-[1600px] mx-auto w-full">
    <h1
  className="
    font-serif
    text-[52px]
    sm:text-[72px]
    md:text-[100px]
    lg:text-[130px]
    xl:text-[180px]
    leading-[0.9]
    tracking-[-0.05em]
    text-white
  "
>
      We build brands
<br className="hidden md:block" />
<span className="block md:inline">
  that <span className="text-orange-300">people</span> remember.
</span>
    </h1>

    <p
  className="
    mt-8
    md:mt-12
    text-zinc-300
    text-base
    sm:text-lg
    md:text-xl
    lg:text-[25px]
    leading-relaxed
    max-w-[700px]
  "
>
      Strategic branding, UI/UX design, and digital experiences
      engineered to drive growth and build lasting cultural value.
    </p>
    <div className="h-16 md:h-24"></div>
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
  className="border-t border-zinc-800 px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:py-32"
>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-10">

    <div>
      <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs md:text-sm">
        (02) — Services
      </p>
    </div>

    <div>
      {/* Heading */}
      <h2
  className="
font-serif
text-[42px]
sm:text-[56px]
md:text-[72px]
lg:text-[90px]
xl:text-[100px]
leading-[0.95]
tracking-[-0.05em]
max-w-[980px]
"
>
What we make,end to end.
</h2>
    </div>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

    {/* Card 1 */}
    <div className="border border-zinc-800 rounded-3xl p-6 md:p-8 hover:border-orange-300 transition-all duration-500">
     <p className="text-zinc-500 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-10">
        01 • DESIGN
      </p>

      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8">
        Interfaces that convert
      </h3>

      <ul className="text-zinc-400 text-sm md:text-base space-y-3 md:space-y-4">
        <li>• UI/UX Design</li>
        <li>• Website Design</li>
        <li>• Mobile App Design</li>
        <li>• Wireframing</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="border border-zinc-800 rounded-3xl p-6 md:p-8 hover:border-orange-300 transition-all duration-500">
     <p className="text-zinc-500 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-10">
        02 • BRANDING
      </p>

      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8">
        Identities that stick
      </h3>

      <ul className="text-zinc-400 text-sm md:text-base space-y-3 md:space-y-4">
        <li>• Brand Strategy</li>
        <li>• Logo Design</li>
        <li>• Visual Identity</li>
        <li>• Brand Guidelines</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="border border-zinc-800 rounded-3xl p-6 md:p-8 hover:border-orange-300 transition-all duration-500">
      <p className="text-zinc-500 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-10">
        03 • MARKETING
      </p>

      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8">
        Growth, not guesswork
      </h3>

      <ul className="text-zinc-400 text-sm md:text-base space-y-3 md:space-y-4">
        <li>• Social Media Marketing</li>
        <li>• SEO</li>
        <li>• Content Strategy</li>
        <li>• Email Marketing</li>
      </ul>
    </div>

    {/* Card 4 */}
    <div className="border border-zinc-800 rounded-3xl p-6 md:p-8 hover:border-orange-300 transition-all duration-500">
      <p className="text-zinc-500 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-10">
        04 • DEVELOPMENT
      </p>

      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8">
        Built for scale
      </h3>

      <ul className="text-zinc-400 text-sm md:text-base space-y-3 md:space-y-4">
        <li>• Website Development</li>
        <li>• Landing Pages</li>
        <li>• E-Commerce</li>
        <li>• CMS Integration</li>
      </ul>
    </div>

  </div>


</section>
{/* Process Section */}
<section
  id="process"
  className="border-t border-zinc-800 px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:py-32"
>

  {/* Header */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 mb-12 md:mb-20 lg:mb-24">

    <div className="lg:col-span-3">
      <p className="uppercase tracking-[0.3em] text-zinc-500">
        (03) — PROCESS
      </p>
    </div>

    <div className="lg:col-span-9">
      <h2
className="
font-serif
text-[48px]
sm:text-[60px]
md:text-[72px]
lg:text-[90px]
leading-[1]
"
>
        How the work gets
        <br />
        made.
      </h2>
    </div>

  </div>

  {/* Timeline */}
  <div className="relative">

    {/* Line */}
    <div className="hidden lg:block absolute top-4 left-0 w-full border-t border-zinc-800"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-10 relative">

      {/* Step 1 */}
<div className="text-center lg:text-left">
       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-300 mb-6 md:mb-12"></div>

        <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-500 mb-4 md:mb-6">
          STEP 01
        </p>

        <h3 className="
font-serif
text-3xl
md:text-4xl
lg:text-5xl
mb-3
md:mb-4
">
          Discovery
        </h3>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Workshops, interviews and audits. We get inside your business,
          market and ambition.
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center lg:text-left">
       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-300 mb-6 md:mb-12"></div>

        <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-500 mb-4 md:mb-6">
          STEP 02
        </p>

        <h3 className="
font-serif
text-3xl
md:text-4xl
lg:text-5xl
mb-3
md:mb-4
">
          Research
        </h3>

        <p className="
text-zinc-400
text-base
md:text-lg
leading-relaxed
">
          Audience study, competitive landscape and opportunity mapping.
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center lg:text-left">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-300 mb-6 md:mb-12"></div>

        <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-500 mb-4 md:mb-6">
          STEP 03
        </p>

        <h3 className="
font-serif
text-3xl
md:text-4xl
lg:text-5xl
mb-3
md:mb-4
">
          Strategy
        </h3>

        <p className="
text-zinc-400
text-base
md:text-lg
leading-relaxed
">
          Positioning, narrative, brand architecture and clear creative direction.
        </p>
      </div>

      {/* Step 4 */}
      <div className="text-center lg:text-left">
       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-300 mb-6 md:mb-12"></div>

        <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-500 mb-4 md:mb-6">
          STEP 04
        </p>

        <h3 className="
font-serif
text-3xl
md:text-4xl
lg:text-5xl
mb-3
md:mb-4
">
          Design
        </h3>

        <p className="
text-zinc-400
text-base
md:text-lg
leading-relaxed
">
          Identity, product and digital systems crafted with obsessive detail.
        </p>
      </div>

      {/* Step 5 */}
      <div className="text-center lg:text-left">
       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-300 mb-6 md:mb-12"></div>

        <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-500 mb-4 md:mb-6">
          STEP 05
        </p>

        <h3 className="
font-serif
text-3xl
md:text-4xl
lg:text-5xl
mb-3
md:mb-4
">
          Launch
        </h3>

        <p className="
text-zinc-400
text-base
md:text-lg
leading-relaxed
">
          Rollout assets, guidelines and ongoing support to build momentum.
        </p>
      </div>

    </div>

  </div>

</section>{/* Testimonials */}
<section
className="
border-t
border-zinc-800
px-6
md:px-10
lg:px-14
py-16
md:py-24
bg-black
text-white
"
>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">

    <div className="lg:col-span-3">
      <p className="uppercase tracking-[0.3em] text-zinc-500">
        (04) — TESTIMONIALS
      </p>
    </div>

    <div className="lg:col-span-9">
      <div className="flex justify-between items-start">

        <h2
className="
font-serif
text-[48px]
sm:text-[60px]
md:text-[72px]
lg:text-[90px]
leading-[1]
"
>
          From the people
          <br />
          we built for.
        </h2>

        <div className="flex gap-3 mt-8 lg:mt-0">

  <button
    onClick={prevTestimonial}
    className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700 hover:border-orange-300 transition"
  >
    ←
  </button>

  <button
    onClick={nextTestimonial}
    className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700 hover:border-orange-300 transition"
  >
    →
  </button>

</div>

      </div>
    </div>

  </div>

  <div className="max-w-6xl mx-auto mt-12 md:mt-20">

    <blockquote
className="
font-serif
text-[34px]
sm:text-[44px]
md:text-[56px]
lg:text-[72px]
leading-[1.15]
"
>

      <span className="text-orange-300">“</span>

      {testimonials[currentTestimonial].quote}

      <span className="text-orange-300">”</span>

    </blockquote>

    <div
className="
border-t
border-zinc-800
mt-12
md:mt-20
pt-8
md:pt-10
flex
flex-col
sm:flex-row
items-center
sm:items-start
gap-6
"
>

      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-300"></div>

      <div>
       <h4 className="text-xl md:text-2xl font-medium">
          {testimonials[currentTestimonial].name}
        </h4>

        <p className="text-zinc-500">
         {testimonials[currentTestimonial].role}
        </p>
      </div>

    </div>

  </div>

</section>{/* Contact Section */}
<section
id="contact"
className="border-t border-zinc-800 px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:py-32 bg-black text-white"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Left Side */}
    <div className="pr-0 lg:pr-20">

      <p className="uppercase tracking-[0.35em] text-zinc-500 mb-12">
        (05) — CONTACT
      </p>

      <h2
className="
font-serif
text-[48px]
sm:text-[60px]
md:text-[80px]
lg:text-[100px]
leading-[0.95]
mb-8
md:mb-12
max-w-[650px]
"
>
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

          <p className="text-2xl
md:text-4xl
lg:text-5xl font-serif">
            work@orivedesignstudio.com
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            PHONE
          </p>

          <p className="text-2xl
md:text-4xl
lg:text-5xl font-serif">
            +91 78275 07583
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            STUDIO
          </p>

          <p className="text-2xl
md:text-4xl
lg:text-5xl font-serif">
            Mumbai, Maharashtra
          </p>
        </div>

      </div>
    </div>

    {/* Right Side */}
   <div className="border-t lg:border-t-0 lg:border-l border-zinc-800 pt-16 lg:pt-0 lg:pl-16">

      {/* Name */}
      <div className="mb-14">
        <label className="block text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
          YOUR NAME
        </label>

        <input
          type="text"
          placeholder="Alex Doe"
          className="
w-full
bg-transparent
border-b
border-zinc-500
pb-4
md:pb-5
text-xl
md:text-2xl
lg:text-3xl
outline-none
"
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
          className="
w-full
bg-transparent
border-b
border-zinc-500
pb-4
md:pb-5
text-xl
md:text-2xl
lg:text-3xl
outline-none
placeholder:text-zinc-700
"
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
         className="
w-full
bg-transparent
border-b
border-zinc-500
pb-4
md:pb-5
text-xl
md:text-2xl
lg:text-3xl
outline-none
"
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
              className="
px-5
md:px-8
py-3
md:py-4
text-sm
md:text-base
border
border-zinc-600
rounded-full
hover:border-orange-300
transition
"
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
          className="
w-full
bg-transparent
border-b
border-zinc-500
pb-4
md:pb-5
text-xl
md:text-2xl
lg:text-3xl
outline-none
resize-none
"
        />
      </div>

     <a
href="https://wa.me/917827507583?text=Hi%20Orive%20Design%20Studio,%20I'm%20interested%20in%20working%20with%20you.%20I'd%20like%20to%20discuss%20my%20project."
target="_blank"
rel="noopener noreferrer"
className="
w-full
md:w-auto
inline-flex
items-center
justify-center
bg-orange-300
text-black
px-8
md:px-12
py-4
md:py-5
rounded-full
text-base
md:text-lg
font-medium
hover:bg-orange-200
transition
"
>
Send Inquiry →
</a>

    </div>
  </div>
</section>
{/* Footer */}

<footer className="border-t border-zinc-800 bg-black text-white">

  <div className="px-6 md:px-10 lg:px-14 py-16 md:py-20">

    {/* Logo */}

    <div className="flex justify-start mb-16">

      <h2
        className="
        font-serif
        text-[64px]
        sm:text-[90px]
        md:text-[140px]
        lg:text-[220px]
        leading-none
        "
      >
        Orive<span className="text-orange-300">.</span>
      </h2>

    </div>

    {/* Back To Top */}

    <div className="flex justify-end mb-10">

      <a
        href="#"
        className="
        w-14
        h-14
        rounded-full
        border
        border-zinc-700
        flex
        items-center
        justify-center
        text-xl
        hover:border-orange-300
        hover:text-orange-300
        transition
        duration-300
        "
      >
        ↑
      </a>

    </div>

    {/* Bottom Footer */}

    <div
      className="
      border-t
      border-zinc-800
      pt-8
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-6
      "
    >

      <p className="text-zinc-500 text-center md:text-left">

        © {new Date().getFullYear()} Orive Design Studio.
        All rights reserved.

      </p>

      <div className="flex flex-wrap justify-center gap-6">

        <a
          href="https:"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-orange-300 transition-colors duration-300"
        >
          Instagram
        </a>

        <a
          href="https://linkedin.com/company/orivedesignstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-orange-300 transition-colors duration-300"
        >
          LinkedIn
        </a>

        <a
          href="https:"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-orange-300 transition-colors duration-300"
        >
          Facebook
        </a>

        <a
          href="https://wa.me/917827507583"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-orange-300 transition-colors duration-300"
        >
          WhatsApp
        </a>

      </div>

    </div>

  </div>

</footer>
      </section>
    </main>
  );
}