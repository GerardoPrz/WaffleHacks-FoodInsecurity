import LoginForm from "./auth/loginForm";
import RegisterForm from "./auth/registerForm";
import RecoverPasswordForm from "./auth/recoverPassword";

export default function AuthPage() {
  return (
    <div>
      <h1>Página de autenticación</h1>

      <section>
        <LoginForm />
      </section>

      <section>
        <RegisterForm />
      </section>

      <section>
        <RecoverPasswordForm />
      </section>
    </div>
  );
}
