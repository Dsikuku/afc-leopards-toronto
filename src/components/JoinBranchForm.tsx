"use client";
import { useState } from 'react';
import { Target, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function JoinBranchForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: 'Not Provided (Quick Form)', 
        location: formData.location || 'GTA',
        position: 'Fan / Member',
        experience: 'Submitted via global JoinBranchForm shared component.'
      };

      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application details.');
      }

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', location: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected connection failure occurred.');
    }
  };

  return (
    <section id="join" className="relative mt-28 py-20 px-6 bg-ingwe-concrete/50 border-t-4 border-ingwe-blue overflow-hidden">
      {/* Visual background text effect */}
      <div className="absolute -left-10 top-0 text-[180px] font-black italic tracking-tighter text-black opacity-10 leading-none select-none">
        INGWE
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Context */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <Target className="text-ingwe-blue" size={36} />
            <span className="text-ingwe-blue font-black uppercase tracking-[0.3em] text-xs">Membership Drive 2026</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-6">
            Join <br />The <span className="text-glow-blue text-ingwe-blue">Pride</span>
          </h2>
          <p className="max-w-lg text-gray-300 leading-relaxed italic font-medium">
            Be part of the largest AFC Leopards diaspora community in North America. 
            Connect with fellow fans, and directly support the mother club in Kenya.
          </p>
        </div>

        {/* Right Column: The Form */}
        <div className="bg-black p-8 md:p-12 border border-white/5 shadow-2xl relative">
          {/* SUCCESS MESSAGE BANNER */}
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-3 text-sm">
              <CheckCircle size={18} className="shrink-0" /> Application received! The executive committee will contact you shortly.
            </div>
          )}

          {/* ERROR MESSAGE BANNER */}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3 text-sm">
              <AlertCircle size={18} className="shrink-0" /> {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">First Name</label>
                <input 
                  type="text" 
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John" 
                  className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">Last Name (Optional)</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Mutua" 
                  className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.mutua@example.com" 
                className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" 
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-black tracking-widest text-gray-500 mb-2">Primary Location in GTA (e.g., Scarborough)</label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Scarborough" 
                className="w-full p-4 bg-ingwe-concrete border border-white/10 text-white placeholder:text-gray-600 focus:border-ingwe-blue focus:ring-1 focus:ring-ingwe-blue transition-colors" 
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-3 bg-ingwe-blue text-white px-8 py-5 font-black uppercase italic hover:bg-white hover:text-black transition-all shadow-xl text-lg disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <>
                  Processing Application... <Loader2 className="animate-spin" size={18} />
                </>
              ) : (
                <>
                  Submit My Application <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-gray-600">
            *We respect your privacy. All information remains confidential to the branch leadership.
          </p>
        </div>
      </div>
    </section>
  );
}