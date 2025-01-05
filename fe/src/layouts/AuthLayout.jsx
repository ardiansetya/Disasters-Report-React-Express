
const AuthLayout = ({children}) => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          {children}
        </div>
      </div>
    </section>
  );
}

export default AuthLayout