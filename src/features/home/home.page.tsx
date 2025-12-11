import Categories from '@/modules/app/react/components/categories'
import HeroBanner from '@/modules/app/react/components/hero-banner'
import PromoBanners from '@/modules/app/react/components/promo-banners'
import SpecialOffers from '@/modules/app/react/components/special-offers'
import TrendingProducts from '@/modules/app/react/components/trending-products'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      <Categories />
      <SpecialOffers />
      <PromoBanners />
      <TrendingProducts />
    </div>
  )
}
