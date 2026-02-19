import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías con tu backend o servicio de auth (Firebase, Supabase, etc.)
    console.log("Autenticando...");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Correo electrónico" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">{isLogin ? "Iniciar sesión" : "Registrarse"}</button>
      <p onClick={() => setIsLogin(!isLogin)} style={{cursor:"pointer"}}>
        {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
      </p>
    </form>
  );
};

export default AuthForm;
