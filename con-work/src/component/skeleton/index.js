import React from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import RightSidebar from '../sidebar/right-side';
import ErrorBoundary from "../ErrorBoundary";

const SkeletonDiv = (props) => {
    return (
      <div className="outer-space">
        <ErrorBoundary>
          <div>
            <Navbar />
            <Sidebar />
            <RightSidebar/>
            <div className="child-wrapper ml-[260px] mr-[260px]">
              <div className="m-3">{props.children}</div>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  };

export default SkeletonDiv;