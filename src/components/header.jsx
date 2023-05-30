import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="bg-[#ebebeb] py-2">
      <div className="w-content mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="w-[50px] h-[50px] block mr-2">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-cover object-center"
            />
          </Link>
          <Link to="/" className="block mx-2 px-2">
            Home
          </Link>
          <Link to="/manage-user" className="block mx-2 px-2">
            Quản lý người dùng
          </Link>
        </div>
        <div>
          <div className="relative group">
            <span className="cursor-pointer">
              Setting <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <button className="absolute top-full left-0 hidden group-hover:block shadow-sm hover:bg-[#ccc] w-16">Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
