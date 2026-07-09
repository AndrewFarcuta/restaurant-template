const menuItems = [
  { name: "Truffle Pasta", price: "€18", description: "Fresh pasta, parmesan, black truffle." },
  { name: "Margherita Pizza", price: "€12", description: "San Marzano tomatoes, mozzarella, basil." },
  { name: "Seafood Risotto", price: "€22", description: "Arborio rice, shrimp, mussels, white wine." },
  { name: "Tiramisu", price: "€8", description: "Mascarpone, espresso, cocoa." },
  { name: "Ribeye Steak", price: "€29", description: "Grilled ribeye, herbs, roasted vegetables." },
  { name: "Burrata Salad", price: "€14", description: "Burrata, cherry tomatoes, basil oil." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
];

const benefits = [
  "Online reservations",
  "Mobile-first design",
  "Menu presentation",
  "Google Maps ready",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-[#1f1f1f]">
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#f8f3eb]/90 px-8 py-5 backdrop-blur md:px-14">
        <h1 className="text-2xl font-bold">Bella Italia</h1>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#reservation">Reservation</a>
        </div>

        <a
          href="https://wa.me/40722123456"
          className="rounded-full bg-[#1f1f1f] px-5 py-3 text-sm text-white"
        >
          WhatsApp
        </a>
      </nav>

      <section className="grid min-h-screen items-center gap-12 px-8 pt-28 md:grid-cols-2 md:px-14">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9b6b43]">
            Premium Restaurant Website
          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            A modern website for restaurants that want more reservations.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
            Mobile-friendly restaurant website template with menu, gallery,
            reservation form and WhatsApp contact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#reservation" className="rounded-full bg-[#1f1f1f] px-8 py-4 text-white">
              Reserve a Table
            </a>

            <a href="#menu" className="rounded-full border border-[#1f1f1f] px-8 py-4">
              View Menu
            </a>
          </div>
        </div>

        <div
          className="flex h-[560px] items-end rounded-[2rem] bg-cover bg-center p-8 shadow-2xl"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80')",
          }}
        >
          <div className="rounded-2xl bg-white/90 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-[#9b6b43]">
              Open today
            </p>
            <p className="mt-2 text-3xl font-bold">12:00 – 23:00</p>
            <p className="mt-2 text-gray-600">Cluj-Napoca, Romania</p>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-10 bg-white px-8 py-24 md:grid-cols-2 md:px-14">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
            About
          </p>
          <h3 className="text-4xl font-bold">Built to convert visitors into guests.</h3>
        </div>

        <p className="text-lg leading-8 text-gray-700">
          This template is designed for restaurants that need a professional
          online presence without unnecessary complexity. It presents the brand,
          menu, atmosphere and booking options clearly on every device.
        </p>
      </section>

      <section className="px-8 py-24 md:px-14">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
          Features
        </p>

        <h3 className="mb-12 text-4xl font-bold">What the restaurant gets</h3>

        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xl font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="bg-white px-8 py-24 md:px-14">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
          Menu
        </p>

        <h3 className="mb-12 text-4xl font-bold">Popular dishes</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {menuItems.map((item) => (
            <div key={item.name} className="rounded-3xl border border-gray-100 bg-[#f8f3eb] p-8">
              <div className="mb-4 flex items-center justify-between gap-6">
                <h4 className="text-xl font-bold">{item.name}</h4>
                <span className="font-semibold text-[#9b6b43]">{item.price}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="px-8 py-24 md:px-14">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
          Gallery
        </p>

        <h3 className="mb-12 text-4xl font-bold">Atmosphere preview</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image}
              className="h-80 rounded-3xl bg-cover bg-center shadow-sm"
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>
      </section>

      <section className="bg-white px-8 py-24 md:px-14">
        <div className="rounded-[2rem] bg-[#1f1f1f] p-10 text-white md:p-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c89b6d]">
            Testimonial
          </p>

          <p className="max-w-3xl text-3xl font-semibold leading-snug">
            “A website like this gives a restaurant a professional image and
            makes reservations easier for guests.”
          </p>

          <p className="mt-8 text-gray-400">Restaurant Owner</p>
        </div>
      </section>

      <section id="reservation" className="grid gap-12 bg-[#1f1f1f] px-8 py-24 text-white md:grid-cols-2 md:px-14">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c89b6d]">
            Reservation
          </p>

          <h3 className="text-4xl font-bold">Book your table today.</h3>

          <p className="mt-6 max-w-md leading-8 text-gray-300">
            Visitors can request a reservation directly from the website.
            For a real client, this form can be connected to email, WhatsApp
            or a booking system.
          </p>
        </div>

        <form
        action="https://wa.me/40722123456"
        target="_blank"
        className="rounded-3xl bg-white p-8 text-black"
      >
        <div className="grid gap-4">
          <input
            name="name"
            required
            className="rounded-xl border p-4"
            placeholder="Full name"
          />

          <input
            name="phone"
            type="tel"
            required
            className="rounded-xl border p-4"
            placeholder="Phone number"
          />

          <input
            name="date"
            type="datetime-local"
            required
            className="rounded-xl border p-4"
          />

          <input
            name="guests"
            type="number"
            min="1"
            required
            className="rounded-xl border p-4"
            placeholder="Number of guests"
          />

          <button
            type="submit"
            className="mt-2 rounded-xl bg-[#1f1f1f] px-6 py-4 font-semibold text-white hover:bg-[#3a3a3a]"
          >
            Request Reservation
          </button>
  </div>
</form>
      </section>
      <section className="bg-white px-8 py-24 md:px-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
              Location
            </p>

            <h3 className="text-4xl font-bold">
              Visit Bella Italia
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              Strada Memorandumului 10, Cluj-Napoca
            </p>

            <p className="mt-2 text-gray-600">
              Monday–Sunday: 12:00–23:00
            </p>

            <p className="mt-2 text-gray-600">
              +40 700 000 000
            </p>
          </div>

          <iframe
            title="Restaurant location"
            src="https://www.google.com/maps?q=Cluj-Napoca&output=embed"
            className="h-96 w-full rounded-3xl border-0"
            loading="lazy"
          />
        </div>
</section>
      <footer className="flex flex-col gap-4 bg-[#111] px-8 py-10 text-gray-400 md:flex-row md:items-center md:justify-between md:px-14">
        <p>Bella Italia · Restaurant Website Template</p>
        <p>Built by Andrei Farcuța</p>
      </footer>
    </main>
  );
}