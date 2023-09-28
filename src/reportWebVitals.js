import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToGoogleAnalytics({ name, delta, id }) {
  window.gtag('event', name, {
    event_category: 'Web Vitals',
    value: Math.round(name === 'CLS' ? delta * 1000 : delta), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(sendToGoogleAnalytics);
    getFID(sendToGoogleAnalytics);
    getFCP(sendToGoogleAnalytics);
    getLCP(sendToGoogleAnalytics);
    getTTFB(sendToGoogleAnalytics);
  }
};

export default reportWebVitals;