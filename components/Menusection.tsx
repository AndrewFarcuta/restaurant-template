import { restaurant } from "@/data/restaurant";

export function MenuSection() {
  return (
    <section id="menu" className="bg-white px-8 py-24 md:px-14">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9b6b43]">
        Menu
      </p>

      <h2 className="mb-12 text-4xl font-bold">Popular dishes</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {restaurant.menu.map((item) => (
          <article
            key={item.name}
            className="rounded-3xl border border-gray-100 bg-[#f8f3eb] p-8"
          >
            <div className="mb-4 flex items-start justify-between gap-6">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <span className="font-semibold text-[#9b6b43]">
                {item.price}
              </span>
            </div>

            <p className="text-gray-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}