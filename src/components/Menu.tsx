import { useAppContext } from "../AppContext";
import Header from "./Header";


const showMenuStyle = "left-0 opacity-100";
const hideMenuStyle = "-left-full opacity-0";
const Menu = () => {
  const {menuShown} = useAppContext();
  return (
    <nav className={`absolute top-0 w-full h-full flex flex-col z-50 shadow-md border-r border-gray-300 transition-all duration-300 ${menuShown ? showMenuStyle : hideMenuStyle}`}>
      <Header headerText="Menu" isMenuHeader />
      <div className="flex-grow bg-white flex justify-center items-center">Menu content</div>
    </nav>
  );
};

export default Menu;