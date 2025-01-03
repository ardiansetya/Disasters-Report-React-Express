import FormAuth from "../components/FormAuth";

const LoginPage = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <FormAuth formTitle={"Welcome!"} formDesc={"Login to your account"} />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
