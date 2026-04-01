import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Secure Contact Proxy
 * 
 * Mandate: No logging of SPII (Sensitive Personally Identifiable Information).
 * Compliance: GLBA/FTC Safeguards.
 * 
 * This proxy forwards contact form data to the final destination (e.g., email service)
 * without persisting or logging the request body.
 */

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // 1. Method Validation
  if (request.method !== 'POST') {
    return response.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = request.body;

    // 2. Input Validation (Sanitization)
    if (!name || !email || !message) {
      // Log failure event without data
      console.warn('[Security] Contact submission failed: Missing required fields');
      return response.status(400).json({ success: false, message: 'Missing required fields' });
    }

    /**
     * 3. Forwarding Logic
     * 
     * In a production environment, this would interface with a service like
     * SendGrid, AWS SES, or a CRM. For this phase, we simulate success
     * to verify the pipeline architecture.
     * 
     * SECURITY NOTE: Never console.log(request.body) or any variables containing PII.
     */
    
    // Simulate external API call
    // await fetch(process.env.EMAIL_SERVICE_URL, { ... })

    // Log operational metadata only (no SPII)
    console.info(`[Audit] Contact submission processed successfully. Timestamp: ${new Date().toISOString()}`);

    return response.status(200).json({
      success: true,
      message: 'Thank you. Your inquiry has been received and will be reviewed with due care.',
    });
  } catch (error) {
    // Log system errors without leaking data
    console.error('[Security] Contact proxy encountered a system error');
    return response.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
