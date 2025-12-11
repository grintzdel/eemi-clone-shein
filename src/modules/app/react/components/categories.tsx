const categories = [
  { name: 'Robes', icon: '👗', color: 'from-pink-400 to-pink-600' },
  { name: 'Hauts', icon: '👚', color: 'from-purple-400 to-purple-600' },
  { name: 'Pantalons', icon: '👖', color: 'from-blue-400 to-blue-600' },
  { name: 'Jupes', icon: '🩱', color: 'from-red-400 to-red-600' },
  { name: 'Vestes', icon: '🧥', color: 'from-green-400 to-green-600' },
  { name: 'Chaussures', icon: '👠', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Sacs', icon: '👜', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Accessoires', icon: '💍', color: 'from-orange-400 to-orange-600' },
]

export default function Categories() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Acheter par Catégorie</h2>

        <div className="grid grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`relative aspect-square rounded-2xl bg-gradient-to-br ${category.color} transform overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-90 transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-center text-lg font-semibold text-white">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
