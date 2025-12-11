export default function HeroBanner() {
  return (
    <div className="relative h-[500px] w-full bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="absolute inset-0 flex items-center justify-between px-12">
        {/* Left Content */}
        <div className="z-10 max-w-lg space-y-6">
          <div className="inline-block rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
            NOUVELLE COLLECTION
          </div>
          <h2 className="text-5xl leading-tight font-bold">
            Tendances Mode
            <br />
            <span className="text-red-500">-70%</span> de réduction
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les dernières tendances de la mode avec des prix imbattables
          </p>
          <button className="rounded-full bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
            ACHETER MAINTENANT
          </button>
        </div>

        {/* Right Image - Placeholder with gradient */}
        <div className="relative h-[450px] w-[500px] overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
            <div className="space-y-4 text-center">
              <div className="text-6xl">👗</div>
              <p className="font-medium text-gray-700">Image principale de la collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
