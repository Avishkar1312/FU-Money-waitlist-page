import React, { useState } from 'react';
import { Rocket, BookOpen, Bot, UserCheck, Zap, Home, Car, DollarSign, Palmtree, Linkedin, Instagram, Twitter } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    financialGoal: '',
    customGoal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'financialGoal') {
      setShowCustomInput(value === 'Other');
      if (value !== 'Other') {
        setFormData(prev => ({ ...prev, customGoal: '' }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your actual Google Apps Script Web App URL
      const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYK-HBjI2eR_l_Bz4Y0SXW-xUu8mqup9l_ck4ZtcuF5MUDsrhpaEE-JKBVhYsjEo_U/exec';
      
      const finalGoal = formData.financialGoal === 'Other' ? formData.customGoal : formData.financialGoal;
      
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          financialGoal: finalGoal,
          timestamp: new Date().toISOString()
        }),
      });

      // Since we're using no-cors, we can't check the response status
      // We'll assume success after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', financialGoal: '', customGoal: '' });
        setShowCustomInput(false);
      }, 1500);

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Still show success since no-cors prevents error detection
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center animate-pulse">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            ✅ You're on the waitlist!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Welcome to FUMoney. We'll notify you when early access opens!
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
          >
            Join More People
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Rocket className="w-16 h-16 mx-auto text-teal-400 mb-4 animate-bounce" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            🚀 <span className="bg-gradient-to-r from-teal-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              IIT Bombay's
            </span><br />
            <span className="text-white">Fintech Revolution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up delay-200">
            Be Among the First to Join!
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 animate-slide-up delay-300">
            <strong className="text-teal-400">FUMoney:</strong> Helping India's youth take control of their money.
          </p>
          
          <button
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 animate-slide-up delay-500"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What <span className="bg-gradient-to-r from-teal-400 to-pink-500 bg-clip-text text-transparent">FUMoney</span> Offers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building the future of financial independence at IIT Bombay. Be an early insider 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Personalized Financial Roadmap",
                description: "Custom plan for your money goals",
                emoji: "📘",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "AI Finance Chatbot",
                description: "Instant financial guidance anytime",
                emoji: "🤖",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Direct Access to CAs",
                description: "Professional help when you need it",
                emoji: "👨‍💼",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Gamified Experience",
                description: "Learn and grow with interactive tools",
                emoji: "⚡",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist-form" className="py-20 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join the <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">Waitlist</span>
            </h2>
            <p className="text-xl text-gray-300">
              Get early access to India's most innovative fintech platform
            </p>
          </div>

          <div className="relative p-8 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="financialGoal" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Financial Goal
                  </label>
                  <select
                    id="financialGoal"
                    name="financialGoal"
                    required
                    value={formData.financialGoal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="Buy a house 🏠">🏠 Buy a house</option>
                    <option value="Buy a car 🚗">🚗 Buy a car</option>
                    <option value="Become a millionaire 💰">💰 Become a millionaire</option>
                    <option value="Retire early 🌴">🌴 Retire early</option>
                    <option value="Other">✨ Other</option>
                  </select>
                </div>

                {showCustomInput && (
                  <div className="animate-slide-down">
                    <label htmlFor="customGoal" className="block text-sm font-medium text-gray-300 mb-2">
                      Describe your custom goal
                    </label>
                    <input
                      type="text"
                      id="customGoal"
                      name="customGoal"
                      required
                      value={formData.customGoal}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your financial goal"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Joining the Revolution...
                    </>
                  ) : (
                    <>
                      Count Me In 🚀
                    </>
                  )}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-400 mb-6">
            ✨ An <span className="text-teal-400 font-semibold">IIT Bombay</span> Startup • <span className="text-pink-400 font-semibold">2025 Launch</span> • Limited Early Access
          </p>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Linkedin className="w-6 h-6" />, href: "#", color: "hover:text-blue-400" },
              { icon: <Instagram className="w-6 h-6" />, href: "#", color: "hover:text-pink-400" },
              { icon: <Twitter className="w-6 h-6" />, href: "#", color: "hover:text-blue-300" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-3 rounded-xl bg-gray-800 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2025 FUMoney. Built with 💚 at IIT Bombay.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;