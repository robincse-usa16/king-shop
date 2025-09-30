import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Bell,
  RotateCcw,
  Scale,
  X,
  Minus,
  Plus,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 119900,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "AirPods Pro 2nd Gen",
      price: 24900,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=100&h=100&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 0;
  const total = subtotal - discount;

  const navigationItems = [
    { name: "Apple Products", href: "/apple" },
    { name: "Phones", href: "/phones" },
    { name: "Tablet", href: "/tablet" },
    { name: "Sound Equipment", href: "/audio" },
    { name: "Power & Accessories", href: "/accessories" },
    { name: "Fitness & Wearable", href: "/wearable" },
    { name: "Peripherals", href: "/peripherals" },
    { name: "Cover & Glass", href: "/protection" },
    { name: "Smart Electronics", href: "/smart" },
    { name: "Used Device", href: "/used" },
  ];

  return (
    <header className="bg-card border-b shadow-card sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-muted py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-muted-foreground">
          <div>Free shipping on orders over $100</div>
          <div className="flex gap-4">
            <span>📞 +8801XXXXXXXXX</span>
            <span>📧 support@applestore.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-foreground">
              👑 <span className="text-primary">King </span> Shop
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-border focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              📝 Blog
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Pre-order
            </Button>

            <Button
              variant="secondary"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              🔥 Offers
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              <Scale className="w-4 h-4" />
              Compare
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground min-w-[1.25rem] h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </Badge>
            </Button>

            {/* User */}
            <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center space-x-8 py-3">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 animate-slide-up">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sheet */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-lg flex flex-col">
          <SheetHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-2xl font-bold">Your Cart</SheetTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Items</h3>
              {cartItems.length > 0 && (
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto text-base"
                  onClick={clearCart}
                >
                  Clear All
                </Button>
              )}
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-base mb-2">{item.name}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium text-base">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-base font-bold mt-2">৳ {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              
              <div className="flex gap-2">
                <Input 
                  placeholder="Apply Coupon" 
                  className="flex-1 text-base h-12"
                />
                <Button className="gradient-primary text-white px-6 h-12 text-base">
                  Apply Coupon
                </Button>
              </div>

              <div className="space-y-3 text-base">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sub Total ({cartItems.length} items)</span>
                  <span className="font-semibold">৳ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-semibold">৳ {discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t">
                  <span>Total Amount</span>
                  <span>৳ {total.toLocaleString()}</span>
                </div>
              </div>

              <Button 
                className="w-full gradient-primary text-white h-14 text-lg font-semibold"
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/cart');
                }}
              >
                Continue
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
