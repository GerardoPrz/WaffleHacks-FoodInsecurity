import LoginForm from "./auth/login";
import RegisterForm from "./auth/register";
import RecoverPasswordForm from "./auth/recover-password";
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
