import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductBanners from '@/components/ProductBanners';
import ServiceFeatures from '@/components/ServiceFeatures';
import FeaturedCategories from '@/components/FeaturedCategories';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductBanners />
      <ServiceFeatures />
      <FeaturedCategories />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
