/**
 * Meta Pixel tracking utility
 * Handles initialization and event tracking for Meta (Facebook) Pixel
 */

declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '';

/**
 * Initialize Meta Pixel with the pixel ID from environment variables
 */
export const initMetaPixel = () => {
  if (!META_PIXEL_ID || typeof window === 'undefined' || !window.fbq) {
    console.warn('Meta Pixel ID not configured or fbq not available');
    return;
  }

  try {
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  } catch (error) {
    console.error('Error initializing Meta Pixel:', error);
  }
};

/**
 * Track a custom event with Meta Pixel
 * @param eventName - Name of the event to track (e.g., 'Lead', 'Purchase', 'ViewContent')
 * @param params - Optional parameters to send with the event
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (!META_PIXEL_ID || typeof window === 'undefined' || !window.fbq) {
    return;
  }

  try {
    window.fbq('track', eventName, params || {});
  } catch (error) {
    console.error(`Error tracking event ${eventName}:`, error);
  }
};

/**
 * Track when a user clicks on a checkout/CTA button
 */
export const trackCheckoutClick = () => {
  trackEvent('InitiateCheckout', {
    content_name: 'Sloe AI Campus Membership',
    content_category: 'Subscription',
    value: 49,
    currency: 'USD',
  });
};

/**
 * Track when a user views the landing page
 */
export const trackPageView = () => {
  trackEvent('PageView');
};

/**
 * Track when a user views specific content
 */
export const trackViewContent = (contentName: string) => {
  trackEvent('ViewContent', {
    content_name: contentName,
  });
};

/**
 * Track when a lead is generated (form submission, etc.)
 */
export const trackLead = (params?: Record<string, unknown>) => {
  trackEvent('Lead', params);
};

/**
 * Track when a lead magnet is downloaded
 */
export const trackLeadMagnetDownload = (contentName: string = '7-Day AI Skill Map') => {
  trackEvent('Lead', {
    content_name: contentName,
    content_category: 'Lead Magnet',
    event_source: 'lead_magnet_download',
  });
};

