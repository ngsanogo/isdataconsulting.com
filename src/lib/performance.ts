/* Production optimizations and performance monitoring */

// Performance API helper
export const performance = {
  mark: (name: string) => {
    if (window.performance?.mark) {
      window.performance.mark(name);
    }
  },

  measure: (name: string, startMark: string, endMark: string) => {
    if (window.performance?.measure) {
      try {
        window.performance.measure(name, startMark, endMark);
      } catch (error) {
        console.error('Performance measurement failed:', error);
      }
    }
  },

  logMetrics: () => {
    if (window.performance?.getEntriesByType) {
      const metrics = window.performance.getEntriesByType('measure');
      metrics.forEach((metric) => {
        console.log(`${metric.name}: ${metric.duration.toFixed(2)}ms`);
      });
    }
  },
};

// Resource prefetching for better performance
export const prefetchResource = (url: string, type: 'dns-prefetch' | 'preconnect' | 'prefetch' = 'prefetch') => {
  const link = document.createElement('link');
  link.rel = type;
  link.href = url;
  document.head.appendChild(link);
};

// Track Core Web Vitals
export const trackWebVitals = (metric: any) => {
  // Only log in development or when explicitly enabled
  if (import.meta.env.MODE === 'development') {
    console.log(metric);
  }
};
