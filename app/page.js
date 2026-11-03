// app/page.js

"use client";
import { useState } from "react";
import { FaWhatsapp, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import {
  Bath,
  ChefHat,
  Hammer,
  Paintbrush,
  Building2,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_bjo6acm", 
      "template_9nyfc98",
      e.target,
      "OSTybobj9scLHDN5y"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Something went wrong.");
    });
};

const services = [
  {
    title: "Bathroom Remodeling",
    icon: Bath,
    image:
      "/images/Bathroom Remodeling1.jpeg",
    description:
      "Elegant and modern bathroom renovations with premium finishes.",
  },
  {
    title: "Kitchen Remodeling",
    icon: ChefHat,
    image:
      "/images/kitchenRemodeling.jpeg",
    description:
      "Luxury kitchens designed for functionality, beauty, and comfort.",
  },
  {
    title: "Marble Installation",
    icon: Building2,
    image:
      "/images/marbelInstalation.jpg",
    description:
      "Premium marble installation for sophisticated interiors.",
  },
  {
    title: "Tile Installation",
    icon: CheckCircle2,
    image:
      "/images/tileInstallation.jpg",
    description:
      "Precision tile installation with flawless craftsmanship.",
  },
  {
    title: "Demolition & Reconstruction",
    icon: Hammer,
    image:
      "/images/demolition.jpeg",
    description:
      "Complete structural transformation from demolition to final build.",
  },
  {
    title: "Interior & Exterior Painting",
    icon: Paintbrush,
    image:
      "/images/paint.jpeg",
    description:
      "Premium painting services with durable finishes and eleg     ant finishes.",
  },
];

const portfolio = [
  "/images/ModernLivingRoomRenovationBefore.jpg",
  "/images/ModernLivingRoomAfterRenovation.jpg",
  "/images/HouseRenovationBefore.jpg",
  "/images/HouseRenovationAfter.jpg",
  "/images/dinningRoomBefore.jpg",
  "/images/dinningRoomAfter.jpg",
];

const testimonials = [
  {
    name: "Amanda Anderson",
    review:
      "Outstanding craftsmanship and professionalism. Our kitchen looks incredible.",
  },
  {
    name: "Mrs Martinez",
    review:
      "They transformed our bathroom into a luxury space.",
  },
  {
    name: "Daniel Gonzalez",
    review:
      "Excellent communication, premium finishes, and delivered on time.",
  },
];

export default function HomePage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <main className="bg-white text-black overflow-hidden scroll-smooth">
      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            H.L. CIVIL CONSTRUCTION
          </h1>

          <nav className="hidden md:flex gap-8 text-white text-sm">
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>

            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>

            <a href="#portfolio" className="hover:text-yellow-400 transition">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </nav>
          {
  mobileMenu && (
    <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl md:hidden border-t border-white/10">
      <div className="flex flex-col p-6 gap-6 text-white">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>

        </div>
      </header>

      






      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/heroImageModern.jpg"
          alt="Luxury Remodeling"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="uppercase tracking-[6px] text-yellow-400 mb-4 text-sm">
            Premium Residential Remodeling
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transforming spaces into luxury homes
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Specialists in bathrooms, kitchens, marble, tile, painting and
            reconstruction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Request a Quote
            </a>

            <a
              href="#portfolio"
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
          <div>
            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              About Us
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Built on Quality, Trust & Craftsmanship
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              With years of experience in luxury residential remodeling, we
              create elegant and functional spaces designed for modern living.
            </p>

            <p className="text-gray-600 leading-8">
              We are committed to excellence in every detail.
            </p>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/aboutUsProfile.jpg"
              alt="Construction Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Services
            </p>

            <h2 className="text-5xl font-bold">
              Premium Remodeling Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-8">
                    <Icon className="text-yellow-500 mb-4" size={36} />

                    <h3 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl font-bold">
              Before & After Transformations
            </h2>
          </div>

          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {portfolio.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={img}
                  alt="Portfolio"
                  width={700}
                  height={900}
                  className="w-full hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Excellence in Every Detail
            </h2>

            <div className="space-y-5">
              {[
                "Premium craftsmanship",
                "Guaranteed work",
                "Personalized attention",
                "High-quality materials",
                "On-time delivery",
                "Years of experience",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-yellow-500" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "80+", label: "Projects" },
              { value: "60+", label: "Clients" },
              { value: "7+", label: "Years" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-black text-white rounded-3xl p-10 text-center shadow-xl"
              >
                <h3 className="text-4xl font-bold text-yellow-400">
                  {stat.value}
                </h3>

                <p className="mt-4 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
              Testimonials
            </p>

            <h2 className="text-5xl font-bold">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="fill-yellow-400 text-yellow-400"
                      size={18}
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-8 mb-6">
                  "{testimonial.review}"
                </p>

                <h4 className="font-semibold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Our Process
            </p>

            <h2 className="text-5xl font-bold">
              A Seamless Remodeling Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-6 gap-6">
            {[
              "Consultation",
              "Design",
              "Demolition",
              "Construction",
              "Finishing",
              "Final Delivery",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-6 text-center shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-5 font-bold">
                  {index + 1}
                </div>

                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-gray-100 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Let’s Build Your Dream Space
            </h2>

            <div className="space-y-6 text-gray-700">
              <div className="flex gap-4 items-center">
                <Phone className="text-yellow-500" />
                <a href="tel:+7863904633">(786) 390-4633</a>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="text-yellow-500" />
                <a href="mailto:henrylunacivilconstruction@gmail.com">
                  henrylunacivilconstruction@gmail.com
                </a>
              </div>

              <div className="flex gap-4 items-center">
                <MapPin className="text-yellow-500" />
                <span>Miami, Florida</span>
              </div>
            </div>

            <div className="mt-10 rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Miami,%20Florida&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                title="Mapa de Miami, Florida"
              />
            </div>
          </div>

          <form onSubmit={sendEmail} className="bg-white rounded-3xl shadow-2xl p-10 space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
            />

            <select
              name="project_type"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500">
              <option>Project Type</option>
              <option>Bathroom Remodeling</option>
              <option>Kitchen Remodeling</option>
              <option>Painting</option>
            </select>

            <textarea
              rows={5}
              name="message"
              placeholder="Tell us about your project"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
            />

            <button className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-2xl transition font-semibold">
              Request Free Estimate
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-5">
              H.L. CIVIL CONSTRUCTION
            </h3>

            <p className="text-gray-400 leading-7">
              Premium remodeling services delivering elegance, quality and
              functionality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Bathroom Remodeling</li>
              <li>Kitchen Remodeling</li>
              <li>Marble Installation</li>
              <li>Tile Installation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Contact</h4>

            <ul className="space-y-3 text-gray-400">
              <li>(786) 390-4633</li>
              <li>henrylunacivilconstruction@gmail.com</li>
              <li>Miami, Florida</li>
            </ul>
          </div>

<div>
  <h4 className="font-semibold mb-5">Follow Us</h4>

  <div className="flex gap-4">
    <a
      href="https://wa.me/17863904633"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-green-500 transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={22} />
    </a>

    <a
      href="https://www.tiktok.com/@h_l.construction?_r=1&_t=ZT-9AiwMmpxeyE"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-black"
    >
      <FaTiktok size={22} />
    </a>

    <a
      href="https://www.instagram.com/_h.l_construction?utm_source=qr&xtok=MXUyYW9lNzNvZml6OA%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-pink-500 transition"
      aria-label="Instagram"
    >
      <FaInstagram size={22} />
    </a>
  </div>
</div>

          
          
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 H.L. CIVIL CONSTRUCTION. All rights reserved.
        </div>
      </footer>
      <a
        href="https://wa.me/17863904633"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a>
    </main>
  );
}