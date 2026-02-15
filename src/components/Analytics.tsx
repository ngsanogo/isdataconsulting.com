import { Helmet } from "react-helmet-async";

interface AnalyticsProps {
  domain?: string;
  enabled?: boolean;
}

export default function Analytics({
  domain = "isdataconsulting.com",
  enabled =
    import.meta.env.PROD && import.meta.env.VITE_ANALYTICS_ENABLED === "true",
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
