import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnnameReact, setbtnnameReact] = useState("LogIn");

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-12 w-auto" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-600 transition">
                Cart
              </Link>
            </li>
          </ul>
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
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
