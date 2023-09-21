import SearchBar from "./Searchbar";

export default function Navbar({ input }) {
  return (
    <>
      <nav className="p-4 bg-blue-500">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="text-xl font-bold text-white">Your Logo</div>

          {/* Navigation Links */}
          <ul className="flex space-x-4 ">
            <li className="mr-8 md:mr-8">
              {" "}
              {/* Added margin and responsive margin */}
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </li>
          </ul>
          <SearchBar input={input} />

          {/* Login Button */}
          <button className="px-4 py-2 text-blue-500 bg-white rounded-md hover:bg-blue-200">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
