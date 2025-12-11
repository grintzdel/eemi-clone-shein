const products = [
  {
    name: "Robe d'été fleurie",
    price: '25.99€',
    oldPrice: '45.99€',
    rating: 4.5,
    reviews: 1234,
    color: 'from-pink-200 to-pink-300',
    emoji: '🌸',
  },
  {
    name: 'T-shirt basique',
    price: '12.99€',
    oldPrice: '19.99€',
    rating: 4.8,
    reviews: 2341,
    color: 'from-blue-200 to-blue-300',
    emoji: '👕',
  },
  {
    name: 'Jean skinny',
    price: '35.99€',
    oldPrice: '59.99€',
    rating: 4.6,
    reviews: 892,
    color: 'from-indigo-200 to-indigo-300',
    emoji: '👖',
  },
  {
    name: 'Veste en cuir',
    price: '89.99€',
    oldPrice: '149.99€',
    rating: 4.9,
    reviews: 567,
    color: 'from-gray-200 to-gray-400',
    emoji: '🧥',
  },
  {
    name: 'Sac à main',
    price: '29.99€',
    oldPrice: '49.99€',
    rating: 4.7,
    reviews: 1567,
    color: 'from-yellow-200 to-yellow-300',
    emoji: '👜',
  },
  {
    name: 'Baskets sport',
    price: '45.99€',
    oldPrice: '79.99€',
    rating: 4.4,
    reviews: 892,
    color: 'from-green-200 to-green-300',
    emoji: '👟',
  },
  {
    name: 'Pull oversize',
    price: '32.99€',
    oldPrice: '54.99€',
    rating: 4.6,
    reviews: 1123,
    color: 'from-purple-200 to-purple-300',
    emoji: '🧶',
  },
  {
    name: 'Jupe plissée',
    price: '27.99€',
    oldPrice: '42.99€',
    rating: 4.5,
    reviews: 743,
    color: 'from-red-200 to-red-300',
    emoji: '👗',
  },
]

export default function TrendingProducts() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Tendances du Moment</h2>
            <p className="mt-2 text-gray-600">Articles les plus populaires cette semaine</p>
          </div>
          <a href="#" className="font-semibold text-red-500 hover:underline">
            Voir tout →
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                >
                  <span className="text-8xl">{product.emoji}</span>
                </div>

                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <span className="rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">-40%</span>
                </div>

                <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="line-clamp-2 text-sm font-medium transition-colors group-hover:text-red-500">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1">
                  <div className="flex text-sm text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-red-500">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full border-2 border-black px-8 py-3 font-semibold transition-all duration-300 hover:bg-black hover:text-white">
            Charger plus de produits
          </button>
        </div>
      </div>
    </section>
  )
}
