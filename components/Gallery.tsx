import { restaurant } from "@/data/restaurant";

export function Gallery() {
  return (
    <section id="gallery" className="px-8 py-24 md:px-14">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
        Gallery
      </p>

      <h2 className="mb-12 text-4xl font-bold">Atmosphere preview</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {restaurant.gallery.map((image) => (
          <div
            key={image}
            className="h-80 rounded-3xl bg-cover bg-center shadow-sm"
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>
    </section>
  );
}