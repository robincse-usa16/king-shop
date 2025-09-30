import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag,
  CreditCard,
  Truck
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 119900,
      originalPrice: 129900,
      quantity: 1,
      color: "Natural Titanium",
      storage: "256GB",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop",
      inStock: true
    },
    {
      id: 2,
      name: "AirPods Pro 2nd Gen",
      price: 24900,
      originalPrice: 27900,
      quantity: 2,
      color: "White",
      storage: "",
      image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=200&h=200&fit=crop",
      inStock: true
    },
    {
      id: 3,
      name: "Apple Watch Series 9",
      price: 39900,
      originalPrice: 42900,
      quantity: 1,
      color: "Midnight",
      storage: "45mm",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&h=200&fit=crop",
      inStock: false
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice - item.price) * item.quantity), 0
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
            <Badge variant="secondary" className="ml-2">
              {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
            </Badge>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some products to get started</p>
              <Link to="/">
                <Button className="gradient-primary text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-muted/30 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>Color: {item.color}</span>
                          {item.storage && <span>Storage: {item.storage}</span>}
                          <Badge 
                            variant={item.inStock ? "secondary" : "destructive"}
                            className={item.inStock ? "bg-success/10 text-success" : ""}
                          >
                            {item.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8"
                              disabled={!item.inStock}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8"
                              disabled={!item.inStock}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-foreground">
                                ৳ {(item.price * item.quantity).toLocaleString()}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                ৳ {(item.originalPrice * item.quantity).toLocaleString()}
                              </span>
                            </div>
                            <p className="text-sm text-success">
                              Save ৳ {((item.originalPrice - item.price) * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {/* Continue Shopping */}
                <div className="pt-4">
                  <Link to="/">
                    <Button variant="outline" className="w-full md:w-auto">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">৳ {subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-success">Free</span>
                    </div>
                    
                    <div className="flex justify-between text-success">
                      <span>Total Savings</span>
                      <span className="font-medium">৳ {savings.toLocaleString()}</span>
                    </div>
                    
                    <hr />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>৳ {total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full gradient-primary text-white h-12"
                      disabled={cartItems.some(item => !item.inStock)}
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Proceed to Checkout
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Truck className="w-4 h-4" />
                      <span>Free delivery on orders over ৳ 10,000</span>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-success font-medium">✓ Secure Payment</div>
                        <div className="text-muted-foreground">SSL Protected</div>
                      </div>
                      <div className="text-center">
                        <div className="text-success font-medium">✓ Fast Delivery</div>
                        <div className="text-muted-foreground">3-5 Days</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;