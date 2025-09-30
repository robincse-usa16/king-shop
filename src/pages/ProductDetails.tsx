import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Minus, 
  Plus,
  Star,
  Shield,
  Truck,
  RefreshCw
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('Graphite Gray');
  const [selectedStorage, setSelectedStorage] = useState('8/256GB');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: 1,
    name: "Redmi Pad SE",
    brand: "xiaomi",
    price: 19500,
    originalPrice: 22000,
    cashPrice: 19500,
    discount: "11% OFF",
    availability: "In Stock",
    code: "AGL24267",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
    ],
    colors: [
      { name: 'Graphite Gray', class: 'bg-gray-700' },
      { name: 'Lavender Purple', class: 'bg-purple-400' },
      { name: 'Mint Green', class: 'bg-green-300' }
    ],
    storage: ['6/128GB', '8/128GB', '8/256GB'],
    specifications: {
      model: "Redmi Pad SE",
      technology: "No cellular connectivity",
      brand: "Xiaomi",
      battery: "Li-Po 8000 mAh",
      weight: "478 g (1.05 lb)",
      build: "Glass front, aluminum back, aluminum frame",
      sim: "No",
      dimension: "255.5 x 167.1 x 7.4 mm",
      displayType: "IPS LCD, 90Hz, 400 nits (typ)",
      displaySize: "11.0 inches",
      displayResolution: "1200 x 1920 pixels",
      os: "Android 13, MIUI Pad 14"
    },
    description: "The Xiaomi Redmi Pad SE is designed to protect your eyes, making it safe for extended use for both you and your children. Its screen reduces harmful blue light for a comfortable viewing experience. Comes with a high-quality surround sound from its four powerful speakers. This tablet is perfect for enjoying movies or music. Built with slim & lightweight design, so you can easily carry. An amazing camera enhances video calls, while the main camera ensures sharp, high-resolution photos. Enjoy long lasting battery life for longer use."
  };

  const recentlyViewed = [
    {
      id: 1,
      name: "JBL TUNE 500 Wired On Ear",
      price: 2700,
      originalPrice: 3200,
      discount: "16% OFF",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Galaxy S25 Ultra 5G",
      price: 112000,
      originalPrice: 125000,
      discount: "10% OFF",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Amazfit Active 2 Smart Watch",
      price: 15500,
      originalPrice: 17500,
      discount: "11% OFF",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span>Tablet</span>
            <span>/</span>
            <span>Xiaomi</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-muted/30 rounded-xl p-8">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <img src="/placeholder.svg" alt={product.brand} className="w-6 h-6" />
                <span className="text-sm text-muted-foreground">{product.brand}</span>
                <Button variant="link" className="text-primary p-0 h-auto text-sm">
                  Add to Compare
                </Button>
              </div>

              <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-3xl font-bold text-foreground">৳ {product.price.toLocaleString()}</span>
                  <span className="text-base text-muted-foreground">(Cash Price)</span>
                  <Badge variant="secondary" className="bg-success/10 text-success text-base px-3 py-1">
                    {product.discount}
                  </Badge>
                </div>
                <div className="text-lg text-muted-foreground line-through">
                  Regular: ৳ {product.originalPrice?.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <span><strong>Availability:</strong> <span className="text-success">{product.availability}</span></span>
                <span><strong>Code:</strong> {product.code}</span>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-medium mb-3">Color:</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        selectedColor === color.name
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage Selection */}
              <div>
                <h3 className="font-medium mb-3">Storage:</h3>
                <div className="flex gap-3">
                  {product.storage.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        selectedStorage === storage
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium mb-3">Select Quantity:</h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  className="flex-1 gradient-primary text-white h-12 text-base"
                  onClick={() => window.location.href = '/cart'}
                >
                  Shop Now
                </Button>
                <Button variant="outline" className="flex-1 h-12 text-base">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add To Cart
                </Button>
              </div>

              {/* Additional Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">📊 EMI Available</span>
                  <Button variant="link" className="text-primary p-0 h-auto text-sm">
                    View Plans
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">💬 WhatsApp</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4" />
                  <span>Delivery Timescale: 3-5 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <div className="lg:col-span-2">
              <Tabs defaultValue="specification" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="specification">Specification</TabsTrigger>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="warranty">Warranty</TabsTrigger>
                </TabsList>
                
                <TabsContent value="specification" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Specification</h3>
                      <div className="space-y-0">
                        {Object.entries(product.specifications).map(([key, value], index) => (
                          <div
                            key={key}
                            className={`grid grid-cols-3 py-3 border-b last:border-b-0 ${
                              index % 2 === 0 ? 'bg-muted/30' : ''
                            }`}
                          >
                            <div className="font-medium text-muted-foreground px-4">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </div>
                            <div className="col-span-2 px-4">{value}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="description" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-8">
                        <img
                          src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=300&fit=crop"
                          alt="Product showcase"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                        <p className="text-lg text-muted-foreground">Simply entertaining</p>
                      </div>
                      
                      <div className="prose max-w-none">
                        <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="warranty" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Warranty Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-primary" />
                          <span>1 Year Official Warranty</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <RefreshCw className="w-5 h-5 text-primary" />
                          <span>7 Days Replacement Guarantee</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Truck className="w-5 h-5 text-primary" />
                          <span>Free Home Delivery</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Recently Viewed */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Recently Viewed</h3>
              <div className="space-y-4">
                {recentlyViewed.map((item) => (
                  <Card key={item.id} className="p-4 cursor-pointer hover:shadow-hover transition-shadow">
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">{item.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">৳ {item.price.toLocaleString()}</span>
                          <span className="text-xs text-muted-foreground line-through">
                            ৳ {item.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-success/10 text-success mt-1">
                          {item.discount}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;