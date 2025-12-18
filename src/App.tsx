import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Dumbbell, Clock, MapPin, Phone, Mail, Waves, Coffee, Baby, Activity, Thermometer, Snowflake, Heart } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showWheel, setShowWheel] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '' });
  const [spinning, setSpinning] = useState(false);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.age) {
      setShowWheel(true);
    }
  };

  const spinWheel = () => {
    setSpinning(true);
    const rewards = ['10%', '20%', '25%', '30%', '50%'];
    setTimeout(() => {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
      setDiscount(parseInt(randomReward));
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-blue-200 dark:border-gray-700 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Fitclass</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="text-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 dark:bg-blue-800/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-gray-800 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
            #FitByChoice - Premium Fitness Club
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent leading-tight">
            <Typewriter
              options={{
                strings: ['Transform Your Life at Fitclass', 'Premium Fitness Club', '#FitByChoice'],
                autoStart: true,
                loop: false,
                delay: 75,
                deleteSpeed: 50,
                cursor: '|',
                cursorClassName: 'typewriter-cursor'
              }}
            />
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience premium fitness at Gurugram's most advanced 24×7 facility with 80+ workout stations, wellness amenities, and personalized training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('join-form')?.scrollIntoView({behavior: 'smooth'})}
            >
              Join Fitclass Today
            </Button>
            <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-300">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Open 24×7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-100 dark:bg-gray-800 p-4 rounded-full">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Location</h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                Tulip Chowk, Plot No.2, Opp. Elan Epic Mall<br />
                Tulip Violet Society, Sector-69<br />
                Gurugram, Haryana
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-100 dark:bg-gray-800 p-4 rounded-full">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Call Us</h3>
              <p className="text-lg font-semibold text-blue-600">+91-73035-60888</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-100 dark:bg-gray-800 p-4 rounded-full">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Email</h3>
              <p className="text-blue-600 font-medium">info@fitclass.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-blue-700 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">Premium Amenities</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">Experience luxury fitness with our world-class facilities and wellness services</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dumbbell, title: "80+ Workout Stations", desc: "Advanced equipment for every fitness goal" },
              { icon: Thermometer, title: "Steam & Ice Baths", desc: "Recovery and relaxation therapy" },
              { icon: Waves, title: "Jacuzzi", desc: "Luxury hydrotherapy experience" },
              { icon: Heart, title: "Massage Recovery", desc: "Professional massage therapy" },
              { icon: Activity, title: "BCA Body Testing", desc: "Advanced body composition analysis" },
              { icon: Coffee, title: "CCD Coffee", desc: "Premium coffee and refreshments" },
              { icon: Snowflake, title: "Detox Drinks", desc: "Healthy beverages and smoothies" },
              { icon: Baby, title: "Kids Room", desc: "Safe space for your children" }
            ].map((amenity, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 p-3 rounded-xl w-fit mb-4">
                  <amenity.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{amenity.title}</h3>
                <p className="text-sm text-slate-600 dark:text-gray-300">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section id="join-form" className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
              <Dumbbell className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-blue-700 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">Join Fitclass Today!</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">Fill your details and spin the wheel for exclusive membership discounts</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-indigo-200 dark:border-gray-600">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 border border-indigo-200 dark:border-gray-600 rounded-xl bg-indigo-50/50 dark:bg-gray-700 text-slate-800 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 border border-indigo-200 dark:border-gray-600 rounded-xl bg-indigo-50/50 dark:bg-gray-700 text-slate-800 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-4 border border-indigo-200 dark:border-gray-600 rounded-xl bg-indigo-50/50 dark:bg-gray-700 text-slate-800 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400 transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
              <input
                type="number"
                placeholder="Age"
                className="p-4 border border-indigo-200 dark:border-gray-600 rounded-xl bg-indigo-50/50 dark:bg-gray-700 text-slate-800 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400 transition-all"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                required
              />
              <div className="md:col-span-2 text-center pt-4">
                <Button type="submit" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  🎯 Spin the Lucky Wheel!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Lucky Wheel Modal */}
      {showWheel && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-blue-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Spin the Lucky Wheel!</h3>
            <div className="relative mx-auto mb-6">
              <div className={`w-56 h-56 mx-auto rounded-full border-8 border-indigo-600 relative overflow-hidden ${spinning ? 'animate-spin-slow' : ''} transition-transform duration-300`}>
                {[10, 15, 20, 25, 30, 35, 40, 50].map((value, index) => (
                  <div
                    key={value}
                    className="absolute w-full h-full flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      transform: `rotate(${index * 45}deg)`,
                      background: `hsl(${200 + index * 20}, 70%, ${50 + index * 5}%)`,
                      clipPath: 'polygon(50% 50%, 50% 0%, 85.36% 14.64%)'
                    }}
                  >
                    <span className="transform -rotate-45">{value}%</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-600"></div>
              </div>
            </div>
            {discount > 0 && !spinning && (
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 fade-in">{discount}% OFF!</div>
                <p className="text-slate-600 dark:text-gray-300">Congratulations! You've won a {discount}% discount on your Fitclass membership!</p>
              </div>
            )}
            <div className="flex space-x-4">
              {!spinning && discount === 0 && (
                <Button onClick={spinWheel} className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">Spin Now!</Button>
              )}
              {discount > 0 && (
                <Button onClick={() => {setShowWheel(false); setShowForm(false);}} className="flex-1 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold">Claim Discount</Button>
              )}
              <Button variant="outline" onClick={() => setShowWheel(false)} className="px-6 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 rounded-xl">Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Fitclass</span>
              </div>
              <p className="text-blue-100 mb-4">#FitByChoice - Premium Fitness Club</p>
              <p className="text-blue-200 text-sm">Transform your life with premium fitness facilities and personalized training.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-blue-100">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91-73035-60888</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@fitclass.in</span>
                </p>
                <p className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span className="text-sm">Tulip Chowk, Plot No.2, Opp. Elan Epic Mall, Tulip Violet Society, Sector-69, Gurugram</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Operating Hours</h4>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-300" />
                  <span className="font-semibold">24×7 Open</span>
                </div>
                <p className="text-blue-200 text-sm">Always open for your convenience</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-blue-200">© 2024 Fitclass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
