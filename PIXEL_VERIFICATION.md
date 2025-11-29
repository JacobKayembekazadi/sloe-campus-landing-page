# Meta Pixel Verification Checklist

## ✅ Step 1: Script Loading (DONE!)
You've confirmed the script loads: `fbevents.js` returns 200 OK

## 🔍 Step 2: Check for Tracking Events

### In Browser DevTools:

1. **Open Network Tab** and filter by `tr` or `facebook`
2. **Refresh the page** - You should see:
   ```
   Request URL: https://www.facebook.com/tr?id=1341500910408906&ev=PageView&...
   Status: 200 OK
   ```
   This confirms the pixel initialized and sent a PageView event!

3. **Click a checkout button** - You should see:
   ```
   Request URL: https://www.facebook.com/tr?id=1341500910408906&ev=InitiateCheckout&...
   Status: 200 OK
   ```

### What to Look For:

**PageView Event (on page load):**
- URL contains: `?id=1341500910408906&ev=PageView`
- Should fire automatically when page loads

**InitiateCheckout Event (on button click):**
- URL contains: `?id=1341500910408906&ev=InitiateCheckout`
- Should fire when you click any checkout/CTA button

## 📊 Step 3: Verify in Meta Events Manager

1. Go to: https://business.facebook.com/events_manager2
2. Select your Pixel: **1341500910408906**
3. Click **"Test Events"** in the left sidebar
4. You should see real-time events:
   - ✅ PageView events when you refresh
   - ✅ InitiateCheckout events when you click buttons

## 🎯 Quick Test Commands

Open your browser console and type:

```javascript
// Check if pixel is loaded
window.fbq

// Should return: function() { ... }

// Manually trigger an event (for testing)
fbq('track', 'TestEvent', { test: true });
```

## ✅ Success Indicators

- ✅ Script loads (you've confirmed this!)
- ✅ PageView events fire on page load
- ✅ InitiateCheckout events fire on button clicks
- ✅ Events appear in Meta Events Manager Test Events

If all of these work, your pixel is 100% configured correctly! 🎉

