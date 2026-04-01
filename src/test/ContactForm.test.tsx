import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../pages/contact/ContactForm';
import * as api from '../services/api';

vi.mock('../services/api', () => ({
  submitContactForm: vi.fn(),
}));

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should display validation errors for empty fields', async () => {
    render(<ContactForm />);
    
    fireEvent.submit(screen.getByTestId('contact-form'));

    expect(await screen.findByText(/name is required/i)).toBeTruthy();
    expect(await screen.findByText(/email is required/i)).toBeTruthy();
    expect(await screen.findByText(/message is required/i)).toBeTruthy();
  });

  it('should display validation error for invalid email', async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Valid message' } });
    
    fireEvent.submit(screen.getByTestId('contact-form'));

    expect(await screen.findByText(/invalid email address/i)).toBeTruthy();
  });

  it('should call submitContactForm with valid data', async () => {
    (api.submitContactForm as any).mockResolvedValue({ success: true, message: 'Thank you' });
    render(<ContactForm />);
    
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Inquiry message' } });
    
    fireEvent.submit(screen.getByTestId('contact-form'));

    await waitFor(() => {
      expect(api.submitContactForm).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Inquiry message',
      });
    });

    expect(await screen.findByText(/thank you/i)).toBeTruthy();
  });
});
