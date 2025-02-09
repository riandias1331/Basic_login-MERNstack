import { useState } from "react";

export default function LoginPage({ onGoToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }
    setError("");
    alert(`Login bem-sucedido! Email: ${email}`);
  };

  return (
    <div style={{ 
      display: "flex", justifyContent: "center", alignItems: "center", 
      height: "100vh", backgroundColor: "#f3f3f3" 
    }}>
      <div style={{
        width: "350px", padding: "20px", backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "8px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <button 
          onClick={handleLogin} 
          style={{
            width: "100%", padding: "10px", backgroundColor: "blue", 
            color: "white", border: "none", borderRadius: "4px", cursor: "pointer"
          }}
        >
          Entrar
        </button>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Não tem uma conta? <button onClick={onGoToRegister} style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}>Registre-se</button>
        </p>
      </div>
    </div>
  );
}
