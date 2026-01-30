import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary - Capture les erreurs React et affiche un fallback UI
 * Évite que toute l'application crashe en cas d'erreur dans un composant
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-semibold mb-3">
              Une erreur est survenue
            </h1>
            <p className="opacity-60 mb-6">
              Nous nous excusons pour la gêne occasionnée.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Recharger la page
            </button>
            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-sm opacity-40 cursor-pointer">
                  Détails techniques
                </summary>
                <pre className="mt-2 text-xs opacity-40 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
