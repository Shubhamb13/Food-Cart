import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnnameReact, setbtnnameReact] = useState("LogIn");

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-10 sm:h-12 w-auto" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className="flex sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 sm:p-4">
          <ul className="flex sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-700 font-medium">
            <li className="px-2 py-1 sm:px-0 sm:py-0">
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li className="px-2 py-1 sm:px-0 sm:py-0">
              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li className="px-2 py-1 sm:px-0 sm:py-0">
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
            <li className="px-2 py-1 sm:px-0 sm:py-0">
              <Link to="/cart" className="hover:text-blue-600 transition">
                Cart
              </Link>
            </li>
          </ul>

          <button
            className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => setbtnnameReact("Logout")}
          >
            {btnnameReact}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
