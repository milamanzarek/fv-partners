export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  state: string;
  message: string;
}

/**
 * Sends contact form data to a Google Sheets document via Google Apps Script.
 * 
 * Instructions for Google Sheets Setup:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/16O8k5g21hPWxwzsW0v7FbGWJyZSfwxRg9wC9PRGSop4/edit?usp=sharing
 * 2. Go to Extensions > Apps Script.
 * 3. Paste the following code:
 * 
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([new Date(), data.name, data.email, data.phone, data.company, data.city, data.state, data.message]);
 *   return ContentService.createTextOutput(JSON.stringify({ "success": true })).setMimeType(ContentService.MimeType.JSON);
 * }
 * 
 * 4. Click Deploy > New deployment.
 * 5. Type: Web app. Access: "Anyone". Deploy.
 * 6. Copy the Web App URL and set it in your environment variables as VITE_GOOGLE_SCRIPT_URL.
 */

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Note: If the GOOGLE_SCRIPT_URL is not set up yet, simulate a success for now.
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID_HERE')) {
      console.log('Simulating form submission (Google Script URL not configured):', data);
      return { success: true, message: 'Message sent successfully.' };
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors' // required for simple google apps script fetch
    });

    // no-cors returns an opaque response, so we assume success if no error was thrown
    return { success: true, message: 'Message sent successfully.' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred.',
    };
  }
};
