import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      {/* Newsletter Section */}
      <div className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Latest Offers
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            products, exclusive deals, and special offers.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="gradient-primary text-white">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-foreground">
                👑 <span className="text-primary">King </span> Shop
              </div>
              <p className="text-muted-foreground">
                Your trusted partner for premium products and accessories. We
                deliver quality, authenticity, and exceptional service.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="p-2">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Contact",
                  "Blog",
                  "Pre-order",
                  "Offers",
                  "Compare Products",
                  "Track Order",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Categories</h4>
              <ul className="space-y-3">
                {[
                  "iPhone",
                  "iPad",
                  "MacBook",
                  "Apple Watch",
                  "AirPods",
                  "Accessories",
                  "Used Devices",
                ].map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    123 Tech Street, Digital City, TC 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+8801XXXXXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    support@applegadgets.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 AppleGadgets. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
