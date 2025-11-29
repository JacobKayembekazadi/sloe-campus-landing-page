# Meta Pixel Setup Guide

This guide will help you connect your site data pixel to your Sloe AI ad account.

## Step 1: Get Your Meta Pixel ID

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Select your **Sloe AI** ad account (or create a new one if needed)
3. Click on **"Connect Data Sources"** → **"Web"**
4. Select **"Meta Pixel"**
5. Click **"Connect"** or if you already have a pixel, find it in your Pixel list
6. Copy your **Pixel ID** (it's a 15-16 digit number)

## Step 2: Add Your Pixel ID to the Project

1. Open the `.env.local` file in your project root
2. Replace `YOUR_META_PIXEL_ID_HERE` with your actual Pixel ID:

```env
VITE_META_PIXEL_ID=1234567890123456
```

3. Save the file

## Step 3: Verify the Setup

1. Restart your development server if it's running:
   ```bash
   npm run dev
   ```

2. Open your site in a browser
3. Open the browser's Developer Tools (F12)
4. Go to the **Console** tab
5. You should see the Meta Pixel initializing (no errors)
6. Go to the **Network** tab and filter by "tr" or "facebook"
7. You should see requests to `facebook.com/tr` - this confirms the pixel is firing

## Step 4: Test Conversion Tracking

1. Click any "Join" or checkout button on your landing page
2. Check the Network tab in Developer Tools
3. You should see an `InitiateCheckout` event being sent to Meta
4. In Meta Events Manager, go to **"Test Events"** to see real-time events

## Step 5: Connect Pixel to Your Ad Account

1. In Meta Events Manager, go to **"Settings"** for your Pixel
2. Under **"Ad Accounts"**, click **"Add Ad Account"**
3. Select your Sloe AI ad account
4. The pixel is now connected and ready to track conversions

## Events Being Tracked

The following events are automatically tracked:

- **PageView**: When someone visits any page on your site
- **InitiateCheckout**: When someone clicks any checkout/CTA button

## Additional Event Tracking

You can track additional events by using the utility functions in `utils/pixel.ts`:

```typescript
import { trackEvent, trackLead, trackViewContent } from './utils/pixel';

// Track a custom event
trackEvent('CustomEventName', { param1: 'value1' });

// Track a lead
trackLead({ content_name: 'Contact Form Submission' });

// Track content view
trackViewContent('Course Page');
```

## Troubleshooting

### Pixel Not Firing
- Verify your Pixel ID is correct in `.env.local`
- Make sure the variable starts with `VITE_` (required for Vite)
- Check browser console for errors
- Ensure you've restarted the dev server after adding the Pixel ID

### Events Not Showing in Meta
- Wait a few minutes for events to appear in Events Manager
- Use the "Test Events" tool to verify real-time tracking
- Check that your Pixel is connected to your ad account
- Verify your ad blocker isn't blocking the pixel

### Need Help?
- Check Meta's official documentation: https://www.facebook.com/business/help/952192354843755
- Visit Meta Events Manager: https://business.facebook.com/events_manager2

## Important Notes

- The pixel ID must be prefixed with `VITE_` in the `.env.local` file for Vite to expose it
- Never commit your `.env.local` file with your actual Pixel ID to version control
- The pixel works in both development and production environments
- All checkout links automatically track conversion events when clicked

