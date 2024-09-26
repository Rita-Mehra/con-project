import React from "react";

const RightSidebar = () => {
  return (
    <>
      <aside className="fixed top-15 right-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full flex items-center justify-center px-3 py-4 overflow-y-auto bg-slate-100">
          <div className="text-center text-slate-400">
            <h3>Select a Submission</h3>
            <p>to preview its contents</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;
