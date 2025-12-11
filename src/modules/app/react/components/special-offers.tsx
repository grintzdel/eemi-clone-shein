const offers = [
  {
    title: 'Flash Sale',
    discount: '-80%',
    description: 'Ventes Flash du Jour',
    color: 'from-red-500 to-orange-500',
    emoji: '⚡',
  },
  {
    title: 'Nouveautés',
    discount: 'NEW',
    description: 'Nouvelles Arrivées',
    color: 'from-blue-500 to-cyan-500',
    emoji: '✨',
  },
  {
    title: 'Tendances',
    discount: 'HOT',
    description: 'Articles Populaires',
    color: 'from-purple-500 to-pink-500',
    emoji: '🔥',
  },
  {
    title: 'Best Sellers',
    discount: 'TOP',
    description: 'Les Plus Vendus',
    color: 'from-green-500 to-teal-500',
    emoji: '⭐',
  },
]

export default function SpecialOffers() {
  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between animate-fade-in-up">
          <h2 className="text-3xl font-bold">Offres Spéciales</h2>
          <a href="#" className="font-semibold text-red-500 hover:underline">
            Voir tout →
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'backwards' }}
            >
              <div className={`aspect-[3/4] bg-gradient-to-br ${offer.color} flex flex-col justify-between p-6`}>
                {/* Badge */}
                <div className="flex justify-end">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">{offer.discount}</span>
                </div>

                {/* Center Emoji */}
                <div className="text-center text-8xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {offer.emoji}
                </div>

                {/* Bottom Text */}
                <div className="space-y-2 text-white">
                  <h3 className="text-2xl font-bold">{offer.title}</h3>
                  <p className="text-sm opacity-90">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
