import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight, Calendar } from 'lucide-react';
import { submitContactForm } from '../../services/api';
import { useI18n } from '../../context/I18nContext';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    
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
          <label htmlFor="firstName" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.firstName ? 'text-red-500' : 'text-outline'}`}>
            {errors.firstName || t('First Name')}
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-outline/50 shadow-inner border border-outline ${errors.firstName ? 'border-red-500' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.lastName ? 'text-red-500' : 'text-outline'}`}>
            {errors.lastName || t('Last Name')}
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-outline/50 shadow-inner border border-outline ${errors.lastName ? 'border-red-500' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="email" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.email ? 'text-red-500' : 'text-outline'}`}>
            {errors.email || t('Email')}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-outline/50 shadow-inner border border-outline ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="phone" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.phone ? 'text-red-500' : 'text-outline'}`}>
            {errors.phone || t('Phone Number')}
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-outline/50 shadow-inner border border-outline ${errors.phone ? 'border-red-500' : ''}`}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className={`block font-label text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${errors.message ? 'text-red-500' : 'text-outline'}`}>
          {errors.message || t('Note Your Specific Needs Here')}
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full bg-surface-tier-2 px-5 py-4 text-on-surface font-body text-base outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-outline/50 resize-y shadow-inner border border-outline ${errors.message ? 'border-red-500' : ''}`}
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
          {isSubmitting ? t('Processing...') : t('Submit Inquiry')}
          {!isSubmitting && <ArrowRight className="w-4 h-4" />}
        </button>
        <a 
          href="tel:+13103091620" 
          className="flex-1 surface-tier-3 text-on-surface font-label text-[13px] uppercase tracking-[0.1em] font-semibold py-5 hover:bg-primary hover:text-on-primary transition-colors shadow-sm border border-surface-variant flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          {t('For faster service')} (310) 309-1620
        </a>
      </div>
    </form>
  );
};
