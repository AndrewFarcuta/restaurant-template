import { restaurant } from "@/data/restaurant";

export function Hero() {
  return (
    <section className="grid min-h-screen items-center gap-12 px-8 pt-28 md:grid-cols-2 md:px-14">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9b6b43]">
          {restaurant.category}
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          {restaurant.headline}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
          {restaurant.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#reservation"
            className="rounded-full bg-[#1f1f1f] px-8 py-4 text-white"
          >
            Reserve a Table
          </a>

          <a
            href="#menu"
            className="rounded-full border border-[#1f1f1f] px-8 py-4"
          >
            View Menu
          </a>
        </div>
      </div>

      <div
        className="flex h-[560px] items-end rounded-[2rem] bg-cover bg-center p-8 shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.05)), url('${restaurant.heroImage}')`,
        }}
      >
        <div className="rounded-2xl bg-white/90 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9b6b43]">
            Open today
          </p>
          <p className="mt-2 text-3xl font-bold">
            {restaurant.openingHours}
          </p>
          <p className="mt-2 text-gray-600">{restaurant.address}</p>
        </div>
      </div>
    </section>
  );
}