'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm({ defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    date: '',
    service: defaultService,
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_placeholder',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_placeholder',
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_placeholder'
      );
      setStatus('success');
      setFormData({
        name: '', phone: '', email: '', pickup: '', drop: '', date: '', service: defaultService, message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 relative overflow-hidden" id="booking-form">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-0"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-dark mb-2">Book a Cab</h3>
        <p className="text-gray-600 mb-6 text-sm">Fill out the form below and we'll confirm your booking shortly.</p>

        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200">
            Thank you! Your booking request has been sent successfully. We will contact you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
            Something went wrong. Please try calling us directly or WhatsApp us.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
              <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white">
                <option value="" disabled>Select a service</option>
                <option value="Local Cab Booking">Local Cab Booking</option>
                <option value="Outstation Taxi">Outstation Taxi</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Corporate Cabs">Corporate Cabs</option>
                <option value="Tour Package">Tour Package</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location *</label>
              <input required type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="e.g. J.P. Nagar" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
              <input type="text" name="drop" value={formData.drop} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="e.g. Airport / Mysore" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date *</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements / Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Any specific vehicle preference or requirement?"></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary text-dark font-bold py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Confirm Booking <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
