export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/contact-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to submit the form. Please try again later.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred.',
    };
  }
};
