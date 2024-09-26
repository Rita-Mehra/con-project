import React from 'react';
import SkeletonDiv from "../../component/skeleton";
import ThemeButton from '../../component/button';

const AllSubmissions = () => {
  return (
    <SkeletonDiv>
     <>
     <ThemeButton icon={<img src="images/add.svg"/>} name="New"/>
     </>
    </SkeletonDiv>
  )
}

export default AllSubmissions;