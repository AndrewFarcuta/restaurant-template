import { restaurant } from "@/data/restaurant";

export function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#f8f3eb]/90 px-8 py-5 backdrop-blur md:px-14">
      <a href="#" className="text-2xl font-bold">
        {restaurant.name}
      </a>

      <div className="hidden gap-8 text-sm font-medium md:flex">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#reservation">Reservation</a>
      </div>

      <a
        href={`https://wa.me/${restaurant.phoneWhatsApp}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#1f1f1f] px-5 py-3 text-sm text-white"
      >
        WhatsApp
      </a>
    </nav>
  );
}