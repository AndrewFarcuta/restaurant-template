import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="bg-[#111] px-8 py-12 text-gray-300 md:px-14">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-white">{restaurant.name}</h2>
          <p className="mt-3">{restaurant.category}</p>
        </div>

        <div>
          <p>{restaurant.address}</p>
          <p className="mt-2">{restaurant.phoneDisplay}</p>
          <p className="mt-2">{restaurant.openingHours}</p>
        </div>

        <div className="md:text-right">
          <a
            href={`https://wa.me/${restaurant.phoneWhatsApp}`}
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>

      <p className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
      </p>
    </footer>
  );
}