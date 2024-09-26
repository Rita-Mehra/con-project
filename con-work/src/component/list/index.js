import React from "react";

const ListInfo = ({ item }) => {
  return (
    <div
      className="border-solid border-b-2 flex justify-between pt-3 pb-3 border-slate-300"
      id={item?.id}
    >
      <div className="flex items-start">
        <input type="checkbox" className="mt-1 default:ring-2 ..." />
        <div className="ml-4">
          <h4>{item?.title}</h4>
          <div className="bg-red-300 mt-2 px-2 text-sm rounded text-rose-700">
            {item?.status}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-end">
          <div className="h-3 w-3 mr-4 bg-yellow-500 rounded-full border-solid border-3 border-yellow-300"></div>
          <div className="flex items-center date">. . .</div>
        </div>
        <div className="text-slate-500">Updated {item?.date}</div>
      </div>
    </div>
  );
};

export default ListInfo;
