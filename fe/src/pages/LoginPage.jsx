import FormLoginAuth from "../components/FormLoginAuth";
import AuthLayout from "../layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <FormLoginAuth
        formTitle={"Welcome Back!"}
        formDesc={"Login to your account"}
      />
    </AuthLayout>
  );
};

export default LoginPage;
