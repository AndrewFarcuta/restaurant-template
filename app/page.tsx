import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/Menusection";
import { Navbar } from "@/components/Navbar";
import { restaurant } from "@/data/restaurant";
import { WhatsAppReservationForm } from "@/components/WhatsAppReservationForm";

const benefits = [
  "Online reservations",
  "Mobile-first design",
  "Menu presentation",
  "Google Maps integration",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-[#1f1f1f]">
      <Navbar />

      <Hero />

      <section
        id="about"
        className="grid gap-10 bg-white px-8 py-24 md:grid-cols-2 md:px-14"
      >
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
            About
          </p>

          <h2 className="text-4xl font-bold">
            Built to convert visitors into guests.
          </h2>
        </div>

        <p className="text-lg leading-8 text-gray-700">
          {restaurant.name} combines a professional online presence with a
          clear menu, restaurant information, visual content and a simple
          reservation flow. The website is optimized for desktop and mobile
          devices.
        </p>
      </section>

      <section className="px-8 py-24 md:px-14">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
          Features
        </p>

        <h2 className="mb-12 text-4xl font-bold">
          What the restaurant gets
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <p className="text-xl font-semibold">{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <MenuSection />

      <Gallery />

      <section className="bg-white px-8 py-24 md:px-14">
        <div className="rounded-[2rem] bg-[#1f1f1f] p-10 text-white md:p-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c89b6d]">
            Guest Experience
          </p>

          <blockquote className="max-w-3xl text-3xl font-semibold leading-snug">
            “A professional website makes it easier for guests to discover the
            restaurant, explore the menu and request a reservation.”
          </blockquote>

          <p className="mt-8 text-gray-400">Restaurant website concept</p>
        </div>
      </section>

      <section
        id="reservation"
        className="grid gap-12 bg-[#1f1f1f] px-8 py-24 text-white md:grid-cols-2 md:px-14"
      >
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c89b6d]">
            Reservation
          </p>

          <h2 className="text-4xl font-bold">Book your table today.</h2>

          <p className="mt-6 max-w-md leading-8 text-gray-300">
            Complete the form to request a reservation. The production version
            can store requests in the database and display them in the
            restaurant administration panel.
          </p>
        </div>

        <WhatsAppReservationForm />
      </section>

      <section className="bg-white px-8 py-24 md:px-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
              Location
            </p>

            <h2 className="text-4xl font-bold">Visit {restaurant.name}</h2>

            <p className="mt-6 leading-8 text-gray-600">
              {restaurant.address}
            </p>

            <p className="mt-2 text-gray-600">
              Monday–Sunday: {restaurant.openingHours}
            </p>

            <a
              href={`tel:${restaurant.phoneDisplay.replace(/\s/g, "")}`}
              className="mt-2 inline-block text-gray-600 hover:text-[#9b6b43]"
            >
              {restaurant.phoneDisplay}
            </a>
          </div>

          <iframe
            title={`${restaurant.name} location`}
            src="https://www.google.com/maps?q=Cluj-Napoca&output=embed"
            className="h-96 w-full rounded-3xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}