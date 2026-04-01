import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitContactForm } from '../services/api';

describe('submitContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('should return success when proxy returns 200', async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, message: 'Success' }),
    });

    const result = await submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello',
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe('Success');
    expect(fetch).toHaveBeenCalledWith('/api/contact-proxy', expect.any(Object));
  });

  it('should return error message when proxy returns non-ok status', async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ message: 'Failed to submit' }),
    });

    const result = await submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello',
    });

    expect(result.success).toBe(false);
    expect(result.message).toBe('Failed to submit');
  });

  it('should handle network errors gracefully', async () => {
    (fetch as any).mockRejectedValue(new Error('Network Error'));

    const result = await submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello',
    });

    expect(result.success).toBe(false);
    expect(result.message).toBe('Network Error');
  });
});
