import React, { useState } from "react";

const Sidebar = () => {
  const [show, setShow] = useState();
  const [label, setLabel] = useState();

  const toggleShow = () => {
    setShow(!show);
  };

  const labelShow = () => {
    setLabel(!label);
  };

  return (
    <>
      <aside className="fixed top-15 left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-100">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100"
              >
                <span className="ml-3 text-slate-800">All Submissions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100"
              >
                <span className="ml-3 text-slate-800">My Submissions</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                onClick={toggleShow}
              >
                <img src="images/chevron-down.svg" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap text-slate-800">
                  Client Labels
                </span>
              </button>
              {show ? (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <div className="flex">
                      <a
                        href="#"
                        className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white"
                      >
                        <img src="images/star.svg" className="mr-2" />
                        <span className="text-slate-800">Approved</span>
                      </a>
                    </div>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                onClick={labelShow}
              >
                <img src="images/chevron-down.svg" />
                <span className="flex-1 ml-3 text-left text-slate-800 whitespace-nowrap">
                  User Labels
                </span>
              </button>
              {label ? (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <div className="flex">
                      <a
                        href="#"
                        className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white"
                      >
                        <img src="images/star.svg" className="mr-2" />
                        <span className="text-slate-800">Archived</span>
                      </a>
                    </div>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
