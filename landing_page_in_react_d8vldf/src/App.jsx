import React, { useState } from 'react';
    import { Download, Zap, Clock, CheckCircle } from 'lucide-react';

    function App() {
      const [submitted, setSubmitted] = useState(false);
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('https://webhook-processor-production-667f.up.railway.app/webhook/8f1da54e-e9e0-41b5-80ea-cb9701f0d054', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              phone
            })
          });

          if (response.ok) {
            setSubmitted(true);
            setEmail('');
            setPhone('');
          } else {
            console.error('Submission failed');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900 text-white">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-6 bg-gray-900">
            <div className="flex items-center">
              <span className="text-3xl font-bold tracking-wider">AutoAge</span>
            </div>
          </nav>

          {/* Hero Section */}
          <main className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">
                Get Your Free
                <span className="text-purple-400"> AI Automation Guide</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Download our proven implementation guide with ready-to-use templates. We'll instantly customize it for your industry and business size, helping you start automating your processes today.
              </p>

              {/* Quick Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left max-w-3xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200">Step-by-step implementation guide</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200">Customizable templates included</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200">Personalized to your business</p>
                </div>
              </div>

              {/* Lead Capture Form */}
              <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-xl border border-purple-500/20">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-purple-600 rounded-lg font-semibold hover:bg-purple-500 transition-colors flex items-center justify-center gap-2"
                    >
                      Get Instant Access <Download className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-gray-300">
                      Get your industry-specific guide customized instantly
                    </p>
                  </form>
                ) : (
                  <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
                    <h4 className="text-xl font-semibold mb-2">Your guide is on the way!</h4>
                    <p>Check your email in the next few seconds.</p>
                  </div>
                )}
              </div>
            </div>

            {/* What's Inside Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">What's Inside Your Guide</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-xl border border-purple-500/20">
                  <Zap className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Implementation Blueprint</h3>
                  <p className="text-gray-300">Complete roadmap for implementing AI automation in your business processes</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-purple-500/20">
                  <Download className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready-Made Templates</h3>
                  <p className="text-gray-300">Plug-and-play templates to kickstart your automation journey</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-purple-500/20">
                  <Clock className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quick-Start Guide</h3>
                  <p className="text-gray-300">Get started with automation in under 24 hours</p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="text-center bg-gray-800 p-8 rounded-xl border border-purple-500/20 mb-16">
              <h2 className="text-3xl font-bold mb-8">Proven Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-4">
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <p className="text-gray-300">Average time saved on manual tasks</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-purple-400 mb-2">45%</div>
                  <p className="text-gray-300">Reduction in operational costs</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
                  <p className="text-gray-300">Implementation time</p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 mt-16 py-8">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
              <p>&copy; 2025 AutoAge. All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
    }

    export default App;
