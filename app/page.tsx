"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MenuIcon, X, Truck, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function TowingCompanyApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cost, setCost] = useState(0);
  const [dropOfLocation, setDropOfLocation] = useState("");

  const [pickUpLocation, setpickUpLocation] = useState("");
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const calculateCost = () => {
    setCost(93);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">TOWING GURU</span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <Link href="#services">
                    <Button variant="ghost">Services</Button>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <Button variant="ghost">About</Button>
                  </Link>
                </li>
                <li>
                  <Link href="#cost estimator">
                    <Button variant="ghost">Cost estimator</Button>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <Button variant="ghost">Contact</Button>
                  </Link>
                </li>
              </ul>
            </nav>
            <Button
              variant="outline"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end">
              <Button variant="outline" onClick={toggleMobileMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-4">
                <li>
                  <Button
                    variant="ghost"
                    className="w-full text-left"
                    onClick={toggleMobileMenu}
                  >
                    Services
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full text-left"
                    onClick={toggleMobileMenu}
                  >
                    About
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full text-left"
                    onClick={toggleMobileMenu}
                  >
                    Cost calculator
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full text-left"
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <main>
        <div className="grid place-items-center">
          <Button size="sm" variant="secondary" className="m-2 bg-[#020617]">
            <Link className="text-white hover:text-[#be123c]" href="tel:+1 469-258-5101">Call Now: +1 469-258-5101</Link>
          </Button>
        </div>
        <section id="testimonials" className="py-20">
          <div className="container flex flex-col mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Cost estimator
            </h2>

            <Input
              value={pickUpLocation}
              onChange={(e) => {
                setpickUpLocation(e.target.value);
              }}
              className="m-2 max-w-64"
              type="teit mostxt"
              placeholder="Pickup location"
              required
            />
            <Input
              value={dropOfLocation}
              onChange={(e) => {
                setDropOfLocation(e.target.value);
              }}
              className="m-2 max-w-64"
              type="email"
              placeholder="Drop of location"
              required
            />
            <p className="text-xl m-2">Cost:{cost}</p>

            <Button
            size="sm"
            
              onClick={() => {
                calculateCost();
              }}
              className="m-2 bg-black w-64"
            >
              Calculate
            </Button>
          </div>
        </section>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">24/7 Towing Services</h1>
              <p className="text-xl mb-8">
                Fast, reliable, and professional towing when you need it most.
              </p>
              <Button size="lg" variant="secondary">
                <Link href="tel:+1 469-258-5101">
                  Call Now: +1 469-258-5101
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Towing</h3>
                  <p>24/7 towing services for cars, trucks, and motorcycles.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <MenuIcon className="h-12 w-12 text-primary mb-4" />

                  <h3 className="text-xl font-semibold mb-2">
                    Roadside Assistance
                  </h3>
                  <p>Jump starts, tire changes, and fuel delivery services.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Emergency Services
                  </h3>
                  <p>Rapid response for accidents and breakdowns.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                About Towing Guru
              </h2>
              <p className="mb-4">
                Towing Guru has been providing reliable towing and roadside
                assistance services. Our team of experienced professionals is
                committed to delivering fast, efficient, and friendly service to
                our customers.
              </p>
              <p>
                We understand that vehicle breakdowns and accidents can be
                stressful, which is why we&apos;re available 24/7 to help you
                get back on the road as quickly as possible. With our
                state-of-the-art equipment and highly trained staff, you can
                trust Towing Guru for all your towing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What Our Customers Say
            </h2>
            <div className="grid place-items-center">
              <Card className="m-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p className="mb-4">
                    Quick Tow saved my day! They arrived within 20 minutes of my
                    call and got my car running in no time. Highly recommended!
                  </p>
                  <p className="font-semibold">- Sarah M.</p>
                </CardContent>
              </Card>
              <Card className="m-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p className="mb-4">
                    Professional and courteous service. The driver was very
                    helpful and explained everything clearly. I&lsquo;ll
                    definitely use Quick Tow again if needed.
                  </p>
                  <p className="font-semibold">- John D.</p>
                </CardContent>
              </Card>
              <Button className="m-2" size="lg" variant="secondary">
                <Link href="https://www.google.co.ke/search?ibp=gwp;0,7&q=TOWING+GURU&ludocid=4747650314405487089&lsig=AB86z5XycuqH9pZwevVPUgTrLLYT#lkt=LocalPoiReviews">
                  Reviews
                </Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input type="tel" placeholder="Your Phone" required />
                <Textarea placeholder="Your Message" required />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Truck className="h-8 w-8 inline-block mr-2" />
              <span className="text-xl font-bold">Towing Guru</span>
            </div>
            <div>
              <p>&copy; 2024 Towing Guru. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
