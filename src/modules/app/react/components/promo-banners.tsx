const banners = [
  {
    title: 'Collection Été',
    subtitle: "Jusqu'à -60%",
    description: "Sur une sélection d'articles",
    color: 'from-orange-400 via-red-400 to-pink-500',
    emoji: '☀️',
  },
  {
    title: 'Livraison Gratuite',
    subtitle: "Dès 39€ d'achat",
    description: 'Partout en France',
    color: 'from-blue-400 via-cyan-400 to-teal-500',
    emoji: '🚚',
  },
  {
    title: 'App Mobile',
    subtitle: '-15% de réduction',
    description: 'Sur votre première commande',
    color: 'from-purple-400 via-pink-400 to-red-500',
    emoji: '📱',
  },
]

export default function PromoBanners() {
  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'backwards' }}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${banner.color} flex flex-col justify-between p-8`}>
                {/* Emoji */}
                <div className="text-7xl transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12">{banner.emoji}</div>

                {/* Text */}
                <div className="space-y-1 text-white">
                  <h3 className="text-3xl font-bold">{banner.title}</h3>
                  <p className="text-2xl font-semibold">{banner.subtitle}</p>
                  <p className="text-sm opacity-90">{banner.description}</p>
                </div>

                {/* Button */}
                <button className="mt-4 w-fit rounded-full bg-white px-6 py-2 font-semibold text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95">
                  Découvrir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
