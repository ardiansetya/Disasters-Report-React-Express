import FormRegisterAuth from "../components/FormRegisterAuth";
import AuthLayout from "../layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <FormRegisterAuth
        formTitle={"Welcome!"}
        formDesc={"Register your account"}
      />
    </AuthLayout>
  );
};

export default RegisterPage;
