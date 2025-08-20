import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: 16 }}>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
      </div>
    );
  }
  return <div style={{ padding: 16 }}>Something went wrong</div>;
}