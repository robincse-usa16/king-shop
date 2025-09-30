import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone,
  ShoppingBag,
  Heart,
  Settings,
  MapPin,
  CreditCard,
  Headphones
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+880 1234 567890",
    address: "123 Main Street, Dhaka, Bangladesh",
    joinDate: "January 2024",
    totalOrders: 12,
    totalSpent: 235000
  };

  const recentOrders = [
    {
      id: "ORD001",
      date: "2024-09-25",
      total: 119900,
      status: "Delivered",
      items: 2
    },
    {
      id: "ORD002", 
      date: "2024-09-20",
      total: 54800,
      status: "Shipped",
      items: 1
    },
    {
      id: "ORD003",
      date: "2024-09-15",
      total: 24900,
      status: "Processing",
      items: 1
    }
  ];

  if (isLoggedIn) {
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
              <h1 className="text-3xl font-bold text-foreground">My Account</h1>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">{user.name}</h3>
                    <p className="text-muted-foreground text-base mt-1">Member since {user.joinDate}</p>
                  </div>
                  
                  <nav className="space-y-2">
                    <Button variant="secondary" className="w-full justify-start bg-primary/10 text-primary hover:bg-primary/20 text-base py-6">
                      <User className="w-5 h-5 mr-3" />
                      Account Details
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-base py-6">
                      <ShoppingBag className="w-5 h-5 mr-3" />
                      Order
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-base py-6">
                      <MapPin className="w-5 h-5 mr-3" />
                      Addresses
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-base py-6"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      <ArrowLeft className="w-5 h-5 mr-3" />
                      Log Out
                    </Button>
                  </nav>
                </Card>
              </div>

              {/* Main Content - Account Details */}
              <div className="lg:col-span-3">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-8">Account Details</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-center justify-between pb-6 border-b">
                      <div>
                        <p className="text-base text-muted-foreground mb-2">Name</p>
                        <p className="text-xl font-medium">{user.name}</p>
                      </div>
                      <Button variant="outline" className="text-base px-6">Change</Button>
                    </div>

                    <div className="flex items-center justify-between pb-6 border-b">
                      <div>
                        <p className="text-base text-muted-foreground mb-2">Email Address</p>
                        <p className="text-xl font-medium">{user.email}</p>
                      </div>
                      <Button variant="outline" className="text-base px-6">Change</Button>
                    </div>

                    <div className="flex items-center justify-between pb-6 border-b">
                      <div>
                        <p className="text-base text-muted-foreground mb-2">Phone Number</p>
                        <p className="text-xl font-medium">{user.phone}</p>
                      </div>
                      <Button variant="outline" className="text-base px-6">Change</Button>
                    </div>

                    <div className="flex items-center justify-between pb-6">
                      <div>
                        <p className="text-base text-muted-foreground mb-2">Current Password</p>
                        <p className="text-xl font-medium">••••••••</p>
                      </div>
                      <Button variant="outline" className="text-base px-6">Change</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-md mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/">
              <Button variant="outline" size="icon" className="rounded-full mb-6">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-3">Welcome Back</h1>
            <p className="text-muted-foreground text-lg">Sign in to your account or create a new one</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                  <TabsTrigger value="login" className="text-lg">Sign In</TabsTrigger>
                  <TabsTrigger value="register" className="text-lg">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        className="pl-12 h-14 text-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="password" className="text-base">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-12 pr-12 h-14 text-lg"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full w-12"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-base">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded w-4 h-4" />
                      <span>Remember me</span>
                    </label>
                    <Button variant="link" className="p-0 h-auto text-base">
                      Forgot password?
                    </Button>
                  </div>

                  <Button 
                    className="w-full gradient-primary text-white h-14 text-lg font-semibold"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Sign In
                  </Button>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-base uppercase">
                      <span className="bg-background px-3 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full h-14 text-lg"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Gmail
                  </Button>
                </TabsContent>

                <TabsContent value="register" className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="fullname" className="text-base">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="fullname" 
                        type="text" 
                        placeholder="Enter your full name"
                        className="pl-12 h-14 text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-base">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+880 1234 567890"
                        className="pl-12 h-14 text-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="reg-email" className="text-base">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="reg-email" 
                        type="email" 
                        placeholder="Enter your email"
                        className="pl-12 h-14 text-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="reg-password" className="text-base">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="reg-password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-12 pr-12 h-14 text-lg"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full w-12"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </Button>
                    </div>
                  </div>

                  <div className="text-base">
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded mt-1 w-4 h-4" />
                      <span className="text-muted-foreground">
                        I agree to the <Button variant="link" className="p-0 h-auto text-base">Terms of Service</Button> and <Button variant="link" className="p-0 h-auto text-base">Privacy Policy</Button>
                      </span>
                    </label>
                  </div>

                  <Button 
                    className="w-full gradient-primary text-white h-14 text-lg font-semibold"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Create Account
                  </Button>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-base uppercase">
                      <span className="bg-background px-3 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full h-14 text-lg"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Gmail
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center text-sm">
            <div>
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <ShoppingBag className="w-5 h-5 text-success" />
              </div>
              <p className="text-muted-foreground">Track Orders</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground">Save Favorites</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <CreditCard className="w-5 h-5 text-warning" />
              </div>
              <p className="text-muted-foreground">Secure Payment</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;