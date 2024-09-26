import React, { useState } from "react";

const Navbar = () => {
 
  const [show, setShow] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  const userList = [
    { id: 'name', list: 'John Deo' },
    { id: 'board', list: 'Dashboard' },
    { id: 'log-out', list: 'Log Out' }
  ];

  return (
    <header className="z-[999] relative py-5 bg-slate-800 shadow-bottom dark:bg-gray-800">
      <div className="flex items-center flex-wrap justify-between h-full px-6">
        <div className="flex justifu-between">
          <a href="/" className="flex items-center">
            <img src="images/logo-canvr.svg" />
          </a>
          {/* Search */}
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            {/* Search */}
            <div className="relative md:ml-[100px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="images/search.svg" alt="search" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block min-w-[320px] p-4 pl-10 text-sm text-slate-500 border border-none rounded-lg bg-slate-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-slate-500"
                placeholder="Filter by Name or ID"
                required
              />
            </div>
          </form>
        </div>
        {/* user Menu */}
        <div className="flex items-center justify-end md:order-2">
          <button
            type="button"
            className="flex mr-3 text-xl font-semibold text-white bg-green-500 rounded-full p-4 md:mr-0 dark:focus:ring-gray-600"
            onClick={handleClick}
          >
            JD
          </button>
          {/* user list */}
          {show ? (
          <div
            className="relative z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <ul className="absolute mt-7 bg-white rounded shadow-sm top-15 right-0 py-2">
              {userList?.map((item) => (
                <li className="border-b-slate-500" key={item.id}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item.list}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          ): null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
