import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitContactForm } from '../services/api';

describe('submitContactForm', () => {
  const MOCK_URL = 'https://script.google.com/macros/s/MOCK_ID/exec';

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
    vi.stubEnv('VITE_GOOGLE_SCRIPT_URL', MOCK_URL);
  });

  it('should return success when fetch is successful', async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, message: 'Success' }),
    });

    const result = await submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      company: 'Test Co',
      city: 'Test City',
      state: 'TS',
      message: 'Hello',
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe('Message sent successfully.');
    expect(fetch).toHaveBeenCalledWith(MOCK_URL, expect.any(Object));
  });

  it('should return success even when fetch returns error (due to no-cors opaque response)', async () => {
    // Note: in no-cors mode, fetch doesn't throw on 4xx/5xx and returns opaque response
    (fetch as any).mockResolvedValue({
      ok: false, // In reality, opaque response has ok: false, status: 0
      status: 0,
    });

    const result = await submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      company: 'Test Co',
      city: 'Test City',
      state: 'TS',
      message: 'Hello',
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe('Message sent successfully.');
  });

  it('should simulate success when URL is not configured', async () => {
    vi.stubEnv('VITE_GOOGLE_SCRIPT_URL', 'YOUR_SCRIPT_ID_HERE');

    const result = await submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      company: 'Test Co',
      city: 'Test City',
      state: 'TS',
      message: 'Hello',
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe('Message sent successfully.');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('should handle network errors gracefully', async () => {
    (fetch as any).mockRejectedValue(new Error('Network Error'));

    const result = await submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      company: 'Test Co',
      city: 'Test City',
      state: 'TS',
      message: 'Hello',
    });

    expect(result.success).toBe(false);
    expect(result.message).toBe('Network Error');
  });
});
