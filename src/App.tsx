import React from "react";
import "./App.css";
import { UnauthenticatedApp } from "unauthenticated-app";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
