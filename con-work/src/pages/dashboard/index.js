import React, { useState } from "react";
import SkeletonDiv from "../../component/skeleton";
import ThemeButton from "../../component/button";
import ListInfo from "../../component/list";

const Dashboard = () => {
  const [show, setShow] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  const created = [
    { id: 1, list: "Created1" },
    { id: 2, list: "Created2" },
    { id: 3, list: "Created3" }
  ];

  const listData = [
    {
      id: "insure",
      title: "insurfillc",
      status: "Incomplete",
      date: "Mar 21, 2023",
    },
    {
      id: "convr",
      title: "convr",
      status: "Demo Label",
      date: "Feb 25, 2023",
    }
    
  ];

  return (
    <SkeletonDiv>
      <div className="flex justify-end text-sm border-solid border-b-2 pb-4 border-slate-300">
        <div className="border-b-slate-500 border mr-3 flex">
          <div className="relative">
            <button
              type="button"
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
              onClick={handleClick}
            >
              <span className="flex-1 mr-2 text-left whitespace-nowrap text-slate-800">
                Created
              </span>
              <img src="images/chevron-down.svg" />
            </button>
            {show ? (
              <ul className="absolute mt-3 bg-white rounded shadow-sm top-15 right-0 py-2">
                {created?.map((item) => (
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
            ) : null}
          </div>
        </div>
        <ThemeButton icon={<img src="images/add.svg" />} name="New" />
      </div>
      <div>
        {listData?.map((item) => (
          <ListInfo item={item} key={item.id} />
        ))}
      </div>
    </SkeletonDiv>
  );
};

export default Dashboard;
