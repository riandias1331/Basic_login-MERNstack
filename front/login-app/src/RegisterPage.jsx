import { useState } from "react";

export default function RegisterPage({ onGoToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setError("Preencha todos os campos");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }
    setError("");
    alert(`Cadastro realizado com sucesso! Email: ${email}`);
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Registro</h2>
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
        <input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <button 
          onClick={handleRegister} 
          style={{
            width: "100%", padding: "10px", backgroundColor: "green", 
            color: "white", border: "none", borderRadius: "4px", cursor: "pointer"
          }}
        >
          Registrar
        </button>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Já tem uma conta? <button onClick={onGoToLogin} style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}>Entrar</button>
        </p>
      </div>
    </div>
  );
}
