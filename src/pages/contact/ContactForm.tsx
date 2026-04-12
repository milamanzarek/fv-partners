import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { submitContactForm } from '../../services/api';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    const result = await submitContactForm(formData);
    if (result.success) {
      navigate('/thank-you');
    } else {
      setIsSubmitting(false);
      setSubmitStatus(result);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.name ? 'text-red-500' : 'text-outline'}`}>
            {errors.name || 'Full Name'}
          </label>
          <input
            type="text"
            id="name"
            data-testid="name-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            disabled={isSubmitting}
            className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-0 transition-colors placeholder:text-outline/50 shadow-inner ${errors.name ? 'ring-1 ring-red-500' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="email" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.email ? 'text-red-500' : 'text-outline'}`}>
            {errors.email || 'Professional Email'}
          </label>
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            disabled={isSubmitting}
            className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-0 transition-colors placeholder:text-outline/50 shadow-inner ${errors.email ? 'ring-1 ring-red-500' : ''}`}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.message ? 'text-red-500' : 'text-outline'}`}>
          {errors.message || 'Nature of Inquiry'}
        </label>
        <textarea
          id="message"
          data-testid="message-input"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we assist you?"
          disabled={isSubmitting}
          className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-0 transition-colors placeholder:text-outline/50 resize-y shadow-inner ${errors.message ? 'ring-1 ring-red-500' : ''}`}
        />
      </div>
      
      {submitStatus && !submitStatus.success && (
        <div className="text-sm font-body text-red-500 mb-4 px-2">
          {submitStatus.message}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-tertiary text-on-tertiary font-label text-[13px] uppercase tracking-[0.1em] font-semibold py-5 hover:bg-primary hover:text-on-primary transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
          {!isSubmitting && <ArrowRight className="w-4 h-4" />}
        </button>
        <a 
          href="tel:+13105550198" 
          className="flex-1 surface-tier-3 text-on-surface font-label text-[13px] uppercase tracking-[0.1em] font-semibold py-5 hover:bg-primary hover:text-on-primary transition-colors shadow-md flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Call Us Now
        </a>
      </div>
    </form>
  );
};
