import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
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
    // Clear error when user starts typing
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
    <form className="space-y-8" onSubmit={handleSubmit} data-testid="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group">
          <input
            type="text"
            id="name"
            data-testid="name-input"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-muted/30'} text-white py-2 font-body text-lg focus:outline-none focus:border-accent transition-colors peer placeholder-transparent`}
            placeholder="Full Name"
            disabled={isSubmitting}
          />
          <label
            htmlFor="name"
            className={`absolute left-0 top-2 ${errors.name ? 'text-red-500' : 'text-muted'} font-ui text-sm uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs`}
          >
            {errors.name || 'Full Name'}
          </label>
        </div>
        <div className="relative group">
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-muted/30'} text-white py-2 font-body text-lg focus:outline-none focus:border-accent transition-colors peer placeholder-transparent`}
            placeholder="Email Address"
            disabled={isSubmitting}
          />
          <label
            htmlFor="email"
            className={`absolute left-0 top-2 ${errors.email ? 'text-red-500' : 'text-muted'} font-ui text-sm uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs`}
          >
            {errors.email || 'Email Address'}
          </label>
        </div>
      </div>
      <div className="relative group pt-4">
        <textarea
          id="message"
          data-testid="message-input"
          rows={1}
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-muted/30'} text-white py-2 font-body text-lg focus:outline-none focus:border-accent transition-colors peer placeholder-transparent resize-none overflow-hidden`}
          placeholder="How can we assist you?"
          disabled={isSubmitting}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = `${target.scrollHeight}px`;
          }}
        ></textarea>
        <label
          htmlFor="message"
          className={`absolute left-0 top-6 ${errors.message ? 'text-red-500' : 'text-muted'} font-ui text-sm uppercase tracking-widest transition-all peer-focus:-top-1 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:-top-1 peer-not-placeholder-shown:text-xs`}
        >
          {errors.message || 'How can we assist you?'}
        </label>
      </div>
      
      {submitStatus && !submitStatus.success && (
        <div className="text-sm font-body text-red-500 mb-4">
          {submitStatus.message}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary-lg disabled:opacity-50 disabled:cursor-not-allowed flex-1"
        >
          {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
        </button>
        <a 
          href="tel:+13105550198" 
          className="btn-primary-lg bg-secondary/20 hover:bg-secondary border-secondary/30 flex-1"
        >
          <Phone className="w-4 h-4" />
          Call Us Now
        </a>
      </div>
    </form>
  );
};
