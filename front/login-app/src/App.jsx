import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  return isRegistering ? (
    <RegisterPage onGoToLogin={() => setIsRegistering(false)} />
  ) : (
    <LoginPage onGoToRegister={() => setIsRegistering(true)} />
  );
}

export default App;
