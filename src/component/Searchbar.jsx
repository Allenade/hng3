export default function SearchBar({ input }) {
  // const filteredItems = getFilteredItems(query, tags);

  return (
    <div className="flex items-center max-w-screen-md p-2 mx-auto">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-10 pr-4 text-gray-500 bg-gray-100 border rounded-full outline-none focus:bg-white focus:border-indigo-600"
          onChange={(e) => input(e.target.value)}
        />
        <span></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
