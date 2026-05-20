import React from 'react';

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const errorHandler = (error) => {
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return <div>Something went wrong loading the component.</div>;
  }

  return children;
}
