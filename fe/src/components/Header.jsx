import { useSelector } from "react-redux";

const Header = () => {
  const {name} = useSelector((state) => state.user);

  return (
    <div className="sticky top-0 mx-5 ">
      <div className="flex justify-between items-center bg-slate-500 p-5 rounded-xl  text-white">
        <h1 className="text-2xl font-bold">Welcome!</h1>
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header