import FormLoginAuth from "../components/FormLoginAuth";

const LoginPage = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <FormLoginAuth
            formTitle={"Welcome Back!"}
            formDesc={"Login to your account"}
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
