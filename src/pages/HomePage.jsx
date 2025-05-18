import HeroSection from '../components/home/HeroSection'
import FeaturedSection from '../components/home/FeaturedSection'
import CategoriesSection from '../components/home/CategoriesSection'
import MembershipBanner from '../components/home/MembershipBanner'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection 
        title="Featured Content" 
        subtitle="Our premium selection of exclusive videos"
      />
      <CategoriesSection />
      <FeaturedSection 
        title="Most Popular" 
        subtitle="Trending this week"
      />
      <MembershipBanner />
      <FeaturedSection 
        title="Recently Added" 
        subtitle="Fresh new content"
      />
    </div>
  )
}

export default HomePage