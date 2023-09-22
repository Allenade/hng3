import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";

function Navbar({ input }) {
  return (
    <>
      <nav className="p-4 bg-blue-500">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo */}

          {/* Navigation Links */}
          <ul className="flex space-x-4 ">
            <li className="mr-8 md:mr-8">
              {" "}
              {/* Added margin and responsive margin */}
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
            </li>
          </ul>
          <SearchBar input={input} />

          {/* Login Button */}
          {/* <button className="px-4 py-2 text-blue-500 bg-white rounded-md hover:bg-blue-200">
            Login
          </button> */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
