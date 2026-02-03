/**
 * Analytics Component - Plausible Analytics
 * Privacy-focused, cookie-free analytics
 * https://plausible.io
 */
import { Helmet } from "react-helmet-async";

interface AnalyticsProps {
  domain?: string;
  enabled?: boolean;
}

/**
 * Plausible Analytics integration
 * - No cookies, GDPR compliant by design
 * - Lightweight (<1KB)
 * - Self-hostable or use plausible.io
 * 
 * To enable:
 * 1. Create account at https://plausible.io
 * 2. Add your domain
 * 3. Set VITE_ANALYTICS_ENABLED=true in .env
 */
export default function Analytics({ 
  domain = "isdataconsulting.com",
  enabled = import.meta.env.PROD && import.meta.env.VITE_ANALYTICS_ENABLED === "true"
}: AnalyticsProps) {
  if (!enabled) {
    return null;
  }

  return (
    <Helmet>
      <script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
      />
    </Helmet>
  );
}

/**
 * Track custom events
 * Usage: trackEvent('Contact Form Submit', { service: 'Data Engineering' })
 */
export function trackEvent(
  eventName: string,
  props?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && "plausible" in window) {
    (window as Window & { plausible: (event: string, options?: { props: Record<string, string | number | boolean> }) => void }).plausible(eventName, { props: props || {} });
  }
}
