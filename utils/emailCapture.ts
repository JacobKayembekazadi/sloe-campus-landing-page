/**
 * Email capture utility for lead magnet
 * Handles email submission to backend/API endpoint
 * Ready for integration with ConvertKit, Mailchimp, or custom API
 */

const LEAD_MAGNET_API_URL = import.meta.env.VITE_LEAD_MAGNET_API_URL || '/api/subscribe';

export interface EmailCaptureResponse {
  success: boolean;
  message?: string;
  downloadUrl?: string;
  error?: string;
}

/**
 * Submit email for lead magnet
 * @param email - User's email address
 * @returns Promise with response containing success status and optional download URL
 */
export const submitEmailForLeadMagnet = async (
  email: string
): Promise<EmailCaptureResponse> => {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: 'Please enter a valid email address',
    };
  }

  // Mock success for local development if API URL is not set or if we are in DEV mode
  if (!LEAD_MAGNET_API_URL || import.meta.env.DEV) {
    console.log('[DEV] Mocking email submission:', email);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Success! Check your email for the download link.',
      downloadUrl: '/The-7-Day-AI-Build-Sprint.pdf', // Updated lead magnet
    };
  }

  try {
    const response = await fetch(LEAD_MAGNET_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Success! Check your email for the download link.',
      downloadUrl: data.downloadUrl,
    };
  } catch (error) {
    console.error('Error submitting email:', error);
    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
};

