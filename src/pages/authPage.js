import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import RecoverPasswordForm from "./recoverPassword";

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
