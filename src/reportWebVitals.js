import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

function sendToGoogleAnalytics({ name, delta, id }) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    event_category: "Web Vitals",
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    event_label: id,
    non_interaction: true,
  });
}

function reportWebVitals(onPerfEntry) {
  const handler = onPerfEntry || sendToGoogleAnalytics;
  getCLS(handler);
  getFID(handler);
  getFCP(handler);
  getLCP(handler);
  getTTFB(handler);
}

export default reportWebVitals;
