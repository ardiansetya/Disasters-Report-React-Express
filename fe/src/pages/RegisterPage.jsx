import FormRegisterAuth from "../components/FormRegisterAuth";

const RegisterPage = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <FormRegisterAuth
            formTitle={"Welcome!"}
            formDesc={"Register your account"}
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
